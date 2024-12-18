const fs = require("fs");
const path = require("path");
const { DataTypes } = require("sequelize");

function initModels(sequelize) {
  const models = {};
  const featuresDir = path.join(__dirname, "../../");

  try {
    // Read feature directories
    const featureDirs = fs.readdirSync(featuresDir);

    featureDirs.forEach((feature) => {
      const modelsDir = path.join(featuresDir, feature, "models");

      // Check if the models directory exists and is a directory
      if (fs.existsSync(modelsDir) && fs.lstatSync(modelsDir).isDirectory()) {
        const modelFiles = fs.readdirSync(modelsDir);

        modelFiles.forEach((file) => {
          if (file.endsWith(".js")) {
            const modelPath = path.join(modelsDir, file);

            try {
              // Dynamically require model file
              const model = require(modelPath)(sequelize, DataTypes);
              const modelName = model.name;

              if (!modelName) {
                console.warn(`Model in file ${file} does not have a name.`);
                return;
              }

              if (models[modelName]) {
                console.warn(`Duplicate model name detected: ${modelName}`);
              }

              models[modelName] = model;
            } catch (error) {
              console.error(`Error loading model from file ${file}:`, error);
            }
          }
        });
      }
    });

    // Set up any associations if needed
    Object.keys(models).forEach((modelName) => {
      if (models[modelName].associate) {
        models[modelName].associate(models);
      }
    });
  } catch (error) {
    console.error("Error initializing models:", error);
  }

  return models;
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
