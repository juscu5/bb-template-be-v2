const crypto = require("crypto");

const encryptSHA1 = (password) => {
  const shasum = crypto.createHash("sha1");
  shasum.update(password);
  return shasum.digest("hex");
};
module.exports = { encryptSHA1 };
