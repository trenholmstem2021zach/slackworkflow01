
module.exports =
        function (app, botToken, slackChannelId, logger) {
            {
                app.message(async ({message, say}) => {
                    if (message.channel === slackChannelId) {
                        if (message.thread_ts === undefined && message.bot_id === 'B022J521AG0') {
                            if (message.subtype !== undefined && message.subtype === 'bot_message') {
                                console.log(message)
                                const m1 = message.text.split("\*")
                                console.log(m1)
                               /* await app.client.chat.postMessage({
                                    token: botToken,
                                    channel: slackChannelId,
                                    thread_ts: message.ts,
                                    text: "Support Requests Working On It"
                                }) */
                                // Add call another work on it function.
                            } else {
                                console.log(message)
                                // logger.info("Message Received Ignore Future TBD ... :" + message.text)
                            }

                        } else {
                            //Thread
                            console.log(message)
                            //logger.info("Thread message:  Future TBD ..." + message.type)
                        }
                    } else {
                        console.log(message.channel)
                        console.log(message.text)
                    }
                });

            }
        }
