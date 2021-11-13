// This file is part of BINANA, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

// Transcrypt'ed from Python, 2021-11-12 01:16:45
var binana = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Mol} from './binana._structure.mol.js';
import {hashtable_entry_add_one, list_alphebetize_and_combine} from './binana._utils.utils.js';
import {_get_ligand_receptor_dists} from './binana.load_ligand_receptor.js';
import * as __module_binana__ from './binana.js';
__nest__ (binana, '', __module_binana__);
import {CLOSE_CONTACTS_DIST2_CUTOFF} from './binana.interactions.default_params.js';
import {_set_default} from './binana._utils.shim.js';
var __name__ = 'binana.interactions._close';
export var get_close = function (ligand, receptor, cutoff) {
	if (typeof cutoff == 'undefined' || (cutoff != null && cutoff.hasOwnProperty ("__kwargtrans__"))) {;
		var cutoff = null;
	};
	var cutoff = _set_default (cutoff, CLOSE_CONTACTS_DIST2_CUTOFF);
	var ligand_receptor_atom_type_pairs_close = dict ({});
	var pdb_close_contacts = Mol ();
	var close_contacts_labels = [];
	var ligand_receptor_dists = _get_ligand_receptor_dists (ligand, receptor, cutoff);
	for (var [i, [ligand_atom, receptor_atom, dist]] of enumerate (ligand_receptor_dists)) {
		var list_ligand_atom = [ligand_atom.atom_type, receptor_atom.atom_type];
		hashtable_entry_add_one (ligand_receptor_atom_type_pairs_close, list_alphebetize_and_combine (list_ligand_atom));
		pdb_close_contacts.add_new_atom (ligand_atom.copy_of ());
		pdb_close_contacts.add_new_atom (receptor_atom.copy_of ());
		close_contacts_labels.append (tuple ([ligand_atom.string_id (), receptor_atom.string_id ()]));
	}
	return dict ({'counts': ligand_receptor_atom_type_pairs_close, 'mol': pdb_close_contacts, 'labels': close_contacts_labels});
};

//# sourceMappingURL=binana.interactions._close.map