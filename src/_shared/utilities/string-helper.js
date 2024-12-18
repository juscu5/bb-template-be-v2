const titleBuilder = (title) =>
  title.toLowerCase().split(" ").join("-").split(".")[0];

module.exports = { titleBuilder };
