import { writable } from 'svelte/store';

export const tabs = writable([
  { label: "Content", value: 1, icon: "ic:outline-subtitles", done: false },
  {
    label: "Tokens",
    value: 2,
    icon: "icomoon-free:coin-dollar",done: false
  },
  {
    label: "Tab 3",
    value: 3,
    icon: "fluent:collections-add-24-regular",done: false
  },
  { label: "Tab 4", value: 4,  icon: "fa:diamond",done: false },
  { label: "Tab 5", value: 5,  icon: "bi:card-image",done: false },
  { label: "Tab 5", value: 6,  icon: "ic:outline-subtitles",done: false },
  { label: "Tab 5", value: 7,  icon: "ic:outline-subtitles",done: false },
]);
