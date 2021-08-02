# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

- Context API allows you to pass state to any component regardless of where it is located within your application. It prevents prop drilling which can get messy and confusing in a larger application.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Redux store is an immutable object tree that contains all the application state and business logic. Actions are sent to the store in order to tell the reducer which state it needs to manipulate.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

4. What is your favorite state management system you've learned and this sprint? Please explain why!

- I like context api becuase it's alot easier to setup than a redux based application; however, it can make your compoents non reusable and can also make your applications syntax look sloppy and cluttered. For that reason I would use redux if im making a large application.
