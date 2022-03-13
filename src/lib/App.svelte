<script>
	import Tab1 from "./components/tabs/Tab1.svelte";
	import Tab2 from "./components/tabs/Tab2.svelte";
	import Tab3 from "./components/tabs/Tab3.svelte";
	import Tab4 from "./components/tabs/Tab4.svelte";
	import Tab5 from "./components/tabs/Tab5.svelte";
 
  import Tabs from "./components/tabs/Tabs.svelte";

  function handleSelection(target) {
    const el = document.querySelector(target);
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth"
    });
  }
  // List of tab items with labels, values and assigned components
  let items = [
    { label: "Content",
		 value: 1,
		 component: Tab1,
     icon: "ic:outline-subtitles"

		},
    { label: "Tokens",
		 value: 2,
		 component: Tab2,
      // icon: "ant-design:link-outlined",
      icon: "icomoon-free:coin-dollar"


		},
    { label: "Tab 3",
		 value: 3,
		 component: Tab3,
      // icon: "icomoon-free:coin-dollar",
      icon: "fluent:collections-add-24-regular"


		},
    { label: "Tab 4",
		 value: 4,
		 component: Tab4,
     icon: "fa:diamond"


		},
    { label: "Tab 5",
		 value: 5,
		 component: Tab5,
     icon: "bi:card-image"


		},
    { label: "Tab 5",
		 value: 6,
		 component: Tab5,
      icon: "ic:outline-subtitles"
		},
    { label: "Tab 5",
		 value: 7,
		 component: Tab5,
      icon: "ic:outline-subtitles"
		}
  ];
</script>

<main>
  <section>
    <Tabs {items} />
  </section>
</main>

<style>
  main {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  section {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 60%;
    overflow: scroll;
    border-radius: 20px;
    /* background: rgba(20, 32, 43, 0.5) */
    background: #141e26;
    filter: drop-shadow(0px 0px 6px rgba(26, 45, 61, 1));
    /* outline:8px solid rgba(0, 0, 0, 0.04) */
  }

  section::-webkit-scrollbar {
    display: none;
  }
</style>
