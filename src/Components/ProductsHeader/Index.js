import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PriceDialog from "../PriceDialog/Index";

class ProductsHeader extends Component {
  state = {
    openPriceDialog: false
  };

  render() {
    let { parsedQueryStr, totalItemsCount, updateQueryStr } = this.props;
    let minPrice = parsedQueryStr.minPrice || 0;
    let maxPrice = parsedQueryStr.maxPrice || 1000;
    let keyword = parsedQueryStr.term;
    let category = parsedQueryStr.category;

    let subtitle = (
      <div>
        <span style={{ fontSize: 12, color: "gray" }}>
          {"Кол-во: " +totalItemsCount +
            (keyword ? "for " : "")}
        </span>
        {keyword && (
          <span
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "gray"
            }}
          >
            {keyword}
          </span>
        )}
      </div>
    );

    return (
      <div>
        <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, fontSize: 24 }}>
          <div>{category ? category : "Популярные товары"}</div>
            {subtitle}
          </div>
        </div>

        <PriceDialog
          open={this.state.openPriceDialog}
          min={minPrice}
          max={maxPrice}
          onSave={(min, max) => {
            this.setState({ openPriceDialog: false });
            updateQueryStr({ minPrice: min, maxPrice: max, page: 1 });
          }}
          onClose={() =>
            this.setState({
              openPriceDialog: false
            })
          }
        />
      </div>
    );
  }
}

export default withRouter(ProductsHeader);
