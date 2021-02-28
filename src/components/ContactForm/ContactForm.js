import React from "react"
import { navigate } from "gatsby-link"
import { Location } from "@reach/router"
import { RiArrowGoBackFill } from "react-icons/ri"
import { graphql, useStaticQuery } from "gatsby"
// import { useForm } from "react-hook-form";
import myContext from "../../../context"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = ({ handleContactFormToggle, props }) => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    // console.log(form)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  // const { register, handleSubmit, watch, errors } = useForm();

  const data = useStaticQuery(graphql`
    query MyContactFormQuery {
      pl: datoCmsContactForm(locale: { eq: "pl" }) {
        formHeader
        firstName
        surname
        subject
        phoneNumber
        emailAddress
        messageContent
        submitText
      }

      en: datoCmsContactForm(locale: { eq: "en" }) {
        formHeader
        firstName
        surname
        subject
        phoneNumber
        emailAddress
        messageContent
        submitText
      }
    }
  `)

  return (
    <div className="contact-form">
      <Location>
        {({ location }) => {
          let currentPath = location.pathname.toString()

          let currentLanguageEnglish = currentPath.includes("/en")

          if (currentLanguageEnglish) {
            let actionPath = "/thank-you"

            return (
              <>
                <div className="form-title-wrapper">
                  <h3>{data.en.formHeader} </h3>
                  <span
                    className="close-contact-form"
                    onClick={() => {
                      handleContactFormToggle()
                    }}
                    onKeyDown={() => {
                      handleContactFormToggle()
                    }}
                  >
                    <RiArrowGoBackFill />
                  </span>
                </div>

                <form
                  name="contact"
                  method="post"
                  action={actionPath}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </p>

                  <p>
                    <input
                      type="text"
                      name="subject"
                      placeholder={data.pl.subject}
                      onChange={handleChange}
                    />
                  </p>

                  <p>
                    <input
                      type="text"
                      name="name"
                      placeholder={data.pl.firstName}
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      name="surname"
                      placeholder={data.pl.surname}
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={data.pl.phoneNumber}
                      required
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <input
                      type="email"
                      name="email"
                      placeholder={data.en.emailAddress}
                      required
                      onChange={handleChange}
                    />
                  </p>
                  <p className={`text-area-paragraph`}>
                    <textarea
                      name="message"
                      placeholder={data.en.messageContent}
                      required
                      onChange={handleChange}
                    />
                  </p>
                  <p className={`button-wrapper`}>
                    <button type="submit">{data.en.submitText}</button>
                  </p>
                </form>
              </>
            )
          } else {
            let actionPath = "/dziekujemy"

            return (
              <>
                <div className="form-title-wrapper">
                  <h3>{data.pl.formHeader} </h3>
                  <span
                    className="close-contact-form"
                    onClick={() => {
                      handleContactFormToggle()
                    }}
                    onKeyDown={() => {
                      handleContactFormToggle()
                    }}
                  >
                    <RiArrowGoBackFill />
                  </span>
                </div>

                <form
                  name="contact"
                  method="post"
                  action={actionPath}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </p>

                  <p>
                    <input
                      type="text"
                      name="subject"
                      placeholder={data.pl.subject}
                      onChange={handleChange}
                    />
                  </p>

                  <p>
                    <input
                      type="text"
                      name="name"
                      placeholder={data.pl.firstName}
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      name="surname"
                      placeholder={data.pl.surname}
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={data.pl.phoneNumber}
                      required
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <input
                      type="email"
                      name="email"
                      placeholder={data.pl.emailAddress}
                      required
                      onChange={handleChange}
                    />
                  </p>
                  <p className={`text-area-paragraph`}>
                    <textarea
                      name="message"
                      placeholder={data.pl.messageContent}
                      required
                      onChange={handleChange}
                    />
                  </p>
                  <p className={`button-wrapper`}>
                    <myContext.Consumer>
                      {({ handleContactFormToggle }) => (
                        <button
                          type="submit"
                          onClick={() => handleContactFormToggle()}
                        >
                          {data.pl.submitText}
                        </button>
                      )}
                    </myContext.Consumer>
                  </p>
                </form>
              </>
            )
          }
        }}
      </Location>
    </div>
  )
}

export default ContactForm
