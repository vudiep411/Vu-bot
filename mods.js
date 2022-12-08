import { Client, Intents, Message, env } from "./deps.js";
import { generatePic, sendQuotes } from "./utils/function.js";
import { cuss, cussReply } from "./utils/constants.js";

const client = new Client();



client.on("ready", () => {
    console.log(`Hello I'm ${client.user?.tag}!`);
});

client.on("messageCreate", async (msg) => {
    const member = msg.member
    const username = (`${member?.user?.username}#${member?.user?.discriminator}`)

    const content = msg.content;
    const command = content.split(' ')[0]

    // Commands goes here
    if(command === '$generate') {        
        let promptArr = content.split(' ')
        promptArr.shift()
        const prompt = promptArr.join('+')
        if(prompt) 
            generatePic(prompt, msg)
        
    }

    else if(command === '$quote') {
        sendQuotes(msg)
    }

    for(let i = 0; i < cuss.length; i++) {
        try {
            if(content.toLowerCase().includes(cuss[i]) && client.user?.tag !== username) {
                let random = Math.floor(Math.random() * (cussReply.length - 1))
                msg.reply(cussReply[random])
                break
            }
        } catch (error) {
            console.log(error)
        }
    }
    
});

const token = env["BOT_TOKEN"];
  
client.connect(token, Intents.None);