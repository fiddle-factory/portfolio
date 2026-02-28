import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "../src/components/ProjectCard";

const meta = {
  title: "UI/ProjectCard",
  component: ProjectCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      title: "Project Overview",
      subtitle: "Design & Development",
      cta: "View Case Study",
      accentColor: "#6366f1",
      bgColor: "#f0f0ff",
      link: "/projects/overview",
      external: false,
      images: ["https://placehold.co/400x200?text=Preview"],
    },
  },
  render: (args) => <ProjectCard {...args} data-config-id="project-card-default" />,
};

export const ExternalProject: Story = {
  args: {
    project: {
      title: "Open Source Library",
      subtitle: "Engineering",
      cta: "Visit Repository",
      accentColor: "#10b981",
      bgColor: "#ecfdf5",
      link: "https://github.com/example/repo",
      external: true,
      images: ["https://placehold.co/400x200?text=Repo+Preview"],
    },
  },
  render: (args) => <ProjectCard {...args} data-config-id="project-card-external-project" />,
};

export const MultipleImages: Story = {
  args: {
    project: {
      title: "Multi-Screen App",
      subtitle: "Mobile & Web",
      cta: "Explore Project",
      accentColor: "#f59e0b",
      bgColor: "#fffbeb",
      link: "/projects/multi-screen",
      external: false,
      images: [
        "https://placehold.co/300x200?text=Screen+1",
        "https://placehold.co/300x200?text=Screen+2",
        "https://placehold.co/300x200?text=Screen+3",
      ],
    },
  },
  render: (args) => <ProjectCard {...args} data-config-id="project-card-multiple-images" />,
};

export const NoImages: Story = {
  args: {
    project: {
      title: "Brand Identity",
      subtitle: "Branding",
      cta: "See the Work",
      accentColor: "#ec4899",
      bgColor: "#fdf2f8",
      link: "/projects/brand",
      external: false,
      images: [],
    },
  },
  render: (args) => <ProjectCard {...args} data-config-id="project-card-no-images" />,
};