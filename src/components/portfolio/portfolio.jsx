import React from 'react';
import style from './portfolio.module.css';
import Item from './portfolio-item/portfolio-item';
import talkyimg from '../../../src/img/talky.png';

function Portfolio() {
    return (
        <portfolio className={style.portfolio_container}>
            <div className={style.title}>
                <h2>Portfolio</h2>
                <p>Check my portfolio maybe you will find something what you where looking for</p>
            </div>
            <div className={style.portfolioBox}>
                <Item title={"Talky"}
                      text={"We connecting people from all over the world"}
                      src={talkyimg}
                      alt={"Talky"}>
                </Item>
                <Item title={"Talky"}
                      text={"We connecting people from all over the world"}
                      src={talkyimg}
                      alt={"Talky"}
                ></Item>
                <Item title={"Talky"}
                      text={"We connecting people from all over the world"}
                      src={talkyimg}
                      alt={"Talky"}></Item>
                <Item title={"Talky"}
                      text={"We connecting people from all over the world"}
                      src={talkyimg}
                      alt={"Talky"}></Item>
                <Item title={"Talky"}
                      text={"We connecting people from all over the world"}
                      src={talkyimg}
                      alt={"Talky"}></Item>
                <Item title={"Talky"}
                      text={"We connecting people from all over the world"}
                      src={talkyimg}
                      alt={"Talky"}></Item>
            </div>
        </portfolio>
    );
}

export default Portfolio;
