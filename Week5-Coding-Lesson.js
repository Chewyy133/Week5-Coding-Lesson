class IceCream {
    constructor(flavor) {
        this.flavor = flavor;
    }

    describe() {
        return `${this.flavor} goes ${this.cone}.`;
    }
}

class Shop {
    constructor(name) {
        this.name = name;
        this.flavors = [];
    }

    addFlavor(flavor) {
        if (flavor instanceof IceCream) {
            this.flavors.push(flavor);
        } else {
            throw new Error(`You can only add an instance of IceCream. Argument is not a player: ${flavor}`);
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
                    this.chooseShop();
                    break;
                case '2':
                    this.viewShop();
                    break;
                case '3':
                    this.deleteShop();
                    break;
                case '4':
                    this.displayShops();
                    break;
                default:
                    selection = 0                
            }
            selection = this.showMainMenuOptions();
        }

        alert('Error, try again!');
    }

    showMainMenuOptions() {
        return prompt (`
        0) exit
        1) choose new shop name
        2) view shop names selected
        3) delete a shop name
        4) display all the shop names
        `);
    }

    showShopMenuOptions(shopInfo) {
        return prompt (`
        0) back
        1) create flavor
        2) delete flavor
        ---------------------
        ${shopInfo}
        `);
    }

    displayShops() {
        let nameString = '';
        for (let i = 0; i < this.shops.length; i++) {
          nameString += i + ') ' + this.shops[i].name + '\n';
        }
        alert(nameString);
    }

    createShop() {
        let name = prompt('Enter name of shop you want ice cream from:');
        this.shops.push(new Shop(name));
    }

    viewShop() {
        let index = prompt('Enter the index of the shop you want to go to:');
        if (index > -1 && index < this.shops.length) {
            this.selectedShop = this.name[index];
            let description = 'Shop Name: ' + this.selectedShop.name + '\n';
            
            for(let i = 0; i < this.selectedShop.shops.length; i++) {
                description += i + ') ' + this.selectedShop.shops[i].name + ' - ' + this.selectedShop.shops[i].flavors + '\n';
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
}

let menu = new Menu ();
menu.start();