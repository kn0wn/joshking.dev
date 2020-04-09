// import {ref} from '@vue/composition-api'

export function useChunk(array, amount) {
  const chunk = array.reduce(
    (chunks, el, i) => (i % amount ? chunks[chunks.length - 1].push(el) : chunks.push([el])) && chunks,
    []
  )

  return chunk
}
