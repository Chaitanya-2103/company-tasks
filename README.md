# company-tasks

To See Code please go to master branch

# Order Management System

## Overview
A backend application simulating an Order Management System with dynamic discount logic.

### Features:
- Place an order with dynamic discount logic.
- Retrieve an order summary by ID.
- Calculate total revenue from all orders.

## Setup Instructions

1. Clone the repository:
    repo link : https://github.com/Chaitanya-2103/company-tasks.git


# Apis :

   1. http://localhost:3000/api/create-order

       *Method : POST 
       *Description : to create order
      
       *payload : {
                      "ProductName":"ABC",
                      "quantity":2,
                      "pricePerUnit":100
                  }


      *Response : {
                      "id": 3,
                      "quantity": 2,
                      "pricePerUnit": 100,
                      "totalPrice": 200,
                      "SellingPrice": 200,
                      "discount": 0,
                      "timestamp": "2024-12-23T02:14:59.515Z"
                  }



  3. http://localhost:3000/api/get-order/3
     
        *Method : GET
        *Description : to get order details using id
        
        *Response :{
                      "id": 3,
                      "quantity": 2,
                      "pricePerUnit": 100,
                      "totalPrice": 200,
                      "SellingPrice": 200,
                      "discount": 0,
                      "timestamp": "2024-12-23T02:14:59.515Z"
                  }


       
  5. http://localhost:3000/api/total-revenue
     
        *Method : GET
        *Description : To get total revenue 
        Response : {
                    "totalRevenue": 40200
                   }
