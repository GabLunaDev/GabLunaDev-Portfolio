import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getProjectsMetadata from "@/utils/getProjectsMetadata";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const getProjectsContent = (slug: string) => {
  const folder = "src/projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const projects = getProjectsMetadata();
  return projects.map((project) => {
    slug: project.slug;
  });
};

function ProjectPage(props: any) {
  const slug = props.params.slug;
  const post = getProjectsContent(slug);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="flex mt-20 items-center h-15vh">
        <Image
          src={post.data.background_image}
          width={500}
          height={200}
          alt=""
          className="mx-auto"
        />
      </div>
      <article className="container mt-10 mx-auto px-12 py-4 prose lg:prose-xl dark:prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}

export default ProjectPage;
