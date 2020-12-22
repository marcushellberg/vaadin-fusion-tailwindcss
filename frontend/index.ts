import { Route, Router } from "@vaadin/router";
import "./styles.css";
import "./views/view-one";
import "./views/view-two";

const routes: Route[] = [
  { path: "", component: "view-one" },
  { path: "two", component: "view-two" },
];

export const router = new Router(document.querySelector("#outlet"));
router.setRoutes(routes);
