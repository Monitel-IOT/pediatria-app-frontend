// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA49Qavx7XcIT8tanKNn09ffpL3W2tXMeM',
  authDomain: 'pediatria-app.firebaseapp.com',
  projectId: 'pediatria-app',
  storageBucket: 'pediatria-app.appspot.com',
  messagingSenderId: '607771684612',
  appId: '1:607771684612:web:67501bfbbf6649fe692a51',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
