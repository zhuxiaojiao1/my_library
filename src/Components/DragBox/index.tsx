/**
 * @file
 * @date 2022-09-08
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2022-09-08
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from "react";
import style from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface DragBoxProps {
  value?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const DragBox: React.FC<DragBoxProps> = ({ value }): JSX.Element => {
  DragBox.displayName = "DragBox";
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  const arr = [
    "第一个",
    "第二个",
    "第三个",
    "第四个",
    "第五个",
    "第六个",
    "第七个",
    "第八个",
  ];
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/

  /** 鼠标点击 */
  const handleClick = (index: number) => {
    const drag_item = document.getElementById(`drag_${index}`);

    /** 获取 */

    drag_item?.addEventListener("mousemove", handleMove);
    /** 鼠标弹起 */
    drag_item?.addEventListener("mouseup", (e) => {
      drag_item.removeEventListener("mousemove", handleMove);
      handleUp(e);
    });
  };
  /** 鼠标移动 */
  const handleMove = (e: MouseEvent) => {
    console.log("move");
  };
  /** 鼠标弹起 */
  const handleUp = (e: MouseEvent) => {
    console.log("up");
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={style.drag_box}>
      <h1>{value}</h1>
      <ul className={style.drag_wrap}>
        {arr.map((item, index) => {
          return (
            <li
              key={item}
              onMouseDown={() => {
                handleClick(index);
              }}
              id={`drag_${index}`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
DragBox.displayName = "DragBox";
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
