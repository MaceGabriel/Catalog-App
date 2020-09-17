import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native';

export default function CarFile( {navigation} ){
    return(
        <View>
            <Image source = {{uri: navigation.getParam('avatar')}} style={styles.itemImage} />
            <Text>{ navigation.getParam('first_name')}</Text>
            <Text>{ navigation.getParam('last_name')}</Text>
        </View>
    );
}