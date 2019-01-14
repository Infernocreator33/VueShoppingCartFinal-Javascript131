
var app = new Vue({
    el:"#app", 
    data: {
            games: [
                {gameId: 0, name: "Ratchet & Clank", message: "", price: 19.75, quantity: 7, ordered: 0,dateFirstMade: "November 2, 2004", dateLastMade: "April 13, 2016", imgSrc: "Ratchet&Clank.jpg", subtotal: 0},
                {gameId: 1, name: "Jak and Daxter", message: "",price: 22.25, quantity: 15, ordered: 0,dateFirstMade: "December 3, 2001", dateLastMade: "December 6, 2018", imgSrc: "Jak&Daxter.png", subtotal: 0},
                {gameId: 2, name: "Spyro", message: "", price: 32.75, quantity: 20, ordered: 0,dateFirstMade: "November 5, 2002", dateLastMade: "November 13, 2018", imgSrc: "Spyro.jpg", subtotal: 0}
            ],
            cartItems:[],
            itemSelected: "None",
            numItems: 0,
            totalPrice: 0.00, 
        }, 
    methods: {
        AddItem(game)
        {   

            game.quantity--;
            game.ordered++;
            game.subtotal = game.ordered * game.price;
            console.log("Added " + game.name + " Price: $" + game.price + " Amount Ordered : " + game.ordered);
            this.itemSelected = "Added " + game.name;
            this.cartItems.push(game.name + "         Price: $" + game.price + "             Amount Ordered: " + game.ordered);
            this.numItems++;
            this.totalPrice += game.price;
            if(game.quantity == 0)
            {
                game.message = "Out of Stock!";
            }
            console.log(game.subtotal);
            console.log(this.totalPrice);
        }, 
        removeThis(game)
        {
            var index = this.cartItems.indexOf(game);
            this.cartItems.splice(index,1);
            this.itemSelected = "Removed " + game.name;
            console.log("removed " + game.name);
            game.ordered--;
            game.quantity++;
            game.subtotal = game.ordered * game.price;
            this.totalPrice = this.totalPrice - game.price;
            this.numItems--;   
            if(game.quantity > 0)
            {
                game.message = "";
            }
            console.log(game.subtotal);
            console.log("removed $" + game.price + " from the total price");
            console.log("Total Price: $" + this.totalPrice);
        }
    }
});