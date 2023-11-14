import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ProfileInformation } from '../../services/user-services?user-services:""';

export default function Profile_Component() {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    async function getUser() {
        const { data } = await ProfileInformation()
        console.log(data, 'users')
        setUser(data)
    }

    async function updateUserProfile(){
        try{
            await Profileupdate()
            toast({ position: "top-right", title: "Successful updated", description: 'Successfully updated details', status: "success", isClosable: true });
        } catch{
            toast({ position: "top-right", title: "failed to update", description: 'failed to update', status: "error", isClosable: true });
        
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div class="password-section">
            <div class="password-settings">
                <div class="password">
                    <div class="password-header">
                        <h3>Profile Settings</h3>
                    </div>
                    <form class="form-input" action="/action_page.php">
                        <div class="form-group" style={{ marginTop: 20 }}>
                            <label for="password">First Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="John Doe"
                                value={user.firstname ? user.firstname : ""}
                                onChange={(e) => setUser({ ...user, firstname: e.target.value })}
                                name="fname" />
                        </div>
                        <div class="form-group" style={{ marginTop: 20 }}>
                            <label for="password">Last Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="John Doe"
                                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                                value={user.lastname ? user.lastname : ""}
                                name="fname" />
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group" style={{ marginTop: 20 }}>
                                    <label for="password">Email address</label>
                                    <input type="text"
                                        value={user.email ? user.email : ""}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        class="form-control" id="lname" placeholder="john@gmail.com" name="lname" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group" style={{ marginTop: 20 }}>
                                    <label for="password">Phone number</label>
                                    <input type="text"
                                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                        value={user.phone ? user.phone : ""}
                                        class="form-control" id="lname" placeholder="09080393031" name="lname" />
                                </div>
                            </div>
                        </div>
                        <label for="password" style={{ marginTop: 20 }}>State Code</label>
                        <input type="text" class="form-control" id="lname" placeholder="LA/22C/0001"
                            onChange={(e) => setUser({ ...user, code: e.target.value })}
                            value={user.code ? user.code : ""}
                            name="lname" />
                        <label for="password" style={{ marginTop: 20 }} >Local Government</label>
                        <input type="text" class="form-control" id="lname" placeholder="Ikeja" name="lname"
                            onChange={(e) => setUser({ ...user, local: e.target.value })}
                            value={user.local ? user.local : ""}
                        />
                        <label for="password" style={{ marginTop: 20 }}
                        >Primary Place of Assignment</label>
                        <input type="text" class="form-control" id="lname" placeholder="ABC Ventures" name="lname"
                            onChange={(e) => setUser({ ...user, primary: e.target.value })}
                            value={user.primary ? user.primary : ""}
                        />
                    </form>
                    <button class="password-btn mt-3">Update Changes</button>
                </div>
            </div>
        </div>
    )
}