using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using muachung.Models;
using System.Data.Entity;
using System.Net;

namespace muachung.Controllers
{
    public class AdvertsController : Controller
    {
        //-----------------------------------------------------------------2
        muachungEntities dbMuaChung = new muachungEntities();
        public ActionResult Index()
        {
            var model = new HomeIndexViewModel();
            
            model.AdvertsRD2 = dbMuaChung.SP_GET_Adverts_RD2().ToList();
            HttpContext.Server.ScriptTimeout = 1000;
            var obj = Session["S_User"];
            //var product = dbMuaChung.SP_GET_PRODUCTS_ALL();
            if (obj == null)
            {
                return RedirectToAction("Login", "AccountLogin");
            }
            
            return View(dbMuaChung.Adverts.Where(x => x.Deleted == false).OrderBy(x => x.AdvertId).ToList());
        }


        // Danh sách sản phẩm đã bị xóa

        public ActionResult DeletedAdverts()
        {
            HttpContext.Server.ScriptTimeout = 1000;
            var obj = Session["S_User"];
            //var delProduct = db.SP_GET_PRODUCTS_DELETED();
            if (obj == null)
            {
                return RedirectToAction("Login", "AccountLogin");
            }
            return View(dbMuaChung.Adverts.Where(x => x.Deleted == true).OrderBy(x => x.AdvertId).ToList());
        }



        //
        // GET: /MuaChungManage/Details/5

        public ActionResult Details(int id = 0)
        {
            Session.Add("S_Advertid", id);
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Advert Adverts = dbMuaChung.Adverts.Find(id);
            if (Adverts == null)
            {
                return HttpNotFound();
            }
            return View(Adverts);
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
        public ActionResult Create(Advert Adverts, HttpPostedFileBase Images1, HttpPostedFileBase Images2, HttpPostedFileBase Images3)
        {
            HttpContext.Server.ScriptTimeout = 1000;
            if (ModelState.IsValid)
            {
                User user = new User();

                user = dbMuaChung.Users.Where(x => x.Username == User.Identity.Name).FirstOrDefault();
                Adverts.UserId = user.UserId;
                Adverts.Views = 123;
                Adverts.Created = DateTime.Now;
                if (Images1 != null)
                {
                    string name = System.IO.Path.GetFileName(Images1.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Adverts/"), name);
                    Images1.SaveAs(path);
                    Adverts.Images1 = Images1.FileName;
                }
                if (Images2 != null)
                {
                    string name = System.IO.Path.GetFileName(Images2.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Adverts/"), name);
                    Images2.SaveAs(path);
                    Adverts.Images2 = Images2.FileName;
                }
                if (Images3 != null)
                {
                    string name = System.IO.Path.GetFileName(Images3.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Adverts/"), name);
                    Images3.SaveAs(path);
                    Adverts.Images3 = Images3.FileName;
                }

                var AdvertId = dbMuaChung.Adverts.Where(p => p.AdvertId == Adverts.AdvertId).Count();
                if (AdvertId > 0)
                {
                    ModelState.AddModelError("", "* Adverts Id Userd");
                }
                else
                {
                    dbMuaChung.Adverts.Add(Adverts);
                    dbMuaChung.SaveChanges();
                    return RedirectToAction("Index");
                }
            }
            return View(Adverts);
        }

        //
        // GET: /MuaChungManage/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Advert adverts = dbMuaChung.Adverts.Find(id);
            if (adverts == null)
            {
                return HttpNotFound();
            }
            return View(adverts);
        }

        //
        // POST: /MuaChungManage/Edit/5

        [HttpPost]
        [ValidateInput(false)]
        //[ValidateAntiForgeryToken]
        public ActionResult Edit(Advert Adverts, HttpPostedFileBase Images1, HttpPostedFileBase Images2, HttpPostedFileBase Images3)
        {
            HttpContext.Server.ScriptTimeout = 1000;
            if (ModelState.IsValid)
            {
                Adverts.Modified = DateTime.Now;
                if (Images1 != null)
                {
                    string name = System.IO.Path.GetFileName(Images1.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Adverts/"), name);
                    Images1.SaveAs(path);
                    Adverts.Images1 = Images1.FileName;
                }
                if (Images2 != null)
                {
                    string name = System.IO.Path.GetFileName(Images2.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Adverts/"), name);
                    Images2.SaveAs(path);
                    Adverts.Images2 = Images2.FileName;
                }
                if (Images3 != null)
                {
                    string name = System.IO.Path.GetFileName(Images3.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/Adverts/"), name);
                    Images3.SaveAs(path);
                    Adverts.Images3 = Images3.FileName;
                }

                dbMuaChung.Entry(Adverts).State = EntityState.Modified;
                dbMuaChung.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(Adverts);
        }

        //
        // GET: /MuaChungManage/Delete/5

        public ActionResult Delete(int id)
        {
            Advert adverts = dbMuaChung.Adverts.Find(id);
            if (adverts == null)
            {
                return HttpNotFound();
            }
            return View(adverts);
        }

        //
        // POST: /MuaChungManage/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            Advert adverts = dbMuaChung.Adverts.Find(id);
            adverts.Deleted = true;
            dbMuaChung.SaveChanges();
            return Json(new { result = true });
        }

        public ActionResult UnDelete(int id)
        {
            Advert adverts = dbMuaChung.Adverts.Find(id);
            if (adverts == null)
            {
                return HttpNotFound();
            }
            return View(adverts);
        }

        //
        // POST: /MuaChungManage/UnDelete/5

        [HttpPost, ActionName("UnDelete")]
        public ActionResult UnDeleteConfirmed(int id)
        {
            Advert adverts = dbMuaChung.Adverts.Find(id);
            adverts.Deleted = false;
            dbMuaChung.SaveChanges();
            return Json(new { result = true });
        }

        /// <summary>
        /// Kiểm tra tồn tại advertname
        /// </summary>
        /// <param name="advertname"></param>
        /// <returns></returns>
        public JsonResult CheckAdvertName(string advertname)
        {
            var adverts = dbMuaChung.Adverts.Where(x => x.AdvertName == advertname).Count();
            if (adverts > 0)
                return Json(false);
            else
                return Json(true);
        }
        /// <summary>
        /// Xóa những bản ghi đã được chọn
        /// 
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DeleteCheckAll(string idArr)
        {
            string[] Account = idArr.Split(',');
            int iCount = 0;
            for (int i = 0; i < Account.Length; i++)
            {
                var id = Convert.ToInt32(Account[i]);
                var advertid = dbMuaChung.Adverts.FirstOrDefault(x => x.AdvertId == id);
                advertid.Deleted = true;
                dbMuaChung.SaveChanges();
                iCount++;
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
                var userid = dbMuaChung.Adverts.FirstOrDefault(x => x.AdvertId == id);
                userid.Deleted = false;
                dbMuaChung.SaveChanges();
                count++;
            }
            return Json(new { result = true });
        }




        protected override void Dispose(bool disposing)
        {
            dbMuaChung.Dispose();
            base.Dispose(disposing);
        }
    }
}