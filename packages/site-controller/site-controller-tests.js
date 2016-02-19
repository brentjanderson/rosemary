// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by site-controller.js.
import { name as packageName } from "meteor/site-controller";

// Write your tests here!
// Here is an example.
Tinytest.add('site-controller - example', function (test) {
  test.equal(packageName, "site-controller");
});
