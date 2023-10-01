import Header from './Header';
import { Box, Button, Center, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Scanner from './Scanner';
import { getAllAttendance, getMyAttendance } from '../services/user-services';
import ReportDisplay from './ReportDisplay';

export default function Attendance() {

    const [display, setDisplay] = useState(true)
    const [report, setReport] = useState([])

    async function FetchingAttendance() {
        setDisplay(true)
        try {
            const data = await getAllAttendance()
            const userData = await getMyAttendance()
          
            setReport(data.data.reports)
            setDisplay(false)
            userData.data.map((items) => {
                console.log(items)
                localStorage.setItem(items.report_id._id, "true");
            })
        } catch {

        }
    }

    useEffect(() => {
        FetchingAttendance()
    }, [])

    return (
        <>
            {
                display ?
                    <Center h="100vh">
                        <Spinner size="xl" />
                    </Center>
                    :
                    <Box h="100vh" overflow="scroll" pt="140px" backgroundColor="transparent">
                        <Header />
                        <Text fontWeight="800" p="20px" fontSize="22px">Attendance Report</Text>
                        <Flex flexWrap="wrap" p="20px">
                            {report.map((a, b) => (
                                <ReportDisplay data={a} key={b} />
                            ))}
                        </Flex>
                    </Box>
            }
        </>
    )
}