import {THeader, TTable} from "./types";
import {TableRow} from "./TableRow";
import './table.css'
import {TUser} from "../../types/types";

export const Table = ({headers, data, sort, activeFilter}: TTable) => {
  const sortHandler = (value: keyof TUser) => {
    if (sort) {
      sort(value)
    }
  }

  return (
    <table style={{width: '100%'}} className="table">
      <thead>
        <tr>
          {headers.map(header => {
            const isSort = header.value === 'balance' || header.value === 'email'
            return (
              <th
                onClick={() => isSort && sortHandler(header.value)}
                className={`${isSort && 'cursor'}`}
              >
                {header.label}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody className="table-row">
        {data.map((dataItem) => {
          return <TableRow
            key={dataItem.name}
            option={dataItem}
            data={data}
            activeFilter={activeFilter}
          />
        })}
      </tbody>
    </table>
  )
}