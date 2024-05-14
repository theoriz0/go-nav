import React from 'react';
import Layout from '@theme/Layout';

import { topLinks, mainLinks, goodProjects, packages } from '../data/links';
import List from '../components/List';
import TopLinks from '../components/TopLinks';
import styles from './index.module.css'


export default function Index() {
    return (
        <Layout title="Nav" description="Nav Page For Golang">
            <div className={styles.container}>
                <TopLinks links={topLinks}/>
                <h3 className={styles.sectionHeader}>Packages</h3>
                <List links={packages}/>
                <h3 className={styles.sectionHeader}>Go projects</h3>
                <List links={goodProjects}/>
            </div>
        </Layout>
    );
}