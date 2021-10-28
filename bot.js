import nodeTelegramBotApi from "node-telegram-bot-api";
import config from "./config.js";

const bot = new nodeTelegramBotApi(config.TOKEN, {
    polling: true
})

async function main() {
    bot.on("message", async (message) => {
        
        const chat_id = message.chat.id;
        const first_name = message.chat.first_name;
        const username = message.chat.username;
        const text = message.text;
        const is_bot = message.from.is_bot;
        const type = message.chat.type;
        const contact = message.contact;
        const message_id = message.message_id;

        const words = ["Salom", "assalomu alaykum", "qalaysan", "tuzukmisan", "mening ismim nima"];

        const noWords = ["Men bunday so'zni bilmayman", "Men bunday so'zni o'rganmaganman", "Kechirasiz sizni yaxshi tushunmadim", "Tushunmadim"];

        const random = Math.round(Math.random({...noWords}));
        // const i = random == 1 ? noWords[1] : random == 0 ? noWords[0] : random == 2 ? noWords[2] : noWords[3]


        if(text == words[4]) {
            bot.sendMessage(chat_id, `Sening isming ${first_name}`)
        }
        if(text == words[3]) {
            bot.sendMessage(chat_id, "Tuzuk, o'zing tuzukmisan")
        }
        if(text == words[0]){
            bot.sendMessage(chat_id, "Salom, yaxshimisan?")
            return 0
        } else

        if(text == words[1]) {
            bot.sendMessage(chat_id, "Waalaikumussalaam, barakalloh")
        } else

        if(text == words[2]) {
            bot.sendMessage(chat_id, "Yaxshi, o'zingchi")
        } else if(text != {}){
            bot.sendMessage(chat_id, `Kechirasiz sizni yaxshi tushunmadim`)
        }

    })
}

main()