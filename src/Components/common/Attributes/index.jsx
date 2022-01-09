import React, { Component } from "react";
import Attribute from "./Attribute";

class Attributes extends Component {
    render() {
        return (
            <>
                {this.props.attributes.length
                    ? this.props.attributes.map((att, index) => (
                          <div key={this.props.attribute[index].id}>
                              <span>
                                  {this.props.display
                                      ? ""
                                      : this.props.attribute[index].name}
                              </span>
                              <Attribute
                                  attribute={
                                      this.props.swatch
                                          ? this.props.swatch.index === index
                                              ? this.props.swatch.swatch
                                              : ""
                                          : ""
                                  }
                                  attributes={att}
                                  length={{
                                      length: this.props.attributes.length,
                                      index: index,
                                  }}
                                  attributeSelected={
                                      this.props.attributeSelected
                                  }
                                  index={this.props.index}
                              />
                          </div>
                      ))
                    : ""}
            </>
        );
    }
}

export default Attributes;
