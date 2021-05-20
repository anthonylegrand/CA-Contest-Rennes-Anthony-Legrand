const sentenceElement = document.getElementById('sentences');

let SentencesArray = []
let i = 0

function setSentencesTimer(){
    newMessage()
    setTimeout(()=>{
        setSentencesTimer()
    }, 4500)
}

function newMessage(){
    writeMessage(SentencesArray[i])
    i++

    // Si il n'y a plus de phrases disponible, alors repartire à la phrase 0
    if(SentencesArray.length <= i)
        i = 0
}

function writeMessage(new_string){
    // Est-ce que le message est entrain d'être écrit ?
    // Si false c'est que l'ancien méssage est entrain d'être effacé
    let write = false

    let writer = setInterval(()=>{
        let curent_string = sentenceElement.innerHTML

        if(!write){
            sentenceElement.innerHTML = curent_string.substr(0, curent_string.length-1)
            if(curent_string.length === 0)
                write = true
        }else{
            sentenceElement.innerHTML = new_string.substr(0, curent_string.length+1)

            // Y a t-il tout les characters ?
            // Si oui, alors stoper le Timer
            if(curent_string.length === new_string.length)
                clearInterval(writer)
        }
    }, 50)

}

