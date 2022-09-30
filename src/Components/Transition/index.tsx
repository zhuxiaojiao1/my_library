/**
 * @file
 * @date 2022-09-30
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2022-09-30
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from "react";
import style from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface TransitionProps {
  show: boolean;
  type?: string;
  children?: React.ReactNode;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Transition: React.FC<TransitionProps> = ({
  show,
  type = "toLeft",
  children,
}): JSX.Element => {
  console.log(show);
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /** 过度效果 */
  const handleTransitionType = () => {
    switch (type) {
      case "fade": // 淡入淡出
        return {
          opacity: show ? 1 : 0,
        };
      case "toLeft":
        return {};

      default:
        return {};
    }
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={style.transition_container} style={handleTransitionType()}>
      {children}
    </div>
  );
};
export default Transition;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
