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


</head>
<body>
 


	<div class="wrapper">
		<div class="container">
			<div class="row">
				 
				<div class="span12">
					<div class="content">

						<div class="module">
							<div class="module-head">
								<h3>Generate Grammer Analysis for Ayah </h3>
							</div>
							<div class="module-body">

									 

									<form class="form-horizontal row-fluid">

                                    <div class="alert alert-success">
										<button type="button" class="close" data-dismiss="alert">Ã—</button>
                                        select surah, ayah, count(word) from corpus_bn GROUP BY surah,ayah;
                                        
                                        insert into arabic_words(word) select WordAr from Words where ChapterId < 49

                                        <?php echo $path = dirname(__DIR__);?>
									</div>
									 
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
                                
                                <code>select count(root) as rcount, verb_type, root from verbs_with_six_forms group by root order by rcount desc </code>

                                    
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


/*
              start_from = 3;
              ayah_strat  = 126;
              surah_ayah_to_call.push(start_from+':'+ayah_strat); 
              */

              
              start_from = 58;
              end_at     = 115;
              aya_start = 1;
              for(s = start_from; s< end_at; s++){ 
                    ast = (s == start_from) ? aya_start : 1;
                    for(i=ast; i<= ayats[s-1];i++){  
                        surah_ayah_to_call.push(s+':'+i); 
                    }

              } 
              

              recursively_ajax();  

 


        }




            function recursively_ajax()
            {

                        csura_ayah = surah_ayah_to_call[ajax_call_counter].split(':');
                        console.log(csura_ayah);

					    $.ajax({
                            type: "POST",
                            async:false, // set async false to wait for previous response
                            url: 'process_new_arabic_word.php', 
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
                                }else{
                                    console.log("AJAX CALLING : ALL DONE ");
                                }

                                 
                            }
                        });  


            }      
            



        

    </script>


    <script src="js/jquery.min.js"></script> 
    <script src="js/bootstrap.bundle.min.js"></script> 
    <script src="js/adminlte.min.js"></script> 


</body>