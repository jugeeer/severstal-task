import {TBaseDataType, TTable} from "./types";
import {TableRow} from "./TableRow";
import './table.css'
import {TableCellHead} from "./TableCellHead";

export const Table = <T extends TBaseDataType>({headers, data, sort}: TTable<T>) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map(header => {
            return <TableCellHead key={header.dataKey} header={header} sort={sort}/>
          })}
        </tr>
      </thead>
      <tbody className="table-row">
        {data.map((dataItem) => {
          return <TableRow<T>
            headers={headers}
            key={dataItem.id}
            option={dataItem}
            data={data}
          />
        })}
      </tbody>
    </table>
  )
}