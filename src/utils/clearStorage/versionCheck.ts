import { APP_VERSION } from "../../version";
import { clearStorage } from "./clearStorage";

export const checkAndHandleVersion = async () => {
  const storedVersion = localStorage.getItem("app_version");

  if (storedVersion !== APP_VERSION) {
    // alert("clear data")
    await clearStorage();
    localStorage.setItem("app_version", APP_VERSION);
    window.location.reload();
  }
};
