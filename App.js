import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Contador() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text style={styles.text}>Login</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.subcontainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    fontFamily: 'Roboto',
    color: 'tomato',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'left',
  },
  btn: {
    width: 250,
    backgroundColor: 'tomato',
    padding: 5,
    borderRadius: 4,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: 250,
    height: 30,
    fontSize: 12,
    color: 'black',
    marginBottom: 20,
    padding: 10,
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1,
  },
  subcontainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});
