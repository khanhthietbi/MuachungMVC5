(function() {
	/*var dmn=document.domain;
	var img1=new Image();
	img1.src='http://lg.logging.admicro.vn/cpx?dmn='+decodeURIComponent(document.URL)+'&cmpg=1060349&items=323731&zid=221&cid=-1&lsn='+dmn;
	var img2=new Image(1,1);
	img2.src='http://lg.logging.admicro.vn/cpx?dmn='+decodeURIComponent(document.URL)+'&cmpg=1060349&items=323737&zid=221&cid=-1&lsn='+dmn;*/
	if (typeof(window.ADS_CPA_CHECKER) == 'undefined') {
		var cpa_core = document.createElement('script'); cpa_core.type = 'text/javascript'; cpa_core.async = true;
		cpa_core.src = '//admicro1.vcmedia.vn/cpa/core/tp2_core.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cpa_core, s);
		}
	if (typeof(window.ADS_CHECKER) == 'undefined') {
		var adm_core = document.createElement('script'); adm_core.type = 'text/javascript'; adm_core.async = true;
		adm_core.src = '//admicro1.vcmedia.vn/core/admicro_core_nld.js';
		s.parentNode.insertBefore(adm_core, s);
	}
})();