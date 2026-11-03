// Run in mongosh
db=db.getSiblingDB("OrderDB");
db.Orders.insertMany([
{Order_ID:1,Customer:{Customer_ID:101,Name:"Aarav"},Products:[{Name:"Pen",Qty:2,Price:10},{Name:"Book",Qty:1,Price:80}]},
{Order_ID:2,Customer:{Customer_ID:102,Name:"Riya"},Products:[{Name:"Bag",Qty:1,Price:500}]},
{Order_ID:3,Customer:{Customer_ID:101,Name:"Aarav"},Products:[{Name:"Pencil",Qty:5,Price:5}]},
{Order_ID:4,Customer:{Customer_ID:103,Name:"Neha"},Products:[{Name:"Bottle",Qty:2,Price:100}]},
{Order_ID:5,Customer:{Customer_ID:102,Name:"Riya"},Products:[{Name:"Notebook",Qty:3,Price:40}]}
]);
db.Orders.find({"Customer.Customer_ID":101});
db.Orders.updateOne({Order_ID:1,"Products.Name":"Pen"},{$set:{"Products.$.Qty":3}});
db.Orders.aggregate([{$unwind:"$Products"},{$group:{_id:"$Order_ID",Total:{$sum:{$multiply:["$Products.Qty","$Products.Price"]}}}}]);
db.Orders.aggregate([{$unwind:"$Products"},{$group:{_id:"$Order_ID",Total:{$sum:{$multiply:["$Products.Qty","$Products.Price"]}}}},{$match:{Total:{$gt:100}}}]);
