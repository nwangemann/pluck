import React from "react";
import "./App.css";
import Video from "./Component/Video";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const video = require('./Component/testVid.mp4')


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
      value: null,
    };
  }

  onClickHandler = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("/api/video", data)
      .then((res) => {
        toast.success("upload success");
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("upload fail");
        console.log(err);
      });
  };
  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
    localStorage.setItem("videoFile", event.target.files[0]);
    this.setState({
      value: event.target.files[0],
    });
    console.log("picked up file", event.target.files[0]);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form method="post" action="#" id="#">
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input
                    type="file"
                    className="form-control"
                    multiple=""
                    onChange={this.onChangeHandler}
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <form method="post" action="#" id="#">
                <div className="form-group files color">
                  <label>Upload Your File </label>
                  <input
                    type="file"
                    className="form-control"
                    multiple=""
                    onChange={this.onChangeHandler}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="form-group">
          <Progress max="100" color="success" value={this.state.loaded}>
            {Math.round(this.state.loaded, 2)}%
          </Progress>
        </div>
        <div className="form-group">
          <ToastContainer />
        </div>
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={this.onClickHandler}
        >
          Upload
        </button>
        {/* <video width="320" height="240" controls>
          <source src={require(`${this.state.selectedFile.files[0]}`)} type="video/mp4" />
        </video> */}
        <Video path={video} />
        <video
          id="videoclip"
          controls="controls"
          poster="./pic.jpg"
          title="Video title"
        >
          <source id="mp4video" src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default App;
