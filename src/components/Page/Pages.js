import React, { useEffect, useState } from "react";
import { AttendanceInformation, AttendanceUser } from "../../services/user-services";
import Moment from "react-moment";

export default function Pages() {

    const [report, setReport] = useState({ all: { reports: [] }, current: [] });

    async function Attendance() {
        const { data } = await AttendanceInformation();
        const current = await AttendanceUser()
        setReport({ all: data, current: current.data })
        current.data.map((a, b) => {
            localStorage.setItem(a._id, a._id)
        })
    }

    useEffect(() => {
        Attendance()
    }, [])

    return (
        <div style={{ width: "100%", paddingBottom:40}}>
            <div class="d-flex justify-content-between m-gap py-3">
                <h6 class="m-0">Attendance History</h6>
                <button class="btn btn-primary">Mark Attendance</button>
            </div>
            <div class="m-gap">
                <div class="row kpi">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h2 style={{ fontWeight: "bold", fontSize: 50 }}>{report.all.reports ? report.all.reports.length : 0}</h2>
                                <small>Total no. of Attendance</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h2 style={{ color: "#008000", fontWeight: "bold", fontSize: 50 }}>{report.current ? report.current.length : 0}</h2>
                                <small>No. of days present</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h2 style={{ color: "red", fontWeight: "bold", fontSize: 50 }}>{report.all.reports && report.current ? report.all.reports.length - report.current.length : 0}</h2>
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
                        <th>Event type</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    {report.all.reports.map((a, b) => (
                        <tr>
                            <td>General Meetings</td>
                            <td style={{ color: "#53389e" }}>Physical</td>
                            <td><Moment format="YYYY/MM/DD">{a.createdAt}</Moment></td>
                            <td>
                                {
                                    localStorage.getItem(a._id) ?
                                        <span class="span-text" style={{ color: "#008000", background: "#f5fff5", borderRadius: "10px" }}>Present</span>
                                        :
                                        <span class="span-text" style={{
                                            color: "#cb1010",
                                            background: "#ffefef",
                                            borderRadius: "10px"
                                        }}
                                        >Absent</span>
                                }
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}