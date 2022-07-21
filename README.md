# slackworkflow01
Example Slack Workflow using google Sheets

Enable
https://edab-216-66-36-36.ngrok.io/slack/events


Subscribe to bot events
Apps can subscribe to receive events the bot user has access to (like new messages in a channel). If you add an event here, we’ll add the necessary OAuth scope for you.

Event Name	Description	Required Scope
message.channels
A message was posted to a channel

channels:history

message.im
A message was posted in a direct message channel

im:history

Subscribe to events on behalf of users
You may also want your app to receive events related to users who have authorized the app (and conversations they’re part of). If you add an event here, we’ll add the necessary OAuth scope for you.

Event Name	Description	Required Scope
channel_created
A channel was created

channels:read

message.groups
A message was posted to a private channel

groups:history

message.im
A message was posted in a direct message channel

im:history

Scopes
A Slack app's capabilities and permissions are governed by the scopes it requests.

Bot Token Scopes
Scopes that govern what your app can access.

OAuth Scope
Description

channels:history
View messages and other content in public channels that Test SlackBot has been added to

chat:write
Send messages as @test_slackbot

chat:write.public
Send messages to channels @test_slackbot isn't a member of

commands
Add shortcuts and/or slash commands that people can use

im:history
View messages and other content in direct messages that Test SlackBot has been added to

im:read
View basic information about direct messages that Test SlackBot has been added to



User Token Scopes
Scopes that access user data and act on behalf of users that authorize them.

OAuth Scope
Description

channels:read
View basic information about public channels in a workspace

channels:write
Manage a user’s public channels and create new ones on a user’s behalf

groups:history
View messages and other content in a user’s private channels

im:history
View messages and other content in a user’s direct messages



