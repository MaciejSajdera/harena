const sgMail = require("@sendgrid/mail")
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { email, subject } = payload

  sgMail.setApiKey(SENDGRID_API_KEY)

  const body = Object.keys(payload)
    .map(k => {
      return `${k}: ${payload[k]}`
    })
    .join("<br><br>")

  // Parse data sent in form hook (email, name etc)
  const { data } = JSON.parse(event.body)

  // make sure we have data and email
  if (!data || !data.email) {
    return callback(null, {
      statusCode: 400,
      body: "Mailing details not provided",
    })
  }

  const msg = {
    to: data.email,
    from: email,
    subject: subject ? subject : "Contact Form Submission",
    html: body,
  }

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Message sent",
    }
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    }
  }
}
