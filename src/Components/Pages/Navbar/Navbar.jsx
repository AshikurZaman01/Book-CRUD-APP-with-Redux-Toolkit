import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Show Books', path: '/showBooks' },
        { id: 3, name: 'Add Book', path: '/addBook' },
    ]

    return (
        <div>
            <div>
                <nav>
                    <ul className='flex justify-center items-center gap-5 text-2xl mb-5 p-2'>
                        {
                            routes.map(route => <li key={route.id}><Link to={route.path}>{route.name}</Link></li>)
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
