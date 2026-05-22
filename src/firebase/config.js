import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Cole aqui o objeto exato que o site do Firebase te deu
const firebaseConfig = {
  apiKey: "SUA_API_KEY_REAL",
  authDomain: "SEU_DOMINIO_REAL",
  projectId: "SEU_PROJECT_ID_REAL",
  storageBucket: "SEU_BUCKET_REAL",
  messagingSenderId: "SEU_SENDER_ID_REAL",
  appId: "SEU_APP_ID_REAL"
};

// Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// CRIA E EXPORTA AS DUAS VARIÁVEIS QUE O APP.JSX PROCURA
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;