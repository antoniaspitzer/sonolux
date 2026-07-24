const API = "http://localhost:1337/api";

export async function getProjects() {
  const res = await fetch(`${API}/projects?populate=*`);
  return res.json();
}