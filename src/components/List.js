import React from 'react';
import Item from './Item';
import styles from './List.module.css';

export default function List({ links }) {
    const listitems = links.map(item =>
        <Item key={item.key} link={item.link} title={item.title} desc={item.desc}/>
    );
    return (
        <ul className={styles.list}>
            {listitems}
        </ul>
    );
}
