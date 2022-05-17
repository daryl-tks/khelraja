import React, { useEffect } from 'react';
import { Row, Col, Layout } from 'antd';
import debounce from '@utils/debounce';
import { withRouter } from 'react-router-dom';

const { Header } = Layout;

const ThankYouPage = ({ history }) => {
  useEffect(() => {
    returnHome();
  });

  const returnHome = debounce(() => {
    history.push('/home/index');
  }, 2000);

  return (
    <Layout>
      <Header style={{ padding: 0, backgroundColor: '#000', height: 100 }} />

      <Col span={24}>
        <Row
          style={{ height: '90vh', backgroundColor: '#8f2728' }}
          className="login-img"
          type="flex"
          justify="center"
        >
          <h1
            style={{
              marginTop: 100,
              fontSize: 80,
              color: '#fac50f',
              textAlign: 'center',
            }}
          >
            THANK YOU FOR REGISTERING <br />
            ON KHELRAJA
          </h1>
        </Row>
      </Col>
    </Layout>
  );
};

export default withRouter(ThankYouPage);
