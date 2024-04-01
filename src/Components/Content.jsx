import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog=useLoaderData();
    const {cover_image,placeholderImage,title,tags,body_html,url}=blog;
    console.log(blog);
    return (
        <div className=' p-6  border-2  border-opacity-30'>
        
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderImage} />
            {tags.map(tag=><a key={tag} rel="noopener noreferrer" href="#" className=" px-3  rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)}
            <div className=" space-y-2">
                <a href={url} target='_blank' className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {title}
                </a>
                <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
            </div>
       
    </div>
    );
};

export default Content;