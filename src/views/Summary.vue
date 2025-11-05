<template>
  <div class="page-container">
    <h2>📋 Summary</h2>
    <!-- TODO: ดึง username และ favorites.length จาก store -->
    <template v-if="favoriteStore.username && favoriteStore.favorites.length">
      <p>ชื่อผู้ใช้: {{ favoriteStore.username }}</p>
      <p>จำนวนคอร์สที่ถูกใจ: {{ favoriteStore.favorites.length }}</p>
    </template>
    <template v-else>
      <p>ยังไม่มีข้อมูลการเลือกคอร์ส</p>
    </template>

    <RouterLink to="/">⬅️ กลับไปหน้า Course</RouterLink>
  </div>
</template>

<script setup lang="ts">
// TODO: import { useFavoriteStore }
import { RouterLink } from "vue-router";
import { useFavoriteStore } from "../stores/favorite";
const favoriteStore = useFavoriteStore();
</script>

<style scoped>
.page-container {
  text-align: start;
  padding: 40px;
}
</style>
