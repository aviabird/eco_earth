import ENV from "../AppConstants";

// Firebase Services
import FBHomeService from "./Firebase/FBHomeService";

// API Services
import ApiHomeService from "./Api/ApiHomeService";

export const SERVICES = {
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
