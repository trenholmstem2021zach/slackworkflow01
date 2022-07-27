
module.exports =
        function (app, botToken, slackChannelId, logger) {
            {
                app.message(async ({message, say}) => {
                    if (message.thread_ts === undefined) {
                        if (message.subtype !== undefined && message.subtype === 'bot_message') {
                            console.log(message)
                            const m1 = message.text.split("\*")
                            console.log(m1)
                            await app.client.chat.postMessage({
                                token: botToken,
                                channel: slackChannelId,
                                thread_ts: message.ts,
                                text: "Support Requests Working On It"
                            })
                            // Add call another work on it function.
                        } else {
                            logger.info("Message Received Ignore Future TBD ... :" + message.text)
                        }

                    } else {
                        //Thread
                        logger.info("Thread message:  Future TBD ...")
                    }
                });

            }
        }
