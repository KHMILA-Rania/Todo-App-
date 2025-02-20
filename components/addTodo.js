import { StyleSheet, Text, View,TouchableOpacity ,TextInput,FlatList} from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-web';

export default function AddTodo({submitHandler}){
    
    const [text , setText]=useState('initial')
    const changeHandler= (val)=>{
        setText(val)
    }

    return(
        <View>
            <TextInput style={styles.input}
             placeholder='new todo ...'
            onChangeText={changeHandler }
            />

       
            <Button onPress={ ()=> submitHandler(text)} title='add todo' color='coral' />
        </View>
    )


}


const styles = StyleSheet.create({

    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    }
});