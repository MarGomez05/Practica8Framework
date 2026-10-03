<template>
  <div id="container">
    <h1>Nuevas tareas</h1>
    <input type="text" placeholder="Escribe una tarea" v-model="tarea"/>
    <button @click="agregarTarea">Nueva tarea</button>
  </div>
  <br />
  <div id="container">
    <h2>Eliminar tareas</h2>
    <table>
      <tr>
        <th>Tarea</th>
        <th>Estado</th>
        <th>Acción</th>
      </tr>
      <!-- Esta instrucción permite acceder al arreglo de objetos tareas -->
      <tr v-for="(tarea, i) in this.$store.getters.getTareas" :key="i">
        <td>{{ tarea.nombre }}</td>
        <td>{{ tarea.estado }}</td>
        <td>
          <button @click="eliminarTarea(i)">Eliminar</button>
        </td>
      </tr>
      <!--
Esta instrucción permite determinar la
longitud de arreglo de objetos tareas
-->
      <tr v-if="this.$store.getters.getTareas.length == 0">
        <td colspan="3">No hay tareas pendientes</td>
      </tr>
    </table>
  </div>
  <br />
  <div id="autor">
    <p>
      <b>Desarrollado por: </b>
      <!-- Esta instrucción permite acceder a la variable autor -->
      {{ this.$store.getters.getAutor }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TareaNueva",
  data() {
    return {
      tarea: "",
    };
  },
  methods: {
    agregarTarea() {
      if (this.tarea.trim() !== "") {
        this.$store.dispatch("agregarTareaAccion", {
          nombre: this.tarea,
          estado: "Pendiente",
        });
        this.tarea = "";
      }
    },
    eliminarTarea(index) {
      this.$store.dispatch("eliminarTareaAccion", index);
    }
  }
};
</script>

<style scoped>
#container {
  margin: auto;
  width: 50%;
  padding: 50px;
  border-radius: 50px;
  background-color: lightblue;
}
table,
th,
td {
  margin: auto;
  border-collapse: collapse;
  border: 1px solid black;
  padding: 10px;
  width: 50%;
}
#autor {
  text-align: center;
  margin: auto;
  width: 20%;
  background-color: #defcf9;
  color: #213555;
  padding: 5px;
}
</style>
