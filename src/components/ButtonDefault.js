import React, { Component } from "react";
import { Button, View } from "react-native";

class ButtonDefault extends Component {
  render() {
    return (
      <View>
        <Button
          style={{
            fontSize: this.props.fonte,
            borderColor: this.props.corDaBorda,
            color: this.props.cor,
            backgroundColor: this.props.corFundo,
          }}
          title='Salvar'
        />
      </View>
    );
  }
}
export default ButtonDefault;