import { ref, onMounted, computed } from 'vue'

export default function useFetch(url, type = {}) {
  const data = ref(type)
  const loading = computed(() => Object.entries(data.value).length === 0)

  const getData = async () => {
    const response = await fetch(
      url,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
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
