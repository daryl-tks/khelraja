import React from "react";
import { Row, Col, Card } from "antd";
import Chart from "./components/Charts.js";
import "./styles.scss";

const Dashboard = () => {
  const fields = [
    {
      title: "New Registers",
      count: "10,200",
    },
    {
      title: "Lending Request",
      count: "987,200",
    },
    {
      title: "Total Distributors",
      count: "10",
    },
  ];
  return (
    <div className="dashboard">
      <Row type="flex" justify="space-between" gutter={18}>
        {fields.map(({ title, count }, i) => (
          <Col xs={24} md={8} lg={8} key={i}>
            <Card bordered className="d-count-card">
              <h1 className="card-title">{count}</h1>
              <span>{title}</span>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="graph-container">
        <Col span={24}>
          <Card className="analytics-card">
            <Chart />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
