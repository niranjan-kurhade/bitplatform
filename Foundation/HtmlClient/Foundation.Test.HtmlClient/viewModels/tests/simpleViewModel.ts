﻿module Foundation.Test.ViewModels {
    @Core.FormViewModelDependency({ name: "SimpleFormViewModel", templateUrl: "|Foundation|/Foundation.Test.HtmlClient/views/tests/simpleview.html" })
    export class SimpleFormViewModel extends Foundation.ViewModel.ViewModels.SecureFormViewModel {
        public num = 10;
    }
}