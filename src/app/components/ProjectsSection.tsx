import fs from "fs";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import matter from "gray-matter";
import { ProjectMetadata } from "@/interfaces/ProjectMetadata";

const getProjectsMetadata = (): ProjectMetadata[] => {
  const folder = "src/projects";
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => file.endsWith(".md"));

  const projects = markdownProjects.map((fileName) => {
    const fileContents = fs.readFileSync(`src/projects/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      order: matterResult.data.order,
      title: matterResult.data.title,
      short_description: matterResult.data.short_description,
      background_image: matterResult.data.background_image,
      github_link: matterResult.data.github_link,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
    };
  });

  return projects;
};

const ProjectsSection = () => {
  const projectsMetadata = getProjectsMetadata();
  const projectsPreviews = projectsMetadata.map((project, index) => (
    <article key={index} className="relative bg-[#181818] p-4 md:p-6 rounded-lg border border-transparent transition duration-300 hover:scale-[1.01] hover:border-purple-500 inline-block h-[500px] max-w-[400px]">
      <div className="mb-4 h-[150px] md:h-[250px]">
        <img
          src={project.background_image}
          alt={`${project.title}-image`}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-extrabold text-purple-500">
        {project.title}
      </h3>
      <div className="flex flex-row gap-2">
        {project.tags.map((tag, index) => (
          <p key={index} className="text-xs bg-[#222222] rounded-xl px-2 py-[0.15rem]">
            {tag}
          </p>
        ))}
      </div>
      <p className="text-sm font-normal py-2 max-h-[85px] overflow-hidden text-gray-400">
        {project.short_description}
      </p>
      <div className="absolute bottom-4 left-6 flex gap-2">
        <a
          href={`/projects/${project.slug}`}
          className="rounded-md px-3 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-purple-600 text-purple-600"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-purple-600 transition duration-300 group-hover:text-white ease">
            Details
          </span>
        </a>
        <a
          href={project.github_link}
          target="_blank"
          className="rounded-md px-3 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-purple-600 text-purple-600"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-purple-600 transition duration-300 group-hover:text-white ease">
            Github
          </span>
        </a>
      </div>
    </article>
  ));

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center py-9">
        <p className="text-base text-purple-500">My Projects!</p>
        <h2 className="text-3xl font-extrabold">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {projectsPreviews}
      </div>
    </section>
  );
};

export default ProjectsSection;
