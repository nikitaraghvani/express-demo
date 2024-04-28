#mongodb commands
To show the available databases -> show dbs
To create new databse -> use db_name
To switch into another databse -> use db_name
To show your current databse -> db
To delete the database -> db.deleteDatabase()
To show collections -> show collections
To create new collection -> db.createCollection('collection_nm')
To drop the collection -> db.collection_nm.drop()
To insert one row in collection -> db.collection_nm.insert({"id":1,"name":"nikita"})
To insert many rows in collection -> db.collection_nm.insertMany([{},{}])
To show the added rows in collection -> db.collection_nm.find() -> db.collection_nm.find().pretty()
To search particular data -> db.collection_nm.find({name:"nm"})

#Build the express.js project

1.npm init -y --- It will create package.json file

#Notes

1.Define the scema for notes model
2.Define routes
3.Define controller
