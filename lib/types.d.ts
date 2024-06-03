import { MouseEvent } from 'react';

export interface ReactChildren {
  children: React.ReactNode
}

export interface WheelEvent<T = Element> extends MouseEvent<T, WheelEvent> {
  returnValue: boolean;
  wheelDeltaY: number;
  wheelDeltaX: number;
}
