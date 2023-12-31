"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Controller;
(function (Controller) {
    const buttonAdd = document.querySelector('#btn-add');
    const addContainer = document.querySelector('#form-modal');
    const addView = new View.AddView(addContainer);
    function initToolbar() {
        buttonAdd === null || buttonAdd === void 0 ? void 0 : buttonAdd.addEventListener('click', () => addView.render());
    }
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            const dao = new Model.ToDoItemDao();
            const items = yield dao.listAll();
            const containerNewest = document.getElementById('newest-content');
            const containerOldest = document.getElementById('oldest-content');
            if (containerNewest) {
                new View.NewestView(items, containerNewest).render();
            }
            if (containerOldest) {
                new View.OldestView(items, containerOldest).render();
            }
        });
    }
    main().then();
})(Controller || (Controller = {}));
