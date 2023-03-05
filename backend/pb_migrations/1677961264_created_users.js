migrate((db) => {
  const collection = new Collection({
    "id": "4q35ql0j53s7zp1",
    "created": "2023-03-04 20:21:03.997Z",
    "updated": "2023-03-04 20:21:03.997Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gtfxw6o9",
        "name": "nome",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 150,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "glnh4sxz",
        "name": "cargo",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "safeqfvj",
        "name": "url_imagem",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4q35ql0j53s7zp1");

  return dao.deleteCollection(collection);
})
