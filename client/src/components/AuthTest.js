import app from "../helpers/axiosConfig";

const headers = {
  Authorization:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
};

// when the main route is loaded, this function will
// attempt to log a user in using the JWT token above.
// the token will be invalid as determined by the API.
(async () => {
  try {
    const res = await app.get("auth/verify", { headers });

    localStorage.setItem("token", res.data.token);
  } catch (err) {
    alert(err.toString());
  }
})();
