import React from 'react';
import { EdgeProps, Position } from '../../types';
export interface GetBezierPathParams {
    sourceX: number;
    sourceY: number;
    sourcePosition?: Position;
    targetX: number;
    targetY: number;
    targetPosition?: Position;
    curvature?: number;
    centerX?: number;
    centerY?: number;
}
export declare function getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition, curvature, centerX, centerY, }: GetBezierPathParams): string;
declare const _default: React.MemoExoticComponent<({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, curvature, }: EdgeProps) => JSX.Element>;
export default _default;
