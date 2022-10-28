import {TButtonGroupOption} from "../../components/ButtonGroup/types";

export type TTablePageActions = {
  activeFilterHandler: (option: TButtonGroupOption) => void;
  activeFilter: TButtonGroupOption;
  resetHandler: () => void;
}