import { Realm, RealmProvider, useRealm, useQuery } from '@realm/react'
// Declare Schema
class UserSchema extends Realm.Object { }
UserSchema.schema = {
    name: 'User',
    primaryKey: 'id',

    properties: {
        id: 'int',
        data: 'string'
    }



};

// Create realm

let realm = new Realm({
    schema: [UserSchema], schemaVersion: 1
});

// Export the realm
export default realm;