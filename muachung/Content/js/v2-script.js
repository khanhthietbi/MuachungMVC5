$(function(){$(".xxxDropdown").xxxDropdown();var sys_slide_feature_deal=$("#sys_slide_feature_deal");if(sys_slide_feature_deal.length>0){if(sys_slide_feature_deal.find("li").length>0){sys_slide_feature_deal.tinycarousel({bullets:true});}}
var sys_tooltips_ddsd=$(".sys_tooltips_ddsd");if(sys_tooltips_ddsd.length>0){sys_tooltips_ddsd.each(function(){var getTooltipContent=$(this).find(".sys_list_shop_to_use").html();$(this).tooltipster({content:$(getTooltipContent),minWidth:300,maxWidth:300,position:'bottom',interactive:true,theme:'hoang-dai-ca'});});}
var sys_show_tip_ddsd=$("#sys_show_tip_ddsd");if(sys_show_tip_ddsd.length>0){sys_show_tip_ddsd.qtip({content:{text:$('#showProvince').html()},hide:{fixed:true},position:{my:'top center',at:'bottom center'},style:{classes:"tip-shop-address"}});}
var sys_tooltips_dl_note=$(".sys_tooltips_dl_note");if(sys_tooltips_dl_note.length>0){sys_tooltips_dl_note.each(function(){var getTooltipContent=$(this).siblings(".sys_dl_note_content").html();$(this).tooltipster({trigger:'click',content:$(getTooltipContent),minWidth:300,maxWidth:300,position:'bottom',interactive:true,theme:'hoang-dai-ca'});});}
var sys_img_thumb_deal=$(".sys_img_thumb_deal");var sys_flip_img_desc=$(".sys_flip_img_desc");if(sys_flip_img_desc.length>0){var changeImgInterval;sys_flip_img_desc.on("mouseenter",function(){var $this=$(this);$this.parent().find(".sys_img_thumb_deal").find("img").removeClass("active").last().addClass("active");}).on("mouseleave",function(){var $this=$(this);$this.parent().find(".sys_img_thumb_deal").find("img").removeClass("active").first().addClass("active");});}
$(window).on("scroll",function(){var pageOffetTop=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;if(pageOffetTop>100){$("#sys_back_top").addClass("active");}else
$("#sys_back_top").removeClass("active");});$("#sys_back_top").on("click",function(){$("html, body").animate({scrollTop:0},0);return false;});lastLoaded=$(".sys_loaded").last().parents(".sys_deal_item");if(lastLoaded.length>0){pointToLoad=lastLoaded.offset().top+lastLoaded.height()-$(window).height();configItemPerPage=9;$(window).on("scroll",function(){var pageOffetTop=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;lastLoaded=$(".sys_loaded").last().parents(".sys_deal_item");pointToLoad=lastLoaded.offset().top+lastLoaded.height()-$(window).height();if(pageOffetTop>pointToLoad){for(var p=0;p<configItemPerPage;p++){lastLoaded=lastLoaded.next();if(lastLoaded.length>0){lastLoaded.find(".sys_img_thumb_deal").addClass("sys_loaded").find(".img-overlay").attr("style",lastLoaded.find(".img-overlay").data("style"));}else{break;}}}});}
var sys_center_img=$("#sys_center_img");if(sys_center_img.length==1){sys_center_img.find(".cell-center").height(sys_center_img.width());$(window).on("resize",function(){sys_center_img.find(".cell-center").height(sys_center_img.width());});}
var sys_col_list_thumb=$("#sys_col_list_thumb");if(sys_col_list_thumb.length>0){var configThumbPerPage=10,configItemHeight=47,viewportHeightAvaiable=$("#sys_center_img").width(),slideThumbPageCurrent=1,cloneThumbItem=sys_col_list_thumb.children(".sys_show_img_big").last().clone();sys_col_list_thumb.css("max-height",viewportHeightAvaiable);cloneThumbItem=cloneThumbItem.html("").css("visibility","hidden");configThumbPerPage=Math.floor(viewportHeightAvaiable/configItemHeight);var lastSlideItem=sys_col_list_thumb.children(".sys_show_img_big").length%configThumbPerPage,slideThumbPageTotal=Math.ceil(sys_col_list_thumb.children(".sys_show_img_big").length/configThumbPerPage);if(sys_col_list_thumb.children(".sys_show_img_big").length>configThumbPerPage)
$("#sys_btn_slide_thumbs").show();if(lastSlideItem!=0){for(var p=lastSlideItem;p<configThumbPerPage;p++){var cloneThumbHtml=cloneThumbItem.prop('outerHTML');$(cloneThumbHtml).insertBefore("#sys_btn_slide_thumbs");}}
sys_col_list_thumb.children(".sys_show_img_big").each(function(idx,val){idx++;if(idx>configThumbPerPage){$(this).hide();}
$(this).addClass("sys_thumb_slide_"+(Math.floor((idx-1)/configThumbPerPage)+1));});$("#sys_btn_slide_thumbs").on("click",function(){if(slideThumbPageCurrent!=slideThumbPageTotal){slideThumbPageCurrent++}else{slideThumbPageCurrent=1;}
sys_col_list_thumb.children(".sys_show_img_big").hide();sys_col_list_thumb.children(".sys_thumb_slide_"+slideThumbPageCurrent).show();});}
var sys_subcate_title=$(".sys_subcate_title");if(sys_subcate_title.length>0){sys_subcate_title.each(function(idx,val){if(($(this).width()+25)>$(this).parent().width())
$(this).parents("a").addClass("long-text")});}
$(".shopmc-item").on("mouseenter",function(){var $this=$(this);delaySomethings(function(){$this.find(".shopmc-map-pop").addClass("active-map");},350);}).on("mouseleave",function(){var $this=$(this);$this.find(".shopmc-map-pop").removeClass("active-map");});});function slideBanner(classBn,old,cur,slot){$('#countBanner'+slot+'-'+classBn+'-'+old).fadeOut("fast",function(){$('#countBanner'+slot+'-'+classBn+'-'+cur).fadeIn();});}