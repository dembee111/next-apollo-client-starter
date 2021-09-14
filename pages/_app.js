
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider  } from '../context/authContext';
import { useApollo } from '../lib/apollo';
import '../styles/global.css'
import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }) => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <AuthProvider>
            <ApolloProvider client={apolloClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </AuthProvider>
    );
};

export default MyApp;