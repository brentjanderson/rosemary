// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by controller-base.js.
import { name as packageName } from "meteor/controller-base";

// Write your tests here!
// Here is an example.
Tinytest.add('controller-base - example', function (test) {
  test.equal(packageName, "controller-base");
});
