import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Cabecalho from "./src/components/Cabecalho";

export default class App extends Component {

constructor(props){
  super(props);
  this.state = {
    curso: 0,
    periodo: 0,
    turno: 0,
    cursos: [
      {
        key:1,
        nome: 'Administracao',
      },
      {
        key:2,
        nome: 'Biologia',
      },
      {
        key:3,
        nome: 'Contabeis',
      }
    ],
    periodos: [
      {
        key:4,
        per: '5',
      },
      {
        key:5,
        per: '6',
      },
      {
        key:6,
        per: '7',
      }
    ],
    turnos: [
      {
        key:7,
        tur: 'Noturno',
      },
      {
        key:8,
        tur: 'Diurno',
      },
      {
        key:9,
        tur: 'Vespertino',
      }
    ]
  }
  this.pegaNome = this.pegaNome.bind(this);
}
  pegaNome(texto){
    this.setState({nome: texto});
  }

  render(){

    let cursosItem = this.state.cursos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    let periodosItem = this.state.periodos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.per}/>
    })

    let turnosItem = this.state.turnos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.tur}/>
    })

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho/>
      <Text style={styles.logo}>Selecione os parametros:</Text>
      <TextInput
      style={styles.input}
      placeholder='Digite seu nome'
      onChangeText={this.pegaNome}
      />
      <Picker
      selectedValue={this.state.curso}
      onValueChange={ (itemValue, itemIndex) => this.setState({curso: itemValue})}
      >
        {cursosItem}
      </Picker>

      <Picker
      selectedValue={this.state.periodo}
      onValueChange={ (itemValue, itemIndex) => this.setState({periodo: itemValue})}
      >
        {periodosItem}
      </Picker>

      <Picker
      selectedValue={this.state.turno}
      onValueChange={ (itemValue, itemIndex) => this.setState({turno: itemValue})}
      >
        {turnosItem}
      </Picker>

      <Text style={styles.logo}>Informacoes inseridas: </Text>
      <Text style={styles.cursos}>Nome: {this.state.nome}</Text>
      <Text style={styles.cursos}>Curso: {this.state.cursos[this.state.curso].nome}</Text>
      <Text style={styles.cursos}>Periodo: {this.state.periodos[this.state.periodo].per}º</Text>
      <Text style={styles.cursos}>Turno: {this.state.turnos[this.state.turno].tur}</Text>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  cursos: {
    marginTop: 15,
    fontSize: 25,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 20,
    padding: 10,
    margin: 10
  }
});
