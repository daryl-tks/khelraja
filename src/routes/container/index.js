import React from "react";
import { Layout } from "antd";
import "./index.less";

const { Content } = Layout;

const renderPrivatePage = (props) => {
  // @TODO You can add Main Header Here for Authenticated Page
  return (
    <div className="app">
      {/* <main>
        <Layout>
          <Content>{props.children}</Content>
        </Layout>
      </main> */}
    </div>
  );
};

const renderPublicPage = ({ children }) => (
  <>
    <Layout>
      <Content>{children}</Content>
    </Layout>
  </>
);

const App = (props) => {
  if (props.isAuthenticated) {
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
