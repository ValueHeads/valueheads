require("dotenv").config();

// this is ActiveCampaign API v1, NOT v3.
const ActiveCampaign = require("activecampaign");
const ac = new ActiveCampaign(
  process.env.ACTIVECAMPAIGN_URL,
  process.env.ACTIVECAMPAIGN_KEY
);

exports.handler = async function contactAdd(event, context, callback) {
  console.log("---> IP is", event.headers["x-nf-client-connection-ip"]);

  //   Only allow POST
  if (event.httpMethod !== "POST")
    doCallback(callback, "Method Not Allowed", 405);

  // read the email address from POST request
  let params = JSON.parse(event.body);
  let { email } = params;
  if (!email) doCallback(callback, "No email entered!", 405);

  // POST the ActiveCampaign request
  // Docs https://www.activecampaign.com/api/example.php?call=contact_add
  var contact_add = ac.api("contact/add", {
    email: email,
    tags: "prelaunch",
    "p[1]": 1,
    "status[1]": 1,
    "instantresponders[1]": 1,
    ipv4: event.headers["x-nf-client-connection-ip"],
  });
  await contact_add.then(
    function (result) {
      // successful request
      if (result.success !== 1) {
        console.error("Failed", result);
      }

      console.log("Success", result);
      doCallback(callback, result.result_message);
    },
    function (result) {
      // request error
      console.log("Error Caught", result);
      doCallback(callback, result.result_message, 406);
    }
  );
};

// simple function to simplift callbacks
function doCallback(callback, msg, statusCode = 200) {
  callback(null, {
    statusCode: statusCode,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      success: statusCode === 200,
      msg: msg,
    }),
  });
}
