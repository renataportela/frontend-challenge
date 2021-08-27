<img width="179" alt="screen shot 2018-04-11 at 14 55 21" src="https://images.prismic.io/barkyn/39a6fcbe-be3d-4c12-b568-69a3e7dc6db2_logo.png?auto=compress,format">

[Barkyn](https://www.barkyn.com/) is a subscription for pets, changing the pet market and reshaping the way the ecommerce experience should feel - human, seamless & beautiful.
It's true happiness in a box: food, goodies, vet support and personalized care all-in-one.

Barkyn was one of the 8 startups selected by Google's to its Growth Program and has been highlighted by large media like Monocle. The company is operating in
several European markets, becoming a loved brand online.

## Getting Started 🐶

This is our coding challenge, aimed at getting to know you and your code a bit better.</br>
There's no time limit on the challenge, do your best at your own time.</br>

If you have any questions while developing that aren't made clear here, reach out to [dev@barkyn.com](mailto:dev@barkyn.com).

Most of all, we hope you have fun working on this, show off your skills!

1.  Fork this repository to your personal github account
2.  Solve the challenge, do your best :)
3.  Send us an email with your repository url to: [dev@barkyn.com](mailto:dev@barkyn.com)

## About the Challenge

Please take a look on the [challenge layout](https://share.goabstract.com/6dadeb1d-f205-49b7-af8c-f0bc2652a242).</br>
You will find everything you need on `/assets` folder.

You will be building a React web app based on the Next.js framework.
To learn a bit more about the stack:

- [React](https://facebook.github.io/react)
- [Next.js](https://nextjs.org)

The goal is to build a checkout process within a single page application that includes 3 pages and with some steps in between:

- Product list and selection page
- Checkout page
  - Shipping details form
- Success page

### Product list and selection page

- Present a list of up to 5 products. To create such products you can use [faker.js](https://rawgit.com/Marak/faker.js/master/examples/browser/index.html#commerce) or other tool
- The user should be able to select a single one of those products
- After selecting the product, at least one product variant should be presented (e.g. quantity, size, color, etc.)
- The user should be able to add the selected product and variant
- A summary section should be shown with the final price the user will pay

### Checkout page

- The checkout page must be a different route
- It should have a summary section with all products in cart and total price
- Present a form for the shipping details with the following fields:
  - Name
  - Email
  - Address
  - Postal code
  - Country
  - Phone
- All form fields must be filled in order to complete a successful purchase
- The user should be able to save the selected shipping details
- Add a button to complete the order that routes to a success page - no need to actually fake a purchase

### Success page

- The success page must be a different route
- Present a success message showing the order has been completed
- List all products purchased, the shipping details and total price paid

## Acceptance criteria (must have)

- Use of React and Next.js
- Does it run as expected: Does the step-by-step required to run the application work?
- Code organization: Module separation and project organization
- Documentation of your process:
  - Instructions on how to run the project (e.g. README.md, DEVELOPERLOG.md)
  - What was done
  - What could be improved
- Pages must be fully responsive and mobile friendly
- Unit tests - no need to achieve 100% coverage, but rather cover some components to showcase your test writing skills
- Good markup, semantic HTML and SEO concerns

## Optional criteria (nice to have)

- Use of CSS-in-JS
- Use of TypeScript
- Use of [Storybook](https://storybook.js.org)
- Loading transitions between pages (e.g. [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton))
- Accessibility concerns
- A demo website running on Vercel, Netlify or any other similar free platform
- It doesn't have to be pixel perfect but follow the layout
- Use theme with design tokens
- Use a internationalization framework (e.g. [i18next](https://www.i18next.com/))

## Other notes

These are some of the technologies in our stack, feel free to use them in your project or to showcase good alternatives:

- [Yarn](https://yarnpkg.com)
- [Emotion](https://emotion.sh)
- [Formik](https://formik.org)
- [ESLint](https://eslint.org)
- [stylelint](https://stylelint.io)
- [Prettier](https://prettier.io)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com)
- [TypeScript](https://www.typescriptlang.org)

_Good luck !_ 🐕
