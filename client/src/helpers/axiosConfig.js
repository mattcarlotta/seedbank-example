import get from "lodash/get";
import axios from "axios";
// import { inDevelopment, APIPORT } from "../../../config/envs";

const app = axios.create({
  // baseURL: inDevelopment
  //   ? `http://localhost:${APIPORT}/api/`
  //   : "https://example.com",
  baseURL: "http://localhost:5000/api/"
});

app.interceptors.response.use(
  response => response,
  error => {
    const err = get(error, ["response", "data", "err"]);

    // "err" refers to the response returned from the API when
    // a response is rejected. "err" can be named anything, but it
    // must be consistent across all your API routes (for example, see
    // anarchive/routes/api => verify route )
    return Promise.reject(err ? err : error.message);
  }
);

export default app;
