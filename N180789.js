// let i=0;
// // function bgcol(){
// //     let colors=["bg.jpg","bg1.jpg","4_html.jpg"];
// //     document.body.style.backgroundImage="url('colors[i]')";
// //     i=(i+1)%colors.length;
// //     setTimeout(bgcol,1000);
// // }
function val(){
    var un=document.getElementById("un");
    var pat =/^F[a-zA-Z0-9]{3,9}$/;
    console.log(pat.test(un));
    if(!(pat.test(un))){
        document.getElementById("un").style.backgroundColor="red";
        return false;
    }
    else{
        document.getElementById("un").style.backgroundColor="white";
    }
    
 var mailval=/^[a-zA-Z0-9]*@[a-z]{5,9}\.?[a-z]{2}?\.[a-z]{2,3}$/;

 var mail=document.getElementById("mail");
 console.log(mailval.test(mail));
 if (!mailval.test(mail)){
    document.getElementById("mail").style.backgroundColor="red";
    return false;
}
if (mailval.test(mail)){
    document.getElementById("mail").style.backgroundColor="white";
}


}
var un=document.getElementById("un");
un.addEventListener('keyup',uppercase,false);
function uppercase(e){
    e.preventDefault();
    console.log("hii");
    document.getElementById("un").value=e.target.value.toUpperCase();
}