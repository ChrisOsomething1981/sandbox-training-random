import { test, expect } from '@playwright/test';
import { mkdirSync, existsSync } from 'fs';
import { format } from 'date-fns';

const screenshotFolder = 'screenshots';

test('should open the Gnome Weather homepage and take a screenshot with timestamped filename', async ({ page }) => {
  let screenshotStatus = 'Success';
  let testStatus = 'Passed';

  
  fetch("https://wiki.gnome.org/Apps/Weather/").then(response => {  console.log(response.status, response.ok); });

  // Check if the screenshot folder exists
  if (!existsSync(screenshotFolder)) {
    // Create the screenshot folder if it doesn't exist
    mkdirSync(screenshotFolder);
  }

  try {
    // Generate a timestamped filename
    const timestamp = format(new Date(), 'yyyyMMddHHmmssSSS');
    const filename = `gnome-app-weather-homepage_${timestamp}.png`;

    // Navigate to the Gnome Weather homepage
    await page.goto('https://wiki.gnome.org/Apps/Weather/');

    // Take a screenshot and save it with the timestamped filename
    await page.screenshot({ path: `${screenshotFolder}/${filename}` });
  } catch (error) {
    screenshotStatus = 'Failed';
    console.error('Error taking screenshot:', error);
  }

   // Close the browser context
   await page.close();
   
   //console.log(`Test status: ${testStatus} (Status code: ${statusCode})`)
  console.log(`Screenshot status: ${screenshotStatus}`);
  
});