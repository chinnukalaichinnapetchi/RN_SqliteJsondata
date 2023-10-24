# Store json stringfy  array of object in sqlite Database

1.In react native install an import below  Package 
 ## react-native-sqlite-storage": "^6.0.1"

2.Create a name and location for Sqlite DB

3.Create a Table name[json_table] if it not exists in DB

4.Insert [id] for row of the Table and json data are stored  using [TEXT] Variable("It meens Json data as stored as string")

5.When your application open the Data will be inserted in DB

6.Create a buttons for Sqlite CURD Operations[insert_Delete_update_getdata],The buttons are 
## 1.Get All Json Data From DB, 2.Filter and Get Data from DB,3.Update value from Json Object in Db ,4.Delete key from Json Object in Db  5.Insert new object for Json in Db 6.Search and Get Data from Db

7.When user click  Button 1('Get All Json Data From DB') get stored  All json stringfy data from Sqlite Database using Sqlite query like [SELECT*FROMjson_table]

8.Otherwise User click Button 2 (Filter and Get Data from DB) get filtered(or) specified object from stored json Stringfy data  using sqlite quary like
<!-- **
 `WITH json_items AS (
         
        SELECT DISTINCT json_each.value as item
        FROM 
        json_table,
            json_each(json_table.data)
        WHERE 
            json_extract(json_each.value, '$.city') = 'madurai' 
    )
    
    SELECT DISTINCT json_group_array(item) as data
    FROM json_items``;** -->
    
  1.[DISTINCT] -->To avoid unnecessary rerender of object in array 
  2.[json_each()]-->get all key and value from object
  3.[json_extract()]-->extracts one or more SQL values from a valid JSON string. 
  4.[json_group_array()]-->return array of object
  
## for example user have some array of data like [{data:'2',val='1'},{data:'3',val:'4'}] get  filtered data like [{data:'3',val:'4'}]

9.When user click Button 3 ('Update value from Json Object in Db ') value can be updated  for specied key in object of array using [Json_set()]

1 .[json_set()]--->key and value can be created if doest not exist  and overwrite if already exists

10.When user click Button 4 ('Delete key from Json Object in Db ')  specied key can be removed in object of array using [json_remove()]

11.Search and Get Data from Db

When user search value  of object and it will be compared to each key then retrun a matched  array of object 

1.if you check your  value with each key in object sql query like blew
` WHERE json_extract(json_each.value,'$.${key}') LIKE '%${text}%'`.join(" OR ");

2.if you check your search value with specified key in object sql query like below
``WHERE json_extract(json_each.value,'$.country') LIKE '%${text}%' OR json_extract(json_each.value,'$.city') LIKE '%${text}%' OR json_extract(json_each.value,'$.street') LIKE '%${text}%'`




