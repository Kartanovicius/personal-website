import React from 'react';
import style from './Navbar.module.css';
import facebook from './svg/facebook.svg';
import instagram from './svg/instagram.svg';
import linkedin from './svg/linkedin.svg';

const NavBar = () => {
    return (
        <nav>
            <div className={style.navbar}>
                <div className={style.menu}>
                    <h1 className={style.nameSurname}>Donatas Kartanovičius</h1>
                    <div className={style.hoverItem}>
                        <div className={style.contact}>
                        <p className={style.item}>Donatas.karta@gmail.com</p>
                        <p className={style.item}>+37060855224</p>
                        </div>
                        <div className={style.navigation}>
                        <p className={style.item}>Introduction</p>
                        <p className={style.item}>Portfolio</p>
                        <p className={style.item}>Timeline</p>
                        </div>
                        <div className={style.svgConteiner}>
                            <img className={style.svg} src={facebook} alt="facebook svg"/>
                            <img className={style.svg} src={linkedin} alt="linkedin svg"/>
                            <img className={style.svg} src={instagram} alt="instagram svg"/>
                        </div>
                        <p className={style.footer}>Made with ❤️ and 🍺 by Donatas Kartanovičius</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

