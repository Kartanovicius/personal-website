import React from 'react';
import style from './email.module.css'

const Email = () => {
    return (
        <div className={style.button}>
            <a href="mailto:donatas.ka@gmail.com?subject=Mail from Client">Write me a email</a>
        </div>
    )
}

export default Email;