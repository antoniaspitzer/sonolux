// lib/projects.ts
import { getProjects } from "./strapi";

export async function fetchProjects() {
  const data = await getProjects();
  return data.data;
}