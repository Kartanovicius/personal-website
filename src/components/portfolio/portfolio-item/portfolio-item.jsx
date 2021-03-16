import React from 'react';
import style from './portfolio-item.module.css';

const Item = (props) => {
    return (
        <div className={style.item}>
            <img
                src="https://lh3.googleusercontent.com/proxy/xTXw9s3ZkHnVNBdSrvI2XWpEhAlx3Gh5f27TYsWM4B7npKHjmOC-AW3GgGclf_lkjJS9vk5UsEUPbR9YPf4wf3Dc_-hQb80fqknbROkMBOnbTVj1gRRlXSDIs2cLkbqpAPt9rdjItOr65taER21A9a0UYgrTvNWiPwKbIzSd-o8BngQNO2Iu" alt="porfolio image"></img>
            <div className={style.content}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Item;
