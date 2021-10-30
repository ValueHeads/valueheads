require("dotenv").config();

const MailerLite = require("mailerlite-api-v2-node").default;
const mailerLite = MailerLite(process.env.MAILERLITE_KEY);

exports.handler = async function contactAdd(event, context, callback) {
  //   Only allow POST
  if (event.httpMethod !== "POST")
    doCallback(callback, "Method Not Allowed", 405);

  // read the email address from POST request
  let params = JSON.parse(event.body);
  let { email } = params;
  if (!email) doCallback(callback, "No email entered!", 405);

  // Docs
  // https://developers.mailerlite.com/reference/create-a-subscriber
  // https://developers.mailerlite.com/reference/add-single-subscriber
  // and https://github.com/zygos/mailerlite-api-v2-node
  var response = await mailerLite
    .addSubscriberToGroup(process.env.MAILERLITE_GROUP_ID_PRELAUNCH, {
      email: email,
      type: "active",
      signup_ip: event.headers["x-nf-client-connection-ip"],
      // autoresponders: true,
      // resubscribe: true,
      // fields: { company: "ValueHeads.org" },
    })
    .then(
      function (result) {
        // successful request
        console.log("Success", result);
        doCallback(callback, result.result_message);
      },
      function ({ response }) {
        // request error
        console.log("Error Caught", response.data);
        var msg = response.data.error ? response.data.error.message : null;
        doCallback(callback, msg, false);
      }
    );
};

// simple function to simplift callbacks
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
