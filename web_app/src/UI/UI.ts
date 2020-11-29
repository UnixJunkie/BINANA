// This file is part of BINANA, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.


import * as Store from "../Vue/Store";
import * as Utils from "../Utils";
import { VERSION } from "../Version";

declare var Vue;

/**
 * Setup the main Vue app.
 * @returns void
 */
export function setup(): void {
    new Vue({
        "el": '#app',
        "store": Store.store,
        "template": `
            <div class="container-fluid">
                <open-modal></open-modal>
                <convert-file-modal></convert-file-modal>
                <draw-smiles-modal></draw-smiles-modal>
                <div id="no-mobile">
                    <b-jumbotron class="jumbo" header="BINANA ${VERSION}" lead="BINding ANAlyzer: Identify and visualize ligand/receptor interactions">
                        <p>BINANA ${VERSION} is not designed to work on mobile phones. Please use a device with a larger screen.</p>
                    </b-jumbotron>
                </div>

                <b-jumbotron class="jumbo" style="background-image:url(${Utils.curPath()}binana_logo.jpg);" header="BINANA ${VERSION}" lead="BINding ANAlyzer: Identify and visualize ligand/receptor interactions">
                    <p>Brought to you by the <a target="_blank" href="http://durrantlab.com">Durrant Lab</a>.</p>
                    <b-button variant="primary" target="_blank" href="http://durrantlab.com">More Info</b-button>
                </b-jumbotron>

                <b-card no-body class="mb-3">
                    <b-tabs v-model="tabIdx" card fill pills vertical content-class="mt-3"> <!-- vertical -->
                        <b-tab title="BINANA" active>
                            <b-card-text>
                                <binana-params></binana-params>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Start Over">
                            <b-card-text>
                                <start-over></start-over>
                            </b-card-text>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        `,

        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data"() {
            return {
                "receptorFile": false,
                "ligandFile": false
            }
        },
        "computed": {
            /** Gets and sets the tabIdx. */
            "tabIdx": {
                get(): number {
                    return this.$store.state["tabIdx"];
                },

                set(val: number): void {
                    this.$store.commit("setVar", {
                        name: "tabIdx",
                        val: val
                    });
                }
            },

            /**
             * Determine whether the running tab is disabled.
             * @returns boolean  True if it is disabled, false otherwise.
            //  */
            // TODO: Cruft?
            // "runningTabDisabled"(): boolean {
            //     return this.$store.state["runningTabDisabled"];
            // },

            /**
             * Determine whether the output tab is disabled.
             * @returns boolean  True if it is disabled, false otherwise.
             */
            // TODO: Cruft?
            // "outputTabDisabled"(): boolean {
            //     return this.$store.state["outputTabDisabled"];
            // },

            /**
             * Determine whether the existing binana output tab is disabled.
             * @returns boolean  True if it is disabled, false otherwise.
             */
            // TODO: Cruft?
            // "existingVinaOutputTabDisabled"(): boolean {
            //     return this.$store.state["existingVinaOutputTabDisabled"];
            // },

            /**
             * Determine whether the start over tab is disabled.
             * @returns boolean  True if it is disabled, false otherwise.
             */
            // "startOverTabDisabled"(): boolean {
            //     return this.$store.state["startOverTabDisabled"];
            // }
        },

        "methods": {},

        /**
         * Runs when the vue component is mounted.
         * @returns void
         */
        "mounted"() {
            // window["$store"] = this.$store;  // For debugging
        }
    })
}