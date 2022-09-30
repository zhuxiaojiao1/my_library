/**
 * @file
 * @date 2022-09-03
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2022-09-03
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { forwardRef } from "react";
import style from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface ButtonProps {
  label: string;
  type?: "primary" | "secondary" | "none";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, type = "primary", ...props }) => {
    Button.displayName = "Button";
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    const handleBtnType = () => {
      switch (type) {
        case "primary":
          return [style.btn_primary].join(" ");
        case "secondary":
          return [style.btn_secondary].join(" ");
        case "none":
          return [style.btn_none].join(" ");
        default:
          return [style.btn_primary].join(" ");
      }
    };
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
      <button className={handleBtnType()} {...props}>
        {label}
      </button>
    );
  }
);
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
Button.displayName = "Button";
