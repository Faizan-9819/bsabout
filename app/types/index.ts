// types/index.ts
export interface ConnectorCoordinates {
  mapX: number;
  mapY: number;
  cardSide: "left" | "right";
}

export interface ProjectData {
  id: string;
  stateName: string;
  number: string;
  image: string;
  projectName: string;
  type: string;
  city: string;
  area: string;
  svgStateId: string[];
  cardPosition: "left" | "right";
  connectorCoordinates: ConnectorCoordinates;
}
