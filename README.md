# class03-final-project
Main repository for the final project for Class 03

Note that the project is split into two sub-projects. One for the [client](/client) and one for the [server](server). Further documentation in these folders.

## Work stories

### First iteration

When I find interesting content I need to be able to share it so others can benefit.

When I feel like learning something new I need to discover content so that I can learn.

When I am selecting what content to read I need to see ratings so I don’t waste time on poor content.

When I find a good learning resource shared by another user, I want to be able endorse (upvote) it, so others can make qualified decisions about what to read.

When I have selected an item I need to be able to learn more before I read it in full length so I don’t waste time on the wrong content.

When I have decided on a piece of content to read/watch I need to be able to go to it directly so I know for sure I am watching the right content.

### Second iteration

When I want to explore a specific topic I need to see a list of categories related to that topic so I don’t manually have to browse all of the content.

When I am browsing a topic I need to be able to find content that match my current skill level so that don’t get overwhelmed.

## Process

We suggest the following process for working on the project:

1. Understand the product. Why is it necessary? What does it do and how does it do it?
2. Decide on what your architecture will look like. This is mostly given, since all classes have been focusing on a single type of architecture, but make sure you understand what you are building and why you are building it.
3. Get a simple "hello world" style of prototype running utilizing the entire stack (i.e. have the React application query the API that will return a string of text fetched from the database). Don't try to implement the actual application yet. Make sure that functionality such as connecting to the database is 
4. Break the UI into a component hierarchy.
5. Design a data-model for your database that will allow you to store and query the data you need.
6. Build a migration script that will allow you to easily set up any tables you need in your database and fill it with test data.
7. Build a static version of the UI. Don't worry about functionality yet. If you discover discrepancies in your component break-down as you build, update the breakdown.
8. Start thinking about what components should be stateful. Add container components as needed.
9. Start wiring up all of the functionality, fetching the data from the API and implementing real functionality as opposed to having just static components.
10. Plan development so you can stop developing any new features in the last 10-15% of the project (4-6 days). Use this time as a "feature freeze" period, where you focus on "hardening" the product by testing and fixing bugs. 