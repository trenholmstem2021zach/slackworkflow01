const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    appToken: process.env.SLACK_APP_TOKEN
});

app.message(async ({ message, say }) => {
    console.log(message)
    console.log("Message:" + message.text)
    await app.client.chat.postMessage({
        token: process.env.SLACK_BOT_TOKEN,
        channel: 'C03DL3VMLLU',
        thread_ts: message.ts,
        text: "Working On It"
    })
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 8000);

    console.log('⚡️ Bolt app is running!');
})();
