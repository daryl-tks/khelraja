import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import debounce from '@utils/debounce';
import { withRouter } from 'react-router-dom';

const Home = ({ history }) => {
  useEffect(() => {
    returnHome();
  });

  const returnHome = debounce(() => {
    history.push('/home/index');
  }, 100);

  return (
    <Row style={{ height: 100 }}>
      <Col span={24}>
        <Row type="flex" justify="center">
          <h1 style={{ marginTop: 50 }}>Landing</h1>
        </Row>
      </Col>
    </Row>
  );
};

export default withRouter(Home);
