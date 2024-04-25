import PropTypes from 'prop-types';
import { FaBookBookmark } from 'react-icons/fa6';

const Blog = ({blog, handleBookMarks, handleMarkAsRead}) => {
    const {id, title, cover,author_name,posted_date,author_img,reading_time,hashtag} =blog;
    return (
        <div className='my-20 space-y-3'>
            <img className='rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />

            <div className='flex justify-between items-center my-6'>
                <div className='flex items-center'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author_name}
                        <p className='text-base font-semibold text-gray-600'>{posted_date}</p>
                        </h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleBookMarks(blog)} className='ml-2 text-2xl text-red-700 hover:text-red-900'><FaBookBookmark></FaBookBookmark></button>
                </div>
            </div>


            <h2 className='text-4xl font-bold text-[#111111]'>{title}</h2>
            <p>{hashtag}</p>
            <button onClick={()=> handleMarkAsRead(id,reading_time)} className='text-purple-700 font-bold underline hover:text-purple-900'>Mark as Red</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blog;