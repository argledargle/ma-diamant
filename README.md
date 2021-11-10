# ma-diamant

The frontend for my diamant app

## What and why?

I was given a coding challenge to make the try-your-luck game Diamat.

The rules are simple. A user has a deck of cards in which are different types of trap and treasure cards.
There various types of trap card and treasure cards. Each treasure card has points associated with it.

The goal is to get collect as many points as possible without collecting two of the same trap cards.
The player can give up at any time.

## Architecture decisions

### Why use NextJS?

I wanted to try something new and I've never used NextJS before. I think this framework serves really
well for it's intended purpose: Delivering static pages. I had to architect a few pages in ways that are
not optimized. I would recommend this tool for anyone making pages that are primarily informational with
a small bit of interactivity.

Overall, if I were to do this again, I would most likely use create-react-app, or I would look into combining
the frontend and backend components into a polymorphic app.

### Why use useReducer for state management?

Originally, I was going to use something other than useReducer as my state management tool of choice. I'm already
familiar with redux and I'd love to take a stab at using an atomic state management system like recoil.

Ultimately, I decided to use the native useReducer method provided by React.

## Next steps

These are a list of immediate next steps that I would implement if this were an ongoing project.
They are in no particular order:

- Unit, integration, and E2E testing: I would implement unit testing in the app as a deployment step,
  integration and E2E testing would be in the deployment pipeline.
- Cleaning up the code: There are multiple places where code could be cleaned up to make it a bit more
  readable and user-friendly. I used a combination of the CSS that came with NextJS as well as
  styled-components to create the UI. If this were an ongoing project, I would clean up the CSS files
  and migrate almost everything to styled-components.
- Error and loading states: If given the right amount of time, I would move forward with developing more
  user-friendly error messaging in the app. Right now, there's really only one loading 'state' although
  there could be another one used after the user submits their score. I'm also relying on the built-in
  error boundary from NextJS which is informative but not good for a user experience.

## Further evolution

These are the next steps that would come further down the line if this were an ongoing project.
Again, they're in no particular order:

- Implement graphical improvements: Currently, there's no actual cards that a user can interact with.
  If this project were to be ongoing, I'd like to fix that by implementing two-sided cards and animations
  to enrich the user experience.
- Tutorial: I'd like to further enhance the user experience by building out a tutorial that would show them
  how to play the game and walk them through a win and a loss. These types of experiences can be extremely
  helpful when teaching someone a new skill or game.
- Membership system: If this were to be a serious project with potential growth, I'd like to have more of
  a focus on a membership system so people can track more of their metrics over time, sort leader boards
  by time and location, and be able to see how they stack up against friends.
- Social integration: Moving forward, having the ability to tweet out a score, share the introduction, or
  even just have a link to follow the development team on twitter can do wonders for promoting an online
  game or brand.
- Admin panel: This would have to be engineered after the social integration effort. I'd like to be able
  to login and see various metrics like where people are playing from, how many users are active, how
  many social shares there have been, etc. I'd also like to be able to delete users and set up things like
  tournaments and such.
