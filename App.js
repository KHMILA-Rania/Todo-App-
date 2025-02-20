
import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback,Keyboard,View,TouchableOpacity ,TextInput,FlatList, Alert} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import SandBox from './components/sandBox';
export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler=(key)=>{
    setTodos((prevtodos)=>{
      return prevtodos.filter(todo=>todo.key !== key)
    })
  }

  const submitHandler = (text)=>{
    if(text.length> 3)
   { setTodos((prevTodos)=>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })}
    else{
      console.log('oops');
      alert('OOPS! Need more than 3 characters');//for web
     Alert.alert('OOPS!', 'need more than 3 characters',[
       {text: 'understood', onPress: ()=>{console.log('alert closed')}}
      ])
    }
  }
 
  return (

  

    <TouchableWithoutFeedback onPress={
      ()=>{
       // Keyboard.dismiss(); for mobile
        console.log('dissmissed');
      }
    }>
    <View style={styles.container}>
      {/* Header */}
      <Header></Header>
       
     

      <View style={styles.content}>
        {/*to do form */}
        <AddTodo submitHandler={submitHandler}></AddTodo>

        <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={
            ({item})=>(
              <TodoItem item={item}  pressHandler={pressHandler}/>
            )
          } />
        </View>

      </View>

       
    </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  content:{
    padding: 40,
   
    flex:1
    
  },
  list:{
    marginTop:20,
  
    flex:1
  }

 
  
});
 