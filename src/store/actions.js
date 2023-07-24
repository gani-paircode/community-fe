import { doLogin } from "../service/auth"
import { fetchUsers } from "../service/members";
import { getErrorState, getLoadingState, getSuccessState } from "./helpers";

export const getActions = (set) => {
    const login = async (id, pass) => {
        try {
            console.log('in login action ');
            set((oldData) => ({ ...oldData, admin: getLoadingState() }));
            const user = await doLogin(id, pass);
            set((oldData) => ({ ...oldData, admin: getSuccessState(user) }));
            console.log('login api response..  ', user);
            localStorage.setItem('admin', JSON.stringify(user));
        } catch (error) {
            set((oldData) => ({ ...oldData, admin: getErrorState('Something went wrong while doing login') }));
            localStorage.removeItem('admin');
        }
    }

    const getMembers = async () => {
        try {
            set((oldData) => ({ ...oldData, members: getLoadingState() }));
            const members = await fetchUsers();
            set((oldData) => ({ ...oldData, members: getSuccessState(members) }));
        } catch (error) {
            set((oldData) => ({ ...oldData, members: getErrorState('Something went wrong while fetching members') }));
        }
    }

    return {
        login,
        getMembers
    }
}