/** CPA Core **/
window.ADS_CPA_CHECKER = {
	cpa: true,
	cookies: {
		tid: '__tid',
		tp: '__tp',
		iid: '__iid',
		src: '__src',
		su: '__su',
		st: '__st',
		v: '__v'
	}
};

function _CPA(cpabd_param) {
	var self = this;
	var _d = document.location.host.split('.');
	//self._domain = _d.length > 1 ? _d[_d.length - 2] + '.' + _d[_d.length - 1] : document.location.host;
	self._domain = document.location.host;
	/** check sohagame.vn domain **/
	var soha = self._domain.indexOf('sohagame.vn');
	if (soha >= 0) {
		self._domain = '.sohagame.vn';	
	}
	
	/** get item id **/
	self.getItemId(document.location.pathname);
	
	cpabd_param = typeof (cpabd_param) == 'undefined' ? {} : cpabd_param;
	self.cpabd_param = cpabd_param;
	self.cpabd_logged = false;
};

_CPA.prototype.getItemId = function(p) {
	var self = this;
	var id = null;
	if (p == null || p == '/') {
		return id;
	}
	switch (self._domain) {
		case 'www.lazada.vn':
			if (document.getElementById("pdtsku")) {
				id = document.getElementById("pdtsku").innerHTML;
			}
			break;
	}
	
	if (id != null && id != '') {
		self.setCookie(window.ADS_CPA_CHECKER.cookies.v, id, 30, self._domain);
	}
	return id;
};

_CPA.prototype.init = function() {
	var self = this;
	var cpabd_param = self.cpabd_param;
	
	var tid  = self.getParam('cpa_tid');
    var ctid = self.getCookie('__tid');
   
    var iid  = self.getCookie('__iid');
    if (ctid == 'undefined') {
        ctid = '';
        self.setCookie('__tid', '', 30, self._domain);
    }
    if (tid != '') {
        ctid = tid;
        self.setCookie('__tid', tid, 30, self._domain);
        
        /** get tp **/
        var tp = self.getParam('tp');
        tp = (tp == '') ? 3 : tp;
        if ((tp = parseInt(tp)) > 0) {
        	self.setCookie('__tp', tp, 30, self._domain);
        }
        
        /** get ma **/
        var ma = self.getParam('ma');
        if (ma != '' && ma != null) {
        	self.setCookie('__ma', ma, 30, self._domain);
        }
    }
    
    var s = 0;
    s = (typeof (_CPA_CONVERSION_PAGE) != 'undefined') ? _CPA_CONVERSION_PAGE : s;
    cpabd_param.tid = ctid;
    cpabd_param.s = (typeof(cpabd_param.s) != 'undefined') ? cpabd_param.s : s;
    cpabd_param.iid = (typeof(cpabd_param.iid) != 'undefined') ? cpabd_param.iid : iid;
    if (iid == 'undefined' || iid == '') {
    	self.setCookie('__iid', cpabd_param.iid, 30, self._domain);
    }
    var st = -1;
    cpabd_param.st = typeof(cpabd_param.st) != 'undefined' ? cpabd_param.st : st;
    self.cpabd_param = cpabd_param;
};

/** get param from url **/
_CPA.prototype.getParam = function(a) {
	var v = '';
    if (a = (new RegExp('[?&]' + encodeURIComponent(a) + '=([^&]*)')).exec(location.search)) {
        v = decodeURIComponent(a[1]);
    }
    return v;
};

/** get cookie **/
_CPA.prototype.getCookie = function(a) {
	if (document.cookie.length > 0 && (c_start = document.cookie.indexOf(a + "="), c_start != -1)) {
        c_start = c_start + a.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start, c_end));
    }
    return '';
};

/** set cookie **/
_CPA.prototype.setCookie = function(a, d, c, domain) {
    var b = new Date;
    b.setDate(b.getDate() + c);
    document.cookie = a + "=" + escape(d) + (c == null ? "" : ";path=/;domain=" + domain + ";expires=" + b.toUTCString());
};

/** mobile checking **/
_CPA.prototype.isMobile = function() {
	var self = this;
	/** check url **/
	var src = self.getParam('src');
	var ret = false;
	if (src == 'MOB') {
		self.setCookie('__src', 'MOB', 30, self._domain);
		ret = true;
	} else if (self.getParam('cpa_tid') != '' && self.getCookie('src') != '') {
		self.setCookie('__src', '', -30, self._domain);
	} else if (self.getCookie('cpa_tid') == '' && self.getCookie('src') == 'MOB') {
		ret = true;
	}
    return ret;
};

/** product type **/
_CPA.prototype.getType = function() {
	var self = this;
	var tp = parseInt(self.getCookie('__tp'));
	
	var ret = 'PC';
	switch (tp) {
		case 1:
			ret = 'CPD';
			break;
		case 7:
			ret = 'PLUS';
			break;
		case 2:
		case 8:	
		case 9:
			ret = 'CPM';
			break;
		case 10:
			ret = 'MOB';
			break;
		case 11:
		case 12:
			var ma = self.getCookie('__ma');
			ret = (ma != '' && ma != null) ? 'ADX_MOB' : 'ADX';
			break;
	}
	return ret;
};
_CPA.prototype.getProductType = function() {
	var self = this;
	var tp = parseInt(self.getCookie('__tp'));
	return isNaN(tp) || tp == '' ? -1 : tp;
};

