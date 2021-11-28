import Head from "next/head";
import Link from 'next/link';
const Navbar = () =>{

    return (
        <div className="navbar-main">
            <img src="#" alt="logo"/>
                <div className="navbar-menu-main">
                    <Link href='/'>
                        <a className='navbar-menu-item'>
                            About
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='navbar-menu-item'>
                            To do list
                        </a>
                    </Link>
                </div>
        </div>
    )

}

export default Navbar;