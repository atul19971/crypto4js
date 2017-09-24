/**
 * @author Atul.Singh
 */
var PKCSUtil = (function() {
	function PKCSUtil() {
	}
	PKCSUtil.prototype = {
		getPKCS1PaddedString : getPKCS1PaddedString
	}
	function getPKCS1PaddedString(s, n) {
		if (n < s.length + 11) {
			alert("Message too long for RSA");
			return null;
		}
		var ba = new Array();
		var i = s.length - 1;
		while (i >= 0 && n > 0) {
			var c = s.charCodeAt(i--);
			if (c < 128) {
				ba[--n] = c;
			} else if ((c > 127) && (c < 2048)) {
				ba[--n] = (c & 63) | 128;
				ba[--n] = (c >> 6) | 192;
			} else {
				ba[--n] = (c & 63) | 128;
				ba[--n] = ((c >> 6) & 63) | 128;
				ba[--n] = (c >> 12) | 224;
			}
		}
		ba[--n] = 0;
		var rng = new RNGUtil();
		var x = new Array();
		while (n > 2) {
			x[0] = 0;
			while (x[0] == 0)
				rng.nextBytes(x);
			ba[--n] = x[0];
		}
		ba[--n] = 2;
		ba[--n] = 0;
		return new BigInteger(ba);
	}
	return PKCSUtil;

}())