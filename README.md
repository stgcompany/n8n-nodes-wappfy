# n8n-nodes-wappfy

This is an n8n community node package for integrating with Wappfy WhatsApp API.

## Features

Complete WhatsApp integration through Wappfy API with support for:

### 📱 Sessions
- Get session information
- QR code generation for authentication
- Session management (restart, logout)

### 💬 Messages
- Send text, images, videos, audio, voice messages
- Send files/documents
- Send location and contacts
- Create and send polls
- Reply to messages
- React to messages with emojis
- Mark messages as read

### 💬 Chats
- List and manage chats
- Archive/unarchive chats
- Get chat messages
- Delete chats

### 👥 Contacts
- List all contacts
- Check if phone number exists on WhatsApp
- Block/unblock contacts
- Get contact details

### 👥 Groups
- Create and manage groups
- Add/remove participants
- Promote/demote admins
- Join groups via invite link
- Leave groups

### 📸 Status (Stories)
- Send text, image, video, and voice status
- Delete status updates

### 📢 Channels (Newsletters)
- Create and manage channels
- List channels by role (owner, admin, subscriber)
- Delete channels

## Installation

### Using npm

```bash
npm install -g n8n-nodes-wappfy
```

### In n8n

1. Go to **Settings** > **Community Nodes**
2. Click on **Install**
3. Enter `n8n-nodes-wappfy` and click **Install**

## Configuration

### Credentials

The node requires the following credentials:

1. **Base URL**: The URL of your Wappfy instance (e.g., `http://localhost:3000`)
2. **Instance Name**: The session/instance name to use for all requests (e.g., `default`)
3. **API Key** (optional): If your Wappfy instance requires authentication

### Important: Instance Name Usage

The `instanceName` from credentials is automatically used in all requests:
- For URL paths: `/api/{instanceName}/endpoint`
- For request bodies: `{ "session": "{instanceName}", ... }`

## Resources

- [Wappfy Documentation](https://docs.wappfy.com.br)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## License

MIT