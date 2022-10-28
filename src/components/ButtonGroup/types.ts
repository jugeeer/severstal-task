export type TButtonGroupOption = {
  label: string
  value: string
  status?: boolean
}

export type TProps = {
  options: TButtonGroupOption[]
  onClick: (option: TButtonGroupOption) => void
  active: string
}