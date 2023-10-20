
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

import SQLite from 'react-native-sqlite-storage';

const user = [

  {
    street: "123 Main St1",
    city: "Anytown1",
    country: "US1"
  },
  {
    street: "aaa",
    city: "Anytown2",
    country: "S.colony"
  },
  {
    street: "bbbb",
    city: "Anytown3",
    country: "Simmakal"
  },
  {
    street: "cccc",
    city: "madurai",
    country: "In"
  },
  {
    street: "ssss",
    city: "fff",
    country: "madurai"
  },
  {
    street: "madurai",
    city: "ssss",
    country: "bbbb"
  },
]




const App = () => {
  const [text, setText] = useState('')

  const db = SQLite.openDatabase(
    {
      name: 'MainDB',
      location: 'default',
    },
    () => { },
    error => {
      //console.log(error);
    }
  );
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS json_table (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT);'
      );
    });
userlistApi()
  }, [])
  const userlistApi = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10');
    // const res = await response.json();
    db.transaction(tx => {

      tx.executeSql('INSERT INTO json_table (data) VALUES (?);', [
        JSON.stringify(user)])
      Alert.alert(" Json Stringfy of Array of object  inserted to DB" )

    })
  }
  const getdatafromDb = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM json_table;', [], (tx, results) => {
        console.log(results, "resultsresults");
        let len = results.rows.length;
        if (len > 0) {
          let len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            const retrievedObject = JSON.parse(row.data);
            console.log("Get All Data=============>", retrievedObject);
          }
        }
      },
        error => {
          console.log("Error occurred:", error);
        }
      );
    });
  }

  const filterData = () => {

    ///queries
    //<-------------------- get key value from an array------------------------->
    //SELECT json_extract(data, '$.city') as city FROM json_table;


    //<-------------------- get object  from an array using condition------------------------->

    //   `
    //   WITH json_items AS (
    //     SELECT json_each.value as item
    //     FROM json_table,
    //          json_each(json_table.data)
    //   )
    //   SELECT item
    //   FROM json_items
    //   WHERE json_extract(item, '$.city') = ?;
    // `,



    //<-------------------- get array of object from an array------------------------->

    //   `
    //   WITH json_items AS (
    //     SELECT json_each.value as item
    //     FROM my_table,
    //          json_each(my_table.json_array_column)
    //   )
    //   SELECT json_group_array(item) as filtered_items
    //   FROM json_items
    //   WHERE json_extract(item, '$.name') = ?;
    // `;


    //<-------------------- get array of object from an array with limit------------------------->


    //   `
    //   WITH json_items AS (
    //     SELECT json_each.value as item
    //     FROM my_table,
    //          json_each(my_table.json_array_column)
    //     WHERE json_extract(json_each.value, '$.name') = ?
    //     LIMIT ?
    //   )
    //   SELECT json_group_array(item) as filtered_items
    //   FROM json_items;
    // `;
    // json_extract-=-->extracts one or more SQL values from a valid JSON string. 
    db.transaction(tx => {
      tx.executeSql(`
      
      WITH json_items AS (
         
        SELECT DISTINCT json_each.value as item
        FROM 
        json_table,
            json_each(json_table.data)
        WHERE 
            json_extract(json_each.value, '$.city') = 'madurai' 
    )
    
    SELECT DISTINCT json_group_array(item) as data
    FROM json_items;
      `, [], (tx, results) => {

        let len = results.rows.length;
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          console.log("Fitered Json data===========>", row.data);
        };


      },

        error => {
          console.log("Error occurred:", error);
        }
      );


    });
  }
  const insertnewObject = () => {
    var newobj = {
      street: "DDDD",
      city: "Theni",
      country: "In"
    }
    var newarr = [newobj, ...user]
    // console.log(newarr, 'newarr');
    const updatedJsonString = JSON.stringify(newarr)
    db.transaction(tx => {

      tx.executeSql('INSERT INTO json_table (data) VALUES (?);', [
        JSON.stringify(newarr)])


    })
  }



  const updatekeyvalueobje = () => {




    db.transaction((tx) => {

      ///update all keys city===madurai in json data
      // const updatedData = user.map(item => {
      //   return {
      //     ...item,
      //     city: item.city === 'madurai' ? 'theni' : item.city
      //   };
      // });
      // const updatedJsonString = JSON.stringify(updatedData);
      // tx.executeSql(`UPDATE json_table SET data =?`,
      //   [updatedJsonString], (tx, results) => {
      //     if (results.rowsAffected > 0) {
      //       console.log('Update successful');
      //     } else {
      //       console.log('Update failed');
      //     }
      //   },
      //   error => {
      //     console.log("Error occurred:", error);
      //   }
      // );

      ///update index based  value updated

      tx.executeSql(`UPDATE json_table SET data = (SELECT json_set(json_table.data, '$[0].country', '$.775'))`,
        [], (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log('Update successful');
          } else {
            console.log('Update failed');
          }
        },
        error => {
          console.log("Error occurred:", error);
        }
      );

      tx.executeSql('SELECT data FROM json_table', [], (tx, results) => {
        if (results.rows.length > 0) {
          let row = results.rows.item(0);
          console.log("Updated JSON:", row.data);
        }
      });

    });



  }
  const deleteobjectkey = () => {
    const objectKeyToDelete = "$.street";

    db.transaction((tx) => {
      tx.executeSql(`UPDATE json_table SET data = json_remove(data, '$[0].street')`, [], (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log('Deletion successful');
        } else {
          console.log('Deletion failed');
        }
      });
      db.transaction((tx) => {
        tx.executeSql('SELECT data FROM json_table', [], (tx, results) => {
          if (results.rows.length > 0) {
            console.log("Database JSON:", results.rows.item(0).data);
          }
        });
      });

    });
  }
  const serachmultiple = (text) => {
    console.log(text);
    
    db.transaction(tx => {
      const keys = Object.keys(user[0]);
      
     
      const conditions = keys.map(key => `json_extract(json_each.value,'$.${key}') LIKE '%${text}%'`).join(" OR ");
    //console.log(conditions,'conditions');
   ///const sqlQuery = `SELECT * FROM json_table, json_each(json_table.data) WHERE ${conditions}`;
   const sql=`WITH json_items AS (
           
    SELECT DISTINCT json_each.value as item
    FROM 
    json_table,
        json_each(json_table.data)
    WHERE ${conditions}
       
        
)

SELECT DISTINCT json_group_array(item) as data
FROM json_items;`

      tx.executeSql(sql, [], (tx, results) => {

        let len = results.rows.length;
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          console.log("Fitered Json data===========>", row.data);
        };


      },

        error => {
          console.log("Error occurred:", error);
        }
      );

   
    });

  }
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
          <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>Sqlite Storage</Text>

        </View>
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

export default App;


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





