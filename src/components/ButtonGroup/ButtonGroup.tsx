import {TButtonGroupOption, TProps} from "./types";
import {Button} from "../Button/Button";
import './styles.css'
import {BUTTON_COLOR} from "../Button/constans";

export const ButtonGroup = ({options, onClick, active}: TProps) => {
  const onClickHandler = (option: TButtonGroupOption) => {
    return () => onClick(option);
  }

  return (
    <div className="button-group">
      {options.map(option => {
        return (
          <Button
            key={option.value}
            color={BUTTON_COLOR.PRIMARY}
            active={active === option.value}
            onClick={onClickHandler(option)}
          >
            {option.label}
          </Button>
        )
      })}
    </div>
  )
}