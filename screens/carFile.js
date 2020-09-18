import React,{useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native';
import { color } from 'react-native-reanimated';


export default function CarFile({navigation}){ 
    const [carro,setCarro] = useState(
        {title: 'veiculo',about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',avatar:'http://www.dezeroacem.com.br/wordpress/wp-content/uploads/blogger/-a9oLs8A8yCI/TtTcco1L6_I/AAAAAAAAGDU/av6J6-ab3Ow/s1600/FordKa2012_01.jpg'}
    );   
    return(
        <View style={styles.container}>
            <Image source = {{uri: carro.avatar}} style={styles.itemImage}/>
            <Text style={styles.title}>{carro.title}</Text>
            <Text style={styles.about}>{carro.about}</Text>      
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:3,
        alignItems:'center',
        backgroundColor:'white'
        
    },
    itemImage:{
        width: 358,
        height: 200,
        flexDirection: 'column',       
        
    },
    title: {
        
        backgroundColor:'white',
        marginBottom: 10,       
        paddingHorizontal: 2,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor:'#ffd700',
        fontSize: 90,                   
        
    },
    about: {
        flex: 1,
        backgroundColor:'white',
        marginBottom: 10,       
        paddingHorizontal: 2,
        paddingVertical: 6,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderBottomWidth: 1,
        borderColor:'#ffd700',
    }    
});