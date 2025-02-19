/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => TableCheckboxesPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var TableCheckboxesPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.setupWindowHandlers = (_workspaceWindow, win) => {
      this.registerDomEvent(win, "input", (evt) => {
        if (evt.data === "]") {
          const view = this.app.workspace.activeEditor;
          if (!view || !view.editor) {
            return;
          }
          const location = view.editor.getCursor("anchor");
          location.ch += 1;
          const rowValue = view.editor.getLine(location.line);
          if (this.isMDCheckboxInTable(rowValue)) {
            return this.handleCheckboxReplacement(view, rowValue, location, false);
          }
          location.ch -= 1;
          const rowChars = rowValue.split("");
          rowChars.splice(location.ch, 0, evt.data);
          const newRowValue = rowChars.join("");
          if (this.isMDCheckboxInTable(newRowValue)) {
            this.handleCheckboxReplacement(view, newRowValue, location, true);
          }
        }
      });
      this.registerDomEvent(win, "change", async (evt) => {
        const changeEl = evt.target;
        if (changeEl.instanceOf(HTMLInputElement) && changeEl.id && changeEl.hasAttribute("data-task") === false) {
          const view = this.app.workspace.activeEditor;
          if (!view || !view.editor || !view.file) {
            return;
          }
          if (changeEl.getAttribute("type") === "checkbox") {
            const page = await this.app.vault.read(view.file);
            const id = changeEl.id;
            this.toggleCheckbox(page, view.file, changeEl.checked, id);
          }
        }
      });
    };
  }
  async onload() {
    this.app.workspace.on("window-open", this.setupWindowHandlers);
    this.setupWindowHandlers(void 0, activeWindow);
  }
  async onunload() {
    this.app.workspace.off("window-open", this.setupWindowHandlers);
  }
  handleCheckboxReplacement(view, rowValue, location, manuallyAdded) {
    if (!view.editor) {
      return;
    }
    const checkBox = this.getCheckboxLength(rowValue);
    const start = { ...location };
    start.ch -= checkBox.length;
    if (manuallyAdded) {
      start.ch += 1;
    }
    view.editor.setSelection(start, location);
    const checkboxId = this.generateUniqueCheckboxId(view.editor.getDoc().getValue());
    view.editor.replaceSelection(`<input type="checkbox" unchecked id="${checkboxId}">`);
  }
  generateUniqueCheckboxId(page) {
    let id = crypto.randomUUID().slice(-6);
    while (this.idExistsInFile(id, page)) {
      id = crypto.randomUUID();
    }
    return id;
  }
  idExistsInFile(id, page) {
    const idIndex = page.search(id);
    return idIndex !== -1;
  }
  isMDCheckboxInTable(viewData) {
    const tableRegex = /^(\s|>)*\|.*-[\s]?\[[\s]?\].*/m;
    if (viewData.match(tableRegex)) {
      return true;
    }
    return false;
  }
  getCheckboxLength(viewData) {
    const checkboxRegex = /-[\s]?\[[\s]?\]/;
    const checkboxMatch = viewData.match(checkboxRegex);
    return checkboxMatch[0];
  }
  toggleCheckbox(page, file, isChecked, checkboxId) {
    page = page.replace(new RegExp(`<input type="checkbox" (un)?checked id="${checkboxId}">`), `<input type="checkbox" ${isChecked ? "" : "un"}checked id="${checkboxId}">`);
    this.app.vault.modify(file, page);
  }
};

/* nosourcemap */