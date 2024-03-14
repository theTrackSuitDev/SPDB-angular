import { Project } from "./project";
import { User } from "./user";

export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  themeId: Project;
  created_at: string;
  updatedAt: string;
  __v: number;
}