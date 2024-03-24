import { User } from "./user";

export interface Project {
  subscribers: string[];
  posts: Comment[];
  _id: string;
  projectName: string;
  technology: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  gitHubRepo: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}