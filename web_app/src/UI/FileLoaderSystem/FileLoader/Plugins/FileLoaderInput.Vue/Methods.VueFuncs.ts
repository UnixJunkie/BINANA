/** An object containing the vue-component methods functions. */
export let fileLoaderInputMethodsFunctions = {
    "formatFileNames"(): string {
        return this["placeholder"];
        // console.warn("NO")
        // return (this["selectedFilename"] === "") ? this["defaultPlaceHolder"] : this["selectedFilename"];
    },
    // clearActualFile(filename: string): void {
    //     this["files"] = [new File([], filename)];
    //     // this["placeholder"] = (filename === "") ? this["defaultPlaceHolder"] : filename;
    //     // this["selectedFilename"] = (filename === "") ? defaultPlaceHolder : filename;

    //     // this["val"] = null;
    //     // let inp = this["$refs"]["fileInput"]["$refs"]["input"];
    //     // inp.value = null;
    //     // window["inp"] = inp;
    //     // console.log(inp);
    //     // debugger
    //     // debugger;
    // },
};
