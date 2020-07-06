import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class Welcome extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  componentDidMount() {
    this.handleOpen();
  }
  render() {
    return (
      <div>
        {/* <Button onClick={this.handleOpen}>Show Modal</Button> */}
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size="small"
        >
          <Header icon="browser" content="Welcome Message" />
          <Modal.Content>
            <h3>Welcome to the Petoo Website</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color="yellow" onClick={this.handleClose} inverted>
              <Icon name="hand point right" /> View Menu
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default Welcome;
