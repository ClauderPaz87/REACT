import { create } from "zustand";

export const useWeatherStore = create((set) => ({
  weather: {},
  weatherDay: "",
  apiData: (data) =>
    set((state) => ({
      weather: data,
    })),
  apiDataDay: (data) =>
    set((state) => ({
      weatherDay: [data],
    })),
}));
