import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class TwitchTrackerNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Twitch Tracker',
		name: 'twitchTrackerNode',
		group: ['Analytics'],
		version: 1,
		description: 'Twitch Tracker Node',
		defaults: {
			name: 'Twitch Tracker',
		},
		inputs: ['main'],
		outputs: ['main'],
		icon: 'file:twitch_tracker.svg',
		requestDefaults: {
			baseURL: 'https://twitchtracker.com/api',
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Get Channel Summary',
						value: 'getChannelSummary',
						action: 'Get channel summary',
					},
					{
						name: 'Get Game Summary',
						value: 'getGameSummary',
						action: 'Get game summary',
					},
				],
				default: 'getChannelSummary',
			},
			{
				displayName: 'Channel ID',
				name: 'channelId',
				type: 'string',
				default: '',
				placeholder: 'name of streamer',
				description: 'This needs to be the exact channel name in the URL when on the channel\'s homepage',
				displayOptions: {
					show: {
						operation: [
							'getChannelSummary',
						]
					},
				},
				routing: {
					request: {
						method: 'GET',
						url: '=/channels/summary/{{$parameter.channelId.trim()}}'
					},
				},
			},
			{
				displayName: 'Game ID or Name',
				name: 'gameId',
				type: 'string',
				default: '',
				placeholder: 'name or ID of game',
				description: 'This needs to be the exact channel name in the URL when on the channel\'s homepage',
				displayOptions: {
					show: {
						operation: [
							'getGameSummary',
						]
					},
				},
				routing: {
					request: {
						method: 'GET',
						url: '=/games/summary/{{$parameter.gameId.trim()}}'
					},
				},
			},
		],
	};

}
