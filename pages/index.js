import React, { useState } from 'react'
import { getPosts } from '../lib/queries/query';
import { initializeApollo } from '../lib/apollo';
import Head from 'next/head'

export default function Home(results) {
  const initialState = results;
  const [posts, setPosts] = useState(initialState.data)
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello World!</div>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: getPosts
  })
  return {
    props: {
      data: data.allPosts
    }
  }
}
