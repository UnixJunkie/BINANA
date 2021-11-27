// This file is part of BINANA, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

// Transcrypt'ed from Python, 2021-11-26 23:51:09
var binana = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as _get_params from './binana._cli_params._get_params.js';
import * as _start from './binana._start.js';
import * as output from './binana.output.js';
import * as interactions from './binana.interactions.js';
import * as load_ligand_receptor from './binana.load_ligand_receptor.js';
import * as fs from './binana.fs.js';
import * as __module_binana__ from './binana.js';
__nest__ (binana, '', __module_binana__);
export {_get_params, interactions, output, load_ligand_receptor, _start, fs};
var __name__ = '__main__';
export var _sys = binana.sys;
export var run = function (args) {
	if (typeof args == 'undefined' || (args != null && args.hasOwnProperty ("__kwargtrans__"))) {;
		var args = null;
	};
	console.warn ("You probably don't want to call this using JavaScript (Python-only function).");
	if (args === null) {
		var args = _sys.argv.__getslice__ (0, null, 1);
	}
	else {
		for (var [i, a] of enumerate (args)) {
			args [i] = str (a);
		}
	}
	var cmd_params = _get_params.CommandLineParameters (args);
	if (cmd_params.params ['test']) {
		return ;
	}
	else if (cmd_params.okay_to_proceed () == false) {
		print ('Error: You need to specify the ligand and receptor PDBQT files to analyze using\nthe -receptor and -ligand tags from the command line.\n');
		_sys.exit (0);
		return ;
	}
	if (cmd_params.error != '') {
		print ('Warning: The following command-line parameters were not recognized:');
		print (('   ' + cmd_params.error) + '\n');
	}
	_start._get_all_interactions (cmd_params);
};

//# sourceMappingURL=binana.map