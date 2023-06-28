# URL-Shortener and Search Optimization
**Overview about files:-**
1. server.js -  main server file
2. schema.js - contains the schema for MongoDB collection
3. dbConnect.js - contains function to connect to MongoDB
4. public : style.css - stylesheet
5. views : contains the files for frontend - index.ejs, header.ejs, layout.ejs, search-results.ejs.

__**How to run:-**__

I made the project in VS code which contains many snippets and extensions. But you can run in any compiler.
Modules required are -
1. NodeJS
2. mongoose
3. express
4. ejs
5. express-ejs-layout
6. dotenv
7. bootstrap

In addition to this you will require a .env file which ins not included in this respository that contains the MongoDB URI, I used local URI for this project.
Once the modules are installed simply run the server.js file and go to localhost:5000 in your browser which will open the website.

**Salient feature of this project**

Top 2 which are compulsory for this project
1. Shortening the long URLs.
2. Search functionality which searches a given text through the URLs and notes.
Other implemented unique features
3. Custom URL name - Instead of using nanoid/shortid for generating shortened link, this porject us
4. Good UI - If not one of the best, I try to make UI better than average of what I have seen in the Internet.
5. Alert/Success message - Alert message for any error by the client side and Success message for successful shortening of URL.
6. Dedicated copy button just after the shortened URL so user doesn't need to select the whole by mouse.
7. Search Results - It shows all URLs, whether shortened or original and keywords which has searched text in it.
