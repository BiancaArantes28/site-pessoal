import { getString } from "firebase/remote-config";
import { remoteConfig } from "../../../firebase";

export const useCarrerPage = () => {
    const experiences = getString(remoteConfig, 'carrers');
    console.log(experiences);
    return {
        experiences: JSON.parse(experiences),
    };
};
