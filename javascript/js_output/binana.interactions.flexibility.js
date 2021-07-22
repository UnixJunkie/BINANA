'use strict';var binana={};import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,__ior__,
__ipow__,__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,
filter,float,getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";import{hashtable_entry_add_one,list_alphebetize_and_combine}from"./binana.utils.js";import{get_ligand_receptor_dists}from"./binana.load.js";import*as __module_binana__ from"./binana.js";__nest__(binana,"",__module_binana__);import{ACTIVE_SITE_FLEXIBILITY_DIST_CUTOFF}from"./binana.cli_params.defaults.js";
var __name__="binana.interactions.flexibility";export var calculate_flexibility=function(ligand,receptor,cutoff){if(typeof cutoff=="undefined"||cutoff!=null&&cutoff.hasOwnProperty("__kwargtrans__"))var cutoff=ACTIVE_SITE_FLEXIBILITY_DIST_CUTOFF;var active_site_flexibility=dict({});var pdb_contacts_alpha_helix=binana.Mol();var pdb_contacts_beta_sheet=binana.Mol();var pdb_contacts_other_2nd_structure=binana.Mol();var pdb_back_bone=binana.Mol();var pdb_side_chain=binana.Mol();var ligand_receptor_dists=
get_ligand_receptor_dists(ligand,receptor);for(var [ligand_atom,receptor_atom,dist]of ligand_receptor_dists)if(dist<cutoff){var flexibility_key=receptor_atom.side_chain_or_backbone()+"_"+receptor_atom.structure;if(receptor_atom.structure=="ALPHA")pdb_contacts_alpha_helix.add_new_atom(receptor_atom.copy_of());else if(receptor_atom.structure=="BETA")pdb_contacts_beta_sheet.add_new_atom(receptor_atom.copy_of());else if(receptor_atom.structure=="OTHER")pdb_contacts_other_2nd_structure.add_new_atom(receptor_atom.copy_of());
if(receptor_atom.side_chain_or_backbone()=="BACKBONE")pdb_back_bone.add_new_atom(receptor_atom.copy_of());else if(receptor_atom.side_chain_or_backbone()=="SIDECHAIN")pdb_side_chain.add_new_atom(receptor_atom.copy_of());hashtable_entry_add_one(active_site_flexibility,flexibility_key)}return dict({"counts":active_site_flexibility,"mols":dict({"alpha_helix":pdb_contacts_alpha_helix,"beta_sheet":pdb_contacts_beta_sheet,"other_2nd_structure":pdb_contacts_other_2nd_structure,"back_bone":pdb_back_bone,"side_chain":pdb_side_chain})})};

//# sourceMappingURL=binana.interactions.flexibility.map