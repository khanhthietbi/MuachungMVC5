using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using muachung.Models;

namespace muachung.Controllers
{
    public class AccountManagerController : Controller
    {
        private muachungEntities db = new muachungEntities();

        // GET: /AccountManager/
        public ActionResult Index()
        {
            HttpContext.Server.ScriptTimeout = 1000;
            var obj = Session["S_User"];
            var activeUser = db.SP_GET_USERS_ALL();
            if (obj == null)
            {
                return RedirectToAction("Login", "AccountLogin");
            }
            return View(activeUser);
        }

        public ActionResult DeletedUser()
        {
            HttpContext.Server.ScriptTimeout = 1000;
            var obj = Session["S_User"];
            var deletedUser = db.SP_GET_USERS_DELETED();
            if (obj == null)
            {
                return RedirectToAction("Login", "AccountLogin");
            }
            return View(deletedUser);
        }

        // GET: /AccountManager/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            User user = db.Users.Find(id);
            if (user == null)
            {
                return HttpNotFound();
            }
            return View(user);
        }

        // GET: /AccountManager/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: /AccountManager/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost, ValidateInput(false)]
        public ActionResult Create(User user, HttpPostedFileBase Avatar)
        {
            if (ModelState.IsValid)
            {
                if (Avatar != null)
                {
                    string name = System.IO.Path.GetFileName(Avatar.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/UserAvatar/"), name);
                    Avatar.SaveAs(path);
                    user.Avatar = Avatar.FileName;
                }
                else
                {
                    user.Avatar = "default.png";
                }
                var result = db.Users.Where(x => x.Username == user.Username && x.Active == true).Count();
                if (result > 0)
                {
                    ModelState.AddModelError("", "Tên tài khoản đã tồn tại");
                }
                else
                {
                    db.Users.Add(user);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
            }

            return View(user);
        }

        // GET: /AccountManager/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            User user = db.Users.Find(id);
            if (user == null)
            {
                return HttpNotFound();
            }
            return View(user);
        }

        // POST: /AccountManager/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(User user, HttpPostedFileBase avatar)
        {
            if (ModelState.IsValid)
            {
                if (avatar != null)
                {
                    string name = System.IO.Path.GetFileName(avatar.FileName);
                    string path = System.IO.Path.Combine(Server.MapPath("~/Content/UserAvatar"), name);
                    avatar.SaveAs(path);
                    user.Avatar = avatar.FileName;
                }
                db.Entry(user).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(user);
        }

        // GET: /AccountManager/Delete/5
        public ActionResult Delete(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            User user = db.Users.Find(id);
            if (user == null)
            {
                return HttpNotFound();
            }
            return View(user);
        }

        // POST: /AccountManager/Delete/5
        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            User user = db.Users.Find(id);
            user.Active = false;
            db.SaveChanges();
            return Json(new { result = true });
        }

        // GET: /AccountManager/UnDelete/5
        public ActionResult UnDelete(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            User user = db.Users.Find(id);
            if (user == null)
            {
                return HttpNotFound();
            }
            return View(user);
        }

        // POST: /AccountManager/UnDelete/5
        [HttpPost, ActionName("UnDelete")]
        public ActionResult UnDeleteConfirmed(int id)
        {
            User user = db.Users.Find(id);
            user.Active = true;
            db.SaveChanges();
            return Json(new { result = true });
        }

        /// <summary>
        ///  Cho phép user hoạt động hoặc ngừng hoạt động khi chọn ở ô checkbox
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
                var userid = db.Users.FirstOrDefault(x => x.UserId == id);
                if (userid.Active == false)
                {
                    userid.Active = true;
                    db.SaveChanges();
                    count++;
                }
                else
                {
                    userid.Active = false;
                    db.SaveChanges();
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
                var userid = db.Users.FirstOrDefault(x => x.UserId == id);
                userid.Active = false;
                db.SaveChanges();
                count++;
            }
            return Json(new { result = true });
        }

        [HttpPost]
        public JsonResult UnDeleteCheckAll(string ids)
        {
            string[] course = ids.Split(',');
            int count = 0;
            for (int i = 0; i < course.Length; i++)
            {
                var id = Convert.ToInt32(course[i]);
                var userid = db.Users.FirstOrDefault(x => x.UserId == id);
                userid.Active = true;
                db.SaveChanges();
                count++;
            }
            return Json(new { result = true });
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
