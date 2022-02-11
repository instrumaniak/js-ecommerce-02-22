const connectToDB = require("./connect");
const ProductModel = require("../modules/product/product.model");

connectToDB();

const productsData = [
  {
    name: "Wireless Headphone",
    description: "Standard wireless headphone",
    imageUrl: "/assets/products01-headphone.jpg",
  },
  {
    name: "Sunglass",
    description: "Stylist minimal sunglass",
    imageUrl: "/assets/products03-sunglass.jpg",
  },
  {
    name: "Headphone",
    description: "Standard wired headphone",
    imageUrl: "/assets/products05-headphone2.jpg",
  },
  {
    name: "Joystick",
    description: "High performance joystick",
    imageUrl: "/assets/products07-joystick.jpg",
  },
  {
    name: "Earpods",
    description: "Premium quality earpods",
    imageUrl: "/assets/products09-earpod.jpg",
  },
  {
    name: "Watch",
    description: "Premium white color watch",
    imageUrl: "/assets/products02-watch.jpg",
  },
  {
    name: "Watch",
    description: "Standard black watch",
    imageUrl: "/assets/products04-watch2.jpg",
  },
  {
    name: "DSLR camera",
    description: "DSLR camera",
    imageUrl: "/assets/products06-camera.jpg",
  },
  {
    name: "Backpack",
    description: "Comfortable backpack",
    imageUrl: "/assets/products08-backpack.jpg",
  },
  {
    name: "Mechanical keyboard",
    description: "High quality premium, ultra comfortable mechanical keyboard",
    imageUrl: "/assets/products10-mechanical-keyboard.jpg",
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
