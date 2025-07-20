
class Customer {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.orders = [];
  }
  createOrder(driver, transporter, order) {
    driver.transporters.push(transporter);
    transporter.drivers.push(driver);
    console.log(`Order : ${this.name} wants to ${order} at ${this.location}.`);
    console.log(
      `Driver ${driver.name} set off with his transporter ${transporter.name} from location ${transporter.location} to location ${this.location}.  `
    );
    this.orders.push(
      `Order : ${this.name} wants to ${order} at ${this.location}. Driver ${driver.name} set off with his transporter ${transporter.name} from location ${transporter.location} to location ${this.location}.`
    );
  }
}
module.exports = Customer;
