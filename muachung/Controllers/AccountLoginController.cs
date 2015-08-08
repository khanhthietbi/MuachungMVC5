using muachung.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using WebMatrix.WebData;

namespace muachung.Controllers
{
    public class AccountLoginController : Controller
    {
        muachungEntities context = new muachungEntities();
        // GET: Account

        // Hàm kiểm tra tên tài khoản và mật khẩu đăng nhập
        public bool CheckValid(string usn, string pw)
        {
            bool CheckValid = false;
            using (var context = new muachungEntities())
            {
                var user = context.Users.FirstOrDefault(x => x.Username == usn);
                if (user != null)
                {
                    try
                    {
                        if (user.Username == usn)
                        {
                            if (user.Password == pw)
                            {
                                CheckValid = true;
                            }
                        }
                    }
                    catch
                    {
                        CheckValid = false;
                    }
                }
            }
            return CheckValid;
        }

        // Hàm đăng nhập (lồng hàm kiểm tra CheckValid)
        public ActionResult Login()
        {
            HttpContext.Server.ScriptTimeout = 1000;
            return View();
        }
        [HttpPost]
        public ActionResult Login(User user)
        {
            if (CheckValid(user.Username, user.Password))
            {
                FormsAuthentication.SetAuthCookie(user.Username, user.RememberMe);
                Session.Add("S_User", user);
                ViewBag.active = user.Username;
                return RedirectToAction("Index", "MuaChungManage");
            }
            else
            {
                ModelState.AddModelError("", "Mat khau khong chinh xac");
            }
            return View(user);
        }
        public ActionResult LogOff()
        {
            FormsAuthentication.SignOut();
            Session.Remove("S_User");
            return RedirectToAction("Index", "Home");
        }
        
        // Hàm JSON trả về kết quả kiểm tra tên đăng nhập
        [HttpPost]
        public JsonResult CheckUser(FormCollection form)
        {
            System.Threading.Thread.Sleep(1000);
            string name = form["username"];
            var user = context.Users.Where(x => x.Username == name).Count();
            if (user > 0)
            {
                return Json(new { result = true });
            }
            else
            {
                return Json(new { result = false });
            }
        }

        //Hàm Trả về tên người dùng hiện tại và layout người dùng
        public ActionResult GetUserActive(string view = "")
        {
            User user = new User();
            user = (User)Session["S_User"];
            var model = context.Users.Where(x => x.Username.Equals(user.Username)).FirstOrDefault();
            return PartialView(view, model);
        }

        public ActionResult GetAvatar(string id = "", string view = "")
        {
            User user = new User();
            if (String.IsNullOrEmpty(id))
                id = User.Identity.Name;
            //user = null thì lấy thông tin của user đang đăng nhập
            if (id != null)
            {
                user = context.Users.Where(x => x.Username.Equals(id)).FirstOrDefault();
            }
            else
            {
                int ids = int.Parse(id);
                user = context.Users.Where(x => x.UserId == ids).FirstOrDefault();
            }

            return PartialView(view, user);
        }

	}
}