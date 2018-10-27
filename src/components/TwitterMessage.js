import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};	    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        onChange={event => this.setState({message: event.target.value})}
         value={this.state.message}/>
        {this.props.maxChars - this.state.message.length} characters left
      </div>
    );
  }
}

export default TwitterMessage;
