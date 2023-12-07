import { DefaultValue, atom, atomFamily, selector } from "recoil";

export const searchModalState = atom<boolean>({
  key: "searchModalState",
  default: false,
});
