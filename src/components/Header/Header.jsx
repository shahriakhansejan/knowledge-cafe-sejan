import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 my-2 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

Header.propTypes = {
    
};

export default Header;