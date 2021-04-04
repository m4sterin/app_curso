import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Cabecalho from "./src/components/Cabecalho";
import ButtonDefault from "./src/components/ButtonDefault";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curso: 0,
      periodo: 0,
      turno: 0,
      sexo: 0,
      valor: 5000,
      status: false,
      cursos: [
        {
          key: 1,
          nome: "Administracao",
        },
        {
          key: 2,
          nome: "Biologia",
        },
        {
          key: 3,
          nome: "Contabeis",
        },
      ],
      periodos: [
        {
          key: 4,
          per: "5",
        },
        {
          key: 5,
          per: "6",
        },
        {
          key: 6,
          per: "7",
        },
      ],
      turnos: [
        {
          key: 7,
          tur: "Noturno",
        },
        {
          key: 8,
          tur: "Diurno",
        },
        {
          key: 9,
          tur: "Vespertino",
        },
      ],
      sexs: [
        {
          key: 10,
          sex: "Masculino",
        },
        {
          key: 11,
          sex: "Feminino",
        },
        {
          key: 12,
          sex: "Maquina Agricola",
        },
      ],
    };
    this.pegaNome = this.pegaNome.bind(this);
    this.pegaIdade = this.pegaIdade.bind(this);
    this.enviar = this.enviar.bind(this);
  }
  pegaNome(texto) {
    this.setState({ nom: texto });
  }

  pegaIdade(texto) {
    this.setState({ idade: texto });
  }

  enviar(){
    if(this.state.idade === ''|| this.state.nom === ''){
      alert('Digite o nome/idade');
      return;
    }
    alert({
      Nome: this.state.nom,
      Curso: this.state.curso,
      Periodo: this.state.periodo,
      Idade: this.state.idade,
      Sexo: this.state.sexo,
      Renda: this.state.valor,
      Bolsa: this.state.status
    })
    }

  render() {
    let cursosItem = this.state.cursos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });

    let periodosItem = this.state.periodos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.per} />;
    });

    let turnosItem = this.state.turnos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.tur} />;
    });

    let sexoItem = this.state.sexs.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sex} />;
    });

    return (
      <SafeAreaView style={styles.container}>
        <Cabecalho />
        <Text style={styles.logo}>Selecione os parametros:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={this.pegaNome}
        />
        <Picker
          selectedValue={this.state.curso}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ curso: itemValue })
          }
        >
          {cursosItem}
        </Picker>

        <Picker
          selectedValue={this.state.periodo}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ periodo: itemValue })
          }
        >
          {periodosItem}
        </Picker>

        <Picker
          selectedValue={this.state.turno}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ turno: itemValue })
          }
        >
          {turnosItem}
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          onChangeText={this.pegaIdade}
        />

        <Picker
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sexo: itemValue })
          }
        >
          {sexoItem}
        </Picker>

        <Text style={styles.cursos}>Renda</Text>
        <Slider
          minimumValue={0}
          maximumValue={10000}
          onValueChange={(valorSelecionado) =>
            this.setState({ valor: valorSelecionado })
          }
          value={this.state.valor}
          minimumTrackTintColor="red"
          maximumTrackTintColor="blue"
        />
        <Text style={styles.cursos}>Renda: {this.state.valor.toFixed(2)}</Text>

        <Text style={styles.cursos}> Ja Ganhou bolsa: </Text>
        <Switch
          style={styles.cursos}
          value={this.state.status}
          onValueChange={(valorSwitch) =>
            this.setState({ status: valorSwitch })
          }
          thumbColor="blue"
        />
        <Text style={styles.logo}>{this.state.status ? "Sim" : "Nao"}</Text>

        <Text style={styles.logo}>Informacoes inseridas: </Text>
        <Text style={styles.cursos}>Nome: {this.state.nom}</Text>
        <Text style={styles.cursos}>
          Curso: {this.state.cursos[this.state.curso].nome}
        </Text>
        <Text style={styles.cursos}>
          Periodo: {this.state.periodos[this.state.periodo].per}º
        </Text>
        <Text style={styles.cursos}>
          Turno: {this.state.turnos[this.state.turno].tur}
        </Text>
        <Text style={styles.cursos}>Idade: {this.state.idade}</Text>
        <Text style={styles.cursos}>
          Sexo: {this.state.sexs[this.state.sexo].sex}
        </Text>
        <Text style={styles.cursos}>Renda: {this.state.valor.toFixed(2)}</Text>

        <Text style={styles.cursos}>
          Ja ganhou bolsa: {this.state.status ? "Sim" : "Nao"}
        </Text>

        <ButtonDefault
          fonte={30}
          corDaBorda="#2195"
          cor="#FFF"
          corFundo="#2196F3"
          style={styles.cursos}
          onPress={this.enviar}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  cursos: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
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
