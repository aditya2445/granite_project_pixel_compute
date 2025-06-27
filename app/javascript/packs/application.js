// // Entry point for the build script in your package.json
// import "../stylesheets/application.scss"
// import "@hotwired/turbo-rails"
// import "./controllers"
import { initializeLogger } from "../src/common/logger";
import "../stylesheets/application.scss";

import { setAuthHeaders } from "apis/axios";
initializeLogger();
setAuthHeaders();
