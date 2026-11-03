// Modern MongoDB aggregation equivalent for MapReduce task
db=db.getSiblingDB('MapReduceDB');
db.Students.insertMany([
{Student_ID:1,Name:'Aarav',Course:'BCA',Marks:85},
{Student_ID:2,Name:'Riya',Course:'BCA',Marks:91},
{Student_ID:3,Name:'Karan',Course:'BBA',Marks:78},
{Student_ID:4,Name:'Neha',Course:'BCA',Marks:88},
{Student_ID:5,Name:'Arjun',Course:'BBA',Marks:82}
]);
db.Students.aggregate([
{$group:{_id:'$Course',StudentCount:{$sum:1},AverageMarks:{$avg:'$Marks'}}},
{$sort:{_id:1}}
]);
// Note: legacy mapReduce is deprecated in modern MongoDB; aggregation is preferred.
