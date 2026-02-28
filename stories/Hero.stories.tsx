import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Hero from "../src/components/Hero";

const meta = {
  title: "UI/Hero",
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Hero data-config-id="hero-default" />,
};