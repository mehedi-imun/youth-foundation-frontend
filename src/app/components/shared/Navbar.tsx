"use client";
import {
  createFromIconfontCN,
  FacebookFilled,
  MailTwoTone,
  PhoneTwoTone,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Button,
  Col,
  Drawer,
  Layout,
  Menu,
  Radio,
  Row,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
type MenuItem = Required<MenuProps>["items"][number];
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const items: MenuItem[] = [
  {
    key: "alipay",
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation One
      </a>
    ),
  },
  {
    key: "alipay2",
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Two
      </a>
    ),
  },
  {
    key: "alipay3",
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Three
      </a>
    ),
  },
];

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState<"start" | "end">("end");
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <Layout style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      {/* Top Bar */}
      <Row
        justify="center"
        style={{ width: "100%", padding: "5px 0", backgroundColor: "white" }}
      >
        <Col xs={24} sm={24} md={22} lg={20} xl={20}>
          <Row
            justify={isMobile ? "space-between" : "end"}
            align="middle"
            gutter={16}
          >
            {isMobile && (
              <Col>
                <Button type="text" onClick={toggleDrawer}>
                  ☰
                </Button>
              </Col>
            )}
            <Col>
              <Space>
                <MailTwoTone />
                <FacebookFilled style={{ color: "#1877F2" }} />
                <PhoneTwoTone />
                <Radio.Group
                  size="small"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <Radio.Button value="start">বাংলা</Radio.Button>
                  <Radio.Button value="end">ENG</Radio.Button>
                </Radio.Group>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Logo and Action Buttons */}
      <Row
        justify="center"
        style={{ width: "100%", padding: "10px 0", backgroundColor: "white" }}
      >
        <Col xs={24} sm={24} md={22} lg={20} xl={20}>
          <Row justify="space-between" align="middle" gutter={16}>
            <Col>
              <Typography.Title level={4} style={{ margin: 0 }}>
                Logo
              </Typography.Title>
            </Col>
            <Col>
              <Button type="primary" style={{ marginRight: "10px" }}>
                Donate
              </Button>
              <Button type="primary">Login</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Full Menu */}
      {!isMobile && (
        <Menu
          mode="horizontal"
          items={items}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        />
      )}

      {/* Drawer for Mobile Screens */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={toggleDrawer}
        open={isDrawerOpen}
      >
        <Menu mode="vertical" items={items} />
        <div style={{ marginTop: "20px" }}>
          <Button
            type="primary"
            style={{ marginBottom: "10px", width: "100%" }}
          >
            Donate
          </Button>
          <Button type="primary" style={{ width: "100%" }}>
            Login
          </Button>
        </div>
      </Drawer>
    </Layout>
  );
};

export default Navbar;
