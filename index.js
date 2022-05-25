import TelegramApi from 'node-telegram-bot-api'
import {MongoClient} from 'mongodb';

const token = '5269727865:AAFvpsAPEYPeUhPWwq8JgqrkUxArxbCd8I8'
const client = new MongoClient('mongodb+srv://nholias:4d63312485868@cluster0.b7jl6.mongodb.net/tgbot?retryWrites=true&w=majority');
const bot = new TelegramApi(token, {polling: true});
bot.on("polling_error", console.log);
let traning = {
  userID: 'lite_go_95',
  nameWorkout: 'thirst',
  exersithes: [{
      name: 'pull_up',
      muscleGroup: 'chestl',
      sets: 0,
      repeats: [12,12,12,12,12],
      weights: [40,60,80,100,120]
  }]
};
let state = 0;

function start() {
  bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/new_workout', description: 'Create a new workout'},
    {command: '/update_traning', description: 'Update workout'},
  ]);

  bot.on('message', (msg) => {
 
    if(msg.text === '/new_workout') {
      bot.sendMessage(msg.chat.id, "Enter new workout name: ")
      return state = 1;
    }
    if(msg.text ==='/update_traning') {
      bot.sendMessage(msg.chat.id, `1 - Изменить название тренировки\n 2 - Изменить упражнение`)
      state = 6;
    }
    if(state == 1){
      traning.nameWorkout = msg.text;
      bot.sendMessage(msg.chat.id, `Workout name is ${traning.nameWorkout}`)
      bot.sendMessage(msg.chat.id, 'Enter exersithe name: ')
      return state = 2;
    }
    if(state == 2) {
      traning.exersithes[0].name = msg.text;
      bot.sendMessage(msg.chat.id, `Exersise name is ${traning.exersithes[0].name}`)
      bot.sendMessage(msg.chat.id, 'Enter how many repeats in sets: ')
      return state = 3;
    }
    if(state == 3) {
      traning.exersithes[0].repeats = msg.text.split(`,`);
      traning.exersithes[0].sets = traning.exersithes[0].repeats.length;
      bot.sendMessage(msg.chat.id, `Repeats is ${traning.exersithes[0].repeats}`)
      bot.sendMessage(msg.chat.id, 'Enter how many weight do you use in sets: ')

      return state = 4;
    }
    if(state == 4) {
      traning.exersithes[0].weights = msg.text.split(`,`);
      bot.sendMessage(msg.chat.id, `Weigts is ${traning.exersithes[0].weights}`)
      console.log(traning)
      return state = 0;
    }
    if(state == 6) {
      switch(msg.text) {
        case '2':
          state = 1;
        break;
      }
    }
    else {
      bot.sendMessage(msg.chat.id, "Я не понимаю тебя, воспользуйся командами!")
    }
  });

}
start();
