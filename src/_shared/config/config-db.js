const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");

const environment = process.argv[2] || "dev";
let config;
switch (environment) {
  case "dev":
    config = require("./config.dev.json");
    break;
  case "prod":
    config = require("./config.prod.json");
    break;
  case "staging":
    config = require("./config.staging.json");
    break;
  default:
    throw new Error(`Unknown environment: ${environment}`);
}

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    dialect: config.db.dialect,
    define: {
      underscored: true,
      freezeTableName: true,
      timestamps: false,
    },
    timezone: "+08:00",
    logging: false,
  }
);

const models = {};

// Function to load models from a directory
const loadModels = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const modelPath = path.join(dirPath, file);
      if (file.endsWith(".js") && fs.lstatSync(modelPath).isFile()) {
        const model = require(modelPath)(sequelize, DataTypes);

        if (!model || !model.name) {
          console.warn(
            `Skipping model in file ${file} as it does not export correctly.`
          );
          return;
        }

        models[model.name] = model;
      }
    });
  }
};

// Load shared models
loadModels(path.join(__dirname, "../models"));

// Load feature-specific models
const featuresDir = path.join(__dirname, "../../");
fs.readdirSync(featuresDir).forEach((feature) => {
  const modelsDir = path.join(featuresDir, feature, "models");
  loadModels(modelsDir);
});

// Set up any associations between models
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  models,
};
