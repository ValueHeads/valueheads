const ActiveCampaign = require("activecampaign");
const ac = new ActiveCampaign(
  "https://tweepi.api-us1.com",
  "dde08b38983c8944cd7791b5eb7593730536f1b5b8150be29e6fb5088a12dc3661a45fe5"
);

require("dotenv").config();

exports.handler = async function contactAdd(event, context, callback) {
  //   Only allow POST
  if (event.httpMethod !== "POST")
    doCallback(callback, "Method Not Allowed", 405);

  // read the email address from POST request
  let params = JSON.parse(event.body);
  let { email } = params;
  if (!email) doCallback(callback, "No email entered!", 405);

  // POST the ActiveCampaign request
  // Docs https://developers.activecampaign.com/reference#create-a-contact-new
  var contact_add = ac.api("contact/add", { email: email });
  await contact_add.then(
    function (result) {
      // successful request
      if (result.success === 1) {
        console.log("Success" + result.result_message);
        doCallback(callback, result.result_message);
      } else {
        console.error("Failed" + result.result_message);
        doCallback(callback, result.result_message, 406);
      }
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
