import React from 'react';
import { View,TextInput, StyleSheet, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.backgroundStyle}>
            <Feather
                style = {styles.iconStyle}
                name = "search"
                />
            <TextInput
                style = {styles.inputStyle}
                placeholder = "Search"
                autoCapitalize ="none"
                autoCorrect={false}
                value={term}
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    backgroundStyle: {
        height:50,
        marginTop:15,
        borderRadius:5,
        backgroundColor:'#F0EEEE',
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        flex:1,
        fontSize: 18
    },
    iconStyle:{
        marginHorizontal: 15 ,
        fontSize:34,
        alignSelf:'center'

    }
});

export default SearchBar;