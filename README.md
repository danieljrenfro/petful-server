# Petful Server

### Back end server for the Petful App.

[Live app](https://petful-server-danielrenfro.herokuapp.com/)
-
[Client repo](https://github.com/danieljrenfro/petful-client)

---

### Adopt a pet

Petful is an app for an animal shelter to allow the adoption of cats and dogs. The animal shelter shelter would prioritize giving homes to animals who had been there the longest to people who had been waiting the longest to adopt a pet. 

When you join the queue of the adoption line, you'll wait until you are first in line to adopt your new pet.

When you reach the front of the line, the app will give you an option between a cat and a dog, both of which have been waiting a long time to be adopted by their new family. You will choose whether to take home a cat or a dog.

---
### Tech stack
This server was created with: 
JavaScript, Node.js, Express.js, Heroku, Git, Github.

---
-**Routes**
-**BASE URL: /api**

--*/people*
(GET) returns names of people in our adoption line,
(POST) adds the submitted name to the end of our adoption line

--*/pets*
(GET) returns name and details of the 1 dog and 1 cat that are first up to be adopted
(DELETE) 'adopts' one of the pets in line, as well as removing the name of the new owner from the adoption line