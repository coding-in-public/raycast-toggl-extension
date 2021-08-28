# Raycast Toggl Extension

This extension lets you start and stop Toggl Track timers from Raycast.

## Dependencies

- [Raycast installed](https://www.raycast.com/)
- [NodeJS installed](https://nodejs.org/en/)
- [Free Toggl Track account](https://toggl.com/track) with projects set up online

## Installation instructions
Instructions on how to set up the directory and how to connect it to Raycast

### Set up the extension
1. Clone or download the directory
2. Run `$ npm install` to install dependencies
3. Create an .env file in the directory
4. Add your API Token from Toggl to the .env file
  - Go to your [Toggl profile](https://track.toggl.com/profile)
  - Scroll down to the bottom and copy your API Token (you may need to create it first)
  - Add the API token to the .env file like this: `API_TOKEN=12345678910111213141516` (where everything after the equals sign is your API Key)
5. Update the google.js file to match your desired Toggl project
  - Rename the file if you want
  - Update the metadata to match your project (for more help with Raycast script commands, [view the Raycast documentation](https://github.com/raycast/script-commands)); consider changing the following: 
    - @raycast.title
    - @raycast.icon (you can add an https url image, an emoji, or a local image)
    - @raycast.description
  - Change PROJECT_NAME to match your project
  - Change the PROJECT_ID to match your project
    - Open the project on Toggl on the web and copy the ID from the end of the URL
    - Example: `https://track.toggl.com/3428530/projects/157565167/team`
    - In the case above, the project ID is `157565167`

### Connect project to Raycast
- Open Raycast.
- Open the Raycast preferences (<kbd>⌘</kbd> + <kbd>,</kbd>).
- Open the **Extensions** tab.
- Click the **&plus;** icon and choose **Add Script Directory**. 
- Navigate to your directory and click **Open**.

## Tips
1. Add as many projects as you need by duplicating the original `google.js` file and updating the content as shown in step 5 above.
2. If you add an alias to the script, after typing the alias, you can enter the optional `Description` field with the spacebar

  