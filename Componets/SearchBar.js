import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

const SearchBar = ({value, onChangeText}) => {
    return(
        <TextInput style={styles.searchBar}
            placeholder="Search Products..."
            multiline={false}
            onChange={onChangeText}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#F0EEEE',
        color: 'black',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
});

export default SearchBar;