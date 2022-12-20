const redis = require('redis');
const redisClient = redis.createClient(6379,'127.0.0.1');
redisClient.on('error', (err) => {
    console.log('Error occured while connecting or accessing redis server');
});
const addRecord = ({rollNumber, image}) => {
    record = {
        "image" : image,
        "wordsPerMinute": 0,
        "totalWords": 0
    }
   //overwrite if value exists
        redisClient.set(rollNumber,record, redis.print);
   
}

export default addRecord;