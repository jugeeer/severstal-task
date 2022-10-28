import {INITIAL_ACTIVE_FILTER, INITIAL_SORT_KEYS, TABLE_HEADERS} from "./constants";
import {Table} from "../../components/Table/Table"
import {useCallback, useEffect, useState} from "react";
import {TButtonGroupOption} from "../../components/ButtonGroup/types";
import './styles.css'
import {TUser} from "../../types/types";
import {TablePageActions} from "./TablePageActions";


export const TablePage = () => {
  const [data, setData] = useState<TUser[]>([])
  const [tableData, setTableData] = useState<TUser[]>([])
  const [activeFilter, setActiveFilter] = useState<TButtonGroupOption>(INITIAL_ACTIVE_FILTER)
  const [sortKeys, setSortKeys] = useState<{ [key: string]: boolean }>(INITIAL_SORT_KEYS)

  const resetHandler = () => {
    setActiveFilter(INITIAL_ACTIVE_FILTER)
    setSortKeys(INITIAL_SORT_KEYS)
    setTableData(data)
  }

  const activeFilterHandler = useCallback((option: TButtonGroupOption) => {
    setTableData([...data.filter(item => item.isActive === option.status)])
    setActiveFilter(option)
  }, [data])

  const sortHandler = useCallback((key: keyof TUser) => {
    let sortedArr: TUser[] = data
    if (activeFilter) {
      sortedArr = [...tableData]
    }
    if (sortKeys[key]) {
      sortedArr.sort((a, b) => a[key] > b[key] ? 1 : -1)
    } else {
      sortedArr.sort((a, b) => a[key] > b[key] ? -1 : 1)
    }
    setSortKeys({...sortKeys, [key]: !sortKeys[key]})
    setTableData(sortedArr)
  }, [data, sortKeys, tableData])

  const fetchData = async () => {
    try {
      const resp = await fetch('http://localhost:3001/data');
      const result = await resp.json();
      setData(result);
      setTableData(result)
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="table-page">
      <TablePageActions
        activeFilterHandler={activeFilterHandler}
        activeFilter={activeFilter}
        resetHandler={resetHandler}
      />
      <Table<TUser>
        headers={TABLE_HEADERS}
        data={tableData}
        sort={sortHandler}
      />
    </div>
  )
}