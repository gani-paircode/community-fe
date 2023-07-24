import { doLogin } from "../service/auth"
import { fetchUsers } from "../service/members";
import { getErrorState, getLoadingState, getSuccessState } from "./helpers";

export const getActions = (set) => {
    const login = async (id, pass) => {
        try {
            set((oldState) => ({ ...oldState, admin: getLoadingState() }));
            const user = await doLogin(id, pass);
            set((oldState) => ({ ...oldState, admin: getSuccessState(user) }));
            localStorage.setItem('admin', user);
        } catch (error) {
            set((oldState) => ({ ...oldState, admin: getErrorState('Something went wrong while doing login') }));
        }
    }

    const getMembers = async () => {
        try {
            set((oldState) => ({ ...oldState, members: getLoadingState() }));
            const members = await fetchUsers();
            set((oldState) => ({ ...oldState, members: getSuccessState(members) }));
        } catch (error) {
            set((oldState) => ({ ...oldState, members: getErrorState('Something went wrong while fetching members') }));
        }
    }

    return {
        login,
        getMembers
    }
}