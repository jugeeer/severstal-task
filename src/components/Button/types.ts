import React from "react";

export type TProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>
  active?: boolean
  color: string
}