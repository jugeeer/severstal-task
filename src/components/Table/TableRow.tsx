import {useEffect, useState} from "react";
import {TTableRow} from "./types";
import {TUser} from "../../types/types";
import './table.row.css'

export const TableRow = ({option, data, expanded, activeFilter}: TTableRow) => {
  const [isExpand, setExpand] = useState<boolean>(false)
  const [expandedData, setExpandedData] = useState<TUser[]>([])

  const clickHandler = () => {
    if (expandedData.length) setExpand(!isExpand)
  }

  useEffect(() => {
    setExpand(false)
    let arr = data.filter((item) => item.parentId === option.id)
    if (activeFilter.value) {
      arr = arr.filter(item => item.isActive === activeFilter.status)
    }
    setExpandedData(arr)
  }, [activeFilter])


  return (
    <>
      <tr
        onClick={clickHandler}
        className={`${expanded && 'expanded'} ${!!expandedData.length && 'cursor'} `}
      >
        <td>
          {!!expandedData.length && <div className='plus-minus'>{isExpand ? '-' : '+'}</div>}
          {option.name}
        </td>
        <td>{option.balance}</td>
        <td>{option.email}</td>
        <td>{option.isActive ? 'Active' : 'Inactive'}</td>
      </tr>
      {isExpand && expandedData.map(dataItem => {
        return <TableRow
          key={dataItem.name}
          option={dataItem}
          data={data}
          expanded={true}
          activeFilter={activeFilter}
        />
      })}
    </>
  )
}