import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/authContext';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../lib/apollo';
import { getPosts } from '../lib/queries/query';
import styles from './styles/index.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const { data, error, loading } = useQuery(getPosts);
  const {state, dispatch} = useContext(AuthContext)
  // react router
  const router = useRouter()

  const updateUserName = () => {
    dispatch({
      type: 'LOGGED_IN_USER',
      payload: 'Batdemberel'
    })
  }
  console.log(router)
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
        data.allPosts.map((post, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.card_title}>{post?.title}</div>
            <div className={styles.card_header}>{post?.description}</div>
          </div>
        ))
      }
      <div>
        {JSON.stringify(state.user)}
      </div>
      <div className="text-blue-600">
        <button className={styles.btn} onClick={() => updateUserName()}>Change user name</button>
      </div>
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
