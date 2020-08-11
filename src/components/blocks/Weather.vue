<template>
  <content-block :loading="loading" name="Weather" url="">
    <figure class="w-24 h-24 mb-2">
      <img
        class="w-24 h-24"
        :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
      />
    </figure>

    <p>{{ weather.name }}</p>
    <p>{{ weather.weather[0].description }}</p>
    <p>{{ parseInt(weather.main.temp - 273.15) }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../modules/ContentBlock.vue'

import { ref, onMounted } from 'vue'
import useFetch from '../../use/useFetch.js'

export default {
  components: {
    ContentBlock,
  },
  setup() {
    const { data, loading } = useFetch(
      'https://v1.nocodeapi.com/kn0wn/ow/PFEGhtJiKKpSDKjf/byCityName?q=London&api_key=AjwkBiIJTIEczaKcC'
    )

    return {
      weather: data,
      loading,
    }
  },
}
</script>

<style></style>
