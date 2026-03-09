import { validate } from "bycontract"

export class FuelType{

    static fuelTypes = ["ALCOOL", "GASOLINA", "GNV"]

    static verifyFuel(unknownFuel){
        validate(unknownFuel, "string")
        unknownFuel = unknownFuel.toUpperCase()
        return FuelType.fuelTypes.includes(unknownFuel);
    }
}

// testing

let foo = FuelType;

console.log(foo.verifyFuel("etanol"))