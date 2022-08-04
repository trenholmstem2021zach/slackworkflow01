# Platform Support Slack Bot

The Slackbot is written with JavaScript using the bolt.js framework. Bolt.js is a framework created by Slack to make it easier to build Slack applications.

## Slack API Documentation

- Bolt.js Documentation
  https://slack.dev/bolt-js/tutorial/getting-started

- Bolt.js GitHub Page
  https://github.com/slackapi/bolt-js

Bolt.js is entirely a backend framework. There are no frontend components in the Slack bot application.

## Software Requirements

The Slack bot was written specifically with these tools:

- **Node.js**
  Version: 14.15.0 or greater
- **Yarn**
  Version: 1.21.1 or greater

## Dependencies

These are the dependencies that are used in the Slack bot and a description of where it is used.

- **@slack/bolt** - Bolt.js - Slack SDK for Slack App Development. - [Docs](https://slack.dev/bolt-js/tutorial/getting-started) - [Repo](https://github.com/SlackAPI/bolt-js)
- **dotenv** - Handling of environment variables - [Repo](https://github.com/motdotla/dotenv#readme)
- **pino** - Logging library for node. Displays in JSON format by default. Log level is specified as an environment variable. - [Repo](https://github.com/pinojs/pino)

## Project Structure

The following is a high level overview of application code:

- **app.js** - Application Entry Point and Configuration
- **messageHandler.js** - Handles all events from Slack

## Launching Platform Support Slack Bot

Install dependencies:

`$ yarn install`

To start the slack bot locally:

`$ yarn start`

## Running Unit Tests

To run unit tests:

TBD

### Randomizing Unit Tests

TBD


## Environment Variables

To configure the Slackbot, the following environment variables are used:

SLACK_BOT_LOG_LEVEL
logger.levels = logLevel || 'info'

const botToken = process.env.SLACK_BOT_TOKEN
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackAppToken = process.env.SLACK_APP_TOKEN
const slackChannelId = process.env.SLACK_CHANNEL_ID || "NONE"
const slackWorkflowId= process.env.SLACK_WORKFLOW_ID || "None"
- **SLACK_BOT_TOKEN** - The OAuth token at https://api.slack.com/ when the Platform Support app was initially configured.
- **SLACK_SIGNING_SECRET** - The signing secret for Slack to verify the authenticity of calls.
- **SLACK_BOT_LOG_LEVEL** - The level for application logs. See below for more details.
- **SLACK_WORKFLOW_ID** - The Slack Workflow to Respond to
- **SLACK_CHANNEL_ID** - The Slack Channel to respond to.

## Logging

To set the current log level, set the environment variable: `LOG_LEVEL`.

```
$ export LOG_LEVEL=debug  # Set log level to debug
$ export LOG_LEVEL=trace  # Set log level to trace
```

Log levels are defined [here](https://getpino.io/#/docs/api?id=levels)

| Level | Number |
| ----- | ------ |
| trace | 10     |
| debug | 20     |
| info  | 30     |
| warn  | 40     |
| error | 50     |
| fatal | 60     |

Note: By default the log level is `info` if not provided.

