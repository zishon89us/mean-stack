<h2> MEAN  | A fullstack JavaScript platform for modern web applications </h2>


<a href='http://mean-io-stack.herokuapp.com/'>Demo</a>

Beginning an application from scratch can sometimes be the hardest thing to do. Staring at an empty folder and a file with no code in it yet can be a very daunting thing.

This is simple yet effective sample to shows the steps -- how to setup a project and start adding modules to it.

<h5>Technique Demonstraton | How things get done </h5>

   - client side view with ajax server call
   - directive with watch function
   - ng-click updating mongoose model server side
   - responsive design

<h5>Setup | Steps the project is created </h5>

 - Using the latest mean.io stack from www.mean.io
 - Creating a package called demo (or any name i.e. my-project, pretty-domb ...)

<h5>Coding | Tasks covered in this demo </h5>

   - The home page should display a view with 6 pictures (all same size, 2 wide 3 rows) that you receive from a server route call (from a mongo model) each image has a button next to it titled "Add to Cart”
   - When you click on Add to cart, add the  image to a cart (setup mongoose model for that)
   - On the home page display a directive that display the number of items in the cart. this directive should be AUTOMATICALLY updated with refresh of page when you click add to cart, on the server side you implement an API that will return all cart items in JSON format
   - Add a checkout button in the front end, that calls a server route and in the implementation use a promise (using Q) to return an error if TOTAL cart value <10 and value in case TOTAL cart value > 10

<h5>Download </h5>

   - clone repo (or download zip)
   - install prerequisites -- node, npm, bower, grunt, mongodb (download from respective sites)
   - npm install && bower install (install dependencies)
   - run mongodb (database should be running)
   - grunt or node server (to launch the app)
   - point browser to localhost:3000
