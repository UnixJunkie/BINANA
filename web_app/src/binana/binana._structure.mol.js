// Transcrypt'ed from Python, 2021-08-01 02:57:39
var binana = {};
var math = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {OpenFile as openFile} from './binana._utils.shim.js';
import {fabs} from './binana._utils.shim.js';
import * as shim from './binana._utils.shim.js';
import * as __module_binana__utils__ from './binana._utils.js';
__nest__ (binana, '_utils', __module_binana__utils__);
import {angle_between_three_points, cross_product, dihedral, distance, vector_subtraction} from './binana._utils._math_functions.js';
import {Atom} from './binana._structure.atom.js';
import {Point} from './binana._structure.point.js';
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
import * as __module_binana__ from './binana.js';
__nest__ (binana, '', __module_binana__);
var __name__ = 'binana._structure.mol';
export var textwrap = shim;
export var Mol =  __class__ ('Mol', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.all_atoms = dict ({});
		self.non_protein_atoms = dict ({});
		self.max_x = -(9999.99);
		self.min_x = 9999.99;
		self.max_y = -(9999.99);
		self.min_y = 9999.99;
		self.max_z = -(9999.99);
		self.min_z = 9999.99;
		self.rotatable_bonds_count = -(1);
		self.protein_resnames = ['ALA', 'ARG', 'ASN', 'ASP', 'ASH', 'ASX', 'CYS', 'CYM', 'CYX', 'GLN', 'GLU', 'GLH', 'GLX', 'GLY', 'HIS', 'HID', 'HIE', 'HIP', 'ILE', 'LEU', 'LYS', 'LYN', 'MET', 'PHE', 'PRO', 'SER', 'THR', 'TRP', 'TYR', 'VAL'];
		self.aromatic_rings = [];
		self.charges = [];
	});},
	get load_pdb_from_text () {return __get__ (this, function (self, text_content, filename_to_use, min_x, max_x, min_y, max_y, min_z, max_z) {
		if (typeof filename_to_use == 'undefined' || (filename_to_use != null && filename_to_use.hasOwnProperty ("__kwargtrans__"))) {;
			var filename_to_use = 'NO_FILE';
		};
		if (typeof min_x == 'undefined' || (min_x != null && min_x.hasOwnProperty ("__kwargtrans__"))) {;
			var min_x = -(9999.99);
		};
		if (typeof max_x == 'undefined' || (max_x != null && max_x.hasOwnProperty ("__kwargtrans__"))) {;
			var max_x = 9999.99;
		};
		if (typeof min_y == 'undefined' || (min_y != null && min_y.hasOwnProperty ("__kwargtrans__"))) {;
			var min_y = -(9999.99);
		};
		if (typeof max_y == 'undefined' || (max_y != null && max_y.hasOwnProperty ("__kwargtrans__"))) {;
			var max_y = 9999.99;
		};
		if (typeof min_z == 'undefined' || (min_z != null && min_z.hasOwnProperty ("__kwargtrans__"))) {;
			var min_z = -(9999.99);
		};
		if (typeof max_z == 'undefined' || (max_z != null && max_z.hasOwnProperty ("__kwargtrans__"))) {;
			var max_z = 9999.99;
		};
		let lines = text_content.split("\n");
		var autoindex = 1;
		self.__init__ ();
		self.filename = filename_to_use;
		var atom_already_loaded = [];
		for (var t = 0; t < len (lines); t++) {
			var line = lines [t];
			if (line.__getslice__ (0, 3, 1) == 'END' && line.__getslice__ (0, 7, 1) != 'ENDROOT' && line.__getslice__ (0, 9, 1) != 'ENDBRANCH') {
				var t = textwrap.wrap (('WARNING: END or ENDMDL term found in ' + filename_to_use) + '. Everything after the first instance of this term will be ignored.                     If any of your PDBQT files have multiple frames/poses, please partition them                     into separate files using vina_split and feed each of the the single-frame files into Binana separately.', 80);
				print ('\n'.join (t) + '\n');
				print (line);
				break;
			}
			if (__in__ ('between atoms', line) && __in__ (' A ', line)) {
				if (self.rotatable_bonds_count == -(1)) {
					self.rotatable_bonds_count = 0;
				}
				self.rotatable_bonds_count = self.rotatable_bonds_count + 1;
			}
			if (len (line) >= 7 && (line.__getslice__ (0, 4, 1) == 'ATOM' || line.__getslice__ (0, 6, 1) == 'HETATM')) {
				var temp_atom = Atom ();
				temp_atom.read_PDB_line (line);
				if (temp_atom.coordinates.x > min_x && temp_atom.coordinates.x < max_x && temp_atom.coordinates.y > min_y && temp_atom.coordinates.y < max_y && temp_atom.coordinates.z > min_z && temp_atom.coordinates.z < max_z) {
					if (self.max_x < temp_atom.coordinates.x) {
						self.max_x = temp_atom.coordinates.x;
					}
					if (self.max_y < temp_atom.coordinates.y) {
						self.max_y = temp_atom.coordinates.y;
					}
					if (self.max_z < temp_atom.coordinates.z) {
						self.max_z = temp_atom.coordinates.z;
					}
					if (self.min_x > temp_atom.coordinates.x) {
						self.min_x = temp_atom.coordinates.x;
					}
					if (self.min_y > temp_atom.coordinates.y) {
						self.min_y = temp_atom.coordinates.y;
					}
					if (self.min_z > temp_atom.coordinates.z) {
						self.min_z = temp_atom.coordinates.z;
					}
					var key = (((((temp_atom.atom_name.strip () + '_') + str (temp_atom.resid)) + '_') + temp_atom.residue.strip ()) + '_') + temp_atom.chain.strip ();
					if (__in__ (key, atom_already_loaded) && __in__ (temp_atom.residue.strip (), self.protein_resnames)) {
						self.printout (('Warning: Duplicate protein atom detected: "' + temp_atom.line.strip ()) + '". Not loading this duplicate.');
						print ('');
					}
					if (!__in__ (key, atom_already_loaded) || !(__in__ (temp_atom.residue.strip (), self.protein_resnames))) {
						atom_already_loaded.append (key);
						self.all_atoms [autoindex] = temp_atom;
						if (!__in__ (temp_atom.residue.__getslice__ (-(3), null, 1), self.protein_resnames)) {
							self.non_protein_atoms [autoindex] = temp_atom;
						}
						var autoindex = autoindex + 1;
					}
				}
			}
		}
		self.check_protein_format ();
		self.create_bonds_by_distance ();
		self.assign_aromatic_rings ();
		self.assign_charges ();
	});},
	get load_pdb_file () {return __get__ (this, function (self, filename, min_x, max_x, min_y, max_y, min_z, max_z) {
		if (typeof min_x == 'undefined' || (min_x != null && min_x.hasOwnProperty ("__kwargtrans__"))) {;
			var min_x = -(9999.99);
		};
		if (typeof max_x == 'undefined' || (max_x != null && max_x.hasOwnProperty ("__kwargtrans__"))) {;
			var max_x = 9999.99;
		};
		if (typeof min_y == 'undefined' || (min_y != null && min_y.hasOwnProperty ("__kwargtrans__"))) {;
			var min_y = -(9999.99);
		};
		if (typeof max_y == 'undefined' || (max_y != null && max_y.hasOwnProperty ("__kwargtrans__"))) {;
			var max_y = 9999.99;
		};
		if (typeof min_z == 'undefined' || (min_z != null && min_z.hasOwnProperty ("__kwargtrans__"))) {;
			var min_z = -(9999.99);
		};
		if (typeof max_z == 'undefined' || (max_z != null && max_z.hasOwnProperty ("__kwargtrans__"))) {;
			var max_z = 9999.99;
		};
		var file = openFile (filename, 'r');
		var text_content = file.read ();
		file.close ();
		self.load_pdb_from_text (text_content, filename, min_x, max_x, min_y, max_y, min_z, max_z);
	});},
	get printout () {return __get__ (this, function (self, the_string) {
		var lines = textwrap.wrap (the_string, 80);
		for (var line of lines) {
			print (line);
		}
	});},
	get save_pdb () {return __get__ (this, function (self, file_name) {
		var f = openFile (file_name, 'w');
		var towrite = self.save_pdb_string ();
		if (towrite.strip () == '') {
			var towrite = 'ATOM      1  X   XXX             0.000   0.000   0.000                       X';
		}
		f.write (towrite);
		f.close ();
	});},
	get save_pdb_string () {return __get__ (this, function (self) {
		var to_output = '';
		for (var atom_index of self.all_atoms.py_keys ()) {
			var to_output = (to_output + self.all_atoms [atom_index].create_PDB_line (atom_index)) + '\n';
		}
		return to_output;
	});},
	get add_new_atom () {return __get__ (this, function (self, atom) {
		var t = 1;
		while (__in__ (t, list (self.all_atoms.py_keys ()))) {
			var t = t + 1;
		}
		self.all_atoms [t] = atom;
	});},
	get set_resname () {return __get__ (this, function (self, resname) {
		for (var atom_index of self.all_atoms.py_keys ()) {
			self.all_atoms [atom_index].residue = resname;
		}
	});},
	get connected_atoms_of_given_element () {return __get__ (this, function (self, index, connected_atom_element) {
		var atom = self.all_atoms [index];
		var connected_atoms = [];
		for (var index2 of atom.indecies_of_atoms_connecting) {
			var atom2 = self.all_atoms [index2];
			if (atom2.element == connected_atom_element) {
				connected_atoms.append (index2);
			}
		}
		return connected_atoms;
	});},
	get connected_heavy_atoms () {return __get__ (this, function (self, index) {
		var atom = self.all_atoms [index];
		var connected_atoms = [];
		for (var index2 of atom.indecies_of_atoms_connecting) {
			var atom2 = self.all_atoms [index2];
			if (atom2.element != 'H') {
				connected_atoms.append (index2);
			}
		}
		return connected_atoms;
	});},
	get check_protein_format () {return __get__ (this, function (self) {
		var curr_res = '';
		var first = true;
		var residue = [];
		var last_key = '';
		for (var atom_index of self.all_atoms.py_keys ()) {
			var atom = self.all_atoms [atom_index];
			var key = (((atom.residue + '_') + str (atom.resid)) + '_') + atom.chain;
			if (first === true) {
				var curr_res = key;
				var first = false;
			}
			if (key != curr_res) {
				self.check_protein_format_process_residue (residue, last_key);
				var residue = [];
				var curr_res = key;
			}
			residue.append (atom.atom_name.strip ());
			var last_key = key;
		}
		self.check_protein_format_process_residue (residue, last_key);
	});},
	get check_protein_format_process_residue () {return __get__ (this, function (self, residue, last_key) {
		var temp = last_key.strip ().py_split ('_');
		var resname = temp [0];
		var real_resname = resname.__getslice__ (-(3), null, 1);
		var resid = temp [1];
		var chain = temp [2];
		if (__in__ (real_resname, self.protein_resnames)) {
			if (!__in__ ('N', residue)) {
				self.printout (('Warning: There is no atom named "N" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine secondary structure. If this residue is far from the active site, this warning may not affect the NNScore.');
				print ('');
			}
			if (!__in__ ('C', residue)) {
				self.printout (('Warning: There is no atom named "C" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine secondary structure. If this residue is far from the active site, this warning may not affect the NNScore.');
				print ('');
			}
			if (!__in__ ('CA', residue)) {
				self.printout (('Warning: There is no atom named "CA" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine secondary structure. If this residue is far from the active site, this warning may not affect the NNScore.');
				print ('');
			}
			if (real_resname == 'GLU' || real_resname == 'GLH' || real_resname == 'GLX') {
				if (!__in__ ('OE1', residue)) {
					self.printout (('Warning: There is no atom named "OE1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine salt-bridge interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('OE2', residue)) {
					self.printout (('Warning: There is no atom named "OE2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine salt-bridge interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
			}
			if (real_resname == 'ASP' || real_resname == 'ASH' || real_resname == 'ASX') {
				if (!__in__ ('OD1', residue)) {
					self.printout (('Warning: There is no atom named "OD1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine salt-bridge interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('OD2', residue)) {
					self.printout (('Warning: There is no atom named "OD2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine salt-bridge interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
			}
			if (real_resname == 'LYS' || real_resname == 'LYN') {
				if (!__in__ ('NZ', residue)) {
					self.printout (('Warning: There is no atom named "NZ" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-cation and salt-bridge interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
			}
			if (real_resname == 'ARG') {
				if (!__in__ ('NH1', residue)) {
					self.printout (('Warning: There is no atom named "NH1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-cation and salt-bridge interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('NH2', residue)) {
					self.printout (('Warning: There is no atom named "NH2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-cation and salt-bridge interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
			}
			if (real_resname == 'HIS' || real_resname == 'HID' || real_resname == 'HIE' || real_resname == 'HIP') {
				if (!__in__ ('NE2', residue)) {
					self.printout (('Warning: There is no atom named "NE2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-cation and salt-bridge interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('ND1', residue)) {
					self.printout (('Warning: There is no atom named "ND1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-cation and salt-bridge interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
			}
			if (real_resname == 'PHE') {
				if (!__in__ ('CG', residue)) {
					self.printout (('Warning: There is no atom named "CG" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CD1', residue)) {
					self.printout (('Warning: There is no atom named "CD1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CD2', residue)) {
					self.printout (('Warning: There is no atom named "CD2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CE1', residue)) {
					self.printout (('Warning: There is no atom named "CE1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CE2', residue)) {
					self.printout (('Warning: There is no atom named "CE2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CZ', residue)) {
					self.printout (('Warning: There is no atom named "CZ" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
			}
			if (real_resname == 'TYR') {
				if (!__in__ ('CG', residue)) {
					self.printout (('Warning: There is no atom named "CG" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CD1', residue)) {
					self.printout (('Warning: There is no atom named "CD1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CD2', residue)) {
					self.printout (('Warning: There is no atom named "CD2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CE1', residue)) {
					self.printout (('Warning: There is no atom named "CE1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CE2', residue)) {
					self.printout (('Warning: There is no atom named "CE2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CZ', residue)) {
					self.printout (('Warning: There is no atom named "CZ" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
			}
			if (real_resname == 'TRP') {
				if (!__in__ ('CG', residue)) {
					self.printout (('Warning: There is no atom named "CG" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CD1', residue)) {
					self.printout (('Warning: There is no atom named "CD1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CD2', residue)) {
					self.printout (('Warning: There is no atom named "CD2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('NE1', residue)) {
					self.printout (('Warning: There is no atom named "NE1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CE2', residue)) {
					self.printout (('Warning: There is no atom named "CE2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CE3', residue)) {
					self.printout (('Warning: There is no atom named "CE3" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CZ2', residue)) {
					self.printout (('Warning: There is no atom named "CZ2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CZ3', residue)) {
					self.printout (('Warning: There is no atom named "CZ3" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CH2', residue)) {
					self.printout (('Warning: There is no atom named "CH2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
			}
			if (real_resname == 'HIS' || real_resname == 'HID' || real_resname == 'HIE' || real_resname == 'HIP') {
				if (!__in__ ('CG', residue)) {
					self.printout (('Warning: There is no atom named "CG" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('ND1', residue)) {
					self.printout (('Warning: There is no atom named "ND1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CD2', residue)) {
					self.printout (('Warning: There is no atom named "CD2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('CE1', residue)) {
					self.printout (('Warning: There is no atom named "CE1" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
				if (!__in__ ('NE2', residue)) {
					self.printout (('Warning: There is no atom named "NE2" in the protein residue ' + last_key) + '. Please use standard naming conventions for all protein residues. This atom is needed to determine pi-pi and pi-cation interactions. If this residue is far from the active site, this warning may not affect the NNScore.');
					print ('');
				}
			}
		}
	});},
	get create_bonds_by_distance () {return __get__ (this, function (self) {
		for (var atom_index1 of self.non_protein_atoms.py_keys ()) {
			var atom1 = self.non_protein_atoms [atom_index1];
			if (!__in__ (atom1.residue.__getslice__ (-(3), null, 1), self.protein_resnames)) {
				for (var atom_index2 of self.non_protein_atoms.py_keys ()) {
					if (atom_index1 != atom_index2) {
						var atom2 = self.non_protein_atoms [atom_index2];
						if (!(__in__ (atom2.residue.__getslice__ (-(3), null, 1), self.protein_resnames))) {
							var dist = distance (atom1.coordinates, atom2.coordinates);
							if (dist < self.bond_length (atom1.element, atom2.element) * 1.2) {
								atom1.add_neighbor_atom_index (atom_index2);
								atom2.add_neighbor_atom_index (atom_index1);
							}
						}
					}
				}
			}
		}
	});},
	get bond_length () {return __get__ (this, function (self, element1, element2) {
		var distance = 0.0;
		if (element1 == 'C' && element2 == 'C') {
			var distance = 1.53;
		}
		if (element1 == 'N' && element2 == 'N') {
			var distance = 1.425;
		}
		if (element1 == 'O' && element2 == 'O') {
			var distance = 1.469;
		}
		if (element1 == 'S' && element2 == 'S') {
			var distance = 2.048;
		}
		if (element1 == 'C' && element2 == 'H' || element1 == 'H' && element2 == 'C') {
			var distance = 1.059;
		}
		if (element1 == 'C' && element2 == 'N' || element1 == 'N' && element2 == 'C') {
			var distance = 1.469;
		}
		if (element1 == 'C' && element2 == 'O' || element1 == 'O' && element2 == 'C') {
			var distance = 1.413;
		}
		if (element1 == 'C' && element2 == 'S' || element1 == 'S' && element2 == 'C') {
			var distance = 1.819;
		}
		if (element1 == 'N' && element2 == 'H' || element1 == 'H' && element2 == 'N') {
			var distance = 1.009;
		}
		if (element1 == 'N' && element2 == 'O' || element1 == 'O' && element2 == 'N') {
			var distance = 1.463;
		}
		if (element1 == 'O' && element2 == 'S' || element1 == 'S' && element2 == 'O') {
			var distance = 1.577;
		}
		if (element1 == 'O' && element2 == 'H' || element1 == 'H' && element2 == 'O') {
			var distance = 0.967;
		}
		if (element1 == 'S' && element2 == 'H' || element1 == 'H' && element2 == 'S') {
			var distance = 2.025 / 1.5;
		}
		if (element1 == 'S' && element2 == 'N' || element1 == 'H' && element2 == 'N') {
			var distance = 1.633;
		}
		if (element1 == 'C' && element2 == 'F' || element1 == 'F' && element2 == 'C') {
			var distance = 1.399;
		}
		if (element1 == 'C' && element2 == 'CL' || element1 == 'CL' && element2 == 'C') {
			var distance = 1.79;
		}
		if (element1 == 'C' && element2 == 'BR' || element1 == 'BR' && element2 == 'C') {
			var distance = 1.91;
		}
		if (element1 == 'C' && element2 == 'I' || element1 == 'I' && element2 == 'C') {
			var distance = 2.162;
		}
		if (element1 == 'S' && element2 == 'BR' || element1 == 'BR' && element2 == 'S') {
			var distance = 2.321;
		}
		if (element1 == 'S' && element2 == 'CL' || element1 == 'CL' && element2 == 'S') {
			var distance = 2.283;
		}
		if (element1 == 'S' && element2 == 'F' || element1 == 'F' && element2 == 'S') {
			var distance = 1.64;
		}
		if (element1 == 'S' && element2 == 'I' || element1 == 'I' && element2 == 'S') {
			var distance = 2.687;
		}
		if (element1 == 'P' && element2 == 'BR' || element1 == 'BR' && element2 == 'P') {
			var distance = 2.366;
		}
		if (element1 == 'P' && element2 == 'CL' || element1 == 'CL' && element2 == 'P') {
			var distance = 2.008;
		}
		if (element1 == 'P' && element2 == 'F' || element1 == 'F' && element2 == 'P') {
			var distance = 1.495;
		}
		if (element1 == 'P' && element2 == 'I' || element1 == 'I' && element2 == 'P') {
			var distance = 2.49;
		}
		if (element1 == 'P' && element2 == 'O' || element1 == 'O' && element2 == 'P') {
			var distance = 1.6;
		}
		if (element1 == 'N' && element2 == 'BR' || element1 == 'BR' && element2 == 'N') {
			var distance = 1.843;
		}
		if (element1 == 'N' && element2 == 'CL' || element1 == 'CL' && element2 == 'N') {
			var distance = 1.743;
		}
		if (element1 == 'N' && element2 == 'F' || element1 == 'F' && element2 == 'N') {
			var distance = 1.406;
		}
		if (element1 == 'N' && element2 == 'I' || element1 == 'I' && element2 == 'N') {
			var distance = 2.2;
		}
		if (element1 == 'SI' && element2 == 'BR' || element1 == 'BR' && element2 == 'SI') {
			var distance = 2.284;
		}
		if (element1 == 'SI' && element2 == 'CL' || element1 == 'CL' && element2 == 'SI') {
			var distance = 2.072;
		}
		if (element1 == 'SI' && element2 == 'F' || element1 == 'F' && element2 == 'SI') {
			var distance = 1.636;
		}
		if (element1 == 'SI' && element2 == 'P' || element1 == 'P' && element2 == 'SI') {
			var distance = 2.264;
		}
		if (element1 == 'SI' && element2 == 'S' || element1 == 'S' && element2 == 'SI') {
			var distance = 2.145;
		}
		if (element1 == 'SI' && element2 == 'SI' || element1 == 'SI' && element2 == 'SI') {
			var distance = 2.359;
		}
		if (element1 == 'SI' && element2 == 'C' || element1 == 'C' && element2 == 'SI') {
			var distance = 1.888;
		}
		if (element1 == 'SI' && element2 == 'N' || element1 == 'N' && element2 == 'SI') {
			var distance = 1.743;
		}
		if (element1 == 'SI' && element2 == 'O' || element1 == 'O' && element2 == 'SI') {
			var distance = 1.631;
		}
		return distance;
	});},
	get assign_charges () {return __get__ (this, function (self) {
		var all_charged = [];
		for (var atom_index of self.non_protein_atoms.py_keys ()) {
			var atom = self.non_protein_atoms [atom_index];
			if (atom.element == 'MG' || atom.element == 'MN' || atom.element == 'RH' || atom.element == 'ZN' || atom.element == 'FE' || atom.element == 'BI' || atom.element == 'AS' || atom.element == 'AG') {
				var chrg = self.Charged (atom.coordinates, [atom_index], true);
				self.charges.append (chrg);
			}
			if (atom.element == 'N') {
				if (atom.number_of_neighbors () == 4) {
					var indexes = [atom_index];
					indexes.extend (atom.indecies_of_atoms_connecting);
					var chrg = self.Charged (atom.coordinates, indexes, true);
					self.charges.append (chrg);
				}
				else if (atom.number_of_neighbors () == 3) {
					var nitrogen = atom;
					var atom1 = self.all_atoms [atom.indecies_of_atoms_connecting [0]];
					var atom2 = self.all_atoms [atom.indecies_of_atoms_connecting [1]];
					var atom3 = self.all_atoms [atom.indecies_of_atoms_connecting [2]];
					var angle1 = (angle_between_three_points (atom1.coordinates, nitrogen.coordinates, atom2.coordinates) * 180.0) / math.pi;
					var angle2 = (angle_between_three_points (atom1.coordinates, nitrogen.coordinates, atom3.coordinates) * 180.0) / math.pi;
					var angle3 = (angle_between_three_points (atom2.coordinates, nitrogen.coordinates, atom3.coordinates) * 180.0) / math.pi;
					var average_angle = ((angle1 + angle2) + angle3) / 3;
					if (fabs (average_angle - 109.0) < 5.0) {
						var indexes = [atom_index];
						indexes.extend (atom.indecies_of_atoms_connecting);
						var chrg = self.Charged (nitrogen.coordinates, indexes, true);
						self.charges.append (chrg);
					}
				}
			}
			if (atom.element == 'C') {
				if (atom.number_of_neighbors () == 3) {
					var nitrogens = self.connected_atoms_of_given_element (atom_index, 'N');
					if (len (nitrogens) >= 2) {
						var nitrogens_to_use = [];
						var all_connected = atom.indecies_of_atoms_connecting.__getslice__ (0, null, 1);
						var not_isolated = -(1);
						for (var atmindex of nitrogens) {
							if (len (self.connected_heavy_atoms (atmindex)) == 1) {
								nitrogens_to_use.append (atmindex);
								all_connected.remove (atmindex);
							}
						}
						if (len (all_connected) > 0) {
							var not_isolated = all_connected [0];
						}
						if (len (nitrogens_to_use) == 2 && not_isolated != -(1)) {
							var not_isolated_atom = self.all_atoms [not_isolated];
							if (not_isolated_atom.element == 'C' && not_isolated_atom.number_of_neighbors () == 4 || not_isolated_atom.element == 'O' && not_isolated_atom.number_of_neighbors () == 2 || not_isolated_atom.element == 'N' || not_isolated_atom.element == 'S' || not_isolated_atom.element == 'P') {
								var pt = self.all_atoms [nitrogens_to_use [0]].coordinates.copy_of ();
								pt.x = pt.x + self.all_atoms [nitrogens_to_use [1]].coordinates.x;
								pt.y = pt.y + self.all_atoms [nitrogens_to_use [1]].coordinates.y;
								pt.z = pt.z + self.all_atoms [nitrogens_to_use [1]].coordinates.z;
								pt.x = pt.x / 2.0;
								pt.y = pt.y / 2.0;
								pt.z = pt.z / 2.0;
								var indexes = [atom_index];
								indexes.extend (nitrogens_to_use);
								indexes.extend (self.connected_atoms_of_given_element (nitrogens_to_use [0], 'H'));
								indexes.extend (self.connected_atoms_of_given_element (nitrogens_to_use [1], 'H'));
								var chrg = self.Charged (pt, indexes, true);
								self.charges.append (chrg);
							}
						}
					}
				}
			}
			if (atom.element == 'C') {
				if (atom.number_of_neighbors () == 3) {
					var oxygens = self.connected_atoms_of_given_element (atom_index, 'O');
					if (len (oxygens) == 2) {
						if (len (self.connected_heavy_atoms (oxygens [0])) == 1 && len (self.connected_heavy_atoms (oxygens [1])) == 1) {
							var pt = self.all_atoms [oxygens [0]].coordinates.copy_of ();
							pt.x = pt.x + self.all_atoms [oxygens [1]].coordinates.x;
							pt.y = pt.y + self.all_atoms [oxygens [1]].coordinates.y;
							pt.z = pt.z + self.all_atoms [oxygens [1]].coordinates.z;
							pt.x = pt.x / 2.0;
							pt.y = pt.y / 2.0;
							pt.z = pt.z / 2.0;
							var chrg = self.Charged (pt, [oxygens [0], atom_index, oxygens [1]], false);
							self.charges.append (chrg);
						}
					}
				}
			}
			if (atom.element == 'P') {
				var oxygens = self.connected_atoms_of_given_element (atom_index, 'O');
				if (len (oxygens) >= 2) {
					var count = 0;
					for (var oxygen_index of oxygens) {
						if (len (self.connected_heavy_atoms (oxygen_index)) == 1) {
							var count = count + 1;
						}
					}
					if (count >= 2) {
						var indexes = [atom_index];
						indexes.extend (oxygens);
						var chrg = self.Charged (atom.coordinates, indexes, false);
						self.charges.append (chrg);
					}
				}
			}
			if (atom.element == 'S') {
				var oxygens = self.connected_atoms_of_given_element (atom_index, 'O');
				if (len (oxygens) >= 3) {
					var count = 0;
					for (var oxygen_index of oxygens) {
						if (len (self.connected_heavy_atoms (oxygen_index)) == 1) {
							var count = count + 1;
						}
					}
					if (count >= 3) {
						var indexes = [atom_index];
						indexes.extend (oxygens);
						var chrg = self.Charged (atom.coordinates, indexes, false);
						self.charges.append (chrg);
					}
				}
			}
		}
		var curr_res = '';
		var first = true;
		var residue = [];
		var last_key = '';
		for (var atom_index of self.all_atoms.py_keys ()) {
			var atom = self.all_atoms [atom_index];
			var key = (((atom.residue + '_') + str (atom.resid)) + '_') + atom.chain;
			if (first == true) {
				var curr_res = key;
				var first = false;
			}
			if (key != curr_res) {
				self.assign_charged_from_protein_process_residue (residue, last_key);
				var residue = [];
				var curr_res = key;
			}
			residue.append (atom_index);
			var last_key = key;
		}
		self.assign_charged_from_protein_process_residue (residue, last_key);
	});},
	get assign_charged_from_protein_process_residue () {return __get__ (this, function (self, residue, last_key) {
		var temp = last_key.strip ().py_split ('_');
		var resname = temp [0];
		var real_resname = resname.__getslice__ (-(3), null, 1);
		var resid = temp [1];
		var chain = temp [2];
		if (real_resname == 'LYS' || real_resname == 'LYN') {
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'NZ') {
					var indexes = [index];
					for (var index2 of residue) {
						var atom2 = self.all_atoms [index2];
						if (atom2.atom_name.strip () == 'HZ1') {
							indexes.append (index2);
						}
						if (atom2.atom_name.strip () == 'HZ2') {
							indexes.append (index2);
						}
						if (atom2.atom_name.strip () == 'HZ3') {
							indexes.append (index2);
						}
					}
					var chrg = self.Charged (atom.coordinates, indexes, true);
					self.charges.append (chrg);
					break;
				}
			}
		}
		if (real_resname == 'ARG') {
			var charge_pt = Point (0.0, 0.0, 0.0);
			var count = 0.0;
			var indices = [];
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'NH1') {
					charge_pt.x = charge_pt.x + atom.coordinates.x;
					charge_pt.y = charge_pt.y + atom.coordinates.y;
					charge_pt.z = charge_pt.z + atom.coordinates.z;
					indices.append (index);
					var count = count + 1.0;
				}
				if (atom.atom_name.strip () == 'NH2') {
					charge_pt.x = charge_pt.x + atom.coordinates.x;
					charge_pt.y = charge_pt.y + atom.coordinates.y;
					charge_pt.z = charge_pt.z + atom.coordinates.z;
					indices.append (index);
					var count = count + 1.0;
				}
				if (atom.atom_name.strip () == '2HH2') {
					indices.append (index);
				}
				if (atom.atom_name.strip () == '1HH2') {
					indices.append (index);
				}
				if (atom.atom_name.strip () == 'CZ') {
					indices.append (index);
				}
				if (atom.atom_name.strip () == '2HH1') {
					indices.append (index);
				}
				if (atom.atom_name.strip () == '1HH1') {
					indices.append (index);
				}
			}
			if (count != 0.0) {
				charge_pt.x = charge_pt.x / count;
				charge_pt.y = charge_pt.y / count;
				charge_pt.z = charge_pt.z / count;
				if (charge_pt.x != 0.0 || charge_pt.y != 0.0 || charge_pt.z != 0.0) {
					var chrg = self.Charged (charge_pt, indices, true);
					self.charges.append (chrg);
				}
			}
		}
		if (__in__ (real_resname, ['HIS', 'HID', 'HIE', 'HIP'])) {
			var charge_pt = Point (0.0, 0.0, 0.0);
			var count = 0.0;
			var indices = [];
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'NE2') {
					charge_pt.x = charge_pt.x + atom.coordinates.x;
					charge_pt.y = charge_pt.y + atom.coordinates.y;
					charge_pt.z = charge_pt.z + atom.coordinates.z;
					indices.append (index);
					var count = count + 1.0;
				}
				if (atom.atom_name.strip () == 'ND1') {
					charge_pt.x = charge_pt.x + atom.coordinates.x;
					charge_pt.y = charge_pt.y + atom.coordinates.y;
					charge_pt.z = charge_pt.z + atom.coordinates.z;
					indices.append (index);
					var count = count + 1.0;
				}
				if (atom.atom_name.strip () == 'HE2') {
					indices.append (index);
				}
				if (atom.atom_name.strip () == 'HD1') {
					indices.append (index);
				}
				if (atom.atom_name.strip () == 'CE1') {
					indices.append (index);
				}
				if (atom.atom_name.strip () == 'CD2') {
					indices.append (index);
				}
				if (atom.atom_name.strip () == 'CG') {
					indices.append (index);
				}
			}
			if (count != 0.0) {
				charge_pt.x = charge_pt.x / count;
				charge_pt.y = charge_pt.y / count;
				charge_pt.z = charge_pt.z / count;
				if (charge_pt.x != 0.0 || charge_pt.y != 0.0 || charge_pt.z != 0.0) {
					var chrg = self.Charged (charge_pt, indices, true);
					self.charges.append (chrg);
				}
			}
		}
		if (__in__ (real_resname, ['GLU', 'GLH', 'GLX'])) {
			var charge_pt = Point (0.0, 0.0, 0.0);
			var count = 0.0;
			var indices = [];
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'OE1') {
					charge_pt.x = charge_pt.x + atom.coordinates.x;
					charge_pt.y = charge_pt.y + atom.coordinates.y;
					charge_pt.z = charge_pt.z + atom.coordinates.z;
					indices.append (index);
					var count = count + 1.0;
				}
				if (atom.atom_name.strip () == 'OE2') {
					charge_pt.x = charge_pt.x + atom.coordinates.x;
					charge_pt.y = charge_pt.y + atom.coordinates.y;
					charge_pt.z = charge_pt.z + atom.coordinates.z;
					indices.append (index);
					var count = count + 1.0;
				}
				if (atom.atom_name.strip () == 'CD') {
					indices.append (index);
				}
			}
			if (count != 0.0) {
				charge_pt.x = charge_pt.x / count;
				charge_pt.y = charge_pt.y / count;
				charge_pt.z = charge_pt.z / count;
				if (charge_pt.x != 0.0 || charge_pt.y != 0.0 || charge_pt.z != 0.0) {
					var chrg = self.Charged (charge_pt, indices, false);
					self.charges.append (chrg);
				}
			}
		}
		if (__in__ (real_resname, ['ASP', 'ASH', 'ASX'])) {
			var charge_pt = Point (0.0, 0.0, 0.0);
			var count = 0.0;
			var indices = [];
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'OD1') {
					charge_pt.x = charge_pt.x + atom.coordinates.x;
					charge_pt.y = charge_pt.y + atom.coordinates.y;
					charge_pt.z = charge_pt.z + atom.coordinates.z;
					indices.append (index);
					var count = count + 1.0;
				}
				if (atom.atom_name.strip () == 'OD2') {
					charge_pt.x = charge_pt.x + atom.coordinates.x;
					charge_pt.y = charge_pt.y + atom.coordinates.y;
					charge_pt.z = charge_pt.z + atom.coordinates.z;
					indices.append (index);
					var count = count + 1.0;
				}
				if (atom.atom_name.strip () == 'CG') {
					indices.append (index);
				}
			}
			if (count != 0.0) {
				charge_pt.x = charge_pt.x / count;
				charge_pt.y = charge_pt.y / count;
				charge_pt.z = charge_pt.z / count;
				if (charge_pt.x != 0.0 || charge_pt.y != 0.0 || charge_pt.z != 0.0) {
					var chrg = self.Charged (charge_pt, indices, false);
					self.charges.append (chrg);
				}
			}
		}
	});},
	Charged: __class__ ('Charged', [object], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self, coordinates, indices, positive) {
			self.coordinates = coordinates;
			self.indices = indices;
			self.positive = positive;
		});}
	}),
	get add_aromatic_marker () {return __get__ (this, function (self, indicies_of_ring) {
		var points_list = [];
		var total = len (indicies_of_ring);
		var x_sum = 0.0;
		var y_sum = 0.0;
		var z_sum = 0.0;
		for (var index of indicies_of_ring) {
			var atom = self.all_atoms [index];
			points_list.append (atom.coordinates);
			var x_sum = x_sum + atom.coordinates.x;
			var y_sum = y_sum + atom.coordinates.y;
			var z_sum = z_sum + atom.coordinates.z;
		}
		if (total == 0) {
			return ;
		}
		var center = Point (x_sum / total, y_sum / total, z_sum / total);
		var radius = 0.0;
		for (var index of indicies_of_ring) {
			var atom = self.all_atoms [index];
			var dist = center.dist_to (atom.coordinates);
			if (dist > radius) {
				var radius = dist;
			}
		}
		if (len (indicies_of_ring) < 3) {
			return ;
		}
		else if (len (indicies_of_ring) == 3) {
			var A = self.all_atoms [indicies_of_ring [0]].coordinates;
			var B = self.all_atoms [indicies_of_ring [1]].coordinates;
			var C = self.all_atoms [indicies_of_ring [2]].coordinates;
		}
		else if (len (indicies_of_ring) == 4) {
			var A = self.all_atoms [indicies_of_ring [0]].coordinates;
			var B = self.all_atoms [indicies_of_ring [1]].coordinates;
			var C = self.all_atoms [indicies_of_ring [3]].coordinates;
		}
		else {
			var A = self.all_atoms [indicies_of_ring [0]].coordinates;
			var B = self.all_atoms [indicies_of_ring [2]].coordinates;
			var C = self.all_atoms [indicies_of_ring [4]].coordinates;
		}
		var AB = vector_subtraction (B, A);
		var AC = vector_subtraction (C, A);
		var ABXAC = cross_product (AB, AC);
		var x1 = self.all_atoms [indicies_of_ring [0]].coordinates.x;
		var y1 = self.all_atoms [indicies_of_ring [0]].coordinates.y;
		var z1 = self.all_atoms [indicies_of_ring [0]].coordinates.z;
		var a = ABXAC.x;
		var b = ABXAC.y;
		var c = ABXAC.z;
		var d = (a * x1 + b * y1) + c * z1;
		var ar_ring = self.AromaticRing (center, indicies_of_ring, [a, b, c, d], radius);
		self.aromatic_rings.append (ar_ring);
	});},
	AromaticRing: __class__ ('AromaticRing', [object], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self, center, indices, plane_coeff, radius) {
			self.center = center;
			self.indices = indices;
			self.plane_coeff = plane_coeff;
			self.radius = radius;
		});}
	}),
	get assign_aromatic_rings () {return __get__ (this, function (self) {
		var all_rings = [];
		for (var atom_index of self.non_protein_atoms.py_keys ()) {
			all_rings.extend (self.all_rings_containing_atom (atom_index));
		}
		for (var ring_index_1 = 0; ring_index_1 < len (all_rings); ring_index_1++) {
			var ring1 = all_rings [ring_index_1];
			if (len (ring1) != 0) {
				for (var ring_index_2 = 0; ring_index_2 < len (all_rings); ring_index_2++) {
					if (ring_index_1 != ring_index_2) {
						var ring2 = all_rings [ring_index_2];
						if (len (ring2) != 0) {
							if (self.set1_is_subset_of_set2 (ring1, ring2) == true) {
								all_rings [ring_index_2] = [];
							}
						}
					}
				}
			}
		}
		while (__in__ ([], all_rings)) {
			all_rings.remove ([]);
		}
		for (var ring_index = 0; ring_index < len (all_rings); ring_index++) {
			var ring = all_rings [ring_index];
			var is_flat = true;
			for (var t = -(3); t < len (ring) - 3; t++) {
				while (t < 0) {
					var t = t + len (ring);
				}
				var pt1 = self.non_protein_atoms [ring [__mod__ (t, len (ring))]].coordinates;
				var pt2 = self.non_protein_atoms [ring [__mod__ (t + 1, len (ring))]].coordinates;
				var pt3 = self.non_protein_atoms [ring [__mod__ (t + 2, len (ring))]].coordinates;
				var pt4 = self.non_protein_atoms [ring [__mod__ (t + 3, len (ring))]].coordinates;
				var cur_atom = self.non_protein_atoms [ring [__mod__ (t + 3, len (ring))]];
				if (cur_atom.element == 'C' && cur_atom.number_of_neighbors () == 4) {
					var is_flat = false;
					break;
				}
				var angle = (dihedral (pt1, pt2, pt3, pt4) * 180) / math.pi;
				if (angle > -(165) && angle < -(15) || angle > 15 && angle < 165) {
					var is_flat = false;
					break;
				}
				for (var substituent_atom_index of cur_atom.indecies_of_atoms_connecting) {
					var pt_sub = self.non_protein_atoms [substituent_atom_index].coordinates;
					var angle = (dihedral (pt2, pt3, pt4, pt_sub) * 180) / math.pi;
					if (angle > -(165) && angle < -(15) || angle > 15 && angle < 165) {
						var is_flat = false;
						break;
					}
				}
			}
			if (is_flat == false) {
				all_rings [ring_index] = [];
			}
			if (len (ring) < 5) {
				all_rings [ring_index] = [];
			}
			if (len (ring) > 6) {
				all_rings [ring_index] = [];
			}
		}
		while (__in__ ([], all_rings)) {
			all_rings.remove ([]);
		}
		for (var ring of all_rings) {
			self.add_aromatic_marker (ring);
		}
		var curr_res = '';
		var first = true;
		var residue = [];
		var last_key = '';
		for (var atom_index of self.all_atoms.py_keys ()) {
			var atom = self.all_atoms [atom_index];
			var key = (((atom.residue + '_') + str (atom.resid)) + '_') + atom.chain;
			if (first == true) {
				var curr_res = key;
				var first = false;
			}
			if (key != curr_res) {
				self.assign_aromatic_rings_from_protein_process_residue (residue, last_key);
				var residue = [];
				var curr_res = key;
			}
			residue.append (atom_index);
			var last_key = key;
		}
		self.assign_aromatic_rings_from_protein_process_residue (residue, last_key);
	});},
	get assign_aromatic_rings_from_protein_process_residue () {return __get__ (this, function (self, residue, last_key) {
		var temp = last_key.strip ().py_split ('_');
		var resname = temp [0];
		var real_resname = resname.__getslice__ (-(3), null, 1);
		var resid = temp [1];
		var chain = temp [2];
		if (real_resname == 'PHE') {
			var indicies_of_ring = [];
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CG') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CD1') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CE1') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CZ') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CE2') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CD2') {
					indicies_of_ring.append (index);
				}
			}
			self.add_aromatic_marker (indicies_of_ring);
		}
		if (real_resname == 'TYR') {
			var indicies_of_ring = [];
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CG') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CD1') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CE1') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CZ') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CE2') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CD2') {
					indicies_of_ring.append (index);
				}
			}
			self.add_aromatic_marker (indicies_of_ring);
		}
		if (real_resname == 'HIS' || real_resname == 'HID' || real_resname == 'HIE' || real_resname == 'HIP') {
			var indicies_of_ring = [];
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CG') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'ND1') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CE1') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'NE2') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CD2') {
					indicies_of_ring.append (index);
				}
			}
			self.add_aromatic_marker (indicies_of_ring);
		}
		if (real_resname == 'TRP') {
			var indicies_of_ring = [];
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CG') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CD1') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'NE1') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CE2') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CD2') {
					indicies_of_ring.append (index);
				}
			}
			self.add_aromatic_marker (indicies_of_ring);
			var indicies_of_ring = [];
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CE2') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CD2') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CE3') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CZ3') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CH2') {
					indicies_of_ring.append (index);
				}
			}
			for (var index of residue) {
				var atom = self.all_atoms [index];
				if (atom.atom_name.strip () == 'CZ2') {
					indicies_of_ring.append (index);
				}
			}
			self.add_aromatic_marker (indicies_of_ring);
		}
	});},
	get set1_is_subset_of_set2 () {return __get__ (this, function (self, set1, set2) {
		var is_subset = true;
		for (var item of set1) {
			if (!__in__ (item, set2)) {
				var is_subset = false;
				break;
			}
		}
		return is_subset;
	});},
	get all_rings_containing_atom () {return __get__ (this, function (self, index) {
		var all_rings = [];
		var atom = self.all_atoms [index];
		for (var connected_atom of atom.indecies_of_atoms_connecting) {
			self.ring_recursive (connected_atom, [index], index, all_rings);
		}
		return all_rings;
	});},
	get ring_recursive () {return __get__ (this, function (self, index, already_crossed, orig_atom, all_rings) {
		if (len (already_crossed) > 6) {
			return ;
		}
		var atom = self.all_atoms [index];
		var temp = already_crossed.__getslice__ (0, null, 1);
		temp.append (index);
		for (var connected_atom of atom.indecies_of_atoms_connecting) {
			if (!(__in__ (connected_atom, already_crossed))) {
				self.ring_recursive (connected_atom, temp, orig_atom, all_rings);
			}
			if (connected_atom == orig_atom && orig_atom != already_crossed [len (already_crossed) - 1]) {
				all_rings.append (temp);
			}
		}
	});},
	get assign_secondary_structure () {return __get__ (this, function (self) {
		var resids = [];
		var last_key = '-99999_Z';
		for (var atom_index of self.all_atoms.py_keys ()) {
			var atom = self.all_atoms [atom_index];
			var key = (str (atom.resid) + '_') + atom.chain;
			if (key != last_key) {
				var last_key = key;
				resids.append (last_key);
			}
		}
		var structure = dict ({});
		for (var resid of resids) {
			structure [resid] = 'OTHER';
		}
		var atoms = [];
		for (var atom_index of self.all_atoms.py_keys ()) {
			var atom = self.all_atoms [atom_index];
			if (atom.side_chain_or_backbone () == 'BACKBONE') {
				if (len (atoms) < 8) {
					atoms.append (atom);
				}
				else {
					atoms.py_pop (0);
					atoms.append (atom);
					if (atoms [0].resid == atoms [1].resid && atoms [0].resid == atoms [2].resid && atoms [0].resid == atoms [3].resid && atoms [0].resid != atoms [4].resid && atoms [4].resid == atoms [5].resid && atoms [4].resid == atoms [6].resid && atoms [4].resid == atoms [7].resid && atoms [0].resid + 1 == atoms [7].resid && atoms [0].chain == atoms [7].chain) {
						var resid1 = atoms [0].resid;
						var resid2 = atoms [7].resid;
						for (var atom of atoms) {
							if (atom.resid == resid1 && atom.atom_name.strip () == 'N') {
								var first_N = atom;
							}
							if (atom.resid == resid1 && atom.atom_name.strip () == 'C') {
								var first_C = atom;
							}
							if (atom.resid == resid1 && atom.atom_name.strip () == 'CA') {
								var first_CA = atom;
							}
							if (atom.resid == resid2 && atom.atom_name.strip () == 'N') {
								var second_N = atom;
							}
							if (atom.resid == resid2 && atom.atom_name.strip () == 'C') {
								var second_C = atom;
							}
							if (atom.resid == resid2 && atom.atom_name.strip () == 'CA') {
								var second_CA = atom;
							}
						}
						var phi = (dihedral (first_C.coordinates, second_N.coordinates, second_CA.coordinates, second_C.coordinates) * 180.0) / math.pi;
						var psi = (dihedral (first_N.coordinates, first_CA.coordinates, first_C.coordinates, second_N.coordinates) * 180.0) / math.pi;
						if (phi > -(145) && phi < -(35) && psi > -(70) && psi < 50) {
							var key1 = (str (first_C.resid) + '_') + first_C.chain;
							var key2 = (str (second_C.resid) + '_') + second_C.chain;
							structure [key1] = 'ALPHA';
							structure [key2] = 'ALPHA';
						}
						if (phi >= -(180) && phi < -(40) && psi <= 180 && psi > 90 || phi >= -(180) && phi < -(70) && psi <= -(165)) {
							var key1 = (str (first_C.resid) + '_') + first_C.chain;
							var key2 = (str (second_C.resid) + '_') + second_C.chain;
							structure [key1] = 'BETA';
							structure [key2] = 'BETA';
						}
					}
				}
			}
		}
		for (var atom_index of self.all_atoms.py_keys ()) {
			var atom = self.all_atoms [atom_index];
			var key = (str (atom.resid) + '_') + atom.chain;
			atom.structure = structure [key];
		}
		var CA_list = [];
		for (var atom_index of self.all_atoms.py_keys ()) {
			var atom = self.all_atoms [atom_index];
			if (__in__ (atom.residue.strip (), self.protein_resnames) && atom.atom_name.strip () == 'CA') {
				CA_list.append (atom_index);
			}
		}
		var change = true;
		while (change == true) {
			var change = false;
			for (var CA_atom_index of CA_list) {
				var CA_atom = self.all_atoms [CA_atom_index];
				if (CA_atom.structure == 'ALPHA') {
					var another_alpha_is_close = false;
					for (var other_CA_atom_index of CA_list) {
						var other_CA_atom = self.all_atoms [other_CA_atom_index];
						if (other_CA_atom.structure == 'ALPHA') {
							if (other_CA_atom.resid - 3 == CA_atom.resid || other_CA_atom.resid + 3 == CA_atom.resid) {
								if (other_CA_atom.coordinates.dist_to (CA_atom.coordinates) < 6.0) {
									var another_alpha_is_close = true;
									break;
								}
							}
						}
					}
					if (another_alpha_is_close == false) {
						self.set_structure_of_residue (CA_atom.chain, CA_atom.resid, 'OTHER');
						var change = true;
					}
				}
			}
			for (var index_in_list = 0; index_in_list < len (CA_list) - 5; index_in_list++) {
				var index_in_pdb1 = CA_list [index_in_list];
				var index_in_pdb2 = CA_list [index_in_list + 1];
				var index_in_pdb3 = CA_list [index_in_list + 2];
				var index_in_pdb4 = CA_list [index_in_list + 3];
				var index_in_pdb5 = CA_list [index_in_list + 4];
				var index_in_pdb6 = CA_list [index_in_list + 5];
				var atom1 = self.all_atoms [index_in_pdb1];
				var atom2 = self.all_atoms [index_in_pdb2];
				var atom3 = self.all_atoms [index_in_pdb3];
				var atom4 = self.all_atoms [index_in_pdb4];
				var atom5 = self.all_atoms [index_in_pdb5];
				var atom6 = self.all_atoms [index_in_pdb6];
				if (atom1.resid + 1 == atom2.resid && atom2.resid + 1 == atom3.resid && atom3.resid + 1 == atom4.resid && atom4.resid + 1 == atom5.resid && atom5.resid + 1 == atom6.resid) {
					if (atom1.structure != 'ALPHA' && atom2.structure == 'ALPHA' && atom3.structure != 'ALPHA') {
						self.set_structure_of_residue (atom2.chain, atom2.resid, 'OTHER');
						var change = true;
					}
					if (atom2.structure != 'ALPHA' && atom3.structure == 'ALPHA' && atom4.structure != 'ALPHA') {
						self.set_structure_of_residue (atom3.chain, atom3.resid, 'OTHER');
						var change = true;
					}
					if (atom3.structure != 'ALPHA' && atom4.structure == 'ALPHA' && atom5.structure != 'ALPHA') {
						self.set_structure_of_residue (atom4.chain, atom4.resid, 'OTHER');
						var change = true;
					}
					if (atom4.structure != 'ALPHA' && atom5.structure == 'ALPHA' && atom6.structure != 'ALPHA') {
						self.set_structure_of_residue (atom5.chain, atom5.resid, 'OTHER');
						var change = true;
					}
					if (atom1.structure != 'ALPHA' && atom2.structure == 'ALPHA' && atom3.structure == 'ALPHA' && atom4.structure != 'ALPHA') {
						self.set_structure_of_residue (atom2.chain, atom2.resid, 'OTHER');
						self.set_structure_of_residue (atom3.chain, atom3.resid, 'OTHER');
						var change = true;
					}
					if (atom2.structure != 'ALPHA' && atom3.structure == 'ALPHA' && atom4.structure == 'ALPHA' && atom5.structure != 'ALPHA') {
						self.set_structure_of_residue (atom3.chain, atom3.resid, 'OTHER');
						self.set_structure_of_residue (atom4.chain, atom4.resid, 'OTHER');
						var change = true;
					}
					if (atom3.structure != 'ALPHA' && atom4.structure == 'ALPHA' && atom5.structure == 'ALPHA' && atom6.structure != 'ALPHA') {
						self.set_structure_of_residue (atom4.chain, atom4.resid, 'OTHER');
						self.set_structure_of_residue (atom5.chain, atom5.resid, 'OTHER');
						var change = true;
					}
					if (atom1.structure != 'ALPHA' && atom2.structure == 'ALPHA' && atom3.structure == 'ALPHA' && atom4.structure == 'ALPHA' && atom5.structure != 'ALPHA') {
						self.set_structure_of_residue (atom2.chain, atom2.resid, 'OTHER');
						self.set_structure_of_residue (atom3.chain, atom3.resid, 'OTHER');
						self.set_structure_of_residue (atom4.chain, atom4.resid, 'OTHER');
						var change = true;
					}
					if (atom2.structure != 'ALPHA' && atom3.structure == 'ALPHA' && atom4.structure == 'ALPHA' && atom5.structure == 'ALPHA' && atom6.structure != 'ALPHA') {
						self.set_structure_of_residue (atom3.chain, atom3.resid, 'OTHER');
						self.set_structure_of_residue (atom4.chain, atom4.resid, 'OTHER');
						self.set_structure_of_residue (atom5.chain, atom5.resid, 'OTHER');
						var change = true;
					}
					if (atom1.structure != 'ALPHA' && atom2.structure == 'ALPHA' && atom3.structure == 'ALPHA' && atom4.structure == 'ALPHA' && atom5.structure == 'ALPHA' && atom6.structure != 'ALPHA') {
						self.set_structure_of_residue (atom2.chain, atom2.resid, 'OTHER');
						self.set_structure_of_residue (atom3.chain, atom3.resid, 'OTHER');
						self.set_structure_of_residue (atom4.chain, atom4.resid, 'OTHER');
						self.set_structure_of_residue (atom5.chain, atom5.resid, 'OTHER');
						var change = true;
					}
				}
			}
			for (var CA_atom_index of CA_list) {
				var CA_atom = self.all_atoms [CA_atom_index];
				if (CA_atom.structure == 'BETA') {
					var another_beta_is_close = false;
					for (var other_CA_atom_index of CA_list) {
						if (other_CA_atom_index != CA_atom_index) {
							var other_CA_atom = self.all_atoms [other_CA_atom_index];
							if (other_CA_atom.structure == 'BETA') {
								if (other_CA_atom.chain == CA_atom.chain) {
									if (fabs (other_CA_atom.resid - CA_atom.resid) > 2) {
										if (CA_atom.coordinates.dist_to (other_CA_atom.coordinates) < 6.0) {
											var another_beta_is_close = true;
											break;
										}
									}
								}
							}
						}
					}
					if (another_beta_is_close == false) {
						self.set_structure_of_residue (CA_atom.chain, CA_atom.resid, 'OTHER');
						var change = true;
					}
				}
			}
			for (var index_in_list = 0; index_in_list < len (CA_list) - 3; index_in_list++) {
				var index_in_pdb1 = CA_list [index_in_list];
				var index_in_pdb2 = CA_list [index_in_list + 1];
				var index_in_pdb3 = CA_list [index_in_list + 2];
				var index_in_pdb4 = CA_list [index_in_list + 3];
				var atom1 = self.all_atoms [index_in_pdb1];
				var atom2 = self.all_atoms [index_in_pdb2];
				var atom3 = self.all_atoms [index_in_pdb3];
				var atom4 = self.all_atoms [index_in_pdb4];
				if (atom1.resid + 1 == atom2.resid && atom2.resid + 1 == atom3.resid && atom3.resid + 1 == atom4.resid) {
					if (atom1.structure != 'BETA' && atom2.structure == 'BETA' && atom3.structure != 'BETA') {
						self.set_structure_of_residue (atom2.chain, atom2.resid, 'OTHER');
						var change = true;
					}
					if (atom2.structure != 'BETA' && atom3.structure == 'BETA' && atom4.structure != 'BETA') {
						self.set_structure_of_residue (atom3.chain, atom3.resid, 'OTHER');
						var change = true;
					}
					if (atom1.structure != 'BETA' && atom2.structure == 'BETA' && atom3.structure == 'BETA' && atom4.structure != 'BETA') {
						self.set_structure_of_residue (atom2.chain, atom2.resid, 'OTHER');
						self.set_structure_of_residue (atom3.chain, atom3.resid, 'OTHER');
						var change = true;
					}
				}
			}
		}
	});},
	get set_structure_of_residue () {return __get__ (this, function (self, chain, resid, structure) {
		for (var atom_index of self.all_atoms.py_keys ()) {
			var atom = self.all_atoms [atom_index];
			if (atom.chain == chain && atom.resid == resid) {
				atom.structure = structure;
			}
		}
	});}
});

//# sourceMappingURL=binana._structure.mol.map