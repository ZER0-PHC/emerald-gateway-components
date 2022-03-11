<script>
    import Icon from "@iconify/svelte";
    import PrimaryBtn from "../PrimaryBtn.svelte"
    export let projectURL
    
    const handleChange = (e) => {
      console.log(e.target.value)
    }
    </script>
    
    <main class="container">
      <header>
        <h5 class="title">LINK</h5>
        <p>Something about the link</p>
      </header>
    
      <section class="inputs-container">
        <div>
          <h6>Url</h6>
          <input
            placeholder="https://myproject.com"
            value={projectURL ? projectURL : null}
            on:change={handleChange}
          />
        </div>
        <div>
            <h6>Privacy</h6>

        </div>
      </section>
      <footer>
        <PrimaryBtn label={"SAVE"} />
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
    
      header {
        height: 18%;
      }
      footer {
        height: 8%;
        width: 100%;
        display: flex;
        justify-content: end;
        padding-right: 1rem;
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
        height: 70%;
        width: 100%;
      }
      .container {
        height: 100%;
        width: 100%;
      }
    
      .title {
        letter-spacing: 3px;
      }
    </style>
    