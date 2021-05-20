let lang = getUrlParam("lang") || "fr"

init()

function init(){
    let json = FR_LANG

    if(lang === "en")
        json = EN_LANG

    setStringText("AboutMe", json)
    setStringText("Hi", json)
    setStringText("AboutMe_Text", json)
    setStringText("MyProjects", json)
    setStringText("Skils", json)
    setStringText("SeePortfolio", json)
    setStringText("SeePortfolioSentence", json)
}

function setStringText(key, json){
    document.getElementById(key).innerHTML = json[key]
}