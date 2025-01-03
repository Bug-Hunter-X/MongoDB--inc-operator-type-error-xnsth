```javascript
// Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:1}});
//If you need to increment by a non-integer value use a decimal
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:1.5}});
// Handle cases where the field may not exist.  Use $setOnInsert to only set the value if the field is absent
db.collection.updateOne({"_id":ObjectId("someId")},{"$inc":{"field":1},"$setOnInsert":{"field":0}});
```