import React from 'react';
import { Row, Col, Button, Layout } from 'antd';
import { withRouter } from 'react-router-dom';

const { Header, Footer } = Layout;

const Home = ({ history, ...props }) => {
  const onClickRegister = () => {
    history.push('/home/register');
  };

  return (
    <Layout>
      <Header style={{ padding: 0, backgroundColor: '#000', height: 100 }}>
        <Row type="flex" justify="end">
          <Col>
            <Button
              onClick={onClickRegister}
              style={{
                margin: 32,
                borderRadius: 5,
                backgroundColor: '#fac50f',
                borderColor: '#fac50f',
              }}
            >
              Sign Up
            </Button>
          </Col>
        </Row>
      </Header>

      <Row style={{ height: '900vh' }} className="home-bg">
        <Col span={24}>
          <Row type="flex" justify="center">
            <h1 style={{ marginTop: 50, fontSize: 100 }}>HOME</h1>
          </Row>
        </Col>
      </Row>

      <Footer>HELLO</Footer>
    </Layout>
  );
};

export default withRouter(Home);
