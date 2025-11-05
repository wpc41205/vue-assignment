<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <!-- TODO: แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <p>❤️ ถูกใจแล้ว {{ favoriteStore.favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <!-- TODO: v-model username -->
      <input v-model="favoriteStore.username" placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <!-- TODO: Render CourseCard -->
      <CourseCard v-for="c in courses" :key="c.title" :course="c" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
// TODO: import axios
// TODO: import { useFavoriteStore } จาก "../stores/favorite"
import axios from "axios";
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();
const courses = ref<Array<{ title: string; price: number }>>([]);
// TODO: ดึงข้อมูลจาก API ด้วย axios.get() แล้วเก็บใน courses
// TODO: ใช้ store เพื่อเข้าถึง username และ favorites

onMounted(async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const items = res.data ?? [];
  courses.value = items.map((p: any) => ({ title: p.title, price: p.price }));
});
</script>

<style scoped>
.page-container {
  max-width: 820px;
  margin: auto;
  text-align: center;
}
.form-section {
  margin-top: 12px;
}
.form-section input {
  width: 100%;
  max-width: 420px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.course-list {
  margin-top: 20px;
}
</style>
