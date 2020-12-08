<!DOCTYPE html>
<html lang="en">


<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ayah Grammer Generate</title>  
	<link type="text/css" href="css/theme.css" rel="stylesheet">
	<link type="text/css" href="images/icons/css/font-awesome.css" rel="stylesheet">
    <link type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600' rel='stylesheet'>
    

    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/alt/adminlte.core.min.css">  
    <link rel="stylesheet" href="css/alt/adminlte.components.min.css">  
    <link rel="stylesheet" href="css/alt/adminlte.extra-components.min.css">  

    <style>
           .wrap{
               display: flex;
               direction: rtl;
               position: relative;
               
           }
           .wrap div{display: inline; position: relative;}
           .wrap div.b{display: inline; position: absolute;}
           .wrap span{display: none;}
        </style>


</head>
<body>
 


	<div class="wrapper">
		<div class="container">
			<div class="row">
				 
				<div class="span12">
					<div class="content">

						<div class="module">
							<div class="module-head">
								<h3>Get ayah From http://www.recitequran.com/</h3>
							</div>
							<div class="module-body">

									 

									<form class="form-horizontal row-fluid">

                                    
                                       <pre id="totalfound"></pre>
                                         
 
 
										<div class="control-group">
											<div class="controls">
												<button type="button" class="btn" onClick="generateResult()" style="background:#555; color:#fff;">Generate HTML</button>
											</div>
										</div>

										<br /> <br /> 

  
                                    
									</form>
							</div>
						</div>

						<img src="images/loading.gif" class="loading" /> 
						<div class="results">
								<div class="ajaxreturn" style="font-size:30px;line-height:1.4; color: #f00;">
									
                                </div>
                                
                                

                                    
						</div>

						
						
					</div><!--/.content-->
				</div><!--/.span9-->
			</div>
		</div><!--/.container-->
	</div><!--/.wrapper-->

	<div class="footer">
		<div class="container">
			 
 
		</div>
	</div>

	<script src="scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="scripts/flot/jquery.flot.js" type="text/javascript"></script>
    
    <script>
        $(document).ready(function () {
         
        });


		var ajax_call_counter = 0; 

		var surah_ayah_to_call = [];
		

        function generateResult(){
            $('.ajaxreturn').html('');

            

/*
              start_from = 3;
              ayah_strat  = 126;
              surah_ayah_to_call.push(start_from+':'+ayah_strat); 
              */

              
              start_from = 55;
              end_at     = 900;
               
              for(s = start_from; s< end_at; s++){  
                        surah_ayah_to_call.push(s);  

              } 
              

              recursively_ajax();  

 


        }




            function recursively_ajax()
            {

                        csura_ayah = surah_ayah_to_call[ajax_call_counter];


					    $.ajax({
                            type: "POST",
                            async:false, // set async false to wait for previous response
                            url: 'process_n_ayah.php', 
                            data: { pageno: csura_ayah, task : 2},
                            success: function(data)
                            {
                                $('.loading').hide();
                                //$('.ajaxreturn').append(data);
                                $('.ajaxreturn').html(data);
                                 
                                console.log(data); 

								ajax_call_counter ++;
                                if(ajax_call_counter < surah_ayah_to_call.length){
                                    $('.loading').show();
                                    setTimeout(recursively_ajax, 100) 
                                }

                                 
                            }
                        });  


            }      
            



        

    </script>


    <script src="js/jquery.min.js"></script> 
    <script src="js/bootstrap.bundle.min.js"></script> 
    <script src="js/adminlte.min.js"></script> 


</body>