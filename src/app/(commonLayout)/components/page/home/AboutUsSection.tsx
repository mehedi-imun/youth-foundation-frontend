"use client";
import { Col, Divider, Row, Timeline, Typography } from "antd";
import Image from "next/image";
import ytRound from "../../../../../../public/aboutus/ytRound.png";

export default function AboutUsSection() {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Row  align="middle"  wrap style={{ padding: "50px 0px" }}>
        {/* Image Section */}
        <Col  xs={24} sm={24} md={12} lg={12} style={{ overflow: "hidden" }}>
          <Image
            style={{
              maxWidth: "65%",
            }}
            alt="youth foundation"
            src={ytRound}
            layout="responsive"
          />
        </Col>

        {/* Text and Button Section */}
        <Col  sm={24} md={12} lg={12} >
          <Typography.Title  level={1}>
            Ichapur Youth Foundation
          </Typography.Title>
          <Divider orientation="left">About US</Divider>
          <Typography.Paragraph >
            Ichapur Youth Foundation, established in 2023 in Ichapur Union of
            Ramganj Upazila, Lakshmipur District, is a voluntary, non-political,
            non-profit organization dedicated to social welfare and humanitarian
            service. Our mission is to work for the betterment of society,
            focusing on youth empowerment, community development, and providing
            support to those in need. Initially operating in the Ichapur area,
            our goal is to expand our reach as we grow, ensuring that our
            efforts contribute to building a better and more inclusive future
            for all.
          </Typography.Paragraph>
          <Timeline
          style={{ marginTop: "30px" }}
            items={[
              {
                children: "Blood Donate",
              },
              {
                children: "Charity",
              },
              {
                children: "Social Work",
              },
              {
                children: "Education",
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}
