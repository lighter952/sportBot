/*
    1. Мои тренировки
    2. Добавить тренировку
    3. Удалить тренировку
    В день когда у меня тренировка приложение отправляет мне сообщение с тренировкой

    1 сделать ввод пользлователем тренировки и сохранение этой тренировки в обект {
        1  Введите название тренировки
        2 Введите название первого упражнения
        3 Ввидети количество подходов
        4 Введите количество подходов
    }
    2 сделать механизм сохранения этой тренировки в бд
    3 сделать автоматический вывод тренировки пользователю в заданное в коде время
    4 
    Если пользователь захочет изменить конкретное поле надо сделать спец команду и свитч в ней





//userses.insertOne({name: 'Hi'})
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
        {command: '/game', description: 'Игра угадай цифру'},
    ])

    bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/newWorkout', description: 'Получить информацию о пользователе'}
    ])
    ]

    const sendMessageToDataBase = async() => {
  try {
    await userses.insertOne(traning);
  } catch (e) {
    console.log(e);
  }
}

const connectToDataBase = async () => {
  try {
      await client.connect();
      console.log("Connected...");
      collectionIndataBase = client.db().collection('users');
  }
  catch (e) {
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
*/




//await users.insertOne({name: 'Mikalai', age: 20});
      // await users.insertMany( [
      //     { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
      //     { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
      //  ] );
      //const user = await users.findOne({name: 'Mikalai'});
      //console.log(user);
      //await client.db().createCollection('users');

//let count = 0
//bot.on("polling_error", console.log);
// bot.on('callback_query', function onCallbackQuery(callbackQuery) {
//     console.log('----------------CALLBACK START------------------')
//     console.log(callbackQuery)
//     const action = callbackQuery.data;
//     const msg = callbackQuery.message;
//     const opts = {
//         chat_id: msg.chat.id,
//         message_id: msg.message_id,
//         reply_markup: JSON.stringify({
//             inline_keyboard: [
//                 [
//                     {
//                     text: '<<<',
//                     // we shall check for this value when we listen
//                     // for "callback_query"
//                     callback_data: 'edit1'
//                     },
//                     {
//                     text: `>>>`,
//                     callback_data: 'edit2'
//                     }
//                 ]
//             ]
//         }),
//     };
    
//     if (action === 'edit1') {
//       count--;
//     }
//     if (action === 'edit2') {
//         count++;
//     }

//     bot.editMessageText(`Edited count: ${count}`, opts);
//     /*
//     bot.deleteMessage(msg.chat.id, msg.message_id)
//     bot.sendMessage(msg.chat.id, `Edited count: ${count}`, {    
//         reply_markup: {
//           inline_keyboard: [
//             [
//               {
//                 text: '<<',
//                 // we shall check for this value when we listen
//                 // for "callback_query"
//                 callback_data: 'edit1'
//               },
//               {
//                 text: '>>',
//                 callback_data: 'edit2'
//               }
//             ]
//           ]
//         }
//     });*/
// });


//bot.sendMessage(msg.chat.id, `<i>Привет</i>, ${msg.mes}`, {parse_mode: 'HTML'})
  
    // bot.sendMessage(msg.chat.id, `Count: ${count}`, {
    //         reply_markup: {
    //           inline_keyboard: [
    //             [
    //               {
    //                 text: '<<',
    //                 // we shall check for this value when we listen
    //                 // for "callback_query"
    //                 callback_data: 'edit1'
    //               },
    //               {
    //                 text: '>>',
    //                 callback_data: 'edit2'
    //               }
    //             ]
    //           ]
    //         }
    // });