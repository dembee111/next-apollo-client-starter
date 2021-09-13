
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider  } from '../context/authContext';
import { useApollo } from '../lib/apollo';


const MyApp = ({ Component, pageProps }) => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <AuthProvider>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </AuthProvider>
    );
};

export default MyApp;