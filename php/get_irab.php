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

table.morphologyTable {
	width: 100%;
	border-top: 1px solid black;
}

table.morphologyTable td {
	font: 0.833em Arial;
	border-bottom: 1px dashed rgb(180, 180, 180);
	height: 2em;
	line-height: 1.6em;
	text-align: center;
	padding-left: 0.5em;
	padding-right: 0.5em;
}

table.morphologyTable tr.head td {
	font-weight: bold;
	background: rgb(244, 255, 229);
	border-bottom: 1px solid black;
}

table.morphologyTable td.head3 {
	text-align: right;
}

table.morphologyTable td.col3 {
	text-align: right;
	padding-top: 1em;
	padding-bottom: 1em;
}

table.morphologyTable td.ic {
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	white-space: nowrap;
}

table.morphologyTable td.ic img.sec {
	margin-bottom: 47px;
	margin-left: 2px;
}

table.morphologyTable td.ic img.num {
	margin-bottom: 47px;
	margin-right: 2px;
}

table.morphologyTable td.ic img.saj {
	margin-bottom: 52px;
	margin-right: 2px;
}

table.morphologyTable td.ic a img {
	border: 1px solid white;
	padding: 0.5em;
}

table.morphologyTable td.ic a:hover img {
	border: 1px solid blue;
	background: rgb(234, 245, 255);
}

table.morphologyTable div.arabicGrammar {
	font-family: "Traditional Arabic", Scheherazade, "Times New Roman";
	color: rgb(50, 150, 50);
	font-size: 1.4em;
	font-weight: bold;
	margin-top: 0.4em;
	direction: rtl;
}
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
								<h3>Get Irab </h3>
							</div>
							<div class="module-body">

									 

									<form class="form-horizontal row-fluid">

                                    <div class="alert alert-success"> 
                                        http://corpus.quran.com/treebank.jsp?chapter=1&verse=7&token=1
									</div>
									
 

                                       <pre id="totalfound"></pre>
                                      
 
										<div class="control-group">
											<div class="controls">
												<button type="button" class="btn" onClick="generateResult()" style="background:#555; color:#fff;">Generate  </button>
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
            var ayat_numbers            = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6];
            $('#surah').on("change", function(){
                selectd_surah = $(this).find(":selected").val();

                var options = [];


                for (var i = 1; i <= ayat_numbers[selectd_surah-1]; i++) {
                    options.push('<option value="',
                    i, '">',
                    i, '</option>');
                }
                $("#ayah").html(options.join(''));


            });

            $('#surah').val("1");

        });


		var ajax_call_counter = 0; 

		var surah_ayah_to_call = [];
		

        function generateResult(){
            $('.ajaxreturn').html('');

            surah = $('#surah').find(":selected").val();
            ayah  = $('#ayah').find(":selected").val();

			var ayats = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6];
             

            console.log(surah + ':' + ayah);

 

              
              start_from = 59;
              end_at     = 115;
              aya_start = 1; 
              
              for(s = start_from; s< end_at; s++){ 
                    ast = (s == start_from) ? aya_start : 1;
                    for(i=ast; i<= ayats[s-1];i++){  
                        surah_ayah_to_call.push(s+':'+i); 
                    } 
              } 
             
              
              /*
              start_from = 1654;
              end_at     = 1700;
              aya_start = 1;
              for(s = start_from; s< end_at; s++){   
                        surah_ayah_to_call.push(s+':1'); 
                    
              } 
              
              */

              recursively_ajax();  

 


        }




            function recursively_ajax()
            {

                        csura_ayah = surah_ayah_to_call[ajax_call_counter].split(':');


					    $.ajax({
                            type: "POST",
                            async:false, // set async false to wait for previous response
                            url: 'process_get_irab.php', 
                            data: { surah: csura_ayah[0], ayah: csura_ayah[1], task : 1},
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