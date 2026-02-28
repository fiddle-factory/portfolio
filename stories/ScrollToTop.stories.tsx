import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ScrollToTop from "../src/components/ScrollToTop";

const meta = {
  title: "UI/ScrollToTop",
  component: ScrollToTop,
} satisfies Meta<typeof ScrollToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <ScrollToTop data-config-id="scroll-to-top-default" />
      <div style={{ padding: "1rem" }}>
        <p>ScrollToTop renders null and scrolls to top on route changes.</p>
      </div>
    </>
  ),
};