const { models } = require("../config/config-db");

// Helper function to increment the letter part
const incrementLetterPart = (letters) => {
  let result = "";
  let carry = true;

  for (let i = letters.length - 1; i >= 0; i--) {
    if (carry) {
      if (letters[i] === "Z") {
        result = "A" + result;
      } else {
        result = String.fromCharCode(letters.charCodeAt(i) + 1) + result;
        carry = false;
      }
    } else {
      result = letters[i] + result;
    }
  }

  if (carry) {
    result = "A" + result;
  }

  return result;
};

const getSysparIncNum = async (field) => {
  const syspar = await models.syspar.findOne({});
  const code = syspar[field];

  // Extract the numeric and letter parts
  const numericPart = code.match(/\d+/)[0];
  const letterPart = code.match(/^[A-Z]+/)[0];

  // Convert numeric part to an integer and increment it
  const number = parseInt(numericPart, 10);
  const incrNumber = number + 1;

  // Check if numeric part needs to roll over
  let newLetterPart = letterPart;
  let newNumber = incrNumber;
  if (incrNumber > 9999999999) {
    // Assuming 10 digits max
    newLetterPart = incrementLetterPart(letterPart);
    newNumber = 1; // Reset number part
  }

  // Pad the incremented number with leading zeros
  const paddedNumber = String(newNumber).padStart(10, "0");

  // Construct and save the new docnum to the syspar
  const newCode = code.replace(
    /^[A-Z]+-\d+/,
    `${newLetterPart}-${paddedNumber}`
  );
  syspar[field] = newCode;
  await syspar.save();

  return newCode;
};

const getSysparDocnum = async (field) => {
  const syspar = await models.syspar.findOne({});
  const docnum = syspar[field];

  // Extract the number from the docnum
  const number = parseInt(docnum.match(/\d+/)[0], 10);
  const incrNumber = number + 1;
  // Pad the number with leading zeros
  const paddedNumber = String(incrNumber).padStart(10, "0");
  // save the new docnum to the syspar
  syspar[field] = syspar[field].replace(/\d+/, paddedNumber);
  await syspar.save();

  return docnum;
};

module.exports = {
  getSysparIncNum,
  getSysparDocnum,
};
