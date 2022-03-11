<script>
import TitleTab from "./tabs/TitleTab.svelte"
export let selectedId 


</script>

<main class="tab-content-container">
  <div hidden={selectedId !== 0}>
    <TitleTab />
    <!-- <slot></slot> -->
</div>
  <div hidden={selectedId !== 1}>
      t2
    <!-- <slot></slot> -->
</div>
  <div hidden={selectedId !== 2}>
      t3
    <!-- <slot></slot> -->
</div>


</main>

<style>
  h3 {
    color: white;
  }

  .tab-content-container {
    padding: 0.4rem 6rem;
  }
</style>
