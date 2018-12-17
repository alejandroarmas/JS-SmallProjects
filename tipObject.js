var B_FIFTY = 0.20, //tax rate if total is below $50
    B_TWOHUNID = 0.15, //between $50 and $200
    REG = 0.10; //exceeding $200


var johnBills = {
    og: [124, 48, 268, 180, 42],
    
    tip: function () {

        var total = [];
        var tax;

        for (var i = 0; i < this.og.length; i++) {

            if (this.og[i] < 50) {
                tax = B_FIFTY;
            }
            else if (this.og[i] < 200) {
                tax = B_TWOHUNID;
            }
            else tax = REG;

            total.push(this.og[i] + this.og[i]*tax);
        }
        return total;
    }
};

console.log(johnBills.tip());
