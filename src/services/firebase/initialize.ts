import { initializeApp } from "firebase/app";
import {
  initializeApp as initializeAdminApp,
  getApps,
  deleteApp,
} from "firebase-admin/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

const ADMIN_APP = "adminApp";
const exists = getApps().find((app) => app.name === ADMIN_APP);
if (!!exists?.name) {
  console.log("Firebase Admin App already exists");
  deleteApp(exists);
}

export const firebaseAdminApp = initializeAdminApp(firebaseConfig, ADMIN_APP);
