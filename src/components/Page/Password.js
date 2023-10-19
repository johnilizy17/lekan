import React from 'react';

export default function Password() {

    return (
        <div class="password-section">
            <div class="password-settings">
                <div class="password">
                    <div class="password-header">
                        <h3>Password Settings</h3>
                    </div>
                    <form class="form-input" action="/action_page.php">
                        <label for="password">New Password</label>
                        <input type="password" class="form-control" id="fname" name="fname" /><br /><br />
                        <label for="password">Confirm Password</label>
                        <input type="password" class="form-control" id="lname" name="lname" /><br /><br />
                    </form>
                    <button class="password-btn">Update Changes</button>
                </div>
            </div>
        </div>
    )
}