import React from 'react';
import Layout from '@theme/Layout';
import { topLinks, mainLinks, goodProjects, packages } from '../data/links';


const listItems = (links) => {
    return links.map(item =>
        <li>
            <a href={item.link} target='_blank'>
                <p>
                    <b>{item.title} </b>
                    {item.desc}
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
            <h2>Packages</h2>
            <ul
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    listStyleType: 'none',
                    fontSize: '20px',
                }}>
                {listItems(packages)}
                
            </ul>
            <hr></hr>
            <h2>Go projects</h2>
            <ul
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    listStyleType: 'none',
                    fontSize: '20px',
                }}>
                {listItems(goodProjects)}
                
            </ul>
        </Layout>
    );
}