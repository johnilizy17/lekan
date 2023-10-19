import React from "react";

export default function Pages() {

    return (
        <div style={{background:"#adb5bd", borderRadius:14, width:"100%"}}>
            <div class="d-flex justify-content-between m-gap py-3">
                <h6 class="m-0">Attendance History</h6>
                <button class="btn btn-primary">Mark Attendance</button>
            </div>
            <div class="m-gap">
                <div class="row kpi">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h2 style={{ fontWeight: "bold", fontSize: 50 }}>10</h2>
                                <small>Total no. of Attendance</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h2 style={{ color: "#008000", fontWeight: "bold", fontSize: 50 }}>08</h2>
                                <small>No. of days present</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h2 style={{ color: "red", fontWeight: "bold", fontSize: 50 }}>02</h2>
                                <small>No. of days absent</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-responsive mx-0 mt-4 m-gap">
                <table class="table">
                    <tr>
                        <th>Event Name</th>
                        <th>Description</th>
                        <th>Event type</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>General Meetings</td>
                        <td class="text-sm-start">
                            This is our monthly general CDS <br />meetings at Surulere..
                        </td>
                        <td style={{ color: "#53389e" }}>Physical</td>
                        <td>27-08-2023</td>
                        <td>
                            <span class="span-text" style={{ color: "#008000", background: "#f5fff5", borderRadius: "10px" }}>Present</span>
                        </td>
                    </tr>
                    <tr>
                        <td>General Meetings</td>
                        <td class="text-sm-start">
                            This is our monthly general CDS <br />meetings at Surulere..
                        </td>
                        <td>Virtual</td>
                        <td>27-08-2023</td>
                        <td>
                            <span class="span-text" style={{
                                color: "#cb1010",
                                background: "#ffefef",
                                borderRadius: "10px"
                            }}
                            >Absent</span>
                        </td>
                    </tr>
                    <tr>
                        <td>General Meetings</td>
                        <td class="text-sm-start">
                            This is our monthly general CDS <br />
                            meetings at Surulere..
                        </td>
                        <td style={{ color: "#53389e" }}>Physical</td>
                        <td>27-08-2023</td>
                        <td>
                            <span class="span-text" style={{
                                color: '#008000',
                                background: "#f5fff5",
                                borderRadius: "10px"
                            }}
                            >Present</span>
                        </td>
                    </tr>
                    <tr>
                        <td>General Meetings</td>
                        <td class="text-sm-start">
                            This is our monthly general CDS <br />
                            meetings at Surulere..
                        </td>
                        <td>Virtual</td>
                        <td>27-08-2023</td>
                        <td>
                            <span class="span-text" style={{
                                color: '#008000',
                                background: "#f5fff5",
                                borderRadius: "10px"
                            }}
                            >Present</span>
                        </td>
                    </tr>
                    <tr>
                        <td>General Meetings</td>
                        <td class="text-sm-start">
                            This is our monthly general CDS <br />
                            meetings at Surulere..
                        </td>
                        <td>Virtual</td>
                        <td>27-08-2023</td>
                        <td>
                            <span class="span-text" style={{
                                color: "#cb1010",
                                background: "#ffefef",
                                borderRadius: "10px"
                            }}
                            >Absent</span>
                        </td>
                    </tr>
                    <tr>
                        <td>General Meetings</td>
                        <td class="text-sm-start">
                            This is our monthly general CDS <br />
                            meetings at Surulere..
                        </td>
                        <td style={{ color: "#53389e" }}>Physical</td>
                        <td>27-08-2023</td>
                        <td>
                            <span class="span-text" style={{
                                color: '#008000',
                                background: "#f5fff5",
                                borderRadius: "10px"
                            }}
                            >Present</span>
                        </td>
                    </tr>
                    <tr>
                        <td>General Meetings</td>
                        <td class="text-sm-start">
                            This is our monthly general CDS <br />
                            meetings at Surulere..
                        </td>
                        <td>Virtual</td>
                        <td>27-08-2023</td>
                        <td>
                            <span class="span-text" style={{
                                color: '#008000',
                                background: "#f5fff5",
                                borderRadius: "10px"
                            }}
                            >Present</span>
                        </td>
                    </tr>
                    <tr>
                        <td>General Meetings</td>
                        <td class="text-sm-start">
                            This is our monthly general CDS <br />
                            meetings at Surulere..
                        </td>
                        <td>Virtual</td>
                        <td>27-08-2023</td>
                        <td>
                            <span class="span-text" style={{
                                color: '#008000',
                                background: "#f5fff5",
                                borderRadius: "10px"
                            }}
                            >Present</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}