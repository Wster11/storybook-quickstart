import React from "react";
import { Provider } from "react-redux";
import { PureInboxScreen } from "./InboxScreen";
import store from "../lib/mockRedux";

export default {
  component: PureInboxScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "InboxScreen"
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something"
};
