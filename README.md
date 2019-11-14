# star-wars-react-master-class

[star wars deployed link](#https://pedantic-shaw-d117c5.netlify.com/)

SWAPP (Star Wars App) Specification 
Info React Web Application that explores some interesting Star Wars data. 
 
Create open-source React Web Application that retrieves Star Wars data from GraphQL server. Each piece of functionality you implement should be introduced via Pull/Merge Requests which have successfully passed a CI build. 
Data 1. Data is fetched from GraphQL Server: http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql a. Navigating to this link will also open GraphQL Playground where you can explore the schema 2. There is only one user available:  a. Email: ​demo@st6.io b. Password: ​demo1234 3. Authenticating GraphQL queries a. Authenticating the queries happens by adding ​Authorization​ header to the request with value ​Bearer ​<token> ​ . For instance: Authorization: Bearer eyJhbGciOiJIUzI123iIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOTZmYTFl YTQxYTA4MGY4YjIxMjMwMiIsImVtYWlsIjoiZGVtb0BzdDYuaW8iL CJyb2xlIjoiQURNSU4iL1KHHASDHXQiOjE1NzAxNzYwMjksImV4c CI6MTU3MDE3NzgyOX0.1vYZfspRxVA9wV_FbHL5N0YoVM8ZVQ z9y09LfAgjwSc 
 
Routes 1. Routes that don't require authentication​: Accessible ​only ​when the user hasn’t been signed in. ● /login​ - displays the ​Login Page​. The user should always be redirected to the login page if s/he hasn’t signed in. For instance, user opens https://<domain.name>/episodes but isn’t logged in, s/he should be redirected to https://<domain.name>/login 
 2. Authorized Routes​: Accessible ​only​ when the user has signed in. ● /episodes​ - displays the list of episodes. ​(Episodes Page) ○ When the user logs in, s/he should be redirected to this page. 
○ This should be used as the default page, i.e. if the user navigates to https://<domain.name>/ ​ , s/he should be redirected to this page. ○ Clicking on the ​Episodes​ button in the AppBar should navigate to this page. ● /characters​ - displays the list of the characters. ​(Characters Page) ○ Clicking on the ​Characters​ button in the AppBar should navigate to this page. ● /episodes/:episodeId​ - displays the data for the episode with ​id = episodeId ​
 ​ (Episode Page) ○ Clicking on the Episode Preview in the ​Episodes Page ​ must navigate to this page. ● /characters/:characterId​ - displays the data for the character with ​id = characterId ​
 ​ (Character Page) ○ Clicking on the Character Preview in the​ Characters  Page ​ must navigate to this page. ○ Clicking on the Character Preview in the ​Episode Page ​ must navigate to this page. ● /starships/:starshipId​ - displays the data for the starship with ​id = starshipId ​
 ​ (Starship Page) ○ Clicking on the Starship Preview in the ​Character Page ​ must navigate to this page. 
 
UI/UX 1. Clicking on the SWAPP logo (both at the login screen and the App Bar) must change the theme from dark to light and vice versa. 
 
2. The selected theme should be stored across sessions, i.e. if the user opted for the dark theme and closes the window, once s/he reopens it, the dark theme should be applied. 
 
3. If there is some kind of an error during login, an appropriate info message should be shown (e.g. ‘Invalid Credentials’) 
 
4. Navigation between different pages should result in changing the URL address in the browser’s navigation bar. 
 5. The pages and components should have a similar look and feel like the ​images below​. 
 6. The application should be responsive: The application should present the content in the best possible way for the devices it’s run on. Look at the ​ examples ​ . 

 7. Behavior on ​initial ​ navigation to: a. Episodes Page​ - all episodes should be loaded b. Episode Page ​- only five characters should be loaded (fetched), if the user clicks on the ​Load More​ button, five more characters should be fetched from the server and presented. c. Characters Page​ - only 12 characters should be loaded (fetched), if the user clicks on the ​Load More​ button, 12 more characters should be fetched from the server and presented. d. Character Page​ - all starships should be loaded 
 8. Additional Specifications: a. SWAPP​ Logo - use some external Star Wars font (e.g. ​SF Distant Galaxy Regular​) b. Starship Page​: i. The ​RadarChart ​ compares each stats of the starship to the relevant min and max stats of the same starship class. For instance: X-Wing is of class ​ starfighter ​ , so its stats are compared to the max stats of all starfighters. E.g. its cost is 149999 credits, so it would be compared to the min and max credits for all starfighters, which are: - min ​ :  0 from TIE Advanced x1 - max: ​ 320000 from Eta-2 Actis-class light interceptor ii. Stats that are ​undefined ​ must not be shown in the starship card info (with exception to ​credits ​field, if credits field is ​undefined ​ it should be considered as 0)  
 
 
9. Style Specs Specification: Note that it is optional to use the same color scheme, but having ​light​ and ​dark themes is mandatory. a. Common Colors: i. Yellow: ​#FFE300 ii. Light Blue: ​#4BD5EE iii. Black: ​#000 iv. White: #FFF b. Light Theme​: i. Default Background: ​#E8EAED ii. Default Font Color: ​#4E5B6E iii. Cards: ● Border-color:​#E5E9F2 ● Background: #FFF iv. Solid Buttons​: ● Background: ​#000 ● Border-color: ​#E5E9F2 ● Font Color: ​#FFE300 v. Outline Buttons​: 
● Background: ​#EFF2F7 ● Border-color:  ​#E5E9F2 ● Font Color: inherit vi. Inputs​: ● Background:  ​#EFF2F7 ● Border-color: ​#E5E9F2 ● Font Color: ​#3C4858 vii. App Bar​: ● Background:  ​#000 ● Border-color: ​#333 ● Font Color: ​#4BD5EE viii. Primary Heading​: ● Font Color: ​#4BD5EE ix. Radar​: ● Font Color: ​#4BD5EE ● Background:​#000 ● Grid: ​#3C4858 c. Dark Theme​: i. Default Background: ​#000 ii. Default Font Color: #abb1ba iii. Cards: ● Border-color: ​#3C4858 ● Background: ​#333 iv. Solid Buttons​: ● Background: ​#4BD5EE ● Border-color: none ● Font Color: ​#FFE300 v. Outline Buttons​: ● Border-color: ​#3C4858 ● Background: ​#333 ● Font Color: inherit vi. Inputs​: ● Background: #FFF ● Border-color: ​#3C4858 ● Font Color: ​#273444 vii. App Bar​: ● Border-color: ​#3C4858 ● Background: ​#333 ● Font Color: ​#4BD5EE viii. Primary Heading​: ● Font Color: ​#FFE300 ix. Radar​: ● Font Color: ​#FFE300 ● Background:​#000 ● Grid: ​#333 
Test Requirements ● Code coverage should be as high as you can make it. 100% Code Coverage would earn you bonus points 
CI/CD Requirements ● CI must be run on each Pull Request ● Merge into ​master ​ branch should trigger CD and the web app should be deployed.  