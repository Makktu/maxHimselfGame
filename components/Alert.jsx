import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';

export default function Alert({ alertText }) {
  const theAlert = () => {
    Alert.alert(alertText);
  };
  return (
    <Alert>
      <Text>Alert</Text>
    </Alert>
  );
}

const styles = StyleSheet.create({});
