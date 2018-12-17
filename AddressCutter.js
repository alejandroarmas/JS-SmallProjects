var Getter = {
    address: "2700 E Leland Rd, Pittsburg, CA 94565",

    city: function () {
        var string = '';
        var flag = -1;
     
        for (var i = 0; i < this.address.length; i++) {
            (this.address.charAt(i) == ',') && (flag *= -1);

            (flag > 0 && this.address.charAt(i) != ' ' &&
                this.address.charAt(i) != ',') && 
                (string += this.address.charAt(i));
        }
        return string;

    },

    street: function () {
        var count = 0;
        var flag = true;

        for (var i = 0; i < this.address.length; i++) {
            (this.address.charAt(i) == ',') && (flag = false);
            (flag) && (count++);
        }
        return this.address.substr(0, count);
    },
    zip: function () {
        var size = this.address.length;
        return this.address.substr(size - 5, size);
    }

}; 

console.log("The Street is: " + Getter.street());

console.log("The City is: " + Getter.city());

console.log("The Zip Code is: " + Getter.zip());
