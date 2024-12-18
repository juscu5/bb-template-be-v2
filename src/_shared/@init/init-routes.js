const fs = require("fs");
const path = require("path");
const router = require("express").Router();

const initRoutes = (app) => {
  const featuresDir = path.join(__dirname, "../../");
  const existingRoutes = new Set();

  try {
    const featureDirs = fs.readdirSync(featuresDir);

    featureDirs.forEach((feature) => {
      const routesPath = path.join(featuresDir, feature, "routes");

      // Check if the routes directory exists and is a directory
      if (fs.existsSync(routesPath) && fs.lstatSync(routesPath).isDirectory()) {
        // Read route files in the directory
        const routeFiles = fs.readdirSync(routesPath);

        routeFiles.forEach((file) => {
          if (file.endsWith(".js")) {
            const routePath = path.join(routesPath, file);
            const routeName = path.basename(file, ".js");

            // Validate if Routes already exist
            if (existingRoutes.has(routeName)) {
              console.warn(
                `Route ${routeName} already exists. Skipping file ${file}.`
              );
              return;
            }

            try {
              const { initRoutes: initFeatureRoutes } = require(routePath);

              if (typeof initFeatureRoutes === "function") {
                router.use(`/${routeName}`, initFeatureRoutes());
                existingRoutes.add(routeName);
              } else {
                console.warn(`initRoutes function not found in ${file}`);
              }
            } catch (error) {
              console.error(`Error loading routes from file ${file}:`, error);
            }
          }
        });
      }
    });

    app.use("/api", router);
  } catch (error) {
    console.error("Error initializing routes:", error);
  }
};

module.exports = {
  initRoutes,
};
