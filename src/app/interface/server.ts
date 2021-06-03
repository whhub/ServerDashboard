import { Node } from './node';

export interface Server {
  name: string;
  address: string;
  purpose: string;
  location: string;
  branch: string;
  aet: string;
  maintainer: string;
  installJob: string;
  updated: string;
  nodes: Node[];
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
