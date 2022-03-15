<script>
  import {  tabs } from "./store"
    import { fade } from 'svelte/transition'
	import Icon from "@iconify/svelte";
	export let items = [];
	export let activeTabValue = 1;
  let isHovered = {right: false, left: false}

  let tabsValue
  
  console.log("store tabs", tabs)

  tabs.subscribe(value => {
		tabsValue = value;
	});
  
  const handleMessage = event => { handleAction("increment")}
  const handleAction = action => action === "increment" ? activeTabValue ++ : activeTabValue --
	const handleClick = tabValue => () => (activeTabValue = tabValue);
	const handleIconPress = action => action === "increment" ? activeTabValue += 1 : activeTabValue -= 1

  // conditional rendering
  



</script>

<!-- TabsList -->
<main class="main-container">
  <section class="tab-list-container">
    <div class="chevron-wrapper" on:click={() => handleAction("decrement")}>
      <div
        class="chevron-icon"
        on:pointerenter={() => (isHovered.left = !isHovered.left)}
        on:pointerleave={() => (isHovered.left = !isHovered.left)}
      >
        <Icon
          class="chevron-icon"
          icon="akar-icons:circle-chevron-left"
          height={36}
          color={isHovered.left ? "var(--primary)" : "lightgrey"}
        />
      </div>
    </div>

    <ul>
      {#each items as item, i}
        <li
          class={activeTabValue === item.value ? "active" : "inactive-tab"}
          on:click={handleClick(item.value)}
        >
          <Icon
            icon={item.icon}
            height={30}
            color={tabsValue[i].done ? "#85DFB4" :  activeTabValue === item.value
              ? "var(--primary)"
              : "lightgrey"}
          />
          <!-- <Icon
            icon={item.icon}
            height={30}
            color={tabs[i].done 
              ? "var(--primary)"
              : "lightgrey"}
          /> -->
        </li>
      {/each}
    </ul>

    <div class="chevron-wrapper" on:click={() => handleAction("increment")}>
      <div
        class="chevron-icon"
        on:pointerenter={() => (isHovered.right = !isHovered.right)}
        on:pointerleave={() => (isHovered.right = !isHovered.right)}
      >
       
        <Icon
          class="chevron-icon"
          icon="akar-icons:circle-chevron-right"
          height={36}
          color={isHovered.right ? "var(--primary)" : "lightgrey"}
        />
      </div>
    </div>
  </section>

  <!-- TabContent -->
  {#each items as item}
    {#if activeTabValue == item.value}
      <div class="tab-content-container" in:fade={{ duration: 1000 }}>
        <svelte:component this={item.component} on:message={handleMessage} />
      </div>
    {/if}
  {/each}
</main>

<style>
  .main-container {
    height: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 70%;
    width: 70%;
    max-width: 70%;
    overflow: scroll;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.08);
    list-style: none;
  }

  ul::-webkit-scrollbar {
    display: none;
  }

  li {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    min-width: 20%;
    cursor: pointer;
  }

  span {
    border: 1px solid transparent;
    /* padding: 0.5rem 1rem; */
    cursor: pointer;
  }

  span:hover {
    /* border-color: #e9ecef #e9ecef #dee2e6; */
  }

  /* li.active > span { */
  li.active {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #495057;
    background-color: #fff;
    border-bottom: 2px solid var(--primary);
    color: var(--primary);
    background-color: rgba(218, 4, 106, 0.1);
    margin: 0;
    padding: 0;
    width: 20%;
    height: 100%;
    min-width: 20%;
  }

  .inactive-tab:hover{
    background: var(--form-element-border-color)
  }

  .chevron-icon {
    cursor: pointer;
  }

  .tab-content-container {
    height: 100%;
    padding: 1rem 2rem;
  }

  .tab-list-container {
    display: flex;
    width: 100%;
    height: 12%;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .chevron-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
  }
</style>
