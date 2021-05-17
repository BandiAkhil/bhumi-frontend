import { UploadedImg } from "./uploaded-img";

export interface Post {
  id: number;
  title: string;
  body: string;
  image: UploadedImg;
  date: string;
}
