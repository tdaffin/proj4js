import proj4 from '../lib/core';
import Proj from "../lib/Proj";
import Point from "../lib/Point";
import common from "../lib/common/toPoint";
import defs from "../lib/defs";
import nadgrid from "../lib/nadgrid";
import transform from "../lib/transform";
import mgrs from "mgrs";
import includedProjections from "../projs";


export const defaultDatum = 'WGS84'; //default datum
export {Proj};
export const WGS84 = new Proj('WGS84');
export {Point};
export const toPoint = common;
export {defs, nadgrid, transform, mgrs}
export const version = '__VERSION__';

includedProjections(proj4);
export default proj4;
