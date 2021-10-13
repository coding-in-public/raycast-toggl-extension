#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Google Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_GSA.max-600x600.png
// @raycast.argument1 { "type": "text", "placeholder": "Description", "optional": true }

// Documentation:
// @raycast.description Start Google Timer
// @raycast.author Chris Pennington @cpenned on Twitter

import {startTimer} from './start-timer.js'

const PROJECT_NAME = 'Google'
const PROJECT_ID = 157063009;

const description = process.argv[2];

startTimer(PROJECT_ID, PROJECT_NAME, description);