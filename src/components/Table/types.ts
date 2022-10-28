export type THeader<T> = {
  label: string
  value: keyof T
  dataKey: string
  sortable: boolean
  render?: (option: T) => string
}

export type TTable<T> = {
  headers: THeader<T>[]
  data: T[]
  sort?: (key: keyof T) => void
}

export type TTableRow<T> = {
  headers: THeader<T>[]
  option: T,
  data: T[]
  expanded?: boolean
}

export type TTableHead<T> = {
  header: THeader<T>
  sort?: (key: keyof T) => void
}

export type TBaseDataType = {
  id: string
  parentId: string
}