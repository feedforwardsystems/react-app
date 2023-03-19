const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.debug("debug message");
  core.warning("warning message");
  core.error("error message");
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);
  core.setSecret(name);
  console.log(`Hello ${name}`);
  const time = new Date();
  core.setOutput("time", time.toTimeString());
  core.startGroup("github github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();
  core.exportVariable("HI", "--hi--");
} catch (error) {
  core.setFailed(error.message);
}
