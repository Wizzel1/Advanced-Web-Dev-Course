class Broker {
    id: number;
    constructor(id: number){
        this.id = id;
    }
   
    update(stock: string, price: number) {
        console.log(`Broker ${this.id} received update for ${stock}: ${price}`);
    }
}

type Unsubscribe = () => void;
class StockTicker {
    private brokers: Broker[] = [];

    subscribe(broker: Broker): Unsubscribe {
        this.brokers.push(broker);
        return () => this.unsubscribe(broker.id);
    }
 
    private unsubscribe(brokerId: number) {
        console.log(`Broker ${brokerId} unsubscribed`);
        this.brokers = this.brokers.filter(b => b.id !== brokerId);
    }

    emit(stock: string, price: number) {
        this.brokers.forEach(broker => broker.update(stock, price));
    }
}

const ticker = new StockTicker();
const unsub1 = ticker.subscribe(new Broker(1));
const unsub2 = ticker.subscribe(new Broker(2));
ticker.emit("AAPL", 150);
ticker.emit("AAPL", 151);
unsub1();
ticker.emit("AAPL", 152);


