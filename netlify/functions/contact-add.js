require("dotenv").config();

// this is ActiveCampaign API v1, NOT v3.
const ActiveCampaign = require("activecampaign");
const ac = new ActiveCampaign(
  process.env.ACTIVECAMPAIGN_URL,
  process.env.ACTIVECAMPAIGN_KEY
);

exports.handler = async function contactAdd(event, context, callback) {
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

      // check if failed, log it
      if (result.success !== 1) console.error("Failed", result);

      // treat duplicate as success
      let isSuccess = result.result_message.includes(
        "does not allow duplicates"
      )
        ? true
        : false;

      // do the callback
      doCallback(callback, result.result_message, isSuccess || result.success);
    },
    function (result) {
      // request error
      console.log("Error Caught", result);
      doCallback(callback, result.result_message, 406);
    }
  );
};

// simple function to simplify callbacks
function doCallback(callback, msg, isSuccess = true, statusCode = 200) {
  callback(null, {
    statusCode: statusCode,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      success: isSuccess,
      msg: msg,
    }),
  });
}
