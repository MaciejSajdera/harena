import React from "react"

// const defaultContextValue = {
//   data: {
//     // set your initial data shape here
//     navToggled: false,
//   },
//   set: () => {},
// }

const myContext = React.createContext({
  navToggled: false,
})

class ContextProviderComponent extends React.Component {
  constructor(props) {
    super(props)

    this.setData = this.setData.bind(this)
    this.state = {
      set: this.setData,
      setLocale: this.setLocale,
      langChosen: "",
      langToggle: this.langToggle,
      handleNavToggle: this.handleNavToggle,
      navToggled: false,
      handleContactFormToggle: this.handleContactFormToggle,
      nameOfItemOrdered: "",
      isFormOpen: false,
    }
  }

  setData(newData) {
    this.setState({
      menuData: {
        newData,
      },
    })
  }

  setLocale(myLocale) {
    this.setState(state => ({
      data: {
        myLocale,
      },
    }))
  }

  handleNavToggle = () => {
    this.setState(prevState => ({ navToggled: !prevState.navToggled }))
  }

  langToggle = () => {
    this.setState(prevState => ({ langChosen: !prevState.langChosen }))
  }

  handleContactFormToggle = itemsName => {
    this.setState(prevState => ({ isFormOpen: !prevState.isFormOpen }))
    this.setState(prevState => ({ nameOfItemOrdered: itemsName }))

    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(console.log)
  }

  render() {
    return (
      <myContext.Provider value={this.state}>
        {" "}
        {this.props.children}
      </myContext.Provider>
    )
  }
}

export { myContext as default, ContextProviderComponent }
