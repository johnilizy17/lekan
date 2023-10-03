import Header from './Header';
import { Box, Button, Center, Flex, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import Scanner from './Scanner';

export default function Dashboard() {

    const [display, setDisplay] = useState(true)
    const [loading, setLoading] = useState(false)

  async function ReportAdance(){
    setLoading(true)
    try{
        setLoading(false)
    }catch{
        setLoading(false)
    }
    setDisplay(true)
   }

    
    return (
        <>
            {
                loading ?
                    <Center h="100vh">
                        <Spinner size="xl" />
                    </Center>
                    :
                    <Box h="100vh" overflow="scroll" pt="130px" backgroundColor="transparent">
                        <Header />
                        <Center flexDir='column' w="100vw">
                            {display ? <img src="./scanner.gif" style={{ width: 300, height: 300 }} /> : <Scanner ReportAdance={ReportAdance}/>}
                            <Flex mt="30px">
                                {display ?
                                    <Button bg="green" color="#fff" h="50px" onClick={() => setDisplay(!display)} >
                                        Start  Scanning
                                    </Button>
                                    :
                                    <Button bg="red" color="#fff" h="50px" onClick={() => setDisplay(!display)}>
                                        Cancel  Scanning
                                    </Button>}
                            </Flex>
                        </Center>
                    </Box>
            }
        </>
    )
}