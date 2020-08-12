import { ref, computed, onBeforeMount } from 'vue'

export default function useFetch(url, type = {}, headers) {
  const data = ref(type)
  const loading = computed(() => Object.entries(data.value).length === 0)

  const getHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...headers
  })

  const getData = async () => {
    const response = await fetch(
      url,
      {
        headers: getHeaders,
      }
    )

    const json = await response.json()

    data.value = json
  }

  onBeforeMount(getData)

  return {
    data,
    loading
  }
}
