import { ref, onMounted, computed } from 'vue'

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
        method: 'get',
        mode: 'cors',
        headers: getHeaders,
      }
    )

    const json = await response.json()

    data.value = json
  }

  onMounted(getData)

  return {
    data,
    loading
  }
}
