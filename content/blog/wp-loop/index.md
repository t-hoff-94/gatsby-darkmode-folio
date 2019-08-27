---
title: The WordPress Loop
date: "2019-05-29"
description: Learning the basics and fundamentals of the famous "WordPress Loop".
---

## Looping through **Posts**

If you are familiar with WordPress then you are likely aware that basically any content on your website is some sort of a **post**, whether it be a page, a blog post, or even a custom post type. Most websites consist of at least one or more posts, and this is where the "WordPress Loop" comes into play because we need a way of going through or "looping through" each one of the posts and displaying them to the screen.

## Steps of the Loop

1. We begin by opening up the loop with an if statement asking if there are any posts. To do this we use a function built in with WordPress called _have_posts()_, which is basically saying "Hey WordPress, are there _ANY_ posts for me to loop through"? If there are in fact posts, the code in between the curly brackets({...}) of the "if" statement will be executed.

```jsx
if(have_posts()) {... continue }
```

2. After determining if there are any posts to loop through and assuming that there is, the loop must then establish when the loop should end. In more simple terms the loop needs to know how to only cycle through the list of posts one time, and to do this we use a PHP _while loop_ and leveraging _have_posts()_ again we basically say "While we have posts, we want to keep looping through each one until we reach the end of the list."

```jsx
if(have_posts()) {
 while(have_posts()) {
   ...inside the loop
 }
}
```

3. After checking for posts and opening up the loop with the actual PHP _while loop_, we then need to gain access to the content of each post such as the title, content, images, and any custom fields etc. Fortunately WordPress provides another built in function to help us do just that, called _the_post()_. Inside of each **Post** we can then access all of the information and decide how we want to display it to the screen.

```js
if(have_posts()) {
  while(have_posts()) {
    the_post();
    the_title();  ** displays title of post **
  }
}
```

Above is an expample of the WordPress Loop in its most fundamental and basic form. The loop is simply going through each post in the list, accessing the data of each post, and displaying only the title using another built in function called _the_title()_. You're probably starting to notice that the famous "WordPress Loop" is fairly simple and easy to comprehend at this level, but understanding the basics is necessary for building and manipulating any WordPress Theme.
