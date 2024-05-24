/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nxoouoovor5zn6o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ojetkycb",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "269172ek0py227a",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nxoouoovor5zn6o")

  // remove
  collection.schema.removeField("ojetkycb")

  return dao.saveCollection(collection)
})
