class IceCream {
    constructor(flavor, cone) {
        this.flavor = flavor;
        this.cone = cone;
    }

    describe() {
        return `${this.flavor} goes ${this.cone}.`;
    }
}

