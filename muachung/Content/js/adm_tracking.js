window._admislocalStorage=(function(){if(!("localStorage"in window&&null!==window.localStorage))return!1;try{localStorage.setItem("_admstorage",""),localStorage.removeItem("_admstorage")}catch(a){return!1}return!0})();
if(typeof(__admPageloadid)=='undefined'){
	var __admPageloadid=(new Date()).getTime();
}

if(void 0===ADM_AdsTracking){var ADM_AdsTracking={version:"1.0.0",paramFlash:{},getFlashMovie: function(a) { return -1 != navigator.appName.indexOf("Microsoft") ? document.getElementById(a) : document[a]},checkBrowser:function(){var b=!1,a;a=navigator.appName;var c=navigator.userAgent+"",d,e=c.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);null==e&&-1==c.indexOf("MSIE")&&-1!=c.indexOf("Trident/")?(a=-1,null!=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(c)&&(a=RegExp.$1),e=["MSIE",a+""]):(e&&null!=(d=c.match(/version\/([\.\d]+)/i))&&(e[2]=d[1]),e=e?[e[1],e[2]]:[a,navigator.appVersion,"-?"]);a=e;"undefined"!=
typeof a&&null!=a&&1<=a.length&&(c=(a[0]+"").toLowerCase(),a=a[1].split("."),a=parseInt(a[0]),("firefox"==c&&22<=a||"msie"==c&&10<=a||"safari"==c&&5<=a || "chrome"==c)&&_admislocalStorage&&(b=!0));return b},fonts:"",getFont:function(b){ADM_AdsTracking.fonts=b},lcStorage:{timestamp:"timestamp_",get_exprises:function(b,a,c,d){b+="";a=b.indexOf(a,c);c=b.length-1;return-1!=a?(d=b.indexOf(d,a),-1==d&&(d=c),b.substring(a,d)):""},set_item:function(b,a,c){var d="",e=(new Date).getTime(),
f=this.timestamp,e=0==c||""==c?e+63072E7:e+864E5*c,d="_azs"==b?";":",";c=this.get_exprises(a,f,0,d);a=""==c?a+(f+e.toString()+d):a.replace(c,f+e.toString());localStorage.setItem(b,a)},get_item:function(b,a){var c=localStorage.getItem(b),d=(new Date).getTime(),e=this.timestamp;if(""==c||null==c)return"";endchar="_azs"==b?";":",";var f=this.get_exprises(c,e,0,endchar),f=f.replace(e,"");return""==f||isNaN(parseInt(f))||parseInt(f)<d?"":c=c.replace(e+f+endchar,"")},remove_item:function(b){localStorage.removeItem(b)},
flush:function(){localStorage.clear()}},setCookie:function(b,a,c,d,e,f){(new Date).getTime();d="/";c=0==c||""==c?(new Date(+new Date+63072E7)).toGMTString():(new Date(+new Date+864E5*c)).toGMTString();b=[b+"="+escape(a)];for(var g in c={expires:c,path:d,domain:e})c[g]&&b.push(g+"="+c[g]);return f&&b.push("secure"),document.cookie=b.join(";"),!0},getCookie:function(b){return 0<document.cookie.length&&(c_start=document.cookie.indexOf(b+"="),-1!=c_start)?(c_start=c_start+b.length+1,c_end=document.cookie.indexOf(";",
c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""},get:function(b){var a="",c="";if("__ui"==b||"__uid"==b||"__create"==b)c=b,b="__uif";if(_admislocalStorage){if("__R"==b||"__RC"==b||"__uif"==b)a=ADM_AdsTracking.getCookie(b);if(null==a||""==a)a=ADM_AdsTracking.lcStorage.get_item(b),null!=a&&""!=a&&ADM_AdsTracking.setCookie(b,a,"")}else a=ADM_AdsTracking.getCookie(b);if(""!=c&&""!=a){b=a.split("|");for(var d=0,
e=b.length;d<e;d++)if(-1!=b[d].indexOf(c+":")){a=b[d].replace(c+":","");break}}return a},set:function(b,a,c){if(_admislocalStorage){if(ADM_AdsTracking.lcStorage.set_item(b,a,c),"__R"==b||"__RC"==b||"__uif"==b)"__R"==b&&"undefined"!=typeof ADS_Location&&ADS_Location!=a&&""!=a&&"0"!=a&&(ADS_Location=parseInt(a)),"__RC"==b&&"undefined"!=typeof ADS_City&&ADS_City!=a&&""!=a&&"0"!=a&&(ADS_City=parseInt(a)),ADM_AdsTracking.setCookie(b,a,c)}else ADM_AdsTracking.setCookie(b,
a,c)},getParam:function(){if(ADM_AdsTracking.checkBrowser()){var b=ADM_AdsTracking.get("__create")+"",a=ADM_AdsTracking.get("__uid")+"";30<a.length&&(a="");""==a&&(b="");11<b.length&&""!=a&&(b=Math.floor((new Date).getTime()/1E3));return"&ce=1&lc="+ADM_AdsTracking.get("__RC")+"&cr="+b+"&ui="+a}return""},getInfoParam:function(){if(ADM_AdsTracking.checkBrowser())return"";var b=ADM_AdsTracking.get("__uid"),a=ADM_AdsTracking.get("__create");return"&ce=1&guie=1&__uid="+b+"&__create="+a},flashcheck:function(b){for(var a in b)ADM_AdsTracking.check(a,
b[a],!0)},expireAllCookies:function(b,a){var c=(new Date(0)).toUTCString();document.cookie=b+"=; expires="+c;for(var d=0,e=a.length;d<e;d++)document.cookie=b+"=; path="+a[d]+"; expires="+c},expireActiveCookies:function(b){for(var a=location.pathname.replace(/\/$/,"").split("/"),c=[],d=0,e=a.length,f;d<e;d++)f=a.slice(0,d+1).join("/"),f=f.replace(/\.([\w]+)/gi,""),""!=f&&(c.push(f),c.push(f+"/"));0<c.length&&ADM_AdsTracking.expireAllCookies(b,c)},check:function(b,a){switch(b){case "__ui":case "__uid":case "__create":if(2==
arguments.length&&"__uid"==b||"__create"==b&&""!=a){ADM_AdsTracking.paramFlash[b]=a;var c=ADM_AdsTracking.getFlashMovie("_admFlck");c&&c.setck&&c.setck(ADM_AdsTracking.paramFlash)}var d=ADM_AdsTracking.get("__uif")+"";if(""==d)d=b+":"+a;else{for(var c=b+":"+a,d=d.split("|"),e=[],f=0,g=d.length;f<g;f++)-1==d[f].indexOf(b+":")&&e.push(d[f]);e.push(c);d=e.join("|")}ADM_AdsTracking.set("__uif",d,10);break;default:d=ADM_AdsTracking.get(b),2==arguments.length&&""!=a&&"0"!=a&&"-1"!=a&&(ADM_AdsTracking.paramFlash[b]=
a,(c=ADM_AdsTracking.getFlashMovie("_admFlck"))&&c.setck&&c.setck(ADM_AdsTracking.paramFlash)),d!=a&&ADM_AdsTracking.set(b,a,"")}}};};
if(typeof(admaddEventListener)=='undefined'){
	function admaddEventListener(d,c,a){"addEventListener"in d?d.addEventListener(c,a):"attachEvent"in d&&d.attachEvent("on"+c,a)};
}
if(typeof(wPrototype)=='undefined'){
	var wPrototype={wdHeight:function(){var a,b=document;"number"==typeof window.innerWidth?a=window.innerHeight:b.documentElement&&b.documentElement.clientHeight?a=b.documentElement.clientHeight:b.body&&b.body.clientHeight&&(a=b.body.clientHeight);return a},wdWidth:function(){var a,b=document;"number"==typeof window.innerWidth?a=window.innerWidth:b.documentElement&&b.documentElement.clientWidth?a=b.documentElement.clientWidth:b.body&&b.body.clientWidth&&(a=b.body.clientWidth);return a},getElementTop:function(a){var b=
document;if(b.getElementById)var c=b.getElementById(a);else b.all&&(c=b.all[a]);if(null!=c){yPos=c.offsetTop;for(tempEl=c.offsetParent;null!=tempEl;)yPos+=tempEl.offsetTop,tempEl=tempEl.offsetParent;return yPos}return 150},getElementWidth:function(a){return document.getElementById(a).clientWidth},getElementLeft:function(a){var b,c=document;c.getElementById?b=c.getElementById(a):c.all&&(b=c.all[a]);a=b.offsetLeft;for(b=b.offsetParent;null!=b;)a+=b.offsetLeft,b=b.offsetParent;return a},scrollTop:function(){var a=
document,b=a.body.scrollTop;0==b&&(b=window.pageYOffset?window.pageYOffset:a.body.parentElement?a.body.parentElement.scrollTop:0);return b},scrollLeft:function(){var a=document,b=window.pageXOffset?window.pageXOffset:0,c=a.documentElement?a.documentElement.scrollLeft:0,a=a.body?a.body.scrollLeft:0,b=b?b:0;if(c&&(!b||b>c))b=c;return a&&(!b||b>a)?a:b},bdWidth:function(){var a=document;return bodyWidth=Math.max(Math.max(a.body.scrollWidth,a.documentElement.scrollWidth),Math.max(a.body.offsetWidth,a.documentElement.offsetWidth),
Math.max(a.body.clientWidth,a.documentElement.clientWidth))},bdHeight:function(){var a=document;return Math.max(Math.max(a.body.scrollHeight,a.documentElement.scrollHeight),Math.max(a.body.offsetHeight,a.documentElement.offsetHeight),Math.max(a.body.clientHeight,a.documentElement.clientHeight))}};
}
var _ADMFlashDetect = new function(){
	var self = this;
	self.installed = false;
	self.raw = "";
	self.major = -1;
	self.minor = -1;
	self.revision = -1;
	self.revisionStr = "";
	var activeXDetectRules = [
		{
			"name":"ShockwaveFlash.ShockwaveFlash.7",
			"version":function(obj){
				return getActiveXVersion(obj);
			}
		},
		{
			"name":"ShockwaveFlash.ShockwaveFlash.6",
			"version":function(obj){
				var version = "6.0.r21";
				try{
					obj.AllowScriptAccess = "always";
					version = getActiveXVersion(obj);
				}catch(err){}
				return version;
			}
		},
		{
			"name":"ShockwaveFlash.ShockwaveFlash",
			"version":function(obj){
				return getActiveXVersion(obj);
			}
		}
	];
   
	var getActiveXVersion = function(activeXObj){
		var version = -1;
		try{
			version = activeXObj.GetVariable("$version");
		}catch(err){}
		return version;
	};
   
	var getActiveXObject = function(name){
		var obj = -1;
		try{
			obj = new ActiveXObject(name);
		}catch(err){
			obj = {activeXError:true};
		}
		return obj;
	};
	
	var parseActiveXVersion = function(str){
		var versionArray = str.split(",");//replace with regex
		return {
			"raw":str,
			"major":parseInt(versionArray[0].split(" ")[1], 10),
			"minor":parseInt(versionArray[1], 10),
			"revision":parseInt(versionArray[2], 10),
			"revisionStr":versionArray[2]
		};
	};
   
	var parseStandardVersion = function(str){
		var descParts = str.split(/ +/);
		var majorMinor = descParts[2].split(/\./);
		var revisionStr = descParts[3];
		return {
			"raw":str,
			"major":parseInt(majorMinor[0], 10),
			"minor":parseInt(majorMinor[1], 10), 
			"revisionStr":revisionStr,
			"revision":parseRevisionStrToInt(revisionStr)
		};
	};
  
	var parseRevisionStrToInt = function(str){
		return parseInt(str.replace(/[a-zA-Z]/g, ""), 10) || self.revision;
	};
  
	self.majorAtLeast = function(version){
		return self.major >= version;
	};
 
	self.minorAtLeast = function(version){
		return self.minor >= version;
	};
   
	self.revisionAtLeast = function(version){
		return self.revision >= version;
	};
	
	self.versionAtLeast = function(major){
		var properties = [self.major, self.minor, self.revision];
		var len = Math.min(properties.length, arguments.length);
		for(i=0; i<len; i++){
			if(properties[i]>=arguments[i]){
				if(i+1<len && properties[i]==arguments[i]){
					continue;
				}else{
					return true;
				}
			}else{
				return false;
			}
		}
	};
  
	self._ADMFlashDetect = function(){
		if(navigator.plugins && navigator.plugins.length>0){
			var type = 'application/x-shockwave-flash';
			var mimeTypes = navigator.mimeTypes;
			if(mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description){
				var version = mimeTypes[type].enabledPlugin.description;
				var versionObj = parseStandardVersion(version);
				self.raw = versionObj.raw;
				self.major = versionObj.major;
				self.minor = versionObj.minor; 
				self.revisionStr = versionObj.revisionStr;
				self.revision = versionObj.revision;
				self.installed = true;
			}
		}else if(navigator.appVersion.indexOf("Mac")==-1 && window.execScript){
			var version = -1;
			for(var i=0; i<activeXDetectRules.length && version==-1; i++){
				var obj = getActiveXObject(activeXDetectRules[i].name);
				if(!obj.activeXError){
					self.installed = true;
					version = activeXDetectRules[i].version(obj);
					if(version!=-1){
						var versionObj = parseActiveXVersion(version);
						self.raw = versionObj.raw.replace('Shockwave Flash ','');
						self.major = versionObj.major;
						self.minor = versionObj.minor; 
						self.revision = versionObj.revision;
						self.revisionStr = versionObj.revisionStr;
					}
				}
			}
		}
	}();
}
var paramBrowser={
	screen_Resolution:screen.width+''+screen.height,
	screen_Color:screen.colorDepth,
	hostname:document.domain.replace('www.',''),
	cookieEnabled:(navigator.cookieEnabled)?1:0,
	javaEnabled:(navigator.javaEnabled())?1:0,
	referrer:document.referrer,
	url:function(){
		var strlocation=(window.location != window.parent.location) ? document.referrer : document.location+"";
		var hostname=this.hostname;
		if(hostname==''){
			return strlocation;
		}
		else{
			return strlocation.substring(strlocation.indexOf(hostname)+hostname.length,strlocation.length);
		}
	},
	flashVersion:function(){
		var version=_ADMFlashDetect.major+'.'+_ADMFlashDetect.minor+'.'+_ADMFlashDetect.revisionStr;
		return version;
	 },
	zenURL:{
		encode:function(url){
			var hostname=document.domain;
			if(hostname.indexOf('muachung.vn')!=-1){
				if(url.indexOf('http://')==-1){
					if(typeof(ADS_CHECKER)=='undefined'){
						var mc_city='';
					}
					else{
						var mc_city=ADS_CHECKER.getCookie('mc_city');
					}
					var f=["/ha-noi","/tp-ho-chi-minh","/da-nang","/nha-trang","/vung-tau","/hai-phong"];
					var r=["/Ha-Noi","/TP-HCM","/Da-Nang","/Khanh-Hoa","/Ba-Ria-Vung-Tau","/Hai-Phong"];
					for(var i=0;i<f.length;i++){
						if(url.indexOf(f[i])==0){
							url=url.replace(f[i],r[i]);
							return encodeURIComponent(url);
						}
					}
					var k={"22":"/Ha-Noi","29":"/TP-HCM","15":"/Da-Nang","68":"/Khanh-Hoa","26":"/Hai-Phong","67":"/Ba-Ria-Vung-Tau"};
					if(mc_city!='' && (typeof(k[mc_city])!='undefined')){
						url=k[mc_city]+url;
	
					}
				}
				return encodeURIComponent(url);
				
			}
			else{
				return encodeURIComponent(url);
			}
		},
		decode:function(url){
			var encoded=url;
			return decodeURIComponent(encoded.replace(/\+/g,  " "));
		}
	}
}
var _ADMBrowser = {
	  Version: function() {
		var version = 999; // we assume a sane browser
		var userAgen=navigator.userAgent+'';
		if (navigator.appVersion.indexOf("MSIE") != -1)
	  	{
		  // bah, IE again, lets downgrade version number
		  version = parseFloat(navigator.appVersion.split("MSIE")[1]);
		}
		if(userAgen.indexOf('Trident')!=-1){
			var c=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgen);
			if(c && c.length>=2){
				version=parseFloat(c[1]);
			}
		}
		return version;
	  }
}
var _admBrV=_ADMBrowser.Version();

