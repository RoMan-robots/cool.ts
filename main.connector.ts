import { APICall, Storage } from "./core/connector";

export const userApi = new APICall(
  "https://jsonplaceholder.typicode.com/users/1",
  "GET",
);

export async function init() {
  console.log("[Connector] Ready to fetch data...");
}

export async function fetchUser() {
  console.log("[Connector] Fetching user...");
  await userApi.run();
  const result = await userApi.getStatus();
  console.log("Response from API:", result);
  new Storage("cookie").set("user", JSON.stringify(result?.response));
  return result?.response;
}
