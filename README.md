# Redux exercise

In this exercise we will practice putting our Redux knowledge into action using the Star Wars API. We want to store all our state in the Redux store which we will manipulate using actions, update using reducers and then receive the changes where required.

1. Create a search input component which we will use to search for characters by name in the Star Wars API. Each time the text in the component is updated by the user we want to emit an action which will update the `query` string in the store. Once the `query` string is updated we want to display the updated query string in our search component.

A good way to go about this is to create your initial Redux loop in order of execution.

- To enable you to initialise your store we have provided you with a `placeholder` reducer which does not do anything, but enables you to create a `rootReducer` with it.
- Start by creating a Container component which will talk to Redux on behalf of the Search component
- Create the `Search` component which will be wrapped by the container. Create a receiver function in `mapDispatchToProps` of `SearchContainer` which will be passed down to `Search` to emit the `query` to Redux.
- Create an action which will emit the `query` from `Search` via `SearchContainer` to the reducers.
- Create a reducer which will add the `query` to Redux state and add the reducer to `rootReducer`. At this stage, we can also delete the `placeholder` from our `rootReducer` since we no longer need it now that we have an actual reducer.
- Add a `mapStateToProps` method to `SearchContainer` so we can read `query` state from Redux store and pass it down to `Search` to display.


2. Add a submit event handler to the search component. When a user submits a search we want to use the `query` string to search the Star Wars API. Use the `https://swapi.co/api/people/?search=<query string>` api end point to get the search results, add them to the store using a reducer and display them to the user. To display results create a new Results component with a Results container to retrieve data from Redux state. 

**Stretch goal**

3. Add a select element to your search component which will allow us to select which end point we want to search `people`, `vehicles`, `planets`, `films`, `species` or `starships`. Use the value the from the search input to set api end point for the search.



### react-dropdown
https://www.npmjs.com/package/react-dropdown 