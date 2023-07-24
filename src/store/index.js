import { create } from "zustand";
import { getActions } from "./actions";

const initialState = {
    admin: null,
    members: null,
}

export const useAppStore = create((set) => ({
    data: initialState,
    actions: getActions(set),
}));