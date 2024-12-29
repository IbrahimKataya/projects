const _buttons = document.getElementsByTagName("button"),
_length = _buttons.length
_result = document.getElementById("result");


for(i=0; i < _length; i++){
    _buttons[i].onclick = indicator;
}

function indicator(){
    var _value = this.innerHTML;
    if(_value == "="){
        try{
            _result.value = eval(_result.value);
        }catch(e){
            _result.value = "";
        }
        return;
    }

    if(_value == "clr"){
        _result.value = "";
        return;
    }
    if(_value == "del"){
        _result.value = _result.value.slice(0,-1);
        return;
    }

    _result.value += _value;
}