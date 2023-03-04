<script>
  import { onMount } from "svelte";
  export let tag = "p";
  export let classes = "";

  let slot;
  let textToEncrypt = "";
  let encryptedText = "";

  /**
   * Take the textToEncrypt and encrypt it using random characters
   * but leaving the space
   */
  function decryptText() {
    for (let i = 0; i < textToEncrypt.length; i++) {
      if (textToEncrypt[i] === " ") {
        encryptedText += " ";
        continue;
      }
      encryptedText += String.fromCharCode(Math.floor(Math.random() * 94) + 32);
    }

    for (let i = 0; i < textToEncrypt.length; i++) {
      if (textToEncrypt[i] === " ") continue;
      setTimeout(() => {
        encryptedText =
          encryptedText.substr(0, i) +
          textToEncrypt[i] +
          encryptedText.substr(i + 1);
      }, Math.floor(Math.random() * 1000));
    }
  }

  onMount(() => {
    if (!slot) return;
    textToEncrypt = slot.textContent.trim();
    decryptText();
  });
</script>

<div
  bind:this={slot}
  class="transition-opacity duration-300 {encryptedText
    ? 'opacity-100'
    : 'opacity-0'}"
>
  {#if encryptedText}
    <svelte:element this={tag} class={classes}>
      {encryptedText}
    </svelte:element>
  {:else}
    <slot />
  {/if}
</div>
