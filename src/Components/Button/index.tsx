/**
 * @file
 * @date 2022-09-03
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2022-09-03
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { forwardRef } from "react";
import style from "./style.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface ButtonProps {
  label: string;
  type?: "primary" | "secondary" | "none";
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, type = "primary" }) => {
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
          return "btn_primary";
        case "secondary":
          return "btn_secondary";
        default:
          return "";
      }
    };
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
      <button className={[style.btn, handleBtnType()].join(" ")}>
        {label}
      </button>
    );
  }
);
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
Button.displayName = "Button";
