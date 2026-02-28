import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CaseStudyHeader from "../src/components/CaseStudyHeader";

const meta = {
  title: "UI/CaseStudyHeader",
  component: CaseStudyHeader,
  args: {
    title: "Improving User Retention Through Personalized Onboarding",
    authors: "Alice Johnson, Bob Smith",
    publicationText: "Journal of UX Research",
    publicationUrl: "https://example.com/journal",
    buttonText: "Read the Paper",
    buttonUrl: "https://example.com/paper",
    publicationPrefix: "in",
  },
} satisfies Meta<typeof CaseStudyHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <CaseStudyHeader {...args} data-config-id="case-study-header-default" />,
};

export const WithoutPublicationLink: Story = {
  args: {
    publicationUrl: undefined,
  },
  render: (args) => <CaseStudyHeader {...args} data-config-id="case-study-header-without-publication-link" />,
};

export const CustomPrefix: Story = {
  args: {
    publicationPrefix: "published at",
    publicationText: "Annual Design Conference",
    publicationUrl: undefined,
  },
  render: (args) => <CaseStudyHeader {...args} data-config-id="case-study-header-custom-prefix" />,
};

export const LongTitle: Story = {
  args: {
    title: "A Comprehensive Study on the Effects of Color Theory in Modern Web Design Systems and Their Impact on User Engagement",
  },
  render: (args) => <CaseStudyHeader {...args} data-config-id="case-study-header-long-title" />,
};