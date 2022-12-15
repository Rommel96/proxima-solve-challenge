<h1 align='center'>Proxima Challenge</h1>


######In this repo there is a code challenge, it is divided into FrontEnd and Backend even though they are not related or connected.

Prettier and Eslint were used to enforce good coding practices.

**Front End App:**

- ***Developed*** with ReactJS(v18)
- ***Language:*** TypeScript
- ***Styles:*** vanilla CSS, we thought about using Tailwind but since the mockup was quite simple, I opted for native css.
- ***Responsive:*** In the mockup only a Desktop view was presented, but a basic responsive was added under the author's criteria.

The mockup did not require any major business logic, therefore no state management was implemented. But if will necessary, the React Context API combined with SWR or ReactQuery would be handled.


**Back End App:**

A web server REST API with two routes:

```/```, just return a plain message
```/exchange-rate```, main route that returns the changes of the EUR with respect to the USD. Accept date filter.

- ***Developed*** in NodeJS
- ***Language:*** TypeScript
- Express Framework.
- Validators for request
- Database: PostgreSQL
- Custom response bodies

For the access to the DB, Prisma was used, since it is flexible and gets along very well with TS.