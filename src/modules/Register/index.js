import React from 'react';
import { withRouter } from 'react-router-dom';
import debounce from '@utils/debounce';

import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Layout,
  Divider,
  notification,
} from 'antd';

const { Header } = Layout;

const Register = ({ history, ...props }) => {
  const returnHome = debounce(() => {
    history.push('/home/thankyou');
  }, 200);

  const onFinish = ({ username }) => {
    notification.open({
      message: 'Registration Success',
    });

    // eslint-disable-next-line no-useless-concat
    document.cookie = 'uin6' + '=' + username + ';';

    returnHome();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <Header style={{ padding: 0, backgroundColor: '#000', height: 100 }}>
        <Row type="flex" justify="end">
          <Col>
            <Button
              onClick={() => returnHome()}
              style={{
                margin: 32,
                borderRadius: 5,
                backgroundColor: '#fac50f',
                borderColor: '#fac50f',
              }}
            >
              Home
            </Button>
          </Col>
        </Row>
      </Header>

      <Row style={{ height: '90vh', backgroundColor: '#8f2728' }}>
        <Col span={24}>
          <Row type="flex" justify="center">
            <Card
              bordered={true}
              style={{
                marginTop: 50,
                borderRadius: 12,
                width: 500,
              }}
            >
              <Row type="flex" justify="center">
                <h1
                  style={{ color: '#8f2728', fontSize: 40, marginBottom: 10 }}
                >
                  SIGN UP
                </h1>
              </Row>
              <Divider style={{ marginBottom: 50 }} />

              <Form
                id="memberReg"
                name="basic"
                labelCol={{
                  span: 5,
                }}
                wrapperCol={{
                  span: 168,
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

                <Row type="flex" justify="center" className="reg-sub">
                  <Button
                    style={{
                      marginTop: 30,
                      backgroundColor: 'lightgoldenrodyellow',
                      color: '#8f2728',
                      borderColor: '#8f2728',
                    }}
                    className="disabled"
                    type="primary"
                    htmlType="submit"
                    id="submit"
                  >
                    Register now
                  </Button>
                </Row>
              </Form>
            </Card>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default withRouter(Register);
