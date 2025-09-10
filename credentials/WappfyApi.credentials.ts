import {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from '../types';

export class WappfyApi implements ICredentialType {
  name = 'wappfyApi';
  displayName = 'Wappfy API';
  documentationUrl = 'https://docs.wappfy.com.br';
  properties: INodeProperties[] = [
    {
      displayName: 'Base URL',
      name: 'baseUrl',
      type: 'string',
      default: 'https://api.wappfy.com.br',
      required: true,
      description: 'The base URL for the Wappfy API (e.g., http://localhost:3000)',
    },
    {
      displayName: 'Instance Name',
      name: 'instanceName',
      type: 'string',
      default: null,
      required: true,
      description: 'The instance/session name that will be used in all requests',
    },
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      required: true,
      description: 'Optional API Key for authentication (leave empty if not required)',
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        'apikey': '={{$credentials.apiKey}}',
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: '={{$credentials.baseUrl}}',
      url: '/api/sessions',
      method: 'GET',
    },
  };
}