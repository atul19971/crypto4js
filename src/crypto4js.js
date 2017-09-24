/**
 * @author Atul.Singh
 */
var Crypto = (function() {
	function Crypto() {
	}
	Crypto.prototype = {
		RSAEncrypt : RSAEncrypt,
		RSADecrypt : RSADecrypt
	}
	function RSAEncrypt(modulus, exponent, text) {
		var rsa = new RSA(modulus, exponent);
		return rsa.encrypt(text);
	}
	function RSADecrypt() {

	}
	return Crypto;
}())