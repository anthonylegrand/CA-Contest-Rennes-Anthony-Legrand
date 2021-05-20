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

    if(SentencesArray.length <= i)
        i = 0
}

function writeMessage(new_string){
    let write = false

    let writer = setInterval(()=>{
        let curent_string = sentenceElement.innerHTML

        if(!write){
            sentenceElement.innerHTML = curent_string.substr(0, curent_string.length-1)
            if(curent_string.length === 0)
                write = true
        }else{
            sentenceElement.innerHTML = new_string.substr(0, curent_string.length+1)
            if(curent_string.length === new_string.length)
                clearInterval(writer)
        }
    }, 50)

}

