import {TProps} from "./types";
import './styles.css'

export const Button = ({children, onClick, active, color}: TProps) => {
  return (
    <button
      className={`button-default ${active && 'active'} ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}