var arrKeyCode={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,NUMPAD_MULTIPLY:106,NUMPAD_ADD:107,NUMPAD_ENTER:108,NUMPAD_SUBTRACT:109,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,PERIOD:190,COMMA:188};var sendingAjax=false;var delaySomethings=(function(){var timeDelay=0;return function(callback,ms){clearTimeout(timeDelay);timeDelay=setTimeout(callback,ms);}})();function VietnameseWithoutAccent(strInput,noTransformText){if(noTransformText==null||noTransformText==false||noTransformText==undefined){strInput=strInput.toLowerCase();}
strInput=strInput.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");strInput=strInput.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");strInput=strInput.replace(/ì|í|ị|ỉ|ĩ/g,"i");strInput=strInput.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");strInput=strInput.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");strInput=strInput.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");strInput=strInput.replace(/đ/g,"d");strInput=strInput.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g," ");strInput=strInput.replace(/^\-+|\-+$/g,"");return strInput;}
function replaceContent(jObj,htmlNew){htmlNew=htmlNew?htmlNew:"";$(jObj).children().html(htmlNew);}
function initSlideSuggest(idSlide,arrData){var configDealWidth=207,configDealMarginDefault=10,sys_deal_suggested_list=$("#"+idSlide),getAvailableContent=sys_deal_suggested_list.find(".overview").width();var calcDealNumberInViewer=Math.floor((getAvailableContent)/(configDealWidth+configDealMarginDefault)),calcBalanceWidth=getAvailableContent%(configDealWidth+configDealMarginDefault),calcMarginNew=(calcBalanceWidth/calcDealNumberInViewer)+configDealMarginDefault,currentPage=1,pageNumber=(arrData.length%calcDealNumberInViewer==0)?(arrData.length/calcDealNumberInViewer):(Math.floor(arrData.length/calcDealNumberInViewer)+1);sys_deal_suggested_list.find(".overview").html("");if(calcDealNumberInViewer>=arrData.length){sys_deal_suggested_list.addClass('no-slide1').find(".buttons").hide();for(var p1=0;p1<arrData.length;p1++){$(arrData[p1]).appendTo(sys_deal_suggested_list.find(".overview"));}}else{var calcMarginNewMiddleDeal=Math.floor(calcMarginNew/2+(calcMarginNew/2-configDealMarginDefault/2)/(calcDealNumberInViewer-1));for(var p=0;p<calcDealNumberInViewer;p++){if(p==0){$(arrData[p]).children().css({"width":(configDealWidth+calcMarginNewMiddleDeal-(configDealMarginDefault/2))}).end().appendTo(sys_deal_suggested_list.find(".overview"));}else{if(p==(calcDealNumberInViewer-1)){$(arrData[p]).children().css({"width":(configDealWidth+calcMarginNewMiddleDeal-(configDealMarginDefault/2))}).end().appendTo(sys_deal_suggested_list.find(".overview"));}else{$(arrData[p]).children().css({"width":(configDealWidth+calcMarginNewMiddleDeal*2-configDealMarginDefault)}).end().appendTo(sys_deal_suggested_list.find(".overview"));}}}}
if(pageNumber>1){sys_deal_suggested_list.find(".sys_suggest_detail_current_page").html(currentPage);sys_deal_suggested_list.find(".sys_suggest_detail_total_page").html(pageNumber);sys_deal_suggested_list.find(".sys_paging_suggest_list").show();}
sys_deal_suggested_list.on("click dbclick",".next",function(){var idx=calcDealNumberInViewer;currentPage=(currentPage==pageNumber)?1:(currentPage+1);sys_deal_suggested_list.find(".sys_suggest_detail_current_page").html(currentPage);var arrIdxStarRun=currentPage*calcDealNumberInViewer-1;var intervalUpdate=setInterval(function(){if(idx==0){clearInterval(intervalUpdate);}else{var newHtml;if(arrData[arrIdxStarRun]){newHtml=$(arrData[arrIdxStarRun]).children();}else{newHtml="";}
arrIdxStarRun--;replaceContent(sys_deal_suggested_list.find("li").eq(--idx),newHtml);}},33);return false;});sys_deal_suggested_list.on("click dbclick",".prev",function(){var idx=0;currentPage=(currentPage==1)?pageNumber:(currentPage-1);sys_deal_suggested_list.find(".sys_suggest_detail_current_page").html(currentPage);var arrIdxStarRun=calcDealNumberInViewer*(currentPage-1);var intervalUpdate=setInterval(function(){if(idx==calcDealNumberInViewer){clearInterval(intervalUpdate);}else{var newHtml="";if(arrData[arrIdxStarRun]){newHtml=$(arrData[arrIdxStarRun]).children();}else{newHtml="";}
arrIdxStarRun++;replaceContent(sys_deal_suggested_list.find("li").eq(idx++),newHtml);}},33);return false;});}
$(function(){$.fn.xxxDropdown=function(opt){return this.each(function(){var opts=$.extend({afterSelect:null},opt);var selectElem=$(this).children("select").first();selectElem.on("change",function(){selectElem.parents(".xxxDropdown").find(".show-val").children("span").html(selectElem.children(":selected").html());if($.isFunction(opts.afterSelect)){opts.afterSelect.call();}});});};$.fn.setColorAvatar=function(){return this.each(function(){var getName=$(this).attr("title");getName=VietnameseWithoutAccent(getName,true);getName=getName.replace(/ /g,"");var nameLength=getName.length;var colorResult,nameLower,nameUpper;console.log(getName);switch(nameLength){case 1:colorResult="rgb("+getName.charCodeAt(0)+",0,0)";if(getName.charCodeAt(0)%6==0){nameLower=getName.toLowerCase();colorResult="rgb("+nameLower.charCodeAt(0)+","+nameLower.charCodeAt(0)+","+nameLower.charCodeAt(0)+")";break;}
if(getName.charCodeAt(0)%7==0){nameLower=getName.toLowerCase();nameUpper=getName.toUpperCase();colorResult="rgb("+nameLower.charCodeAt(0)+","+nameUpper.charCodeAt(0)+","+(nameLower.charCodeAt(0)+nameUpper.charCodeAt(0))+")";break;}
if(getName.charCodeAt(0)%8==0){nameLower=getName.toLowerCase();nameUpper=getName.toUpperCase();colorResult="rgb("+(nameLower.charCodeAt(0)+nameUpper.charCodeAt(0))+","+nameUpper.charCodeAt(0)+","+nameLower.charCodeAt(0)+")";break;}
if(getName.charCodeAt(0)%9==0){nameLower=getName.toLowerCase();nameUpper=getName.toUpperCase();colorResult="rgb("+nameUpper.charCodeAt(0)+","+(nameLower.charCodeAt(0)+nameUpper.charCodeAt(0))+","+nameLower.charCodeAt(0)+")";break;}
if(getName.charCodeAt(0)%3==0){colorResult="rgb("+getName.charCodeAt(0)+","+getName.charCodeAt(0)+",0)";break;}
if(getName.charCodeAt(0)%4==0){colorResult="rgb("+getName.charCodeAt(0)+",0,"+getName.charCodeAt(0)+")";break;}
if(getName.charCodeAt(0)%5==0){colorResult="rgb("+getName.charCodeAt(0)+","+getName.charCodeAt(0)+","+getName.charCodeAt(0)+")";break;}
break;case 2:colorResult="rgb("+getName.charCodeAt(0)+","+getName.charCodeAt(1)+",0)";break;case 3:colorResult="rgb("+getName.charCodeAt(0)+","+getName.charCodeAt(1)+","+getName.charCodeAt(2)+")";break;case 4:colorResult="rgb("+(getName.charCodeAt(0)+getName.charCodeAt(3))+","+getName.charCodeAt(1)+","+getName.charCodeAt(2)+")";break;case 5:colorResult="rgb("+(getName.charCodeAt(0))+","+(getName.charCodeAt(1)+getName.charCodeAt(3))+","+(getName.charCodeAt(2)+getName.charCodeAt(4))+")";break;default:if(getName.charCodeAt(0)%6==0){nameLower=getName.toLowerCase();colorResult="rgb("+nameLower.charCodeAt(0)+","+nameLower.charCodeAt(0)+","+nameLower.charCodeAt(0)+")";break;}
if(getName.charCodeAt(0)%7==0){nameLower=getName.toLowerCase();nameUpper=getName.toUpperCase();colorResult="rgb("+nameLower.charCodeAt(0)+","+nameUpper.charCodeAt(0)+","+(nameLower.charCodeAt(0)+nameUpper.charCodeAt(0))+")";break;}
if(getName.charCodeAt(0)%8==0){nameLower=getName.toLowerCase();nameUpper=getName.toUpperCase();colorResult="rgb("+(nameLower.charCodeAt(0)+nameUpper.charCodeAt(0))+","+nameUpper.charCodeAt(0)+","+nameLower.charCodeAt(0)+")";break;}
if(getName.charCodeAt(0)%9==0){nameLower=getName.toLowerCase();nameUpper=getName.toUpperCase();colorResult="rgb("+nameUpper.charCodeAt(0)+","+(nameLower.charCodeAt(0)+nameUpper.charCodeAt(0))+","+nameLower.charCodeAt(0)+")";break;}
if(getName.charCodeAt(0)%3==0){colorResult="rgb("+getName.charCodeAt(0)+","+getName.charCodeAt(0)+",0)";break;}
if(getName.charCodeAt(0)%4==0){colorResult="rgb("+getName.charCodeAt(0)+",0,"+getName.charCodeAt(0)+")";break;}
if(getName.charCodeAt(0)%5==0){colorResult="rgb("+getName.charCodeAt(0)+","+getName.charCodeAt(0)+","+getName.charCodeAt(0)+")";break;}
colorResult="rgb("+(getName.charCodeAt(0))+","+(getName.charCodeAt(Math.floor(nameLength/2)-1)+getName.charCodeAt(Math.floor(nameLength/2)))+","+(getName.charCodeAt(nameLength-2)+getName.charCodeAt(nameLength-1))+")";break;}
$(this).css("background-color",colorResult).html(getName[0]);});};$(".sys_tabbable").on("click",".t-lbl",function(){});});(function($){$.popupCommon=function(objSetting){var settings=$.extend({wrapHtml:''+'<div class="popup-common">'+'<div class="pop-content">'+'<div class="opacity-border"></div>'+'<div class="wrap-content sys_wrap_popup_content">'+'<div class="main-content">'+'<div style="height:80px;padding-top: 15px;text-align: center;"><img src="/assets/images/loading.gif" alt="Loading"/></div>'+'</div>'+'</div>'+'<img class="closePopup" src="/Content/images/x.png" alt="CLOSE">'+'</div>'+'</div>',htmlContent:'<div style="height:80px;padding-top: 15px;text-align: center;"><img src="/assets/images/loading.gif" alt="Loading"/></div>',attrId:'sys_popup_common',extendClass:'',widthPop:'840px',isFadeIn:true,toParent:null,mediaType:false,disableScroll:false,overlayClickHide:true,successOpen:function(){},preClose:function(){}},objSetting||{});var _$this=null;function initPopup(){if(settings.toParent){_$this=$(settings.wrapHtml).appendTo($(settings.toParent));}else{_$this=$(settings.wrapHtml).appendTo("body");}
_$this.attr("id",settings.attrId).addClass(settings.extendClass).before('<div id="'+settings.attrId+'_overlay" class="overlay-bl-bg"></div>');if(settings.mediaType){_$this.find(".main-content").first().addClass("view-media");}
_$this.find(".main-content").first().html(settings.htmlContent);_$this.css({"display":"block","visibility":"hidden"});$("body").addClass("disable-scroll");var popContent=_$this.find(".pop-content").css("width",settings.widthPop);var setTopCSS,setLeftCSS;setLeftCSS=Math.abs(($(window).width()-popContent.width())/2);popContent.css({"left":setLeftCSS});_$this.css({"display":"none","visibility":"visible"});(settings.isFadeIn)?_$this.fadeIn():_$this.show();onEvents();if($.isFunction(settings.successOpen)){settings.successOpen.call(this);}}
function onEvents(){$("#"+settings.attrId).on("click.closePopup",".closePopup",function(){$("body").removeClass("disable-scroll");if($.isFunction(settings.preClose)){settings.preClose.call(this);}
$("#"+settings.attrId).fadeOut(function(){$(this).prev().remove();$(this).remove();$("body").off("keydown.closePopup").css("overflow","");});});$("#"+settings.attrId).on("click",".pop-content",function(e){e.stopPropagation();});$("body").on("keydown.closePopup",function(e){var getCode=e.keyCode?e.keyCode:e.which;if(getCode==arrKeyCode.ESCAPE){$("#"+settings.attrId).find(".closePopup").trigger("click");}});if(settings.overlayClickHide){$("#"+settings.attrId).on("click",function(){$("#"+settings.attrId).find(".closePopup").trigger("click");});}}
initPopup();};})(jQuery);