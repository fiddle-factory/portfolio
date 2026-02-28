import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../src/components/Layout";

const meta = {
  title: "UI/Layout",
  component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Layout {...args} data-config-id="layout-default">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="mt-4">The quick brown fox jumps over the lazy dog.</p>
      </div>
    </Layout>
  ),
};

export const WithRichContent: Story = {
  render: (args) => (
    <Layout {...args} data-config-id="layout-with-rich-content">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
            <p className="text-gray-600">A summary of your recent activity.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p className="text-gray-600">Configure your preferences.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Account</h2>
            <p className="text-gray-600">Manage your account settings here.</p>
          </div>
        </div>
      </div>
    </Layout>
  ),
};

export const WithMinimalContent: Story = {
  render: (args) => (
    <Layout {...args} data-config-id="layout-with-minimal-content">
      <div className="container mx-auto px-4 py-8">
        <p>The quick brown fox jumps over the lazy dog.</p>
      </div>
    </Layout>
  ),
};