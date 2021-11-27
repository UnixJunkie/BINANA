// This file is part of BINANA, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

// Transcrypt'ed from Python, 2021-11-27 01:23:32
var __future__ = {};
var binana = {};
var math = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {fabs} from './binana._utils.shim.js';
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
import * as __module___future____ from './__future__.js';
__nest__ (__future__, '', __module___future____);
import {to_deg} from './binana._structure.consts.js';
import {angle_between_three_points} from './binana._utils._math_functions.js';
import {Mol} from './binana._structure.mol.js';
import {hashtable_entry_add_one} from './binana._utils.utils.js';
import {_get_ligand_receptor_dists} from './binana.load_ligand_receptor.js';
import * as __module_binana__ from './binana.js';
__nest__ (binana, '', __module_binana__);
import {HALOGEN_BOND_DIST_CUTOFF, HYDROGEN_BOND_DIST_CUTOFF, HYDROGEN_HALOGEN_BOND_ANGLE_CUTOFF} from './binana.interactions.default_params.js';
import {_set_default} from './binana._utils.shim.js';
var __name__ = 'binana.interactions._hydrogen_halogen_bonds';
export var _get_potential_donors_acceptors = function (ligand, receptor, dist_cutoff, hydrogen_bond) {
	if (typeof hydrogen_bond == 'undefined' || (hydrogen_bond != null && hydrogen_bond.hasOwnProperty ("__kwargtrans__"))) {;
		var hydrogen_bond = true;
	};
	var donors_and_acceptors = ['O', 'N', 'S'];
	if (!(hydrogen_bond)) {
		donors_and_acceptors.append ('C');
	}
	var ligand_receptor_dists = _get_ligand_receptor_dists (ligand, receptor, dist_cutoff, donors_and_acceptors);
	return (function () {
		var __accu0__ = [];
		for (var [ligand_atom, receptor_atom, dist] of ligand_receptor_dists) {
			__accu0__.append ([ligand_atom, receptor_atom, dist]);
		}
		return __accu0__;
	}) ();
};
export var _update_mol_and_data = function (pdb_hbonds, hbonds, hbonds_labels, lig_donor_or_accept, receptor_atom, ligand_atom, center_atom, dist, angle) {
	var comment = (lig_donor_or_accept == 'ACCEPTOR' ? 'RECEPTOR' : 'LIGAND');
	var hbonds_key = (((('HDONOR_' + comment) + '_') + receptor_atom.side_chain_or_backbone ()) + '_') + receptor_atom.structure;
	pdb_hbonds.add_new_atom (ligand_atom.copy_of ());
	pdb_hbonds.add_new_atom (center_atom.copy_of ());
	pdb_hbonds.add_new_atom (receptor_atom.copy_of ());
	hashtable_entry_add_one (hbonds, hbonds_key);
	hbonds_labels.append (tuple ([ligand_atom.string_id (), center_atom.string_id (), receptor_atom.string_id (), comment, dict ({'distance': dist, 'angle': angle})]));
};
export var _product = function (lst1, lst2) {
	var combos = [];
	for (var l1 of lst1) {
		for (var l2 of lst2) {
			combos.append ([l1, l2]);
		}
	}
	return combos;
};
export var _collect_bonds = function (bonds_organized_by_donor, pdb_hbonds, hbonds, hbonds_labels) {
	var unwrapped_bond_infos = [];
	for (var donor_key of bonds_organized_by_donor.py_keys ()) {
		for (var bond_inf of bonds_organized_by_donor [donor_key]) {
			unwrapped_bond_infos.append (bond_inf);
		}
	}
	var unwrapped_bond_infos = sorted (unwrapped_bond_infos, __kwargtrans__ ({key: (function __lambda__ (i) {
		return i [0];
	})}));
	for (var [idx, lig_donor_or_accept, receptor_atom, ligand_atom, center_atom, dist, angle] of unwrapped_bond_infos) {
		_update_mol_and_data (pdb_hbonds, hbonds, hbonds_labels, lig_donor_or_accept, receptor_atom, ligand_atom, center_atom, dist, angle);
	}
};
export var _score_angle_deviation_from_sp3_sp2 = function (angle, donor_has_sp3_geometry) {
	if (donor_has_sp3_geometry === null) {
		var diff = min (fabs (109 - angle), fabs (120 - angle));
		var min_angle = 89;
		var max_angle = 150;
	}
	else if (donor_has_sp3_geometry == true) {
		var diff = fabs (109 - angle);
		var min_angle = 89;
		var max_angle = 129;
	}
	else {
		var diff = fabs (120 - angle);
		var min_angle = 100;
		var max_angle = 150;
	}
	return tuple ([diff, angle < min_angle || angle > max_angle]);
};
export var _select_acceptor = function (lig, recep, lig_donor_or_accept) {
	return (lig_donor_or_accept == 'ACCEPTOR' ? lig : recep);
};
export var _remove_extra_noh_hydrogen_bonds = function (ligand, receptor, acceptor_donor_atoms, bonds_organized_by_donor) {
	for (var donor_key of bonds_organized_by_donor.py_keys ()) {
		var bond_infos = bonds_organized_by_donor [donor_key];
		var donor_atom = acceptor_donor_atoms [donor_key];
		var donor_coor = donor_atom.coordinates;
		var lig_donor_or_accept = bond_infos [0] [1];
		var donor_mol = (lig_donor_or_accept == 'DONOR' ? ligand : receptor);
		var num_neighbors = donor_atom.number_of_neighbors ();
		if (num_neighbors == 0) {
			donor_mol.create_bond_by_distance (donor_atom);
			var num_neighbors = donor_atom.number_of_neighbors ();
		}
		if (donor_atom.belongs_to_protein ()) {
			var donor_has_sp3_geometry = donor_atom.has_sp3_geometry (donor_mol);
		}
		else {
			var donor_has_sp3_geometry = (num_neighbors == 1 ? null : donor_atom.has_sp3_geometry (donor_mol));
		}
		var donor_neighbor_coors = (function () {
			var __accu0__ = [];
			for (var i of donor_atom.indecies_of_atoms_connecting) {
				__accu0__.append (donor_mol.all_atoms [i].coordinates);
			}
			return __accu0__;
		}) ();
		var max_hydrogen_atoms = 0;
		if (__in__ (donor_atom.element, ['O', 'S'])) {
			var max_hydrogen_atoms = 2 - num_neighbors;
		}
		if (donor_atom.element == 'N') {
			var max_hydrogen_atoms = 3 - num_neighbors;
		}
		var scores_and_bond_infs = [];
		for (var bond_inf of bond_infos) {
			var lig_donor_or_accept = bond_inf [1];
			var receptor_atom = bond_inf [2];
			var ligand_atom = bond_inf [3];
			var bad_score = 0;
			var acceptor_coor = _select_acceptor (ligand_atom.coordinates, receptor_atom.coordinates, lig_donor_or_accept);
			var neighbor_donor_acceptor_angles = (function () {
				var __accu0__ = [];
				for (var donor_neighbor_coor of donor_neighbor_coors) {
					__accu0__.append (angle_between_three_points (donor_neighbor_coor, donor_coor, acceptor_coor) * to_deg);
				}
				return __accu0__;
			}) ();
			var bad_scores = (function () {
				var __accu0__ = [];
				for (var neighbor_donor_acceptor_angle of neighbor_donor_acceptor_angles) {
					__accu0__.append (_score_angle_deviation_from_sp3_sp2 (neighbor_donor_acceptor_angle, donor_has_sp3_geometry));
				}
				return __accu0__;
			}) ();
			if (__in__ (true, (function () {
				var __accu0__ = [];
				for (var a of bad_scores) {
					__accu0__.append (a [1]);
				}
				return __accu0__;
			}) ())) {
				bad_score += 10000;
			}
			else {
				bad_score += max ((function () {
					var __accu0__ = [];
					for (var s of bad_scores) {
						__accu0__.append (s [0]);
					}
					return py_iter (__accu0__);
				}) ());
			}
			scores_and_bond_infs.append ([bad_score, bond_inf]);
		}
		for (var idx1 = 0; idx1 < len (scores_and_bond_infs) - 1; idx1++) {
			var __left0__ = scores_and_bond_infs [idx1];
			var score1 = __left0__ [0];
			var bond_inf1 = __left0__ [1];
			var acceptor1 = _select_acceptor (bond_inf1 [3].coordinates, bond_inf1 [2].coordinates, bond_inf1 [1]);
			var dist1 = bond_inf1 [5];
			for (var idx2 = idx1 + 1; idx2 < len (scores_and_bond_infs); idx2++) {
				var __left0__ = scores_and_bond_infs [idx2];
				var score2 = __left0__ [0];
				var bond_inf2 = __left0__ [1];
				var acceptor2 = _select_acceptor (bond_inf2 [3].coordinates, bond_inf2 [2].coordinates, bond_inf2 [1]);
				var dist2 = bond_inf2 [5];
				var acceptor_donor_acceptor_angle = angle_between_three_points (acceptor1, donor_coor, acceptor2) * to_deg;
				var __left0__ = _score_angle_deviation_from_sp3_sp2 (acceptor_donor_acceptor_angle, donor_has_sp3_geometry);
				var bad_score = __left0__ [0];
				var catastrophic = __left0__ [1];
				if (dist1 > dist2) {
					scores_and_bond_infs [idx1] [0] = score1 + (catastrophic ? 10000 : bad_score);
					scores_and_bond_infs [idx2] [0] = score2 + bad_score;
				}
				else {
					scores_and_bond_infs [idx2] [0] = score2 + (catastrophic ? 10000 : bad_score);
					scores_and_bond_infs [idx1] [0] = score1 + bad_score;
				}
			}
		}
		var scores_and_bond_infs = (function () {
			var __accu0__ = [];
			for (var sbinf of scores_and_bond_infs) {
				if (sbinf [0] < 10000) {
					__accu0__.append (sbinf);
				}
			}
			return __accu0__;
		}) ();
		var scores_and_bond_infs = sorted (scores_and_bond_infs, __kwargtrans__ ({key: (function __lambda__ (i) {
			return i [0];
		})}));
		var scores_and_bond_infs = scores_and_bond_infs.__getslice__ (0, max_hydrogen_atoms, 1);
		bonds_organized_by_donor [donor_key] = (function () {
			var __accu0__ = [];
			for (var s of scores_and_bond_infs) {
				__accu0__.append (s [1]);
			}
			return __accu0__;
		}) ();
	}
};
export var _get_hydrogen_or_halogen_bonds = function (ligand, receptor, dist_cutoff, angle_cutoff, hydrogen_bond) {
	if (typeof dist_cutoff == 'undefined' || (dist_cutoff != null && dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var dist_cutoff = null;
	};
	if (typeof angle_cutoff == 'undefined' || (angle_cutoff != null && angle_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var angle_cutoff = null;
	};
	if (typeof hydrogen_bond == 'undefined' || (hydrogen_bond != null && hydrogen_bond.hasOwnProperty ("__kwargtrans__"))) {;
		var hydrogen_bond = true;
	};
	var hbonds = dict ({});
	var pdb_hbonds = Mol ();
	var hbonds_labels = [];
	var dist_cutoff = _set_default (dist_cutoff, (hydrogen_bond ? HYDROGEN_BOND_DIST_CUTOFF : HALOGEN_BOND_DIST_CUTOFF));
	var angle_cutoff = _set_default (angle_cutoff, HYDROGEN_HALOGEN_BOND_ANGLE_CUTOFF);
	var lig_and_recep_have_hydrogens = ligand.has_hydrogens && receptor.has_hydrogens;
	var close_donors_acceptors = _get_potential_donors_acceptors (ligand, receptor, dist_cutoff, hydrogen_bond);
	var acceptor_donor_atoms = dict ({});
	var bonds_organized_by_donor = dict ({});
	var idx = 0;
	for (var [ligand_atom, receptor_atom, dist] of close_donors_acceptors) {
		var lig_atm_hbond_infs = ligand.is_hbond_donor_acceptor (ligand_atom, hydrogen_bond);
		var recep_atm_hbond_infs = receptor.is_hbond_donor_acceptor (receptor_atom, hydrogen_bond);
		var combos = _product (lig_atm_hbond_infs, recep_atm_hbond_infs);
		for (var [lig_atm_hbond_inf, recep_atm_hbond_inf] of combos) {
			var __left0__ = lig_atm_hbond_inf;
			var lig_donor_or_accept = __left0__ [0];
			var lig_center_atom = __left0__ [1];
			var __left0__ = recep_atm_hbond_inf;
			var recep_donor_or_accept = __left0__ [0];
			var accept_center_atom = __left0__ [1];
			if (lig_donor_or_accept == recep_donor_or_accept) {
				continue;
			}
			var center_atom = (lig_donor_or_accept == 'DONOR' ? lig_center_atom : accept_center_atom);
			var angle = null;
			if (lig_and_recep_have_hydrogens || !(hydrogen_bond)) {
				var angle = fabs (180 - angle_between_three_points (ligand_atom.coordinates, center_atom.coordinates, receptor_atom.coordinates) * to_deg);
				if (angle > angle_cutoff) {
					continue;
				}
			}
			var donor_atom = (lig_donor_or_accept == 'ACCEPTOR' ? receptor_atom : ligand_atom);
			var donor_key = donor_atom.string_id ();
			acceptor_donor_atoms [donor_key] = donor_atom;
			if (!__in__ (donor_key, bonds_organized_by_donor)) {
				bonds_organized_by_donor [donor_key] = [];
			}
			bonds_organized_by_donor [donor_key].append (tuple ([idx, lig_donor_or_accept, receptor_atom, ligand_atom, center_atom, dist, angle]));
			idx++;
			break;
		}
	}
	if (!(lig_and_recep_have_hydrogens) && hydrogen_bond) {
		_remove_extra_noh_hydrogen_bonds (ligand, receptor, acceptor_donor_atoms, bonds_organized_by_donor);
	}
	_collect_bonds (bonds_organized_by_donor, pdb_hbonds, hbonds, hbonds_labels);
	return dict ({'counts': hbonds, 'mol': pdb_hbonds, 'labels': hbonds_labels});
};
export var get_hydrogen_bonds = function (ligand, receptor, dist_cutoff, angle_cutoff) {
	if (typeof dist_cutoff == 'undefined' || (dist_cutoff != null && dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var dist_cutoff = null;
	};
	if (typeof angle_cutoff == 'undefined' || (angle_cutoff != null && angle_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var angle_cutoff = null;
	};
	return _get_hydrogen_or_halogen_bonds (ligand, receptor, dist_cutoff, angle_cutoff, true);
};
export var get_halogen_bonds = function (ligand, receptor, dist_cutoff, angle_cutoff) {
	if (typeof dist_cutoff == 'undefined' || (dist_cutoff != null && dist_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var dist_cutoff = null;
	};
	if (typeof angle_cutoff == 'undefined' || (angle_cutoff != null && angle_cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var angle_cutoff = null;
	};
	return _get_hydrogen_or_halogen_bonds (ligand, receptor, dist_cutoff, angle_cutoff, false);
};

//# sourceMappingURL=binana.interactions._hydrogen_halogen_bonds.map