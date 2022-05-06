import React from "react";
import PropTypes from "prop-types";
import { Spin, Icon } from "antd";

const antIcon = (size) => {
  const iconStyles = { fontSize: size, color: "#007ADF" };
  return <Icon type="loading" style={iconStyles} spin />;
};

const LoadingComponent = ({ isLoading, error, size = "5em" }) => {
  if (isLoading) {
    return (
      <div className="loading">
        <Spin spinning={isLoading} indicator={antIcon(size)} />
      </div>
    );
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

LoadingComponent.displayName = "CommonLoader";
LoadingComponent.propTypes = {
  size: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

export default LoadingComponent;
