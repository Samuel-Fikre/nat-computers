import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/products";

export default async function handler(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;

  if (!ids || ids.length === 0) {
    return res.status(400).json({ error: "No product IDs provided" });
  }

  try {
    const products = await Product.find({ _id: { $in: ids } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching products" });
  }
}
