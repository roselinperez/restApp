import React, {useState} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === {'$' || '$$' || '$$$'}
        return results.filter(result => {
            return result.price === price;
        });  
    };
    
    return(
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found: {results.length} results</Text>
            <ResultsList
                results = {filterResultsByPrice('$')}
                title="Cost Effective"
            />
            <ResultsList
                results = {filterResultsByPrice('$$')}
                title="Bit Pricer"
            />
            <ResultsList
                results = {filterResultsByPrice('$$$')}
                title="Big Spender"
            />
        </View>
    );
}

const style = StyleSheet.create({

});

export default SearchScreen;