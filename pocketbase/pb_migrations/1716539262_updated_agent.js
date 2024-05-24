/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("269172ek0py227a")

  // remove
  collection.schema.removeField("cnc4v1hm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1cptcfv2",
    "name": "maisonsAgent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "nxoouoovor5zn6o",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("269172ek0py227a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cnc4v1hm",
    "name": "maisonsAgent",
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

  // remove
  collection.schema.removeField("1cptcfv2")

  return dao.saveCollection(collection)
})
