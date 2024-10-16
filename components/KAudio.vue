<script setup lang="ts">
import WaveSurfer from "wavesurfer.js";

const props = defineProps<{
  src: string;
}>();

function volume(value: number) {
  if (wavesurfer.value) {
    wavesurfer.value.setVolume(value);
  }
}

const waveform = ref<HTMLDivElement | null>(null);

const speed = ref(1);

let wavesurfer = ref<WaveSurfer | null>(null);
const isPlaying = ref(false);

const currentTime = ref(0);
const duration = ref(0);

//Round to seconds
const getDuration = () => {
  if (wavesurfer.value) {
    return Math.round(duration.value);
  }

  return 0;
};

const getCurrentTime = () => {
  if (wavesurfer.value) {
    return Math.round(currentTime.value);
  }

  return 0;
};

onMounted(() => {
  wavesurfer.value = WaveSurfer.create({
    container: waveform.value as HTMLElement,
    waveColor: "#4F4A85",
    progressColor: "#383351",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",

    // Set a bar width
    barWidth: 2,
    // Optionally, specify the spacing between bars
    barGap: 1,
    // And the bar radius
    barRadius: 2,
    // mediaControls: true,
    barHeight: 2,
    dragToSeek: true,
    height: 40,
  });

  wavesurfer.value?.on("ready", () => {
    duration.value = wavesurfer.value?.getDuration() || 0;
    currentTime.value = wavesurfer.value?.getCurrentTime() || 0;
  });

  wavesurfer.value?.on("click", () => {
    wavesurfer.value?.play();
  });

  wavesurfer.value?.on("play", () => {
    isPlaying.value = true;
  });

  wavesurfer.value?.on("pause", () => {
    isPlaying.value = false;
  });

  wavesurfer.value?.on("timeupdate", () => {
    currentTime.value = wavesurfer.value?.getCurrentTime() || 0;
    duration.value = wavesurfer.value?.getDuration() || 0;
  });
});

function toggle() {
  if (wavesurfer.value) {
    if (isPlaying.value) {
      wavesurfer.value.pause();
    } else {
      wavesurfer.value.play();
    }
  }
}

function setSpeed(speedToSet: number) {
  if (wavesurfer.value) {
    wavesurfer.value.setPlaybackRate(speedToSet);
    speed.value = speedToSet;
  }
}
</script>

<template>
  <div class="flex items-center gap-2 bg-grey/10 rounded px-4 py-2">
    <div class="w-28 flex items-center justify-center">
      <button @click="toggle">
        {{ isPlaying ? "Pause" : "Play" }}
      </button>
    </div>
    <div class="w-full">
      <div ref="waveform" />
      <div class="flex items-center gap-0.5 justify-end">
        <p class="text-xs">{{ getCurrentTime() }}/{{ getDuration() }}</p>
      </div>
    </div>
    <div>
      <input type="range" min="0" max="1" step="0.01" v-model="volume" />
    </div>
    <div class="">
      <div class="flex items-center gap-0.5">
        <button
          class="text-xs transition-all bg-blue-500/10 text-blue-500 hover:bg-blue-500/25 hover:text-blue-800 rounded px-1 py-0.5"
          :class="{ 'bg-blue-500/25 text-blue-800': speed === 0.5 }"
          @click="setSpeed(0.5)"
        >
          0.5x
        </button>
        <button
          class="text-xs transition-all bg-blue-500/10 text-blue-500 hover:bg-blue-500/25 hover:text-blue-800 rounded px-1 py-0.5"
          :class="{ 'bg-blue-500/25 text-blue-800': speed === 1 }"
          @click="setSpeed(1)"
        >
          1.0x
        </button>
        <button
          class="text-xs transition-all bg-blue-500/10 text-blue-500 hover:bg-blue-500/25 hover:text-blue-800 rounded px-1 py-0.5"
          :class="{ 'bg-blue-500/25 text-blue-800': speed === 1.5 }"
          @click="setSpeed(1.5)"
        >
          1.5x
        </button>
        <button
          class="text-xs transition-all bg-blue-500/10 text-blue-500 hover:bg-blue-500/25 hover:text-blue-800 rounded px-1 py-0.5"
          :class="{ 'bg-blue-500/25 text-blue-800': speed === 2 }"
          @click="setSpeed(2)"
        >
          2.0x
        </button>
      </div>
    </div>
  </div>
</template>
