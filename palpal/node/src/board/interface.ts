export interface boardRegister {
  title: string;
  content: string;
  writer: string;
  email: string;
}
export interface boardAndUserData {
  title: string;
  content: string;
  writer: string;
  ownerId: number;
}

export interface pageListNum {
  page: number;
  pageSize: number;
}

export interface pageListStartNum {
  start: number;
  pageSize: number;
}
