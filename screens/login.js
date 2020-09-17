import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import { color } from 'react-native-reanimated';

export default function Login({navigation}){
    const [text, setText] = useState({user: '', password:''});

    const changeHandler = (val) =>{
        text.user.setText(val);
    }  

    return(
       <View style={styles.container}>
           <TextInput
            style = {styles.input}
            placeholder='User'
            onChangeText={changeHandler}
            value={text.user}
           />
            <TextInput
            style = {styles.input}
            placeholder='Password'
            onChangeText={changeHandler}
            value={text.password}
           />
           <Button onPress={() => navigation.navigate('Home')} title ='Enter'/>
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor:'navy'
    },
    input: {
        backgroundColor:'white',
        marginBottom: 10,
        paddingHorizontal: 2,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
        
    },
    
    
});