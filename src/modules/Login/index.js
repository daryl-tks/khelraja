/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Logo from "@assets/Images/suki_full_logo.png";
import "./styles.scss";

import {
  Card,
  Row,
  Col,
  Image,
  Form,
  Input,
  Button,
  Checkbox,
  notification,
} from "antd";

import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as actions } from "@store/reducers/auth";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const { postLogin, removeAuthToast } = actions;
  const { isAuthenticated } = useSelector(({ auth }) => auth);
  const { isLoading, toast } = useSelector(({ auth }) => auth.postLogin);

  useEffect(() => {
    if (toast) {
      notification[toast.type]({ message: toast.message });

      if (toast.type === "success" && isAuthenticated) {
        props.history.push("/dashboard");
      }
      dispatch(removeAuthToast());
    }
  }, [toast]);

  const onFinish = (values) => {
    dispatch(postLogin({ isAuthenticated: true }));
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row
        type="flex"
        align="middle"
        justify="center"
        className="login-container"
      >
        <Col xs={23} sm={20} md={16} lg={10} xl={8}>
          <Row type="flex" justify="center" className="logo-container">
            <Image preview={false} width={250} src={Logo} />
          </Row>

          <Card className="login-card" bordered={true}>
            <h1 className="title">Hi Suki Ko Distributor!</h1>
            <p className="sub">Welcome back, sign in to your account.</p>

            <Form
              name="login-form"
              layout="vertical"
              onFinish={onFinish}
              className="login-form"
              onFinishFailed={onFinishFailed}
              initialValues={{ remember: true }}
            >
              <Form.Item
                label="Username"
                name="username"
                type="string"
                rules={[
                  {
                    required: true,
                    message: "Username is required.",
                  },
                  {
                    validator: async (rule, value) => {
                      let res = /^[a-zA-Z]+$/.test(value);
                      if (value && !res) {
                        throw new Error(
                          "Only alphabetic characters are allowed."
                        );
                      }
                    },
                  },
                ]}
              >
                <Input className="default" placeholder="Username" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                style={{ marginBottom: 15 }}
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                  },
                  {
                    validator: async (rule, value) => {
                      let res = /^[a-zA-Z0-9!@#$%&*()]*$/.test(value);
                      if (value && !res) {
                        throw new Error(
                          "Only alphanumeric and !@#$%^&*() characters are allowed."
                        );
                      }
                    },
                  },
                ]}
              >
                <Input.Password className="default" placeholder="Password" />
              </Form.Item>

              <Row type="flex" justify="space-between">
                <Col>
                  <Checkbox className="remember-me">Remember me</Checkbox>
                </Col>

                <Col>
                  <span className="forgot-pw">Forgot Password?</span>
                </Col>
              </Row>

              <Row type="flex" justify="center">
                <Form.Item style={{ marginBottom: 0, marginTop: 30 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="suki-btn"
                    loading={isLoading}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(LoginPage);
