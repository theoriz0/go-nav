import React from 'react';
import Layout from '@theme/Layout';

import { topLinks, mainLinks, goodProjects, packages } from '../data/links';
import List from '../components/List';


export default function Index() {
    return (
        <Layout title="Nav" description="Nav Page For Golang">
            <List links={topLinks}/>
            <hr></hr>
            <h2>Packages</h2>
            <List links={packages}/>
            <hr></hr>
            <h2>Go projects</h2>
            <List links={goodProjects}/>
        </Layout>
    );
}