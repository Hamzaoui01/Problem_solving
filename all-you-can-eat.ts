function computeDayGains (nbSeats: number, payingGuests : number[], guestMouvements: number[]): number {
    
  var sum = 0;
    var guestsEating =new  Array();
    var guestswaiting = new Array();
    var guestsDidPay = new Array();
    
  
  //Filter guest who pay
  for(var i=0;i<guestMouvements.length; i++){//Itterate gestMouvement
    
    const currrentGuest = guestMouvements[i];
    
        
     //Departure
    if(guestswaiting.includes(currrentGuest)){
        console.log(">> Gest number "+ currrentGuest + " left without payment");
        //remove from guestswaiting and continue loop
        guestswaiting = remove(currrentGuest,guestswaiting);
        continue;
    } 
    if(guestsEating.includes(currrentGuest)){
        //remove from guestsEating and get payment then increment nbSeats
        console.log(">> Gest number "+ currrentGuest + " left and pays "+ payingGuests[currrentGuest]);
        guestsEating = remove(currrentGuest,guestsEating);
        
        if(!guestsDidPay.includes(currrentGuest)){
            //Assure Guest pay only once per day
            sum+= payingGuests[currrentGuest];
            guestsDidPay.push(currrentGuest);
        }
        
        nbSeats++;
        nbSeats = moveFromguestswaitingToSetting(nbSeats,guestswaiting,guestsEating);
        continue;
    } 
    //Arrival
    if(nbSeats==0){ // push in guestswaiting 
        console.log(">> Gest number "+ currrentGuest + " arrives and is guestswaiting");
        guestswaiting.push(currrentGuest);
        continue;
    }
    else {
        //push in setting and decrement nbseats
        console.log(">> Gest number "+ currrentGuest + " arrives and is guestsEating");
        guestsEating.push(currrentGuest);
        nbSeats--;
    }
  }
    
    return sum;
}

function moveFromguestswaitingToSetting(nbSeats:number,guestswaiting :number[],setting:number[]):number {
    while(nbSeats>0 && guestswaiting.length>0){
        const guest = guestswaiting.shift()
        console.log(">> Gest number "+ guest + " moved from wait to seat");
        setting.push(guest);
        nbSeats--;
    }
    return nbSeats--;
}

function remove(currrentGuest,guestsList :number[]): number[] {
    const index = guestsList.indexOf(currrentGuest);
    if (index > -1) {
        guestsList.splice(index, 1); 
    }
    return guestsList;
}
