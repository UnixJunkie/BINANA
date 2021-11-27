// This file is part of BINANA, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

// Transcrypt'ed from Python, 2021-11-26 23:51:09
var binana = {};
var math = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {fabs} from './binana._utils.shim.js';
import {Point} from './binana._structure.point.js';
import * as __module_binana__ from './binana.js';
__nest__ (binana, '', __module_binana__);
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
var __name__ = 'binana._utils._math_functions';
export var planrity = function (point1, point2, point3, point4) {
	var x1 = point1.x;
	var y1 = point1.y;
	var z1 = point1.z;
	var x2 = point2.x;
	var y2 = point2.y;
	var z2 = point2.z;
	var x3 = point3.x;
	var y3 = point3.y;
	var z3 = point3.z;
	var x4 = point4.x;
	var y4 = point4.y;
	var z4 = point4.z;
	var A = (y1 * (z2 - z3) + y2 * (z3 - z1)) + y3 * (z1 - z2);
	var B = (z1 * (x2 - x3) + z2 * (x3 - x1)) + z3 * (x1 - x2);
	var C = (x1 * (y2 - y3) + x2 * (y3 - y1)) + x3 * (y1 - y2);
	var D = (-(x1) * (y2 * z3 - y3 * z2) + -(x2) * (y3 * z1 - y1 * z3)) + -(x3) * (y1 * z2 - y2 * z1);
	var distance = fabs (((A * x4 + B * y4) + C * z4) + D) / math.sqrt ((math.pow (A, 2) + math.pow (B, 2)) + math.pow (C, 2));
	var A1 = (y1 * (z2 - z4) + y2 * (z4 - z1)) + y4 * (z1 - z2);
	var B1 = (z1 * (x2 - x4) + z2 * (x4 - x1)) + z4 * (x1 - x2);
	var C1 = (x1 * (y2 - y4) + x2 * (y4 - y1)) + x4 * (y1 - y2);
	var D1 = (-(x1) * (y2 * z4 - y4 * z2) + -(x2) * (y4 * z1 - y1 * z4)) + -(x4) * (y1 * z2 - y2 * z1);
	var distance1 = fabs (((A1 * x3 + B1 * y3) + C1 * z3) + D1) / math.sqrt ((math.pow (A1, 2) + math.pow (B1, 2)) + math.pow (C1, 2));
	var A2 = (y1 * (z4 - z3) + y4 * (z3 - z1)) + y3 * (z1 - z4);
	var B2 = (z1 * (x4 - x3) + z4 * (x3 - x1)) + z3 * (x1 - x4);
	var C2 = (x1 * (y4 - y3) + x4 * (y3 - y1)) + x3 * (y1 - y4);
	var D2 = (-(x1) * (y4 * z3 - y3 * z4) + -(x4) * (y3 * z1 - y1 * z3)) + -(x3) * (y1 * z4 - y4 * z1);
	var distance2 = fabs (((A2 * x2 + B2 * y2) + C2 * z2) + D2) / math.sqrt ((math.pow (A2, 2) + math.pow (B2, 2)) + math.pow (C2, 2));
	var A3 = (y4 * (z2 - z3) + y2 * (z3 - z4)) + y3 * (z4 - z2);
	var B3 = (z4 * (x2 - x3) + z2 * (x3 - x4)) + z3 * (x4 - x2);
	var C3 = (x4 * (y2 - y3) + x2 * (y3 - y4)) + x3 * (y4 - y2);
	var D3 = (-(x4) * (y2 * z3 - y3 * z2) + -(x2) * (y3 * z4 - y4 * z3)) + -(x3) * (y4 * z2 - y2 * z4);
	var distance3 = fabs (((A3 * x1 + B3 * y1) + C3 * z1) + D3) / math.sqrt ((math.pow (A3, 2) + math.pow (B3, 2)) + math.pow (C3, 2));
	var final_dist = -(1);
	if (distance < distance1 && distance < distance2 && distance < distance3) {
		var final_dist = distance;
	}
	else if (distance1 < distance && distance1 < distance2 && distance1 < distance3) {
		var final_dist = distance1;
	}
	else if (distance2 < distance && distance2 < distance1 && distance2 < distance3) {
		var final_dist = distance2;
	}
	else if (distance3 < distance && distance3 < distance1 && distance3 < distance2) {
		var final_dist = distance3;
	}
	return final_dist;
};
export var vector_subtraction = function (vector1, vector2) {
	return Point (vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z);
};
export var cross_product = function (pt1, pt2) {
	var response = Point (0, 0, 0);
	response.x = pt1.y * pt2.z - pt1.z * pt2.y;
	response.y = pt1.z * pt2.x - pt1.x * pt2.z;
	response.z = pt1.x * pt2.y - pt1.y * pt2.x;
	return response;
};
export var vector_scalar_multiply = function (vector, scalar) {
	return Point (vector.x * scalar, vector.y * scalar, vector.z * scalar);
};
export var dot_product = function (point1, point2) {
	return (point1.x * point2.x + point1.y * point2.y) + point1.z * point2.z;
};
export var dihedral = function (point1, point2, point3, point4) {
	var b1 = vector_subtraction (point2, point1);
	var b2 = vector_subtraction (point3, point2);
	var b3 = vector_subtraction (point4, point3);
	var b2Xb3 = cross_product (b2, b3);
	var b1Xb2 = cross_product (b1, b2);
	var b1XMagb2 = vector_scalar_multiply (b1, b2.magnitude ());
	return math.atan2 (dot_product (b1XMagb2, b2Xb3), dot_product (b1Xb2, b2Xb3));
};
export var angle_between_three_points = function (point1, point2, point3) {
	var vector1 = vector_subtraction (point1, point2);
	var vector2 = vector_subtraction (point3, point2);
	return angle_between_points (vector1, vector2);
};
export var angle_between_points = function (point1, point2) {
	var new_point1 = return_normalized_vector (point1);
	var new_point2 = return_normalized_vector (point2);
	var dot_prod = dot_product (new_point1, new_point2);
	var dot_prod = min (dot_prod, 1.0);
	var dot_prod = max (dot_prod, -(1.0));
	return math.acos (dot_prod);
};
export var return_normalized_vector = function (vector) {
	var dist = distance (Point (0, 0, 0), vector);
	return Point (vector.x / dist, vector.y / dist, vector.z / dist);
};
export var distance = function (point1, point2) {
	var deltax = point1.x - point2.x;
	var deltay = point1.y - point2.y;
	var deltaz = point1.z - point2.z;
	return math.sqrt ((math.pow (deltax, 2) + math.pow (deltay, 2)) + math.pow (deltaz, 2));
};
export var project_point_onto_plane = function (a_point, plane_coefficients) {
	var a = plane_coefficients [0];
	var b = plane_coefficients [1];
	var c = plane_coefficients [2];
	var d = plane_coefficients [3];
	var s = a_point.x;
	var u = a_point.y;
	var v = a_point.z;
	var t = (((d - a * s) - b * u) - c * v) / ((a * a + b * b) + c * c);
	var x = s + a * t;
	var y = u + b * t;
	var z = v + c * t;
	return Point (x, y, z);
};

//# sourceMappingURL=binana._utils._math_functions.map