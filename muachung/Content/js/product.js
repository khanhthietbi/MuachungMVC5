shop.product={viewOrderedCustomerList:function(itemId){shop.show_overlay_popup('list-ordered-customer','Danh sách người mua',shop.product.theme.viewOrderedCustomerList(itemId,'list-ordered-customer','Danh sách người mua'),{background:{'background-color':'transparent'},border:{'background-color':'transparent','padding':'0px'},title:{'display':'none'},content:{'padding':'0px','width':'400px'},release:function(){},onclose:function(){}});},theme:{viewOrderedCustomerList:function(itemId,id,title,close,opt,txt){var html='';var data='';var t=0,inc,cs,i;shop.show_loading();$.ajax({async:false,url:'ajax.php?act=item&code=listBuyer',type:'GET',data:{id:itemId,limit:500},dataType:'json',success:function(obj){if(obj.err==0){t=parseInt(obj.total);inc=t;cs=obj.customer;for(i in cs){data+='<tr><td>'+(inc--)+'.</td><td>'+cs[i].name+'</td></tr>';}}else{html='<div style="padding:5px">Có lỗi xảy ra! Vui lòng thử lại sau!</div>'}}});shop.hide_loading();if(t>0){html=shop.join('<div style="height:320px;overflow:scroll"><table width="100%" border="0" cellpadding="5" cellspacing="0">')('<tr style="background-color:silver"><td>STT</td><td>Tên</td></tr>')(data)('</table></div>')();}
if(txt){return html;}
return shop.popupSite(id,title,html,close,opt);}},conf:{product:{},itemJson:{},fb:[],itemHot:2,now:TIME_NOW,popNow:TIME_NOW,show_sec:false},init:function(id,start,end,buyer,buyer_need,out_time,width,unit,timeType,is_end){width=width?width:140;shop.product.conf.product[id]={id:id,start:start,end:end,now:shop.product.conf.now,popNow:shop.product.conf.now,count:end-shop.product.conf.now,popCount:end-shop.product.conf.popNow,buyer:buyer,out_time:out_time,buyer_active:buyer_need,buyer_need:buyer_need,pick_time:'',step:width/100,max_width:width,percent:'buyerPercent'+id,time:'timeCount'+id,timeTitle:'timeTitle'+id,displayTime:timeType,counter_id:0,updateTime:5*60*1000,first:false,unit:unit,is_end:is_end==1};shop.product.drawBuyer(id);shop.product.countTime(id);var nbFake=parseInt($('#productNbFake').val());if(isNaN(nbFake))nbFake=0;if((shop.product.conf.product[id].buyer-nbFake<shop.product.conf.product[id].buyer_need)&&(shop.product.conf.product[id].end>shop.product.conf.now)&&!shop.product.conf.product[id].is_end)
{shop.product.update(id);}},popCountTime:function(id){shop.product.conf.product[id].popNow++;shop.product.conf.product[id].popCount--;if(shop.product.popDisplayTime(id)){shop.product.conf.product[id].counter_id=setTimeout(function(){shop.product.popCountTime(id)},1000);}else{var title='',timeStr='';var nbFake=parseInt($('#productNbFake').val());if(isNaN(nbFake))nbFake=0;if(shop.product.conf.product[id].buyer-nbFake>=shop.product.conf.product[id].buyer_need){title='Thời gian hết hàng';timeStr=shop.product.conf.product[id].out_time;}else{var title='Hết hạn lúc',time=0;if(shop.product.conf.product[id].start>shop.product.conf.product[id].popNow){title='Thời gian bắt đầu';time=shop.product.conf.product[id].start;}else if(shop.product.conf.product[id].end<=shop.product.conf.product[id].popNow||shop.product.conf.product[id].is_end){time=shop.product.conf.product[id].end;}
var d=new Date(time*1000),hour=d.getHours(),min=d.getMinutes(),day=d.getDate(),month=d.getMonth()+1;timeStr=(hour>9?'':'0')+(hour>0?hour:0)+'h'+(min>9?'':'0')+(min>0?min:0)+' ngày '+(day>9?'':'0')+(day>0?day:0)+'/'+(month>9?'':'0')+(month>0?month:0)+'/'+d.getFullYear();}
jQuery('#pop'+shop.product.conf.product[id].timeTitle).html(title).addClass('v6TimeOverDie');jQuery('#pop'+shop.product.conf.product[id].time).html('<span class="timeOver">'+timeStr+'</span>');}},popDisplayTime:function(id){var day=Math.floor(shop.product.conf.product[id].popCount/86400),count=shop.product.conf.product[id].popCount%86400,hour=Math.floor(count/(60*60)),min=Math.floor((count%(60*60))/60),sec=Math.floor(count-hour*60*60-min*60),color='',colorDeal='#54682D',numberProduct=shop.product.conf.product[id].buyer_need-shop.product.conf.product[id].buyer;if(shop.product.conf.product[id].start<shop.product.conf.product[id].popNow&&day<=0&&hour<=0&&min<=10){color='color:red';colorDeal='red';}else if(numberProduct<=10&&numberProduct>0){colorDeal='red';}
jQuery('#deal'+id).css('color',colorDeal);if(shop.product.conf.product[id].displayTime){jQuery('#'+shop.product.conf.product[id].time+' .hours').html('<span style="'+color+'">'+(hour>9?'':'0')+(hour>0?hour:0)+'</span>');jQuery('#'+shop.product.conf.product[id].time+' .min').html('<span style="'+color+'">'+(min>9?'':'0')+(min>0?min:0)+'</span>');jQuery('#'+shop.product.conf.product[id].time+' .sec').html('<span style="'+color+'">'+((sec>9&&sec<60)?'':'0')+((sec>0&&sec<60)?sec:0)+'</span>');}else{var obj=shop.get_ele('pop'+shop.product.conf.product[id].time);if(obj){obj.innerHTML='<span style="'+color+'">'+(day>0?(day+' ngày, '):'')+(hour>9?'':'0')+(hour>0?hour:0)+'<span style="text-transform:lowercase"> giờ </span> '+(min>9?'':'0')+(min>0?min:0)+' phút '+((day<=0||shop.product.conf.show_sec)?(((sec>9&&sec<60)?'':'0')+((sec>0&&sec<60)?sec:0)+' giây'):"")+'</span>';obj.innerHTML='<span style="'+color+'">'+(day>0?(day+' ngày, '):'')+(hour>9?'':'0')+(hour>0?hour:0)+':'+(min>9?'':'0')+(min>0?min:0)+':'+(sec>9?'':'0')+(sec>0?sec:'0')+'</span>';obj.innerHTML='<span style="'+color+'">'+(day>0?(day+' ngày '):'')+(hour>9?'':'0')+(hour>0?hour:0)+':'+(min>9?'':'0')+(min>0?min:0)+'&#146;:'+(sec>0?sec:'0')+'&#148;</span>';}else{return false;}}
return hour>=0&&min>=0&&sec>=0&&sec<=59;},countTime:function(id){shop.product.conf.product[id].now++;shop.product.conf.product[id].count--;if(shop.product.displayTime(id)){shop.product.conf.product[id].counter_id=setTimeout(function(){shop.product.countTime(id)},1000);}else{var title='',timeStr='';var nbFake=parseInt($('#productNbFake').val());if(isNaN(nbFake))nbFake=0;if(shop.product.conf.product[id].buyer-nbFake>=shop.product.conf.product[id].buyer_need){title='Thời gian hết hàng';timeStr=shop.product.conf.product[id].out_time;}else{var title='Hết hạn lúc',time=0;if(shop.product.conf.product[id].start>shop.product.conf.product[id].now){title='Thời gian bắt đầu';time=shop.product.conf.product[id].start;}else if(shop.product.conf.product[id].end<=shop.product.conf.product[id].now||shop.product.conf.product[id].is_end){time=shop.product.conf.product[id].end;}
var d=new Date(time*1000),hour=d.getHours(),min=d.getMinutes(),day=d.getDate(),month=d.getMonth()+1;timeStr=(hour>9?'':'0')+(hour>0?hour:0)+'h'+(min>9?'':'0')+(min>0?min:0)+' ngày '+(day>9?'':'0')+(day>0?day:0)+'/'+(month>9?'':'0')+(month>0?month:0)+'/'+d.getFullYear();}
jQuery('#'+shop.product.conf.product[id].timeTitle).html(title).addClass('v6TimeOverDie');jQuery('#'+shop.product.conf.product[id].time).html('<span class="timeOver">'+timeStr+'</span>');}},displayTime:function(id){var day=Math.floor(shop.product.conf.product[id].count/86400),count=shop.product.conf.product[id].count%86400,hour=Math.floor(count/(60*60)),min=Math.floor((count%(60*60))/60),sec=Math.floor(count-hour*60*60-min*60),color='',colorDeal='#54682D',numberProduct=shop.product.conf.product[id].buyer_need-shop.product.conf.product[id].buyer;var nbFake=parseInt($('#productNbFake').val());if(isNaN(nbFake))nbFake=0;if(shop.product.conf.product[id].start<shop.product.conf.product[id].now&&day<=0&&hour<=0&&min<=10){color='color:red';colorDeal='red';}else if(numberProduct<=10&&numberProduct>0){colorDeal='red';}
jQuery('#deal'+id).css('color',colorDeal);if((shop.product.conf.product[id].buyer-nbFake>=shop.product.conf.product[id].buyer_need)||(shop.product.conf.product[id].start>shop.product.conf.product[id].now)||(shop.product.conf.product[id].end<shop.product.conf.product[id].now)||shop.product.conf.product[id].is_end){var html='',parent=jQuery('#productItem'+id);if(shop.product.conf.product[id].start<shop.product.conf.product[id].now){if(shop.product.conf.product[id].buyer-nbFake>=shop.product.conf.product[id].buyer_need){html='<div class="overTime mTop5">Đã hết cơ hội mua rẻ</div>';}else{html='<div class="overTime mTop5">Đã hết cơ hội mua rẻ</div>';}
html+='<center class="numBuyerOver">(Có <b>'+shop.product.conf.product[id].buyer+'</b> người đã mua được)</center>'
jQuery('#event_end'+id).html(html);jQuery('.buying',parent).hide();jQuery('.stillRun',parent).hide();shop.product.conf.product[id].is_end=1;jQuery('.buyNow',parent).addClass('buyNowOut');}else{jQuery('.buyNow',parent).addClass('buyNowWait');}
return false;}
if(shop.product.conf.product[id].displayTime){jQuery('#'+shop.product.conf.product[id].time+' .hours').html('<span style="'+color+'">'+(hour>9?'':'0')+(hour>0?hour:0)+'</span>');jQuery('#'+shop.product.conf.product[id].time+' .min').html('<span style="'+color+'">'+(min>9?'':'0')+(min>0?min:0)+'</span>');jQuery('#'+shop.product.conf.product[id].time+' .sec').html('<span style="'+color+'">'+((sec>9&&sec<60)?'':'0')+((sec>0&&sec<60)?sec:0)+'</span>');}else{var obj=shop.get_ele(shop.product.conf.product[id].time);if(obj){if(day<15){obj.innerHTML='<span style="'+color+'">'+(day>0?(day+' ngày, '):'')+(hour>9?'':'0')+(hour>0?hour:0)+'<span style="text-transform:lowercase"> giờ </span> '+(min>9?'':'0')+(min>0?min:0)+' phút '+((day<=0||shop.product.conf.show_sec)?(((sec>9&&sec<60)?'':'0')+((sec>0&&sec<60)?sec:0)+' giây'):"")+'</span>';obj.innerHTML='<span style="'+color+'">'+(day>0?(day+' ngày, '):'')+(hour>9?'':'0')+(hour>0?hour:0)+':'+(min>9?'':'0')+(min>0?min:0)+':'+(sec>9?'':'0')+(sec>0?sec:'0')+'</span>';obj.innerHTML='<span style="'+color+'">'+(day>0?(day+' ngày '):'')+(hour>9?'':'0')+(hour>0?hour:0)+':'+(min>9?'':'0')+(min>0?min:0)+'&#146;:'+(sec>0?sec:'0')+'&#148;</span>';}
else{var obj=shop.get_ele(shop.product.conf.product[id].timeTitle);if(obj){obj.innerHTML='Vẫn còn mua được';}}}else{return false;}}
return hour>=0&&min>=0&&sec>=0&&sec<=59;},drawBuyer:function(id){var percent=(shop.product.conf.product[id].buyer_need==0)?100:Math.round(shop.product.conf.product[id].buyer/shop.product.conf.product[id].buyer_need*100),width=Math.round(percent*shop.product.conf.product[id].step),divPer=shop.get_ele(shop.product.conf.product[id].percent);if(divPer){if(width>0&&!jQuery(divPer).hasClass('buyerPercentOverZero')){divPer.className+=' buyerPercentOverZero';}
if(width<=4){if(!jQuery(divPer).hasClass('buyerPercentZero')){divPer.className+=' buyerPercentZero';}
width=4;}else{jQuery(divPer).removeClass('buyerPercentZero');}
if(shop.product.conf.product[id].max_width-width<=0){if(!jQuery(divPer).hasClass('buyerPercentFull')){divPer.className+=' buyerPercentFull';}}
divPer.style.width=width+"px";}},update:function(id){if(!shop.product.conf.product[id].is_end){if(shop.product.conf.product[id].first){shop.ajax_popup("act=item&code=get-hot",'GET',{id:id},function(j){if(j.err==0){if(j.data.id==id){shop.product.conf.product[id].now=parseInt(j.now);shop.product.conf.product[id].id=parseInt(j.data.id);shop.product.conf.product[id].start=parseInt(j.data.startTime);shop.product.conf.product[id].end=parseInt(j.data.endTime);shop.product.conf.product[id].count=shop.product.conf.product[id].end-shop.product.conf.product[id].now;shop.product.conf.product[id].buyer=parseInt(j.data.buyer);shop.product.conf.product[id].out_time=j.data.event_end;shop.product.conf.product[id].buyer_need=parseInt(j.data.buyer_need);shop.product.conf.product[id].buyer_active=parseInt(j.data.buyer_active);shop.product.conf.product[id].pick_time=j.data.pick_time;shop.product.conf.product[id].is_end=j.data.is_end==1;var html='',parent=jQuery('#productItem'+id);if(j.data.customer.length<=0){html=shop.join('<center class="p10">')('<a href="javascript:void(0)" onclick="shop.cart.addItem('+j.data.id+','+j.data.startTime+','+j.data.endTime+','+j.data.buyer+','+j.data.buyer+')" title="Mua ngay">')('<img src="style/images/icon/icon_hand.png" alt="number one" />')('</a>')('<div class="mTop10">Hãy là <b>người đầu tiên</b> mua sản phẩm này</div>')('</center>')();}else{html='<ul class="firstList">';var count=1,total=parseInt(shop.product.conf.product[id].buyer),idx=0;if(shop.product.conf.product[id].id==73){total=0;for(var t in j.data.customer){total++;}}
for(var i in j.data.customer){idx=total-count+1;html+=shop.join('<li id="customer'+id+'_'+count+'"'+(count>=6?' class="hidden"':'')+'>')('<span class="f11" style="color:#999">'+shop.product.zero(idx,total)+'. </span>')('<span><a name="customer'+id+'_'+count+'">'+j.data.customer[i].name+'</a></span>')('</li>')();count++;}
html+='</ul>';if(shop.product.conf.product[id].buyer>=6){html+=shop.join('<div class="more" align="right">')('<a href="javascript:void(0)" onclick="shop.closeMoreBuyer(this)" class="top fl" style="display:none" title="Thu lại"></a>')('<a href="javascript:void(0)" onclick="shop.showMoreBuyer(this)" title="Xem tiếp 20 người" class="f12" style="font-weight:normal;color:#0076b2">Xem thêm ></a>')('<div class="c"></div>')('</div>')();}}
jQuery('div.listBuyer>div.mainBlueBoxNew',parent).html(html);if(shop.product.conf.product[id].buyer>0){jQuery('.buyerStatus',parent).html('<div class="numBuyer">(Đã có <b>'+shop.product.conf.product[id].buyer+'</b> người mua)</div>');}else{jQuery('.buyerStatus',parent).html('');}
var nbFake=parseInt($('#productNbFake').val());if(isNaN(nbFake))nbFake=0;var con=shop.product.conf.product[id].buyer_need-shop.product.conf.product[id].buyer+nbFake;if(con>0){jQuery('#deal'+id).html('<span>Còn <b>'+con+'</b> '+shop.product.conf.product[id].unit+'</span>');}
jQuery('#pNumber'+id).html(shop.product.conf.product[id].buyer_need);html='';if(shop.product.conf.product[id].buyer<=0){html='<div class="cBarText2">Khi có đủ <b style="color:#E11545">'+shop.product.conf.product[id].buyer_active+'</b> người mua trở lên, các đơn hàng sẽ có hiệu lực</div>';}else{if(shop.product.conf.product[id].end<shop.product.conf.product[id].now){jQuery('.buying').hide();html+='<div class="cBarText2 buying">Muachung đã hết hạn, bạn đã mất cơ hội mua sản phẩm này</div>';}else{if(shop.product.conf.product[id].buyer>=shop.product.conf.product[id].buyer_active){html+='<div class="cBarText2 buying"></div>';}else{html+='<div class="cBarText2">(Cần thêm <b>'+(shop.product.conf.product[id].buyer_active-shop.product.conf.product[id].buyer)+'</b> người nữa để mua được giá này)</div>';}}}
jQuery('.productStatus',parent).html(html).addClass('updated');clearTimeout(shop.product.conf.product[id].counter_id);shop.product.countTime(id);shop.product.drawBuyer(id);if(shop.product.conf.product[id].end<shop.product.conf.product[id].now||shop.product.conf.product[id].buyer-nbFake>=shop.product.conf.product[id].buyer_need)
{jQuery('.buyNow',parent).addClass('buyNowOut');}else if(shop.product.conf.product[id].start>shop.product.conf.product[id].now){jQuery('.buyNow',parent).addClass('buyNowWait');}else{jQuery('.buyNow',parent).removeClass('buyNowOut').removeClass('buyNowWait');jQuery('#buyerCount'+id).html(shop.product.conf.product[id].buyer_need-shop.product.conf.product[id].buyer+nbFake);}
return;}}});}else{shop.product.conf.product[id].first=true;}}},zero:function(number,total){number=''+number;total=''+total;var out=number;number=number.length;total=total.length;for(var i=0;i<total-number;i++){out='0'+out;}
return out;},viewAds:function(obj,id){if(jQuery(obj).hasClass('views')){jQuery(obj).removeClass();jQuery('#viewAds'+id).hide();}
else{jQuery(obj).addClass('views');jQuery('#viewAds'+id).show();}},loadFB:function(id,fb_html){shop.product.conf.fb[shop.product.conf.fb.length]={id:id,html:fb_html};},pushFB:function(){if(shop.product.conf.fb.length>0){var html,i;for(i in shop.product.conf.fb){html='';html=decodeURIComponent((shop.product.conf.fb[i].html+'').replace(/\+/g,'%20'));;jQuery('#FB_'+shop.product.conf.fb[i].id).html(html);}}},checkBookInfo:function(type){var tour_name=shop.util_trim(jQuery("#tour-name").val());var tour_phone=shop.util_trim(jQuery("#tour-phone").val());var tour_cmt=shop.util_trim(jQuery("#tour-cmt").val());var tour_checkin=shop.util_trim(jQuery("#tour-checkin").val());var tour_checkout=shop.util_trim(jQuery("#tour-checkout").val());var tour_room=shop.util_trim(jQuery("#tour-room").val());var tour_children=shop.util_trim(jQuery("#tour-children").val());var tour_adults=shop.util_trim(jQuery("#tour-adults").val());if(!tour_name||!tour_phone||!tour_cmt||!tour_checkin||!tour_checkout||!tour_room||!tour_children||!tour_adults){if(!tour_name){shop.raiseError("#tour-name","Chưa nhập họ và tên",1);return false;}
else{shop.closeErr('#tour-name');}
if(!tour_phone){shop.raiseError("#tour-phone","Chưa nhập số điện thoại",1);return false;}
else{shop.closeErr('#tour-phone');}
if(!tour_cmt){shop.raiseError("#tour-cmt","Chưa nhập số CMTND",1);return false;}
else{shop.closeErr('#tour-cmt');}
if(!tour_room&&type==1){shop.raiseError("#tour-room","Chưa nhập số lượng phòng",1);return false;}
else{shop.closeErr('#tour-room');}
if(!tour_checkin){if(type==1){shop.raiseError("#tour-checkin","Chưa chọn ngày check-in",1);}
else{shop.raiseError("#tour-checkin","Chưa chọn ngày khởi hành",1);}
return false;}
else{shop.closeErr('#tour-checkin');}
if(!tour_checkout&&type==1){shop.raiseError("#tour-checkout","Chưa chọn ngày check-out",1);return false;}
else{shop.closeErr('#tour-checkout');}
if(!tour_adults&&!tour_children){shop.raiseError("#tour-adults","Chưa nhập số lượng người",1);return false;}
else{shop.closeErr('#tour-adults');}}
return true;},changePicture:function(images,stt,id,lightBox){var src=images.replace("/88/","/550/");$(id).attr('src',src);for(i=1;i<=5;i++){if(i==stt){jQuery('#productimg'+i).addClass('activeImgBorder');jQuery('#productimg'+i+' > img').removeClass('blurringeffects');jQuery('#arrow'+i).addClass('arrowactive');if(lightBox==true){jQuery('#borderImages'+i).addClass('v6BorderImages v6LightBoxBorder');}
else{jQuery('#borderImages'+i).addClass('v6BorderImages');}}else{jQuery('#productimg'+i).removeClass('activeImgBorder');jQuery('#productimg'+i+' > img').addClass('blurringeffects');jQuery('#arrow'+i).removeClass('arrowactive');if(lightBox==true){jQuery('#borderImages'+i).removeClass('v6BorderImages v6LightBoxBorder');}
else{jQuery('#borderImages'+i).removeClass('v6BorderImages');}}}}};shop.showMoreBuyer=function(obj){var limit=20;var p=jQuery(obj).parent().parent();var total=p.find('>ul>li>span:first').text().replace(/[^0-9]/g,'');var anchor;var nbLoaded=p.find('>ul>li').length;var nbVisible=p.find('>ul>li:not(.hidden)').length;if(nbVisible<nbLoaded){var tail=Math.min(nbVisible+limit,total);for(var i=0;i<tail;i++){$(p.find('>ul>li')[i]).removeClass('hidden');}
anchor=$(p.find('>ul>li')[nbVisible]).attr('id');shop.auto_scroll('#'+anchor);jQuery('.top',p).show();if(tail==total){jQuery('.f12',p).hide();}
return;}
if(nbLoaded>=total)return;var nbNeedToLoad=Math.min(total,nbLoaded+limit)-nbLoaded;var offset=nbLoaded;var itemId=new String(p.find('li:first').attr('id'));var arr=itemId.match(/customer([0-9]+)/);itemId=arr[1];var lastIndex=p.find('>ul>li:last>span:first').text().replace(/[^0-9]/g,'');anchor='customer'+itemId+'_'+(nbLoaded+1);$.ajax({async:false,type:"POST",url:"ajax.php?act=item&code=listBuyer",data:{id:itemId,offset:offset,limit:nbNeedToLoad},timeout:4000,cache:true,dataType:"json",success:function(obj){var c=obj.customer;$.each(c,function(key,value){var itemKeyId=itemId+'_'+(++nbLoaded);var showIndex=--lastIndex;var nbZero=new String(total).length-new String(showIndex).length;for(var k=0;k<nbZero;k++){showIndex='0'+showIndex;}
p.find('>ul:first').append('<li id="customer'+itemKeyId+'"><span style="color:#999" class="f11">'+showIndex+'. </span><span><a name="customer'+itemKeyId+'">'+value.name+'</a></span></li>');});shop.auto_scroll('#'+anchor);jQuery('.top',p).show();if(lastIndex==1){jQuery('.f12',p).hide();}else{jQuery('.f12',p).show();}},error:function(){}});};shop.closeMoreBuyer=function(obj){var limit=20;var p=jQuery(obj).parent().parent();var nbVisible=p.find('>ul>li:not(.hidden)').length;var anchor;for(var j=0;j<limit;j++){if(nbVisible-j-1>=5){$($('ul > li',p)[nbVisible-j-1]).addClass('hidden');}else{break;}}
anchor=$(p.find('>ul>li')[Math.max(0,nbVisible-2*limit)]).attr('id');shop.auto_scroll('#'+anchor);if(nbVisible<=5+limit){jQuery('.top',p).hide();}
jQuery('.f12',p).show();};shop.auto_scroll=function(anchor){var target=jQuery(anchor);target=target.length&&target||jQuery('[name='+anchor.slice(1)+']');if(target.length){var targetOffset=target.offset().top;jQuery('html,body').animate({scrollTop:targetOffset},1000);return false;}
return true;};shop.activeTabDeal=function(weekly_deal){if(weekly_deal){jQuery('.buttonDeal').removeClass('buttonDealactive');jQuery('.buttonDealWeek').addClass('buttonDealWeekactive');}else{jQuery('.buttonDeal').addClass('buttonDealactive');jQuery('.buttonDealWeek').removeClass('buttonDealWeekactive');}};shop.popupshowRateCustomer={show:function(itemId,rateCustomer,page_no,type,username,itemTitle){shop.show_overlay_popup('popup-rate-customer','Review / Đánh giá',shop.popupshowRateCustomer.popupShowRateCustomer(rateCustomer,page_no,itemId,type,username,itemTitle),{background:{'background-color':'transparent'},border:{'background-color':'transparent','padding':'0px'},title:{'display':'none'},content:{'padding':'0px','width':'780px','font-size':'1em'},release:function(){},onclose:function(){}});},popupShowRateCustomer:function(rateCustomer,page_no,itemId,type,username,itemTitle){return shop.popupRateCustomer('popup-rate-customer','Review / Đánh giá',itemTitle,true,false,username);}},shop.popupshowMoreBuyer={show:function(itemId,buyer,page_no,type){shop.show_overlay_popup('list-ordered-customer','Danh sách người mua',shop.popupshowMoreBuyer.popupShow(buyer,page_no,itemId,type),{background:{'background-color':'transparent'},border:{'background-color':'transparent','padding':'0px'},title:{'display':'none'},content:{'padding':'0px','width':'350px'},release:function(){},onclose:function(){}});},popupShow:function(buyer,page_no,itemId,type){var html=shop.popupshowMoreBuyer.theme.displayListCBuyer(buyer,page_no,itemId,'list-ordered-customer','Danh sách người mua');if(type==1){return shop.popupSite('list-ordered-customer','Danh sách người mua',html);}else{jQuery('#idList').remove();jQuery('.classic-popup-content').html(html);return true;}},theme:{displayListCBuyer:function(buyer,page_no,itemId){var html='';var data='';var t=0,inc,cs,i;jQuery.jCache.maxSize=50;var key='buyer'+itemId+page_no;dataCache=jQuery.jCache.getItem(key);if(!dataCache){shop.show_loading();$.ajax({async:false,url:'ajax.php?act=item&code=listBuyerPopupV6',type:'GET',data:{id:itemId,page_no:page_no},dataType:'json',success:function(obj){if(obj.err==0){inc=buyer-((page_no-1)*15);cs=obj.customer;num=0;for(i in cs){num++;if(num<16&&inc>0){data+='<tr><td  style="font-size:13px;color:#000;padding:5px 13px"><span style="display:block;width:210px;height:17px;overflow:hidden">'+(inc--)+'.&nbsp;'+cs[i].name+'</span></td><td style="font-size:11px;color:#707070"><span style="display:block;width:75px;height:17px;overflow:hidden">'+cs[i].created+'</span></td></tr>';}}
data+='</table><div style="height: 30px;border-top:1px solid #E0E0E0;padding-top: 5px;position:absolute;bottom:0;width:320px;font-size:13px">';if(page_no==1&&num==16){data+='<div class="fr"><a style="text-decoration:none;color:#000" onclick="shop.popupshowMoreBuyer.popupShow('+buyer+','+(page_no+1)+','+itemId+',2)"href="javascript:void(0)">Xem tiếp</a></div>';}else if(page_no>=2&&num==16){data+='<div class="fl"><a style="text-decoration:none;color:#000" onclick="shop.popupshowMoreBuyer.popupShow('+buyer+','+(page_no-1)+','+itemId+',2)" href="javascript:void(0)">Quay lại</a></div><div class="fr"><a style="text-decoration:none;color:#000" onclick="shop.popupshowMoreBuyer.popupShow('+buyer+','+(page_no+1)+','+itemId+',2)" href="javascript:void(0)">Xem tiếp</a></div>';}else if(page_no>=2&&num<16){data+='<div class="fl"><a style="text-decoration:none;color:#000" onclick="shop.popupshowMoreBuyer.popupShow('+buyer+','+(page_no-1)+','+itemId+',2)" href="javascript:void(0)">Quay lại</a></div>';}}else{html='<div style="padding:5px">Có lỗi xảy ra! Vui lòng thử lại sau!</div>'}}});shop.hide_loading();if(buyer>0){dataCache=jQuery.jCache.setItem(key,data);}}else{data=dataCache;}
if(buyer>0||dataCache){html=shop.join('<div id="idList" style="padding:2px 10px;height:480px; position: relative"><table width="100%" border="0" cellpadding="5" cellspacing="0">')('<tr style="height: 35px;"><td colspan="2" style="border-bottom:1px solid #E0E0E0;color:#000"  valign="middle"><b>Đã có '+buyer+' người mua</b></td></tr>')(data)('<div class="c"></div></div></div>')();}
return html;}}};shop.popupmapOffice={show:function(id_office,id_province){var provinceText=typeof city_list[id_province]!=='undefined'?city_list[id_province].title:'Hà Nội';var popTitle='Văn phòng Muachung tại '+provinceText;shop.show_overlay_popup('list-mapOffice',popTitle,shop.popupSite('list-mapOffice',popTitle,shop.popupmapOffice.theme_OfficeN(id_office,id_province)),{background:{'background-color':'transparent'},border:{'background-color':'transparent','padding':'0px'},title:{'display':'none'},content:{'padding':'0px','width':'900px'},release:function(){},onclose:function(){}});},showWhenOrder:function(id_office,id_province){__POP_SHOWWHENORDER=true;var provinceText=typeof city_list[id_province]!=='undefined'?city_list[id_province].title:'Hà Nội';var popTitle='Văn phòng Muachung tại '+provinceText;shop.show_overlay_popup('list-mapOffice2',popTitle,shop.popupSite('list-mapOffice2',popTitle,shop.popupmapOffice.theme(id_office,id_province)),{background:{'background-color':'transparent'},border:{'background-color':'transparent','padding':'0px'},title:{'display':'none'},content:{'padding':'0px','width':'740px'},release:function(){},onclose:function(){if(typeof __POP_SHOWWHENORDER!=='undefined'&&__POP_SHOWWHENORDER===true){__POP_SHOWWHENORDER=false;shop.cart.stepZero();}else{}}});},theme:function(id_office,id_province){var js_html='';$.ajax({async:false,url:'ajax.php?act=item&code=get_office',type:'POST',data:{id_office:id_office,id_province:id_province},dataType:'json',success:function(j){if(j.err==0){var office=j.office;i=1;js_html=shop.join('<div class="p10">')('<div class="adr_contents">')();for(o in office){off=office[o];if(i==1){js_html+=shop.join('<div class="image_map m0">')('<img width="430" height="359" title="shop map" src="'+j.map+'" id="popMap">')('</div>')('<div class="title_adr" style="width:255px">')();}
var name=decodeURIComponent(off.name);var address=decodeURIComponent(off.address);js_html+=shop.join('<div class="v3_sc_popupMapWhile '+(off.active==1?'v3_sc_popupMap':'')+'" id="viewline'+i+'">')('<a onclick="shop.popupmapOffice.changeMap(this,\''+off.map+'\');" rel="nofollow" href="javascript:void(0);" class="adrname">'+name+'<div>'+address+'</div></a>')('</div>')();i++;}
js_html+=shop.join('</div>')('</div>')('<div class="c"></div>')('</div>')();}}});return js_html;},theme_OfficeN:function(id_office,id_province){var js_html='';$.ajax({async:false,url:'ajax.php?act=item&code=get_office',type:'POST',data:{id_office:id_office,id_province:id_province},dataType:'json',success:function(j){if(j.err==0){var office=j.office;i=1;js_html=shop.join('<div class="bl_3_BoxOffice">')();for(o in office){off=office[o];if(i==1){js_html+=shop.join('<img id="popMap" class="bl_3_Office_Map" src="'+j.map+'" width="470"/>')('<div class="bl_3_Office_Info">')();}
var name=decodeURIComponent(off.name);var address=decodeURIComponent(off.address);var time=decodeURIComponent(off.time);js_html+=shop.join('<div class="bl_3_Office_Info_Box" onclick="shop.popupmapOffice.changeMap_New(this,\''+off.map+'\');" rel="nofollow">')('<div class="bl_3_Office_Info_Title '+(off.active==1?'bl_3_Office_Info_Title_Open':'')+'">'+name+'</div>')('<div class="bl_3_Office_Info_Time_Adr '+(off.active==1?'':'hidden')+'">')('<div class="bl_3_Office_Info_Adr">'+address+'</div>')('<div class="bl_3_Office_Info_Time">'+time+'</div>')('</div>')('</div>')();i++;}
js_html+=shop.join('</div>')('<div class="c"></div>')('</div>')();}}});return js_html;},changeMap_New:function(obj,map){jQuery('#popMap').attr('src',map).fadeIn(1000);jQuery('.bl_3_Office_Info_Title').removeClass('bl_3_Office_Info_Title_Open');jQuery('.bl_3_Office_Info_Time_Adr').addClass('hidden');jQuery('.bl_3_Office_Info_Title',obj).addClass('bl_3_Office_Info_Title_Open');jQuery('.bl_3_Office_Info_Time_Adr',obj).removeClass('hidden');},changeMap:function(obj,map){jQuery('#popMap').attr('src',map).slideDown();jQuery('.v3_sc_popupMapWhile').removeClass('v3_sc_popupMap');jQuery(obj).parent().addClass('v3_sc_popupMap');}};