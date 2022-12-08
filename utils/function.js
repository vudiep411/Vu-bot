import { quotes } from "./quotes.js"


export const generatePic = async (prompt, msg) => {
    try {        
        const res = await fetch(`https://lexica.art/api/v1/search?q=${prompt}`)
        console.log(res.status)
        let image = await res.json()
        const random = Math.floor(Math.random() * (image.images.length - 1));
        image = image.images[random].src
        msg.reply(image)
    } catch (error) {
        console.log(error)
    }
}

export const sendQuotes = async (msg) => {
    try {
        // const res = await fetch("https://type.fit/api/quotes")
        // let quote  = await res.json()
        const random = Math.floor(Math.random() * (quotes.length - 1))
        const quote = quotes[random].text
        const author = quotes[random].author || ''
        
        msg.reply(`*${quote}* \n *-${author}*`)
    } catch (error) {
        console.log(error)
    }
}

export const generateMultiples = async (prompt, msg) => {
    try {        
        const res = await fetch(`https://lexica.art/api/v1/search?q=${prompt}`)
        console.log(res.status)
        let image = await res.json()
        image = image.images
        for(let i = 0; i < 10; i++) {
            msg.reply(image[i].src)
        }
    } catch (error) {
        console.log(error)
    }    
}