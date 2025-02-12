function example(name, callback){
    console.log('HI' +' ' + name);
    callback();
}
function callme(){
    console.log('im next option');
}
example('jegan', callme);


