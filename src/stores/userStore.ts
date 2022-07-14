import { writable } from "svelte/store";

export const userStore = writable({
    isLoggedIn: true,
    teamName: 'MRX',
    score: undefined,
    members: undefined,
});
