/**
 * @file
 * @date 2022-09-08
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2022-09-08
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from "react";
import iconType, { IconDefinedType } from "./utils/fontIcon";
import style from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface IconProps {
  type?: keyof typeof iconType;
  icon?: IconDefinedType;
  fontSize?: string;
  color?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Icon: React.FC<IconProps> = ({
  type,
  icon,
  fontSize,
  color = "#4d4d4d",
}) => {
  Icon.displayName = "Icon";
  const iconData = type ? iconType[type] : icon;
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-icon={iconData?.iconName}
      viewBox={`0 0 ${iconData?.icon[0]} ${iconData?.icon[1]}`}
      style={{
        fontSize,
        color,
      }}
      className={style.icon_wrap}
    >
      <path fill="currentColor" d={iconData?.icon[4]} />
    </svg>
  );
};
Icon.displayName = "Icon";
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
