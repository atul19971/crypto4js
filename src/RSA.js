/**
 * @author Atul.Singh
 */
var RSA = (function() {
	var bs64 = new Base64();
	function RSA(modulus, exponent) {

		if (bs64.isBase64(modulus) && bs64.isBase64(exponent)) {
			this.modulus = new BigInteger(bs64.base64ToHex(modulus), 16);
			this.exponent = parseInt(bs64.base64ToHex(exponent), 16);
		} else {
			this.modulus = new BigInteger(modulus, 16);
			this.exponent = parseInt(exponent, 16);
		}
	}

	RSA.prototype = {
		encrypt : encrypt,
		decrypt : decrypt,
	}

	function encrypt(text) {
		var pkcs = new PKCSUtil();
		var paddedText = pkcs.getPKCS1PaddedString(text, (this.modulus
				.bitLength() + 7) >> 3);

		var encrypedBigInt = paddedText.modPowInt(this.exponent, this.modulus);
		return bs64.hexToBase64(encrypedBigInt.toString(16));
	}
	function decrypt(modulus, exponent) {

	}

	return RSA;
}())