function ADM_TrackingSendChk(){
	//window['__ADMTimeTk']
	if(__ADMwdVis()){
		__ADMisActive=1;
	}
	else{
		__ADMisActive=0;
	}
	var tkTime=Math.floor((new Date()).getTime()/1000);
	if(__ADMisActive==1 || (tkTime-__ADMTimeTk)>=120){
		__ADMTimeTk=tkTime;
		var img =new Image();
		img.src=window['__ADMTrackingSendUrl']+'&i=p;'+__admPageloadid+';'+__ADMScrollcounter+';'+__ADMScrollEnd+';'+__ADMisActive+';'+__ADMMouse+';'+__ADMTouch+';'+(wPrototype.wdWidth()+'x'+wPrototype.wdHeight());
	}
	if(_admBrV<999){
		window.setTimeout('ADM_TrackingSendChk()',20000);
	}
	else{
		window.setTimeout('ADM_TrackingSendChk()',60000);
	}
}
var __ADMwdVis = (function(){
    var stateKey, eventKey, keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return function(c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
    }
})();
function ADM_TrackingSend(){
    if(typeof(__ADM_TrackingSend)!='undefined' && __ADM_TrackingSend===true){
		return false;
	}
	var chkBrowser=ADM_AdsTracking.checkBrowser(), url = "",g=0;
	if(typeof(ADS_CHECKER)=='undefined'){
		url="//lg.logging.admicro.vn/tracking_none_ads1.gif?";
		
	}else{
		url="//lg.logging.admicro.vn/_tracking1.gif?";
	}
	url += "fl="+paramBrowser.flashVersion();
	url += "&je="+paramBrowser.javaEnabled;
	url += "&sr="+paramBrowser.screen_Resolution;
	url += "&sc="+paramBrowser.screen_Color;
	url += "&hn="+paramBrowser.hostname;
	url += "&p="+paramBrowser.zenURL.encode(paramBrowser.url());	
	url += "&r="+((paramBrowser.referrer=='')?paramBrowser.referrer:paramBrowser.zenURL.encode(paramBrowser.referrer));	
	var __ifr=function(){try{return window.self!==window.top}catch(a){return!0}}();
	__ifr=__ifr?1:0;
	if(typeof(ADS_CHECKER)!='undefined'){
		if(paramBrowser.hostname.indexOf('enbac.com')!=-1){
			g=(ADS_CHECKER.getCookie('province_id')!='')?ADS_CHECKER.getCookie('province_id'):0;
		}
		if(paramBrowser.hostname.indexOf('rongbay.com')!=-1){
			g=(ADS_CHECKER.getCookie('cityid')!='')?ADS_CHECKER.getCookie('cityid'):0;
		}
		if(paramBrowser.hostname.indexOf('muachung.vn')!=-1){
			g=(ADS_CHECKER.getCookie('muachung_cityMC')!='')?ADS_CHECKER.getCookie('muachung_cityMC'):0;
		}
	}
	url += "&g="+g;
	window['__ifr']=__ifr;
	window['__ADM_TrackingSend']=true;
	window['__ADMScrollcounter']=0;
	window['__ADMScrollEnd']=0;
	window['__ADMTrackingSendUrl']=url;
	window['__ADMTouch']=0;
	window['__ADMMouse']=0;
	window['__ADMisActive']=0;
	window['__ADMTimeTk']=Math.floor((new Date()).getTime()/1000);
	try{
		if(__ADMwdVis()){
			window['__ADMisActive']=1;
		}
	}
	catch(e){
	}
	url+='&i=s;'+__admPageloadid+';0;0;'+__ADMisActive+';'+__ADMMouse+';'+__ADMTouch+';'+(wPrototype.wdWidth()+'x'+wPrototype.wdHeight())+';'+window['__ifr'];
	if(chkBrowser===true){
		var a = document.createElement("iframe");
		a.src = url+ADM_AdsTracking.getParam();
		a.style.width="12px";
		a.style.height="12px";
		a.style.visibility="hidden";
		a.style.position='absolute';
		a.style.left='0px';
		a.style.bottom='0px';
		a.style.border='none';
		a.target="admTrackmain";
		a.name="admIframeTracking";
		a.id="admIframeTracking";
		document.body.appendChild(a);
		var respondMessage = function (e) {
			
			//detect url domain not full url. get send data
			if (e.origin.indexOf('logging.admicro.vn')!=-1) {
				var data=e.data;
				if(typeof(data)=='object'){
					try{
						
						if(data[0]=='__CRT'){
							data[0]='__create';
						}
						if(data[0]=='__UF'){
							data[0]='__ui';
						}
						if(data[0]!='__C'){
							ADM_AdsTracking.check(data[0],data[1],'','/');
							//ADM_Storage.setStorage(data[0],data[1],365*(24*60),'/');
						}
						
						//localStorage[data[0]]=data[1];
					}catch(e){}
				}
			}
		}
		if (window.addEventListener) {
			window.addEventListener('message', respondMessage, false);
		}
		else{
			window.attachEvent('onmessage', respondMessage, false);
		}
		
		
	}
	else{
		//browser support cookie.
		var a = document.createElement("script");
		a.type = "text/javascript";
		a.async = true;
		a.src = url;
		var c = document.getElementsByTagName("script")[0];
		c.parentNode.insertBefore(a, c);
	}
	admaddEventListener(window,'scroll',function(){
		window['__ADMScrollcounter']=window['__ADMScrollcounter']+1;
		var intChk=wPrototype.bdHeight()-(wPrototype.scrollTop()+wPrototype.wdHeight()+100);
		if(intChk<0){
			window['__ADMScrollEnd']=1;
		}
	});
	admaddEventListener(window,'blur',function(){
		__ADMisActive=0;
	});
	admaddEventListener(window,'focus',function(){
		__ADMisActive=1;
	});
	if("ontouchstart" in window){
		admaddEventListener(document,"touchmove",function(e){
			__ADMTouch++;
		});
	}
	admaddEventListener(document,"mousemove",function(e){
		__ADMMouse++;
	});
	if(_admBrV<999){
		window.setTimeout('ADM_TrackingSendChk()',5000);
	}
	else{
		window.setTimeout('ADM_TrackingSendChk()',5000);
	}
	if(('beforeunload' in window) || ('onbeforeunload' in window)){
		if (navigator.userAgent.indexOf("Firefox")!=-1){
			admaddEventListener(window,'unload',function(){
				var img =new Image();
				img.src=window['__ADMTrackingSendUrl']+'&i=e;'+__admPageloadid+';'+window['__ADMScrollcounter']+';'+window['__ADMScrollEnd']+';'+__ADMisActive+';'+__ADMMouse+';'+__ADMTouch+';'+(wPrototype.wdWidth()+'x'+wPrototype.wdHeight())+';'+window['__ifr'];
			});
		}
		else{
			admaddEventListener(window,'beforeunload',function(){
				var img =new Image();
				img.src=window['__ADMTrackingSendUrl']+'&i=e;'+__admPageloadid+';'+window['__ADMScrollcounter']+';'+window['__ADMScrollEnd']+';'+__ADMisActive+';'+__ADMMouse+';'+__ADMTouch+';'+(wPrototype.wdWidth()+'x'+wPrototype.wdHeight())+';'+window['__ifr'];
			});
		}
	}
}
ADM_TrackingSend();
function _admloadJs1(c,b){var a=document.createElement("script");a.type="text/javascript";a.src=c;2<=arguments.length&&(a.onload=b,a.onreadystatechange=function(){4!=a.readyState&&"complete"!=a.readyState||b()});document.getElementsByTagName("head")[0].appendChild(a)}

(function(){
	var __admDomain1=document.domain+'';
	var adm_headers={};
	/*var chkfigp=ADM_AdsTracking.getCookie("__fipgads") ;
	if(chkfigp==""){*/
		
			/*_admloadJs1('//dl.logging.admicro.vn/figh',function(){
				if(typeof(adm_headers)!='undefined'){*/
					_admloadJs1('//admicro1.vcmedia.vn/fingerprint/figp.js');
			/*	}
			});*/
		//ADM_AdsTracking.setCookie("__fipgads",1,0.004,"/") ;
	//}
})();