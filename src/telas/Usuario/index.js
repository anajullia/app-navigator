import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Usuarios({route}) {
  return (
    <View style={styles.container}>
      <Text>Bem Vindo {route.params?.nome}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
