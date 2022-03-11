<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
</script>

<Header />

<main class="main-container" >
  <slot />
</main>

<!-- <footer>
  <p>
    visit <a href="https://docs.onflow.org">docs.onflow.org</a> to learn more.
  </p>
  <p>
   
  </p>
</footer> -->

<style>
  footer {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    padding: 40px;
    height: 0.5vh;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
