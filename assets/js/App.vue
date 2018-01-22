<template>
<!-- app -->
<div id="app">
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <AddPass v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </AddPass>
</div>
</template>
 
<script>
import AddPass from "./components/AddPass.vue";

export default {
  name: "app",
  components: {
    AddPass
  },
  data: function () {
        return {
            showModal: false
        }
    }
};
</script>