export const handleLoginMessages = (codeError) => {
  let message = '';
  if (codeError === 'auth/user-not-found') {
    message = 'El usuario no fue encontrado';
  }
  if (codeError === 'auth/wrong-password') {
    message = 'La contraseña ingresada es incorrecta';
  }
  if (codeError === 'auth/too-many-requests') {
    message = 'Se superó el límite de intentos, vuelva a intentar luego';
  }
  if (codeError === 'Cuenta creada exitosamente, Por favor inicia sesión') {
    message = 'Cuenta creada exitosamente, Por favor inicia sesión';
  }
  return message;
};

export const handleRegisterMessages = (codeError) => {
  let message = '';
  if (codeError === 'auth/user-not-found') {
    message = 'El usuario no fue encontrado';
  }
  if (codeError === 'auth/wrong-password') {
    message = 'La contraseña ingresada es incorrecta';
  }
  if (codeError === 'auth/too-many-requests') {
    message = 'Se superó el límite de intentos, vuelva a intentar luego';
  }
  return message;
};
