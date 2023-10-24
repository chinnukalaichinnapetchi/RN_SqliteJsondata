
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,

  TextInput,

  View,
} from 'react-native';
import InsertData from './DBFun/InsertData';

import { getdatafromDb,filterData,updatekeyvalueobje,deleteobjectkey,insertnewObject,serachmultiple, createDb } from './DBfun';




const Main = () => {
    const [text, setText] = useState('')
    useEffect(()=>{
        createDb()
    },[])

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <StatusBar
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >

        <View
          style={{

            flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '30%',
          }}>
          <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>Sqlite </Text>

        </View>
        {/* <InsertData></InsertData> */}
        {/* <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button onPress={() => userlistApi()} title='Insert Json Data'></Button>

        </View> */}
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button onPress={() => getdatafromDb()} title='Get All Json Data From DB'></Button>

        </View>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button onPress={() => filterData()} title='Filter and Get Data from DB'></Button>

        </View>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button onPress={() => updatekeyvalueobje()} title='Update value from Json Object in Db '></Button>

        </View><View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button onPress={() => deleteobjectkey()} title='Delete key from Json Object in Db '></Button>

        </View>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button onPress={() => insertnewObject()} title='Insert new object for Json in Db '></Button>

        </View>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <TextInput style={{ borderColor: 'blue', borderWidth: 1, padding: 10 }} placeholder='Search' onChangeText={(val) => { setText(val) }} value={text}>

          </TextInput>
          <View style={{ marginHorizontal: 20, marginTop: 20 }}>
            <Button onPress={() => { serachmultiple(text) }} title='Search and Get Data from Db  '></Button>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default Main;


// `
        
//         WITH json_items AS (
           
//           SELECT  json_each.value as item
//           FROM 
//           json_table,
//               json_each(json_table.data)
//           WHERE 
//               json_extract(json_each.value,'$.country') LIKE '%${text}%' OR
//               json_extract(json_each.value,'$.city') LIKE '%${text}%' OR
//               json_extract(json_each.value,'$.street') LIKE '%${text}%'
              
//       )
      
//       SELECT  json_group_array(item) as data
//       FROM json_items;
//         `





