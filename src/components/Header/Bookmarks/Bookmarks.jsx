import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 text-center mt-28 bg-slate-100 m-4 px-4 py-8 rounded-xl">
            <h3 className='text-3xl font-bold bg-purple-100 p-5 rounded-lg text-purple-800 mb-5'>Reading Time: {readingTime}</h3>
            <h2 className="text-2xl font-bold border-b-2 mb-12">Bookmarked Blogs: {bookmarks.length}</h2>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;