import { atom } from "recoil";

export const isCreateRoutine = atom({
  key: "isCreateRoutine",
  default: false,
});

export const selectedRoutine = atom({
  key: "selectedRoutine",
  default: [],
});
