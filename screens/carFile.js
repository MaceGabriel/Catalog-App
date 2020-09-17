import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native';

export default function CarFile( {navigation} ){
    return(
        <View>
            <Text>Foto do carro</Text>
            <Text>Informações sobre o carro</Text>
            <Button title='Comprar'/>
       </View>
    );
}