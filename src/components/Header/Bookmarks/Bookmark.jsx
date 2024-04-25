import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className=' bg-white rounded-md m-4 p-4'>
            <h3 className='text-xl font-bold '>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;