Function chkpasswords(){
    var init=document.getElementById("initial");
    var sec=document.getElementById("second");
    if(init.value==""){
        alert("initial password is empty pls type somethig");
        return false;
    }
    if(init.value!=sec.value){
        alert("both passwords are different,pls enter the same passwords");
        return false;
    }
    else{
        return true;
    }
}