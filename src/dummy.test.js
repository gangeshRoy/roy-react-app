import { get } from "./utils/apiRequest.js";
import "./mocks/localStorage.mock.js";
import "isomorphic-fetch";

test("Blargh", async () => {
  try {
    await fetch("http://localhost:3000/industry/", {
      method: "GET",
      headers: {
        snaphuntjwttoken: "some_token"
      }
    });
  } catch (e) {
    console.log(e);
  }
});
