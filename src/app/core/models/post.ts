import { Image } from "./image";

export interface Post {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
  date: string;
}
