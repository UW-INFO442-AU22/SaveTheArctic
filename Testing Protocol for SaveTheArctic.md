# Testing Protocol for SaveTheArctic

1. Steps:
    * Run the web app on Postman to make sure the API responses are working correctly.
    * Perform a usability tests in which the testing environment of the determined user testing methods are replicated.
    * Identify the potential issues regarding key features and made improvements.

2. Key Features to test: 
    *  Being redirected to differnt pages depending on whether the user has logged in.
    *  Ensure layout looks neat for both the desktop version and mobile display.
    *  Ensure the accumulative points is correct regardless of which page the user access first.

3. Bugs we had:
    * Users still can be directed to other pages even if they are not loggin in.
    * Points not displayed correctly when being redirected from landing page.

We fixed the first bug by changing the logic of log in feature where if a user is not logged in, all the page choices will direct them to the landing page. The second bug were fixed by querying user points value before user goes to the point page so that all values needed in the point page are prerendered. 
