import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQy1XRDMtyM56e3VbxtJUyef2ZaGwBQBA",
  authDomain: "muretta-9682a.firebaseapp.com",
  projectId: "muretta-9682a",
  storageBucket: "muretta-9682a.firebasestorage.app",
  messagingSenderId: "883249030203",
  appId: "1:883249030203:web:3134b568fe33710395281e"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  try {
    const docRef = await addDoc(collection(db, "contact-requests"), {
      ...formData,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving contact form:", error);
    throw error;
  }
}