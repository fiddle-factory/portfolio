import * as React from "react";
import CaseStudySection from "../src/components/CaseStudySection";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/CaseStudySection",
  component: CaseStudySection,
} satisfies Meta<typeof CaseStudySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CaseStudySection
      data-config-id="case-study-section-default"
      heading="Project Overview"
      description="A comprehensive look at how we approached this project, the challenges we faced, and the solutions we implemented."
    >
      <div className="bg-gray-50 rounded-lg p-6">
        <p className="text-gray-700 leading-relaxed">
          Our team successfully delivered a modern web application that increased user engagement by 45% within the first quarter. The implementation focused on performance optimization and user experience improvements.
        </p>
      </div>
    </CaseStudySection>
  ),
};