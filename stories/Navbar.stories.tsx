import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../src/components/Navbar";

const meta = {
  title: "UI/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Navbar data-config-id="navbar-default" />,
};