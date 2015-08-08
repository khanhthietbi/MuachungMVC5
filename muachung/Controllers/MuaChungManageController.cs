using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using muachung.Models;
using Microsoft.AspNet.Identity;

namespace MuaChungManage.Controllers
{
    public class MuaChungManageController : Controller
    {
        private muachungEntities db = new muachungEntities();

        //
        // GET: /MuaChungManage/

        // Danh sách sản phẩm hiện tại

        public ActionResult Index()
        {
            HttpContext.Server.ScriptTimeout = 1000;
            var obj = Session["S_User"];
            var product = db.SP_GET_PRODUCTS_ALL();
            if (obj == null)
            {
                return RedirectToAction("Login", "AccountLogin");
            }
            return View(product);
            //return View(db.Products.Where(x => x.Deleted == false).OrderBy(x => x.ProductId).ToList());
        }


        // Danh sách sản phẩm đã bị xóa

        public ActionResult DeletedProduct()
        {
            HttpContext.Server.ScriptTimeout = 1000;
            var obj = Session["S_User"];
            var delProduct = db.SP_GET_PRODUCTS_DELETED();
            if (obj == null)
            {
                return RedirectToAction("Login", "AccountLogin");
            }
            return View(delProduct);
        }
        


        //
        // GET: /MuaChungManage/Details/5

        public ActionResult Details(int id = 0)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        //
        // GET: /MuaChungManage/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /MuaChungManage/Create

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Create(Product product, HttpPostedFileBase Images1, HttpPostedFileBase Images2, HttpPostedFileBase Images3)
        {
            HttpContext.Server.ScriptTimeout = 1000;
            if (ModelState.IsValid)
            {
                User user = new User();

                user = db.Users.Where(x => x.Username == User.Identity.Name).FirstOrDefault();
                product.UserId = user.UserId;
                product.Views = 123;
                product.Created = DateTime.Now;
                if (Images1 != null)
                {
                    string name = System.IO.Path.GetFileName(Images1.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Upload/"), name);
                    Images1.SaveAs(path);
                    product.Images1 = Images1.FileName;
                }
                if (Images2 != null)
                {
                    string name = System.IO.Path.GetFileName(Images2.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Upload/"), name);
                    Images2.SaveAs(path);
                    product.Images2 = Images2.FileName;
                }
                if (Images3 != null)
                {
                    string name = System.IO.Path.GetFileName(Images3.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Upload/"), name);
                    Images3.SaveAs(path);
                    product.Images3 = Images3.FileName;
                }

                var productid = db.Products.Where(p => p.ProductId == product.ProductId).Count();
                if (productid > 0)
                {
                    ModelState.AddModelError("", "* Product Id Userd");
                }
                else
                {
                    db.Products.Add(product);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
            }
            return View(product);
        }

        //
        // GET: /MuaChungManage/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        //
        // POST: /MuaChungManage/Edit/5

        [HttpPost]
        [ValidateInput(false)]
        //[ValidateAntiForgeryToken]
        public ActionResult Edit(Product product, HttpPostedFileBase Images1, HttpPostedFileBase Images2, HttpPostedFileBase Images3)
        {
            HttpContext.Server.ScriptTimeout = 1000;
            if (ModelState.IsValid)
            {
                product.Modified = DateTime.Now;
                if (Images1 != null)
                {
                    string name = System.IO.Path.GetFileName(Images1.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Upload/"), name);
                    Images1.SaveAs(path);
                    product.Images1 = Images1.FileName;
                }
                if (Images2 != null)
                {
                    string name = System.IO.Path.GetFileName(Images2.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Upload/"), name);
                    Images2.SaveAs(path);
                    product.Images2 = Images2.FileName;
                }
                if (Images3 != null)
                {
                    string name = System.IO.Path.GetFileName(Images3.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Upload/"), name);
                    Images3.SaveAs(path);
                    product.Images3 = Images3.FileName;
                }

                 db.Entry(product).State = EntityState.Modified;
                 db.SaveChanges();
                 return RedirectToAction("Index");
            }
            return View(product);
        }

        //
        // GET: /MuaChungManage/Delete/5

        public ActionResult Delete(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        //
        // POST: /MuaChungManage/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            Product product = db.Products.Find(id);
            product.Deleted = true;
            db.SaveChanges();
            return Json(new { result = true });
        }

        public ActionResult UnDelete(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        //
        // POST: /MuaChungManage/UnDelete/5

        [HttpPost, ActionName("UnDelete")]
        public ActionResult UnDeleteConfirmed(int id)
        {
            Product product = db.Products.Find(id);
            product.Deleted = false;
            db.SaveChanges();
            return Json(new { result = true });
        }

        /// <summary>
        /// Kiểm tra tồn tại Product ID
        /// </summary>
        /// <param name="productid"></param>
        /// <returns></returns>
        public JsonResult CheckProductId(string productid)
        {
            var product = db.Products.Where(x => x.ProductId == productid).Count();
            if (product > 0)
                return Json(false);
            else
                return Json(true);
        }

        #region --Check, delete and active product--

        /// <summary>
        /// Set sản phẩm Hot
        /// </summary>
        /// <param name="idcourse"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult IsActive(int? userid)
        {
            var hl = db.Products.FirstOrDefault(x => x.Id == userid);
            hl.ProductHot = false;
            db.Entry(hl).State = EntityState.Modified;
            db.SaveChanges();
            return Json(new { result = true });
        }

        /// <summary>
        /// Bỏ Set sản phẩm hot
        /// </summary>
        /// <param name="idcourse"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UnActive(int? userid)
        {
            var hl = db.Products.FirstOrDefault(x => x.Id == userid);
            hl.ProductHot = true;
            db.Entry(hl).State = EntityState.Modified;
            db.SaveChanges();
            return Json(new { result = true });
        }

        /// <summary>
        ///  Set sản phẩm hot hoặc sản phẩm thường
        /// </summary>
        /// <param name="userids"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult IsActiveSeleted(string userids)
        {
            string[] arrUser = userids.Split(',');
            int count = 0;
            for (int i = 0; i < arrUser.Length; i++)
            {
                var ids = arrUser[i];
                var id = Convert.ToInt32(ids);
                var userid = db.Products.FirstOrDefault(x => x.Id == id);
                if (userid.ProductHot == false)
                {
                    userid.ProductHot = true;
                    db.SaveChanges();
                    count++;
                }
                else
                {
                    count++;
                }

            }
            return Json(new { result = true });
        }

        /// <summary>
        /// Xóa những bản ghi đã được chọn
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DeleteCheckAll(string ids)
        {
            string[] course = ids.Split(',');
            int count = 0;
            for (int i = 0; i < course.Length; i++)
            {
                var id = Convert.ToInt32(course[i]);
                var userid = db.Products.FirstOrDefault(x => x.Id == id);
                userid.Deleted = true;
                db.SaveChanges();
                count++;
            }
            return Json(new { result = true });
        }

        /// Phục hồi những bản ghi đã được chọn

        [HttpPost]
        public JsonResult UnDeleteCheckAll(string ids)
        {
            string[] course = ids.Split(',');
            int count = 0;
            for (int i = 0; i < course.Length; i++)
            {
                var id = Convert.ToInt32(course[i]);
                var userid = db.Products.FirstOrDefault(x => x.Id == id);
                userid.Deleted = false;
                db.SaveChanges();
                count++;
            }
            return Json(new { result = true });
        }


        #endregion


        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}