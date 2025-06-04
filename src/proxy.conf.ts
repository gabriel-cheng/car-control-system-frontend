import { environment } from "./environments/environments";

const apiUrl = environment.apiUrl || "http://localhost:8080";

export default {
  "/api": {
    target: apiUrl,
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    pathRewrite: {
      "^/api": ""
    }
  }
}
