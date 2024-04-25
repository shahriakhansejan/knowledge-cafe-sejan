import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleBookMarks, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Block.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookMarks={handleBookMarks}
                    handleMarkAsRead={handleMarkAsRead}
                >
                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookMarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func

};

export default Blogs;