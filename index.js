const express = require('express')
const app = express()
const port = 3000
const bodyparser=require('body-parser')

app.use(bodyparser.json())



let orders=[];
let id=1;

app.get('/', (req, res) => res.send('Welcome ...!'))


// API FOR CREATE ORDER 
app.post('/api/create-order',(req,res)=>{
  
    const { productName, quantity, pricePerUnit } = req.body;

    // Calculate total price
    let totalPrice = quantity * pricePerUnit;
    let discount = 0;

    // Apply discount using price
    if (totalPrice > 10000) discount += totalPrice * 0.1;

    // Apply discount using quantity
    if (quantity > 5) discount += 500;

    const SellingPrice = totalPrice - discount;

    const order = {
        id: id++,
        productName,
        quantity,
        pricePerUnit,
        totalPrice,
        SellingPrice,
        discount,
        timestamp: new Date().toISOString(),
    };
    orders.push(order);

    res.status(201).json(order);
});


// GET ORDER DETAILS
app.get('/api/get-order/:id', (req, res) => {
    const { id } = req.params;
    const order = orders.find(o => o.id === parseInt(id));

    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
});



// TO CALCULATE TOTAL REVENUE
app.get('/api/total-revenue', (req, res) => {
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);
    res.json({ totalRevenue });
});







app.listen(port, () => console.log(`Example app listening on port ${port}!`))