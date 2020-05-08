import React from "react";
import "./App.css";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import QierPlayer from "qier-player";
import "react-toastify/dist/ReactToastify.css";
const videooo = require("./testVid.mp4");
const logo = require("./Component/music.svg.png");
const fs = require("fs");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
      receivedFile: null,
      firedVid: null,
      videoWeb: null,
    };
  }

  // componentDidMount(){
  //   axios.get('/api/watch').then(res => {
  //     console.log('res', res)
  //     this.setState({
  //       receivedFile: res
  //     })
  //   })
  // }

  onClickHandler = (event) => {
    event.preventDefault();
    const data = new FormData();
    let body = {
      file: this.state.selectedFile
    }
    console.log('click handler', body)
    data.append("file", this.state.selectedFile);
    axios
      .post("/api/video", body)
      .then((res) => {
        toast.success("upload success");
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
    let body = {
      file: event.target.files[0]
    }
    axios
      .post("/api/video", body)
      .then((res) => {
        toast.success("upload success");
      })
      .catch((err) => {
        toast.error("upload fail");
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <div className="mainHeader">
          <img src={logo} className="logo" alt="logo" />
          <h1>... pluck</h1>
        </div>
        <div className="container">
          <div className="col-md-6">
            <div className="groupings">
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={this.onClickHandler}
              >
                Upload
              </button>
              <label>Upload Your File </label>
              <Progress max="100" color="success" value={this.state.loaded}>
                {Math.round(this.state.loaded, 2)}%
              </Progress>
            </div>
          </div>
        </div>
        <div className="fileHousing">
          <div className="fileParent">
            <input
              type="file"
              className="myInput"
              multiple=""
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="toastyParent">
          <ToastContainer />
        </div>
        {/* <Request /> */}
        <div className="videoParent">
          <div className="videoHouse">
            <QierPlayer srcOrigin={videooo} />
          </div>
        </div>
        {/* <Video path={video} />
        <video
          id="videoclip"
          controls="controls"
          poster="./pic.jpg"
          title="Video title"
        >
          <source id="mp4video" src={video} type="video/mp4" /> 
        </video> */}
        {/*
        <video id="videoPlayer" controls>
          <source src={videooo} type="video/mp4" />
        </video> */}
      </div>
    );
  }
}

export default App;
