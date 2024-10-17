// Product class representing the order
class Order {
  client: string;
  items: string[] = [];
  address: string;

  showOrder(): void {
    console.log(`Pedido para ${this.client}, productos: ${this.items.join(", ")}, dirección: ${this.address}`); 
  }
}

// Builder interface for constructing an Order
interface OrderBuilder {
  setClient(client: string): OrderBuilder;
  addItem(item: string): OrderBuilder;
  setAddress(address: string): OrderBuilder;
  getOrder(): Order;
}

// Concrete builder for standard orders
class StandardOrderBuilder implements OrderBuilder {
  private order: Order = new Order();

  setClient(client: string): OrderBuilder {
    this.order.client = client;
    return this;
  }

  addItem(item: string): OrderBuilder {
    this.order.items.push(item);
    return this;
  }

  setAddress(address: string): OrderBuilder {
    this.order.address = address;
    return this;
  }

  getOrder(): Order {
    return this.order;
  }
}

// Director class to manage the building process
class OrderManager {
  private builder: OrderBuilder;

  constructor(builder: OrderBuilder) {
    this.builder = builder;
  }

  constructOrder(client: string, items: string[], address: string): Order {
    this.builder.setClient(client).setAddress(address);
    items.forEach(item => this.builder.addItem(item));
    return this.builder.getOrder();
  }
}

// Usage
const orderBuilder = new StandardOrderBuilder();
const orderManager = new OrderManager(orderBuilder);

const order = orderManager.constructOrder("Carlos", ["Pizza", "Refresco"], "Calle 45");
order.showOrder(); 
