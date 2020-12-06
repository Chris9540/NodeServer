<template>
  <screenlet>
    <button type="button" @click="injectData">Inject Data</button>
  </screenlet>
</template>

<script>
import seedData from "@/seed.data";
import EmployeeDataService from "@/services/employee.service";
import Screenlet from "@/components/Screenlet";


export default {
  name: "SeedData",
  components: {Screenlet},
  methods: {
    injectData() {
      seedData.forEach(dataSet=>{
        dataSet.data.forEach(emp=> EmployeeDataService.create(emp))
      })
    },
  },
}
</script>

<style scoped>

</style>
