import React from "react";
import { Layout, Row, Col } from "antd";
import "./styles.scss";

const Footer = () => {
  return (
    <Layout.Footer className="layout-footer">
      <Row type="flex" justify="space-between" align="middle">
        <Col>All Rights Reserved. Suki Ko 2021.</Col>
        <Col className="version">Version 0.0.1</Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
