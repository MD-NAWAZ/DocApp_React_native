import React, {useState}  from "react";
import {Text,StyleSheet,View} from "react-native";
import {SearchBar} from "react-native-elements";

const Search = () => {

    const [search,useSearch] = useState("");
    return (
        <View>
            <SearchBar
            placeholder="Search Here"
            onChangeText={useSearch}
            value={search}
            round={true}
            lightTheme={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Search;