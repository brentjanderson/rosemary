// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by core-widgets.js.
import { name as packageName } from "meteor/core-widgets";

// Write your tests here!
// Here is an example.
Tinytest.add('core-widgets - example', function (test) {
  test.equal(packageName, "core-widgets");
});
