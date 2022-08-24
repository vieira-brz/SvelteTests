import { writable } from "svelte/store";

const { subscribe, set, update } = writable<string>('botoes');

export const menuView = {
    subscribe,
    set,
    update
};