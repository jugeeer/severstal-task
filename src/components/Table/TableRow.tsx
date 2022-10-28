import {ReactNode, useMemo, useState} from "react";
import {TBaseDataType, THeader, TTableRow} from "./types";
import './table.row.css'

export const TableRow = <T extends TBaseDataType>({option, data, expanded, headers}: TTableRow<T>) => {
  const [isExpand, setExpand] = useState<boolean>(false)

  const clickHandler = () => {
    if (expandedData.length) setExpand(!isExpand)
  }

  const expandedData = useMemo(() => {
    return data.filter(item => item.parentId === option.id)
  }, [data])

  return (
    <>
      <tr
        onClick={clickHandler}
        className={`${expanded && 'expanded'} ${!!expandedData.length && 'cursor'} `}
      >
        {headers.map((header: THeader<T>, index) => {
          const item = header.render ? header.render(option) : option[header.value] as ReactNode
          if (index === 0) {
            return <td>
              {!!expandedData.length && <div className='plus-minus'>{isExpand ? '-' : '+'}</div>}
              {`${item}`}
            </td>
          }
          return <td>{item}</td>
        })}
      </tr>
      {isExpand && expandedData.map(dataItem => {
        return <TableRow
          key={dataItem.id}
          headers={headers}
          option={dataItem}
          data={data}
          expanded={true}
        />
      })}
    </>
  )
}