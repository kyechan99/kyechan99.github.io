import { atom, selector } from "recoil";

export const searchModalAtom = atom<boolean>({
  key: "searchModalAtom",
  default: false,
});

export const searchModalState = selector({
  key: "searchModalState",
  get: ({ get }) => {
    return get(searchModalAtom);
  },
  set: ({ set }, newVal) => {
    if (newVal) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.setProperty("overflow", "hidden", "important");
      document.body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = `${0}px`;
    }
    set(searchModalAtom, newVal);
  },
});
