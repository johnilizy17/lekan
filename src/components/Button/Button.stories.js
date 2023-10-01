import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "active",
    text: "Dashboard",
  },
};
