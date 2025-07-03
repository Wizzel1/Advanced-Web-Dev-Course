import { Command } from 'commander';

interface TaxStrategy {
    calculateTax(income: number): number;
}


class NoTaxStrategy implements TaxStrategy {
    calculateTax(income: number): number {
        return 0;
    }
}

class FlatTaxStrategy implements TaxStrategy {
    calculateTax(income: number): number {
        return income * 0.1;
    }
}

class ProgressiveTaxStrategy implements TaxStrategy {
    calculateTax(income: number): number {
        return income * 0.2;
    }
}

class TaxCalculator {
    private strategy: TaxStrategy;
    constructor(strategy: TaxStrategy) {
        this.strategy = strategy;
    }

    calculateTax(income: number): number {
        return this.strategy.calculateTax(income);
    }
}

const program = new Command();

program
  .name('TaxCalculator')
  .description('Welcome to your personal tax calculator')
  .version('1.0.0');

program
  .command('calculate')
  .description('Calculate your tax')
  .argument('<strategy>', 'Strategy: flat, progressive, no')
  .argument('<income>', 'Your income')
  .action((strategy, income) => {
    let calculator = new TaxCalculator(new FlatTaxStrategy());
    if (strategy === 'flat') {
      calculator = new TaxCalculator(new FlatTaxStrategy());
    } else if (strategy === 'progressive') {
      calculator = new TaxCalculator(new ProgressiveTaxStrategy());
    } else if (strategy === 'no') {
      calculator = new TaxCalculator(new NoTaxStrategy());
    }
    console.log(calculator.calculateTax(income));
  });

program.parse(process.argv);

//run "npm run cli:strategy [strategy] [income]" to test the strategy pattern