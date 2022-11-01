export const sessionRemove = () => {
  sessionStorage.removeItem("jwtToken");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("nickname");
  sessionStorage.removeItem("signinPage");
};
