import authReducer from './authSlice';

describe('auth slice', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(
      {
        databaseUser: [],
        user: null,
        loading: false,
        loginError: false,
        registerError: null,
        isUserAuthorized: false,
        nameSurnameLetters: '',
      },
    );
  });
});
