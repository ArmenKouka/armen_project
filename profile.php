<?php

session_start();
    include("connection.php");
    include("functions.php");
    $user_data=check_login($con);
    if(!isset($_SESSION['user_id'])){
      header("location:index.html");
    
    }
    

    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style/general.css">
    <link rel="stylesheet" href="style/profile.css" >

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <!---ICONS-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/profile.css' rel='stylesheet'>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/shopping-bag.css' rel='stylesheet'>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/search.css' rel='stylesheet'>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/menu.css' rel='stylesheet'>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/close.css' rel='stylesheet'>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/arrow-right.css' rel='stylesheet'>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/chevron-up.css' rel='stylesheet'>
    
</head>
<body>


  <!--Header-->
    <header id="header">
      <a href="index.html" class="logo"><img src="img/logo.png" alt=""></a>
     
      <ul class="navmenu">
       
        <li><a href="index.html">Home </a></li>
        <li><a href="shop.php">Shop</a></li>
        <li><a href="about.html">About</a></li>
      </ul>

      <div  class="nav-icon">
        <div id="search_text" class="search">
          <input type="text"  placeholder="Search">
        </div>
        <a><i onclick="search()" id="searchbtn" class="gg-search"></i></a>
        <a id="iconBag" class="icons" href="cart.html"><i class="gg-shopping-bag"></i></a>
        <a id="iconProfile"  class="icons"><i  onclick="poplogin()" class="gg-profile"></i></a>
        <div>
          <i id="menu-icon" class="gg-menu"></i>
        </div>

      
      </div>
    </header>
    <div onclick="scrollUp()" id="scroll-up">
    <a><i  class="gg-chevron-up"></i></a>
  </div> 
    <section id="profile">
      <div class="member_welcome">
        <h4>Hello <?php echo $user_data['user_name'];?></h4>
      
        <button id="orders"><i id="icon" class="fa-solid fa-cube "></i> My orders</button>
        <button id="setting"><i id="icon" class="fa-solid fa-gear"></i>  Account settings</button>
        <button id="sign_out" onclick="signout()"><i id="icon" class="fa-solid fa-right-from-bracket"></i> Sign out</button>
      </div>
      <div class="content">
          <h2>My Account</h2>
        <div id="username">
          <b>Username</b> <a><?php echo $user_data['user_name'];?></a>
        </div>
        <div id="username">
          <b>Email</b> <a><?php echo $user_data['email'];?></a>
        </div>
        <div id="username">
          <b>Phone number</b> <a><?php echo $user_data['phone'];?></a>
        </div>
        <div id="username">
          <b>Date</b>  <a><?php echo $user_data['date'];?></a>    
        </div>
      </div>    
    </section>
    
    <script src="script.js"></script>

</body>
</html>
