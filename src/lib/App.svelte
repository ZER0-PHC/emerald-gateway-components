<script>
	import Tab1 from "./components/tabs/Tab1.svelte";
	import Tab2 from "./components/tabs/Tab2.svelte";
	import Tab3 from "./components/tabs/Tab3.svelte";
 
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
		 component: Tab1
		},
    { label: "Interactions",
		 value: 2,
		 component: Tab2
		},
    { label: "Tab 3",
		 value: 3,
		 component: Tab3
		},
    { label: "Tab 3",
		 value: 3,
		 component: Tab3
		},
    { label: "Tab 3",
		 value: 3,
		 component: Tab3
		}
  ];
</script>
<main>
  <section>
      <Tabs {items} />

  </section>

</main>
<!-- <script>
  import { onMount } from "svelte";
  import ScrollBar from "./components/ScrollBar.svelte";
  import TabContent from "./components/TabContent.svelte";
  import Tab1 from  "./components/tabs/TitleTab.svelte";
  import Tab2 from  "./components/tabs/TitleTab2.svelte";
  import tabs from "./tabs.js";

  // state
  let selectedId = 0;


  // logic
 

  const handleTabSelection = (event) => {
    console.log("event", event.detail.id)
    selectedId = event.detail.id

  }

</script> -->

<!-- <main>
  <section>
    <ScrollBar
      bind:activeTabValue={selectedId}
      items={tabs}
      on:message={handleTabSelection}
    />
    <TabContent selectedId={selectedId} />
  </section>
</main> -->

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
