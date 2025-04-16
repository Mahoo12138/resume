export const useLastUpdated = () => {

  const headerTime = useState<string | undefined>()
  const contentTime = useState<string | undefined>()

  // 计算最新时间
  const latestTime = computed(() => {
    if (!headerTime.value && !contentTime.value) return ''
    if (!headerTime.value || !contentTime.value) {
      return headerTime.value || contentTime.value
    }
    return new Date(headerTime.value) > new Date(contentTime.value)
      ? headerTime.value
      : contentTime.value
  })

  return { headerTime, contentTime, latestTime }
}