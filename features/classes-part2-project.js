class BankAccount{
    constructor(balance){
        this.balance=typeof(balance) === 'number' ? balance : 0;
    }

    set balance(val){
        this._balance=val;
        this.balance_updated_at=new Date();
    }

    get balance(){
        return this._balance;
    }

    deposit(amount){
        this.amount=typeof(amount) === 'number' ? amount : 0;
        this.balance += this.amount;
    }

    withdrawal(amount){
        this.amount=typeof(amount) === 'number' ? amount : 0;
        if(this.balance < this.amount){
            console.log('Sorry you dont have sufficient funds..Transaction failed');
        }
        else{
            this.balance -= this.amount;
        }
    }

    printBalance(){
        console.log(`Your current balance: $ ${this.balance}
last updated at: ${this.balance_updated_at}`);
    }
}

var account=new BankAccount(100);
account.deposit(100);
account.printBalance();
account.withdrawal(10);
account.printBalance();

var account2=new BankAccount('asdfadsf');
account2.deposit('gibberish');
account2.withdrawal(true);
account2.printBalance();