import { getProjects } from "@/lib/strapi";

export default async function ReferenzenPage() {
  const data = await getProjects();

  return (
    <div>
      {data.data.map((project: any) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
        </div>
      ))}
    </div>
  );
}