"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { House, PanelsTopLeft } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Project, projectsList } from "@/constants/Projects";

const Projects = () => {
  const WebApps = projectsList.filter(
    (project) => project.category === "Web Application"
  );
  const MobileApps = projectsList.filter(
    (project) => project.category === "Mobile Application"
  );

  const renderProjectCards = (apps: Project[]) => {
    if (!apps || apps?.length === 0) return null;
    return (
      <div className="max-w-7xl mx-2 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          I&apos;ve been building a lot of things
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Here are some of my featured projects that highlight my expertise and
          passion for development.
        </p>
        <Tabs defaultValue="tab-1" className="mt-10" orientation="horizontal">
          <ScrollArea>
            <TabsList className="mb-3 gap-1 bg-transparent">
              <TabsTrigger
                value="tab-1"
                className="rounded-full hover:cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
              >
                <House
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Web Apps
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="rounded-full hover:cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
              >
                <PanelsTopLeft
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Mobile Apps
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent value="tab-1">{renderProjectCards(WebApps)}</TabsContent>
          <TabsContent value="tab-2">
            {renderProjectCards(MobileApps)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
