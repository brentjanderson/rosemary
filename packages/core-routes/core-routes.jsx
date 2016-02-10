// Write your package code here!
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { MainLayout } from 'meteor/core-layouts';

FlowRouter.notFound = {
    action: function() {
      mount(MainLayout, {
        content: (<NotFound />)
      });
    }
};

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      // content: (<OneColumnLayout mainContent=<IndexView />)
    });
  }
});

// Variables exported by this module can be imported by other packages and
// applications. See core-routes-tests.js for an example of importing.
export const name = 'core-routes';
