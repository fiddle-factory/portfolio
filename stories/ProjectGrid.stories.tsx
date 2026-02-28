import type { Meta, StoryObj } from "@storybook/react";
import ProjectGrid from "../src/components/ProjectGrid";

const meta = {
  title: "UI/ProjectGrid",
  component: ProjectGrid,
  args: {
    children: "ProjectGrid",
  },
} satisfies Meta<typeof ProjectGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ProjectGrid {...args} data-config-id="project-grid-default" />,
};
