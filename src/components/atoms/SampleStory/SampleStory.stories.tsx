import React from "react";
import SampleStory from "./SampleStory";

const Story = {
  component: SampleStory,
  title: "SampleStory",
};

const Template = (args) => <SampleStory {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default Story;
