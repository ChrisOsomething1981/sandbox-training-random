# sandbox-training-random
This is area where I create / learn the funtions and diffent areas while creating and learning


Gnome Weather Homepage Screenshot with Timestamp
This Playwright script takes a screenshot of the Gnome Weather homepage and saves it with a timestamped filename.

Prerequisites
Before running the script, you will need to install the following dependencies:

Playwright
fs
date-fns
You can install these dependencies using the following command:

Bash
npm install @playwright/test fs date-fns
Use code with caution. Learn more
Usage
To run the script, save it as a .js file and then execute the following command:

Bash
npx playwright test <script_name>.js
Use code with caution. Learn more
Script Explanation
The script first defines the screenshotFolder variable, which specifies the path where the screenshots will be saved. Then, it defines a test case that performs the following steps:

Checks if the screenshotFolder exists and creates it if it doesn't.
Generates a timestamped filename using the format function from the date-fns library.
Navigates to the Gnome Weather homepage using the page.goto() method.
Takes a screenshot of the current page and saves it with the timestamped filename using the page.screenshot() method.
Logs the screenshot status and test status to the console.
Expected Results
The script should successfully take a screenshot of the Gnome Weather homepage and save it with a timestamped filename. The screenshot status and test status should be logged to the console as Success and Passed, respectively.