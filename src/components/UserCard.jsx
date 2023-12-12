import { Card, Tag } from "antd";
import React from "react";
import {
  EnvironmentOutlined,
  GlobalOutlined,
  HomeFilled,
  IdcardTwoTone,
  MailTwoTone,
  MobileTwoTone,
  SearchOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const gridStyle = {
  width: "30%",
  textAlign: "center",
};

const UserCard = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div>
      <Card
        className="uppercase mt-1"
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          background: "#8fbc8f ",
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        }}
        title={"Company: " + company.name}
        bordered={true}
      >
        <p className="shadow-slate-800 uppercase font-extrabold text-red-500 m-0">
          <IdcardTwoTone /> <span className="ml-3 tracking-widest">{name}</span>
        </p>
        <div className="flex gap-12 lowercase ">
          <p className="font-mono">
            <TwitterOutlined /> |{""} {""}@{username}
          </p>
          <p>
            <GlobalOutlined />
            {""} {""}
            {website}
          </p>
        </div>
        <p className="lowercase m-0">
          <MailTwoTone /> |{""} {""}
          {email}
        </p>
        <p>
          <MobileTwoTone /> |{""} {""}
          {phone}
        </p>
        <p className="text-xs capitalize">
          <HomeFilled /> |{""} {""}
          {address.street} , {address.suite} {address.city}.
        </p>
        <div className="flex">
          <Tag icon={<SearchOutlined />} color="success">
            {address.zipcode}
          </Tag>
          <div>
            <Tag icon={<EnvironmentOutlined />} color="processing">
              {address.geo.lat}
            </Tag>
            <Tag color="error">{address.geo.lng}</Tag>
          </div>
        </div>
        <div>
          <p
            className="text-center capitalize mb-0"
            style={{
              fontFamily: "cursive",
            }}
          >
            {company.catchPhrase} {company.bs}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default UserCard;
