// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by core-routes.js.
import { name as packageName } from "meteor/core-routes";

// Write your tests here!
// Here is an example.
Tinytest.add('core-routes - example', function (test) {
  test.equal(packageName, "core-routes");
});
