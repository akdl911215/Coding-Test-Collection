import { client } from "./Client";
import { backUrl } from "../config/Config";

export const BoardIdReadDataAPI = (id) =>
  client.post(backUrl + "/board/read", id);

export const BoardRegisterDataAPI = (board) =>
  client.post(backUrl + "/board/register", board);

export const BoardPagenationListDataAPI = (page) =>
  client.post(backUrl + "/board/list", {
    page,
    pageSize: 3,
  });

export const BoardModifyDataAPI = (modify) =>
  client.post(backUrl + "/board/modify", modify);

export const BoardDeleteDataAPI = (id) =>
  client.post(backUrl + "/board/delete", id);
