import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { connect } from "react-redux";

import { showCartDlg, setCheckedOutItems } from "../../Redux/Actions";
import CartRow from "./CartRow";

const mapStateToProps = state => {
  return { open: state.showCartDialog, items: state.cartItems };
};

class FormDialog extends Component {
  render() {
    let totalPrice = this.props.items.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={() => {
            this.props.dispatch(showCartDlg(false));
          }}
        >
          <AppBar position="static" style={{ backgroundColor: "#3863aa" }}>
            <Toolbar>
              <ShoppingCartIcon
                fontSize="large"
                style={{ color: "white", marginRight: 20 }}
              />
              Корзина
            </Toolbar>
          </AppBar>

          <div
            style={{
              maxHeight: 400,
              padding: 10,
              overflow: "auto"
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Наименование</TableCell>
                  <TableCell>Цена</TableCell>
                  <TableCell>Количество</TableCell>
                  <TableCell>Действие</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.items.map((item, index) => {
                  // return <CartRow item={item} key={item.id} {...this.props} />;
                })}
              </TableBody>
            </Table>
          </div>
          <div style={{ display: "flex", padding: 20, alignItems: "center" }}>
            <div
              style={{
                flex: 1
              }}
            >
              {" "}
                 Общая стоимость: {totalPrice} руб.
            </div>
            <Button
              variant="outlined"
              color="secondary"
              disabled={totalPrice === 0}
              onClick={() => {
                this.props.dispatch(showCartDlg(false));
                this.props.dispatch(setCheckedOutItems(this.props.items));
                this.props.history.push("/");
              }}
            >
              Оформить заказ
            </Button>
          </div>
        </Dialog>
      </div>
    );
  }
}
const Form = withRouter(connect(mapStateToProps)(FormDialog));
export default Form;
