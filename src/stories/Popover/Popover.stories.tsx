import { Meta, Story } from "@storybook/react";
import { Popover, PopoverProps } from "../../Components/Popover";

// 导出示例
export default {
  title: "Popover",
  component: Popover,
} as Meta;

// 模板
const Template: Story<PopoverProps> = (args) => {
  return <Popover {...args} />;
};

export const DefaultPopover = Template.bind({});
DefaultPopover.args = {};
