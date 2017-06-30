# backcast: YouTube with Backbone

Your task is to build a YouTube Video Player app using BackboneJS.

**Typical Real-Life Scenario:** Your company's CTO is undecided about the most appropriate front-end framework to use and wants to explore building a website using multiple technologies before ultimately choosing the best one. 

## Backbone is Interesting in a Few Key Ways

- Backbone was one of the first JavaScript MVC frameworks to gain substantial popularity and is used widely.
- Backbone is unopinionated and can be used in a variety of ways.
- Backbone model are designed for easy integration with RESTful APIs.

## High-Level Goals of This Sprint

* Learn Backbone and learn how to think about web apps as components
* Continue practicing interactions with a REST API (in this case, the [YouTube Data API](https://developers.google.com/youtube/v3/?hl=en))

## Thinking in Components

When designing and building front-end applications, a good approach is to break the functionality of the application apart into small, easily understandable and reusable pieces, often called *components*. Backbone calls these components, Views, which contain a mixture of view and controller code. The models that views rely on are first-class citizens in Backbone.

## App Organization

Here's how the app is organized:

![Video Player layout](https://s3-us-west-2.amazonaws.com/sprint.content/course.backcast/components.png "Video Player layout")

* `AppView` - The top level container for the entire application. 
* `SearchView` - Responsible for knowing and communicating information about the search input field
* `VideoPlayerView` - Responsible for playing a single video and displaying information about it.
* `VideoListView` - A container view responsible for populating video list entry views
* `VideoListEntryView` - A view that shows information (thumbnail, title, description) for a single video. When the title of a video is clicked, that video will be shown in the `VideoPlayerView` view

Notice the HTML for each view is located in a different file -- something that is very common in Backbone projects. Templates are made using the [Underscore Template Utility](http://underscorejs.org/#template). Be sure to read and understand what they do. You don't need to know understand the `templateURL` function itself. All you need to know is that `_.template()` is invoked on the *contents of the file* named by the argument to the `templateURL` function.

In addition to the above views and templates, the app makes use of a model and a collection:

* `Video` - a model that contains information and behavior about a single video
* `Videos` - an array-like collection of models.

## Project Set Up

### npm

This sprint uses [npm](https://www.npmjs.com/) to manage its dependencies. npm comes bundled with Node and is another JavaScript package manager that makes it easy for developers to share and reuse code. Even though npm started in the Node ecosystem, it is quickly becoming the default choice for sharing all types of JavaScript code.

If you're comfortable with other package managers such as Bower, you will feel right at home with npm:

* Run `npm install` to install your package dependencies
* npm's configuration file is `package.json`
* npm downloads packages into a folder called `node_modules` which is automatically created if it does not exist

Install this sprint's dependencies:

- [ ] [Install Node.js](https://nodejs.org/en/) if you haven't yet.
- [ ] Run `npm install`

### Live-Reloading Server

In order to boost productivity when developing rich client-side applications, this sprint uses a live development server to automatically refresh the browser page as you make changes to your source code. 

On computers that don't already have it installed, [Live Server](https://github.com/tapio/live-server) can be easily installed via npm:

```bash
npm install -g live-server
```

Try it out:

- [ ] In a new Terminal tab, start the Video Player app by running `live-server`
- [ ] Make a change in one of the JavaScript files in the `src/` directory
- [ ] Be amazed as your browser will magically refresh

**IMPORTANT: you must use `live-server` in this sprint**

### npm Scripts

npm comes with a handy [scripting](https://docs.npmjs.com/misc/scripts) feature that lets you define shell commands inside of `package.json`. If you want to improve your application's build process, consider completing the following optional task:

- [ ] Write an npm `start` script that runs the instructions from the previous step

## Try the Problem

During the "Try the Problem" phase, you should:

- [ ] Read the following sections of the [BackboneJS docs](http://backbonejs.org/) and formulate theories for how these pieces fit together: Getting Started, Models and Views, Collections, View Rendering, Catalog of Events.
- [ ] Work through the Vertebrae tutorial solo.
- [ ] Read through the [Backbone Primer](https://github.com/jashkenas/backbone/wiki/Backbone%2C-The-Primer) as far as you can get.

If time permits, you should attempt the Siskel repo. If you don't finish Siskel, it is recommended you finish working through this with your pair.

## Bare Minimum Requirements

Before starting, make sure you familiarize yourself with Backbone using the companion repos.

- [ ] Complete bare minimum requirements in vertebrae
- [ ] Complete bare minimum requirements in siskel

Your ultimate goal is to build a working app that looks like the one in the animated gif below, using the included tests as your guide. After completing the Bare Minimum Requirements, you'll be able to search, display, and play any video from YouTube.

![Video Player Demo](https://s3-us-west-2.amazonaws.com/sprint.content/course.backcast/video-player.gif "Video Player Demo")

### Initial Steps

- [ ] Explore the codebase to get an understanding of each view's responsibility. Relate the code you see to the previous diagram and ensure you understand how the views relate to each other. An essential aspect of this first step is to understand the HTML for each view too.
- [ ] Inside of `src/views/app.js`, modify the code that will render this view to the DOM. Not all of the tests in `appSpec` are pertinent at this time. Be sure to follow the MVP practice, that is writing the minimum code at each step.

### Configure Mocked Data

When building out front-end applications, a hightly productive technique is to temporarily ignore the complexity of working with real data (via an API) by making use of "mocked" sample data. For the next several steps, you're going to use the sample data contained in `src/data/exampleVideoData.js`.

- [ ] Include `src/data/exampleVideoData.js` in `index.html` so it can be used by your application
- [ ] Pass the data from `exampleVideoData` into the videos collection.

### Create a Dynamic VideoListView

Your first goal is to build the `VideoListView` and its partner component, `VideoListEntryView`, that together render whatever list of videos is supplied to them. When it's all set up, on the page you should see titles, thumbnails, and descriptions of some Backbone Tutorials.

- [ ] Get the `VideoListView` to render
- [ ] Pass the data from `exampleVideoData` into the `VideoListView`
- [ ] Refactor the `VideoListView` to dynamically render one `VideoListEntryView` for each video object in `exampleVideoData`, passing in the video data to `VideoListEntryView`
- [ ] Refactor the `VideoListEntryView` to dynamically render based on the video object it receives
- [ ] Make sure the tests for `VideoListView` and `VideoListEntryView` are passing.

### Create a Dynamic VideoPlayerView

Next, do the same thing with the `VideoPlayerView` view, i.e., have the view render whatever video is supplied to it.

YouTube videos are played by passing a source url to the `iframe` tag inside the `VideoPlayerView`. The video associated with the id included after `https://www.youtube.com/embed/` will get played.

- [ ] Pass a single video from `exampleVideoData` into `VideoPlayerView`
- [ ] Update `VideoPlayerView` to play the video it is passed and display its title and descriptions
- [ ] Make sure the tests for `VideoPlayerView` are passing.

### Hook the Video List and Video Player Together

Now it's time to make these two views interact. When you are finished with this section, `VideoListView` will be interactive, meaning that when you click on a video title, that video will be shown in `VideoPlayerView`.

In most MVC architectures, sibling components (views) should not directly access each other, so they need the help of a parent component (view) to manage communication between them. In this case, `AppView` is the parent component for the sibling components `VideoListView` and `VideoPlayerView`.

- [ ] Initialize the internal state of `AppView` to keep track of videos and be able to pass this information down to its children views, `VideoListView` and `VideoPlayerView`. Continue to use the example data.
- [ ] Devise a way to receive the result of a click event inside of a `VideoListEntryView` so that when a title is clicked, that video is displayed in the player.
- [ ] At this point, most tests should be passing. Depending on how you wired up the logic between `AppView` and `VideoPlayerView`, some tests may not pass. Modify the tests to match your implementation.

### Set Up Interactions with the YouTube API

You'll need a developer key in order to access videos from the YouTube Data API. This is common practice with third party APIs because they want to keep track of who is accessing their data, enforce rate limits and even sometimes make money. Access to the YouTube API is free, all you need is a Google Account.

- [ ] Go to Google's [YouTube API](https://console.developers.google.com/apis/api/youtube/overview)
- [ ] If prompted, select a project or create a new one. It doesn't matter what you name a new project
- [ ] Click `Enable` and then `Go to Credentials`
- [ ] Select `Web browser` from the drop-down and the `Public data` radio button
- [ ] Give your key any name, leave the optional field blank, and click `Create`.
- [ ] Make your key available to the rest of your application from a new file, `src/config/youtube.js`

### Create a Reusable API Helper

To search for YouTube videos, you'll use the API's [Search:list](https://developers.google.com/youtube/v3/docs/search/list) endpoint. To help keep your code organized, write a function that will fetch data from this endpoint.

- [ ] In `collections/videos.js`, create a `search` function to fetch data from YouTube's API.
- [ ] The ajax method should receive a `data` object with the following properties:
  - [ ] `query` - the string to search for
  - [ ] `maxResults` - the maximum number of videos to get, which should default to 5
  - [ ] `key` - an authorized YouTube Browser API key
  - [ ] Only fetch embeddable videos
- [ ] Be sure to correctly handle the results of the API so that your collection contains 5 models upon completion of the ajax call.
- [ ] Enable tests in `spec/collections/videosSpec.js` make sure all tests are passsing.

### Implement Simple Search

Incorporate `SearchView` into the application. After completing this step, the app will be capable of accepting a phrase in the input field and when the user clicks on the search button, the various views will update appropriately with the results obtianed from the YouTube API.

- [ ] Implement `SearchView`, making use of the `videos.search()` function you just created.
- [ ] Update all appropriate views as a result of peforming a search.
- [ ] Be sure to support both a button click and an `enter` key press
- [ ] Enable tests in `spec/views/searchSpec.js` make sure all tests are passsing.

### Initialize the App With Live Data

The last step will be to replace your mocked data with live data. To do this, the app should initialize itself by executing a "default" search and populating the models and views with the results of this search.

Before integrating live data, you should take a minute to appreciate how far you got with the `exampleVideoData`. Now you can tackle the complexity of starting to use actual data in isolation, and assuming the shape of the live data is the same as the data you mocked out, everything will continue working. 

- [ ] During app initialization, invoke the `videos.search()` function and update the state of the app with videos returned from the API.
- [ ] Enable tests in `spec/views/appSpec.js` make sure all tests are passsing.

## Advanced Content

### Implement Live Search

Build out `SearchView` and update other views as needed:

- [ ] As a user types into the input box, the `VideoListView` and `VideoPlayerView` views are updated with videos from the YouTube data API that match the value of the input
- [ ] Debounce ajax requests triggered by `SearchView` to occur *at most* once every 500ms. (Imagine if YouTube's API wasn't free :O)

## More Advanced Content

Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior-level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

- [ ] Create a `VideoDetailsView` that makes another request to the YouTube API and renders more complete video information to the page
- [ ] Create an auto-play toggle button that will automatically start playing the video selected from `VideoListView`
- [ ] Give each video it's own unique url with the help of [Backbone Router](http://backbonejs.org/#Router)
- [ ] Handle pagination of search results via the YouTube API.
- [ ] Integrate with the parse server from the chatterbox-client sprint to create a Twitch-like experience. You will need to build additional models, collections and views. (Don't let yourself be blocked by XSS, solve the XSS problem before it starts!)
    - [ ] Initially, use a single chat feed for the app.
    - [ ] Then, refactor the chat feature so there is one chat room per video. When you select a video, that video's chat history loads. Only the currently selected video should be updating its chat messages. All others should only load when selected.
- [ ] Use a module loader like [webpack](https://webpack.github.io/), or [SystemJS](https://github.com/systemjs/systemjs) instead of adding modules as `script` tags

## Resources

* [BackboneJS (official docs)](http://backbonejs.org/)
* [Backbone Primer](https://github.com/jashkenas/backbone/wiki/Backbone%2C-The-Primer)
* [Parse Platform](http://parseplatform.org/)
* [YouTube API](https://developers.google.com/youtube/v3/getting-started)
