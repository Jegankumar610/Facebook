function cricket(){
    return new Promise((entry, notentry) =>{
        let Dueform =false;
        if(Dueform){
            resolve("pass issued")
        }
        else{
            notentry("do not issue pass")
        }
    }) }
function play(){
    return new Promise((entry, notentry) =>{
        let malpractice = false;
        if(malpractice){
            entry("warning- noted")
        }
        else{
            notentry("no issue- granded")
        }
    })
}
cricket().then(next=>{console.log(next);return play();})
        .catch(error=>{console.log(error)});