/**
 * @file
 * @date 2022-09-30
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2022-09-30
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from "react";
import { Button } from "../Button";
import Transition from "../Transition";
import style from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface KiteProps {}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Kite: React.FC<KiteProps> = ({}) => {
  Kite.displayName = "Kite";
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [show, setShow] = useState(false);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={style.kite_container}>
      <Button
        label="点击出现下拉框"
        type="secondary"
        onClick={() => setShow(!show)}
      />
      <Transition show={show}>
        <div>123</div>
      </Transition>
    </div>
  );
};
Kite.displayName = "Kite";

/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
