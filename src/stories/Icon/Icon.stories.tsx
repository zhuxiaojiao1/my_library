import { Meta, Story } from "@storybook/react";
import { Icon, IconProps } from "../../Components/Icon";
import { copyText } from "../../Components/Icon/utils/copy";
import iconType from "../../Components/Icon/utils/fontIcon";

/** 导出示例 */
export default {
  title: "Icon",
  component: Icon,
} as Meta;

/** 模板 */
const Template: Story<IconProps> = (args) => {
  const list = () => {
    const arr = [];
    for (const key in iconType) {
      arr.push(
        <div
          key={key}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "column nowrap",
            color: "#4d4d4d",
          }}
          onClick={() => {
            copyText(`<Icon type="${key}" />`);
          }}
        >
          <Icon {...Object.assign({ ...args }, { type: key })} />
          <span
            style={{
              maxWidth: "calc(100% - 2rem)",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {key}
          </span>
        </div>
      );
    }
    return arr;
  };
  return <>{list()}</>;
};

/** 示例 */

export const defaultIcon = Template.bind({});
defaultIcon.args = {
  fontSize: "3rem",
};

// export const qq = Template.bind({});
// qq.args = {
//   type: "qq",
// };

// export const star = Template.bind({});
// star.args = {
//   type: "star",
// };
