//Импорт необходимых модулей
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const nodemailer = require('nodemailer');

// Express приложение
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//маршрут для webview
app.get('/webview', (req, res) => {
   res.sendFile(__dirname + '/webview.html');
});


//обработчик сообщений для Telegram бота
const botToken = '7144614037:AAGMEGIXhIfx5YEIKvBgGBMvrPs3P5C-bcM';
const bot = new TelegramBot(botToken, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Нажмите на кнопку, чтобы открыть webview', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Открыть webview', url: 'https://prem.kz/' }]
            ]
        }
    });
});

//отправкF писем с помощью nodemailer
const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
       user: 'your_email@gmail.com',
       pass: 'your_password'
   }
});

app.post('/forgot-password', (req, res) => {
   // Логика для восстановления пароля и отправки письма
});
