import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: "yo",
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <p onDoubleClick={this.activateEditMode}>{this.props.status}</p>
          </div>
        ) : (
          <div>
            <input
              onBlur={this.deactivateEditMode}
              autoFocus
              defaultValue={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
