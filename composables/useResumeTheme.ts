const resumeThemes = [
  {
    id: 'jade',
    label: '青岚',
    description: '清爽克制的冷绿系',
    swatches: ['#00b38a', '#eef5f2', '#233230'],
  },
  {
    id: 'sunset',
    label: '落霞',
    description: '偏暖的珊瑚橙调',
    swatches: ['#ef6b4a', '#fff1eb', '#3c2b28'],
  },
  {
    id: 'cobalt',
    label: '群青',
    description: '更理性的蓝色表达',
    swatches: ['#2f6fed', '#edf3ff', '#26344a'],
  },
  {
    id: 'amber',
    label: '琥珀',
    description: '带一点纸感的暖金色',
    swatches: ['#c98911', '#fff4e2', '#3e3121'],
  },
  {
    id: 'berry',
    label: '莓红',
    description: '更柔和的玫瑰色调',
    swatches: ['#c2517c', '#ffeff5', '#412b36'],
  },
] as const

type ResumeThemeId = (typeof resumeThemes)[number]['id']

const storageKey = 'resume-theme'

const isResumeThemeId = (value: string | null | undefined): value is ResumeThemeId => {
  if (!value) {
    return false
  }

  return resumeThemes.some((theme) => theme.id === value)
}

const normalizeTheme = (value: string | null | undefined): ResumeThemeId => {
  if (isResumeThemeId(value)) {
    return value
  }

  return resumeThemes[0].id
}

export const useResumeTheme = () => {
  const theme = useState<ResumeThemeId>('resume-theme', () => resumeThemes[0].id)

  const setTheme = (value: string) => {
    theme.value = normalizeTheme(value)
  }

  return {
    theme,
    themes: resumeThemes,
    setTheme,
    normalizeTheme,
    storageKey,
  }
}