# URL-Shortener and Search Optimization
**Overview about files:-**
1. server.js -  main server file
2. schema.js - contains the schema for MongoDB collection
3. dbConnect.js - contains function to connect to MongoDB
4. public : style.css - stylesheet
5. views : contains the files for frontend - index.ejs, header.ejs, layout.ejs, search-results.ejs.

# How to run:-

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

# Salient feature of this project

Top 2 which are compulsory, 3-7 are special features:- 
1. Shortening the long URLs.
2. Search functionality which searches a given text through the URLs and notes.
3. Custom URL name - Instead of using nanoid/shortid for generating shortened link, this project generate user defined custom URL which is easier for them to remember.

![Screenshot (122)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/f0e97465-5d56-417e-9bf2-0d9e8b7657bf)

4. Good UI - If not one of the best, I tried to make UI better than average of what I have seen in the Internet.

![screencapture-localhost-5000-2023-06-28-22_17_12](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/51d2597f-ed0c-4f41-acc4-eedf1cd818ee)

  
5. Alert/Success message - Alert message for any error by the client side and Success message for successful shortening of URL.

![Screenshot (124)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/a3491ed9-33b9-4b72-b38c-fc3d1ffe08ff)
![Screenshot (125)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/a3f27881-e0db-4b32-b849-65633cf4e4e8)
![Screenshot (123)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/fae1c117-e082-49bd-b7b5-df327864cc4c)

6. Dedicated copy button just after the shortened URL so user doesn't need to select the whole by mouse.
7. Search Results - It shows all URLs, whether shortened or original and keywords which has searched text in it.
   
![Screenshot (126)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/e430143f-d2c5-4d03-a31d-9eca03bf0db7)


# Internal Working of the project:-

First I installed all the required solftwares and packages. For API testing , I used Insomnia Tool which is available free of cost. As I said above I used VS code for writing my code.

For managing database I used MongoDB compass, as I have connected to local bdatabase only.

The schema of my collection have following:
1. name : custom name input by user.
2. originalUrl : original long url of the website
3. shortUrl : shortened url
4. keywords : important words describing the website.
Type of all are String and required : true.

**Generation of Shortened Link->**

The basic appraoch for the generation of shortened url is take the user's input of custom name and check whether it is available in the database, as I set customurl to be unique. If it is found, then request the user to input different name and no need change if it isnt. Then we would create shortened url by adding that name to host. 

![Screenshot (119)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/66988102-db68-419d-a6c9-8a5dc9f0b1ab)


For example, if host is http://localhost:3000 and name is 'my_website' then shortened url will be http://localhost:3000/my_website.

Then the whole data is added to the MongoDB collection using Mongoose library.

![Screenshot (120)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/d554d34f-63a8-4383-8580-7e6b9457d571)


Now if the user render to the shortened url, we make a request to the server to find the name after the host in this shortened url in the database, if it is present then it will render user to the orginal link  and if it is not , then we will send an error that this url is not found.
![Screenshot (117)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/dfd83047-1e7d-499c-9caa-41a277132a9a)


**Search Functionality**

For searching, I take the search query from the user input and simply used 'Find' operation in the MongoDB collection and find whether the given query is found in any of the custom name, url or keywords.

![Screenshot (116)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/75be1370-d273-4cdd-af2b-d88e56249111)


If found, we would add the results to searchResults list and further work will be done by frontend in search-results.ejs where no results will be displayed if length of list is zero and using foreach loop we would display the results to the user.

![Screenshot (115)](https://github.com/Mohit7076A/URL-Shortener/assets/98163995/30953b45-92b7-44fe-b6fe-d35c25a9d419)

# Resources/References:-

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

The custom url idea is inspired from this youtube channel - https://www.youtube.com/@fullyworldwebtutorials/featured

Manytimes I ran through errors, which I solved from StackOverflow, github and ChatGPT.


# Conclusion and learning takeaways:-

A simple website was made through NodeJS , MongoDB, EJS, HTML and CSS. This website could be improved by hosting , making UI better , etc. but overall it is still responsive and working perfect. 

Before this project, I only knew some basic HTML and CSS, and a bit of Javascript(variables and loops). I learned whole new consepts for making backends of a website and linking it with database and the frontend. About database, MongoDB is the next thing I learned which I find easy to use than MySQL. NodeJS was also a new word for me, but I now I know basics of NodeJS and express JS. I want to further increase my learninng by building more of such projects and learning new things which would be related to those.

I hope you would like this project. Thanks for watching 😊...
