
// Message Handler
// List to all Message Events
//

module.exports =
        function (app, botToken, slackChannelId, slackWorkflowId, logger) {
            {
                app.message(async ({message, say}) => {
                    if (message.channel === slackChannelId) {
                        if (message.thread_ts === undefined && message.bot_id === slackWorkflowId) {
                            if (message.subtype !== undefined && message.subtype === 'bot_message') {

                                console.log(message.channel)
                                const m1 = message.text
                                console.log(m1)
                            } else {
                                logger.info("Message Received Ignore Future TBD ... :" + message.channel + ":" + message.text)
                            }
                        } else {
                            console.log(message)
                        }
                    } else {
                            // All events flowthrough
                            // other channels
                            const TBD = 'future'
                            /*
                            console.log(message.channel)
                            console.log(message.type)
                            console.log(message.text)
                            */
                    }
                    // ignore
                    //console.log(message)
                });

            }
        }
