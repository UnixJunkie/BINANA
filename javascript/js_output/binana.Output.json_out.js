'use strict';var binana={};var re={};import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,
__ior__,__ipow__,__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,
filter,float,getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";import{dirname}from"./binana.shim.js";import{basename}from"./binana.shim.js";import*as json from"./binana.shim.js";import*as __module_binana__ from"./binana.js";__nest__(binana,"",__module_binana__);import*as __module_re__ from"./re.js";
__nest__(re,"",__module_re__);var __name__="binana.output.json_out";export var sep=binana.shim.sep;export var openFile=binana.shim.OpenFile;export var atom_details_to_dict=function(details){return dict({"chain":details[0].strip(),"resID":int(details[2]),"resName":details[1],"atomName":details[3],"atomIndex":int(details[4])})};export var get_close_atom_list=function(interaction_labels){var i=0;var interaction_list=[];for(var atom_pairs of interaction_labels){interaction_list.append(dict({}));var ligand_atom_details=
re.py_split("[():]",atom_pairs[0]);var receptor_atom_details=re.py_split("[():]",atom_pairs[1]);for(var detail of ligand_atom_details)if(detail=="")ligand_atom_details.remove(detail);for(var detail of receptor_atom_details)if(detail=="")receptor_atom_details.remove(detail);interaction_list[i]=dict({"ligandAtoms":[atom_details_to_dict(ligand_atom_details)],"receptorAtoms":[atom_details_to_dict(receptor_atom_details)]});i++}return interaction_list};export var collect_hydrogen_bonds=function(hydrogen_bonds,
json_output){var i=0;for(var atom_pairs of hydrogen_bonds){json_output["hydrogenBonds"].append(dict({}));var ligand_and_receptor=[re.py_split("[():]",atom_pairs[0]),re.py_split("[():]",atom_pairs[1]),re.py_split("[():]",atom_pairs[2])];var ligand_atom_details=[ligand_and_receptor[0]];var receptor_atom_details=[ligand_and_receptor[2]];if(atom_pairs[3]=="RECEPTOR")receptor_atom_details.append(ligand_and_receptor[1]);else ligand_atom_details.append(ligand_and_receptor[1]);for(var atom of ligand_atom_details)for(var detail of atom)if(detail==
"")atom.remove(detail);for(var atom of receptor_atom_details)for(var detail of atom)if(detail=="")atom.remove(detail);json_output["hydrogenBonds"][i]=dict({"ligandAtoms":[],"receptorAtoms":[]});for(var detail of ligand_atom_details)json_output["hydrogenBonds"][i]["ligandAtoms"].append(atom_details_to_dict(detail));for(var detail of receptor_atom_details)json_output["hydrogenBonds"][i]["receptorAtoms"].append(atom_details_to_dict(detail));i++}};export var collect_pi_pi=function(pi_stacking_interactions,
json_output){var i=0;for(var atom_pair of pi_stacking_interactions){json_output["piPiStackingInteractions"].append(dict({}));var individual_ligand_atoms=atom_pair[0].py_split("/");var individual_receptor_atoms=atom_pair[1].py_split("/");var individual_ligand_atoms_details=[];for(var atom of individual_ligand_atoms)if(atom!="")individual_ligand_atoms_details.append(re.py_split("[\\[\\]():]",atom));var individual_receptor_atoms_details=[];for(var atom of individual_receptor_atoms)if(atom!="")individual_receptor_atoms_details.append(re.py_split("[\\[\\]():]",
atom));for(var detail_list of individual_ligand_atoms_details)for(var detail of detail_list)if(detail=="")detail_list.remove(detail);for(var detail_list of individual_receptor_atoms_details)for(var detail of detail_list)if(detail=="")detail_list.remove(detail);json_output["piPiStackingInteractions"][i]=dict({"ligandAtoms":[],"receptorAtoms":[]});for(var detail of individual_ligand_atoms_details)json_output["piPiStackingInteractions"][i]["ligandAtoms"].append(atom_details_to_dict(detail));for(var detail of individual_receptor_atoms_details)json_output["piPiStackingInteractions"][i]["receptorAtoms"].append(atom_details_to_dict(detail));
i++}};export var collect_t_stacking=function(t_stacking_interactions,json_output){var i=0;for(var atom_pair of t_stacking_interactions){json_output["tStackingInteractions"].append(dict({}));var individual_ligand_atoms=atom_pair[0].py_split("/");var individual_receptor_atoms=atom_pair[1].py_split("/");var individual_ligand_atoms_details=[];for(var atom of individual_ligand_atoms)if(atom!="")individual_ligand_atoms_details.append(re.py_split("[\\[\\]():]",atom));var individual_receptor_atoms_details=
[];for(var atom of individual_receptor_atoms)if(atom!="")individual_receptor_atoms_details.append(re.py_split("[\\[\\]():]",atom));for(var detail_list of individual_ligand_atoms_details)for(var detail of detail_list)if(detail=="")detail_list.remove(detail);for(var detail_list of individual_receptor_atoms_details)for(var detail of detail_list)if(detail=="")detail_list.remove(detail);json_output["tStackingInteractions"][i]=dict({"ligandAtoms":[],"receptorAtoms":[]});for(var detail of individual_ligand_atoms_details)json_output["tStackingInteractions"][i]["ligandAtoms"].append(atom_details_to_dict(detail));
for(var detail of individual_receptor_atoms_details)json_output["tStackingInteractions"][i]["receptorAtoms"].append(atom_details_to_dict(detail));i++}};export var collect_cat_pi=function(cat_pi_interactions,json_output){var i=0;for(var atom_pair of cat_pi_interactions){json_output["cationPiInteractions"].append(dict({}));var individual_ligand_atoms=atom_pair[0].py_split("/");var individual_receptor_atoms=atom_pair[1].py_split("/");var individual_ligand_atoms_details=[];for(var atom of individual_ligand_atoms)if(atom!=
"")individual_ligand_atoms_details.append(re.py_split("[\\[\\]():]",atom));var individual_receptor_atoms_details=[];for(var atom of individual_receptor_atoms)if(atom!="")individual_receptor_atoms_details.append(re.py_split("[\\[\\]():]",atom));for(var detail_list of individual_ligand_atoms_details)for(var detail of detail_list)if(detail=="")detail_list.remove(detail);for(var detail_list of individual_receptor_atoms_details)for(var detail of detail_list)if(detail=="")detail_list.remove(detail);json_output["cationPiInteractions"][i]=
dict({"ligandAtoms":[],"receptorAtoms":[]});for(var detail of individual_ligand_atoms_details)json_output["cationPiInteractions"][i]["ligandAtoms"].append(atom_details_to_dict(detail));for(var detail of individual_receptor_atoms_details)json_output["cationPiInteractions"][i]["receptorAtoms"].append(atom_details_to_dict(detail));i++}};export var collect_salt_bridge=function(salt_bridge_interactions,json_output){var i=0;for(var atom_pair of salt_bridge_interactions){json_output["saltBridges"].append(dict({}));
var individual_ligand_atoms=atom_pair[0].py_split("/");var individual_receptor_atoms=atom_pair[1].py_split("/");var individual_ligand_atoms_details=[];for(var atom of individual_ligand_atoms)if(atom!="")individual_ligand_atoms_details.append(re.py_split("[\\[\\]():]",atom));var individual_receptor_atoms_details=[];for(var atom of individual_receptor_atoms)if(atom!="")individual_receptor_atoms_details.append(re.py_split("[\\[\\]():]",atom));for(var detail_list of individual_ligand_atoms_details)for(var detail of detail_list)if(detail==
"")detail_list.remove(detail);for(var detail_list of individual_receptor_atoms_details)for(var detail of detail_list)if(detail=="")detail_list.remove(detail);json_output["saltBridges"][i]=dict({"ligandAtoms":[],"receptorAtoms":[]});for(var detail of individual_ligand_atoms_details)json_output["saltBridges"][i]["ligandAtoms"].append(atom_details_to_dict(detail));for(var detail of individual_receptor_atoms_details)json_output["saltBridges"][i]["receptorAtoms"].append(atom_details_to_dict(detail));i++}};
export var json_file=function(close_contact_interactions,contact_interactions,hydrogen_bonds,hydrophobic_interactions,pi_stacking_interactions,t_stacking_interactions,cat_pi_interactions,salt_bridge_interactions,ligand_filename,receptor_filename){var json_output=dict({});json_output["contactsWithin2.5A"]=[];json_output["contactsWithin4.0A"]=[];json_output["hydrogenBonds"]=[];json_output["hydrophobicContacts"]=[];json_output["piPiStackingInteractions"]=[];json_output["tStackingInteractions"]=[];json_output["cationPiInteractions"]=
[];json_output["saltBridges"]=[];json_output["contactsWithin2.5A"]=get_close_atom_list(close_contact_interactions);json_output["contactsWithin4.0A"]=get_close_atom_list(contact_interactions);json_output["hydrophobicContacts"]=get_close_atom_list(hydrophobic_interactions);collect_hydrogen_bonds(hydrogen_bonds,json_output);collect_pi_pi(pi_stacking_interactions,json_output);collect_t_stacking(t_stacking_interactions,json_output);collect_cat_pi(cat_pi_interactions,json_output);collect_salt_bridge(salt_bridge_interactions,
json_output);var dname=dirname(ligand_filename)!=""?dirname(ligand_filename):".";var bname_ligand_filename=basename(ligand_filename);var bname_receptor_filename=basename(receptor_filename);var bname_ligand_filename_no_ext=".".join(bname_ligand_filename.py_split(".").__getslice__(0,-1,1));var bname_receptor_filename_no_ext=".".join(bname_receptor_filename.py_split(".").__getslice__(0,-1,1));var outputFileName=dname+sep+(bname_ligand_filename_no_ext+"_"+bname_receptor_filename_no_ext+"_output.json");
var jfile=openFile(outputFileName,"w");json.dump(json_output,jfile);jfile.close();return json_output};

//# sourceMappingURL=binana.output.json_out.map