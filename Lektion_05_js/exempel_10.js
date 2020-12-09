        /**
         * Objektet String
         **/
        let myName = "Marcus Ljungqvist";
        console.log(myName);
        console.log(myName.length);
        console.log(myName.length);
        console.log(myName.toUpperCase());
        console.log(myName.toLowerCase());
        console.log("Förnamn: " + myName.substring(0,6));
        
        let space = myName.indexOf(" ");
        console.log("första space ligger på plats nummer " + space);
        console.log("Efternamn: " + myName.substring(space+1));
        //konvertera en sträng till en array
        console.log(myName.split(" "));

        /**
         * Objektet Number
         */

         let pi = 3.14159;
         console.log(pi);
         console.log(pi.toFixed(2)); //visar 2 decimaler
         console.log(pi.toFixed(3)); //visar 3 decimaler avrundat uppåt
         console.log(pi.toPrecision(3)) //visar 3 tal

         /**
          * Objektet Math
          */

        console.log(Math.PI);
        console.log(Math.round(2.1)); //avrundat nedåt
        console.log(Math.round(2.5)); //avrundat uppåt

        console.log(Math.pow(2,5));
        console.log(Math.pow(3,5));


        console.log(Math.sqrt(16));
        console.log(Math.min(5,2));
        console.log(Math.max(7,2));

        console.log(Math.round(Math.random() * 10 + 1) ); //slumptal mellan 1 och 10
        
        /**
         * Objektet Date
         */
        let datum = new Date();
        console.log(datum);

        console.log(Date());
        console.log(datum.getFullYear());
        console.log(datum.getHours());
        console.log(datum.getMonth()); //11 (december) 0-11
        console.log(datum.getDate());  //(1-31)
        console.log(datum.getDay());   //(0-6) söndag är 0, måndag är 1...
        console.log(datum.getMinutes());
        console.log(datum.toLocaleTimeString());
        console.log(datum.toLocaleDateString());