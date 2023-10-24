import SQLite from 'react-native-sqlite-storage';


export const DB = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => {
    }
);

