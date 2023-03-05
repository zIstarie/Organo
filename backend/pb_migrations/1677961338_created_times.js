migrate((db) => {
  const collection = new Collection({
    "id": "xm1bw4n75nozgsc",
    "created": "2023-03-04 20:22:18.474Z",
    "updated": "2023-03-04 20:22:18.474Z",
    "name": "times",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qxe4h8ol",
        "name": "nome",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 128,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gxwuylx8",
        "name": "tema",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "red",
            "green",
            "blue",
            "yellow",
            "white",
            "black",
            "purple"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xm1bw4n75nozgsc");

  return dao.deleteCollection(collection);
})
