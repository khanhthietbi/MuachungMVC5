var strDomain=document.domain,checkStickyLoad=!1,checkStickyCount=!1,random1=0,return_link="",admTimeSticky=0,t_showFooterPopup,t_showFooterPopup1,_admStickyHeight=0,_admStickyFooter=0,_admStickyFooterEnd=0;if("undefined"==typeof admStickyHide)var admStickyWide=!1;if("undefined"==typeof admchkStickyWide)var admchkStickyWide=!1;if("undefined"==typeof admStickyHide)var admStickyHide=!1;
function getElementsByPrefix(a,b){var d=[];if("undefined"!=typeof b.firstChild)for(var e=b.firstChild;null!=e;)"undefined"!=typeof e.firstChild&&(d=d.concat(this.getElementsByPrefix(a,e))),"undefined"!=typeof e.id&&e.id.match(RegExp("^"+a+".*"))&&d.push(e),e=e.nextSibling;return d}
var windowPrototype={wdHeight:function(){var a;"number"==typeof window.innerWidth?a=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(a=document.body.clientHeight);return a},wdWidth:function(){var a;"number"==typeof window.innerWidth?a=window.innerWidth:document.documentElement&&document.documentElement.clientWidth?a=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&
(a=document.body.clientWidth);return a}},Browser={Version:function(){var a=999;-1!=navigator.appVersion.indexOf("MSIE")&&(a=parseFloat(navigator.appVersion.split("MSIE")[1]));return a}},browserVersion=Browser.Version(),admwdHeight=parseInt(windowPrototype.wdHeight());function getScrollTop(){var a=document.body.scrollTop;0==a&&(a=window.pageYOffset?window.pageYOffset:document.body.parentElement?document.body.parentElement.scrollTop:0);return a}
function getElementTop(a){if(document.getElementById)var b=document.getElementById(a);else document.all&&(b=document.all[a]);if(null!=b){yPos=b.offsetTop;for(tempEl=b.offsetParent;null!=tempEl;)yPos+=tempEl.offsetTop,tempEl=tempEl.offsetParent;return yPos}return 0}
function getElementLeft(a){var b;document.getElementById?b=document.getElementById(a):document.all&&(b=document.all[a]);if(null==b||"undefined"==typeof b)return 0;a=b.offsetLeft;for(b=b.offsetParent;null!=b;)a+=b.offsetLeft,b=b.offsetParent;return a}function getElementWidth(a){return document.getElementById(a).clientWidth}function getElementHeight(a){return document.getElementById(a).clientHeight}var stickyCheck=0;function stickyLoaded(a,b,d){advScroll(a,b,d)}var admBox2Status=0;
function advScroll(a,b,d){_admStickyFooterEnd=d;"Sticky"==a&&0!=_admStickyHeight&&(b=_admStickyHeight);var e="advZone"+a,c=document,g=Math.max(Math.max(c.body.scrollHeight,c.documentElement.scrollHeight),Math.max(c.body.offsetHeight,c.documentElement.offsetHeight),Math.max(c.body.clientHeight,c.documentElement.clientHeight)),n=getScrollTop(),k=getElementTop(e+"Top"),c=c.getElementById(e),m=getElementLeft(e+"Top"),l=0,f=navigator.userAgent,p=getElementHeight(e),q=windowPrototype.wdHeight();p>b&&(b=
p);0==admBox2Status&&-1==f.indexOf("MSIE")&&(f=c.innerHTML,-1!=f.indexOf("display:none")&&(c.innerHTML=f.replace("display:none","")),admBox2Status=1);var h;if("string"==typeof d)h=g-getElementTop(d);else if("object"==typeof d)for(f=0,p=d.length;f<p;f++)if("string"==typeof d[f]){if(document.getElementById(d[f])){var r=getElementTop(d[f]);if(0!=r){h=g-r;break}}}else{h=d[f];break}else h=d;50>admTimeSticky&&admTimeSticky++;f=Math.floor((g-(k+h))/2);880<=admwdHeight&&(admStickyWide&&!admchkStickyWide&&
1200<=f)&&(admchkStickyWide=!0);_admFSticky=h;if(g-k>b+h&&110<=k)if(c.style.display="block",a=getElementWidth(e+"Top"),d=getElementWidth(e),f=-1!=strDomain.indexOf("kenh14.vn")?1.08:1.2,g-k-h>f*b){a>d&&(l=Math.round((a-d)/2));if(g-n>b+h){b=document.domain;g=0;if(-1!=b.indexOf("muare.vn")||-1!=b.indexOf("muare.todo.vn"))g=35;c.style.left=m+l+"px";c.style.top=g+"px";c.style.bottom="auto";c.style.position="fixed"}else c.style.position="fixed",c.style.left=m+l+"px",c.style.top=q-b-(h-(g-n-q))+"px";n<
k&&(c.style.top=k-n+"px",c.style.left=m+l+"px",c.style.position="fixed");e=getElementLeft(e)-(l+m);0!=e&&(c.style.left=l+m-e+"px")}else c.style.top=k-n+"px",c.style.left=m+l+"px",c.style.position="fixed";else g-k-h>0.85*b?c.style.display="block":272<g-k-h&&-1==a.indexOf("No")?(a+="No",e=document.getElementById("advZone"+a),b=320,e&&("Sticky"==a?clearTimeout(t_showFooterPopup):clearTimeout(t_showFooterPopup1),advScroll(a,b,d),c.style.display="none")):!1===admStickyHide?(c.style.display="block",c.style.position=
""):c.style.display="none"};