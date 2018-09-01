import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FailedImage from "./img/6.svg";
import "./css/Image.css";
const LOADING = "loading";
const LOADED = "loaded";
const ERROR = "error";
export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: LOADING };
  }
  handleImageLoaded() {
    this.setState({ imageStatus: LOADED });
  }

  handleImageErrored() {
    this.setState({ imageStatus: ERROR });
  }
  render() {
    const className = classNames("Image", `Image-${this.state.imageStatus}`);
    const fit = this.props.fit;
    return (
      <div
        className={className}
        style={{
          backgroundColor: this.props.color,
          width: this.props.ImageWidth ? this.props.ImageWidth : "100%",
          height: this.props.ImageHeight ? this.props.ImageHeight : "100%"
        }}
      >
        <img
          className="Image-actual"
          alt="No Image"
          src={this.props.image}
          onLoad={() => this.handleImageLoaded()}
          onError={() => this.handleImageErrored()}
        />
        <div
          className="Image-actual"
          style={{
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: fit,
            backgroundPosition: this.props.backgroundPosition
          }}
        />
        <div
          className="Image-failed"
          style={{
            backgroundSize: "contain",
            backgroundPosition: this.props.backgroundPosition
          }}
        />
      </div>
    );
  }
}
Image.propTypes = {
  image: PropTypes.string.isRequired,
  fit: PropTypes.string,
  color: PropTypes.string,
  backgroundPosition: PropTypes.string,
  ImageWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ImageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Image.defaultProps = {
  image: FailedImage,
  fit: "contain",
  color: "#fff",
  backgroundPosition: "center"
};
