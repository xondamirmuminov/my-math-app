import Add from "./containers/Add";
import Divide from "./containers/Divide";
import Multiply from "./containers/Multiply";
import Subtract from "./containers/Subtract";

const routes = [
  {
    path: "/",
    component: Add,
    key: "add",
  },
  {
    path: "/subtract",
    component: Subtract,
    key: "subtract",
  },
  {
    path: "/multiply",
    component: Multiply,
    key: "multiply",
  },
  {
    path: "/divide",
    component: Divide,
    key: "divide",
  },
];

export default routes;
