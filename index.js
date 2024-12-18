const express = require("express");
const cors = require('cors');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const { initRoutes } = require("./src/_shared/@init/init-routes");

const environment = process.argv[2] || "dev";
let config;
switch (environment) {
    case 'dev':
      config = require('./src/_shared/config/config.dev.json');
      break;
    case 'prod':
      config = require('./src/_shared/config/config.prod.json');
      break;
    case 'staging':
      config = require('./src/_shared/config/config.staging.json');
      break;
    default:
      throw new Error(`Unknown environment: ${environment}`);
  }

const allowedAppSite = [
  "http://localhost:5173", 
  "http://127.0.0.1:5173", 
  "http://localhost:8085", 
  "http://192.168.2.250:8085", 
]

const corsOptions = {
    origin: allowedAppSite,
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    headers: ["Content-Type", "Authorization", "X-Requested-With"]
};

const xOptions = {
  frameguard: {
    action: 'deny'
  }
}

const app = express();
const port = process.env.PORT || "8080";

app.use(cors(corsOptions));
app.use(helmet(xOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'geolocation=(), midi=(), sync-xhr=(), microphone=(self), camera=(self), magnetometer=(), gyroscope=(), fullscreen=(self), payment=()');
  next();
});
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  next();
});

// Hiding Headers
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.removeHeader('Server');
  // res.setHeader('Server', 'CustomServerName'); // custom server value
  next();
});

async function init() {
    initRoutes(app);

    app.listen(port);
    console.log(`Running at http://${config.db.host}:${port}/api`);
}

init();