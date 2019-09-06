import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return(
        <View>
            <SearchBar
                term={term}
                onTermChange={ (newTerm) => setTerm(newTerm)}
            />
            <Text>Search screen: {term}</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default SearchScreen;