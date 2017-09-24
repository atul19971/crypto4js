# crypto4js
- crypto4js provides RSA encryption(PKCS1 paading) on javascript.
- This library is based on Tom Wu's @ http://www-cs-students.stanford.edu/~tjw/jsbn/. We have provided wrapper on it so that it can be easily utilized.

# Features

- Crypto4js has implemented RSA encryption(PKCS1Padding) feature with plane javascript.


# Docs

- [Usage](#usage)
  - [Encryption](#encryption)

- [Roadmap](#roadmap)


## Usage

## Encryption

Encryption can be done using public key(modulus and exponent):
```javascript
var modulus = "a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
var exponent = "10001";
var textToEncrypt = "This is cipher Text.";
var crypt=new Crypto();
var base64EncryptedText = crypt.RSAEncrypt(modulus,exponent,textToEncrypt);
```



## Roadmap
- Will add more crypto algorithm in future.
- Decryption will be provided in next release.
