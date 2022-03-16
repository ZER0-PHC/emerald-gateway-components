import { writable } from "svelte/store";

export const tabs = writable([
  { label: "Content", value: 1, icon: "ic:outline-subtitles", done: false },
  {
    label: "Tokens",
    value: 2,
    icon: "icomoon-free:coin-dollar",
    done: false,
  },
  {
    label: "Tab 3",
    value: 3,
    icon: "fluent:collections-add-24-regular",
    done: false,
  },
  { label: "Tab 4", value: 4, icon: "fa:diamond", done: false },
  { label: "Tab 5", value: 5, icon: "bi:card-image", done: false },
  { label: "Tab 5", value: 6, icon: "ic:outline-subtitles", done: false },
  { label: "Tab 5", value: 7, icon: "ic:outline-subtitles", done: false },
]);

export const tab1data = writable({
  name: "",
  description: "",
})

export const tokens = writable([
  {
    id: 0,
    label: "FLOW",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145425/FlowLogo_myf3sv.svg",
    selected: false,
    amount: 0,
  },
  {
    id: 1,
    label: "FUSD",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145831/FusdIcon_esmisr.svg",
    selected: false,
    amount: 0,
  },
]);

export const collections = writable([
  {
    id: 0,
    label: "Basic Beasts",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145169/618a0cea8665abc4610c4ca6_basic_beasts_o5telf.png",
    selected: false,
  },
  {
    id: 1,
    label: "Ballerz",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145169/618b83df2183ef7f2902c886_thumbnail_ballerz_jwtdpb.jpg",
    selected: false,
  },
  {
    id: 2,
    label: "Flovatar",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145169/619efc34fe0b49bb68dc20b8_flovatar_5-01_1_bo3h2k.png",
    selected: false,
  },
]);

export const modal = writable({
  title: "",
  action: "",
})

