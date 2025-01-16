"use client";
import {
  FacebookFilled,
  MailTwoTone,
  MenuOutlined,
  PhoneTwoTone,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Col, Drawer, Layout, Menu, Radio, Row, Space } from "antd";
import { Locale } from "antd/es/locale";
import { RadioChangeEvent } from "antd/lib";
import bnBD from "antd/locale/bn_BD";
import enUS from "antd/locale/en_US";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/assets/logo.png";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "alipay",
    label: <a href="#">Home</a>,
  },
  {
    key: "alipay2",
    label: <a href="#">About</a>,
  },
  {
    key: "alipay3",
    label: <a href="#">Contact</a>,
  },
];
const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [locale, setLocal] = useState<Locale>(enUS);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
  };
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
      <div style={{ width: "80%", margin: "auto" }}>
        <Row
          wrap={false}
          justify="center"
          style={{ padding: "10px 0px 0px 0px" }}
        >
          <Col flex="auto">
            <Row
              justify={isMobile ? "space-between" : "end"}
              align="middle"
              // gutter={16}
            >
              {isMobile && (
                <Col>
                  <Button type="text" onClick={toggleDrawer}>
                    <MenuOutlined style={{ fontSize: "20px" }} />
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
                    value={locale}
                    onChange={changeLocale}
                  >
                    <Radio.Button key="bn" value={bnBD}>
                      বাংলা
                    </Radio.Button>
                    <Radio.Button key="en" value={enUS}>
                      EN
                    </Radio.Button>
                  </Radio.Group>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Logo and Action Buttons */}
        <Row
          wrap={false}
          justify="center"
          style={{ padding: "10px 0px 0px 0px" }}
        >
          <Col flex="auto">
            <Row justify="space-between" align="middle" >
              <Col>
                <Image
                  alt="youth foundation logo"
                  width={250}
                  height={100}
                  src={logo}
                ></Image>
              </Col>
              <Col style={{ paddingBottom: "10px" }}>
                <Button
                  size="large"
                  type="primary"
                  style={{ marginRight: "10px" }}
                >
                  Donate
                </Button>
                <Button size="large" type="primary">
                  Login
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
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
      </Drawer>
    </Layout>
  );
};

export default Navbar;
