import React from "react";
import { CircleUser } from "../../icons/CircleUser";
import { GridCircle4 } from "../../icons/GridCircle4";
import { KeyAlt } from "../../icons/KeyAlt";
import { OutlineGeneralCalendar2 } from "../../icons/OutlineGeneralCalendar2";
import { OutlineInterfaceLogout1 } from "../../icons/OutlineInterfaceLogout1";
import { SolidInterfaceHistory } from "../../icons/SolidInterfaceHistory";
import { Button } from "../Button";
import "./style.css";

export const Sidebar = ({
  buttonIcon = (
    <OutlineGeneralCalendar2 className="icon-instance-node" color="#4F4F4F" />
  ),
  override = <SolidInterfaceHistory className="icon-instance-node" />,
  buttonIcon1 = <CircleUser className="icon-instance-node" />,
  buttonIcon2 = <KeyAlt className="icon-instance-node" />,
}) => {
  return (
    <div className="sidebar">
      <div className="text-wrapper">Doo-deel Logo</div>
      <div className="frame">
        <Button
          icon={<GridCircle4 className="icon-instance-node" color="#4F4F4F" />}
          property1="default"
          text="Dashboard"
        />
        <Button icon={buttonIcon} property1="default" text="CDS Calendar" />
        <Button icon={override} property1="default" text="Attendance History" />
        <Button icon={buttonIcon1} property1="default" text="My Profile" />
        <Button
          icon={buttonIcon2}
          property1="default"
          text="Security Settings"
        />
      </div>
      <div className="div">
        <OutlineInterfaceLogout1 className="icon-instance-node" />
        <div className="text-wrapper-2">Log Out</div>
      </div>
    </div>
  );
};
