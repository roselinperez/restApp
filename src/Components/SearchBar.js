import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange}) => {
    console.log(term)
    return(
        <View style={style.backgroundView}>
            <Feather
                name="search"
                style={style.iconStyle}
            />
            <TextInput
                style={style.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={ (newTerm) => onTermChange(newTerm)}
            />
        </View>
    );
}

const style = StyleSheet.create({
    backgroundView:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 20
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }

});

export default SearchBar;