//* libreria uuid
const { v4: uuidv4 } = require("uuid");

let products = [];

const addProduct = (req, res) => {
  try {
    const { name, price, isAvailable } = req.body;
    // products.push(req.body)

    products.push({
      id: uuidv4(),
      name,
      price,
      isAvailable,
    });

    res.json({
      success: true,
      response: "Product add successfully!",
    });
  } catch (error) {
    res.json({
      success: false,
      response: error.message,
    });
  }
};

const getProduct = (req, res) => {
  console.log(process.env.CLAVE_SECRETA)
  try {
    const clave = req.headers.clave;
    if (clave === process.env.CLAVE_SECRETA) {
      res.json({
        success: true,
        response: products,
      });
    } else {
      throw new Error("You don't have permission to view the content.");
    }
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

const deleteProduct = (req, res) => {
  try {
    const id = req.params.productId;
    if (!products.find((product) => product.id === id)) {
      throw new Error("Product not exist!");
    } else {
      products = products.filter((product) => product.id !== id);
      res.json({ success: true, response: products });
    }
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

const editProduct = (req, res) => {
  const id = req.params.productId;
  const { name, price, isAvailable } = req.body;

  const productEdit = {
    id,
    name,
    price,
    isAvailable,
  };

  products = products.map((product) => {
    if (product.id === id) {
      return productEdit;
    } else {
      return product;
    }
  });

  res.json({ success: true, response: products });
};

module.exports = { addProduct, getProduct, deleteProduct, editProduct };
