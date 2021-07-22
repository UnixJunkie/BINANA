'use strict';var binana={};import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,__ior__,
__ipow__,__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,
filter,float,getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";import*as __module_binana__ from"./binana.js";__nest__(binana,"",__module_binana__);var __name__="binana.output.log";export var preface="REMARK ";export var openFile=binana.shim.OpenFile;export var center=function(string,length){while(len(string)<
length){var string=" "+string;if(len(string)<length)var string=string+" "}return string};export var get_parameters=function(parameters,output){var output=output+preface+"Command-line parameters used:"+"\n";var output=output+preface+"                 Parameter              |            Value           "+"\n";var output=output+preface+"   -------------------------------------|----------------------------"+"\n";for(var key of list(parameters.params.py_keys())){var value=str(parameters.params[key]);var output=
output+preface+"   "+center(key,37)+"| "+center(value,27)+"\n"}return output};export var get_close_contacts_dist1_cutoff=function(parameters,ligand_receptor_atom_type_pairs_closest,closest_contacts_labels,output){var output=output+preface+""+"\n";var output=output+preface+"Atom-type pair counts within "+str(parameters.params["close_contacts_dist1_cutoff"])+" angstroms:"+"\n";var output=output+preface+"    Atom Type | Atom Type | Count"+"\n";var output=output+preface+"   -----------|-----------|-------"+
"\n";for(var key of ligand_receptor_atom_type_pairs_closest.py_keys()){var value=ligand_receptor_atom_type_pairs_closest[key];var key=key.py_split("_");var output=output+preface+"   "+center(key[0],11)+"|"+center(key[1],11)+"|"+center(str(value),7)+"\n"}var output=output+preface+"\n"+preface+"Raw data:\n";for(var atom_pairs of closest_contacts_labels)var output=output+preface+"     "+atom_pairs[0]+" - "+atom_pairs[1]+"\n";return output};export var get_close_contacts_dist2_cutoff=function(parameters,
ligand_receptor_atom_type_pairs_close,close_contacts_labels,output){var output=output+preface+"\n\n";var output=output+preface+"Atom-type pair counts within "+str(parameters.params["close_contacts_dist2_cutoff"])+" angstroms:"+"\n";var output=output+preface+"    Atom Type | Atom Type | Count"+"\n";var output=output+preface+"   -----------|-----------|-------"+"\n";for(var key of ligand_receptor_atom_type_pairs_close.py_keys()){var value=ligand_receptor_atom_type_pairs_close[key];var key=key.py_split("_");
var output=output+preface+"   "+center(key[0],11)+"|"+center(key[1],11)+"|"+center(str(value),7)+"\n"}var output=output+preface+"\n"+preface+"Raw data:\n";for(var atom_pairs of close_contacts_labels)var output=output+preface+"     "+atom_pairs[0]+" - "+atom_pairs[1]+"\n";return output};export var get_ligand_atom_types=function(ligand_atom_types,ligand_receptor_atom_type_pairs_electrostatic,output){var output=output+preface+""+"\n";var output=output+preface+"Ligand atom types:"+"\n";var output=output+
preface+"    Atom Type "+"\n";var output=output+preface+"   -----------"+"\n";for(var key of ligand_atom_types.py_keys())var output=output+preface+"   "+center(key,11)+"\n";var output=output+preface+""+"\n";var output=output+preface+"Summed electrostatic energy by atom-type pair, in J/mol:"+"\n";var output=output+preface+"    Atom Type | Atom Type | Energy (J/mol)"+"\n";var output=output+preface+"   -----------|-----------|----------------"+"\n";for(var key of ligand_receptor_atom_type_pairs_electrostatic.py_keys()){var value=
ligand_receptor_atom_type_pairs_electrostatic[key];var key=key.py_split("_");var output=output+preface+"   "+center(key[0],11)+"|"+center(key[1],11)+"|"+center(str(value),16)+"\n"}return output};export var get_rotateable_bonds_count=function(ligand,output){var output=output+preface+""+"\n";var output=output+preface+"Number of rotatable bonds in the ligand: "+str(ligand.rotateable_bonds_count)+"\n";return output};export var get_active_site_flexibility=function(active_site_flexibility,output){var output=
output+preface+""+"\n";var output=output+preface+"Active-site flexibility:"+"\n";var output=output+preface+"    Sidechain/Backbone | Secondary Structure | Count "+"\n";var output=output+preface+"   --------------------|---------------------|-------"+"\n";for(var key of active_site_flexibility.py_keys()){var value=active_site_flexibility[key];var key=key.py_split("_");var output=output+preface+"   "+center(key[0],20)+"|"+center(key[1],21)+"|"+center(str(value),7)+"\n"}return output};export var get_hbonds=
function(hbonds,hbonds_labels,output){var output=output+preface+""+"\n";var output=output+preface+"Hydrogen bonds:"+"\n";var output=output+preface+"    Location of Donor | Sidechain/Backbone | Secondary Structure | Count "+"\n";var output=output+preface+"   -------------------|--------------------|---------------------|-------"+"\n";for(var key of hbonds.py_keys()){var value=hbonds[key];var key=key.py_split("_");var output=output+preface+"   "+center(key[1],19)+"|"+center(key[2],20)+"|"+center(key[3],
21)+"|"+center(str(value),7)+"\n"}var output=output+preface+"\n"+preface+"Raw data:\n";for(var atom_pairs of hbonds_labels)var output=output+preface+"     "+atom_pairs[0]+" - "+atom_pairs[1]+" - "+atom_pairs[2]+"\n";return output};export var get_hydrophobics=function(hydrophobics,hydrophobic_labels,output){var output=output+preface+""+"\n";var output=output+preface+"Hydrophobic contacts (C-C):"+"\n";var output=output+preface+"    Sidechain/Backbone | Secondary Structure | Count "+"\n";var output=
output+preface+"   --------------------|---------------------|-------"+"\n";for(var key of hydrophobics.py_keys()){var value=hydrophobics[key];var key=key.py_split("_");var output=output+preface+"   "+center(key[0],20)+"|"+center(key[1],21)+"|"+center(str(value),7)+"\n"}var output=output+preface+"\n"+preface+"Raw data:\n";for(var atom_pairs of hydrophobic_labels)var output=output+preface+"     "+atom_pairs[0]+" - "+atom_pairs[1]+"\n";return output};export var get_pi_stacking=function(PI_interactions,
pi_stacking_labels,output){var stacking=[];for(var key of PI_interactions.py_keys()){var value=PI_interactions[key];var together=key+"_"+str(value);if(__in__("STACKING",together))stacking.append(together)}var output=output+preface+""+"\n";var output=output+preface+"pi-pi stacking interactions:"+"\n";var output=output+preface+"    Secondary Structure | Count "+"\n";var output=output+preface+"   ---------------------|-------"+"\n";for(var item of stacking){var item=item.py_split("_");var output=output+
preface+"   "+center(item[1],21)+"|"+center(item[2],7)+"\n"}var output=output+preface+"\n"+preface+"Raw data:\n";for(var atom_pairs of pi_stacking_labels)var output=output+preface+"     "+atom_pairs[0]+" - "+atom_pairs[1]+"\n";return output};export var get_T_stacking=function(PI_interactions,T_stacking_labels,output){var t_shaped=[];for(var key of PI_interactions.py_keys()){var value=PI_interactions[key];var together=key+"_"+str(value);if(__in__("SHAPED",together))t_shaped.append(together)}var output=
output+preface+""+"\n";var output=output+preface+"T-stacking (face-to-edge) interactions:"+"\n";var output=output+preface+"    Secondary Structure | Count "+"\n";var output=output+preface+"   ---------------------|-------"+"\n";for(var item of t_shaped){var item=item.py_split("_");var output=output+preface+"   "+center(item[1],21)+"|"+center(item[2],7)+"\n"}var output=output+preface+"\n"+preface+"Raw data:\n";for(var atom_pairs of T_stacking_labels)var output=output+preface+"     "+atom_pairs[0]+
" - "+atom_pairs[1]+"\n";return output};export var get_pi_cation=function(PI_interactions,pi_cat_labels,output){var pi_cation=[];for(var key of PI_interactions.py_keys()){var value=PI_interactions[key];var together=key+"_"+str(value);if(__in__("CATION",together))pi_cation.append(together)}var output=output+preface+""+"\n";var output=output+preface+"Cation-pi interactions:"+"\n";var output=output+preface+"    Which residue is charged? | Secondary Structure | Count "+"\n";var output=output+preface+
"   ---------------------------|---------------------|-------"+"\n";for(var item of pi_cation){var item=item.py_split("_");var item2=item[1].py_split("-");var output=output+preface+"   "+center(item2[0],27)+"|"+center(item[2],21)+"|"+center(item[3],7)+"\n"}var output=output+preface+"\n"+preface+"Raw data:\n";for(var atom_pairs of pi_cat_labels)var output=output+preface+"     "+atom_pairs[0]+" - "+atom_pairs[1]+"\n";return output};export var get_salt_bridges=function(salt_bridges,salt_bridge_labels,
output){var output=output+preface+""+"\n";var output=output+preface+"Salt Bridges:"+"\n";var output=output+preface+"    Secondary Structure | Count "+"\n";var output=output+preface+"   ---------------------|-------"+"\n";for(var key of salt_bridges.py_keys()){var value=salt_bridges[key];var key=key.py_split("_");var output=output+preface+"   "+center(key[1],21)+"|"+center(str(value),7)+"\n"}var output=output+preface+"\n"+preface+"Raw data:\n";for(var atom_pairs of salt_bridge_labels)var output=output+
preface+"     "+atom_pairs[0]+" - "+atom_pairs[1]+"\n";return output};export var make_log=function(parameters,ligand,ligand_atom_types,ligand_receptor_atom_type_pairs_closest,closest_contacts_labels,ligand_receptor_atom_type_pairs_close,close_contacts_labels,ligand_receptor_atom_type_pairs_electrostatic,active_site_flexibility,hbonds,hbonds_labels,hydrophobics,hydrophobic_labels,pi_interactions,pi_stacking_labels,t_stacking_labels,pi_cat_labels,salt_bridges,salt_bridge_labels){var output="";var output=
get_parameters(parameters,output);var output=get_close_contacts_dist1_cutoff(parameters,ligand_receptor_atom_type_pairs_closest,closest_contacts_labels,output);var output=get_close_contacts_dist2_cutoff(parameters,ligand_receptor_atom_type_pairs_close,close_contacts_labels,output);var output=get_ligand_atom_types(ligand_atom_types,ligand_receptor_atom_type_pairs_electrostatic,output);var output=get_rotateable_bonds_count(ligand,output);var output=get_active_site_flexibility(active_site_flexibility,
output);var output=get_hbonds(hbonds,hbonds_labels,output);var output=get_hydrophobics(hydrophobics,hydrophobic_labels,output);var output=get_pi_stacking(pi_interactions,pi_stacking_labels,output);var output=get_T_stacking(pi_interactions,t_stacking_labels,output);var output=get_pi_cation(pi_interactions,pi_cat_labels,output);var output=get_salt_bridges(salt_bridges,salt_bridge_labels,output);if(parameters.params["output_dir"]!=""){var f=openFile(parameters.params["output_dir"]+"log.txt","w");f.write(output.py_replace("REMARK ",
""));f.close()}if(parameters.params["output_file"]==""&&parameters.params["output_dir"]=="")print(output.py_replace("REMARK ",""));return output};

//# sourceMappingURL=binana.output.log.map