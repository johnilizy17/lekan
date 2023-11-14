import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Toast, useToast, Center, Divider, IconButton, Img, Slide, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileInformation } from '../../services/user-services';

export default function Layout({ children }) {

    const { isOpen, onToggle } = useDisclosure();
    const [user, setUser] = useState({})

    async function getUser() {
        const { data } = await ProfileInformation()
        setUser(data)
    }

    useEffect(() => {
        getUser()
    }, [])


    function SideBar() {
        var bars = document.getElementById("toggleBar");
        var sd = document.getElementById("sm-sidebar");
        var mainbd = document.getElementById("main-bd");
        var classList = sd.classList;
        console.log(classList.contains("sm-sidebar"));
        if (classList.contains("sm-sidebar")) {
            mainbd.style.width = "calc(100% - 20em)";
            sd.classList.remove("sm-sidebar");
        } else {
            mainbd.style.width = "100%";
            sd.classList.add("sm-sidebar");
        }
        // console.log(classList[1]);
    }
    return (
        <>
            <body>
                <div class="d-flex">
                    <div class="side-bar sm-sidebar" style={{ height: "100vh", position: "fixed", top: 0 }} id="sm-sidebar">
                        <div class="logo-text">
                            <Box fontSize="24px" fontWeight="800">Doo-deel Logo</Box>
                        </div>
                        <div class="sidebar">
                            <ul class="sidebar-nav">
                                <li>
                                    <Link to="/dashboard">
                                        <Center class="logout" justifyContent="start">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7Z"
                                                    stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7Z"
                                                    stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M14 17C14 15.3431 15.3431 14 17 14C18.6569 14 20 15.3431 20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17Z"
                                                    stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17Z"
                                                    stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <Box>
                                                Dashboard
                                            </Box>
                                        </Center>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/attendance">
                                        <Center justifyContent="start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M6.86461 6.88236C8.17813 5.56432 9.99326 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 11.5858 4.41421 11.25 4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25C9.57851 3.25 7.38558 4.23462 5.80213 5.82352C5.77668 5.84906 5.75345 5.87597 5.73245 5.90401L4.47488 4.64645C4.33769 4.50926 4.13353 4.46382 3.95111 4.52986C3.76869 4.59591 3.64094 4.76152 3.62338 4.95473L3.26982 8.84382C3.25639 8.9916 3.30929 9.13771 3.41422 9.24264C3.51914 9.34757 3.66526 9.40047 3.81304 9.38703L7.70213 9.03348C7.89534 9.01591 8.06095 8.88817 8.12699 8.70575C8.19304 8.52332 8.1476 8.31916 8.01041 8.18198L6.7823 6.95386C6.81101 6.93235 6.83854 6.90852 6.86461 6.88236Z"
                                                    fill="#4F4F4F" />
                                                <path
                                                    d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V12C11.25 12.2586 11.3832 12.4989 11.6025 12.636L14.6025 14.511C14.9538 14.7305 15.4165 14.6238 15.636 14.2725C15.8555 13.9212 15.7488 13.4585 15.3975 13.239L12.75 11.5843V7Z"
                                                    fill="#4F4F4F" />
                                            </svg>
                                            <Box>
                                                Attendance History
                                            </Box>
                                        </Center>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile">
                                        <Center justifyContent="start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M7 19C7.47273 16.7178 9.53167 15 12 15C14.4683 15 16.5273 16.7178 17 19M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z"
                                                    stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <Box>
                                                My Profile
                                            </Box>
                                        </Center>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/password">
                                        <Center justifyContent="start">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M15 9H15.01M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H6.33726C6.58185 21 6.70414 21 6.81923 20.9724C6.92127 20.9479 7.01881 20.9075 7.10828 20.8526C7.2092 20.7908 7.29568 20.7043 7.46863 20.5314L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z"
                                                    stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <Box>
                                                Settings
                                            </Box>
                                        </Center>
                                    </Link>
                                </li>
                                <li style={{ position: "absolute", bottom: 50 }}>
                                    <Link to="/">
                                        <Center class="logout" bg="#fff4f4" w="250px" color="#cb1010" justifyContent="start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path
                                                    d="M12.5 18.25C12.0858 18.25 11.75 18.5858 11.75 19C11.75 19.4142 12.0858 19.75 12.5 19.75H18.5C19.4665 19.75 20.25 18.9665 20.25 18V6C20.25 5.0335 19.4665 4.25 18.5 4.25H12.5C12.0858 4.25 11.75 4.58579 11.75 5C11.75 5.41421 12.0858 5.75 12.5 5.75L18.5 5.75C18.6381 5.75 18.75 5.86193 18.75 6L18.75 18C18.75 18.1381 18.6381 18.25 18.5 18.25H12.5Z"
                                                    fill="#CB1010" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15.0031 14.3652C15.6934 14.3652 16.2531 13.8056 16.2531 13.1152V10.8747C16.2531 10.1843 15.6934 9.6247 15.0031 9.6247L10.3905 9.6247C10.384 9.55128 10.3771 9.47787 10.37 9.40448L10.316 8.8486C10.2335 8.00049 9.33294 7.49258 8.56451 7.86084C6.93029 8.64403 5.45085 9.71578 4.19736 11.0245L4.09816 11.1281C3.63395 11.6128 3.63395 12.3771 4.09815 12.8618L4.19736 12.9654C5.45085 14.2741 6.93029 15.3459 8.56451 16.1291C9.33293 16.4973 10.2335 15.9894 10.316 15.1413L10.37 14.5854C10.3771 14.512 10.384 14.4386 10.3905 14.3652H15.0031ZM9.69511 12.8652C9.42874 12.8652 9.19326 13.0045 9.06008 13.216C8.99523 13.319 8.95464 13.4391 8.94656 13.5685C8.92842 13.8594 8.90524 14.15 8.87703 14.4403L8.86135 14.6017C7.8253 14.0677 6.86316 13.4028 5.99838 12.6239C5.77402 12.4218 5.55622 12.2121 5.34538 11.995C6.36892 10.9409 7.55651 10.0607 8.86135 9.38824L8.87703 9.54959C8.90524 9.83987 8.92842 10.1305 8.94656 10.4214C8.97122 10.8167 9.29902 11.1247 9.69511 11.1247H14.7531V12.8652H9.69511Z"
                                                    fill="#CB1010" />
                                            </svg>
                                            <Box>
                                                Log Out
                                            </Box>
                                        </Center>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Box w="300px" display={["none", "none", "flex"]} />
                    <div class="container-body" id="main-bd">
                        <div class="topnav">
                            <div class="nav">
                                <div onClick={() => onToggle()} class="nav-left d-flex align-items-center">
                                    <Link to="#" id="toggleBar">
                                        <i class="fa fa-bars"></i>
                                    </Link>

                                    <span class="top-text">{user.code ? user.code : "LA/22C/0001"}</span>
                                </div>
                                <div class="topbar">
                                    <div class="svg-wrap">
                                        <svg class="img-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M12 5C13.4322 5 14.8057 5.50571 15.8184 6.40589C16.8311 7.30606 17.4 8.52696 17.4 9.8C17.4 11.7691 17.8451 13.2436 18.4223 14.3279C19.1597 15.7133 19.5284 16.406 19.5079 16.5642C19.484 16.7489 19.4535 16.7997 19.3017 16.9075C19.1716 17 18.5245 17 17.2302 17H6.76978C5.4755 17 4.82836 17 4.69827 16.9075C4.54652 16.7997 4.51603 16.7489 4.49211 16.5642C4.47161 16.406 4.84032 15.7133 5.57774 14.3279C6.15492 13.2436 6.60001 11.7691 6.60001 9.8C6.60001 8.52696 7.16893 7.30606 8.18163 6.40589C9.19433 5.50571 10.5678 5 12 5ZM12 5V3M9.35401 20C10.0603 20.6233 10.988 21.0016 12.004 21.0016C13.0201 21.0016 13.9478 20.6233 14.654 20"
                                                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div id="mydiv" class="dropdown transparentbar">
                                        <button class="btn btn-default dropdown-toggle dropdown-toggle-split" type="button" id="mybyn"
                                            data-bs-toggle="dropdown" aria-expanded="false">

                                            <span style={{ marginRight: 10 }}>{user.lastname}</span>
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><Link to="/" class="dropdown-item">Log Out</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Slide
                            direction="left"
                            in={isOpen}
                            style={{ zIndex: "4000", height: "full", top: "0px" }}
                        >
                            <Flex>
                                <Flex
                                    pt="80px"
                                    pb="40px"
                                    bg="#fff"
                                    h="100vh"
                                    justify="start"
                                    direction="column"
                                    pos="relative"
                                    width="340px"
                                    align="start"
                                >

                                    <IconButton pos="absolute" top="20px" right="20px" onClick={onToggle}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                        </svg>
                                    </IconButton>
                                    <div class="sidebar">
                                        <ul class="sidebar-nav">
                                            <li>
                                                <Link to="/dashboard">
                                                    <Center class="logout" justifyContent="start">

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7Z"
                                                                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7Z"
                                                                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M14 17C14 15.3431 15.3431 14 17 14C18.6569 14 20 15.3431 20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17Z"
                                                                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17Z"
                                                                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <Box>
                                                            Dashboard
                                                        </Box>
                                                    </Center>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/attendance">
                                                    <Center justifyContent="start">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M6.86461 6.88236C8.17813 5.56432 9.99326 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 11.5858 4.41421 11.25 4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25C9.57851 3.25 7.38558 4.23462 5.80213 5.82352C5.77668 5.84906 5.75345 5.87597 5.73245 5.90401L4.47488 4.64645C4.33769 4.50926 4.13353 4.46382 3.95111 4.52986C3.76869 4.59591 3.64094 4.76152 3.62338 4.95473L3.26982 8.84382C3.25639 8.9916 3.30929 9.13771 3.41422 9.24264C3.51914 9.34757 3.66526 9.40047 3.81304 9.38703L7.70213 9.03348C7.89534 9.01591 8.06095 8.88817 8.12699 8.70575C8.19304 8.52332 8.1476 8.31916 8.01041 8.18198L6.7823 6.95386C6.81101 6.93235 6.83854 6.90852 6.86461 6.88236Z"
                                                                fill="#4F4F4F" />
                                                            <path
                                                                d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V12C11.25 12.2586 11.3832 12.4989 11.6025 12.636L14.6025 14.511C14.9538 14.7305 15.4165 14.6238 15.636 14.2725C15.8555 13.9212 15.7488 13.4585 15.3975 13.239L12.75 11.5843V7Z"
                                                                fill="#4F4F4F" />
                                                        </svg>
                                                        <Box>
                                                            Attendance History
                                                        </Box>
                                                    </Center>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/profile">
                                                    <Center justifyContent="start">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M7 19C7.47273 16.7178 9.53167 15 12 15C14.4683 15 16.5273 16.7178 17 19M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z"
                                                                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <Box>
                                                            My Profile
                                                        </Box>
                                                    </Center>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/password">
                                                    <Center justifyContent="start">

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M15 9H15.01M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H6.33726C6.58185 21 6.70414 21 6.81923 20.9724C6.92127 20.9479 7.01881 20.9075 7.10828 20.8526C7.2092 20.7908 7.29568 20.7043 7.46863 20.5314L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z"
                                                                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <Box>
                                                            Settings
                                                        </Box>
                                                    </Center>
                                                </Link>
                                            </li>
                                            <li style={{ position: "absolute", bottom: 50 }}>
                                                <Link to="/">
                                                    <Center class="logout" bg="#fff4f4" w="150px" color="#cb1010" justifyContent="start">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                            <path
                                                                d="M12.5 18.25C12.0858 18.25 11.75 18.5858 11.75 19C11.75 19.4142 12.0858 19.75 12.5 19.75H18.5C19.4665 19.75 20.25 18.9665 20.25 18V6C20.25 5.0335 19.4665 4.25 18.5 4.25H12.5C12.0858 4.25 11.75 4.58579 11.75 5C11.75 5.41421 12.0858 5.75 12.5 5.75L18.5 5.75C18.6381 5.75 18.75 5.86193 18.75 6L18.75 18C18.75 18.1381 18.6381 18.25 18.5 18.25H12.5Z"
                                                                fill="#CB1010" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M15.0031 14.3652C15.6934 14.3652 16.2531 13.8056 16.2531 13.1152V10.8747C16.2531 10.1843 15.6934 9.6247 15.0031 9.6247L10.3905 9.6247C10.384 9.55128 10.3771 9.47787 10.37 9.40448L10.316 8.8486C10.2335 8.00049 9.33294 7.49258 8.56451 7.86084C6.93029 8.64403 5.45085 9.71578 4.19736 11.0245L4.09816 11.1281C3.63395 11.6128 3.63395 12.3771 4.09815 12.8618L4.19736 12.9654C5.45085 14.2741 6.93029 15.3459 8.56451 16.1291C9.33293 16.4973 10.2335 15.9894 10.316 15.1413L10.37 14.5854C10.3771 14.512 10.384 14.4386 10.3905 14.3652H15.0031ZM9.69511 12.8652C9.42874 12.8652 9.19326 13.0045 9.06008 13.216C8.99523 13.319 8.95464 13.4391 8.94656 13.5685C8.92842 13.8594 8.90524 14.15 8.87703 14.4403L8.86135 14.6017C7.8253 14.0677 6.86316 13.4028 5.99838 12.6239C5.77402 12.4218 5.55622 12.2121 5.34538 11.995C6.36892 10.9409 7.55651 10.0607 8.86135 9.38824L8.87703 9.54959C8.90524 9.83987 8.92842 10.1305 8.94656 10.4214C8.97122 10.8167 9.29902 11.1247 9.69511 11.1247H14.7531V12.8652H9.69511Z"
                                                                fill="#CB1010" />
                                                        </svg>
                                                        <Box>
                                                            Log Out
                                                        </Box>
                                                    </Center>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Flex>
                            </Flex>
                        </Slide>

                        {children}
                    </div>
                </div>
            </body>
        </>
    )
}