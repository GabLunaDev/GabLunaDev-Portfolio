import fs from 'fs'
import Markdown from 'markdown-to-jsx';

const getProjectsContent = (slug: string) => {
  const folder = "src/projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content
};

function PostPage(props:any) {
  const slug = props.params.slug;
  const content = getProjectsContent(slug);
  return (
    <div>
        <h1>This is a Post: {slug}</h1>
        <Markdown>{content}</Markdown>
    </div>
  )
}

export default PostPage