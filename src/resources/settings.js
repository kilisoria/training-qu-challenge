const PROD = "https://api.a11ybar.com/service";
const DEV = "https://api-dev.a11ybar.net/service";

const settings = {
  SERVICE: {
    prod: PROD,
    dev: DEV,
    BASE_URL: DEV,
    host: ""
  },
  USE_SEGMENT: false
};

if (process.env.NODE_ENV === "local") {
  settings.SERVICE.BASE_URL = DEV;
  settings.SERVICE.host = "http://localhost:8080";
  settings.USE_SEGMENT = false;
}

if (process.env.NODE_ENV === "development") {
  settings.SERVICE.BASE_URL = DEV;
  settings.SERVICE.host = "https://admin-dev.a11ybar.net";
  settings.USE_SEGMENT = false;
}

if (process.env.NODE_ENV === "production") {
  settings.SERVICE.BASE_URL = PROD;
  settings.SERVICE.host = "https://admin.a11ybar.com";
  settings.USE_SEGMENT = true;
}

export default settings;
