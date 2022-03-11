<script>
	export let items = [];
	export let activeTabValue = 1;
  
	const handleClick = tabValue => () => (activeTabValue = tabValue);
	const handleIconPress = action => action === "increment" ? activeTabValue += 1 : activeTabValue -= 1
</script>

<!-- TabsList -->
<section class="tab-list-container">
  <div style={{ width: 50 }}>
    <button on:click={() => handleIconPress("decrement")}> icon </button>
  </div>

  <ul>
    {#each items as item}
      <li class={activeTabValue === item.value ? "active" : ""}>
        <span on:click={handleClick(item.value)}>{item.label}</span>
      </li>
    {/each}
  </ul>

  <div style={{ width: 50 }}>
    <button on:click={() => handleIconPress("increment")}> icon </button>
  </div>
</section>

<!-- TabContent -->
{#each items as item}
  {#if activeTabValue == item.value}
    <div class="box">
      <svelte:component this={item.component} />
    </div>
  {/if}
{/each}

<style>
  .box {
    margin-bottom: 10px;
    padding: 40px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    /* height: 50%;  */
    width: 70%;
    max-width: 70%;
    overflow: scroll;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.08);
    list-style: none;

    /* display: flex;
		/* border-bottom: 1px solid teal; */
  }

  ul::-webkit-scrollbar {
    display: none;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -1px;
    width: 100%;
    height: 100%;
	min-width: 33.3%;
  }

  span {
    border: 1px solid transparent;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  span:hover {
    /* border-color: #e9ecef #e9ecef #dee2e6; */
  }

  li.active > span {
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
    width: 100%;
    height: 100%;
	min-width: 33.3%;

    /* border-color: #dee2e6 #dee2e6 #fff; */
  }

  .tab-list-container {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-between;
  }
</style>
