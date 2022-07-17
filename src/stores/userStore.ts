import { writable } from "svelte/store";

export const userStore = writable({
    isLoggedIn: false,
    username: undefined,
    teamName: undefined,
    score: undefined,
    members: undefined,
    id: undefined,
    solvedTasks: undefined
});
