import {createWebHistory, createRouter} from 'vue-router';
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
    history: createWebHistory(),
    routes,
});

export default router;
