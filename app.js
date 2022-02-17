// 1. Create the server
const express = require("express");
const app = express()
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`)
})

// 2. Create a route for our index
app.get("/", (req, res) => {
    res.send("I am doomed")
})


/* 
    1. Create an account
    To create an account, the user enters a username and a password. 
    It should not be possible to create multiple users with the same username. 
    It should also not be possible to enter an empty username or password.
*/


/*
    2. Login and logout
    After creating an account, you should be able to log in to the service by entering your username and password.
    A logged in user must also be able to log out.
*/

/*
    3. Edit user profile
    Each user must have a user profile that consists of a profile picture, a full name and an email address. 
    It should be voluntary for the user if he wants to add information to his user profile. 
    A logged in user should be able to add and edit information in their user profile. 
    To update their profile picture, the user should be able to upload a picture from their hard drive.*
*/

/*
    4. Create posts
    A logged in user should be able to create posts.
    A post consists of a text, which must be limited to a maximum of 140 characters. 
    The time and date when the post was made should be saved in the database.
*/

/* 
    5. Read posts
    There should be a page where all users' posts are listed. Each entry in the list should contain:
    • Profile picture and username of the person who wrote the post
    • Content of the post
    • Time and date when the post was created
    
    Posts should be sorted by date, with the most recent post first.
    The profile picture and username in a post must link to each user's profile page (see below).
    No login is required to read posts.
*/


/*
    6. Profile pages
    Each user should have a profile page. 
    On the profile page, the information from the user's profile should be displayed, as well as a list of her posts. 
    The posts must have the same appearance and sort as on the page to "read posts" (see above).
*/










// -------------------------------------------- VG ----------------------------------------------------
/*
    7. Followers (VG)
    A logged in user should be able to "follow" another user by visiting their profile page and clicking on a "Follow" link. 
    You should also be able to "follow" users in the same way.
    Each user's profile page should contain two counters that show: 
        1. How many users this user is following
        2. How many users follow this user
    Change so that users only see posts from users that they follow when they visit the "Read Posts" page when they are logged in. 
        (In logged-out mode, posts from all users should be displayed)
*/


/*
    8. New posts (VG)
    If another user creates a post while in the "Read posts" page, 
        an icon should appear at the top of the page indicating that new posts are available for download.
        Use either [socket.io] (http://socket.io/) or Server-Sent Events to implement this.
    If you click on the icon, the new posts should be displayed, 
        either by reloading the page or by loading the new posts with JavaScript and adding them to the top of the list.
    NOTE! If you have implemented the "Followers" function, 
        make sure that the icon only appears if you follow the user who created the post (provided you are logged in)!
*/


/*
    9. Hashtags
    By typing a "#" character followed by a word, you should be able to create a "hashtag" in your post, 
        for example "#javascript" or "# backend1". Hash tags can appear anywhere in a post, 
        and a post can have any number of hashtags.
    Make hashtags in posts clickable links. 
        The links should lead to a list of all posts that contain the given hashtag, 
        sorted by date with the most recent post first. Use Regular Expressions to find hashtags in posts.
*/