_CPA.prototype.send = function(url) {
	var c = new Image();
    c.src = url;
};

/** start **/
_CPA.prototype.start = function(l) {
	var self = this;
	var cpabd_param = self.cpabd_param;
	var l = typeof(l) == 'undefined' || l == 1 ? 1 : 0;
	var iid = '';
	if (typeof cpabd_param.iid != 'undefined' && cpabd_param.iid != null) iid = cpabd_param.iid;
    if (iid != '') self.setCookie('__iid', cpabd_param.iid, 30, self._domain);
	
    if (typeof cpabd_param != 'undefined' && typeof (cpabd_param.tid) != 'undefined' && cpabd_param.tid != '') {
        var reg = new RegExp("^[0-9]+$");
        if (reg.test(cpabd_param.tid) == false) return false;
        var p = document.location.href;
        p = p.replace('&cpa_tid=' + cpabd_param.tid, '');
        p = p.replace('cpa_tid=' + cpabd_param.tid, '');
        var a = '//lg.logging.admicro.vn/cpa2',
            b = a + '?tid=' + cpabd_param.tid + '&path=' + encodeURIComponent(p),
        	su = self.getCookie(window.ADS_CPA_CHECKER.cookies.su);
        if (su == 1) cpabd_param.s = 1;
        if (typeof cpabd_param.s != 'undefined' && cpabd_param.s >= 0) {
        	b += '&success=' + encodeURIComponent(cpabd_param.s);
        	self.setCookie(window.ADS_CPA_CHECKER.cookies.su, cpabd_param.s, 30, self._domain);
        }
        
        var id = self.getCookie(window.ADS_CPA_CHECKER.cookies.v);
        if (id != '' && id != null) cpabd_param.value = id;
        if (typeof cpabd_param.value != 'undefined' && cpabd_param.value != null && iid != null) iid += '@@@' + cpabd_param.value;
        if (iid != '') b += '&iid=' + encodeURIComponent(iid);
        if (self.isMobile() == true) b += '&src=MOB'; else b += '&src=' + self.getType();
        if (l == 1) {
        	cpabd_param.s == 1 ? self.setCookie(window.ADS_CPA_CHECKER.cookies.su, '', -30, self._domain) : '';
                cpabd_param.s == 1 ? self.setCookie(window.ADS_CPA_CHECKER.cookies.v, '', -30, self._domain) : '';
        	self.send(b);
        }
    }
    if (l == 1) {
    	self.retargetingCreate(cpabd_param.iid);
    }
};

_CPA.prototype.step = function(l) {
	var self = this;
	var cpabd_param = self.cpabd_param;
	var l = typeof(l) == 'undefined' || l == 1 ? 1 : 0;
	var st = self.getCookie(window.ADS_CPA_CHECKER.cookies.st);
	cpabd_param.st = (st > 0 && st != '') ? st : cpabd_param.st;
    if (typeof cpabd_param != 'undefined' && typeof (cpabd_param.tid) != 'undefined' && cpabd_param.tid != '') {
        if (l == 0) {
        	var st = typeof(cpabd_param.st) != 'undefined' ? cpabd_param.st : -1;
        	if (st > 0) self.setCookie(window.ADS_CPA_CHECKER.cookies.st, st, 30, self._domain);
        } else if (l == 1 && cpabd_param.st > 0) {
	    	var reg = new RegExp("^[0-9]+$");
	        if (reg.test(cpabd_param.tid) == false) return false;
	        var p = document.location.href;
	        var iid = '';
	        p = p.replace('&cpa_tid=' + cpabd_param.tid, '');
	        p = p.replace('cpa_tid=' + cpabd_param.tid, '');
	        var a = '//lg.logging.admicro.vn/cpa2',
	            b = a + '?tid=' + cpabd_param.tid + '&path=' + encodeURIComponent(p) + '&success=2';
	        if (typeof cpabd_param.iid != 'undefined' && cpabd_param.iid != null) iid = cpabd_param.iid;
	        if (iid != '') b += '&iid=' + encodeURIComponent(iid);
	        if (self.isMobile() == true) b += '&src=MOB'; else b += '&src=' + self.getType();
	        /** step **/
	        b += '&st=' + cpabd_param.st;
	       	self.send(b);
	       	st > 0 ? self.setCookie(window.ADS_CPA_CHECKER.cookies.st, '', -30,  self._domain) : null;
        }
    }
};

/** re-targeting logging **/
_CPA.prototype.cleanURL = function(url) {
    return(url.replace(/[?&]+([^=&]*)[=]*([^&]*)/gi, ''));
};

_CPA.prototype.retargetingCreate = function(iid) {
	if (typeof(iid) == 'undefined' || iid == '') {
		return false;
	}
	
	var self = this;
	var p = {
		url: encodeURIComponent(self.cleanURL(document.location.href)),
		ref: encodeURIComponent(document.referrer),
		iid: encodeURIComponent(iid),
		tp: encodeURIComponent(self.getProductType())
	};
	var url = '//lg.logging.admicro.vn/rtg_bn?url=' + p.url + '&rf=' + p.ref + '&a=' + p.iid + '&b=' + p.tp;
	self.send(url);
};

var cpabd_param = typeof(cpabd_param) == 'undefined' ? {} : cpabd_param;
var _cpabd = new _CPA(cpabd_param); _cpabd.init(); _cpabd.start(); _cpabd.step();
 _cpabd.retargetingCreate(_cpabd.cpabd_param.iid);