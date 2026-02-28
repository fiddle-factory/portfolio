import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import InfoPills from "../src/components/InfoPills";

const meta = {
  title: "UI/InfoPills",
  component: InfoPills,
} satisfies Meta<typeof InfoPills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div data-config-id="info-pills-default">
      <InfoPills />
    </div>
  ),
};