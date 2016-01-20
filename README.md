# Gyak09

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development
* `install emberapi and emberrun into different nodejs projects to c9.io`
* `run api`
* `ember server`
* `open app in the given localhost link you see in console`
* 
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


##functional requirements were:
 
 -at least two model in 1->n relation
+
 -at least one page for user to fill
+
 -opportunity for user to create object
+
 -edit object
+
 -delete object
+
 -page available only after authentication
+
 -data persisting to file
 
 
+
 ##non functional:
 -scalable
 
@@ -50,54 +57,89 @@ the program is made for a course,
 ##details
 Upon entering the website the user find himself on the index page, he is able to go to the warehouse list.
 On warehouse list they can add new warehouse,edit and delete existing one and view the goods list of each warehouse.
 On goods list they can add new goods and remove it.
+
 -they can add entitys to the warehouse, they can give it names.
+
 -they can edit existing items, and delete them.
+
 
+
 ##hardware stats for developing:
+
 default pc requirements for using c9.io
 
 ##softwares used for developing:
+
 c9.io
+
 windows 7 
 
 ##minimal software requirements for running the app:
+
 -pentium 4
+
 -1 GB ram
+
 -gfx card capable of 1024*768 resolution
 
+
 ##additional requirements:
-interactive user interface,easy handling
+-interactive user interface
+
+-easy to handle
 
 ##usecase diagram:
 
 ![clickable](https://github.com/koneksk8/emberrun/blob/master/public/esetdiagram2.png)
 
  ### database plan:
  
 ![clickable](https://github.com/koneksk8/emberrun/blob/master/public/structure2.png)
 
 ###softwares to run:
 -any OS
+
 -nodeJS
+
 -install packages
-  -npm install <package name>  command
+
+-npm install <package name>  command
+
 
 packages used:
+

 -bcryptjs 2.3.0
+

 -body-parser 1.14.1
+

 -chai 3.3.0
+

 -connect-flash 0.1.1
+

 -express 4.13.3
+

 -express-session 1.11.3
+

 -express-validator 2.17.1
+

 -hbs 3.1.1
+

 -passport 0.3.0
+

 -passport-local 1.0.0
+

 -sails-disk 0.10.8
+

 -sails-memory 0.10.5
+

 -mocha 2.3.3
+

 -zombie 4.1.0
+

 -waterline 0.10.26
 
+
 ##TEST:
 
-*test.js
-*models/user.test.js
+
+-test.js
+
+-models/user.test.js
 
 ##ui sketch:
 
@@ -107,23 +149,23 @@ packages used:
 ![clickable](readme/flowchart.png)
 
 ##endpoints:
+-GET /raktarak/list: warehouse list
 
-*GET /raktarak/new: add new warehouse
 
-*GET /raktarak/view/id: view of goods in warehouse

+-GET /raktarak/new-aru: add new goods to warehouse
 
 
-*GET /raktarak/edit/id go edit warehouse page

 
