import React from 'react';
import Item from './Item';
import styles from './List.module.css';

export default function TopLinks({ links }) {
    const listitems = links.map(item =>
        <Item key={item.key} link={item.link} title={item.title} desc={item.desc}/>
    );
    return (
        <div className={styles.toplinks}>
        <ul className={styles.list}>
            {listitems}
        </ul>
        </div>
    );
}
