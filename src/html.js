import React from "react"
import PropTypes from "prop-types"
import LoaderSVG from "./images/RoundTable.svg"

import LoaderLogo from "./images/harena-logo-dark.png"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: "center",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            opacity: 1,
            transition: "0.4s ease-in",
          }}
        >
          <img
            src={LoaderSVG}
            alt="loading spinner"
            style={{ width: 175, height: 175 }}
          />
          <img
            src={LoaderLogo}
            alt="loading logo"
            style={{
              position: "absolute",
              zIndex: 999,
            }}
          />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
