import { atom } from "recoil";

export const submitIconState=atom<boolean>({
    key:"chatWindowState",
    default: false
})