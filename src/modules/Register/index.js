import React from "react";
import {Row, Col, Button, Card, Divider, Input, Form, notification} from "antd";
import {
 withRouter
} from "react-router-dom";
import debounce from "@utils/debounce";

const Register = ({history, ...props}) => {
  
  const onClickBack = () => {
    history.push("/home/index")
  }
  
  const returnHome = debounce(() => {
    history.push("/home/index")
  }, 400)

  
  const onFinish = ({username}) => {
    notification.open({
      message: 'Registration Success',
    });

    document.cookie = "uin6" + "=" + username + ";";

    returnHome()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row style={{height: 100}}>
      <Col span={24}>
        <Row type="flex" justify="end">
          <Col>
            <Button onClick={onClickBack} style={{ margin: 32 }}>Back</Button>
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <Card bordered={true} style={{marginTop: 50}}>
            <Row type="flex" justify="center">
            <h1>SIGN UP</h1>
            </Row>
            <Divider />

            <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      
        <Row type="flex" justify="end">

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Row>
    </Form>
          </Card>
        </Row>
      </Col>
    </Row>
  )
};

export default withRouter(Register);