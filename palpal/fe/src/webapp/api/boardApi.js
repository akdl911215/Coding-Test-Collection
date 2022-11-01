import { client } from "./Client";
import { backUrl } from "../config/Config";

export const BoardRegisterDataAPI = (board) =>
  client.post(backUrl + "/board/register", board);
