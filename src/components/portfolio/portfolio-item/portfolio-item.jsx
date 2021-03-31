import React from 'react';
import style from './portfolio-item.module.css';

const Item = (props) => {
    return (
        <div className={style.item}>
            <img
                src={props.src} alt={props.alt}></img>
            <div className={style.content}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Item;
