<script>
  import { page } from '$app/stores';
  import logo from './flow-logo.svg';
</script>

<nav class="header-container">
  <div class="logo-container">
    <h4>EMERALD GATEWAY</h4>
  </div>
  <div class="profile-container">
    <h6>0X...4BV5</h6>
  </div>
  <!-- <ul>
    <li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
    <li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
  </ul> -->
</nav>

<style>
  h6 {
    color: var(--primary);
  }
  h4 {
margin:0; padding: 0  }

  .logo-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

  }

  .header-container {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 8vh;
    width: 98%;
    padding-right: 8%;
    padding-left: 10%;
  }

  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--primary);
    border-radius: 9px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: var(--primary);
  }
</style>
