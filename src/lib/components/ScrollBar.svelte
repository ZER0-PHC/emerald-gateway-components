<script>
    import { onMount } from "svelte";
     import { createEventDispatcher } from 'svelte';
     import Icon from "@iconify/svelte";

     const dispatch = createEventDispatcher();

   
     export let items = [];
     export let activeTabValue = 0


     function handleTabSelection(id) {
		dispatch('message', {
			id
		});
	}
   
       onMount(() => {
       // Set default tab value
       if (Array.isArray(items) && items.length && items[0].value) {
         activeTabValue = items[0].value;
       }
     });
   
    //  const handleSelection = tabValue => () => (activeTabValue = tabValue);
   

</script>

<main>
  <div class="chevron-wrapper">
    <Icon icon="akar-icons:circle-chevron-left" height={36} />
  </div>
  <!-- <button on:click|preventDefault={() => handleSelection("#target")}> Scroll to element </button> -->
  <div class="scroll-bar">
    <ul class="tabs">
      {#if Array.isArray(items)}
        {#each items as item}
          <!-- <li
            class={activeTabValue === item.id ? "active-tab" : "inactive-tab"}
            on:click={handleTabSelection(item.id)}
          > -->
          <li
            class={activeTabValue === item.id ? "active-tab" : "inactive-tab"}
            on:click={() => handleTabSelection(item.id)}
          >
            <span>{item.label}</span>
          </li>
        {/each}
      {/if}
    </ul>
  </div>
  <div class="chevron-wrapper">
    <Icon icon="akar-icons:circle-chevron-right" height={36} />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20%;
    width: 100%;
  }

  section {
    height: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .scroll-bar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50%;
    width: 70%;
    max-width: 70%;
    overflow: scroll;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.08);
  }

  .scroll-bar::-webkit-scrollbar {
    display: none;
  }

  .chevron-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
  }

  .tabs {
    display: flex;

    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .active-tab {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--primary);
    color: var(--primary);
    background-color: rgba(218, 4, 106, 0.1);
  }
  .inactive-tab {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
