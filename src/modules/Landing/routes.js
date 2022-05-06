import Loadable from "react-loadable";
import LoadingComponent from "@commons/Loader";

export default [
  {
    path: "/",
    auth: false,
    layout: "admin",
    component: Loadable({
      loader: () => import("./index"),
      loading: LoadingComponent
    })
  }
];
