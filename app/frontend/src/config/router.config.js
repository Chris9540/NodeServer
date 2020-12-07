import { createWebHashHistory, createRouter } from "vue-router";
import ListEmployees from "@/views/ListEmployees";
import AddEmployee from "@/views/AddEmployee";

const routes = [
  {
    path: "/",
    name: "ListEmployees",
    component: ListEmployees,
  },
  {
    path: "/add",
    name: "AddEmployee",
    component: AddEmployee,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
