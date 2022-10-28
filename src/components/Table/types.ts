import {TUser} from "../../types/types";
import {TButtonGroupOption} from "../ButtonGroup/types";

export type THeader = {
  label: string
  value: keyof TUser
}

export type TTable = {
  headers: THeader[]
  data: TUser[]
  sort?: (key: keyof TUser) => void
  activeFilter: TButtonGroupOption
}

export type TTableRow = {
  option: TUser,
  data: TUser[]
  expanded?: boolean
  activeFilter: TButtonGroupOption
}