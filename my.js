function cal(){
    let electric=+document.getElementById("electric_number").value;
    money=electric*2000;
    document.getElementById('result').innerHTML=money + "VND";
}