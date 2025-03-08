import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("Did constructopr Class");
  }
  componentDidMount() {
    console.log("Mounted Class");
  }
  componentDidUpdate() {
    //mount only happens once in each parent update the render then the update happens not mounted
    console.log("Updated Class");
  }
  componentWillUnmount() {
    console.log("will unmount Class");
  }

  render() {
    console.log("component in render Class");
    return (
      <>
        <h1>{this.state.count}:counted</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add me in UserClass{" "}
        </button>
      </>
    );
  }
}
export default UserClass;
