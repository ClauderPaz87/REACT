import { create } from "zustand"
import { v4 } from "uuid"

export const useListStore = create((set)=>({
    list:[],
    addList: (text) => set((state)=>({
        list: [...state.list, {id:v4(), text: text}]
    })),
    removeList: (id) => set((state) => ({
        list: state.list.filter((l)=> l.id !== id)
    })),
    editList: (id,text) => set((state)=> ({
        list: state.list.map((l)=> l.id === id ? {...l, text:text}:l)
    }))
}))