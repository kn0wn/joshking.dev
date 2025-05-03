<script setup lang="ts">
interface SearchResult {
  id: string;
  title: string;
  titles: string[];
  level: number;
  content: string;
}

const searchQuery = ref("");
const searchResults = ref<SearchResult[]>([]);
const isSearching = ref(false);

const search = async () => {
  if (!searchQuery.value) {
    searchResults.value = [];
    return;
  }

  isSearching.value = true;
  try {
    const results = await queryCollectionSearchSections("content", {
      ignoredTags: [],
    });
    searchResults.value = results.filter(
      (result) =>
        result.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        result.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } catch (error) {
    console.error("Search failed:", error);
  } finally {
    isSearching.value = false;
  }
};

// Debounce search to prevent too many API calls
const debouncedSearch = useDebounceFn(search, 300);

watch(searchQuery, () => {
  debouncedSearch();
});
</script>

<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search articles..."
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <div v-if="isSearching" class="absolute right-3 top-2.5">
      <div
        class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"
      ></div>
    </div>

    <div
      v-if="searchResults.length > 0"
      class="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg"
    >
      <div
        v-for="result in searchResults"
        :key="result.id"
        class="p-4 hover:bg-gray-50"
      >
        <NuxtLink :to="result.id" class="block">
          <h3 class="font-medium text-blue-600">{{ result.title }}</h3>
          <p class="text-sm text-gray-600">
            {{ result.content.slice(0, 150) }}...
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
