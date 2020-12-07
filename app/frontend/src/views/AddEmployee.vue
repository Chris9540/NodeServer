<template>
  <screenlet title="Add Employee">
    <text-input label="First Name" name="firstName" type="text" />
    <text-input label="Last Name" name="lastName" type="text" />
    <text-input label="Email" name="emailId" type="email" />
  </screenlet>
</template>

<script>
import Screenlet from "../components/Screenlet.vue";
import TextInput from "../components/TextInput.vue";
export default {
  name: "AddEmployee",
  components: { Screenlet, TextInput },
};
</script>

<style scoped></style>
