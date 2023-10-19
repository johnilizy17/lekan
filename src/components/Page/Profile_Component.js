import React from 'react';

export default function Profile_Component() {

    return (
        <div class="password-section">
            <div class="password-settings">
                <div class="password">
                    <div class="password-header">
                        <h3>Profile Settings</h3>
                    </div>
                    <form class="form-input" action="/action_page.php">
                        <div class="form-group">
                            <label for="password">Name</label>
                            <input type="password" class="form-control" id="fname" placeholder="John Doe" name="fname" />
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="password">Email address</label>
                                    <input type="password" class="form-control" id="lname" placeholder="john@gmail.com" name="lname" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="password">Phone number</label>
                                    <input type="password" class="form-control" id="lname" placeholder="09080393031" name="lname" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Date of birth</label>
                            <input type="password" class="form-control" id="lname" placeholder="01/01/1999" name="lname" />
                        </div>
                        <label for="password">State Code</label>
                        <input type="password" class="form-control" id="lname" placeholder="LA/22C/0001" name="lname" />
                        <label for="password">Local Government</label>
                        <input type="password" class="form-control" id="lname" placeholder="Ikeja" name="lname" />
                        <label for="password">Primary Place of Assignment</label>
                        <input type="password" class="form-control" id="lname" placeholder="ABC Ventures" name="lname" />
                    </form>
                    <button class="password-btn mt-3">Update Changes</button>
                </div>
            </div>
        </div>
    )
}