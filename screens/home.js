import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, FlatList,TouchableOpacity, Image} from 'react-native';
import list from '../data/list';

export default function Home({navigation}){
    const[carros,setCarros] = useState(list);
   
    return( 
        <View style={styles.container}>      
            <FlatList 
                data={carros}                
                renderItem={({item}) =>{
                    return(
                        <View style={styles.imageContainer}>
                            <TouchableOpacity onPress={item => navigation.navigate('CarFile')}>
                                        
                                <Image source = {{uri: item.avatar}} style={styles.itemImage} />                                
                                    
                            </TouchableOpacity>
                        </View>
                    )}
                }                   
               
            />
        </View>
        
    );
    
}

const styles = StyleSheet.create({
    container: {
        
        alignItems:'center',
        backgroundColor:'navy'
        
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 3,
    },
    itemImage:{
        width: 350,
        height: 200,
        flexDirection: 'column',       
        
    },    
});