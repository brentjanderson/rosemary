import {FlowRouter} from 'meteor/core-routes';
import {CoreLayout} from 'meteor/core-layouts';
import {OneColumnLayout} from 'meteor/core-layouts';
import {mount} from 'react-mounter';

FlowRouter.route('/', {
  action() {
    mount(CoreLayout, {
      content: <OneColumnLayout mainContent=<IndexView /> />
    });
  }
});
