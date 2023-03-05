migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4q35ql0j53s7zp1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "adr3yyrr",
    "name": "time_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "xm1bw4n75nozgsc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4q35ql0j53s7zp1")

  // remove
  collection.schema.removeField("adr3yyrr")

  return dao.saveCollection(collection)
})
