import { Meta, Story } from "@storybook/react";
import { Kite, KiteProps } from "../../Components/Kite";

// 导出示例
export default {
  title: "Kite",
  component: Kite,
} as Meta;

// 模板
const Template: Story<KiteProps> = (args) => {
  return <Kite {...args} />;
};

export const DefaultKite = Template.bind({});
DefaultKite.args = {};
