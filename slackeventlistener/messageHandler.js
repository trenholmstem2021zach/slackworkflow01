
module.exports =
        function (app, botToken, slackChannelId, logger) {
            {

                app.message(async ({message, say}) => {
                    logger.info("Message Received:"  + message.text)
                    console.log(message)
                    console.log("Message:" + message.text)
                    await app.client.chat.postMessage({
                        token: botToken,
                        channel: slackChannelId,
                        thread_ts: message.ts,
                        text: "Working On It"
                    })
                });

            }
        }
