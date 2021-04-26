<template>
  <div class="m-auto p-0 col-4">
    <h4 class="text-center my-2">Vue Calendar</h4>
    <section class="mx-2 d-flex justify-content-between">
      <h6 class="font-bold">{{ currentMonthName }}</h6>
      <h6 class="font-bold mx-2">{{ currentYear }}</h6>
    </section>
    <section class="d-flex my-1">
      <p class="text-center" style="width: 14.28%" v-for="day in days">
        <span class="day">{{day}}</span>
      </p>
    </section>
    <section class="d-flex flex-wrap">
      <p class="text-center my-2" style="width: 14.28%" v-for="date in startDay()" :key="date" ></p>
      <p class="text-center my-2"
         style="width: 14.28%"
         v-for="date in  daysInMonth(currentYear, currentMonthNo)"
         :key="date"
      >
        <span :class="currentDate(date)">{{date}}</span>
      </p>
    </section>
    <section class="d-flex justify-content-between">
      <button class="btn btn-outline-secondary" @click="previous">Prev</button>
      <button class="btn btn-outline-secondary" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  name: "Calander",
  setup(){
    const days = ref(['sun','mon','tue','wed','thr','fri','sat']);
    const currentMonthName = ref(new Date().toLocaleString("default", {month: "long"}));
    const currentMonthNo = ref(new Date().getMonth() + 1);
    const currentYear = ref(new Date().getFullYear());

    const daysInMonth = (year, month) => {
      return new Date(year, month, '').getDate();
    }

    const startDay = () => {
      return new Date(currentYear.value, currentMonthNo.value - 1, 1).getDay();
    }

    const changeMonthName = () => {
      const today = new Date(currentYear.value, currentMonthNo.value, 1)
      currentMonthName.value = today.toLocaleString('default', { month: 'long' });
    }

    const currentDate = (date) => {
      return new Date(currentYear.value, currentMonthNo.value-1, date).toDateString() === new Date().toDateString() ? 'active' : '';
    }

    //go to next month and change month name
    const next = () => {
      currentMonthNo.value++;
      changeMonthName();
    }

    //go to next month and change month name
    const previous = () => {
      currentMonthNo.value--;
      changeMonthName();
    }

    return {days, currentMonthName, currentMonthNo, currentYear, daysInMonth, startDay, next, previous, currentDate};
  }
}
</script>

<style scoped>
.day{
  display: block;
  margin: 1px;
  padding: 7px 10px;
  background-color: #f0f8ff;
}
.active{
  width: 15px;
  border-radius: 20px;
  background-color: #f1c40a;
  padding: 7px;
}
</style>