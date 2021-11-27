// This file is part of BINANA, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

// Transcrypt'ed from Python, 2021-11-26 23:51:10
var binana = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {METAL_COORDINATION_CUTOFF} from './binana.interactions.default_params.js';
import * as _metal_coordination from './binana.interactions._metal_coordination.js';
import * as _closest from './binana.interactions._closest.js';
import * as _close from './binana.interactions._close.js';
import * as _electrostatic_energies from './binana.interactions._electrostatic_energies.js';
import * as _flexibility from './binana.interactions._flexibility.js';
import * as _hydrophobics from './binana.interactions._hydrophobics.js';
import * as _hydrogen_halogen_bonds from './binana.interactions._hydrogen_halogen_bonds.js';
import * as _ligand_atom_types from './binana.interactions._ligand_atom_types.js';
import * as _pi_pi from './binana.interactions._pi_pi.js';
import * as _salt_bridges from './binana.interactions._salt_bridges.js';
import * as _cat_pi from './binana.interactions._cat_pi.js';
import * as __module_binana_interactions__ from './binana.interactions.js';
__nest__ (binana, 'interactions', __module_binana_interactions__);
import * as __module_binana__ from './binana.js';
__nest__ (binana, '', __module_binana__);
import {ACTIVE_SITE_FLEXIBILITY_DIST_CUTOFF, CATION_PI_DIST_CUTOFF, CLOSE_CONTACTS_DIST1_CUTOFF, CLOSE_CONTACTS_DIST2_CUTOFF, ELECTROSTATIC_DIST_CUTOFF, HALOGEN_BOND_DIST_CUTOFF, HYDROGEN_BOND_DIST_CUTOFF, HYDROGEN_HALOGEN_BOND_ANGLE_CUTOFF, HYDROPHOBIC_DIST_CUTOFF, PI_PADDING_DIST, PI_PI_INTERACTING_DIST_CUTOFF, PI_STACKING_ANGLE_TOLERANCE, SALT_BRIDGE_DIST_CUTOFF, T_STACKING_ANGLE_TOLERANCE, T_STACKING_CLOSEST_DIST_CUTOFF} from './binana.interactions.default_params.js';
import {_set_default} from './binana._utils.shim.js';
import * as default_params from './binana.interactions.default_params.js';
export {T_STACKING_ANGLE_TOLERANCE, ELECTROSTATIC_DIST_CUTOFF, HYDROGEN_BOND_DIST_CUTOFF, default_params, _set_default, _hydrophobics, T_STACKING_CLOSEST_DIST_CUTOFF, PI_PI_INTERACTING_DIST_CUTOFF, METAL_COORDINATION_CUTOFF, HYDROPHOBIC_DIST_CUTOFF, SALT_BRIDGE_DIST_CUTOFF, PI_PADDING_DIST, _metal_coordination, _hydrogen_halogen_bonds, CLOSE_CONTACTS_DIST1_CUTOFF, _pi_pi, ACTIVE_SITE_FLEXIBILITY_DIST_CUTOFF, PI_STACKING_ANGLE_TOLERANCE, _closest, CATION_PI_DIST_CUTOFF, _electrostatic_energies, HALOGEN_BOND_DIST_CUTOFF, _cat_pi, HYDROGEN_HALOGEN_BOND_ANGLE_CUTOFF, CLOSE_CONTACTS_DIST2_CUTOFF, _salt_bridges, _ligand_atom_types, _close, _flexibility};
var __name__ = 'binana.interactions';
export var get_cation_pi = function (ligand, receptor, cutoff, pi_padding) {
	if (typeof cutoff == 'undefined' || (cutoff != null && cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cutoff = null;
	};
	if (typeof pi_padding == 'undefined' || (pi_padding != null && pi_padding.hasOwnProperty ("__kwargtrans__"))) {;
		var pi_padding = null;
	};
	var cutoff = _set_default (cutoff, CATION_PI_DIST_CUTOFF);
	var pi_padding = _set_default (pi_padding, PI_PADDING_DIST);
	return _cat_pi.get_cation_pi (ligand, receptor, cutoff, pi_padding);
};
export var get_salt_bridges = function (ligand, receptor, cutoff) {
	if (typeof cutoff == 'undefined' || (cutoff != null && cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cutoff = null;
	};
	var cutoff = _set_default (cutoff, SALT_BRIDGE_DIST_CUTOFF);
	return _salt_bridges.get_salt_bridges (ligand, receptor, cutoff);
};
export var get_pi_pi = function (ligand, receptor, pi_pi_general_dist_cutoff, pi_stacking_angle_tol, t_stacking_angle_tol, t_stacking_closest_dist_cutoff, pi_padding) {
	if (typeof pi_pi_general_dist_cutoff == 'undefined' || (pi_pi_general_dist_cutoff != null && pi_pi_general_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var pi_pi_general_dist_cutoff = null;
	};
	if (typeof pi_stacking_angle_tol == 'undefined' || (pi_stacking_angle_tol != null && pi_stacking_angle_tol.hasOwnProperty ("__kwargtrans__"))) {;
		var pi_stacking_angle_tol = null;
	};
	if (typeof t_stacking_angle_tol == 'undefined' || (t_stacking_angle_tol != null && t_stacking_angle_tol.hasOwnProperty ("__kwargtrans__"))) {;
		var t_stacking_angle_tol = null;
	};
	if (typeof t_stacking_closest_dist_cutoff == 'undefined' || (t_stacking_closest_dist_cutoff != null && t_stacking_closest_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var t_stacking_closest_dist_cutoff = null;
	};
	if (typeof pi_padding == 'undefined' || (pi_padding != null && pi_padding.hasOwnProperty ("__kwargtrans__"))) {;
		var pi_padding = null;
	};
	var pi_pi_general_dist_cutoff = _set_default (pi_pi_general_dist_cutoff, PI_PI_INTERACTING_DIST_CUTOFF);
	var pi_stacking_angle_tol = _set_default (pi_stacking_angle_tol, PI_STACKING_ANGLE_TOLERANCE);
	var t_stacking_angle_tol = _set_default (t_stacking_angle_tol, T_STACKING_ANGLE_TOLERANCE);
	var t_stacking_closest_dist_cutoff = _set_default (t_stacking_closest_dist_cutoff, T_STACKING_CLOSEST_DIST_CUTOFF);
	var pi_padding = _set_default (pi_padding, PI_PADDING_DIST);
	return _pi_pi.get_pi_pi (ligand, receptor, pi_pi_general_dist_cutoff, pi_stacking_angle_tol, t_stacking_angle_tol, t_stacking_closest_dist_cutoff, pi_padding);
};
export var get_ligand_atom_types = function (ligand) {
	return _ligand_atom_types.get_ligand_atom_types (ligand);
};
export var get_hydrogen_bonds = function (ligand, receptor, dist_cutoff, angle_cutoff) {
	if (typeof dist_cutoff == 'undefined' || (dist_cutoff != null && dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var dist_cutoff = null;
	};
	if (typeof angle_cutoff == 'undefined' || (angle_cutoff != null && angle_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var angle_cutoff = null;
	};
	var dist_cutoff = _set_default (dist_cutoff, HYDROGEN_BOND_DIST_CUTOFF);
	var angle_cutoff = _set_default (angle_cutoff, HYDROGEN_HALOGEN_BOND_ANGLE_CUTOFF);
	return _hydrogen_halogen_bonds.get_hydrogen_bonds (ligand, receptor, dist_cutoff, angle_cutoff);
};
export var get_halogen_bonds = function (ligand, receptor, dist_cutoff, angle_cutoff) {
	if (typeof dist_cutoff == 'undefined' || (dist_cutoff != null && dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var dist_cutoff = null;
	};
	if (typeof angle_cutoff == 'undefined' || (angle_cutoff != null && angle_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var angle_cutoff = null;
	};
	var dist_cutoff = _set_default (dist_cutoff, HALOGEN_BOND_DIST_CUTOFF);
	var angle_cutoff = _set_default (angle_cutoff, HYDROGEN_HALOGEN_BOND_ANGLE_CUTOFF);
	return _hydrogen_halogen_bonds.get_halogen_bonds (ligand, receptor, dist_cutoff, angle_cutoff);
};
export var get_hydrophobics = function (ligand, receptor, cutoff) {
	if (typeof cutoff == 'undefined' || (cutoff != null && cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cutoff = null;
	};
	var cutoff = _set_default (cutoff, HYDROPHOBIC_DIST_CUTOFF);
	return _hydrophobics.get_hydrophobics (ligand, receptor, cutoff);
};
export var get_active_site_flexibility = function (ligand, receptor, cutoff) {
	if (typeof cutoff == 'undefined' || (cutoff != null && cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cutoff = null;
	};
	var cutoff = _set_default (cutoff, ACTIVE_SITE_FLEXIBILITY_DIST_CUTOFF);
	return _flexibility.get_flexibility (ligand, receptor, cutoff);
};
export var get_electrostatic_energies = function (ligand, receptor, cutoff) {
	if (typeof cutoff == 'undefined' || (cutoff != null && cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cutoff = null;
	};
	var cutoff = _set_default (cutoff, ELECTROSTATIC_DIST_CUTOFF);
	return _electrostatic_energies.get_electrostatic_energies (ligand, receptor, cutoff);
};
export var get_close = function (ligand, receptor, cutoff) {
	if (typeof cutoff == 'undefined' || (cutoff != null && cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cutoff = null;
	};
	var cutoff = _set_default (cutoff, CLOSE_CONTACTS_DIST2_CUTOFF);
	return _close.get_close (ligand, receptor, cutoff);
};
export var get_closest = function (ligand, receptor, cutoff) {
	if (typeof cutoff == 'undefined' || (cutoff != null && cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cutoff = null;
	};
	var cutoff = _set_default (cutoff, CLOSE_CONTACTS_DIST1_CUTOFF);
	return _closest.get_closest (ligand, receptor, cutoff);
};
export var get_metal_coordinations = function (ligand, receptor, cutoff) {
	if (typeof cutoff == 'undefined' || (cutoff != null && cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cutoff = null;
	};
	var cutoff = _set_default (cutoff, METAL_COORDINATION_CUTOFF);
	return _metal_coordination.get_metal_coordination (ligand, receptor, cutoff);
};
export var get_all_interactions = function (ligand, receptor, closest_dist_cutoff, close_dist_cutoff, electrostatic_dist_cutoff, active_site_flexibility_dist_cutoff, hydrophobic_dist_cutoff, hydrogen_bond_dist_cutoff, hydrogen_halogen_bond_angle_cutoff, halogen_bond_dist_cutoff, pi_pi_general_dist_cutoff, pi_stacking_angle_tol, t_stacking_angle_tol, t_stacking_closest_dist_cutoff, cation_pi_dist_cutoff, salt_bridge_dist_cutoff, metal_coordination_dist_cutoff, pi_padding) {
	if (typeof closest_dist_cutoff == 'undefined' || (closest_dist_cutoff != null && closest_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var closest_dist_cutoff = null;
	};
	if (typeof close_dist_cutoff == 'undefined' || (close_dist_cutoff != null && close_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var close_dist_cutoff = null;
	};
	if (typeof electrostatic_dist_cutoff == 'undefined' || (electrostatic_dist_cutoff != null && electrostatic_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var electrostatic_dist_cutoff = null;
	};
	if (typeof active_site_flexibility_dist_cutoff == 'undefined' || (active_site_flexibility_dist_cutoff != null && active_site_flexibility_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var active_site_flexibility_dist_cutoff = null;
	};
	if (typeof hydrophobic_dist_cutoff == 'undefined' || (hydrophobic_dist_cutoff != null && hydrophobic_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var hydrophobic_dist_cutoff = null;
	};
	if (typeof hydrogen_bond_dist_cutoff == 'undefined' || (hydrogen_bond_dist_cutoff != null && hydrogen_bond_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var hydrogen_bond_dist_cutoff = null;
	};
	if (typeof hydrogen_halogen_bond_angle_cutoff == 'undefined' || (hydrogen_halogen_bond_angle_cutoff != null && hydrogen_halogen_bond_angle_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var hydrogen_halogen_bond_angle_cutoff = null;
	};
	if (typeof halogen_bond_dist_cutoff == 'undefined' || (halogen_bond_dist_cutoff != null && halogen_bond_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var halogen_bond_dist_cutoff = null;
	};
	if (typeof pi_pi_general_dist_cutoff == 'undefined' || (pi_pi_general_dist_cutoff != null && pi_pi_general_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var pi_pi_general_dist_cutoff = null;
	};
	if (typeof pi_stacking_angle_tol == 'undefined' || (pi_stacking_angle_tol != null && pi_stacking_angle_tol.hasOwnProperty ("__kwargtrans__"))) {;
		var pi_stacking_angle_tol = null;
	};
	if (typeof t_stacking_angle_tol == 'undefined' || (t_stacking_angle_tol != null && t_stacking_angle_tol.hasOwnProperty ("__kwargtrans__"))) {;
		var t_stacking_angle_tol = null;
	};
	if (typeof t_stacking_closest_dist_cutoff == 'undefined' || (t_stacking_closest_dist_cutoff != null && t_stacking_closest_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var t_stacking_closest_dist_cutoff = null;
	};
	if (typeof cation_pi_dist_cutoff == 'undefined' || (cation_pi_dist_cutoff != null && cation_pi_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cation_pi_dist_cutoff = null;
	};
	if (typeof salt_bridge_dist_cutoff == 'undefined' || (salt_bridge_dist_cutoff != null && salt_bridge_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var salt_bridge_dist_cutoff = null;
	};
	if (typeof metal_coordination_dist_cutoff == 'undefined' || (metal_coordination_dist_cutoff != null && metal_coordination_dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var metal_coordination_dist_cutoff = null;
	};
	if (typeof pi_padding == 'undefined' || (pi_padding != null && pi_padding.hasOwnProperty ("__kwargtrans__"))) {;
		var pi_padding = null;
	};
	var closest_dist_cutoff = _set_default (closest_dist_cutoff, CLOSE_CONTACTS_DIST1_CUTOFF);
	var close_dist_cutoff = _set_default (close_dist_cutoff, CLOSE_CONTACTS_DIST2_CUTOFF);
	var electrostatic_dist_cutoff = _set_default (electrostatic_dist_cutoff, ELECTROSTATIC_DIST_CUTOFF);
	var active_site_flexibility_dist_cutoff = _set_default (active_site_flexibility_dist_cutoff, ACTIVE_SITE_FLEXIBILITY_DIST_CUTOFF);
	var hydrophobic_dist_cutoff = _set_default (hydrophobic_dist_cutoff, HYDROPHOBIC_DIST_CUTOFF);
	var hydrogen_bond_dist_cutoff = _set_default (hydrogen_bond_dist_cutoff, HYDROGEN_BOND_DIST_CUTOFF);
	var hydrogen_halogen_bond_angle_cutoff = _set_default (hydrogen_halogen_bond_angle_cutoff, HYDROGEN_HALOGEN_BOND_ANGLE_CUTOFF);
	var halogen_bond_dist_cutoff = _set_default (halogen_bond_dist_cutoff, HALOGEN_BOND_DIST_CUTOFF);
	var pi_pi_general_dist_cutoff = _set_default (pi_pi_general_dist_cutoff, PI_PI_INTERACTING_DIST_CUTOFF);
	var pi_stacking_angle_tol = _set_default (pi_stacking_angle_tol, PI_STACKING_ANGLE_TOLERANCE);
	var t_stacking_angle_tol = _set_default (t_stacking_angle_tol, T_STACKING_ANGLE_TOLERANCE);
	var t_stacking_closest_dist_cutoff = _set_default (t_stacking_closest_dist_cutoff, T_STACKING_CLOSEST_DIST_CUTOFF);
	var cation_pi_dist_cutoff = _set_default (cation_pi_dist_cutoff, CATION_PI_DIST_CUTOFF);
	var salt_bridge_dist_cutoff = _set_default (salt_bridge_dist_cutoff, SALT_BRIDGE_DIST_CUTOFF);
	var pi_padding = _set_default (pi_padding, PI_PADDING_DIST);
	var closest = get_closest (ligand, receptor, closest_dist_cutoff);
	var close = get_close (ligand, receptor, close_dist_cutoff);
	var electrostatic_energies = get_electrostatic_energies (ligand, receptor, electrostatic_dist_cutoff);
	var active_site_flexibility = get_active_site_flexibility (ligand, receptor, active_site_flexibility_dist_cutoff);
	var hydrophobics = get_hydrophobics (ligand, receptor, hydrophobic_dist_cutoff);
	var hydrogen_bonds = get_hydrogen_bonds (ligand, receptor, hydrogen_bond_dist_cutoff, hydrogen_halogen_bond_angle_cutoff);
	var halogen_bonds = get_halogen_bonds (ligand, receptor, halogen_bond_dist_cutoff, hydrogen_halogen_bond_angle_cutoff);
	var metal_coordinations = get_metal_coordinations (ligand, receptor, metal_coordination_dist_cutoff);
	var ligand_atom_types = get_ligand_atom_types (ligand);
	var pi_pi = get_pi_pi (ligand, receptor, pi_pi_general_dist_cutoff, pi_stacking_angle_tol, t_stacking_angle_tol, t_stacking_closest_dist_cutoff, pi_padding);
	var cat_pi = get_cation_pi (ligand, receptor, cation_pi_dist_cutoff, pi_padding);
	var salt_bridges = get_salt_bridges (ligand, receptor, salt_bridge_dist_cutoff);
	var num_lig_rot_bonds = ligand.rotatable_bonds_count;
	return dict ({'closest': closest, 'close': close, 'electrostatic_energies': electrostatic_energies, 'active_site_flexibility': active_site_flexibility, 'hydrophobics': hydrophobics, 'hydrogen_bonds': hydrogen_bonds, 'halogen_bonds': halogen_bonds, 'ligand_atom_types': ligand_atom_types, 'pi_pi': pi_pi, 'cat_pi': cat_pi, 'salt_bridges': salt_bridges, 'metal_coordinations': metal_coordinations, 'ligand_rotatable_bonds': num_lig_rot_bonds});
};

//# sourceMappingURL=binana.interactions.map