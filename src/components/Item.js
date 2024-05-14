import React from 'react';
import styles from './Item.module.css'

export default function Item({ key, link, title, desc }) {
    return (
        <li key={key} className={styles.item}>
            <a href={link} target='_blank' className={styles.link}>
            <span class={styles.title}>{title} {desc}</span>
            </a>
        </li>
    );
}
