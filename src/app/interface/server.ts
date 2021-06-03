import { INode } from './node';

export interface IServer {
  name: string;
  address: string;
  purpose: string;
  location: string;
  branch: string;
  aet: string;
  maintainer: string;
  installJob: string;
  updated: string;
  nodes: INode[];
  url: string;
  netbootURL: string;
  netbootDiagnosticDesktopURL: string;
  webServerURL: string;
  isWebServerCluster: boolean;
  available: boolean;
  lastSeenAvailable: any;
  version: string;
  releaseVersion: string;
  buildName: string;
  buildVersion: string;
  storeAET: string;
  storeAddress: string;
  storePort: string;
  storeConnection: string;
}
