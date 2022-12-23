import { useState, useEffect } from 'react';

const useFirebaseMessage = () => {
  const [firebaseError, setFirebaseError] = useState(null);
  const [message, setMessage] = useState();

  useEffect(() => {
    if (firebaseError === 'auth/user-not-found') {
      setMessage('El usuario no fue encontrado');
    }
    if (firebaseError === 'auth/wrong-password') {
      setMessage('La contraseña ingresada es incorrecta');
    }
    if (firebaseError === 'auth/too-many-requests') {
      setMessage('Se superó el límite de intentos, vuelva a intentar luego');
    }
  }, [firebaseError]);

  return [message, setFirebaseError];
};

export default useFirebaseMessage;
