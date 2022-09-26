import * as jspb from 'google-protobuf'



export class ChatInitiateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ChatInitiateRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): ChatInitiateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatInitiateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatInitiateRequest): ChatInitiateRequest.AsObject;
  static serializeBinaryToWriter(message: ChatInitiateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatInitiateRequest;
  static deserializeBinaryFromReader(message: ChatInitiateRequest, reader: jspb.BinaryReader): ChatInitiateRequest;
}

export namespace ChatInitiateRequest {
  export type AsObject = {
    name: string,
    avatarUrl: string,
  }
}

export class ChatInitiateResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ChatInitiateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatInitiateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChatInitiateResponse): ChatInitiateResponse.AsObject;
  static serializeBinaryToWriter(message: ChatInitiateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatInitiateResponse;
  static deserializeBinaryFromReader(message: ChatInitiateResponse, reader: jspb.BinaryReader): ChatInitiateResponse;
}

export namespace ChatInitiateResponse {
  export type AsObject = {
    id: number,
  }
}

