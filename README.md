## React Demo - Address Book - Day 2

This app demonstrates how to use component lifecycle methods like:
    `constructor`: for setting the initial state
    `componentDidMount`: for making AJAX calls, use third party libraries that need access to the DOM

It also demonstrates how to make React respond to user actions like clicks and key presses.

### Requirements

#### Basics

The app displays a list of contacts on the left. When you click a contact, the right hand side of the page will display the contact information (name, email, picture) for the given contact.

#### Get data from API

The app will be loading the contact information from an API, so we will have to make an AJAX request. The AJAX request could take some time to complete, so while we are retrieving the data, we should see a 'Loading...' message.

#### Implement Keyboard Shortcut

When you press 'N' the app should select the next contact in the list of contacts.

