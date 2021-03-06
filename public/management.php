<!doctype html>
<html ng-app="sidcasoft">
<meta content="UTF-8">
<head>
    <title>SIDCASOFT</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="bower_components/materialize/dist/css/materialize.css">
    <link rel="stylesheet" href="bower_components/sweetalert/dist/sweetalert.css">
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.css">

</head>
<body>
    <nav ng-controller="NavController" class="cyan darken-1">
        <ul id="slide-out" class="side-nav">
            <li><a href="#!">First Sidebar Link</a></li>
            <li><a href="#!">Second Sidebar Link</a></li>
            <li class="no-padding">
                <ul class="collapsible collapsible-accordion">
                    <li>
                        <a class="collapsible-header">Configuracíon<i class="mdi-navigation-arrow-drop-down"></i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li><a href="#!" ng-click="logout()">Cerrar Sesíon</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="nav-container">
            <ul class="right hide-on-med-and-down">
                <li><a href="#!">Proyectos</a></li>
                <li><a href="#!">Empresas</a></li>
                <li>
                    <a class="dropdown-button" href="#!" data-activates="dropdown1">
                        <i class="fa fa-cog fa-lg"></i>
                        <i class="mdi-navigation-arrow-drop-down right"></i>
                    </a>
                </li>
                <ul id='dropdown1' class='dropdown-content'>
                    <li><a href="#!" ng-click="logout()">Cerrar Sesíon</a></li>
                </ul>
            </ul>
            <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
        </div>
   
    </nav>

    <div ng-view class="container">

    </div>  
</body>
<footer class="page-footer blue-grey darken-4">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
          </div>
      </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
        © 2014 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
    </div>
</div>
</footer>


<!-- Application Dependencies -->
<script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="bower_components/materialize/dist/js/materialize.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
<script type="text/javascript" src="bower_components/angular-resource/angular-resource.js"></script>
<script type="text/javascript" src="bower_components/moment/moment.js"></script>
<script type="text/javascript" src="bower_components/angular-route/angular-route.js"></script>
<script type="text/javascript" src="bower_components/sweetalert/dist/sweetalert.min.js"></script>


<!-- Application Scripts -->
<script type="text/javascript" src="js/app.js"></script>
<script type="text/javascript" src="js/routes.js"></script>
<script type="text/javascript" src="js/services/Auth.js"></script>
<script type="text/javascript" src="js/controllers/Login.js"></script>
<script type="text/javascript" src="js/controllers/Home.js"></script>
<script type="text/javascript" src="js/controllers/Nav.js"></script>

</html>
