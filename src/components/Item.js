import React from 'react';
import styles from './Item.module.css'

export default function Item({ key, link, title, desc }) {
    return (
        <li key={key} className={styles.test}>
            <a href={link} target='_blank'>
                <p className={styles.test}>
                    <b>{title} </b>
                    {desc}
                </p>
            </a>
        </li>
    );
}
