import { THeader, TTableHead} from "./types";

export const TableCellHead = <T extends object>({header, sort}: TTableHead<T>) => {
  const sortHandler = (header: THeader<T>) => {
    return () => {
      if (header.sortable && sort) {
        sort(header.value)
      }
    }
  }

  return (
    <th
      onClick={sortHandler(header)}
      className={`${header.sortable && 'cursor'}`}
    >
      {header.label}
    </th>
  )
}