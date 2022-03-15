<script>
  	import { tabs } from '../tabs/store';

import { createEventDispatcher } from 'svelte';
import Icon from "@iconify/svelte";
import PrimaryBtn from "../PrimaryBtn.svelte"


export let projectName
export let projectDescription

const dispatch = createEventDispatcher();

function sayHello() {
  console.log("successful interaction")
  dispatch('message', {
    text: 'Hello!'
  });

  // update store
  $tabs[0].done = true

  console.log("tabs", $tabs)

  

}

const handleChange = (e) => {
  console.log(e.target.value)
}
</script>

<main class="container">
  <header>
    <h5 class="title">TAB 1</h5>
    <p>Something about Tab 1</p>
  </header>

  <main class="inputs-container">
    <div style="width:100%">
      <h6>Name</h6>
      <input
        placeholder="My awesome project"
        value={projectName ? projectName : null}
        on:change={handleChange}
      />
    </div>
    <div style="width:100%">
      <h6>Description</h6>
      <main class="textarea-header">
        <section class="text-icons-container">
          <div class="text-icon">
            <Icon icon="bx:bold" height={20} />
          </div>
          <div class="text-icon">
            <Icon icon="bx:italic" height={19} />
          </div>
          <div class="text-icon">
            <Icon icon="ant-design:underline-outlined" height={20} />
          </div>
          <div style="width: 8px;" />
          <div class="text-icon">
            <Icon icon="ooui:underline-a" height={16} />
            <Icon icon="akar-icons:chevron-down" height={14} />
          </div>
        </section>
        <section class="text-type-container">
          <div>
            <span style="font-weight: 300; font-size:16px">Normal Text</span>
          </div>
          <div class="text-icon">
            <Icon icon="akar-icons:chevron-down" height={18} />
          </div>
        </section>
        <section class="alignment-container">
          <div class="alignment-icon">
            <Icon icon="akar-icons:text-align-left" height={18} />
          </div>
          <div class="alignment-icon">
            <Icon icon="akar-icons:text-align-center" height={18} />
          </div>
          <div class="alignment-icon">
            <Icon icon="akar-icons:text-align-right" height={18} />
          </div>
        </section>
        <section class="menu-icon-container">
          <div class="text-icon">
            <Icon icon="carbon:overflow-menu-vertical" height={22} />
          </div>
        </section>
      </main>
      <textarea
        rows="4"
        placeholder="My awesome project it´s ..."
        value={projectDescription ? projectDescription : null}
        on:change={handleChange}
      />
    </div>
  </main>
  <footer>
    <PrimaryBtn label={"SAVE"} onPressed={() => sayHello()} />
  </footer>
</main>

<style>
  textarea {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  h5 {
    margin: 0;
    padding: 0;
  }

 
  
  .menu-icon-container {
    display: flex;
    height: 100%;
    width: 6%;
    justify-content: center;
    align-items: center;
  }

  .alignment-icon {
    width: 33.3%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .alignment-container {
    display: flex;
    width: 20%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid var(--form-element-border-color);
  }

  .text-type-container {
    display: flex;
    width: 34%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid var(--form-element-border-color);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .text-icons-container {
    display: flex;
    width: 40%;
    height: 100%;
    justify-content: start;
    align-items: center;
    border-right: 1px solid var(--form-element-border-color);
  }

  .text-icon {
    display: flex;
    height: 100%;
    width: 1.8rem;
    justify-content: center;
    align-items: center;
  }

  .textarea-header {
    display: flex;
    width: 100%;
    height: 1.6rem;
    border: 1px solid var(--form-element-border-color);
    border-bottom: none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    margin-top: 3px;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 65%;
    width: 80%;
  }
  .container {
    height: 100%;
    width: 100%;
  }

  .title {
    letter-spacing: 3px;
  }
</style>
