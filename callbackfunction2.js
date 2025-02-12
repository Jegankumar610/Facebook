
///call back function

function Bike(name,callback) {
    console.log('im going to by a new model'+''+'with my friend');
    callback();
}
function callme(){
    console.log('After that im going for pooja');
}

Bike('with my friend',callme);