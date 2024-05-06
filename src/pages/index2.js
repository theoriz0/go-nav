import React from 'react';
import Layout from '@theme/Layout';
import { people } from '../data/links';


const listItems = people.map(person =>
    <li>
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
    </li>
);

export default function Hello() {
    return (
        <Layout title="Hello" description="Hello React Page">
            <ul
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    listStyleType: 'none',
                    fontSize: '20px',
                }}>
                {listItems}
            </ul>
        </Layout>
    );
}