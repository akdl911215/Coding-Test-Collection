import { client } from "./Client";
import { backUrl } from "../config/Config";

export const UserSignupDataAPI = (user) =>
  client.post(backUrl + "/users/signup", user);

export const UserSigninDataAPI = (user) =>
  client.post(backUrl + "/users/signin", user);
