import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList,TouchableOpacity, Image} from 'react-native';
import list from '../data/list';

let {width} = Dimensions.get('window');

let numberGrid = 2;
let itemWidth = width/ numberGrid;


export default function Home({navigation}){
    const[carros,setCarros] = useState(list);

    return(
        <View>
            <FlatList 
                data={carros}                
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() => navigation.navigate('CarFile', item)}>
                        <Image source = {{uri: item.avatar}} style={styles.itemImage} />
                    </TouchableOpacity>
                
                    )}
               
            />
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    itemImage:{
        width: itemWidth,
        height: itemWidth,
        
    },
    empty:{
        alignContent: 'center',

    }
});