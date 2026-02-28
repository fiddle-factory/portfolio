import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AboutHero from "../src/components/AboutHero";

const meta = {
  title: "UI/AboutHero",
  component: AboutHero,
} satisfies Meta<typeof AboutHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AboutHero data-config-id="about-hero-default" />,
};