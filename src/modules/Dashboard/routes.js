import Loadable from "react-loadable";
import LoadingComponent from "@commons/Loader";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/dashboard",
    auth: true,
    layout: "admin",
    component: Loadable({
      loader: () => import("./index"),
      loading: LoadingComponent,
    }),
  },
];
