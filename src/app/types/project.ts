import { User } from "./user";

export interface Project {
  subscribers: string[];
  posts: string[];
  _id: string;
  projectName: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}