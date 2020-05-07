import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productParent">
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => (this.flippy = r)}
        >
          <FrontSide>
            <div className="cardParent">
              <div className="cardParent" onClick={this.handleClick}>
                <p>Sample card text-FRONT</p>
              </div>
            </div>
          </FrontSide>
          <BackSide>
            <div className="cardParent">
              <div className="cardParent" onClick={this.handleClick}>
                <p>Sample card text-BACK</p>
              </div>
            </div>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default Product;
