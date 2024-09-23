<script lang="ts">
  import { onMount } from "svelte";

  export let tag: keyof HTMLElementTagNameMap = "p";
  export let classes = "";

  let slot: HTMLElement;
  let textToEncrypt = "";
  let encryptedText = "";

  const CHAR_CODE_START = 32;
  const CHAR_CODE_RANGE = 94;
  const MAX_DELAY = 1000;

  function getRandomChar(): string {
    return String.fromCharCode(
      Math.floor(Math.random() * CHAR_CODE_RANGE) + CHAR_CODE_START,
    );
  }

  function decryptText(): void {
    encryptedText = textToEncrypt
      .split("")
      .map((char) => (char === " " ? " " : getRandomChar()))
      .join("");

    textToEncrypt.split("").forEach((char, index) => {
      if (char === " ") return;
      setTimeout(() => {
        encryptedText =
          encryptedText.substring(0, index) +
          char +
          encryptedText.substring(index + 1);
      }, Math.random() * MAX_DELAY);
    });
  }

  onMount(() => {
    if (!slot) return;
    textToEncrypt = slot.textContent?.trim() ?? "";
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
