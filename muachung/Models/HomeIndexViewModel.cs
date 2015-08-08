using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace muachung.Models
{
    public class HomeIndexViewModel
    {
        public IEnumerable<SP_GET_PRODUCTS_ALL_Result> Product1 { get; set; }
        public IEnumerable<SP_GET_PRODUCTS_ALL_Result> Product2 { get; set; }
        public IEnumerable<SP_GET_PRODUCTS_ALL_Result> Product3 { get; set; }
        public IEnumerable<SP_GET_PRODUCTS_HOT_Result> HotProduct { get; set; }
        public IEnumerable<SP_GET_Adverts_RD2_Result> AdvertsRD1 { get; set; }
        public IEnumerable<SP_GET_Adverts_RD2_Result> AdvertsRD2 { get; set; }
        public IEnumerable<SP_GET_Adverts_RD2_Result> AdvertsRD3 { get; set; }
    }
}