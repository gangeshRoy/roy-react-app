import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./css/Button.css";
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: this.props.backgroundColor,
      loading: this.props.loading,
      borderColor: this.props.borderColor,
      hovered: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.backgroundColor !== this.props.backgroundColor) {
      this.setState({ backgroundColor: nextProps.backgroundColor });
    }
  }
  hoverIn() {
    if (this.props.hoverBackgroundColor || this.props.hoverBorderColor) {
      this.setState({
        backgroundColor: this.props.hoverBackgroundColor
          ? this.props.hoverBackgroundColor
          : this.props.backgroundColor,
        borderColor: this.props.hoverBorderColor,
        hovered: true
      });
    }
  }
  hoverOut() {
    this.setState({
      backgroundColor: this.props.backgroundColor,
      borderColor: this.props.borderColor,
      hovered: false
    });
  }
  handleClick(event) {
    event.stopPropagation();

    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    const className = classNames("Button", {
      "Button-disabled": this.props.disabled,
      "Button-loadingText": this.props.loadingText,
      "Button-loading": this.props.loading,
      "Button-isHovered": this.state.hovered,
      "Button-iconVisible":
        !this.props.icon.hoveredElement ||
        this.props.hoverBackgroundColor ||
        this.props.hoverBorderColor
    });
    return (
      <div
        className={className}
        style={{
          height: this.props.height,
          width: this.props.width,
          borderRadius: this.props.borderRadius,
          backgroundColor: this.state.backgroundColor,
          border: `${this.props.borderWidth}px solid ${this.state.borderColor}`,
          margin: this.props.center ? "auto" : ""
        }}
        onMouseEnter={() => this.hoverIn()}
        onMouseLeave={() => this.hoverOut()}
        onClick={event => this.handleClick(event)}
      >
        {this.props.icon &&
          this.props.icon.element && (
          <div
            className="Button-iconWrapper"
            style={{
              height: this.props.icon.height,
              width: this.props.icon.width,
              marginRight: this.props.icon.offset
            }}
          >
            <div className="Button-default Button-iconHolder">
              {this.props.icon.element}
            </div>
            {this.props.icon.hoveredElement && (
              <div className="Button-hovered Button-iconHolder">
                {this.props.icon.hoveredElement}
              </div>
            )}
          </div>
        )}
        <span style={{ ...this.props.textStyle }}>{this.props.label}</span>
        {this.props.text && (
          <span style={{ ...this.props.style }} className="Button-text">
            {this.props.text}
          </span>
        )}
      </div>
    );
  }
}

Button.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.number,
  textFontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  borderRadius: PropTypes.string,
  loading: PropTypes.bool,
  text: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  textStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string
  }),
  icon: PropTypes.shape({
    element: PropTypes.element,
    hoveredElement: PropTypes.element,
    width: PropTypes.number,
    height: PropTypes.number,
    offset: PropTypes.number
  })
};

Button.defaultProps = {
  height: 40,
  backgroundColor: "#1cc7d0",
  borderRadius: "3px",
  disabled: false,
  loading: false,
  iconHeight: 40,
  iconWidth: 40,
  borderWidth: 2,
  textStyle: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "bolder"
  },
  textFontSize: 9,
  icon: {
    width: 40,
    height: 40,
    offset: 10
  }
};
