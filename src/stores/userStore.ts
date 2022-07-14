import { writable } from "svelte/store";

export const userStore = writable({
    isLoggedIn: false,
    teamName: 'MRX',
    score: undefined,
    members: undefined,
});
