module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }, 
    //1.
    getFortune: (req, res) => {
        const fortunes = ["You will purchase a cat tomorrow.", "A street cat will bite you soon.", "You will find a lost kitten.", "A cat will break your window.", "You will fight off a cat next week."]
        
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    //2.
    getPCom: (req, res) => {
            
        res.status(200).send(req.body.name + " ,looking good kid!")
        },
    //3
    changeMe: (req, res) =>{
        const buttons = ["button A", "button B", "button C"]

        let randomIndex = Math.floor(Math.random() * buttons.length)
        let randomButton = buttons[randomIndex]


        res.status(200).send(randomButton)
    }, 
    //4
    deleteTxt: (req, res) => {
            
        res.status(200).send("this button will self-destruct in 4 seconds")

    }
    
}
    










    
