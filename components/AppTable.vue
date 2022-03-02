<template>
  <div>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="-1"
        class="elevation-1"
      >
      </v-data-table>
  </div>
</template>

<script>
export default {
  props: ["headers", "items"],
  data() {
    return {
     
    }
  }
}
</script>

<style>
 
</style>