class Display {
    constructor(displayValueBefore, displayValueActual) {
        this.displayValueActual = displayValueActual;
        this.displayValueBefore = displayValueBefore;
        this.calcular = new Calculator();
        this.typeOperation = undefined;
        this.valueBefore = '';
        this.valueActual = '';
        this.signs = {
            sum: '+',
            rest: '-',
            multiply: '*',
            divide: '/',
        }
    }

    delete() {
        this.valueActual = this.valueActual.toString().slice(0,-1);
        this.imprimValue();
    }

    deleteAll() {
        this.valueActual = '';
        this.valueBefore = '';
        this.typeOperation = undefined;
        this.imprimValue();
    }

    compute(type) {
        this.typeOperation !== 'equal' && this.calculate();
        this.typeOperation = type;
        this.valueBefore = this.valueActual || this.valueBefore;
        this.valueActual = '';
        this.imprimValue();
    }

    addNumber(number) {
        if(number === '.' && this.valueActual.includes('.')) return
        this.valueActual = this.valueActual.toString() + number.toString();
        this.imprimValue();
    }

    imprimValue() {
        this.displayValueActual.textContent = this.valueActual;
        this.displayValueBefore.textContent = `${this.valueBefore} ${this.signs[this.typeOperation] || ''}`;
    }

    calculate() {
       const valueBefore = parseFloat(this.valueBefore);
       const valueActual = parseFloat(this.valueActual);
        
        if(isNaN(valueActual) || isNaN(valueBefore)) return 
        console.log(this.valueBefore, this.valueActual)
        this.valueActual = this.calcular[this.typeOperation](valueBefore, valueActual);
    }
}

