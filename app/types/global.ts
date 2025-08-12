export type MenuItemType = {
  title: string
  icon: string
  to: string
}

export type LabelTextType = {
  icon?: string
  label: string
  text: string | number
}

export type ConfigHelpItemType = {
  label: string
  unlimited: boolean
}

export type PracticeResultType = {
  title: string
  score: number
  date: string
}

export type PracticeType = {
  title: string
  result: PracticeResultType
}

export type ConversationType = {
  icon: string
  label: string
  value: number
  errors: number
}

export type ChatItemType = {
  author: string
  message: string
  duration: string
  hour: string
}
