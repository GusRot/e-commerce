import React, { Component } from "react";
import Attribute from "./Attribute";

class Attributes extends Component {
    render() {
        const {
            attributes,
            attribute,
            display,
            swatch,
            attributeSelected,
            index,
            hidden,
        } = this.props;
        return (
            <>
                {attributes.length
                    ? attributes.map((att, i) => (
                          <div key={attribute[i].id}>
                              <span>
                                  {display ? "" : `${attribute[i].name}:`}
                              </span>
                              <Attribute
                                  hidden={hidden}
                                  attribute={
                                      swatch
                                          ? swatch.index === i
                                              ? swatch.swatch
                                              : ""
                                          : ""
                                  }
                                  attributes={att}
                                  length={{
                                      length: attributes.length,
                                      index: i,
                                  }}
                                  attributeSelected={attributeSelected}
                                  index={index}
                              />
                          </div>
                      ))
                    : ""}
            </>
        );
    }
}

export default Attributes;
