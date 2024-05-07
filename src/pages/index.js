import React from 'react';
import Layout from '@theme/Layout';
import { topLinks, mainLinks } from '../data/links';


const listItems = (links) => {
    return links.map(item =>
        <li>
            <a href={item.link}>
                <p>
                    <b>{item.title}</b>
                    <p>{item.desc}</p>
                </p>
            </a>
        </li>
    )
};

export default function Hello() {
    return (
        <Layout title="Nav" description="Nav Page For Golang">
            <ul
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    listStyleType: 'none',
                    fontSize: '20px',
                }}>
                {listItems(topLinks)}
                
            </ul>
            <hr></hr>
            <ul
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    listStyleType: 'none',
                    fontSize: '20px',
                }}>
                {listItems(mainLinks)}
                
            </ul>
        </Layout>
    );
}