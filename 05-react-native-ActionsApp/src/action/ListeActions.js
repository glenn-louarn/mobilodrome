import React from 'react'
import {View, Text, Button, Row, StyleSheet} from 'react-native'
import {UneAction} from './UneAction'


export const ListeActions = ({action, supprimer, terminer}) => {

    return action.map((item, index) => (
        <View  key={index}  style={styles.row}>
        
            <Text>{item.title}</Text>
             <Button onPress={() =>supprimer(index)} title='Supprimer'></Button> 
             <Button onPress={() =>terminer(index)} disabled={item.isTerminer} title='Terminer'></Button> 
        </View>
    ));
}


const styles = StyleSheet.create({
row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});