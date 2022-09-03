/**
 * @file
 * @date 2022-09-03
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2022-09-03
 */
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../../Components/Button";
export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

/** primary button */
export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
  type: "primary",
  label: "确定",
};

export const SecondaryBtn = Template.bind({});
SecondaryBtn.args = {
  type: "secondary",
  label: "取消",
};

export const NoneBtn = Template.bind({});
NoneBtn.args = {
  type: "none",
  label: "取消",
};
