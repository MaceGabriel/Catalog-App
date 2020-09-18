import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';


export default function Login({navigation}){
    const [text, setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    }  

    return(
        <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss();
            console.log('dismissed keyboard');
          }}>

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
       </TouchableWithoutFeedback>
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
        borderBottomColor: '#ddd',            
        
    },
    
    
});