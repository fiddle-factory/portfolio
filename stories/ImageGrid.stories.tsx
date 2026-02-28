import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ImageGrid from "../src/components/ImageGrid";

const sampleImages = [
  "https://picsum.photos/seed/img1/400/300",
  "https://picsum.photos/seed/img2/400/300",
  "https://picsum.photos/seed/img3/400/300",
  "https://picsum.photos/seed/img4/400/300",
  "https://picsum.photos/seed/img5/400/300",
  "https://picsum.photos/seed/img6/400/300",
];

const meta = {
  title: "UI/ImageGrid",
  component: ImageGrid,
  argTypes: {
    columns: { control: "select", options: [1, 2, 3, 4] },
    caption: { control: "text" },
  },
  args: {
    images: sampleImages,
    columns: 3,
    caption: "",
  },
} satisfies Meta<typeof ImageGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ImageGrid {...args} data-config-id="image-grid-default" />,
};

export const OneColumn: Story = {
  args: {
    images: sampleImages.slice(0, 3),
    columns: 1,
  },
  render: (args) => <ImageGrid {...args} data-config-id="image-grid-one-column" />,
};

export const TwoColumns: Story = {
  args: {
    images: sampleImages.slice(0, 4),
    columns: 2,
  },
  render: (args) => <ImageGrid {...args} data-config-id="image-grid-two-columns" />,
};

export const FourColumns: Story = {
  args: {
    images: sampleImages,
    columns: 4,
  },
  render: (args) => <ImageGrid {...args} data-config-id="image-grid-four-columns" />,
};

export const WithCaption: Story = {
  args: {
    images: sampleImages,
    columns: 3,
    caption: "A collection of recent photos from the project.",
  },
  render: (args) => <ImageGrid {...args} data-config-id="image-grid-with-caption" />,
};

export const SingleImage: Story = {
  args: {
    images: [sampleImages[0]],
    columns: 1,
    caption: "A single featured image.",
  },
  render: (args) => <ImageGrid {...args} data-config-id="image-grid-single-image" />,
};