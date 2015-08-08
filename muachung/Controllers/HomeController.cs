using muachung.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace MuaChungManage.Controllers
{
    public class HomeController : Controller
    {
        private muachungEntities db = new muachungEntities();
        public ActionResult Index()
        {
            var model = new HomeIndexViewModel();
            // List sản phẩm bình thường
            var list = db.SP_GET_PRODUCTS_ALL().ToList();
            model.Product1 = list.Take(12);
            model.Product2 = list.Skip(12).Take(12);
            model.Product3 = list.Skip(24).Take(12);

            // List sản phẩm Hot
            model.HotProduct = db.SP_GET_PRODUCTS_HOT().ToList();

            // List quảng cáo
            var ads = db.SP_GET_Adverts_RD2().ToList();
            model.AdvertsRD1 = ads.Take(1);
            model.AdvertsRD2 = ads.Skip(1).Take(1);
            model.AdvertsRD3 = ads.Skip(2).Take(1);

//          var product = db.SP_GET_PRODUCTS_ALL();
// Hàm lấy 8 sản phẩm ngẫu nhiên có thuộc tính Product Hot sử dụng Store Procedure
//          ViewBag.HotProduct = db.SP_GET_PRODUCTS_HOT().ToList();
// Hàm lấy ngẫu nhiên 8 sản phẩm có thuộc tính Product Hot sử dụng LinQ
//          ViewBag.ProductHot = db.Products.Where(x => x.ProductHot == true && x.Deleted == false).OrderBy(x => Guid.NewGuid()).Take(8).ToList();
// Hàm đếm số sản phẩm
//          ViewBag.Count = db.SP_GET_PRODUCTS_ALL().Count();

            return View(model);
            
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Contact()
        {

            return View();
        }

        public ActionResult Details(int? id)
        {
            Session.Add("S_productid", id);
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        public ActionResult Order()
        {
            return View();
        }
        
        [HttpPost]
        public ActionResult Order(Order order)
        {
            var productid = Session["S_productid"];
            order.ProductId = int.Parse(productid.ToString());
            order.CreatedDate = DateTime.Now;
            var iphone = db.Orders.FirstOrDefault(p => p.CustomerPhone == order.CustomerPhone);
            var iproductid = db.Orders.FirstOrDefault(p => p.ProductId == order.ProductId);
            if (iphone != null && iproductid !=null)
            {
                db.SP_UP_AMOUNT_LIST_ORDER(order.CustomerPhone, order.Amount);
            }
            else
            {
                db.Orders.Add(order);
                db.SaveChanges();
            }

            var costsum = from o in db.Orders
                          join p in db.Products on o.ProductId equals p.Id
                          where o.CustomerPhone == order.CustomerPhone
                          select (p.CostSale * o.Amount);
            return RedirectToAction("ListOrderCustomer", new { phone = order.CustomerPhone});
        }


        public ActionResult ListOrderCustomer (string phone)
        {
            var cart = db.SP_GET_LIST_ORDER(phone).ToList();
            ViewBag.phone = phone;
            return View(cart);
        }

        public ActionResult DeletefromCart(string phone, int id)
        {
            db.SP_DELETE_FROM_CART(phone, id);
            return RedirectToAction("ListOrderCustomer", new { phone = phone });
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}
