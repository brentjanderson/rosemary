// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by core-layouts.js.
import { name as packageName } from "meteor/core-layouts";

// Write your tests here!
// Here is an example.
Tinytest.add('core-layouts - example', function (test) {
  test.equal(packageName, "core-layouts");
});
