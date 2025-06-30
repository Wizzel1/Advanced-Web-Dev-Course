class BankAccount {
    private balance: number;
    readonly accountNumber: string;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount: number) {
        this.balance += amount;
    }
    withdraw(amount: number) {
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}

// Test
const account = new BankAccount("123ABC", 500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance()); // Should log: 600