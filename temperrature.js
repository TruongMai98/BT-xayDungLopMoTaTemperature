function Temperrature(celsius) {
    this.celsius = celsius;
    this.celsiusToKenvin = function () {
        return celsius + 273.15;
    }
    this.celsiusToFahrenheit = function () {
        return celsius * 1.8 + 32;
    }
}
let temp1 = new Temperrature(1);
alert(temp1.celsius + " do C = " + temp1.celsiusToFahrenheit() + " do F");
alert(temp1.celsius + " do C = " + temp1.celsiusToKenvin() + " do K");