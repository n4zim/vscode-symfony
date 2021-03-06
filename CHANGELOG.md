# Change Log

## 0.0.3

* Added aucompletion of public services in PHP files
* Added the parameter view to display parameters of the Symfony container.
* Added aucompletion of parameters in YAML files
* Added class name on hover on a known service id in YAML and PHP files.
* Added the `enableFileWatching` setting to enable or disable file watching.
* Added the `servicesFilters` to improve autocompletion pertinence.
* Added the "Toggle class/id display for services" command to switch between Id and class name display on the services view.
* Added the "Toggle path/id display for routes" command to switch between Id and paths display on the routes view.
    * These two commands are available via buttons on the side of the two views.

## 0.0.2

* Added autocompletion of services in YAML files
* Added the `detectCwd` setting to help with Symfony projects on Docker
* Added more logging of errors
    * Added the `showConsoleErrors` setting to hide errors from the Symfony console
* Added progress indicator on the status bar
* Added buttons to the side of TreeViews to re-sync the extension and Symfony.
* Added class name for services aliases

## 0.0.1

Initial preview release