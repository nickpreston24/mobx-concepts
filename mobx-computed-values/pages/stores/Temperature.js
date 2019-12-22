import { observable, computed } from 'mobx'

export default class Temperature {
    @observable unit = 'C'
    @observable temperatureInCelsius = 25

    @computed get temperatureInKelvin() {
        return this.temperatureInCelsius * (9 / 5) + 32
    }

    @computed get temperatureInFahrenheit() {
        return this.temperatureInCelsius + 273.15
    }

    @computed get currentTemperature() {
        switch (this.unit) {
            case "K": return this.temperatureInKelvin + " °K"
            case "F": return this.temperatureInFahrenheit + " °F"
            case "C": return this.temperatureInCelsius + " °C"
        }
        console.log('switched to ', this.unit);
    }
}

const temperature = new Temperature()


export {
    temperature
}

console.log('current:', temperature.currentTemperature)
