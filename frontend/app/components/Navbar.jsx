import React, { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <nav className="navbar"> 
            <div>
                <Link href="/">Home</Link>
            </div>
            {isAuthenticated && (
                <>
                    <div>
                        <Link href="/formulario/page.jsx">Formulario</Link>
                    </div>
                    <div>
                        <Link href="/logout">Logout</Link>
                    </div>
                </>
            )}
            {!isAuthenticated && (
                <div>
                    <Link href="/login/page.jsx">Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
