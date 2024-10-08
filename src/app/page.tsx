import { Experience } from "@/components/Sections/Experience";
import { GridWrapper } from "@/components/Wrapper/GridWrapper";
import Hero from "@/components/Sections/Hero";
import Project from "@/components/Sections/Project";
import Sidebar from "@/components/Sections/Sidebar";
import { workExperienceData } from "@/data/WorkExperienceData";
import { heroData } from "@/data/heroData";
import { projectData } from "@/data/projectData";
import { sidebarData } from "@/data/sidebarData";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="p-5">
      <GridWrapper grid={5} className="max-w-screen-lg mx-auto">
        <GridWrapper grid={1} mobile={5} tablet={5} desktop={5}>
          <div className="flex place-items-center justify-between">
            <div className="mt-12 flex flex-col items-left">
              <span className="flex items-center">
                <h1 className="text-4xl font-bold">
                  Hi, it's me Zuha Shah!{" "}
                  <div className="inline-block animate-waving">
                    {"\u{1F44B}"}
                  </div>
                </h1>
              </span>
              <p className="text-1xl text-muted-foreground">
              Curious about what's been keeping me busy? Reach out via email and let's swap stories!
              </p>
            </div>
            <ModeToggle />
          </div>

          <GridWrapper grid={6} className="mt-12">
            <GridWrapper
              grid={1}
              mobile={6}
              tablet={2}
              desktop={2}
              className="self-start relative"
            >
              <Sidebar
                profilePhoto={sidebarData.profilePhoto}
                twitterUrl={sidebarData.twitterUrl}
                githubUrl={sidebarData.githubUrl}
                email={sidebarData.email}
                linkedInUrl={sidebarData.linkedInUrl}
                resumeUrl={sidebarData.resumeUrl}
                education={sidebarData.education}
              />
            </GridWrapper>
            <GridWrapper grid={1} mobile={6} tablet={4} desktop={4}>
              <Hero
                summary={heroData.summary}
                expertise={heroData.expertise}
                skills={heroData.skills}
              />
              {workExperienceData.map((experience, index) => {
                return (
                  <Experience
                    key={index}
                    companyName={experience.companyName}
                    position={experience.position}
                    time={experience.time}
                    location={experience.location}
                    description={experience.description}
                  />
                );
              })}
            </GridWrapper>
            <GridWrapper grid={1} mobile={6}>
              {projectData.map((project, index) => {
                return (
                  <Project
                    key={index}
                    title={project.title}
                    time={project.time}
                    skills={project.skills}
                    description={project.description}
                    link={project.link}
                    images={project.images}
                  />
                );
              })}
            </GridWrapper>
          </GridWrapper>
        </GridWrapper>
      </GridWrapper>
    </main>
  );
}
