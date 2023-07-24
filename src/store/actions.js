import { doLogin } from "../service/auth"
import { fetchUsers } from "../service/members";
import { getErrorState, getLoadingState, getSuccessState } from "./helpers";

export const getActions = (set) => {
    const login = async (id, pass) => {
        try {
            console.log('in login action ');
            set((oldState) => {
                const data = { ...oldState.data };
                data.admin = getLoadingState();
                const newState = { ...oldState, data }
                console.log('new data vs old data ', { newState, oldState });
                return newState;
            });
            const user = await doLogin(id, pass);
            set((oldState) => {
                const data = { ...oldState.data };
                data.admin = getSuccessState(user);
                const newState = { ...oldState, data }
                console.log('new data vs old data ', { newState, oldState });
                return newState;
            });
            console.log('login api response..  ', user);
            localStorage.setItem('admin', JSON.stringify(user));
        } catch (error) {
            set((oldState) => {
                const data = { ...oldState.data };
                data.admin = getErrorState('Something went wrong while doing login');
                const newState = { ...oldState, data }
                console.log('new data vs old data ', { newState, oldState });
                return newState;
            });
            localStorage.removeItem('admin');
        }
    }

    const getMembers = async () => {
        try {
            set((oldState) => {
                const data = { ...oldState.data };
                data.members = getLoadingState();
                const newState = { ...oldState, data }
                console.log('new data vs old data ', { newState, oldState });
                return newState;
            });
            const members = await fetchUsers();
            set((oldState) => {
                const data = { ...oldState.data };
                data.members = getSuccessState(members);
                const newState = { ...oldState, data }
                console.log('new data vs old data ', { newState, oldState });
                return newState;
            });
        } catch (error) {
            set((oldState) => {
                const data = { ...oldState.data };
                data.members = getErrorState('Something went wrong while fetching members');
                const newState = { ...oldState, data }
                console.log('new data vs old data ', { newState, oldState });
                return newState;
            });
        }
    }

    return {
        login,
        getMembers
    }
}