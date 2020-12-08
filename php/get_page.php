<!DOCTYPE html>
<html lang="en">


<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Scrap Script</title>
	<link type="text/css" href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link type="text/css" href="css/theme.css" rel="stylesheet">
	<link type="text/css" href="images/icons/css/font-awesome.css" rel="stylesheet">
	<link type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600' rel='stylesheet'>
</head>
<body>
 


	<div class="wrapper">
		<div class="container">
			<div class="row">
				 
				<div class="span12">
					<div class="content">

						<div class="module">
							<div class="module-head">
								<h3>Do Recursive Tasks </h3>
							</div>
							<div class="module-body"> 
									 
 
										<div class="control-group">
											<div class="controls">
												<button type="button" class="btn" onClick="generateResult()">Generate Result</button>
											</div>
										</div>

									 
							</div>
						</div>

						<img src="images/loading.gif" class="loading" /> 
						<div class="results" style="font-size: 20px;">
								 
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

        var ajaxcallStack = [];
        
        // var ctask = 1; var $block = 1;  var start_from  = 0;  var end_at  = 604;  var aya_start   = 1;   // https://tafsir.app/scans/m-tajweed-orig/603.jpg
        //var ctask = 2; var $block = 1;  var start_from  = 1;  var end_at  = 1;  var aya_start   = 1;   // get block from HTML file
        //var ctask = 3; var $block = 1;  var start_from  = 1;  var end_at  = 1;  var aya_start   = 1;   // generate surah tajweed
        //var ctask = 4; var $block = 1;  var start_from  = 1;  var end_at  = 1;  var aya_start   = 1;   // generate each surah tajweed
        var ctask = 5; var $block = 1;  var start_from  = 1;  var end_at  = 1;  var aya_start   = 1;   // generate only bangla 
		

        function generateResult(){ 

            

             if($block == 1){  
             /* Block 1 - Generate 1 to X */    
              for(s = start_from; s< end_at; s++){ 
                 ajaxcallStack.push(s); 
              } 

              /* Block 1 - END  */ 

            }
            
            if($block == 2){  
             /* Block 2 - Generate 1 to X -> X:1 to X:Y */   
             
              
              for(s = start_from; s< end_at; s++){ 
                    ast = (s == start_from) ? aya_start : 1;
                    for(i=ast; i<= ayats[s-1];i++){  
                        ajaxcallStack.push(s+':'+i); 
                    }

              }  

              /* Block 2 - END  */ 

            }
            



              recursively_ajax();  

 


        }




            function recursively_ajax()
            {

                        


					    $.ajax({
                            type: "POST",
                            async:false, // set async false to wait for previous response
                            url: 'process_get_page.php',  
                            data: { param1: ajaxcallStack[ajax_call_counter], task : ctask }, // TASK 1: // get image from https://tafsir.app/scans/m-tajweed-orig/2.jpg
                            success: function(data)
                            {
                                $('.loading').hide();
                                //$('.results').html(data);
                                $('.results').append(data);
                                console.log(data); 

								ajax_call_counter ++;
                                if(ajax_call_counter < ajaxcallStack.length){
                                    $('.loading').show();
                                    setTimeout(recursively_ajax, 100) 
                                }

                                 
                            }
                        });  


            }      
            



        

    </script>
</body>
</html>