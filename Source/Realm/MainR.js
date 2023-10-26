import { View, Button } from "react-native";
import { useEffect } from "react";
//import realm from "./Schemaobjstring";//---------->Store as string
import realm from "./Schemaforobjkey";//---------->objkey
import { user } from "./JsonData";
const MainR = () => {

    const insertData = () => {
        realm.write(() => {
            //<-------------------Store as string------------------->
            // user.map((item, index) => {
            //     // realm.create('user', {
            //     //     id: index,
            //     //     data: JSON.stringify(user[index])
            //     // }, 'modified');

            // });

            user.map((item, index) => {
                console.log(item);
                realm.create('User', item);
            }, 'modified')


        });


    }
    const getallData = () => {
        var data = realm.objects('User');
        //const dataArray = Array.from(data).map(entry => JSON.parse(entry.data));

        console.log(data);
    }

    const updateobjkey = () => {
        const dataEntry = realm.objectForPrimaryKey('User', 0);

        if (dataEntry) {
            const parsedData = JSON.parse(dataEntry.data);
            console.log(parsedData['actions'], 'pppppp');
            //parsedData[key] = newValue;

            // realm.write(() => {
            //     dataEntry.data = JSON.stringify(parsedData);
            // });
        }




    }
    const deleteObjectKey = (dataId, key) => {

        const dataEntry = realm.objectForPrimaryKey('User', 1);

        if (dataEntry) {
            const parsedData = JSON.parse(dataEntry.data);
            delete parsedData['mobile_actions'];

            realm.write(() => {
                dataEntry.data = JSON.stringify(parsedData);
            });
        }

    };

    return (
        <View>
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Button onPress={() => insertData()} title='Insert Data'></Button>

            </View>
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Button onPress={() => getallData()} title='Get Data'></Button>

            </View>
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Button onPress={() => updateobjkey()} title='Update Key Data'></Button>

            </View>
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Button onPress={() => deleteObjectKey()} title='Delete Key Data'></Button>

            </View>
        </View>
    )
}
export default MainR;