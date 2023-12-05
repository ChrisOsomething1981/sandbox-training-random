# Homepage Screenshot with Timestamp

Gnome Weather Homepage Screenshot with Timestamp
## Documentation


This Playwright script takes a screenshot of the Gnome Weather homepage and saves it with a timestamped filename.

## Pre-requisites
Before running the script, you will need to install the following dependencies:

You can install Playwright using the following command
```bash
npm init playwright@latest
```

You can install date-fns using the following command:
```bash
npm install @playwright/test fs date-fns
```
## What does it do ?

The script first defines the ```screenshotFolder``` variable, specifying the path to save the screenshots. Then, it defines a test case that performs the following steps:

- Define the screenshotFolder variable: The script defines a variable called ```screenshotFolder``` to specify the path where screenshots will be saved.

- Create the test case: The script defines a test case using the ```test()``` function from Playwright. This test case encapsulates the steps involved in taking a screenshot of the Gnome Weather homepage.

- Check if the screenshotFolder exists: Before taking any screenshots, the script checks if the ```screenshotFolder``` directory exists. If it doesn't, it creates the directory using the ```mkdirSync()``` function.

- Generate a timestamped filename: To ensure unique filenames for screenshots, the script generates a timestamped filename using the ```format()``` function from the ```date-fns``` library.

- Navigate to the Gnome Weather homepage: The script uses the ```page.goto()``` method to navigate the browser to the Gnome Weather homepage ```(https://wiki.gnome.org/Apps/Weather/)```.

- Take a screenshot: The script captures a screenshot of the current page using the ```page.screenshot()``` method. The screenshot is saved with the generated timestamped filename.

- Log screenshot status and test status: The script logs the screenshot status (```Success``` or ```Failed```) and the test status (```Passed``` or ```Failed```) to the console.

Close the browser window: After completing the screenshot capture and logging, the script closes the browser window using the ```browser.close()``` method. This ensures that the browser resources are properly released.

- The expected results of the script are:

  - The script successfully takes a screenshot of the Gnome Weather homepage.
  - The screenshot is saved with a timestamped filename in the ```screenshotFolder``` directory.
  - The screenshot status is logged to the console as ```Success```.
  - The test status is logged to the console as ```Passed```.
 







<end>
