# BLUE VELLUM LEATHERS

Blue vellum leathers is a company that makes a variety of creative and unique leather bags. Along side the bags they make, they also create leather watch bands, belts, wallets etc.

LIVE PREVIEW

## OVERVIEW

#

TECH USED: HTML, CSS, TAILWIND REACT TYPESCRIPT, REDUX, REDUX QUERY, MONGODB, EXPRESS, MONGOOSE, NODE.JS, JEST, CYPRESS, REACT TESTING LIBRARY, STRIPE API

- Used the MVC Design Pattern for my backend
- Used mongoose to create my schema's that are saved to mongdb atlas database
- Used Express to create my api routes
- Frontend and Backend are all typed in Typescript
- For user login, JWT token authorization is used to grab a specific user and their cart information.
- JWT token only lasts for 60 minutes before it expires and user is forced to logout
- bcrypt used to keep user password unidentifiable
- Typed model schemas to make sure the data that is neccessary is being sent back and forth
- Used RTK Query to fetch, add, update and delete data
- Used RTK, to hold some of that data that RTK Query retrives to display to the client
- Full payment functionality using Stripe Api
- Once payment is complete user's cart information is deleted, order details are saved to the backend. This information is sent by using Stripe Webhook Post Api
- Responsive Design Using Tailwind
- Mobile Friendly as well
- Used React Testing Library and Jest to test fronted functions
- Used Jest and Cypress to test end to end integration

## LESSONS LEARNED

#

Creating this project I was really putting everything I learned to the test. It's my first time using most of these frameworks and that proved to be a challenge in itself. One thing I will say is TYPESCRIPT IS KING! This project was huge, and sometimes I would find myself getting lost in the codebase, but because of Typescript, I was able to quickly identify what was going in and out of both the frontend and backend and this saved me I can imagine a ton of time as I would have probably would have started over a couple times if I was using plain jsx. Cypress was fun to learn and integrate in this project as well as Redux and Redux Query. Solidifying the fact for me that love I have for learning frameworks and/ techniques implementing them in any way that I can. There are a couple things I want to continue to add on to this project like more test and some more UI changes, but overall very happy with how this project turned out!
