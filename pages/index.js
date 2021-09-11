import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../lib/apollo';
import { getPosts } from '../lib/queries/query';
import styles from './styles/index.module.css'
import Head from 'next/head'

export default function Home() {
  const { data, error, loading } = useQuery(getPosts);

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data.allPosts.length === 0) return <h2>404 | Product Not Found</h2>;

  return (
    <div className={styles.container}>
      <Head>
        <title>ene odoo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        data.allPosts.map((post) => (
          <div className={styles.card}>
            <div className={styles.card_title}>{post?.title}</div>
            <div className={styles.card_header}>{post?.description}</div>
          </div>
        ))
      }
    </div>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: getPosts
  })
  return { props: { initialApolloState: apolloClient.cache.extract() } };
}
