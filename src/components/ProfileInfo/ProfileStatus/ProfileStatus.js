import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  onUserStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  };

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <p onDoubleClick={this.activateEditMode}>
              {this.state.status || "-----"}
            </p>
          </div>
        ) : (
          <div>
            <input
              onBlur={this.deactivateEditMode}
              autoFocus
              onChange={this.onUserStatusChange}
              defaultValue={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
