import Header from './Header';
import { Box, Button, Center, Flex, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import Scanner from './Scanner';
import Layout from './Layout';
import Pages from './Page/Pages';

export default function Dashboard() {

    const [display, setDisplay] = useState(true)
    const [loading, setLoading] = useState(false)

    async function ReportAdance() {
        setLoading(true)
        try {
            setLoading(false)
        } catch {
            setLoading(false)
        }
        setDisplay(true)
    }


    return (
        <>
            <Layout>
                <Pages />
            </Layout>
        </>
    )
}