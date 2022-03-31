import Tab1 from "$lib/components/tabs/Tab1.svelte"
import Tab2 from "$lib/components/tabs/Tab2.svelte"
import Tab3 from "$lib/components/tabs/Tab3.svelte"
import Tab4 from "$lib/components/tabs/Tab4.svelte"
import Tab5 from "$lib/components/tabs/Tab5.svelte"
import Tab6 from "$lib/components/tabs/Tab6.svelte"
import Tab7 from "$lib/components/tabs/Tab7.svelte"

import { writable, derived } from 'svelte/store';

export const projects = writable([]) 

export const activeTabVal = writable(0)

activeTabVal.subscribe(val => console.log("active tab val", val))



export const tabs = writable ([{
  label: "Content",
  value: 0,
  component: Tab1,
  icon: "ic:outline-subtitles"

},
{
  label: "Tokens",
  value: 1,
  component: Tab2,
  icon: "icomoon-free:coin-dollar"

},
{
  label: "Tab 3",
  value: 2,
  component: Tab3,
  icon: "fluent:collections-add-24-regular"

},
{
  label: "Tab 4",
  value: 3,
  component: Tab4,
  icon: "fa:diamond"

},
{
  label: "Tab 5",
  value: 4,
  component: Tab5,
  icon: "radix-icons:discord-logo"
},
{
  label: "Tab 6",
  value: 5,
  component: Tab6,

  icon: "radix-icons:twitter-logo"
},
{
  label: "Tab 7",
  value: 6,
  component: Tab7,

  icon: "line-md:confirm-circle"
},
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
    amount:0,
    path: {
      domain: "public",
      identifier: "flowTokenBalance"
    },
    identifier: "A.1654653399040a61.FlowToken.Vault"
  },
  {
    id: 1,
    label: "FUSD",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145831/FusdIcon_esmisr.svg",
    selected: false,
    amount:0,
    path: {
      domain: "public",
      identifier: "fusdBalance"
    },
    identifier: "A.3c5959b568896393.FUSD.Vault"
  },
]);

export const selectedToken = writable(0)
export const selectedCollection= writable(0)


export const collections = writable([
  {
    id: 0,
    label: "Basic Beasts",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145169/618a0cea8665abc4610c4ca6_basic_beasts_o5telf.png",
    selected: false,
    amount:0
  },
  {
    id: 1,
    label: "Ballerz",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145169/618b83df2183ef7f2902c886_thumbnail_ballerz_jwtdpb.jpg",
    selected: false,
    amount:0
  },
  {
    id: 2,
    label: "Flovatar",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145169/619efc34fe0b49bb68dc20b8_flovatar_5-01_1_bo3h2k.png",
    selected: false,
    amount:0
  },
]);

export const searchVal = writable(" ")

export const modal = writable({
  title: "",
  action: "",
  opened: false,
  content:"custom-token"
})

//Dialog
export const dialog = writable({
  title: "",
  action: "",
  opened: false,
})

export const emeraldIdVerif = writable({
  label: "Emerald ID",
  active:false,
  imgUrl: "https://res.cloudinary.com/do4mactw0/image/upload/v1648233132/Emerald_Bot_Logo_olre0f.svg"
})
export const discordVerif = writable({
  label:"Discord",
  imgUrl: "https://res.cloudinary.com/do4mactw0/image/upload/v1648666781/discordIcon_pokppb.svg",
  selectedId: 0,
  serverId: "",
  active: false,
  editing: false,
  servers: [],
})

export const twitterVerif = writable({
  label:"Twitter",
  imgUrl: "https://res.cloudinary.com/do4mactw0/image/upload/v1648666781/twitterIcon_sxe5jr.svg",
  selectedId: 0,
  accountId: "",
  active: false,
  editing: false,
  accounts: [],
})



