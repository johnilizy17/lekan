import React, { useState, useEffect } from 'react'
import { Box, Button, Center, Flex, Spinner, Text } from '@chakra-ui/react';

export default function ReportDisplay({data}) {

    const [display, setDisplay] = useState(true)

    useEffect(()=>{
        const exist = localStorage.getItem(data._id);
        setDisplay(JSON.parse(exist))
    },[])
    return (
        <Box w="150px" h="120px" fontWeight="700" mr="20px" border="1px solid grey" overflow="hidden" borderRadius="10px">
            <Center w="full" bg={display?"green":"red"} height="60px" color="#fff" >
                {data.createdAt.slice(0,10)}
            </Center>
            <Center w="full" height="60px">
                {display?"Present":"Absence"}
            </Center>
        </Box>
    )
}