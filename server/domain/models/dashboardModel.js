const { ObjectId } = require("mongodb");
const ConnectToDatabase = require("../../infrastructure/database/mongoDB");

class Dashboard{
    async findById (id) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('dashboards');
        const [res] = await collection.find({_id: new ObjectId(id)}).toArray();
        return res;
    }

    async findByUserId(userId){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('dashboards');
        const res = await collection.find({"userId" : new ObjectId(userId)}).toArray();
        return res;
    }
    
    async aggregate(data) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('dashboards');
        const res = await collection.aggregate([...data]).toArray();
        return res;
    }

    async insert(dashboardData){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('dashboards');
        const res = await collection.insertMany([dashboardData]);
        return res;
    }
    
}

module.exports = Dashboard;