export const API = `https://randomuser.me/api/?results=100`;
export const ErrorMessages = {
  usersError: "Fail To Fetch Data",
  reqError: "something went wrong",
};

const API_Key = `AIzaSyCIFlfiS2tOxiBVukxIcjORhhgKQ6ejq5U`;
export const AuthAPI = {
  signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_Key}`,
  signIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_Key}`,
};
