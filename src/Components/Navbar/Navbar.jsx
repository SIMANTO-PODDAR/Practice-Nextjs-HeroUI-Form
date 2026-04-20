import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link href='/tasks'> Tasks </Link> </li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn" href='/'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;