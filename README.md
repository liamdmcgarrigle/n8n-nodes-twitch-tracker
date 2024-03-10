# Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview of Community Twitch Tracker n8n Node](#overview-of-community-twitch-tracker-n8n-node)
- [If you want a custom node](#if-you-want-a-custom-node)
- [Bugs/Contributing/Feature Request](#bugscontributingfeature-request)
- [Documentation](#documentation)
	- [Installation](#installation)
	- [Get Channel Summary](#get-channel-summary)
	- [Get Game Summary](#get-game-summary)

# Overview of Community Twitch Tracker n8n Node
I created this nod for a friend to make it a little nicer to use the very simple [Twitch Tracker API](https://twitchtracker.com/api).

# If you want a custom node
Please reach out to me using the info on [my GitHub page](https://github.com/liamdmcgarrigle).  \
Nodes can be built for the community as well as privately just for one organization.

# Bugs/Contributing/Feature Request

If you have a bug to report or a feature request, please [submit a GitHub issue](https://github.com/liamdmcgarrigle/n8n-nodes-zoho-bookings/issues/new) with as much detail as you're able to give.

Feel free to submit PRs, but please get in touch with me first to make sure I am willing to add the feature before you spend the time on it.

# Documentation

## Installation

This can only be installed if you are self-hosting n8n.

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Get Channel Summary
You must pass in the exact of the streamer/channel. You can find this from the URL when on the streamer's Twitch page.

## Get Game Summary
You can pass in the exact ID or the exact name of the game.

To find the exact ID and exact name, go to https://twitchtracker.com/games 
On the page of the game, the title will be the name and the number in the end of the URL will be the ID
