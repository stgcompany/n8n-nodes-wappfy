// Tipos mínimos necessários para compilação
export interface INodeProperties {
  displayName: string;
  name: string;
  type: string;
  default?: any;
  required?: boolean;
  description?: string;
  options?: any[];
  displayOptions?: {
    show?: Record<string, string[]>;
    hide?: Record<string, string[]>;
  };
  typeOptions?: Record<string, any>;
  placeholder?: string;
  noDataExpression?: boolean;
}

export interface ICredentialType {
  name: string;
  displayName: string;
  documentationUrl?: string;
  properties: INodeProperties[];
  authenticate?: IAuthenticateGeneric;
  test?: ICredentialTestRequest;
}

export interface IAuthenticateGeneric {
  type: string;
  properties: {
    headers?: Record<string, string>;
    qs?: Record<string, string>;
  };
}

export interface ICredentialTestRequest {
  request: {
    baseURL: string;
    url: string;
    method: string;
  };
}

export interface INodeType {
  description: INodeTypeDescription;
  execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}

export interface INodeTypeDescription {
  displayName: string;
  name: string;
  icon: string;
  group: string[];
  version: number;
  subtitle?: string;
  description: string;
  defaults: {
    name: string;
  };
  inputs: string[];
  outputs: string[];
  credentials: Array<{
    name: string;
    required: boolean;
  }>;
  properties: INodeProperties[];
}

export interface IExecuteFunctions {
  getInputData(): INodeExecutionData[];
  getNodeParameter(parameterName: string, itemIndex: number, fallbackValue?: any): any;
  getCredentials(type: string): any;
  continueOnFail(): boolean;
  getNode(): any;
  helpers: {
    request(options: any): Promise<any>;
  };
}

export interface INodeExecutionData {
  json: Record<string, any>;
  binary?: Record<string, any>;
}

export interface IDataObject {
  [key: string]: any;
}

export class NodeOperationError extends Error {
  constructor(node: any, message: string, options?: any) {
    super(message);
    this.name = 'NodeOperationError';
  }
}

export enum NodeConnectionType {
  Main = 'main'
}