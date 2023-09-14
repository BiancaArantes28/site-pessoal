import { getString } from "firebase/remote-config";
import { remoteConfig } from "../../../firebase";

export const useAboutMePage = () => {
    const aboutMeText = getString(remoteConfig, 'aboutMe');

    return {
        aboutMeText,
    }
};