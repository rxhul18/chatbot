import { atom } from "recoil";

export const toggleCredits=atom<boolean>({
    key:"toggleCredits",
    default: false
})