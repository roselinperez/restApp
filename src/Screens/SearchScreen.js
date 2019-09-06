import React, {useState} from 'react';
import {View, Text, StyleSheet, ToastAndroid, ScrollView} from 'react-native';
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
        //Use empty tags to wrap multiple elements
        //into the screen without it going out of range
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/*<Text style = {styles.textStyle}>We have found: {results.length} results</Text>}*/}
            <ScrollView>
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
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginLeft: 15,
        fontStyle: "italic"
    }
});

export default SearchScreen;