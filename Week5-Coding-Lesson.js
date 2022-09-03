class Icecream {
    constructor(flavor) {
        this.flavor = flavor;
    }

    describe() {
        return `${this.flavor}.`;
    }
}

class Shop {
    constructor(name) {
        this.name = name;
        this.flavors = [];
    }

    addFlavor(flavor) {
        if (flavor instanceof Icecream) {
            this.flavors.push(flavor);
        } else {
            throw new Error(`You can only add an instance of Icecream. Argument is not a player: ${flavor}`);
        }
    }

    describe() {
        return `${this.name} has ${this.flavors.length} flavors.`;
    }
}

class Menu {
    constructor() {
        this.shops = [];
        this.selectedShop = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createShop();
                    break;
                case '2':
                    this.viewShop();
                    break;
                case '3':
                    this.deleteShop();
                    break;
                case '4':
                    this.displayShop();
                    break;
                default:
                    selection = 0                
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt (`
        0) Exit
        1) Choose ice cream shop
        2) View ice cream shops selected
        3) Delete an ice cream shop 
        4) Display all the ice cream shops
        `);
    }

    showShopMenuOptions(shopInfo) {
        return prompt (`
        0) Back
        1) Create flavor
        2) Delete flavor
        ---------------------
        ${shopInfo}
        `);
    }

    displayShop() {
        let shopString = '';
        for (let i = 0; i < this.shops.length; i++) {
          shopString += i + ') ' + this.shops[i].name + '\n';
        }
        alert(shopString);
    }

    createShop() {
        let name = prompt('Enter name of a shop you want ice cream from:');
        this.shops.push(new Shop(name));
    }

    viewShop() {
        let index = prompt('Enter the index of the shop you want to go to:');
        if (index > -1 && index < this.shops.length) {
            this.selectedShop = this.shops[index];
            let description = 'Ice Cream Shop Name: ' + this.selectedShop.name + '\n';
            
            for(let i = 0; i < this.selectedShop.flavors.length; i++) {
                description += i + ') ' + this.selectedShop.flavors[i].flavor + '\n';
            }

            let selection = this.showShopMenuOptions(description)
            switch (selection) {
                case '1':
                    this.createFlavor();
                    break;
                case '2':
                    this.deleteFlavor();    
            }
        }
    }

    deleteShop() {
        let index = prompt('Enter the index of the shop you want to delete:');
        if (index > -1 && index < this.shops.length) {
            this.shops.splice(index, 1);
        }
    }

    createFlavor() {
        let flavor = prompt('Enter name of new flavor:');
        this.selectedShop.flavors.push(new Icecream(flavor));
    }

    deleteFlavor() {
        let index = prompt('Enter the index of the flavor you wish to delete:');
        if (index > -1 && index < this.selectedShop.flavors.length) {
            this.selectedShop.flavors.splice(index, 1);
        }
    }
}

let menu = new Menu ();
menu.start();