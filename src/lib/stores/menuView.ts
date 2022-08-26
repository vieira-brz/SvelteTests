import { writable } from "svelte/store";

const { subscribe, set, update } = writable<string | Storage | null>('');

export const menuView = {
    subscribe,
    set,
    update
};