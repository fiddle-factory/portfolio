import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../src/components/Button";

const meta = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary", "outline"] },
    external: { control: "boolean" },
    href: { control: "text" },
    className: { control: "text" },
  },
  args: {
    variant: "primary",
    children: "Sign In",
    external: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args} data-config-id="button-default" />,
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Learn more",
  },
  render: (args) => <Button {...args} data-config-id="button-outline" />,
};

export const AsLink: Story = {
  args: {
    href: "https://example.com",
    children: "View all",
    variant: "primary",
  },
  render: (args) => <Button {...args} data-config-id="button-as-link" />,
};

export const AsExternalLink: Story = {
  args: {
    href: "https://example.com",
    children: "Documentation",
    variant: "outline",
    external: true,
  },
  render: (args) => <Button {...args} data-config-id="button-as-external-link" />,
};