﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace muachung.Models
{
    using System;

    public partial class SP_GET_PRODUCTS_ALL_Result
    {
        public int Id { get; set; }
        public string ProductId { get; set; }
        public string Name { get; set; }
        public string Images1 { get; set; }
        public string Images2 { get; set; }
        public string Images3 { get; set; }
        public decimal Cost { get; set; }
        public decimal CostSale { get; set; }
        public string Information { get; set; }
        public Nullable<int> Views { get; set; }
        public bool ProductHot { get; set; }
        public string Address { get; set; }
        public string ShopName { get; set; }
        public bool Deleted { get; set; }
        public int UserId { get; set; }
        public Nullable<System.DateTime> Created { get; set; }
        public Nullable<System.DateTime> Modified { get; set; }
    }
}
