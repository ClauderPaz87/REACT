import { v4 } from "uuid";
import { create } from "zustand";

export const useTwitterStore = create((set) => ({
  users: [],

  addUsers: (text, avatar, date, random) =>
    set((state) => ({
      users: [
        ...state.users,
        { id: v4(), text, avatar, date, random, chat: 0, heart: 0 },
      ],
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  editUser: (id, text) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, text: text } : user
      ),
    })),
  updateCountChat: (id) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, chat: user.chat + 1 } : user
      ),
    })),
  updateCountHeart: (id) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, heart: user.heart + 1 } : user
      ),
    })),

}));
