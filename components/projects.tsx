import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "IAMS (Internal Audit Management System)",
      description:
        "A web-based solution with a centralized dashboard for managing audit entries and delivering insightful audit reports instantly.",
      image: "/images/projects/iaet-1.jpg",
      technologies: ["Laravel", "MySQL", "PHP", "JavaScript"],
      liveUrl: "",
      githubUrl: "https://github.com/Afiery/iams",
    },
    {
      title: "SIGAP",
      description:
        "A web-based platform for tracking healthcare license expiry dates, with external notifications for timely renewal reminders and document management.",
      image: "/images/projects/sigap.png",
      technologies: ["Laravel", "MySQL", "PHP", "JavaScript"],
      liveUrl: "",
      githubUrl: "https://github.com/Afiery/sigap",
    },
    {
      title: "SIMPAD",
      description:
        "A web-based system for village administration that facilitates the creation and management of official documents, such as certificates and letters, with ease and efficiency.",
      image: "/images/projects/simpad.jpg",
      technologies: ["Laravel", "MySQL", "PHP", "JavaScript"],
      liveUrl: "",
      githubUrl: "https://github.com/Afiery/simpad",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mt-6 mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcase of my personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
