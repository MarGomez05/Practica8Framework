import { createStore } from "vuex";
export default createStore({
  state: {
    // Esta variable almacena el autor de la aplicación
    autor: "Marvin Gómez",
    // Esta variable guarda tareas
    tareas: [{ nombre: "Realizar examen #1", estado: "Pendiente" }],
  },
  getters: {
    getTareas(state) {
      return state.tareas;
    },
    getAutor(state) {
      return state.autor;
    }
  },
  mutations: {
    agregarTarea(state, tarea) {
      state.tareas.push(tarea);
    },
    eliminarTarea(state, index) {
      state.tareas.splice(index, 1);
    }
  },
  actions: {
    agregarTareaAccion({ commit }, tarea) {
      commit("agregarTarea", tarea);
    },
    eliminarTareaAccion({ commit }, index) {
      commit("eliminarTarea", index);
    }
  },
});
