// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by auth-controller.js.
import { name as packageName } from "meteor/auth-controller";

// Write your tests here!
// Here is an example.
Tinytest.add('auth-controller - example', function (test) {
  test.equal(packageName, "auth-controller");
});
