'use strict';var __future__={};var binana={};var math={};import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,
__imul__,__in__,__init__,__ior__,__ipow__,__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,
dict,dir,divmod,enumerate,filter,float,getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";import{fabs}from"./binana.shim.js";import*as __module_binana__ from"./binana.js";__nest__(binana,"",__module_binana__);import*as __module_math__ from"./math.js";__nest__(math,"",__module_math__);import*as __module___future____ from"./__future__.js";
__nest__(__future__,"",__module___future____);var __name__="binana.start";export var os=binana.os;export var textwrap=binana.shim;export var sys=binana.sys;export var VERSION="1.3";export var Binana=__class__("Binana",[object],{__module__:__name__,get list_alphebetize_and_combine(){return __get__(this,function(self,list_obj){list_obj.py_sort();return"_".join(list_obj)})},get hashtable_entry_add_one(){return __get__(this,function(self,hashtable,key,toadd){if(typeof toadd=="undefined"||toadd!=null&&
toadd.hasOwnProperty("__kwargtrans__"))var toadd=1;if(__in__(key,hashtable))hashtable[key]=hashtable[key]+toadd;else hashtable[key]=toadd})},get __init__(){return __get__(this,function(self,ligand_pdbqt_filename,receptor_pdbqt_filename,parameters){self.ligfi=ligand_pdbqt_filename;self.recfi=receptor_pdbqt_filename;var ligand=binana.Mol();ligand.load_PDB(ligand_pdbqt_filename);var receptor=binana.Mol();receptor.load_PDB(receptor_pdbqt_filename);receptor.assign_secondary_structure();var ligand_receptor_atom_type_pairs_less_than_two_half=
dict({});var ligand_receptor_atom_type_pairs_less_than_four=dict({});var ligand_receptor_atom_type_pairs_electrostatic=dict({});var active_site_flexibility=dict({});var hbonds=dict({});var hydrophobics=dict({});var pdb_close_contacts=binana.Mol();var pdb_contacts=binana.Mol();var pdb_contacts_alpha_helix=binana.Mol();var pdb_contacts_beta_sheet=binana.Mol();var pdb_contacts_other_2nd_structure=binana.Mol();var pdb_side_chain=binana.Mol();var pdb_back_bone=binana.Mol();var pdb_hydrophobic=binana.Mol();
var pdb_hbonds=binana.Mol();var close_contacts_labels=[];var contacts_labels=[];var hydrophobic_labels=[];var hbonds_labels=[];for(var ligand_atom_index of ligand.all_atoms.py_keys())for(var receptor_atom_index of receptor.all_atoms.py_keys()){var ligand_atom=ligand.all_atoms[ligand_atom_index];var receptor_atom=receptor.all_atoms[receptor_atom_index];var dist=ligand_atom.coordinates.dist_to(receptor_atom.coordinates);if(dist<parameters.params["close_contacts_dist1_cutoff"]){var list_ligand_atom=
[ligand_atom.atom_type,receptor_atom.atom_type];self.hashtable_entry_add_one(ligand_receptor_atom_type_pairs_less_than_two_half,self.list_alphebetize_and_combine(list_ligand_atom));pdb_close_contacts.add_new_atom(ligand_atom.copy_of());pdb_close_contacts.add_new_atom(receptor_atom.copy_of());close_contacts_labels.append(tuple([ligand_atom.string_id(),receptor_atom.string_id()]))}else if(dist<parameters.params["close_contacts_dist2_cutoff"]){var list_ligand_atom=[ligand_atom.atom_type,receptor_atom.atom_type];
self.hashtable_entry_add_one(ligand_receptor_atom_type_pairs_less_than_four,self.list_alphebetize_and_combine(list_ligand_atom));pdb_contacts.add_new_atom(ligand_atom.copy_of());pdb_contacts.add_new_atom(receptor_atom.copy_of());contacts_labels.append(tuple([ligand_atom.string_id(),receptor_atom.string_id()]))}if(dist<parameters.params["electrostatic_dist_cutoff"]){var ligand_charge=ligand_atom.charge;var receptor_charge=receptor_atom.charge;var coulomb_energy=ligand_charge*receptor_charge/dist*1389423.8460104696;
var list_ligand_atom=[ligand_atom.atom_type,receptor_atom.atom_type];self.hashtable_entry_add_one(ligand_receptor_atom_type_pairs_electrostatic,self.list_alphebetize_and_combine(list_ligand_atom),coulomb_energy)}if(dist<parameters.params["active_site_flexibility_dist_cutoff"]){var flexibility_key=receptor_atom.side_chain_or_backbone()+"_"+receptor_atom.structure;if(receptor_atom.structure=="ALPHA")pdb_contacts_alpha_helix.add_new_atom(receptor_atom.copy_of());else if(receptor_atom.structure=="BETA")pdb_contacts_beta_sheet.add_new_atom(receptor_atom.copy_of());
else if(receptor_atom.structure=="OTHER")pdb_contacts_other_2nd_structure.add_new_atom(receptor_atom.copy_of());if(receptor_atom.side_chain_or_backbone()=="BACKBONE")pdb_back_bone.add_new_atom(receptor_atom.copy_of());else if(receptor_atom.side_chain_or_backbone()=="SIDECHAIN")pdb_side_chain.add_new_atom(receptor_atom.copy_of());self.hashtable_entry_add_one(active_site_flexibility,flexibility_key)}if(dist<parameters.params["hydrophobic_dist_cutoff"])if(ligand_atom.element=="C"&&receptor_atom.element==
"C"){var hydrophobic_key=receptor_atom.side_chain_or_backbone()+"_"+receptor_atom.structure;pdb_hydrophobic.add_new_atom(ligand_atom.copy_of());pdb_hydrophobic.add_new_atom(receptor_atom.copy_of());self.hashtable_entry_add_one(hydrophobics,hydrophobic_key);hydrophobic_labels.append(tuple([ligand_atom.string_id(),receptor_atom.string_id()]))}if(dist<parameters.params["hydrogen_bond_dist_cutoff"])if((ligand_atom.element=="O"||ligand_atom.element=="N")&&(receptor_atom.element=="O"||receptor_atom.element==
"N")){var hydrogens=[];for(var atm_index of ligand.all_atoms.py_keys())if(ligand.all_atoms[atm_index].element=="H")if(ligand.all_atoms[atm_index].coordinates.dist_to(ligand_atom.coordinates)<1.3){ligand.all_atoms[atm_index].comment="LIGAND";hydrogens.append(ligand.all_atoms[atm_index])}for(var atm_index of receptor.all_atoms.py_keys())if(receptor.all_atoms[atm_index].element=="H")if(receptor.all_atoms[atm_index].coordinates.dist_to(receptor_atom.coordinates)<1.3){receptor.all_atoms[atm_index].comment=
"RECEPTOR";hydrogens.append(receptor.all_atoms[atm_index])}for(var hydrogen of hydrogens)if(fabs(180-binana.mathfuncs.angle_between_three_points(ligand_atom.coordinates,hydrogen.coordinates,receptor_atom.coordinates)*180/math.pi)<=parameters.params["hydrogen_bond_angle_cutoff"]){var hbonds_key="HDONOR_"+hydrogen.comment+"_"+receptor_atom.side_chain_or_backbone()+"_"+receptor_atom.structure;pdb_hbonds.add_new_atom(ligand_atom.copy_of());pdb_hbonds.add_new_atom(hydrogen.copy_of());pdb_hbonds.add_new_atom(receptor_atom.copy_of());
self.hashtable_entry_add_one(hbonds,hbonds_key);hbonds_labels.append(tuple([ligand_atom.string_id(),hydrogen.string_id(),receptor_atom.string_id(),hydrogen.comment]))}}}var ligand_atom_types=dict({});for(var ligand_atom_index of ligand.all_atoms.py_keys()){var ligand_atom=ligand.all_atoms[ligand_atom_index];self.hashtable_entry_add_one(ligand_atom_types,ligand_atom.atom_type)}var pi_padding=parameters.params["pi_padding_dist"];var PI_interactions=dict({});var pdb_pistack=binana.Mol();var pdb_pi_T=
binana.Mol();var pi_stacking_labels=[];var T_stacking_labels=[];for(var aromatic1 of ligand.aromatic_rings)for(var aromatic2 of receptor.aromatic_rings){var dist=aromatic1.center.dist_to(aromatic2.center);if(dist<parameters.params["pi_pi_interacting_dist_cutoff"]){var aromatic1_norm_vector=binana.Point(aromatic1.plane_coeff[0],aromatic1.plane_coeff[1],aromatic1.plane_coeff[2]);var aromatic2_norm_vector=binana.Point(aromatic2.plane_coeff[0],aromatic2.plane_coeff[1],aromatic2.plane_coeff[2]);var angle_between_planes=
binana.mathfuncs.angle_between_points(aromatic1_norm_vector,aromatic2_norm_vector)*180/math.pi;if(fabs(angle_between_planes-0)<parameters.params["pi_stacking_angle_tolerance"]||fabs(angle_between_planes-180)<parameters.params["pi_stacking_angle_tolerance"]){var pi_pi=false;for(var ligand_ring_index of aromatic1.indices){var pt_on_receptor_plane=binana.mathfuncs.project_point_onto_plane(ligand.all_atoms[ligand_ring_index].coordinates,aromatic2.plane_coeff);if(pt_on_receptor_plane.dist_to(aromatic2.center)<=
aromatic2.radius+pi_padding){var pi_pi=true;break}}if(pi_pi==false)for(var receptor_ring_index of aromatic2.indices){var pt_on_ligand_plane=binana.mathfuncs.project_point_onto_plane(receptor.all_atoms[receptor_ring_index].coordinates,aromatic1.plane_coeff);if(pt_on_ligand_plane.dist_to(aromatic1.center)<=aromatic1.radius+pi_padding){var pi_pi=true;break}}if(pi_pi==true){var structure=receptor.all_atoms[aromatic2.indices[0]].structure;if(structure=="")var structure="OTHER";var key="STACKING_"+structure;
for(var index of aromatic1.indices)pdb_pistack.add_new_atom(ligand.all_atoms[index].copy_of());for(var index of aromatic2.indices)pdb_pistack.add_new_atom(receptor.all_atoms[index].copy_of());self.hashtable_entry_add_one(PI_interactions,key);pi_stacking_labels.append(tuple(["["+" / ".join(function(){var __accu0__=[];for(var index of aromatic1.indices)__accu0__.append(ligand.all_atoms[index].string_id());return __accu0__}())+"]","["+" / ".join(function(){var __accu0__=[];for(var index of aromatic2.indices)__accu0__.append(receptor.all_atoms[index].string_id());
return __accu0__}())+"]"]))}}else if(fabs(angle_between_planes-90)<parameters.params["T_stacking_angle_tolerance"]||fabs(angle_between_planes-270)<parameters.params["T_stacking_angle_tolerance"]){var min_dist=100;for(var ligand_ind of aromatic1.indices){var ligand_at=ligand.all_atoms[ligand_ind];for(var receptor_ind of aromatic2.indices){var receptor_at=receptor.all_atoms[receptor_ind];var dist=ligand_at.coordinates.dist_to(receptor_at.coordinates);if(dist<min_dist)var min_dist=dist}}if(min_dist<=
parameters.params["T_stacking_closest_dist_cutoff"]){var pt_on_receptor_plane=binana.mathfuncs.project_point_onto_plane(aromatic1.center,aromatic2.plane_coeff);var pt_on_lignad_plane=binana.mathfuncs.project_point_onto_plane(aromatic2.center,aromatic1.plane_coeff);if(pt_on_receptor_plane.dist_to(aromatic2.center)<=aromatic2.radius+pi_padding||pt_on_lignad_plane.dist_to(aromatic1.center)<=aromatic1.radius+pi_padding){var structure=receptor.all_atoms[aromatic2.indices[0]].structure;if(structure=="")var structure=
"OTHER";var key="T-SHAPED_"+structure;for(var index of aromatic1.indices)pdb_pi_T.add_new_atom(ligand.all_atoms[index].copy_of());for(var index of aromatic2.indices)pdb_pi_T.add_new_atom(receptor.all_atoms[index].copy_of());self.hashtable_entry_add_one(PI_interactions,key);T_stacking_labels.append(tuple(["["+" / ".join(function(){var __accu0__=[];for(var index of aromatic1.indices)__accu0__.append(ligand.all_atoms[index].string_id());return __accu0__}())+"]","["+" / ".join(function(){var __accu0__=
[];for(var index of aromatic2.indices)__accu0__.append(receptor.all_atoms[index].string_id());return __accu0__}())+"]"]))}}}}}var pdb_pi_cat=binana.Mol();var pi_cat_labels=[];for(var aromatic of receptor.aromatic_rings)for(var charged of ligand.charges)if(charged.positive==true)if(charged.coordinates.dist_to(aromatic.center)<parameters.params["cation_pi_dist_cutoff"]){var charge_projected=binana.mathfuncs.project_point_onto_plane(charged.coordinates,aromatic.plane_coeff);if(charge_projected.dist_to(aromatic.center)<
aromatic.radius+pi_padding){var structure=receptor.all_atoms[aromatic.indices[0]].structure;if(structure=="")var structure="OTHER";var key="PI-CATION_LIGAND-CHARGED_"+structure;for(var index of aromatic.indices)pdb_pi_cat.add_new_atom(receptor.all_atoms[index].copy_of());for(var index of charged.indices)pdb_pi_cat.add_new_atom(ligand.all_atoms[index].copy_of());self.hashtable_entry_add_one(PI_interactions,key);pi_cat_labels.append(tuple(["["+" / ".join(function(){var __accu0__=[];for(var index of charged.indices)__accu0__.append(ligand.all_atoms[index].string_id());
return __accu0__}())+"]","["+" / ".join(function(){var __accu0__=[];for(var index of aromatic.indices)__accu0__.append(receptor.all_atoms[index].string_id());return __accu0__}())+"]"]))}}for(var aromatic of ligand.aromatic_rings)for(var charged of receptor.charges)if(charged.positive==true)if(charged.coordinates.dist_to(aromatic.center)<parameters.params["cation_pi_dist_cutoff"]){var charge_projected=binana.mathfuncs.project_point_onto_plane(charged.coordinates,aromatic.plane_coeff);if(charge_projected.dist_to(aromatic.center)<
aromatic.radius+pi_padding){var structure=receptor.all_atoms[charged.indices[0]].structure;if(structure=="")var structure="OTHER";var key="PI-CATION_RECEPTOR-CHARGED_"+structure;for(var index of aromatic.indices)pdb_pi_cat.add_new_atom(ligand.all_atoms[index].copy_of());for(var index of charged.indices)pdb_pi_cat.add_new_atom(receptor.all_atoms[index].copy_of());self.hashtable_entry_add_one(PI_interactions,key);pi_cat_labels.append(tuple(["["+" / ".join(function(){var __accu0__=[];for(var index of aromatic.indices)__accu0__.append(ligand.all_atoms[index].string_id());
return __accu0__}())+"]","["+" / ".join(function(){var __accu0__=[];for(var index of charged.indices)__accu0__.append(receptor.all_atoms[index].string_id());return __accu0__}())+"]"]))}}var pdb_salt_bridges=binana.Mol();var salt_bridges=dict({});var salt_bridge_labels=[];for(var receptor_charge of receptor.charges)for(var ligand_charge of ligand.charges)if(ligand_charge.positive!=receptor_charge.positive)if(ligand_charge.coordinates.dist_to(receptor_charge.coordinates)<parameters.params["salt_bridge_dist_cutoff"]){var structure=
receptor.all_atoms[receptor_charge.indices[0]].structure;if(structure=="")var structure="OTHER";var key="SALT-BRIDGE_"+structure;for(var index of receptor_charge.indices)pdb_salt_bridges.add_new_atom(receptor.all_atoms[index].copy_of());for(var index of ligand_charge.indices)pdb_salt_bridges.add_new_atom(ligand.all_atoms[index].copy_of());self.hashtable_entry_add_one(salt_bridges,key);salt_bridge_labels.append(tuple(["["+" / ".join(function(){var __accu0__=[];for(var index of ligand_charge.indices)__accu0__.append(ligand.all_atoms[index].string_id());
return __accu0__}())+"]","["+" / ".join(function(){var __accu0__=[];for(var index of receptor_charge.indices)__accu0__.append(receptor.all_atoms[index].string_id());return __accu0__}())+"]"]))}if(parameters.params["output_dir"]!="")if(!os.path.exists(parameters.params["output_dir"]))os.mkdir(parameters.params["output_dir"]);var json_output=binana.Output.json_out.json_file(close_contacts_labels,contacts_labels,hbonds_labels,hydrophobic_labels,pi_stacking_labels,T_stacking_labels,pi_cat_labels,salt_bridge_labels,
self.ligfi,self.recfi);print("json output:");print(json_output);var output=binana.Output.log.make_log(parameters,ligand,ligand_atom_types,ligand_receptor_atom_type_pairs_less_than_two_half,close_contacts_labels,ligand_receptor_atom_type_pairs_less_than_four,contacts_labels,ligand_receptor_atom_type_pairs_electrostatic,active_site_flexibility,hbonds,hbonds_labels,hydrophobics,hydrophobic_labels,PI_interactions,pi_stacking_labels,T_stacking_labels,pi_cat_labels,salt_bridges,salt_bridge_labels);pdb_close_contacts.set_resname("CCN");
pdb_contacts.set_resname("CON");pdb_contacts_alpha_helix.set_resname("ALP");pdb_contacts_beta_sheet.set_resname("BET");pdb_contacts_other_2nd_structure.set_resname("OTH");pdb_back_bone.set_resname("BAC");pdb_side_chain.set_resname("SID");pdb_hydrophobic.set_resname("HYD");pdb_hbonds.set_resname("HBN");pdb_pistack.set_resname("PIS");pdb_pi_T.set_resname("PIT");pdb_pi_cat.set_resname("PIC");pdb_salt_bridges.set_resname("SAL");ligand.set_resname("LIG");if(parameters.params["output_dir"]!=""){binana.Output.Dir.pdbs.output_dir_pdbs(pdb_close_contacts,
parameters,pdb_contacts,pdb_contacts_alpha_helix,pdb_contacts_beta_sheet,pdb_contacts_other_2nd_structure,pdb_back_bone,pdb_side_chain,pdb_hydrophobic,pdb_hbonds,pdb_pistack,pdb_pi_T,pdb_pi_cat,pdb_salt_bridges,ligand,receptor);binana.Output.Dir.vmd_state.vmd_state_file(parameters)}if(parameters.params["output_file"]!="")binana.Output.single_file.make_single_file(parameters,receptor,ligand,pdb_close_contacts,pdb_contacts,pdb_contacts_alpha_helix,pdb_contacts_beta_sheet,pdb_contacts_other_2nd_structure,
pdb_back_bone,pdb_side_chain,pdb_hydrophobic,pdb_hbonds,pdb_pistack,pdb_pi_T,pdb_pi_cat,pdb_salt_bridges,output)})}});export var save_to_fake_fs=function(filename,text){var f=binana.shim.OpenFile(filename,"w");f.write(text);f.close()};export var ls_fake_files=function(){print(binana.shim.fake_fs.py_keys())};export var load_from_fake_fs=function(filename){var f=binana.shim.OpenFile(filename,"r");var txt=f.read();f.close();return txt};export var intro=function(){var version="1.2.1";var lines=[];lines.append("");
lines.append("BINANA "+version);lines.append("============");lines.append("   BINANA is released under the GNU General Public License (see http://www.gnu.org/licenses/gpl.html). If you have any questions, comments, or suggestions, please don't hesitate to contact me, Jacob Durrant, at jdurrant [at] ucsd [dot] edu. If you use BINANA in your work, please cite [REFERENCE HERE].");lines.append("");lines.append("Introduction");lines.append("============");lines.append("   BINANA (BINding ANAlyzer) is a python-implemented algorithm for analyzing ligand binding. The program identifies key binding characteristics like hydrogen bonds, salt bridges, and pi interactions. As input, BINANA accepts receptor and ligand files in the PDBQT format. PDBQT files can be generated from the more common PDB file format using the free converter provided with AutoDockTools, available at http://mgltools.scripps.edu/downloads");
lines.append("   As output, BINANA describes ligand binding. Here's a simple example of how to run the program:");lines.append("");lines.append("python binana.py -receptor /path/to/receptor.pdbqt -ligand /path/to/ligand.pdbqt");lines.append("");lines.append("   To create a single PDB file showing the different binding characteristics with those characteristics described in the PDB header:");lines.append("");lines.append("python binana.py -receptor /path/to/receptor.pdbqt -ligand /path/to/ligand.pdbqt -output_file /path/to/output.pdb");
lines.append("");lines.append("   Note that in the above example, errors and warnings are not written to the output file. To save these to a file, try:");lines.append("");lines.append("python binana.py -receptor /path/to/receptor.pdbqt -ligand /path/to/ligand.pdbqt -output_file /path/to/output.pdb > errors.txt");lines.append("");lines.append("   You can also send the program output to a directory, which will be created if it does not already exist. If a directory is specified, the program automatically separates the output PDB file into separate files for each interaction analyzed, and a description of the interactions is written to a file called 'log.txt'. Additionally, a VMD state file is created so the results can be easily visualized in VMD, a free program available for download at http://www.ks.uiuc.edu/Development/Download/download.cgi?PackageName=VMD Again, to save warnings and errors, append something like \"> errors.txt\" to the end of your command:");
lines.append("");lines.append("python binana.py -receptor /path/to/receptor.pdbqt -ligand /path/to/ligand.pdbqt -output_dir /path/to/output/directory/ > errors.txt");lines.append("");lines.append("   Though we recommend using program defaults, the following command-line tags can also be specified: -close_contacts_dist1_cutoff -close_contacts_dist2_cutoff -electrostatic_dist_cutoff -active_site_flexibility_dist_cutoff -hydrophobic_dist_cutoff -hydrogen_bond_dist_cutoff -hydrogen_bond_angle_cutoff -pi_padding_dist -pi_pi_interacting_dist_cutoff -pi_stacking_angle_tolerance -T_stacking_angle_tolerance -T_stacking_closest_dist_cutoff -cation_pi_dist_cutoff -salt_bridge_dist_cutoff");
lines.append("   For example, if you want to tell BINANA to detect only hydrogen bonds where the donor and acceptor are less than 3.0 angstroms distant, run:");lines.append("");lines.append("python binana.py -receptor /path/to/receptor.pdbqt -ligand /path/to/ligand.pdbqt -hydrogen_bond_dist_cutoff 3.0");lines.append("");lines.append("   What follows is a detailed description of the BINANA algorithm and a further explaination of the optional parameters described above. Parameter names are enclosed in braces.");
lines.append("");lines.append("Close Contacts");lines.append("==============");lines.append("   BINANA begins by identifying all ligand and protein atoms that come within {close_contacts_dist1_cutoff} angstroms of each other. These close-contact atoms are then characterized according to their respective AutoDock atom types, without regard for the receptor or ligand. The number of each pair of close-contact atoms of given AutoDock atom types is then tallied. For example, the program counts the number of times a hydrogen-bond accepting oxygen atom (atom type OA), either on the ligand or the receptor, comes within {close_contacts_dist1_cutoff} angstroms of a polar hydrogen atom (atom type HD) on the corresponding binding partner, be it the receptor or the ligand. A similar list of atom-type pairs is tallied for all ligand and receptor atoms that come within {close_contacts_dist2_cutoff} angstroms of each other, where {close_contacts_dist2_cutoff} > {close_contacts_dist1_cutoff}.");
lines.append("");lines.append("Electrostatic Interactions");lines.append("==========================");lines.append("   For each atom-type pair of atoms that come within {electrostatic_dist_cutoff} angstroms of each other, as described above, a summed electrostatic energy is calculated using the Gasteiger partial charges assigned by AutoDockTools.");lines.append("");lines.append("Binding-Pocket Flexibility");lines.append("==========================");lines.append("   BINANA also provides useful information about the flexibility of a binding pocket. Each receptor atom that comes with {active_site_flexibility_dist_cutoff} angstroms of any ligand atom is characterized according to whether or not it belongs to a protein side chain or backbone. Additionally, the secondary structure of the corresponding protein residue of each atom, be it alpha helix, beta sheet, or other, is also determined. Thus, there are six possible characterizations for each atom: alpha-sidechain, alpha-backbone, beta-sidechain, beta-backbone, other-sidechain, other-backbone. The number of close-contact receptor atoms falling into each of these six categories is tallied as a metric of binding-site flexibility.");
lines.append('   All protein atoms with the atom names "CA," "C," "O," or "N" are assumed to belong to the backbone. All other receptor atoms are assigned side-chain status. Determining the secondary structure of the corresponding residue of each close-contact receptor atom is more difficult. First, preliminary secondary-structure assignments are made based on the phi and psi angles of each residue. If phi in (-145, -35) and psi in (-70, 50), the residue is assumed to be in the alpha-helix conformation. If phi in [-180, -40) and psi in (90,180], or phi in [-180,-70) and psi in [-180, -165], the residue is assumed to be in the beta-sheet conformation. Otherwise, the secondary structure of the residue is labeled "other."');
lines.append('   Inspection of actual alpha-helix structures revealed that the alpha carbon of an alpha-helix residue i is generally within 6.0 angstroms of the alpha carbon of an alpha-helix residue three residues away (i + 3 or i - 3). Any residue that has been preliminarily labeled "alpha helix" that fails to meet this criteria is instead labeled "other." Additionally, the residues of any alpha helix comprised of fewer than four consecutive residues are also labeled "other," as these tended belong to be small loops rather than genuine helices.');
lines.append('   True beta strands hydrogen bond with neighboring beta strands to form beta sheets. Inspection of actual beta strands revealed that the Calpha of a beta-sheet residue, i, is typically within 6.0 angstroms of the Calpha of another beta-sheet residue, usually on a different strand, when the residues [i - 2, i + 2] are excluded. Any residue labeled "beta sheet" that does not meet this criteria is labeled "other" instead. Additionally, the residues of beta strands that are less than three residues long are likewise labeled "other," as these residues typically belong to loops rather than legitimate strands.');
lines.append("");lines.append("Hydrophobic Contacts");lines.append("====================");lines.append("   To identify hydrophobic contacts, BINANA simply tallies the number of times a ligand carbon atom comes within {hydrophobic_dist_cutoff} angstroms of a receptor carbon atom. These hydrophobic contacts are categorized according to the flexibility of the receptor carbon atom. There are six possible classifications: alpha-sidechain, alpha-backbone, beta-sidechain, beta-backbone, other-sidechain, other-backbone. The total number of hydrophobic contacts is simply the sum of these six counts.");
lines.append("");lines.append("Hydrogen Bonds");lines.append("==============");lines.append("   BINANA allows hydroxyl and amine groups to act as hydrogen-bond donors. Oxygen and nitrogen atoms can act as hydrogen-bond acceptors. Fairly liberal cutoffs are implemented in order to accommodate low-resolution crystal structures. A hydrogen bond is identified if the hydrogen-bond donor comes within {hydrogen_bond_dist_cutoff} angstroms of the hydrogen-bond acceptor, and the angle formed between the donor, the hydrogen atom, and the acceptor is no greater than {hydrogen_bond_angle_cutoff} degrees. BINANA tallies the number of hydrogen bonds according to the secondary structure of the receptor atom, the side-chain/backbone status of the receptor atom, and the location (ligand or receptor) of the hydrogen bond donor. Thus there are twelve possible categorizations: alpha-sidechain-ligand, alpha-backbone-ligand, beta-sidechain-ligand, beta-backbone-ligand, other-sidechain-ligand, other-backbone-ligand, alpha-sidechain-receptor, alpha-backbone-receptor, beta-sidechain-receptor, beta-backbone-receptor, other-sidechain-receptor, other-backbone-receptor.");
lines.append("");lines.append("Salt Bridges");lines.append("============");lines.append("   BINANA also seeks to identify possible salt bridges binding the ligand to the receptor. First, charged functional groups are identified and labeled with a representative point to denote their location. For non-protein residues, BINANA searches for common functional groups or atoms that are known to be charged. Atoms containing the following names are assumed to be metal cations: MG, MN, RH, ZN, FE, BI, AS, AG. The identifying coordinate is centered on the metal cation itself. Sp3-hybridized amines (which could pick up a hydrogen atom) and quaternary ammonium cations are also assumed to be charged; the representative coordinate is centered on the nitrogen atom. Imidamides where both of the constituent amines are primary, as in the guanidino group, are also fairly common charged groups. The representative coordinate is placed between the two constituent nitrogen atoms. ");
lines.append("   Carboxylate groups are likewise charged; the identifying coordinate is placed between the two oxygen atoms. Any group containing a phosphorus atom bound to two oxygen atoms that are themselves bound to no other heavy atoms (i.e., a phosphate group) is also likely charged; the representative coordinate is centered on the phosphorus atom. Similarly, any group containing a sulfur atom bound to three oxygen atoms that are themselves bound to no other heavy atoms (i.e., a sulfonate group) is also likely charged; the representative coordinate is centered on the sulfur atom. Note that while BINANA is thorough in its attempt to identify charged functional groups on non-protein residues, it is not exhaustive. For example, one could imagine a protonated amine in an aromatic ring that, though charged, would not be identified as a charged group.");
lines.append("   Identifying the charged functional groups of protein residues is much simpler. Functional groups are identified based on standardized protein atom names. Lysine residues have an amine; the representative coordinate is centered on the nitrogen atom. Arginine has a guanidino group; the coordinate is centered between the two terminal nitrogen atoms. Histadine is always considered charged, as it could pick up a hydrogen atom. The representative charge is placed between the two ring nitrogen atoms. Finally, glutamate and aspartate contain charged carboxylate groups; the representative coordinate is placed between the two oxygen atoms.");
lines.append("   Having identified the location of all charged groups, BINANA is ready to predict potential salt bridges. First, the algorithm identifies all representative charge coordinates within {salt_bridge_dist_cutoff} angstroms of each other. Next, it verifies that the two identified coordinates correspond to charges that are opposite. If so, a salt bridge is detected. These salt bridges are characterized and tallied by the secondary structure of the associated protein residue: alpha helix, beta sheet, or other.");
lines.append("");lines.append("pi Interactions");lines.append("===============");lines.append("   A number of interactions are known to involve pi systems. In order to detect the aromatic rings of non-protein residues, a recursive subroutine identifies all five or six member rings, aromatic or not. The dihedral angles between adjacent ring atoms, and between adjacent ring atoms and the first atom of ring substituents, are checked to ensure that none deviate from planarity by more than 15 degrees. Planarity establishes aromaticity. For protein residues, aromatic rings are identified using standardized protein-atom names. Phenylalanine, tyrosine, and histidine all have aromatic rings. Tryptophan is assigned two aromatic rings. ");
lines.append("   Once an aromatic ring is identified, it must be fully characterized. First, a plane is defined that passes through three ring atoms, preferably the first, third, and fifth atoms. The center of the ring is calculated by averaging the coordinates of all ring atoms, and the radius is given to be the maximum distance between the center point and any of those atoms. From this information, a ring disk can be defined that is centered on the ring center point, oriented along the ring plane, and has a radius equal to that of the ring plus a small buffer ({pi_padding_dist} angstroms).");
lines.append("   Having identified and characterized all aromatic rings, the algorithm next attempts to identify pi-pi stacking interactions. First, every aromatic ring of the ligand is compared to every aromatic ring of the receptor. If the centers of two rings are within {pi_pi_interacting_dist_cutoff} angstroms of each other, the angle between the two vectors normal to the planes of each ring is calculated. If this angle suggests that the two planes are within {pi_stacking_angle_tolerance} degrees of being parallel, then each of the ring atoms is projected onto the plane of the opposite ring by identifying the nearest point on that plane. If any of these projected points fall within the ring disk of the opposite ring, the two aromatic rings are said to participate in a pi-pi stacking interaction. We note that it is not sufficient to simply project the ring center point onto the plane of the opposite ring because pi-pi stacking interactions are often off center.");
lines.append("   To detect T-stacking or edge-face interactions, every aromatic ring of the ligand is again compared to every aromatic ring of the receptor. If the centers of two rings are within {pi_pi_interacting_dist_cutoff} angstroms of each other, the angle between the two vectors normal to the planes of each ring is again calculated. If this angle shows that the two planes are within {T_stacking_angle_tolerance} degrees of being perpendicular, a second distance check is performed to verify that the two rings come within {T_stacking_closest_dist_cutoff} angstroms at their nearest point. If so, each of the coordinates of the ring center points is projected onto the plane of the opposite ring by identifying the nearest point on the respective plane. If either of the projected center points falls within the ring disk of the opposite ring, the two aromatic rings are said to participate in a T-stacking interaction.");
lines.append("   Finally, BINANA also detects cation-pi interactions between the ligand and the receptor. Each of the representative coordinates identifying charged functional groups is compared to each of the center points of the identified aromatic rings. If the distance between any of these pairs is less than {cation_pi_dist_cutoff} angstroms, the coordinate identifying the charged functional group is projected onto the plane of the aromatic ring by identifying the nearest point on that plane. If the projected coordinate falls within the ring disk of the aromatic ring, a cation-pi interaction is identified. ");
lines.append("   pi-pi stacking, T-stacking, and cation-pi interactions are tallied according to the secondary structure of the receptor residue containing the associated aromatic ring or charged functional group: alpha helix, beta sheet, or other.");lines.append("");lines.append("Ligand Atom Types and Rotatable Bonds");lines.append("=====================================");lines.append("   BINANA also tallies the number of atoms of each AutoDock type present in the ligand as well as the number of ligand rotatable bonds identified by the AutoDockTools scripts used to generate the input PDBQT files.");
lines.append("");lines.append("                            [- END INTRO -]");lines.append("");var wrapped=[];for(var line of lines)if(line=="")wrapped.append("");else if(__in__("python binana.py",line))wrapped.append(line);else wrapped.extend(textwrap.wrap(line,80));print("");print("                                                             |[]{};");print("                                                            .|[]{}");print("                                                            .|  {}");
print("                                                             |   }");print("                                                             |   }");print("                                                             |   }");print("                                                            .|   };");print("                                                            .|     :'\"");print('                                                           +.        "');print('                                                          =+         "/');
print('                                                         _=          "/');print('                                                        -_           "/');print('                                                       ,-            "/');print('                                                     <>              "/');print('                                                   |\\                "');print("                                               :'\"/                 '\"");print("                                        .|[]{};                    :'");
print("               ,-_=+.|[]{};:'\"/|\\<>,-_=+                           :'");print("           |\\<>                                                   ;:");print("          /|                                                    {};");print("          /|                                                   ]{}");print("          /|                                                  []");print("           |\\                                               .|[");print("            \\<                                            =+.");
print("              >,                                        -_=");print("               ,-_=                                  <>,-");print('                  =+.|[]                         "/|\\<');print("                       ]{};:'\"/|\\         []{};:'\"");print("                                \\<>,-_=+.|");for(var i of wrapped)print(i)};export var main=function(args){if(typeof args=="undefined"||args!=null&&args.hasOwnProperty("__kwargtrans__"))var args=null;intro();if(args===null)var args=
sys.argv.__getslice__(0,null,1);var cmd_params=binana.cmd_params.CommandLineParameters(args);if(cmd_params.okay_to_proceed()==false){print("Error: You need to specify the ligand and receptor PDBQT files to analyze using\nthe -receptor and -ligand tags from the command line.\n");sys.exit(0);return}if(cmd_params.error!=""){print("Warning: The following command-line parameters were not recognized:");print("   "+cmd_params.error+"\n")}var lig=cmd_params.params["ligand"];var rec=cmd_params.params["receptor"];
var d=Binana(lig,rec,cmd_params)};

//# sourceMappingURL=binana.start.map