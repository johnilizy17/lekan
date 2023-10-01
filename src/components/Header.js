import { Box, Center, Divider, Flex, IconButton, Img, Slide, Text, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from "../assets/logo.png";

export default function Header() {


    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            <Box pos="fixed" top="0px" zIndex="2000">
                <Center justifyContent={"space-between"} textAlign="center" w="100vw" p={["5px", "5px", "5px", "20px"]} bg="#4D46B9" >
                    <Link to="/dashboard">
                        <Img src={logo} h="60px" w="60px" />
                    </Link>
                    <Box mr={["0px", "0px", "0px", "0px", "-110px"]}>
                    </Box>
                    <IconButton display={["flex", "flex", "flex", "flex", "none"]}
                        background="transparent"
                        onClick={onToggle}>
                        {!isOpen ?

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18H21V16H3V18V18ZM3 13H21V11H3V13V13ZM3 6V8H21V6H3V6Z" fill="#fff" />
                            </svg>
                            :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18H21V16H3V18V18ZM3 13H21V11H3V13V13ZM3 6V8H21V6H3V6Z" fill="#fff" />
                            </svg>
                        }
                    </IconButton>
                    <Center display={["none", "none", "none", "none", "flex"]}>

                        <Link to="/dashboard">
                            <Box fontSize="22px" color="#9490D5" ml="-110px" mr="30px">
                                Scan
                            </Box>
                        </Link>
                        <Link to="/profile">
                            <Box fontSize="22px" color="#9490D5" mr="30px">
                                Profile
                            </Box>
                        </Link>
                        <Link to="/attendance">
                            <Box fontSize="22px" color="#9490D5" mr="50px">
                                Attendance
                            </Box>
                        </Link>
                    </Center>
                </Center>
            </Box>
            <Slide
                direction="left"
                in={isOpen}
                style={{ zIndex: "4000", height: "full", top: "0px" }}
            >
                <Flex>
                    <Flex
                        p="40px"
                        color="white"
                        bg="#2E2A6F"
                        h="100vh"
                        justify="start"
                        direction="column"
                        pos="relative"
                        width="300px"
                        align="start"
                    >
                        <Center w="full" flexDir="column">
                            <Box>
                                <Link to="/dashboard">
                                    <Img src={logo} h="60px" w="60px" />
                                </Link>
                            </Box>
                            <Divider w="270px" mt="10px" mb="40px" />
                        </Center>
                        <Link to="/dashboard">
                            <Center justifyContent="space-between" w="250px" mb="20px">
                                <Text
                                    fontSize="14.56px"
                                    lineHeight="25px"
                                    color="#fff"
                                    fontWeight="700"
                                    cursor="pointer"
                                    onClick={onToggle}
                                >
                                    Dashboard
                                </Text>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0086 6.5L8.59863 7.91L13.1786 12.5L8.59863 17.09L10.0086 18.5L16.0086 12.5L10.0086 6.5Z" fill="#C9C8EA" />
                                </svg>
                            </Center>
                        </Link>

                        <Link to="/profile">

                            <Center justifyContent="space-between" w="250px" mb="20px">
                                <Text
                                    fontSize="14.56px"
                                    lineHeight="25px"
                                    color="#fff"
                                    fontWeight="700"
                                    cursor="pointer"
                                    onClick={onToggle}
                                >
                                    Profile
                                </Text>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0086 6.5L8.59863 7.91L13.1786 12.5L8.59863 17.09L10.0086 18.5L16.0086 12.5L10.0086 6.5Z" fill="#C9C8EA" />
                                </svg>

                            </Center>
                        </Link>
                        <Link to="/attendance">

                            <Center justifyContent="space-between" w="250px" mb="20px">
                                <Text
                                    fontSize="14.56px"
                                    lineHeight="25px"
                                    color="#fff"
                                    fontWeight="700"
                                    cursor="pointer"
                                    onClick={onToggle}
                                >
                                    Attendance
                                </Text>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0086 6.5L8.59863 7.91L13.1786 12.5L8.59863 17.09L10.0086 18.5L16.0086 12.5L10.0086 6.5Z" fill="#C9C8EA" />
                                </svg>
                            </Center>
                        </Link>
                    </Flex>
                    <Box w="100%" h="100vh" onClick={onToggle} background="transparent" onFocus={{ background: "transparent" }}>

                    </Box>
                </Flex>
            </Slide>
        </>
    )
}