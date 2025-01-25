import React,{useState} from "react";
import {View, Text, Image, TouchableOpacity, Modal} from "react-native-web";

export default function Filmes({ data }){

    const [visibleModal, setVisibleModal] = useState(false);

    return(
        <View>
            <Text>{data.nome}</Text>
            <Image
            source={{uri: data.foto}}/>
        </View>
    );
}