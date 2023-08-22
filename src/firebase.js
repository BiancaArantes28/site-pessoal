import { initializeApp } from "firebase/app";
import { fetchAndActivate, getRemoteConfig, getValue, getString, fetchConfig, activate } from "firebase/remote-config";

const firebaseConfig = {
    apiKey: "AIzaSyBbpY_MAy_BwWFPjwzy9i1_gIoVht5jjX8",
    authDomain: "biancaarantes-ae876.firebaseapp.com",
    projectId: "biancaarantes-ae876",
    storageBucket: "biancaarantes-ae876.appspot.com",
    messagingSenderId: "192157255566",
    appId: "1:192157255566:web:36cfc6998f6cb64026c6df",
    measurementId: "G-1YWKZRN1YL"
  };
  
  const app = initializeApp(firebaseConfig);
  
  export const remoteConfig = getRemoteConfig();
  await fetchAndActivate(remoteConfig);