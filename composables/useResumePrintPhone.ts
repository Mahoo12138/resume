const normalizePhone = (value: string) => value.trim()

const getPhoneDigits = (value: string) => value.replace(/\D/g, '')

const isValidPrintPhone = (value: string) => {
  const digits = getPhoneDigits(value)

  return digits.length === 11 || (digits.length === 13 && digits.startsWith('86'))
}

const getDialablePhone = (value: string) => {
  const normalized = normalizePhone(value)

  if (!isValidPrintPhone(normalized)) {
    return ''
  }

  return normalized.replace(/[^\d+]/g, '')
}

export const useResumePrintPhone = () => {
  const printPhone = useState<string>('resume-print-phone', () => '')

  const setPrintPhone = (value: string) => {
    printPhone.value = normalizePhone(value)
  }

  const clearPrintPhone = () => {
    printPhone.value = ''
  }

  return {
    printPhone,
    setPrintPhone,
    clearPrintPhone,
    normalizePhone,
    isValidPrintPhone,
    getDialablePhone,
  }
}