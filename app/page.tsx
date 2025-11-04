// app/page.tsx
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <h2 className="text-2xl font-bold mt-12 mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
