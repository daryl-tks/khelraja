import React from "react";
import {Row, Col, Button} from "antd";
import {
 withRouter
} from "react-router-dom";

const Home = ({history, ...props}) => {

  const onClickRegister = () => {
    history.push("/home/register")
  }

  console.log("window.location", window.location)
  return (
    <Row style={{height: 100}}>
      <Col span={24}>
        <Row type="flex" justify="end">
          <Col>
            <Button onClick={onClickRegister} style={{ margin: 32 }}>Register</Button>
          </Col>
        </Row>
        <Row  type="flex" justify="center">
          <h1 style={{marginTop: 50}}>HOME</h1>
        </Row>
      </Col>
    </Row>
  )
};

export default withRouter(Home);
