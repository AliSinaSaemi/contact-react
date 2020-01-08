import React from "react";
class ActiveLink extends React.Component {

  componentDidMount() {
    document.title = this.props.title;
  }
  render() {
    const PageComponent = this.props.component

    return (
      <PageComponent />
    )
  }
}

export default ActiveLink;