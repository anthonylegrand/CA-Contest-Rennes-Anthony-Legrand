const body = document.body

const wrapper = body.querySelector('.wrapper');
let btn, copy_btn

init()

wrapper.addEventListener('change', function(e) {
    switchTheme()
})

function switchTheme(){
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode")

        btn.checked = true
        copy_btn.checked = true
    }else{
        body.classList.add("dark-mode")
        btn.checked = false
        copy_btn.checked = false
    }
}

function init(){
    let copy = wrapper.cloneNode(true);
    let btnclone = body.querySelector('.btn-clone');
    btnclone.appendChild(copy);

    btn = wrapper.querySelector('#hide-checkbox')
    copy_btn = copy.querySelector('#hide-checkbox')
}
