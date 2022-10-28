import {ButtonGroup} from "../../components/ButtonGroup/ButtonGroup";
import {FILTER_OPTIONS} from "./constants";
import {Button} from "../../components/Button/Button";
import {BUTTON_COLOR, BUTTON_TXT} from "../../components/Button/constans";
import React from "react";
import {TTablePageActions} from "./types";

export const TablePageActions = React.memo(
  ({activeFilterHandler, activeFilter, resetHandler}: TTablePageActions) => {
  return <div className='table-page_actions'>
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
  </div>
})