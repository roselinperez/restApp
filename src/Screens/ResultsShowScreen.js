import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const ResultsScreenShow = ({navigation}) => {
    const id = navigation.getParam('id');
    console.log(id);
    return (
        <View>
            <Text>Results Show</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsScreenShow;