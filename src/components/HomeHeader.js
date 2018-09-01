import React from "react";
import "./css/HomeHeader.css";

import PropTypes from "prop-types";
import Button from "./Button";
import logoBlack from "./img/logo.png";
import Image from "./Image";

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: false
    };
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.onScroll);
  }
  onScroll = () => {
    if (window.scrollY > 60) {
      this.setState({ isTop: true });
    } else {
      this.setState({ isTop: false });
    }
  };
  componentWillUnmount() {
    document.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <div
        className={this.state.isTop ? "HomeHeaderSolid" : "HomeHeader"}
        ref={ref => (this.ref = ref)}
      >
        <div className="HomeHeader-Container">
          <div className="HomeHeader-leftChild">
            <div className="HomeHeader-leftChildContainer">
              <div
                className="HomeHeader-logoHolder"
                
              >
                {!this.state.isTop ? (
                  <Image
                    image={logoBlack}
                    backgroundPosition={"left"}
                    
                    // {...this.props.history.pathname}
                    color="initial"
                  />
                ) : (
                  <Image
                    image={logoBlack}
                   
                    backgroundPosition={"left"}
                    {...this.props}
                    color="initial"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="HomeHeader-rightChild">
            <div
              className="HomeHeader-rightContainerTextholder"
              style={{ ...this.props.textStyle }}
            >
              <div
                className="HomeHeader-headingTextHolder"
               
              >
                <div
                               className= "HomeHeader-headingText"

                //   className={
                //     this.props.history &&
                //     this.props.history.location &&
                //     this.props.history.location.pathname === "/home"
                //       ? "HomeHeader-headingTextActive"
                //       : "HomeHeader-headingText"
                //   }
                >
                  HOME
                </div>
              </div>
              <div
                className="HomeHeader-headingTextHolder"
            
              >
                <div
               className= "HomeHeader-headingText"
                //   className={
                //     this.props.history &&
                //     this.props.history.location &&
                //     this.props.history.location.pathname === FEATURED_JOBS_LIST
                //       ? "HomeHeader-headingTextActive"
                //       : "HomeHeader-headingText"
                //   }
                >
                  JOBS
                </div>
              </div>
              <div
                className="HomeHeader-headingTextHolder"
                
              >
                <div
                //   className={
                //     this.props.history &&
                //     this.props.history.location &&
                //     this.props.history.location.pathname === "/employers"
                //       ? "HomeHeader-headingTextActive"
                //       : "HomeHeader-headingText"
                //   }
                >
                  EMPLOYERS
                </div>
              </div>
              <div
                className="HomeHeader-headingTextHolder"
            
              >
                <div
                //   className={
                //     this.props.history &&
                //     this.props.history.location &&
                //     this.props.history.location.pathname === "/jobseekers"
                //       ? "HomeHeader-headingTextActive"
                //       : "HomeHeader-headingText"
                //   }
                >
                  JOB SEEKERS
                </div>
              </div>
              <div
               
              >
                <div
                               className= "HomeHeader-headingText"

                //   className={
                //     this.props.history &&
                //     this.props.history.location &&
                //     this.props.history.location.pathname === MEET_OUR_TEAM
                //       ? "HomeHeader-headingTextActive"
                //       : "HomeHeader-headingText"
                //   }
                >
                  TEAM
                </div>
              </div>
              <div
                className="HomeHeader-headingTextHolder"
                
              >
                <div className="HomeHeader-headingText ">SIGN IN</div>
              </div>
              <div
                className="HomeHeader-headingTextHolder"
               
              >
                <div className="HomeHeader-signUpButton">
                  {/* <Button
                    label={
                      window.location.pathname === RECRUITER_HOME_PAGE
                        ? "SIGN UP AS EMPLOYER"
                        : "SUBMIT YOUR CV"
                    }
                    width={163}
                    height={35}
                    borderRadius={"3px"}
                    textStyle={{ fontSize: 12, fontFamily: "bolder" }}
                    backgroundColor={
                      window.location.pathname === RECRUITER_HOME_PAGE
                        ? "#1CC7D0"
                        : "#FF6C5F"
                    }
                   
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
HomeHeader.propTypes = {
  onClick: PropTypes.func,
  textStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string
  })
};
HomeHeader.defaultProps = {
  textStyle: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "bolder"
  }
};
