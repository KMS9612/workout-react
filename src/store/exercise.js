import { atom } from "recoil";

export const isCreate = atom({
  key: "isCreate",
  default: Boolean,
});

export const clickedExercise = atom({
  key: "clickedExercise",
  default: [],
});
