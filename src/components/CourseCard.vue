<template>
  <div class="course-list">
    <div class="course-card">
      <h3>ชื่อคอร์ส: {{ course.title }}</h3>
      <p>ราคา: {{ course.price }} บาท</p>
      <button @click="addToFavorite" :disabled="isDisabled" :title="isDisabled ? 'กรอกชื่อก่อน' : ''">เพิ่มในรายการโปรด</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: import { useFavoriteStore } แล้วเขียนฟังก์ชันเพิ่มคอร์สลง store
// TODO: defineProps({ course: Object })
import { computed } from "vue";
import { useFavoriteStore } from "../stores/favorite";

const props = defineProps<{ course: { title: string; price: number } }>();
const favoriteStore = useFavoriteStore();

const isDisabled = computed(() => !favoriteStore.username);

function addToFavorite() {
  if (isDisabled.value) return;
  favoriteStore.addFavorite(props.course);
}
</script>

<style scoped>
.course-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 780px;
  margin: auto;
  padding: 16px;
}

.course-card {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: start;
  gap: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  background: #fafafa;
  padding: 14px 20px;
  text-align: center;
}

h3 {
  text-align: start;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.35;
  word-break: break-word;
}

p {
  margin: 0;
  color: #555;
  white-space: nowrap;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  min-width: 160px;
}

button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

button:hover:not([disabled]) {
  background-color: #2c9c6d;
}
</style>
