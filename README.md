Foodstuck
Q-commerce Food Delivery

Start Project
Initialization


## Installation

Set Up Next.js project

Initialize with "npm create-next-app"
  
```
    Install Dependencies
    1)Tailwind CSS
    2)ShipEngine API
    3)Mock API
    4)Sanity Client Libraries
    5)React Icons (for icons)
    6)React Toastify (for notifications)
    7)React Hook Form (for forms)

    Configure Tailwind CSS
    1)Setup Tailwind in Nextjs project
    2)Define Theme Colors


    Setup Sanity CMS 
    .Create schemas for Food Produts and Orders
    **product schema**
    {
    "productid":"string"
    "name":"string"
    "description":"string"
    "price":"number"
    "category":"string"
    "imageUrl":"string"
    "stock":"number"
    "sizes":["small" "large"]
    }
    **Order schema**
    "orderid":"string"
    "customerId":"string"
    "customerName":"string"
    "customerLocation":"string"
    "items":[
        "productid":"string"
        "quantity":"number"
        "size":"string"
    ]
    "totalAmount":"number"
    "paymentStatus":"string"
    "shippingStatus":"string"
    "createdAt":"date"

    Build User Authentication
    .Implement registration and login using
    NextAuth.js

    Develop Homepage
    .Display featured food products and categories
    .Includes search functionality to filter products
    based on categories,ingredients,and price

    Create Produt Page
    .Shows detailed information for each food items
    .Includes product name, price,ingredients,description,stock status and high quality images

Implement Cart functionality
.Users can add, remove and modify items
.The cart persists user selections until checkout

Develop Checkout Process
.Collect user information and payment detail 
.User Authentication,shipping address,order confirmation

Implement Order History
.Customers can view their past Orders
.Includes products purchased, order total, and status

API Endpoints
.GET/api/products:Retrieve a list of products
.GET/api/products/[id]:Retrieve product detail
.POST/api/order:Place a order
.GET/api/orders/[id]:Retrieve order details
.GET/api/users/[id]:Retrieve user profile info
.PATCH/api/products/[id]:Update product stock
.Decrease stock when a purchase is made

User Roles
*Admin*
.Manages the product cataloge (add,update,delete products)
.Views customer orders and manages order status
.Manages user accounts (e.g deactivate or update user details)
*Customer*
.Browses products ,manages the cart and places orders
.Manages personal profile, views past orders and tracks current order status

Additional Pages 
.About Us
.Contact Us 
.Checkout
.FAQS
.Shopping Cart
.Terms&Conditions
.Help Center
.User profile
.Order Tracking



## Deployment
**Platforms**
.Vercel for Next.js deployment
**Steps**
1.Push the code to your GitHub repositry
2.Connect the GitHub repositry to Vercel for automated deployment
3.Set uo enviroment variables on the Vercel dashboard
(Sanity_Project_ID)




Future Improvements
.User Reviews and Ratings: Allow customers to rate and review products
.Enchanced Search Functionality: Implement full-text search with filtering by price range, ingredients and customer ratings 

Conculusion
.This project provides an efficient and scalable platform for selling food
.The use of Next.js and Sanity CMS ensures fast performance,easy content managment and a rich user experience

          End Project
