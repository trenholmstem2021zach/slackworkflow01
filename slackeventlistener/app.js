require('dotenv').config()
const logger = require('pino')()

const logLevel = process.env.SLACK_BOT_LOG_LEVEL
logger.levels = logLevel || 'info'

const botToken = process.env.SLACK_BOT_TOKEN
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackAppToken = process.env.SLACK_APP_TOKEN
const slackChannelId = process.env.SLACK_CHANNEL_ID || "NONE"
const slackWorkflowId= process.env.SLACK_WORKFLOW_ID || "None"

if (   botToken === undefined
    || slackSigningSecret === undefined
    || slackAppToken === undefined
    || slackChannelId === undefined
) {

    console.log("[ERROR001: Missing Environment Configuration.  Check the Following env settings")
    console.log( "-- SLACK_BOT_TOKEN")
    console.log( "-- SLACK_SIGNING_SECRET")
    console.log( "-- SLACK_APP_TOKEN")

} else {
    const { App } = require('@slack/bolt');
    const messageHandler = require("./messageHandler")
    const app = new App({
        token: botToken,
        signingSecret: slackSigningSecret,
        appToken: slackAppToken
    });

    messageHandler(app, botToken, slackChannelId, slackWorkflowId, logger);

    (async () => {
        console.log("App Starting ")
        await app.start(process.env.PORT || 8000);

        console.log('⚡️ Bolt app is running! on Port: ' + process.env.PORT );
    })();
}
