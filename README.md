# class03-final-project
Main repository for the final project for Class 03

## Work stories

When I am debugging, I want to be able to fetch the version of the backend, so I know everything is working.

When learning, I want to find inspiration for learning, so I can learn more effectively.

When I find a good learning resource, I want to share it, so others can benefit.

When I find a good learning resource, I want to be able endorse (upvote) it, so others can make qualified decisions about what to read.

When browsing resources, I want to see content endorsed by others, so I can avoid wasting time on bad stuff.

When browsing resources, I want to filter content based on difficulty, so I don't feel like an idiot.

When browsing a resource, I want to see a preview suited for the type of resource, so relevant details are highlighted.




## Suggested process

We suggest the following process for working on the project:

1. Understand the product. Why is it necessary? What does it do and how does it do it?
2. Decide on what your architecture will look like. This is mostly given, since all classes have been focusing on a single type of architecture, but make sure you understand what you are building and why you are building it.
3. Get a simple "hello world" style of prototype running utilizing the entire stack (i.e. have the React application query the API that will return a string of text fetched from the database). Don't try to implement the actual application yet. Make sure that functionality such as connecting to the database is 
4. Break the UI into a component hierarchy.
5. Build a static version of the UI. Don't worry about functionality yet. If you discover discrepancies in your component break-down as you build, update the breakdown.
6. Now you have a static UI might be a good time to think about the server. Design a data-model for your database that will allow you to store and query the data you need.
7. Build a migration script that will allow you to easily set up any tables you need in your database and fill it with test data.
8. Start thinking about what components should be stateful. Add container components as needed.
9. Start wiring up all of the functionality, fetching the data from the API and implementing real functionality as opposed to having just static components.
