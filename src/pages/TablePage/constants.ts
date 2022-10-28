import {TUser} from "../../types/types";

export const FILTER_OPTIONS = [
  {label: 'Active', value: 'active', status: true},
  {label: 'Inactive', value: 'inactive', status: false}
]

export const TABLE_HEADERS: {label: string, value: keyof TUser}[] = [
  {label: 'Name', value: 'name'},
  {label: 'Balance', value: 'balance'},
  {label: 'Email', value: 'email'},
  {label: 'Status', value: 'isActive'},
]