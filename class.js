class secondcar{
   constructor(spec,deliverytiming,vehiclenumber){
      this.model=spec;
      this.time=deliverytiming;
      this.number=vehiclenumber;
   }
Bookingconfirmation(){
   console.log(`Successfullybooked ${this.model} at ${this.time} for ${this.number}`)

}

}
var ref=new secondcar("BMW",'9am','TN010006');
ref.Bookingconfirmation();
   


