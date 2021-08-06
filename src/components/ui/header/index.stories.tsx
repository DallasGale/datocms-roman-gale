import React from "react";

import { Story, Meta } from "@storybook/react";

import Header from ".";

export default {
  component: Header,
  title: "Components/UI/Header",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  minimised: false,
};
