import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
    color: "2px solid blue"
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>        
        <Link href="/todos">
            <a style={linkStyle}>Todo List</a>
        </Link>
    </div>
);

export default Header;
