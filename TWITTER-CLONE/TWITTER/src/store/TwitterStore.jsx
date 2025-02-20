import { v4 } from "uuid";
import { create } from "zustand";

export const useTwitterStore = create((set) => ({
  users: [],
  search:"",

  addUsers: (text, avatar, date, random,) =>
    set((state) => ({
      users: [
        ...state.users,
        { id: v4(), text, avatar, date, random, chat: 0, heart: 0, },
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
  addRandomUsers: (text) =>
    set((state) => ({
      users: [
        ...state.users,
        {
          id: v4(),
          text,
          avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Math.random()
            .toString(36)
            .substring(7)}`,
          date: new Date().toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          random: Math.floor(Math.random() * 1000),
          chat: 0,
          heart: 0,
        },
      ],
    })),
  searchUser: (random)=>
    set((state)=>({
      search: random
    })),
}));
