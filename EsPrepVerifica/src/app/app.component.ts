import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EsPrepVerifica';

 
spams = new Array<string>(); //Dichiaro un array di stringhe
 
  
  addSpam(testo: HTMLInputElement, spam: HTMLInputElement): boolean {
    console.log(`Adding spam text: ${testo.value} and spam: ${spam.value}`);
    //this.spams.push(testo.value);
    
    let spamint = Number(spam.value);
    
    for(let i:number =0; i< spamint; i++)  
     {
         
         this.spams[i]= testo.value;
         console.log(this.spams[i]);
     }

   
    return false;
  }
  
  
  
  constructor() { 
     
  }


}
