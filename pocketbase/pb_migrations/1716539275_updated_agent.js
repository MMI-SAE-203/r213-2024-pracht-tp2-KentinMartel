/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("269172ek0py227a")

  // update
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
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("269172ek0py227a")

  // update
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
})
