const connectToDB = require("./connect");
const ProductModel = require("../modules/product/product.model");

connectToDB();

const productsData = [
  {
    name: "Wireless Headphone",
    description: "Standard wireless headphone",
    imageUrl: "/products/01-headphone.jpg",
  },
  {
    name: "Sunglass",
    description: "Stylist minimal sunglass",
    imageUrl: "/products/03-sunglass.jpg",
  },
  {
    name: "Headphone",
    description: "Standard wired headphone",
    imageUrl: "/products/05-headphone2.jpg",
  },
  {
    name: "Joystick",
    description: "High performance joystick",
    imageUrl: "/products/07-joystick.jpg",
  },
  {
    name: "Earpods",
    description: "Premium quality earpods",
    imageUrl: "/products/09-earpod.jpg",
  },
  {
    name: "Watch",
    description: "Premium white color watch",
    imageUrl: "/products/02-watch.jpg",
  },
  {
    name: "Watch",
    description: "Standard black watch",
    imageUrl: "/products/04-watch2.jpg",
  },
  {
    name: "DSLR camera",
    description: "DSLR camera",
    imageUrl: "/products/06-camera.jpg",
  },
  {
    name: "Backpack",
    description: "Comfortable backpack",
    imageUrl: "/products/08-backpack.jpg",
  },
  {
    name: "Mechanical keyboard",
    description: "High quality premium, ultra comfortable mechanical keyboard",
    imageUrl: "/products/10-mechanical-keyboard.jpg",
  },
];

function seedProducts() {
  ProductModel.insertMany(productsData, function (error) {
    if (error) {
      console.log(error);
      process.exit(1);
    } else {
      console.log("Products data seeding: done.");
      process.exit(0);
    }
  });
}

seedProducts();
