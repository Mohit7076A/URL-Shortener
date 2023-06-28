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

In addition to this you will require a .env file which is not included in this respository that contains the MongoDB URI, I used local URI for this project.
Once the modules are installed simply run the server.js file and go to localhost:5000 in your browser which will open the website.

**Salient feature of this project**

Top 2 which are compulsory, 3-7 are special features:- 
1. Shortening the long URLs.
2. Search functionality which searches a given text through the URLs and notes.
3. Custom URL name - Instead of using nanoid/shortid for generating shortened link, this project generate user defined custom URL which is easier for them to remember.
4. Good UI - If not one of the best, I tried to make UI better than average of what I have seen in the Internet.
5. Alert/Success message - Alert message for any error by the client side and Success message for successful shortening of URL.
6. Dedicated copy button just after the shortened URL so user doesn't need to select the whole by mouse.
7. Search Results - It shows all URLs, whether shortened or original and keywords which has searched text in it.


**Internal Working of the project:-**

**Resources/References:-**

Our mentors provided this 5-day plan after session-1 -

*Day 0: Introduction to Web Development HTML & CSS*
- Introduction to Web Development https://youtu.be/l1EssrLxt7E

*Day 1: HTML and CSS*
- Crash Course https://youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G
- CSS Full Course(Optional) https://www.youtube.com/watch?v=yfoY53QXEnI
- HTML Full Course(Optional) https://www.youtube.com/watch?v=pQN-pnXPaVg

*Day 2: JavaScript Basics*
- JavaScript Basics https://youtu.be/W6NZfCO5SIk
- JavaScript Full Course (Optional) https://www.youtube.com/watch?v=PkZNo7MFNFg

*Day 3: Node.js and Express EJS Basics*
- NodeJS Basics https://youtu.be/TlB_eWDSMt4
- ExpressJS Basics https://youtu.be/SccSCuHhOw0
- EJS Basics https://youtu.be/VM-2xSaDxJc
- NodeJS & Express Full Course (Optional) https://youtu.be/Oe421EPjeBE

*Day 4: MongoDB and Project Setup*
- MongoDB Basics check out the setup all others optional https://youtu.be/oSIv-E60NiU
- Mongoose Basics https://youtu.be/DZBGEVgL2eE

*Day 5: Revision from Day 1-4(MERN Stack) go through for react part*
- MERN Stack(MongoDB, Express, React, NodeJS) https://youtu.be/7CqJlxBYj-M

Additionally following library's documentations - MongoDB, freecodecamp, NodeJS, bootstrap.

The custom url idea is inspired from this youttube channel - https://www.youtube.com/@fullyworldwebtutorials/featured

Manytimes I ran through errors, which I solved from StackOverflow, github and ChatGPT.


**Conclusion and learning takeaways:-**

A simple website was made through NodeJS , MongoDB, EJS, HTML and CSS. This website could be improved by hosting , making UI better , etc. but overall it is still responsive and working perfect. 

Before this project, I only knew some basic HTML and CSS, and a bit of Javascript(variables and loops). I learned whole new consepts for making backends of a website and linking it with database and the frontend. About database, MongoDB is the next thing I learned which I find easy to use than MySQL. NodeJS was also a new word for me, but I now I know basics of NodeJS and express JS. I want to furthur increase my learninng by building more of such projects and learning new things which would be related to those.

I hope you would like this project. Thanks for watching 😊...
