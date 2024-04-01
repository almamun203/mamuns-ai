import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg'
import { MdDelete } from "react-icons/md";

const BlogCard = ({blog,deletable,handleDelete}) => {
	
	const {title,cover_image,description,published_at,id}=blog;


    return (
        <div className='bg  bg-slate-600  transition border-2 hover:scale-105  border-primary hover:border-secondary border-opacity-30'>
			<div className='flex relative'>
            <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
						{title}
					</h3>
					<span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
	{deletable && <div onClick={()=>handleDelete(id)} className=' absolute bg-primary p-1 rounded-full hover:scale-105 -top-5 -right-5'><MdDelete size={20} className='text-secondary group-hover:text-primary' /></div>}
	</div>
        </div>
    );
};

BlogCard.propTypes={
	blog:PropTypes.object,
	deletable:PropTypes.bool,
	handleDelete:PropTypes.func

}


export default BlogCard;