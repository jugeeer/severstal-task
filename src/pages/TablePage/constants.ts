import {TUser} from "../../types/types";
import {THeader} from "../../components/Table/types";

export const FILTER_OPTIONS = [
  {label: 'Active', value: 'active', status: true},
  {label: 'Inactive', value: 'inactive', status: false}
]

export const TABLE_HEADERS: THeader<TUser>[] = [
  {label: 'Name', value: 'name', sortable: false, dataKey: 'name',},
  {label: 'Balance', value: 'balance', sortable: true, dataKey: 'balance',},
  {label: 'Email', value: 'email', sortable: true, dataKey: 'email',},
  {
    label: 'Status',
    value: 'isActive',
    sortable: false,
    dataKey: 'active',
    render: (option) => option.isActive ? 'Active' : 'Inactive'
  }
]

export const INITIAL_SORT_KEYS = {balance: false, email: false}
export const INITIAL_ACTIVE_FILTER = {
  label: '',
  value: ''
}