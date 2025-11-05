// TODO1: สร้าง store ชื่อ useFavoriteStore
// state:
//   username (string)
//   favorites (array)
// actions:
//   setUsername(name) → เก็บชื่อผู้ใช้
//   addFavorite(course) → เพิ่มคอร์สใน favorites
import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    username: "",
    favorites: [] as Array<{ title: string; price: number }>,
  }),
  actions: {
    setUsername(name: string) {
      this.username = name;
    },
    addFavorite(course: { title: string; price: number }) {
      const exists = this.favorites.some((c) => c.title === course.title);
      if (!exists) this.favorites.push(course);
    },
  },
});
