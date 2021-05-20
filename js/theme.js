const body = document.body

const wrapper = body.querySelector('.wrapper');

wrapper.addEventListener('change', function(e) {
    switchTheme()
})

function switchTheme(){
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode")
    }else{
        body.classList.add("dark-mode")
    }
}