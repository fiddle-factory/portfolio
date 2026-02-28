import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Footer from "../src/components/Footer";

const meta = {
  title: "UI/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Footer data-config-id="footer-default" />,
};