/**
 * @author atul.singh
 */
var Base64 = (function() {
	function Base64() {
	}
	Base64.prototype = {
		hexToBase64 : hexToBase64,
		base64ToHex : base64ToHex,
		isBase64 : isBase64
	}
	function hexToBase64(str) {
		return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "")
				.replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "")
				.split(" ")));
	}

	function base64ToHex(str) {
		for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
			var tmp = bin.charCodeAt(i).toString(16);
			if (tmp.length === 1)
				tmp = "0" + tmp;
			hex[hex.length] = tmp;
		}
		return hex.join(" ");
	}
	function isBase64(str) {
		try {
			return btoa(atob(str)) == str;
		} catch (err) {
			return false;
		}
	}
	return Base64;
}())
