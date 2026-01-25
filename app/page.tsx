// app/page.tsx
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { webdevProjects, dataProjects } from "@/lib/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Web Development Projects */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Web Development Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {webdevProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Data Projects */}
      {dataProjects.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Data Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dataProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
