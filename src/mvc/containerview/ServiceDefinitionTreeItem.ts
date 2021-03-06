import * as vscode from "vscode";
import { ServiceDefinition } from "../../symfony/ServiceDefinition";

export class ServiceDefinitionTreeItem extends vscode.TreeItem {
    public serviceDefinition: ServiceDefinition
    private _displayClass: boolean

    constructor(
        serviceDefinition: ServiceDefinition,
        displayClass: boolean = false
    ) {
        super(displayClass ? serviceDefinition.className : serviceDefinition.id, vscode.TreeItemCollapsibleState.Collapsed)
        this.serviceDefinition = serviceDefinition
        this._displayClass = displayClass
    }

    get tooltip() {
        return this.serviceDefinition.className
    }

    get childrenItems() {
        let children: vscode.TreeItem[] = []

        if(this._displayClass) {
            children.push(new vscode.TreeItem("Id : " + this.serviceDefinition.id, vscode.TreeItemCollapsibleState.None))
        }
        if(this.serviceDefinition.alias !== null) {
            children.push(new vscode.TreeItem("Alias : " + this.serviceDefinition.alias, vscode.TreeItemCollapsibleState.None))
        }
        if(!this._displayClass) {
            children.push(new vscode.TreeItem("Class : " + this.serviceDefinition.className, vscode.TreeItemCollapsibleState.None))
        }
        children.push(new vscode.TreeItem("Is public : " + (this.serviceDefinition.public ? "true" : "false"), vscode.TreeItemCollapsibleState.None))

        return children
    }
}