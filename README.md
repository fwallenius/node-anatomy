node-anatomy
============

Several explanations and examples on how to setup a node.js project. 
These are the files found in the top folder:

__.gitignore__
Make sure downloaded dependencies are never commit by adding 'node_modules' here

__package.json__
This is the projects manifest files. Declare name, version, authors etc etc. 
Also contains the very important 'dependencies' part. All external modules (that can be downloaded with npm) needs to be declared here.
The 'scripts' part describes how to start and test the project and is used by hosting environments and CI-servers.

__modulesExample.js__
Shows how to require other files from within the same project. Have a look at the two files in the 'utils' folder two different ways of exporting functions.

__debugExample.js__
Adding debug messages in your code is a good idea. Here is one way of doing it.

__modulesExample2.js__
Show how to encapsulate functionality into its own module. Look in the 'app_modules/cache' folder to see how to.

