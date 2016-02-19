// Write your package code here!
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import {CoreLayout} from 'meteor/core-layouts';


FlowRouter.notFound = {
  action() {
    mount(CoreLayout, {content: (<NotFound/>)});
  }
};

const AppRouter = FlowRouter.group({prefix: '/app', name: 'app'});

// Variables exported by this module can be imported by other packages and
// applications. See core-routes-tests.js for an example of importing.
export const name = 'core-routes';
export default {
  AppRouter
};
