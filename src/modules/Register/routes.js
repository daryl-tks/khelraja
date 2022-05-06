/* eslint-disable import/no-anonymous-default-export */
import Loadable from "react-loadable";
import LoadingComponent from "@commons/Loader";

export default [
  {
    path: "/home/register",
    auth: false,
    layout: "admin",
    component: Loadable({
      loader: () => import("./index"),
      loading: LoadingComponent
    })
  }
];
