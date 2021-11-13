// This file is part of BINANA, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

// Transcrypt'ed from Python, 2021-11-12 01:16:44
var binana = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_binana__ from './binana.js';
__nest__ (binana, '', __module_binana__);
import {ACTIVE_SITE_FLEXIBILITY_DIST_CUTOFF, CATION_PI_DIST_CUTOFF, CLOSE_CONTACTS_DIST1_CUTOFF, CLOSE_CONTACTS_DIST2_CUTOFF, ELECTROSTATIC_DIST_CUTOFF, HYDROGEN_HALOGEN_BOND_ANGLE_CUTOFF, HYDROGEN_HALOGEN_BOND_DIST_CUTOFF, HYDROPHOBIC_DIST_CUTOFF, LIGAND, OUTPUT_DIR, OUTPUT_FILE, OUTPUT_JSON, PI_PADDING_DIST, PI_PI_INTERACTING_DIST_CUTOFF, PI_STACKING_ANGLE_TOLERANCE, RECEPTOR, SALT_BRIDGE_DIST_CUTOFF, TEST, T_STACKING_ANGLE_TOLERANCE, T_STACKING_CLOSEST_DIST_CUTOFF} from './binana.interactions.default_params.js';
var __name__ = 'binana._cli_params._get_params';
export var sep = '/';
export var CommandLineParameters =  __class__ ('CommandLineParameters', [object], {
	__module__: __name__,
	params: dict ({}),
	get is_num () {return __get__ (this, function (self, num) {
		try {
			var t = float (num);
			return t;
		}
		catch (__except0__) {
			if (isinstance (__except0__, ValueError)) {
				return num;
			}
			else {
				throw __except0__;
			}
		}
	});},
	get __init__ () {return __get__ (this, function (self, parameters) {
		self.params ['close_contacts_dist1_cutoff'] = CLOSE_CONTACTS_DIST1_CUTOFF;
		self.params ['close_contacts_dist2_cutoff'] = CLOSE_CONTACTS_DIST2_CUTOFF;
		self.params ['electrostatic_dist_cutoff'] = ELECTROSTATIC_DIST_CUTOFF;
		self.params ['active_site_flexibility_dist_cutoff'] = ACTIVE_SITE_FLEXIBILITY_DIST_CUTOFF;
		self.params ['hydrophobic_dist_cutoff'] = HYDROPHOBIC_DIST_CUTOFF;
		self.params ['hydrogen_halogen_bond_dist_cutoff'] = HYDROGEN_HALOGEN_BOND_DIST_CUTOFF;
		self.params ['hydrogen_halogen_bond_angle_cutoff'] = HYDROGEN_HALOGEN_BOND_ANGLE_CUTOFF;
		self.params ['pi_padding_dist'] = PI_PADDING_DIST;
		self.params ['pi_pi_interacting_dist_cutoff'] = PI_PI_INTERACTING_DIST_CUTOFF;
		self.params ['pi_stacking_angle_tolerance'] = PI_STACKING_ANGLE_TOLERANCE;
		self.params ['T_stacking_angle_tolerance'] = T_STACKING_ANGLE_TOLERANCE;
		self.params ['T_stacking_closest_dist_cutoff'] = T_STACKING_CLOSEST_DIST_CUTOFF;
		self.params ['cation_pi_dist_cutoff'] = CATION_PI_DIST_CUTOFF;
		self.params ['salt_bridge_dist_cutoff'] = SALT_BRIDGE_DIST_CUTOFF;
		self.params ['receptor'] = RECEPTOR;
		self.params ['ligand'] = LIGAND;
		self.params ['output_dir'] = OUTPUT_DIR;
		self.params ['output_file'] = OUTPUT_FILE;
		self.params ['output_json'] = OUTPUT_JSON;
		self.params ['test'] = TEST;
		for (var index = 0; index < len (parameters); index++) {
			var item = parameters [index];
			if (len (item) > 0 && item [0] == '-') {
				var key = item.py_replace ('-', '');
				var value = self.is_num (parameters [index + 1]);
				if (__in__ (key, list (self.params.py_keys ()))) {
					self.params [key] = value;
					parameters [index] = '';
					parameters [index + 1] = '';
				}
			}
		}
		self.error = '';
		for (var index = 1; index < len (parameters); index++) {
			var item = parameters [index];
			if (item != '') {
				self.error = (self.error + item) + ' ';
			}
		}
		if (self.params ['output_dir'] != '' && self.params ['output_dir'].__getslice__ (-(1), null, 1) != sep) {
			self.params ['output_dir'] = self.params ['output_dir'] + sep;
		}
		var single_output_files = [tuple (['output_file', 'pdb']), tuple (['output_json', 'json'])];
		for (var [single_output_file, ext] of single_output_files) {
			if (self.params ['output_dir'] != '' && self.params [single_output_file] == '') {
				self.params [single_output_file] = (self.params ['output_dir'] + 'output.') + ext;
			}
		}
	});},
	get okay_to_proceed () {return __get__ (this, function (self) {
		if (self.params ['receptor'] != '' && self.params ['ligand'] != '') {
			return true;
		}
		else {
			return false;
		}
	});}
});

//# sourceMappingURL=binana._cli_params._get_params.map