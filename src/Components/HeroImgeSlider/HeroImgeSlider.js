import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeroImgeSlider.css";
// import section1Home from "./section1Home";

export default class HerpImgeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        arrayOfImages: [
        "https://i1.wp.com/www.mysweetimmo.com/uy7i_73zhnb/uploads/2016/10/villa-150-millions-coldwell-banker-1.jpg?resize=1268%2C640&ssl=1",
        "https://www.bookmyfarm.com/static/img/slider_image_2.0640533.png",
        ],
        currentImgLink:
        "https://www.bookmyfarm.com/static/img/slider_image_2.0640533.png",
        imgArrCounter: 0,
    };
    }

    componentDidMount() {
    setInterval(() => {
        if (this.state.imgArrCounter === this.state.arrayOfImages.length - 1) {
        this.setState({
            imgArrCounter: 0,
        });
        }
        if (
        this.state.currentImgLink ===
        this.state.arrayOfImages[this.state.imgArrCounter]
        ) {
        this.setState({
            currentImgLink:
            this.state.arrayOfImages[this.state.imgArrCounter + 1],
        imgArrCounter: this.state.imgArrCounter + 1,
        });
      } else {
        this.setState({
          currentImgLink: this.state.arrayOfImages[this.state.imgArrCounter],
        });
      }
    }, 7000);
  }
  handleToggleClick = (e) => {
    let buttonClass = e.target.className;
    if (buttonClass === "toggle1") {
      this.setState({
        currentImgLink: this.state.arrayOfImages[1],
      });
    } else {
      this.setState({
        currentImgLink: this.state.arrayOfImages[0],
      });
    }
  };

  render() {
    return (
      <div >
        <div
          className="heroImageContainer"
          style={{ backgroundImage: `url(${this.state.currentImgLink})` }}
        >
        <div className="buttonsArea">
        <div className="divmenuExitPage">
              <div className="freemenu"></div>
              
            </div>
            <p> Welcome </p>
            <button className="shopNowBtn">
              <Link to="/Services">Shop now</Link>{" "}
            </button>
            <div className="toggeleSlider">
              <button
                className="toggle1"
                onClick={this.handleToggleClick}
              ></button>
              <button
                className="toggle2"
                onClick={this.handleToggleClick}
                ></button>
                </div>
                </div>
                </div>
                
                <div className="ImgeandSectionone">
                <div className="sectionhome">
                
                <div className="section1home">
                <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h4>
                <p>
                Consequuntur, praesentium asperiores. Debitis, obcaecati delectus repudiandae, iusto incidunt magnam libero mollitia quos qui esse cum facere? Iure illo, ex id voluptate sapiente omnis est dignissimos nemo doloribus maiores expedita dolore aspernatur?
                </p>
                </div>
                <div className="section2home">
                <Link  to="/Services">
                <button><h3> LEARN MORE </h3></button>
                </Link>
                </div>
                </div>
                <div className="imge1home">
                <img src="https://my.bookmyfarm.com/static/img/priority-img.432461d.png" />
                </div>
                </div>

                </div>
               
    );
  }
}
