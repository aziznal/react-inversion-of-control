# IOC with React

In this repo, I've implemented inversion of control in accordance with the SOLID
principles in react. I've achieved this using inversifyJS and the context API in
react. Specifically, I followed the following guide which proved to be very
useful: [Dependency injection in React using
InversifyJS](https://itnext.io/dependency-injection-in-react-using-inversifyjs-now-with-react-hooks-64f7f077cde6)

I also attempt to follow an implementation of the clean architecture (uncle
bob's version) by separating the app into three layers: Core, Data, and UI.

### Core
The app's business logic lives here. This app is a basic counter, so the files
here represent what a counter is, what its usecases are as well as how the data
flows through those usecases, and finally where we can access and modify the
counter's value (i.e the counter repo).

### Data
This is where I implement abstract things I've defined in the ***Core*** layer,
including Usecases, Repositories, etc..

I've put the heart of my IoC implementation here. The file `ioc.ts` is where I
define a `container` (from inversify) and I use this container to bind
interfaces defined in ***Core*** to implementation made in ***Data***

### UI
This is pure react. It's what you'd usually expect. There is an extra file here,
namely `ioc.react.tsx` which is how I use the context api to wrap my app with
the logic that injects dependencies as they are called upon. Also, in this file,
I define a hook that makes it (relatively) easy to inject dependencies into the
component.

## Some Useful Information
I use typescript in this app because it's what I'm comfortable with. I don't believe dependency injection is possible in javascript in this same method but you're welcome to try.

You'll notice in `package.json/scrips` that I've replaced the usual
`react-scripts` with `react-app-rewired`. There is only one reason for this, and
that reason is the unbelievable amount of spam warning messages that you'll
receive due to inversifyJS having trouble creating source maps (most likely due
to me using typescript).

I've done some investigation, and people's solutions varied wildly from
completely toggling off the generation of source maps to simply muting warning
messages; I chose the latter, which is why you'll find a file named
`config-overrides.js` in the root dir of the app. There, I've made a simple
override such that source-map related warnings will NOT be displayed in the
console. That is the only reason that I use `react-app-rewired`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
