<a id="readme-top"></a>
Disponibile in italiano: [IT Italiano](README.md)


<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="public/assets/cookioLogo.png" alt="Logo" width="80" height="80">

  <h3 align="center">Cookio - Delivery App - User frontend and Admin panel</h3>

  <p align="center">
    <br />
    <a href="https://user-cookio.vercel.app/">View User Demo</a>
    ·
    <a href="https://admin-cookio.vercel.app/">View Admin Demo</a>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#user-front">User Front End</a></li>
        <li><a href="#admin-front">Admin Front End</a></li>
        <li><a href="#backend">Back End</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
<a id="about-the-project"></a>
## About The Project ⭐
<a id="user-front"></a>
### User Front End
[![User Front End Screen Shot][user-frontend-screenshot]](https://user-cookio.vercel.app/)

This website is inspired by many delivery apps like Deliveroo, Just Eat, etc.
The idea originates from an imaginary food delivery service called Cookio. All the assets have been AI-generated, provided by different sources, or modified by me using Photoshop to fit my needs.

When you first enter the website, you see the header with the navbar. The navbar follows you as you scroll down, I made this decision to simplify navigation so that users can easily access the menu at any time. In the navbar, the logo is positioned in the top left, while in the center, you can switch between Home, Menu, or jump directly to the footer. In the top right, there is a cart icon and the option to register or log in. Once logged in, the login button is replaced by a user icon. When you hover over the user icon, a dropdown menu appears, allowing you to view your orders (if you've placed any) or log out.

The header image is AI-generated, and all the text has been written by me to be both visually appealing and engaging. There is also a button that takes you directly to the menu. Scrolling down, you will see a section explaining how the website works, followed by an option to install the mobile app (if available), and finally, the footer with all necessary information.

In the Menu section, you can browse and order food. You can search for dishes by category, add them using the "+" button, and remove them as needed. Everything is connected to the backend, ensuring real-time updates. If you add an item, it immediately appears in the cart along with its price.

Once you've selected everything you want to buy, you can proceed to the Cart. Here, you will see images of the selected dishes, their names, prices, quantities, total cost, and an option to remove them. The Proceed to Payment button is only activated if you have items in the cart and are logged in.

After proceeding, you are taken to another page where you enter your address, email, and phone number before completing the payment. I integrated Stripe for payments, though it is not fully set up yet. I used a dummy card provided by Stripe for testing. There are two possible outcomes:

* If the payment is rejected for any reason, you are redirected back to the homepage.
* If the payment is successful, you are taken to the Order page, where you can track your order whether it is being prepared, on its way, or has already been delivered.
Everything is connected to the Admin panel, ensuring smooth order management.

<a id="admin-front"></a>
### Admin Front End
[![Admin End Screen Shot][admin-frontend-screenshot]](https://admin-cookio.vercel.app/)

In the Admin Panel, you have full control over the menu and user orders.

Manage Menu Items:
With the first button, you can add or remove a dish from the menu. To add a new item, simply provide:

* An image of the dish
* The product name
* A brief description
* The food category
* The price
Once added, the new dish will be available in the menu for users.

View & Remove Items:
The second button displays a list of all menu items, including their details. From here, you can review the existing items and remove any dish if necessary.

Manage Orders:
The third button shows all active orders placed by users. As an admin, you can update the order status at any time, tracking its progress from preparation to delivery.

<a id="backend"></a>
### Back End

The back is made with Node.js, Express and MongoDB.
* config – Contains the database connection setup using Mongoose.
* middleware – Manages user authentication for the website.
* models – Defines all Mongoose schemas used to store data for the API.
* controllers – Handles the core business logic and interactions between the frontend and database.
* routes – Defines API endpoints and connects them to their respective controllers.
* server.js – The entry point of the backend, where the API logic is implemented and the server is started.
* uploads - Contains all the images of the foods that has been uploaded in the admin panel.

This structured approach ensures scalability, maintainability, and clean code organization.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a id="built-with"></a>
### Built With 🔨

This section shows with what I built my project, MERN is a pre-built technology stack based on JavaScript technologies. MERN stands for MongoDB, Express, React, and Node, after the four key technologies that make up the stack.

* [![React][React.js]][React-url]  
* [![Vite][Vite.js]][Vite-url]  
* [![Node.js][Node.js]][Node-url]
* [![Express.js][Express.js]][Express-url] 
* [![MongoDB][MongoDB.com]][MongoDB-url]  
* [![Stripe][Stripe.com]][Stripe-url]  

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING -->
<a id="getting-started"></a>
## Getting Started 🔢

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo in your editor
   ```sh
   git clone https://github.com/konnychiwa/Start2impact-progetto-FullStack.git
   ```
2. Open the terminal in your editor  
3. Install NPM packages in all the 3 folders
   ```sh
   cd frontend
   npm install
   ```
   ```sh
   cd ../admin
   npm install
   ```
   ```sh
   cd ../backend
   npm install
   ```
4. Set Up Environment Variables
   ```sh
   cd backend
   ```
   create a .env file inside the folder and add
   ```js
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
   Here, you should define all necessary environment variables such as:
   * the MongoDB connection string from creating a cluster at https://www.mongodb.com
   * JWT secret, is the way you want to crypt the password of the users
   * Stripe API keys by getting the API at your own dashboard at https://stripe.com
6. Run the Front end
   ```sh
   cd admin
   npm run dev
   ```
   make sure that the Front end is running at http://localhost:5174,
   by doing npm run dev in the admin before, or go in the backend folder -> controllers -> orderController.js:10
   change frontend_url with what you are using for hosting the front end
   ```sh
   cd ../frontend
   npm run dev
   ```
   ```sh
   cd ../backend
   npm run server
   ```
7. Try the application
   If you have followed everything the Front End is running at http://localhost:5174,
   the Admin panel is running at http://localhost:5173 and
   the Back End is running at http://localhost:4000.
8. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE -->
<a id="usage"></a>
## Usage ❓
### Stripe Payment
For the stripe payment, to try if it works, use this dummy card:

If you want the payment to be accepted, use the test card number 4000 0038 0000 0008, along with:
* Expiration Date: Any future date (e.g., 12/30)
* CVC: Any 3-digit number (e.g., 123)
* then you are going to be redirected to your order page

If you want the payment to be denied, use the test card number 4000 0038 0000 0002, along with:
* Expiration Date: Any future date (e.g., 12/30)
* CVC: Any 3-digit number (e.g., 123)
* then when the cart is denied you can go back and see that the order has been deleted

This are Stripe test cards and will simulate a successful/denied payment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- FEATURES -->
<a id="features"></a>
## Features 🚀

* Order food online
* Possibility to add/remove foods from the menu with a click
* Secure payment with Stripe
* Track your orders in real-time
* Beautiful UI popups with react-toastify

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- DEPENDENCIES -->
<a id="dependencies"></a>
## Dependencies 📦

[NPM](https://www.npmjs.com)

For the Front End:
* validator	`^13.12.0` Provides string validation (e.g., email format, URL validation, etc.).
* axios	`^1.7.9` HTTP client for making API requests from the frontend to the backend.
* react `^18.3.1` JavaScript library for building UI components.
* react-dom `^18.3.1` Provides React's DOM-specific methods for rendering.
* react-router-dom `^7.1.3` Enables client-side routing in React applications.
* react-toastify `^11.0.3` Displays beautiful and customizable notifications in React.

For the Back End:
* bcrypt `^5.1.1` Hashes passwords securely using the bcrypt algorithm.
* body-parser `^1.20.3` Middleware to parse incoming request bodies (JSON, URL-encoded data).
* cors `^2.8.5` Enables Cross-Origin Resource Sharing (CORS) for API access from different origins.
* dotenv `^16.4.7` Loads environment variables from a .env file.
* express `^4.21.2` A minimal and flexible Node.js framework for building APIs and web apps.
* jsonwebtoken `^9.0.2` Used for authentication via JSON Web Tokens (JWT).
* mongoose `^8.9.6` An ODM (Object Data Modeling) library for MongoDB, simplifying database interactions.
* multer `^1.4.5-lts.1` Middleware for handling file uploads in Node.js.
* nodemon `^3.1.9` Automatically restarts the server when file changes are detected (useful for development).
* stripe `^16.12.0` Handles payments securely through the Stripe API.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
<a id="contact"></a>
## Contact 📞

Pamoda Angelo Konara - angelokonara04@gmail.com

[linkedin](https://www.linkedin.com/in/pamoda-angelo-konara/)

[github](https://github.com/konnychiwa)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pamoda-angelo-konara/

[user-frontend-screenshot]: public/assets/frontend.png
[admin-frontend-screenshot]: public/assets/admin.png

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB  
[React-url]: https://reactjs.org/  
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white  
[Vite-url]: https://vitejs.dev/  
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white  
[Node-url]: https://nodejs.org/  
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white  
[Express-url]: https://expressjs.com/  
[MongoDB.com]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white  
[MongoDB-url]: https://www.mongodb.com/  
[Stripe.com]: https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white  
[Stripe-url]: https://stripe.com/  
