
# Angular Router 

```
With single-page apps, users stay on a single page, but their view of that page changes depending on what the user wants to do.

To handle the navigation from one view to the next, you use the Angular router. The router enables navigation by interpreting a browser URL as an instruction to change the view(https://angular.io/guide/router)
```

# RouterModule - forRoot() vs forChild()

| forRoot  | forChild |
| --- | --- |
| Declares the router directives | Declares the router directives |
| Manages our route configuration | Manages our route configuration |
| Register the router service | Does not register the router service |
| Used once for the application | Used in feature modules|

## When should I use forRoot() and forChild()?

forRoot used in the top level component. forChild used in multiple feature modules(when application has multiple routing module)

## Why only one forRoot() and multiple forChild() used?

The concepts comes under singleton service. If the RouterModule didn’t have forRoot() then each feature module would instantiate a new Router instance, which would break the application as there can only be one Router. By using the forRoot() method, the root application module imports RouterModule.forRoot(...) and gets a Router, and all feature modules import RouterModule.forChild(...) which does not instantiate another Router.

Instantiating multiple router services that interact with the same browser URL would lead to issues, so it is essential that there’s only one instance of the router service in our application, no matter how many routing modules we import in our application.

## What is the role of router service?

A service that provides navigation and URL manipulation capabilities. It takes care of synchronization between our application state and the browser URL.


## Router Driectives

RouterOutlet and routerLink

## Angular Routing Realted Commands

| CLI Command | Description |
| --- | --- |
| ng new routing-app --routing | Create an angular application with routing(with AppRoutingModule where you can configure your routes) | 
| ng g m modulename --routing | Create module with routing | 

## Other Realted Questions
1. Is routing path case sensitive?
    - Yes
2. What is difference between the attributes href and routerLink in Angular?
3. router-outlet
    -  This element informs Angular to update the application view with the component for the selected route.
4. Route Order
    - First match wins strategy
    - More specific routes should be placed above
    - Wildcard routes last
5. Nested Routes/Child Routes
    - Create routes that are relative to a component other than your root component
6. path, component, redirectTo, pathMatch, children, loadChildren