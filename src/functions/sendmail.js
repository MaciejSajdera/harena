const sgMail = require("@sendgrid/mail")
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { email, subject } = payload

  const { mystate } = JSON.parse(event.body)

  sgMail.setApiKey(SENDGRID_API_KEY)

  const body = Object.keys(payload)
    .map(k => {
      return `${k}: ${payload[k]}`
    })
    .join("<br><br>")

  console.log(`payload: ${payload}`)

  console.log(`email: ${payload.email}`)

  console.log(`mystate: ${mystate}`)

  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: email,
    subject: subject ? subject : "Contact Form Submission",
    html: `Dziękujemy za zainteresowanie naszymi produktami, odpowiemy na Twoje zgłoszenie najszybciej jak to możliwe.`,
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
