function btnclick(val){
    document.getElementById('screen').value+=val
}

function allclear(){
    document.getElementById('screen').value=''
}

function cal(){
    var text = eval(document.getElementById('screen').value)
    document.getElementById('screen').value=text
}

function btnback(){
    var text = document.getElementById('screen').value
    var res = text.slice(0,-1)
    document.getElementById('screen').value=res
}