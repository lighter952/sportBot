import TelegramApi from 'node-telegram-bot-api'
import {MongoClient} from 'mongodb';

const token = '5269727865:AAFvpsAPEYPeUhPWwq8JgqrkUxArxbCd8I8'

const client = new MongoClient('mongodb+srv://nholias:4d63312485868@cluster0.b7jl6.mongodb.net/tgbot?retryWrites=true&w=majority');
const bot = new TelegramApi(token, {polling: true});
let collectionIndataBase;

const connectToDataBase = async () => {
  try {
      await client.connect();
      console.log("Connected...");
      //await client.db().createCollection('users');
      collectionIndataBase = client.db().collection('users');
      //await users.insertOne({name: 'Mikalai', age: 20});
      // await users.insertMany( [
      //     { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
      //     { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
      //  ] );
      //const user = await users.findOne({name: 'Mikalai'});
      //console.log(user);
  }
  catch (e) {
      console.log(e);
  }
}
connectToDataBase();

bot.on("polling_error", console.log);
bot.on('message', (msg) => {
  
  //userses.insertOne({name: 'Hi'})
  const chatId = msg.chat.id;
  sendMessageToDataBase(chatId);
  console.log(`send to database..., from ${chatId}`)
  
  
});

const sendMessageToDataBase = async() => {
  try {
    await userses.insertOne(traning);
  } catch (e) {
    console.log(e);
  }
}

let traning = {
  userID: 'lite_go_95',
  nameTraining: 'thirst',
  exersithes: [{
      name: 'pull_up',
      muscleGroup: 'chestl',
      sets: 5,
      repeats: [12,12,12,12,12],
      weights: [40,60,80,100,120]
  }, {
      name: 'pull_up',
      muscleGroup: 'chestl',
      sets: 5,
      repeats: [12,12,12,12,12],
      weights: [40,60,80,100,120]
  }]
};
console.log(traning.exersithes[0].sets);