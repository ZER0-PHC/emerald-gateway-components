<script>
        import { createEventDispatcher } from 'svelte';

        export let isOpenModal;

        const dispatch = createEventDispatcher();


        function closeModal() {
        isOpenModal = false;
        dispatch('closeModal', { isOpenModal });
    }

</script>

<div
  id="background"
  style="--display: {isOpenModal ? 'block' : 'none'}"
  on:click={closeModal}
/>
<main id="modal" style="--display: {isOpenModal ? 'block' : 'none'};">
  <header>
      <div >
        <span>This is a modal window.</span>

      </div>
    <div >
        <span>
            ACTION 1

        </span>

    </div>
  </header>
  <section>
    <div style="width:80%">
        <h6>Name</h6>
        <input
          placeholder="My awesome project"
        />
      </div>
      <div style="width:80%">
        <h6>Name</h6>
        <input
          placeholder="My awesome project"
          
        />
      </div>
  </section>
  <footer>
    ACTION 2
  </footer>
</main>

<style>

    header {
        display: flex;
        flex-direction: row;
        height: 12%;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding-right: 2rem;
        padding-left: 2rem;
       
        border-bottom: 2px solid var(--form-element-border-color);
    }

    section{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height:73% ;
        width: 100%;
    }

    footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 2rem;
        height: 15%;
        width: 100%;
        border-top: 2px solid var(--form-element-border-color);
    }

  #background {
    display: var(--display);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }

  #modal {
    display: var(--display);
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #141e26;
    filter: drop-shadow(0 0 20px #333);
    height: 48%;
    width: 42%;
    border-radius: 20px;
    border: 2px solid var(--form-element-border-color);
  }
</style>
