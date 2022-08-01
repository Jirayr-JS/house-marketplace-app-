import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAc7PpMwgbNKqnchIDaiAGlArm5HoS8lRE',
//   authDomain: 'my-project-app-afd0f.firebaseapp.com',
//   projectId: 'my-project-app-afd0f',
//   storageBucket: 'my-project-app-afd0f.appspot.com',
//   messagingSenderId: '452599769382',
//   appId: '1:452599769382:web:269f103202d12b613239e7',
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCGYVksLBz3LwHqlbPo-iz4ErAoJjZBeQM",
//   authDomain: "my-project-app-38e47.firebaseapp.com",
//   projectId: "my-project-app-38e47",
//   storageBucket: "my-project-app-38e47.appspot.com",
//   messagingSenderId: "168465328629",
//   appId: "1:168465328629:web:6f740d4f2fb7bf97d6d8bc"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBohQ4jWkbQu0Qq_gfbe9Nmv5MdEeW-rqs",
  authDomain: "house-marketplace-app-f1e2b.firebaseapp.com",
  projectId: "house-marketplace-app-f1e2b",
  storageBucket: "house-marketplace-app-f1e2b.appspot.com",
  messagingSenderId: "864177048802",
  appId: "1:864177048802:web:a047e759bbbb5aba97e2bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
