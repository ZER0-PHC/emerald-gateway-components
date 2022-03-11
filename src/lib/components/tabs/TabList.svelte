<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';
	import { createEventDispatcher } from 'svelte';

	import Icon from "@iconify/svelte";

let data;
	// $: console.log(data?.innerHTML);
	const { registerTab, selectTab, selectedTab,  selectNxtTab  } = getContext(TABS);

	// selectedTab.subscribe(value => {
	// 	console.log("value", value)

	// });
	


</script>

<main class="tab-list-container">
  <section class="chevron-wrapper">
    <Icon icon="akar-icons:circle-chevron-left" height={36} />
  </section>
  <section  class="tab-list">
    <slot />
  </section>
  <section class="chevron-wrapper">
    <div on:click={() => selectNxtTab()}>
      <Icon icon="akar-icons:circle-chevron-right" height={36} />
    </div>
  </section>
</main>

<style>
    .tab-list-container {
      display: flex;
      width: 100%;
      height: 10%;
      justify-content: space-between;
    }

  .chevron-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
  }

  .tab-list {
    /* margin: auto; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
    /* height: 50%;  */
    width: 70%;
    max-width: 70%;
    overflow: scroll;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.08);
    /* display: flex;
		/* border-bottom: 1px solid teal; */
  }
  .tab-list::-webkit-scrollbar {
    display: none;
  }
</style>
