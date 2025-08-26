import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
class Email extends Component {
  state = { email: "", submittedEmail: "" };
  handleChange = (e, { value }) => this.setState({ email: value });
  handleSubmit = () => {
    const { email } = this.state;
    this.setState({ submittedEmail: email });
  };
  render() {
    const { email, submittedEmail } = this.state;
    return (
      <div style={{ background: "#e0e0e0", padding: "10px" }}>
        <Form onSubmit={this.handleSubmit} style={{ display: "flex", alignItems: "center" }}>
          <strong style={{ marginRight: "15px", fontSize: "16px" }}>
            SIGN UP FOR OUR DAILY INSIDER
          </strong>
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
            style={{ flex: "1", marginRight: "10px" }}
          />
          <Button color="grey">Subscribe</Button>
        </Form>

        {submittedEmail && (
          <p style={{ marginTop: "10px" }}>
            Thanks for subscribing: <strong>{submittedEmail}</strong>
          </p>
        )}
      </div>
    );
  }
}
export default Email;
