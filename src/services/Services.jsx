import ENV from "../AppConstants";

// Firebase Services
import { HomeService as FBHomeService } from "./HomeService";

// API Services
import { ApiHomeService } from "./Api/ApiHomeService";

const SERVICES = {
  FB: {
    HOME: FBHomeService
  },
  API: {
    HOME: ApiHomeService
  }
};

const appServices = () => {
  return SERVICES[ENV.API_MODE];
};

export default appServices;
