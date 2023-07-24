import { create } from "zustand";
import { getActions } from "./actions";

const initialState = {
    admin: null,
    members: null,
}

export const communityStore = create((set) => ({
    state: initialState,
    actions: getActions(set),
}));