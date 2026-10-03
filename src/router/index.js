import { createRouter, createWebHistory } from "vue-router";
import TareaNueva from "../views/TareaNueva.vue";
import TareaList from "../views/TareaList.vue";
const routes = [
  {
    path: "/",
    name: "tareas",
    component: TareaList,
  },
  {
    path: "/agregar",
    name: "agregarTareas",
    component: TareaNueva,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
