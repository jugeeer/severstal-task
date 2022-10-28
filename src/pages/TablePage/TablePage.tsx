import {ButtonGroup} from "../../components/ButtonGroup/ButtonGroup";
import {FILTER_OPTIONS, TABLE_HEADERS} from "./constants";
import {Table} from "../../components/Table/Table"
import {useEffect, useState} from "react";
import {Button} from "../../components/Button/Button";
import {TButtonGroupOption} from "../../components/ButtonGroup/types";
import './styles.css'
import {BUTTON_COLOR, BUTTON_TXT} from "../../components/Button/constans";
import {TUser} from "../../types/types";

const initialSortKeys = {balance: false, email: false}
const initialActiveFilter = {
  label: '',
  value: ''
}

export const TablePage = () => {
  const [data, setData] = useState<TUser[]>([])
  const [tableData, setTableData] = useState<TUser[]>([])
  const [activeFilter, setActiveFilter] = useState<TButtonGroupOption>(initialActiveFilter)
  const [sortKeys, setSortKeys] = useState<{[key: string]: boolean}>(initialSortKeys)

  const activeFilterHandler = (option: TButtonGroupOption) => {
    const filteredArr = data.filter(item => item.isActive === option.status)
    setTableData(filteredArr)
    setActiveFilter(option)
  }

  const resetHandler = () => {
    setActiveFilter(initialActiveFilter)
    setSortKeys(initialSortKeys)
    setTableData(data)
  }

  const sortHandler = (key: keyof TUser) => {
    let sortedArr: TUser[] = data
    if (activeFilter) {
      sortedArr = [...tableData]
    }
    if (sortKeys[key]) {
      sortedArr.sort((a, b) => a[key] > b[key] ? 1 : -1)
    } else {
      sortedArr.sort((a, b) => a[key] > b[key] ? -1 : 1 )
    }
    setSortKeys({...sortKeys, [key]: !sortKeys[key]})
    setTableData(sortedArr)
  }

  const fetchData = async() => {
    try{
      const resp = await fetch('http://localhost:3001/data');
      const result = await resp.json();
      setData(result);
      setTableData(result)
    }catch (e){
      console.error(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="table-page">
      <ButtonGroup
        options={FILTER_OPTIONS}
        onClick={activeFilterHandler}
        active={activeFilter.value}
      />
      <Button
        color={BUTTON_COLOR.DANGER}
        onClick={resetHandler}
      >
        {BUTTON_TXT.RESET}
      </Button>
      <Table
        headers={TABLE_HEADERS}
        data={tableData}
        sort={sortHandler}
        activeFilter={activeFilter}
      />
    </div>
  )
}