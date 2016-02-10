// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by admin-theme.js.
import { name as packageName } from "meteor/admin-theme";

// Write your tests here!
// Here is an example.
Tinytest.add('admin-theme - example', function (test) {
  test.equal(packageName, "admin-theme");
});
