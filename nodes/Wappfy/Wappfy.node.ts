import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeOperationError,
  IDataObject,
  NodeConnectionType,
} from '../../types';

export class Wappfy implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Wappfy',
    name: 'wappfy',
    icon: 'file:wappfy.svg',
    group: ['communication'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Interact with WhatsApp through Wappfy API',
    defaults: {
      name: 'Wappfy',
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    credentials: [
      {
        name: 'wappfyApi',
        required: true,
      },
    ],
    properties: [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
          {
            name: 'Session',
            value: 'session',
          },
          {
            name: 'Message',
            value: 'message',
          },
          {
            name: 'Chat',
            value: 'chat',
          },
          {
            name: 'Contact',
            value: 'contact',
          },
          {
            name: 'Group',
            value: 'group',
          },
          {
            name: 'Status',
            value: 'status',
          },
          {
            name: 'Channel',
            value: 'channel',
          },
          {
            name: 'Poll',
            value: 'poll',
          },
          {
            name: 'Profile',
            value: 'profile',
          },
          {
            name: 'LID',
            value: 'lid',
          },
          {
            name: 'File',
            value: 'file',
          },
        ],
        default: 'message',
        required: true,
      },

      // SESSION OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['session'],
          },
        },
        options: [
          {
            name: 'Get',
            value: 'get',
            description: 'Get session information',
            action: 'Get a session',
          },
          {
            name: 'Stop',
            value: 'stop',
            description: 'Stop a session',
            action: 'Stop a session',
          },
          {
            name: 'Restart',
            value: 'restart',
            description: 'Restart a session',
            action: 'Restart a session',
          },
          {
            name: 'Logout',
            value: 'logout',
            description: 'Logout from a session',
            action: 'Logout from a session',
          },
          {
            name: 'QR Code',
            value: 'qrcode',
            description: 'Get QR code for session',
            action: 'Get QR code',
          },
        ],
        default: 'get',
      },

      // MESSAGE OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['message'],
          },
        },
        options: [
          {
            name: 'Send Text',
            value: 'sendText',
            description: 'Send a text message',
            action: 'Send text message',
          },
          {
            name: 'Send Reply',
            value: 'sendReply',
            description: 'Reply to a message',
            action: 'Reply to message',
          },
          {
            name: 'Send Image',
            value: 'sendImage',
            description: 'Send an image',
            action: 'Send image',
          },
          {
            name: 'Send Video',
            value: 'sendVideo',
            description: 'Send a video',
            action: 'Send video',
          },
          {
            name: 'Send Audio',
            value: 'sendAudio',
            description: 'Send an audio file',
            action: 'Send audio',
          },
          {
            name: 'Send Voice',
            value: 'sendVoice',
            description: 'Send a voice message',
            action: 'Send voice message',
          },
          {
            name: 'Send File',
            value: 'sendFile',
            description: 'Send a document/file',
            action: 'Send file',
          },
          {
            name: 'Send Location',
            value: 'sendLocation',
            description: 'Send a location',
            action: 'Send location',
          },
          {
            name: 'Send Contact',
            value: 'sendContact',
            description: 'Send a contact',
            action: 'Send contact',
          },
          {
            name: 'Send Reaction',
            value: 'sendReaction',
            description: 'React to a message',
            action: 'Send reaction',
          },
          {
            name: 'Mark as Read',
            value: 'sendSeen',
            description: 'Mark message as read',
            action: 'Mark as read',
          },
        ],
        default: 'sendText',
      },

      // POLL OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['poll'],
          },
        },
        options: [
          {
            name: 'Send Poll',
            value: 'sendPoll',
            description: 'Send a poll',
            action: 'Send poll',
          },
          {
            name: 'Send Poll Vote',
            value: 'sendPollVote',
            description: 'Vote on a poll',
            action: 'Vote on poll',
          },
        ],
        default: 'sendPoll',
      },

      // CHAT OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['chat'],
          },
        },
        options: [
          {
            name: 'List',
            value: 'list',
            description: 'List all chats',
            action: 'List chats',
          },
          {
            name: 'Overview',
            value: 'overview',
            description: 'Get chats overview',
            action: 'Get chats overview',
          },
          {
            name: 'Get Picture',
            value: 'getPicture',
            description: 'Get chat picture',
            action: 'Get chat picture',
          },
          {
            name: 'Archive',
            value: 'archive',
            description: 'Archive a chat',
            action: 'Archive chat',
          },
          {
            name: 'Unarchive',
            value: 'unarchive',
            description: 'Unarchive a chat',
            action: 'Unarchive chat',
          },
          {
            name: 'Mark Unread',
            value: 'markUnread',
            description: 'Mark chat as unread',
            action: 'Mark chat as unread',
          },
          {
            name: 'Delete',
            value: 'delete',
            description: 'Delete a chat',
            action: 'Delete chat',
          },
          {
            name: 'Mark Messages Read',
            value: 'markMessagesRead',
            description: 'Mark messages as read in batch',
            action: 'Mark messages as read',
          },
          {
            name: 'Get Messages',
            value: 'getMessages',
            description: 'Get messages from a chat',
            action: 'Get chat messages',
          },
          {
            name: 'Get Message',
            value: 'getMessage',
            description: 'Get specific message by ID',
            action: 'Get message by ID',
          },
          {
            name: 'Pin Message',
            value: 'pinMessage',
            description: 'Pin a message',
            action: 'Pin message',
          },
          {
            name: 'Unpin Message',
            value: 'unpinMessage',
            description: 'Unpin a message',
            action: 'Unpin message',
          },
          {
            name: 'Edit Message',
            value: 'editMessage',
            description: 'Edit a message',
            action: 'Edit message',
          },
          {
            name: 'Delete Message',
            value: 'deleteMessage',
            description: 'Delete a message',
            action: 'Delete message',
          },
          {
            name: 'Delete All Messages',
            value: 'deleteAllMessages',
            description: 'Delete all messages in chat',
            action: 'Delete all messages',
          },
        ],
        default: 'list',
      },

      // CONTACT OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['contact'],
          },
        },
        options: [
          {
            name: 'List',
            value: 'list',
            description: 'List all contacts',
            action: 'List contacts',
          },
          {
            name: 'Get',
            value: 'get',
            description: 'Get contact details',
            action: 'Get contact',
          },
          {
            name: 'Update',
            value: 'update',
            description: 'Update contact in phone book',
            action: 'Update contact',
          },
          {
            name: 'Check Exists',
            value: 'checkExists',
            description: 'Check if number exists on WhatsApp',
            action: 'Check if number exists',
          },
          {
            name: 'Get About',
            value: 'getAbout',
            description: 'Get contact about/status',
            action: 'Get contact about',
          },
          {
            name: 'Get Profile Picture',
            value: 'getProfilePicture',
            description: 'Get contact profile picture',
            action: 'Get profile picture',
          },
          {
            name: 'Block',
            value: 'block',
            description: 'Block a contact',
            action: 'Block contact',
          },
          {
            name: 'Unblock',
            value: 'unblock',
            description: 'Unblock a contact',
            action: 'Unblock contact',
          },
        ],
        default: 'list',
      },

      // GROUP OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['group'],
          },
        },
        options: [
          {
            name: 'Create',
            value: 'create',
            description: 'Create a new group',
            action: 'Create group',
          },
          {
            name: 'List',
            value: 'list',
            description: 'List all groups',
            action: 'List groups',
          },
          {
            name: 'Count',
            value: 'count',
            description: 'Count groups',
            action: 'Count groups',
          },
          {
            name: 'Get',
            value: 'get',
            description: 'Get group details',
            action: 'Get group',
          },
          {
            name: 'Delete',
            value: 'delete',
            description: 'Delete a group',
            action: 'Delete group',
          },
          {
            name: 'Join',
            value: 'join',
            description: 'Join a group via invite link',
            action: 'Join group',
          },
          {
            name: 'Get Join Info',
            value: 'getJoinInfo',
            description: 'Get group info from invite link',
            action: 'Get join info',
          },
          {
            name: 'Leave',
            value: 'leave',
            description: 'Leave a group',
            action: 'Leave group',
          },
          {
            name: 'Refresh',
            value: 'refresh',
            description: 'Sync groups with server',
            action: 'Refresh groups',
          },
          {
            name: 'Get Picture',
            value: 'getPicture',
            description: 'Get group picture',
            action: 'Get group picture',
          },
          {
            name: 'Set Picture',
            value: 'setPicture',
            description: 'Set group picture',
            action: 'Set group picture',
          },
          {
            name: 'Delete Picture',
            value: 'deletePicture',
            description: 'Delete group picture',
            action: 'Delete group picture',
          },
          {
            name: 'Update Subject',
            value: 'updateSubject',
            description: 'Update group subject/name',
            action: 'Update group subject',
          },
          {
            name: 'Update Description',
            value: 'updateDescription',
            description: 'Update group description',
            action: 'Update group description',
          },
          {
            name: 'Get Security Info Admin Only',
            value: 'getSecurityInfoAdminOnly',
            description: 'Get info admin only setting',
            action: 'Get security info setting',
          },
          {
            name: 'Set Security Info Admin Only',
            value: 'setSecurityInfoAdminOnly',
            description: 'Set info admin only setting',
            action: 'Set security info setting',
          },
          {
            name: 'Get Security Messages Admin Only',
            value: 'getSecurityMessagesAdminOnly',
            description: 'Get messages admin only setting',
            action: 'Get security messages setting',
          },
          {
            name: 'Set Security Messages Admin Only',
            value: 'setSecurityMessagesAdminOnly',
            description: 'Set messages admin only setting',
            action: 'Set security messages setting',
          },
          {
            name: 'Get Participants',
            value: 'getParticipants',
            description: 'Get group participants',
            action: 'Get participants',
          },
          {
            name: 'Add Participant',
            value: 'addParticipant',
            description: 'Add participant to group',
            action: 'Add participant',
          },
          {
            name: 'Remove Participant',
            value: 'removeParticipant',
            description: 'Remove participant from group',
            action: 'Remove participant',
          },
          {
            name: 'Promote Admin',
            value: 'promoteAdmin',
            description: 'Promote participant to admin',
            action: 'Promote to admin',
          },
          {
            name: 'Demote Admin',
            value: 'demoteAdmin',
            description: 'Demote admin to participant',
            action: 'Demote admin',
          },
        ],
        default: 'list',
      },

      // STATUS OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['status'],
          },
        },
        options: [
          {
            name: 'Send Text',
            value: 'sendText',
            description: 'Send text status',
            action: 'Send text status',
          },
          {
            name: 'Send Image',
            value: 'sendImage',
            description: 'Send image status',
            action: 'Send image status',
          },
          {
            name: 'Send Video',
            value: 'sendVideo',
            description: 'Send video status',
            action: 'Send video status',
          },
          {
            name: 'Send Voice',
            value: 'sendVoice',
            description: 'Send voice status',
            action: 'Send voice status',
          },
          {
            name: 'Delete',
            value: 'delete',
            description: 'Delete a status',
            action: 'Delete status',
          },
          {
            name: 'Get New Message ID',
            value: 'getNewMessageId',
            description: 'Get new message ID for status',
            action: 'Get new status message ID',
          },
        ],
        default: 'sendText',
      },

      // CHANNEL OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['channel'],
          },
        },
        options: [
          {
            name: 'List',
            value: 'list',
            description: 'List channels',
            action: 'List channels',
          },
          {
            name: 'Create',
            value: 'create',
            description: 'Create a channel',
            action: 'Create channel',
          },
          {
            name: 'Get',
            value: 'get',
            description: 'Get channel by ID',
            action: 'Get channel',
          },
          {
            name: 'Get by Invite Code',
            value: 'getByInviteCode',
            description: 'Get channel by invite code',
            action: 'Get channel by invite',
          },
          {
            name: 'Delete',
            value: 'delete',
            description: 'Delete a channel',
            action: 'Delete channel',
          },
          {
            name: 'Search by View',
            value: 'searchByView',
            description: 'Search public channels by view',
            action: 'Search channels by view',
          },
          {
            name: 'Search by Text',
            value: 'searchByText',
            description: 'Search public channels by text',
            action: 'Search channels by text',
          },
          {
            name: 'Get Search Views',
            value: 'getSearchViews',
            description: 'Get available search views',
            action: 'Get search views',
          },
          {
            name: 'Get Search Countries',
            value: 'getSearchCountries',
            description: 'Get available search countries',
            action: 'Get search countries',
          },
          {
            name: 'Get Search Categories',
            value: 'getSearchCategories',
            description: 'Get available search categories',
            action: 'Get search categories',
          },
          {
            name: 'Get Messages Preview',
            value: 'getMessagesPreview',
            description: 'Get channel messages preview',
            action: 'Get messages preview',
          },
        ],
        default: 'list',
      },

      // PROFILE OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['profile'],
          },
        },
        options: [
          {
            name: 'Get',
            value: 'get',
            description: 'Get profile information',
            action: 'Get profile',
          },
          {
            name: 'Update Name',
            value: 'updateName',
            description: 'Update profile name',
            action: 'Update profile name',
          },
          {
            name: 'Update Status',
            value: 'updateStatus',
            description: 'Update profile status/about',
            action: 'Update profile status',
          },
          {
            name: 'Set Picture',
            value: 'setPicture',
            description: 'Set profile picture',
            action: 'Set profile picture',
          },
          {
            name: 'Delete Picture',
            value: 'deletePicture',
            description: 'Delete profile picture',
            action: 'Delete profile picture',
          },
        ],
        default: 'get',
      },

      // LID OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['lid'],
          },
        },
        options: [
          {
            name: 'List',
            value: 'list',
            description: 'List all LIDs',
            action: 'List LIDs',
          },
          {
            name: 'Count',
            value: 'count',
            description: 'Count LIDs',
            action: 'Count LIDs',
          },
          {
            name: 'Get by LID',
            value: 'getByLid',
            description: 'Get phone number by LID',
            action: 'Get by LID',
          },
          {
            name: 'Get by Phone',
            value: 'getByPhone',
            description: 'Get LID by phone number',
            action: 'Get by phone',
          },
        ],
        default: 'list',
      },

      // FILE OPERATIONS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['file'],
          },
        },
        options: [
          {
            name: 'Download',
            value: 'download',
            description: 'Download a file from message',
            action: 'Download file',
          },
        ],
        default: 'download',
      },

      // ===== FIELD DEFINITIONS =====

      // Message Fields
      {
        displayName: 'Chat ID',
        name: 'chatId',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['message', 'poll'],
            operation: ['sendText', 'sendReply', 'sendImage', 'sendVideo', 'sendAudio', 
                       'sendVoice', 'sendFile', 'sendLocation', 'sendContact', 'sendSeen',
                       'sendPoll', 'sendPollVote'],
          },
        },
        default: '',
        description: 'Chat ID (e.g., 123456789@c.us for direct, 123456789@g.us for group)',
      },

      {
        displayName: 'Text',
        name: 'text',
        type: 'string',
        typeOptions: {
          rows: 4,
        },
        required: true,
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendText', 'sendReply'],
          },
        },
        default: '',
        description: 'Message text to send',
      },

      {
        displayName: 'Reply To Message ID',
        name: 'replyTo',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendReply'],
          },
        },
        default: '',
        description: 'ID of the message to reply to',
      },

      // Media fields
      {
        displayName: 'Media Source',
        name: 'mediaSource',
        type: 'options',
        displayOptions: {
          show: {
            resource: ['message', 'status'],
            operation: ['sendImage', 'sendVideo', 'sendAudio', 'sendVoice', 'sendFile'],
          },
        },
        options: [
          {
            name: 'URL',
            value: 'url',
          },
          {
            name: 'Base64',
            value: 'base64',
          },
        ],
        default: 'url',
        description: 'Source of the media file',
      },

      {
        displayName: 'File URL',
        name: 'fileUrl',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['message', 'status', 'profile', 'group', 'channel'],
            operation: ['sendImage', 'sendVideo', 'sendAudio', 'sendVoice', 'sendFile', 'setPicture'],
            mediaSource: ['url'],
          },
        },
        default: '',
        description: 'URL of the file to send',
      },

      {
        displayName: 'Base64 Data',
        name: 'base64Data',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['message', 'status'],
            operation: ['sendImage', 'sendVideo', 'sendAudio', 'sendVoice', 'sendFile'],
            mediaSource: ['base64'],
          },
        },
        default: '',
        description: 'Base64 encoded file data',
      },

      {
        displayName: 'File Name',
        name: 'fileName',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['message', 'status', 'channel'],
            operation: ['sendImage', 'sendVideo', 'sendAudio', 'sendVoice', 'sendFile', 'create'],
            mediaSource: ['base64'],
          },
        },
        default: 'file',
        description: 'Name of the file',
      },

      {
        displayName: 'MIME Type',
        name: 'mimeType',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['message', 'status', 'channel'],
            operation: ['sendImage', 'sendVideo', 'sendAudio', 'sendVoice', 'sendFile', 'create'],
          },
        },
        default: '',
        placeholder: 'e.g., image/jpeg, video/mp4, audio/mpeg',
        description: 'MIME type of the file',
      },

      {
        displayName: 'Caption',
        name: 'caption',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['message', 'status'],
            operation: ['sendImage', 'sendVideo', 'sendFile'],
          },
        },
        default: '',
        description: 'Caption for the media',
      },

      // Location fields
      {
        displayName: 'Latitude',
        name: 'latitude',
        type: 'number',
        required: true,
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendLocation'],
          },
        },
        default: 0,
        description: 'Latitude of the location',
      },

      {
        displayName: 'Longitude',
        name: 'longitude',
        type: 'number',
        required: true,
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendLocation'],
          },
        },
        default: 0,
        description: 'Longitude of the location',
      },

      {
        displayName: 'Location Name',
        name: 'locationName',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendLocation'],
          },
        },
        default: '',
        description: 'Name of the location',
      },

      {
        displayName: 'Location Address',
        name: 'locationAddress',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendLocation'],
          },
        },
        default: '',
        description: 'Address of the location',
      },

      // Contact fields
      {
        displayName: 'Contact Source',
        name: 'contactSource',
        type: 'options',
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendContact'],
          },
        },
        options: [
          {
            name: 'Contact ID',
            value: 'contactId',
          },
          {
            name: 'vCard',
            value: 'vcard',
          },
        ],
        default: 'contactId',
        description: 'Source of contact data',
      },

      {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendContact'],
            contactSource: ['contactId'],
          },
        },
        default: '',
        description: 'Phone number or WhatsApp ID of the contact',
      },

      {
        displayName: 'vCard Data',
        name: 'vcard',
        type: 'string',
        required: true,
        typeOptions: {
          rows: 4,
        },
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendContact'],
            contactSource: ['vcard'],
          },
        },
        default: '',
        description: 'vCard data in format: BEGIN:VCARD...',
      },

      // Poll fields
      {
        displayName: 'Poll Question',
        name: 'pollName',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['poll'],
            operation: ['sendPoll'],
          },
        },
        default: '',
        description: 'The question for the poll',
      },

      {
        displayName: 'Poll Options',
        name: 'pollOptions',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['poll'],
            operation: ['sendPoll'],
          },
        },
        default: '',
        description: 'Poll options separated by comma',
      },

      {
        displayName: 'Multiple Answers',
        name: 'multipleAnswers',
        type: 'boolean',
        displayOptions: {
          show: {
            resource: ['poll'],
            operation: ['sendPoll'],
          },
        },
        default: false,
        description: 'Whether to allow multiple answers',
      },

      // Poll Vote fields
      {
        displayName: 'Poll Message ID',
        name: 'pollMessageId',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['poll'],
            operation: ['sendPollVote'],
          },
        },
        default: '',
        description: 'ID of the poll message',
      },

      {
        displayName: 'Poll Server ID',
        name: 'pollServerId',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['poll'],
            operation: ['sendPollVote'],
          },
        },
        default: '',
        description: 'Server ID of the poll (optional)',
      },

      {
        displayName: 'Votes',
        name: 'votes',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['poll'],
            operation: ['sendPollVote'],
          },
        },
        default: '',
        description: 'Comma-separated list of vote options',
      },

      // Reaction fields
      {
        displayName: 'Message ID',
        name: 'messageId',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendReaction', 'sendSeen'],
          },
        },
        default: '',
        description: 'ID of the message',
      },

      {
        displayName: 'Reaction Emoji',
        name: 'reaction',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendReaction'],
          },
        },
        default: '👍',
        description: 'Emoji to react with',
      },

      // Additional message options
      {
        displayName: 'Additional Options',
        name: 'additionalOptions',
        type: 'collection',
        placeholder: 'Add Option',
        default: {},
        displayOptions: {
          show: {
            resource: ['message'],
            operation: ['sendText'],
          },
        },
        options: [
          {
            displayName: 'Preview URL',
            name: 'previewUrl',
            type: 'boolean',
            default: true,
            description: 'Whether to generate link previews',
          },
          {
            displayName: 'Mentions',
            name: 'mentions',
            type: 'string',
            default: '',
            description: 'Comma-separated list of user IDs to mention',
          },
        ],
      },

      // Chat fields
      {
        displayName: 'Chat ID',
        name: 'chatIdField',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['chat'],
            operation: ['getPicture', 'archive', 'unarchive', 'markUnread', 'delete', 
                       'markMessagesRead', 'getMessages', 'getMessage', 'pinMessage', 
                       'unpinMessage', 'editMessage', 'deleteMessage', 'deleteAllMessages'],
          },
        },
        default: '',
        description: 'ID of the chat',
      },

      // Chat pagination
      {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
          show: {
            resource: ['chat', 'contact', 'group', 'channel'],
            operation: ['list', 'getMessages', 'getMessagesPreview'],
          },
        },
        default: 20,
        description: 'Number of items to return',
      },

      {
        displayName: 'Offset',
        name: 'offset',
        type: 'number',
        displayOptions: {
          show: {
            resource: ['chat', 'contact', 'group'],
            operation: ['list'],
          },
        },
        default: 0,
        description: 'Number of items to skip',
      },

      {
        displayName: 'Sort By',
        name: 'sortBy',
        type: 'options',
        displayOptions: {
          show: {
            resource: ['chat'],
            operation: ['list'],
          },
        },
        options: [
          {
            name: 'Message Timestamp',
            value: 'messageTimestamp',
          },
          {
            name: 'ID',
            value: 'id',
          },
          {
            name: 'Name',
            value: 'name',
          },
        ],
        default: 'messageTimestamp',
        description: 'Field to sort by',
      },

      {
        displayName: 'Sort Order',
        name: 'sortOrder',
        type: 'options',
        displayOptions: {
          show: {
            resource: ['chat', 'contact', 'group'],
            operation: ['list'],
          },
        },
        options: [
          {
            name: 'Ascending',
            value: 'asc',
          },
          {
            name: 'Descending',
            value: 'desc',
          },
        ],
        default: 'desc',
        description: 'Sort order',
      },

      // Chat overview filters
      {
        displayName: 'Filter IDs',
        name: 'filterIds',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['chat'],
            operation: ['overview'],
          },
        },
        default: '',
        description: 'Comma-separated list of chat IDs to filter',
      },

      // Chat picture refresh
      {
        displayName: 'Refresh',
        name: 'refresh',
        type: 'boolean',
        displayOptions: {
          show: {
            resource: ['chat', 'contact', 'group'],
            operation: ['getPicture', 'getProfilePicture'],
          },
        },
        default: false,
        description: 'Whether to refresh the picture from server',
      },

      // Mark messages read options
      {
        displayName: 'Messages Count',
        name: 'messagesCount',
        type: 'number',
        displayOptions: {
          show: {
            resource: ['chat'],
            operation: ['markMessagesRead'],
          },
        },
        default: 30,
        description: 'Number of messages to mark as read',
      },

      {
        displayName: 'Days',
        name: 'days',
        type: 'number',
        displayOptions: {
          show: {
            resource: ['chat'],
            operation: ['markMessagesRead'],
          },
        },
        default: 7,
        description: 'Mark messages from last N days',
      },

      // Message operations fields
      {
        displayName: 'Message ID',
        name: 'messageIdField',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['chat'],
            operation: ['getMessage', 'pinMessage', 'unpinMessage', 'editMessage', 'deleteMessage'],
          },
        },
        default: '',
        description: 'ID of the message',
      },

      {
        displayName: 'New Text',
        name: 'newText',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['chat'],
            operation: ['editMessage'],
          },
        },
        default: '',
        description: 'New text for the message',
      },

      // Contact fields
      {
        displayName: 'Contact ID',
        name: 'contactIdField',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['contact'],
            operation: ['get', 'update', 'getAbout', 'getProfilePicture', 'block', 'unblock'],
          },
        },
        default: '',
        description: 'Contact ID or phone number',
      },

      {
        displayName: 'Phone Number',
        name: 'phoneNumber',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['contact'],
            operation: ['checkExists'],
          },
        },
        default: '',
        description: 'Phone number to check',
      },

      // Contact update fields
      {
        displayName: 'First Name',
        name: 'firstName',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['contact'],
            operation: ['update'],
          },
        },
        default: '',
        description: 'Contact first name',
      },

      {
        displayName: 'Last Name',
        name: 'lastName',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['contact'],
            operation: ['update'],
          },
        },
        default: '',
        description: 'Contact last name',
      },

      // Group fields
      {
        displayName: 'Group Name',
        name: 'groupName',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['group'],
            operation: ['create'],
          },
        },
        default: '',
        description: 'Name of the group',
      },

      {
        displayName: 'Participants',
        name: 'participants',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['group'],
            operation: ['create'],
          },
        },
        default: '',
        description: 'Comma-separated list of participant phone numbers',
      },

      {
        displayName: 'Group ID',
        name: 'groupId',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['group'],
            operation: ['get', 'delete', 'leave', 'getPicture', 'setPicture', 'deletePicture',
                       'updateSubject', 'updateDescription', 'getSecurityInfoAdminOnly',
                       'setSecurityInfoAdminOnly', 'getSecurityMessagesAdminOnly',
                       'setSecurityMessagesAdminOnly', 'getParticipants', 'addParticipant',
                       'removeParticipant', 'promoteAdmin', 'demoteAdmin'],
          },
        },
        default: '',
        description: 'ID of the group',
      },

      {
        displayName: 'Invite Link/Code',
        name: 'inviteCode',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['group'],
            operation: ['join', 'getJoinInfo'],
          },
        },
        default: '',
        description: 'WhatsApp group invite link or code',
      },

      {
        displayName: 'Subject',
        name: 'subject',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['group'],
            operation: ['updateSubject'],
          },
        },
        default: '',
        description: 'New group subject/name',
      },

      {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['group', 'channel'],
            operation: ['updateDescription', 'create'],
          },
        },
        default: '',
        description: 'Group/Channel description',
      },

      {
        displayName: 'Enabled',
        name: 'enabled',
        type: 'boolean',
        required: true,
        displayOptions: {
          show: {
            resource: ['group'],
            operation: ['setSecurityInfoAdminOnly', 'setSecurityMessagesAdminOnly'],
          },
        },
        default: true,
        description: 'Whether to enable the setting',
      },

      {
        displayName: 'Participant ID',
        name: 'participantId',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['group'],
            operation: ['addParticipant', 'removeParticipant', 'promoteAdmin', 'demoteAdmin'],
          },
        },
        default: '',
        description: 'Phone number or ID of the participant',
      },

      // Status fields
      {
        displayName: 'Status Text',
        name: 'statusText',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['status'],
            operation: ['sendText'],
          },
        },
        default: '',
        description: 'Text for the status',
      },

      {
        displayName: 'Background Color',
        name: 'backgroundColor',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['status'],
            operation: ['sendText'],
          },
        },
        default: '#38b42f',
        description: 'Background color for text status',
      },

      {
        displayName: 'Font',
        name: 'font',
        type: 'number',
        displayOptions: {
          show: {
            resource: ['status'],
            operation: ['sendText'],
          },
        },
        default: 1,
        description: 'Font style for text status',
      },

      {
        displayName: 'Contacts',
        name: 'statusContacts',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['status'],
            operation: ['sendText'],
          },
        },
        default: '',
        description: 'Comma-separated list of contact IDs to share status with',
      },

      {
        displayName: 'Status Message ID',
        name: 'statusMessageId',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['status'],
            operation: ['delete'],
          },
        },
        default: '',
        description: 'ID of the status message to delete',
      },

      // Channel fields
      {
        displayName: 'Channel Name',
        name: 'channelName',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['channel'],
            operation: ['create'],
          },
        },
        default: '',
        description: 'Name of the channel',
      },

      {
        displayName: 'Channel ID',
        name: 'channelId',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['channel'],
            operation: ['get', 'delete'],
          },
        },
        default: '',
        description: 'ID of the channel',
      },

      {
        displayName: 'Invite Code',
        name: 'channelInviteCode',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['channel'],
            operation: ['getByInviteCode', 'getMessagesPreview'],
          },
        },
        default: '',
        description: 'Channel invite code',
      },

      {
        displayName: 'Role',
        name: 'role',
        type: 'options',
        displayOptions: {
          show: {
            resource: ['channel'],
            operation: ['list'],
          },
        },
        options: [
          {
            name: 'All',
            value: '',
          },
          {
            name: 'Owner',
            value: 'OWNER',
          },
          {
            name: 'Admin',
            value: 'ADMIN',
          },
          {
            name: 'Subscriber',
            value: 'SUBSCRIBER',
          },
        ],
        default: '',
        description: 'Filter channels by role',
      },

      // Channel search fields
      {
        displayName: 'Search View',
        name: 'searchView',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['channel'],
            operation: ['searchByView'],
          },
        },
        default: 'RECOMMENDED',
        description: 'View type for search',
      },

      {
        displayName: 'Search Text',
        name: 'searchText',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['channel'],
            operation: ['searchByText'],
          },
        },
        default: '',
        description: 'Text to search for',
      },

      {
        displayName: 'Countries',
        name: 'countries',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['channel'],
            operation: ['searchByView', 'searchByText'],
          },
        },
        default: '',
        description: 'Comma-separated list of country codes',
      },

      {
        displayName: 'Categories',
        name: 'categories',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['channel'],
            operation: ['searchByView', 'searchByText'],
          },
        },
        default: '',
        description: 'Comma-separated list of categories',
      },

      {
        displayName: 'Start Cursor',
        name: 'startCursor',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['channel'],
            operation: ['searchByView', 'searchByText'],
          },
        },
        default: '',
        description: 'Cursor for pagination',
      },

      {
        displayName: 'Download Media',
        name: 'downloadMedia',
        type: 'boolean',
        displayOptions: {
          show: {
            resource: ['channel', 'chat'],
            operation: ['getMessagesPreview', 'getMessages'],
          },
        },
        default: false,
        description: 'Whether to download media files',
      },

      // Profile fields
      {
        displayName: 'Profile Name',
        name: 'profileName',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['profile'],
            operation: ['updateName'],
          },
        },
        default: '',
        description: 'New profile name',
      },

      {
        displayName: 'Profile Status',
        name: 'profileStatus',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['profile'],
            operation: ['updateStatus'],
          },
        },
        default: '',
        description: 'New profile status/about',
      },

      // LID fields
      {
        displayName: 'LID',
        name: 'lid',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['lid'],
            operation: ['getByLid'],
          },
        },
        default: '',
        description: 'Linked ID',
      },

      {
        displayName: 'Phone Number',
        name: 'lidPhoneNumber',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['lid'],
            operation: ['getByPhone'],
          },
        },
        default: '',
        description: 'Phone number to get LID for',
      },

      // File fields
      {
        displayName: 'File Name',
        name: 'downloadFileName',
        type: 'string',
        required: true,
        displayOptions: {
          show: {
            resource: ['file'],
            operation: ['download'],
          },
        },
        default: '',
        description: 'Name of the file to download',
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];
    const credentials = await this.getCredentials('wappfyApi');
    
    const baseUrl = credentials.baseUrl as string;
    const instanceName = credentials.instanceName as string;

    for (let i = 0; i < items.length; i++) {
      try {
        const resource = this.getNodeParameter('resource', i) as string;
        const operation = this.getNodeParameter('operation', i) as string;

        let responseData;
        let requestOptions: any = {
          headers: {
            'Content-Type': 'application/json',
          },
          json: true,
          returnFullResponse: false,
        };

        // Add API key to headers if provided
        if (credentials.apiKey) {
          requestOptions.headers['apikey'] = credentials.apiKey;
        }

        // SESSION OPERATIONS
        if (resource === 'session') {
          if (operation === 'get') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/sessions/${instanceName}`,
            };
          } else if (operation === 'stop') {
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sessions/${instanceName}/stop`,
            };
          } else if (operation === 'restart') {
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sessions/${instanceName}/restart`,
            };
          } else if (operation === 'logout') {
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sessions/${instanceName}/logout`,
            };
          } else if (operation === 'qrcode') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/sessions/${instanceName}/qrcode`,
            };
          }
        }
        // MESSAGE OPERATIONS
        else if (resource === 'message') {
          if (operation === 'sendText') {
            const chatId = this.getNodeParameter('chatId', i) as string;
            const text = this.getNodeParameter('text', i) as string;
            const additionalOptions = this.getNodeParameter('additionalOptions', i) as IDataObject;

            const body: any = {
              session: instanceName,
              chatId,
              text,
            };

            if (additionalOptions.previewUrl !== undefined) {
              body.previewUrl = additionalOptions.previewUrl;
            }
            if (additionalOptions.mentions) {
              body.mentions = (additionalOptions.mentions as string).split(',').map(m => m.trim());
            }

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sendText`,
              body,
            };
          } else if (operation === 'sendReply') {
            const chatId = this.getNodeParameter('chatId', i) as string;
            const text = this.getNodeParameter('text', i) as string;
            const replyTo = this.getNodeParameter('replyTo', i) as string;

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sendReply`,
              body: {
                session: instanceName,
                chatId,
                text,
                reply_to: replyTo,
              },
            };
          } else if (operation === 'sendImage' || operation === 'sendVideo' || 
                     operation === 'sendAudio' || operation === 'sendVoice' || 
                     operation === 'sendFile') {
            const chatId = this.getNodeParameter('chatId', i) as string;
            const mediaSource = this.getNodeParameter('mediaSource', i) as string;
            const mimeType = this.getNodeParameter('mimeType', i) as string;

            const body: any = {
              session: instanceName,
              chatId,
              file: {
                mimetype: mimeType,
              },
            };

            if (mediaSource === 'url') {
              body.file.url = this.getNodeParameter('fileUrl', i) as string;
            } else {
              body.file.base64 = this.getNodeParameter('base64Data', i) as string;
              body.file.filename = this.getNodeParameter('fileName', i, 'file') as string;
            }

            if (operation === 'sendImage' || operation === 'sendVideo' || operation === 'sendFile') {
              const caption = this.getNodeParameter('caption', i, '') as string;
              if (caption) {
                body.caption = caption;
              }
            }

            let endpoint = '/api/sendFile';
            if (operation === 'sendImage') endpoint = '/api/sendImage';
            else if (operation === 'sendVideo') endpoint = '/api/sendVideo';
            else if (operation === 'sendAudio') endpoint = '/api/sendAudio';
            else if (operation === 'sendVoice') endpoint = '/api/sendVoice';

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}${endpoint}`,
              body,
            };
          } else if (operation === 'sendLocation') {
            const chatId = this.getNodeParameter('chatId', i) as string;
            const latitude = this.getNodeParameter('latitude', i) as number;
            const longitude = this.getNodeParameter('longitude', i) as number;
            const locationName = this.getNodeParameter('locationName', i, '') as string;
            const locationAddress = this.getNodeParameter('locationAddress', i, '') as string;

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sendLocation`,
              body: {
                session: instanceName,
                chatId,
                location: {
                  latitude,
                  longitude,
                  name: locationName,
                  address: locationAddress,
                },
              },
            };
          } else if (operation === 'sendContact') {
            const chatId = this.getNodeParameter('chatId', i) as string;
            const contactSource = this.getNodeParameter('contactSource', i) as string;

            const body: any = {
              session: instanceName,
              chatId,
            };

            if (contactSource === 'contactId') {
              body.contactId = this.getNodeParameter('contactId', i) as string;
            } else {
              body.vcard = this.getNodeParameter('vcard', i) as string;
            }

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sendContact`,
              body,
            };
          } else if (operation === 'sendReaction') {
            const messageId = this.getNodeParameter('messageId', i) as string;
            const reaction = this.getNodeParameter('reaction', i) as string;

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sendReaction`,
              body: {
                session: instanceName,
                messageId,
                reaction,
              },
            };
          } else if (operation === 'sendSeen') {
            const chatId = this.getNodeParameter('chatId', i) as string;
            const messageId = this.getNodeParameter('messageId', i, '') as string;

            const body: any = {
              session: instanceName,
              chatId,
            };

            if (messageId) {
              body.messageId = messageId;
            }

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sendSeen`,
              body,
            };
          }
        }
        // POLL OPERATIONS
        else if (resource === 'poll') {
          if (operation === 'sendPoll') {
            const chatId = this.getNodeParameter('chatId', i) as string;
            const pollName = this.getNodeParameter('pollName', i) as string;
            const pollOptions = this.getNodeParameter('pollOptions', i) as string;
            const multipleAnswers = this.getNodeParameter('multipleAnswers', i) as boolean;

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sendPoll`,
              body: {
                session: instanceName,
                chatId,
                poll: {
                  name: pollName,
                  options: pollOptions.split(',').map(o => o.trim()),
                  multipleAnswers,
                },
              },
            };
          } else if (operation === 'sendPollVote') {
            const chatId = this.getNodeParameter('chatId', i) as string;
            const pollMessageId = this.getNodeParameter('pollMessageId', i) as string;
            const pollServerId = this.getNodeParameter('pollServerId', i, null) as string;
            const votes = this.getNodeParameter('votes', i) as string;

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/sendPollVote`,
              body: {
                session: instanceName,
                chatId,
                pollMessageId,
                pollServerId,
                votes: votes.split(',').map(v => v.trim()),
              },
            };
          }
        }
        // CHAT OPERATIONS
        else if (resource === 'chat') {
          if (operation === 'list') {
            const limit = this.getNodeParameter('limit', i, 20) as number;
            const offset = this.getNodeParameter('offset', i, 0) as number;
            const sortBy = this.getNodeParameter('sortBy', i, 'messageTimestamp') as string;
            const sortOrder = this.getNodeParameter('sortOrder', i, 'desc') as string;

            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/chats?limit=${limit}&offset=${offset}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
            };
          } else if (operation === 'overview') {
            const filterIds = this.getNodeParameter('filterIds', i, '') as string;
            const limit = this.getNodeParameter('limit', i, 20) as number;
            const offset = this.getNodeParameter('offset', i, 0) as number;

            if (filterIds) {
              requestOptions = {
                ...requestOptions,
                method: 'POST',
                uri: `${baseUrl}/api/${instanceName}/chats/overview`,
                body: {
                  pagination: { limit, offset },
                  filter: { ids: filterIds.split(',').map(id => id.trim()) },
                },
              };
            } else {
              requestOptions = {
                ...requestOptions,
                method: 'GET',
                uri: `${baseUrl}/api/${instanceName}/chats/overview`,
              };
            }
          } else if (operation === 'getPicture') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            const refresh = this.getNodeParameter('refresh', i, false) as boolean;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/picture?refresh=${refresh}`,
            };
          } else if (operation === 'archive') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/archive`,
            };
          } else if (operation === 'unarchive') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/unarchive`,
            };
          } else if (operation === 'markUnread') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/unread`,
            };
          } else if (operation === 'delete') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'DELETE',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}`,
            };
          } else if (operation === 'markMessagesRead') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            const messagesCount = this.getNodeParameter('messagesCount', i, 30) as number;
            const days = this.getNodeParameter('days', i, 7) as number;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/messages/read`,
              body: {
                messages: messagesCount,
                days,
              },
            };
          } else if (operation === 'getMessages') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            const limit = this.getNodeParameter('limit', i, 20) as number;
            const downloadMedia = this.getNodeParameter('downloadMedia', i, false) as boolean;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/messages?limit=${limit}&downloadMedia=${downloadMedia}`,
            };
          } else if (operation === 'getMessage') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            const messageId = this.getNodeParameter('messageIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/messages/${encodeURIComponent(messageId)}`,
            };
          } else if (operation === 'pinMessage') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            const messageId = this.getNodeParameter('messageIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/messages/${encodeURIComponent(messageId)}/pin`,
            };
          } else if (operation === 'unpinMessage') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            const messageId = this.getNodeParameter('messageIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/messages/${encodeURIComponent(messageId)}/unpin`,
            };
          } else if (operation === 'editMessage') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            const messageId = this.getNodeParameter('messageIdField', i) as string;
            const newText = this.getNodeParameter('newText', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/messages/${encodeURIComponent(messageId)}`,
              body: {
                text: newText,
              },
            };
          } else if (operation === 'deleteMessage') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            const messageId = this.getNodeParameter('messageIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'DELETE',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/messages/${encodeURIComponent(messageId)}`,
            };
          } else if (operation === 'deleteAllMessages') {
            const chatId = this.getNodeParameter('chatIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'DELETE',
              uri: `${baseUrl}/api/${instanceName}/chats/${encodeURIComponent(chatId)}/messages`,
            };
          }
        }
        // CONTACT OPERATIONS
        else if (resource === 'contact') {
          if (operation === 'list') {
            const limit = this.getNodeParameter('limit', i, 20) as number;
            const offset = this.getNodeParameter('offset', i, 0) as number;
            const sortOrder = this.getNodeParameter('sortOrder', i, 'asc') as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/contacts/all?session=${instanceName}&limit=${limit}&offset=${offset}&sortOrder=${sortOrder}`,
            };
          } else if (operation === 'get') {
            const contactId = this.getNodeParameter('contactIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/contacts?contactId=${encodeURIComponent(contactId)}&session=${instanceName}`,
            };
          } else if (operation === 'update') {
            const contactId = this.getNodeParameter('contactIdField', i) as string;
            const firstName = this.getNodeParameter('firstName', i) as string;
            const lastName = this.getNodeParameter('lastName', i, '') as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/contacts/${encodeURIComponent(contactId)}`,
              body: {
                firstName,
                lastName,
              },
            };
          } else if (operation === 'checkExists') {
            const phoneNumber = this.getNodeParameter('phoneNumber', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/contacts/check-exists?phone=${encodeURIComponent(phoneNumber)}&session=${instanceName}`,
            };
          } else if (operation === 'getAbout') {
            const contactId = this.getNodeParameter('contactIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/contacts/about?contactId=${encodeURIComponent(contactId)}&session=${instanceName}`,
            };
          } else if (operation === 'getProfilePicture') {
            const contactId = this.getNodeParameter('contactIdField', i) as string;
            const refresh = this.getNodeParameter('refresh', i, false) as boolean;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/contacts/profile-picture?contactId=${encodeURIComponent(contactId)}&session=${instanceName}&refresh=${refresh}`,
            };
          } else if (operation === 'block') {
            const contactId = this.getNodeParameter('contactIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/contacts/block`,
              body: {
                contactId,
                session: instanceName,
              },
            };
          } else if (operation === 'unblock') {
            const contactId = this.getNodeParameter('contactIdField', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/contacts/unblock`,
              body: {
                contactId,
                session: instanceName,
              },
            };
          }
        }
        // GROUP OPERATIONS
        else if (resource === 'group') {
          if (operation === 'create') {
            const groupName = this.getNodeParameter('groupName', i) as string;
            const participants = this.getNodeParameter('participants', i) as string;

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/groups`,
              body: {
                name: groupName,
                participants: participants.split(',').map(p => ({ id: p.trim() + '@c.us' })),
              },
            };
          } else if (operation === 'list') {
            const limit = this.getNodeParameter('limit', i, 10) as number;
            const offset = this.getNodeParameter('offset', i, 0) as number;
            const sortOrder = this.getNodeParameter('sortOrder', i, 'desc') as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/groups?limit=${limit}&offset=${offset}&sortBy=subject&sortOrder=${sortOrder}`,
            };
          } else if (operation === 'count') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/groups/count`,
            };
          } else if (operation === 'get') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}`,
            };
          } else if (operation === 'delete') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'DELETE',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}`,
            };
          } else if (operation === 'join') {
            const inviteCode = this.getNodeParameter('inviteCode', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/groups/join`,
              body: {
                code: inviteCode,
              },
            };
          } else if (operation === 'getJoinInfo') {
            const inviteCode = this.getNodeParameter('inviteCode', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/groups/join-info?code=${encodeURIComponent(inviteCode)}`,
            };
          } else if (operation === 'leave') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/leave`,
            };
          } else if (operation === 'refresh') {
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/groups/refresh`,
            };
          } else if (operation === 'getPicture') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const refresh = this.getNodeParameter('refresh', i, false) as boolean;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/picture?refresh=${refresh}`,
            };
          } else if (operation === 'setPicture') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const fileUrl = this.getNodeParameter('fileUrl', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/picture`,
              body: {
                file: {
                  url: fileUrl,
                },
              },
            };
          } else if (operation === 'deletePicture') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'DELETE',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/picture`,
            };
          } else if (operation === 'updateSubject') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const subject = this.getNodeParameter('subject', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/subject`,
              body: {
                subject,
              },
            };
          } else if (operation === 'updateDescription') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const description = this.getNodeParameter('description', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/description`,
              body: {
                description,
              },
            };
          } else if (operation === 'getSecurityInfoAdminOnly') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/settings/security/info-admin-only`,
            };
          } else if (operation === 'setSecurityInfoAdminOnly') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const enabled = this.getNodeParameter('enabled', i) as boolean;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/settings/security/info-admin-only`,
              body: {
                enabled,
              },
            };
          } else if (operation === 'getSecurityMessagesAdminOnly') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/settings/security/messages-admin-only`,
            };
          } else if (operation === 'setSecurityMessagesAdminOnly') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const enabled = this.getNodeParameter('enabled', i) as boolean;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/settings/security/messages-admin-only`,
              body: {
                enabled,
              },
            };
          } else if (operation === 'getParticipants') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/participants`,
            };
          } else if (operation === 'addParticipant') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const participantId = this.getNodeParameter('participantId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/participants/add`,
              body: {
                participants: [{ id: participantId }],
              },
            };
          } else if (operation === 'removeParticipant') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const participantId = this.getNodeParameter('participantId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/participants/remove`,
              body: {
                participants: [{ id: participantId }],
              },
            };
          } else if (operation === 'promoteAdmin') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const participantId = this.getNodeParameter('participantId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/admin/promote`,
              body: {
                participants: [{ id: participantId }],
              },
            };
          } else if (operation === 'demoteAdmin') {
            const groupId = this.getNodeParameter('groupId', i) as string;
            const participantId = this.getNodeParameter('participantId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/groups/${encodeURIComponent(groupId)}/admin/demote`,
              body: {
                participants: [{ id: participantId }],
              },
            };
          }
        }
        // STATUS OPERATIONS
        else if (resource === 'status') {
          if (operation === 'sendText') {
            const statusText = this.getNodeParameter('statusText', i) as string;
            const backgroundColor = this.getNodeParameter('backgroundColor', i, '#38b42f') as string;
            const font = this.getNodeParameter('font', i, 1) as number;
            const contacts = this.getNodeParameter('statusContacts', i, '') as string;

            const body: any = {
              text: statusText,
              backgroundColor,
              font,
            };

            if (contacts) {
              body.contacts = contacts.split(',').map(c => c.trim());
            }

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/status/text`,
              body,
            };
          } else if (operation === 'sendImage' || operation === 'sendVideo' || operation === 'sendVoice') {
            const mediaSource = this.getNodeParameter('mediaSource', i) as string;
            const mimeType = this.getNodeParameter('mimeType', i) as string;

            const body: any = {
              file: {
                mimetype: mimeType,
              },
            };

            if (mediaSource === 'url') {
              body.file.url = this.getNodeParameter('fileUrl', i) as string;
            } else {
              body.file.base64 = this.getNodeParameter('base64Data', i) as string;
              body.file.filename = this.getNodeParameter('fileName', i, 'file') as string;
            }

            if (operation !== 'sendVoice') {
              const caption = this.getNodeParameter('caption', i, '') as string;
              if (caption) {
                body.caption = caption;
              }
            }

            let endpoint = '/status/image';
            if (operation === 'sendVideo') endpoint = '/status/video';
            else if (operation === 'sendVoice') endpoint = '/status/voice';

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}${endpoint}`,
              body,
            };
          } else if (operation === 'delete') {
            const statusMessageId = this.getNodeParameter('statusMessageId', i) as string;

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/status/delete`,
              body: {
                messageId: statusMessageId,
                session: instanceName,
              },
            };
          } else if (operation === 'getNewMessageId') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/status/new-message-id`,
            };
          }
        }
        // CHANNEL OPERATIONS
        else if (resource === 'channel') {
          if (operation === 'list') {
            const role = this.getNodeParameter('role', i, '') as string;
            let uri = `${baseUrl}/api/${instanceName}/channels`;
            if (role) {
              uri += `?role=${role}`;
            }
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri,
            };
          } else if (operation === 'create') {
            const channelName = this.getNodeParameter('channelName', i) as string;
            const description = this.getNodeParameter('description', i, '') as string;
            const mimeType = this.getNodeParameter('mimeType', i, '') as string;
            const fileName = this.getNodeParameter('fileName', i, '') as string;
            const fileUrl = this.getNodeParameter('fileUrl', i, '') as string;

            const body: any = {
              name: channelName,
              description,
            };

            if (mimeType && fileUrl) {
              body.picture = {
                mimetype: mimeType,
                filename: fileName || 'picture',
                url: fileUrl,
              };
            }

            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/channels`,
              body,
            };
          } else if (operation === 'get') {
            const channelId = this.getNodeParameter('channelId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/channels/${encodeURIComponent(channelId)}`,
            };
          } else if (operation === 'getByInviteCode') {
            const inviteCode = this.getNodeParameter('channelInviteCode', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/channels/${encodeURIComponent(inviteCode)}`,
            };
          } else if (operation === 'delete') {
            const channelId = this.getNodeParameter('channelId', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'DELETE',
              uri: `${baseUrl}/api/${instanceName}/channels/${encodeURIComponent(channelId)}`,
            };
          } else if (operation === 'searchByView') {
            const searchView = this.getNodeParameter('searchView', i) as string;
            const countries = this.getNodeParameter('countries', i, '') as string;
            const categories = this.getNodeParameter('categories', i, '') as string;
            const limit = this.getNodeParameter('limit', i, 50) as number;
            const startCursor = this.getNodeParameter('startCursor', i, '') as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/channels/search/by-view`,
              body: {
                view: searchView,
                countries: countries ? countries.split(',').map(c => c.trim()) : [],
                categories: categories ? categories.split(',').map(c => c.trim()) : [],
                limit,
                startCursor,
              },
            };
          } else if (operation === 'searchByText') {
            const searchText = this.getNodeParameter('searchText', i) as string;
            const categories = this.getNodeParameter('categories', i, '') as string;
            const limit = this.getNodeParameter('limit', i, 50) as number;
            const startCursor = this.getNodeParameter('startCursor', i, '') as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'POST',
              uri: `${baseUrl}/api/${instanceName}/channels/search/by-text`,
              body: {
                text: searchText,
                categories: categories ? categories.split(',').map(c => c.trim()) : [],
                limit,
                startCursor,
              },
            };
          } else if (operation === 'getSearchViews') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/channels/search/views`,
            };
          } else if (operation === 'getSearchCountries') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/channels/search/countries`,
            };
          } else if (operation === 'getSearchCategories') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/channels/search/categories`,
            };
          } else if (operation === 'getMessagesPreview') {
            const inviteCode = this.getNodeParameter('channelInviteCode', i) as string;
            const downloadMedia = this.getNodeParameter('downloadMedia', i, false) as boolean;
            const limit = this.getNodeParameter('limit', i, 100) as number;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/channels/${encodeURIComponent(inviteCode)}/messages/preview?downloadMedia=${downloadMedia}&limit=${limit}`,
            };
          }
        }
        // PROFILE OPERATIONS
        else if (resource === 'profile') {
          if (operation === 'get') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/profile`,
            };
          } else if (operation === 'updateName') {
            const profileName = this.getNodeParameter('profileName', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/profile/name`,
              body: {
                name: profileName,
              },
            };
          } else if (operation === 'updateStatus') {
            const profileStatus = this.getNodeParameter('profileStatus', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/profile/status`,
              body: {
                status: profileStatus,
              },
            };
          } else if (operation === 'setPicture') {
            const fileUrl = this.getNodeParameter('fileUrl', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'PUT',
              uri: `${baseUrl}/api/${instanceName}/profile/picture`,
              body: {
                file: {
                  url: fileUrl,
                },
              },
            };
          } else if (operation === 'deletePicture') {
            requestOptions = {
              ...requestOptions,
              method: 'DELETE',
              uri: `${baseUrl}/api/${instanceName}/profile/picture`,
            };
          }
        }
        // LID OPERATIONS
        else if (resource === 'lid') {
          if (operation === 'list') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/lids`,
            };
          } else if (operation === 'count') {
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/lids/count`,
            };
          } else if (operation === 'getByLid') {
            const lid = this.getNodeParameter('lid', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/lids/${encodeURIComponent(lid)}`,
            };
          } else if (operation === 'getByPhone') {
            const phoneNumber = this.getNodeParameter('lidPhoneNumber', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/${instanceName}/lids/pn/${encodeURIComponent(phoneNumber)}`,
            };
          }
        }
        // FILE OPERATIONS
        else if (resource === 'file') {
          if (operation === 'download') {
            const fileName = this.getNodeParameter('downloadFileName', i) as string;
            
            requestOptions = {
              ...requestOptions,
              method: 'GET',
              uri: `${baseUrl}/api/files/${encodeURIComponent(fileName)}`,
            };
          }
        }

        // Make the request
        responseData = await this.helpers.request(requestOptions);

        if (Array.isArray(responseData)) {
          returnData.push(...responseData.map((item) => ({ json: item })));
        } else {
          returnData.push({ json: responseData });
        }
      } catch (error) {
        if (this.continueOnFail()) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          returnData.push({ json: { error: errorMessage } });
          continue;
        }
        throw new NodeOperationError(this.getNode(), (error as Error).message, { itemIndex: i });
      }
    }

    return [returnData];
  }
}