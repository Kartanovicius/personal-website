import React from 'react';
import style from './Navbar.module.css';

const NavBar = () => {
    return (
        <nav>
            <div className={style.navbar}>
                <div className={style.menu}>
                    <h1>Donatas Kartanovičius</h1>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

