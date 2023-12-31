

import { DB } from "./DB";
import { user } from "./JsonData";

import { Alert } from "react-native";


export const createDb = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10');
    // const res = await response.json();
    DB.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS json_table (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT);'
        );

    }, error => {
        console.log("Error occurred::::", error);
    }
    );
    DB.transaction(tx => {

        tx.executeSql('INSERT INTO json_table (data) VALUES (?);', [
            JSON.stringify(user)])
        // Alert.alert(" Json Stringfy of Array of object  inserted to DB")

    })
}
export const getdatafromDb = () => {
    DB.transaction(tx => {
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

export const filterData = () => {

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
    DB.transaction(tx => {
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
export const insertnewObject = () => {
    var newobj = {
        street: "DDDD",
        city: "Theni",
        country: "In"
    }
    var newarr = [newobj, ...user]
    // console.log(newarr, 'newarr');
    const updatedJsonString = JSON.stringify(newarr)
    DB.transaction(tx => {

        tx.executeSql('INSERT INTO json_table (data) VALUES (?);', [
            JSON.stringify(newarr)])


    })
}



export const updatekeyvalueobje = () => {




    DB.transaction((tx) => {

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
export const deleteobjectkey = () => {
    const objectKeyToDelete = "$.street";

    DB.transaction((tx) => {
        tx.executeSql(`UPDATE json_table SET data = json_remove(data, '$[0].street')`, [], (tx, results) => {
            if (results.rowsAffected > 0) {
                console.log('Deletion successful');
            } else {
                console.log('Deletion failed');
            }
        });
        DB.transaction((tx) => {
            tx.executeSql('SELECT data FROM json_table', [], (tx, results) => {
                if (results.rows.length > 0) {
                    console.log("Database JSON:", results.rows.item(0).data);
                }
            });
        });

    });
}
export const serachmultiple = (text) => {
    console.log(text);

    DB.transaction(tx => {
        const keys = Object.keys(user[0]);


        const conditions = keys.map(key => `json_extract(json_each.value,'$.${key}') LIKE '%${text}%'`).join(" OR ");
        //console.log(conditions,'conditions');
        ///const sqlQuery = `SELECT * FROM json_table, json_each(json_table.data) WHERE ${conditions}`;
        const sql = `WITH json_items AS (
           
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











