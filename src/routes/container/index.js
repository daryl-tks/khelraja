import React from "react";
import { Layout } from "antd";
import MainHeader from "@commons/MainHeader";
import MainSider from "@commons/MainSider";
import Footer from "@commons/Footer";
import "./index.scss";

const { Content } = Layout;

const renderPrivatePage = ({ children }) => {
  return (
    <div className="admin-page">
      <Layout>
        <MainHeader />

        <Layout className="layout-body">
          <MainSider />

          <Layout className="layout-child">
            <Content className="content-layout-background">{children}</Content>

            <Footer />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

const renderPublicPage = ({ children }) => (
  <Layout className="public-layout">
    <Content>{children}</Content>
  </Layout>
);

const App = ({ isAuthenticated, ...props }) => {
  if (isAuthenticated) {
    return renderPrivatePage(props);
  }
  return renderPublicPage(props);
  // @TODO need loader if the app is initializing
  //   if (isLoading) {
  //     return <Loader isLoading={isLoading} />;
  //   } else {
  //   }
  // } else {
};

export default App;
