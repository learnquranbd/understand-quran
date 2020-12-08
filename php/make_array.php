<!DOCTYPE html>
<html lang="en">


<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Array Generate</title>
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
								<h3>Forms</h3>
							</div>
							<div class="module-body">

									 

									<form class="form-horizontal row-fluid">

                                    <div class="alert alert-success">
										<button type="button" class="close" data-dismiss="alert">×</button>
										select en,  LENGTH(Verses) as clength, Verses from quranindex ORDER BY clength DESC;
									</div>
									

									


                                       <pre id="totalfound"></pre>
                                        
 
										<div class="control-group">
											<label class="control-label" for="basicinput">Intro HTML</label>
											<div class="controls">
												<textarea type="textarea" class="span8" rows="5" id="introhtml">TestTest</textarea>
											</div>
										</div>



										<div class="control-group">
											<label class="control-label" for="basicinput">Subject Line</label>
											<div class="controls">
												<input type="text" id="subject" placeholder="" class="span8" value="Test">
												<span class="help-inline">Topic Title</span>
											</div>
										</div>

										<div class="control-group">
											<label class="control-label" for="basicinput">Arabic Subject Line</label>
											<div class="controls">
												<input type="text" id="arabicsubject" placeholder="" class="span8" value="Test">
												<span class="help-inline">Topic Title</span>
											</div>
										</div>
 

										<div class="control-group">
											<label class="control-label" for="ayahval">Quranic JS String</label>
											<div class="controls">
												<input type="text" id="ayahval" placeholder="2:255, 3:190-200" class="span8" value="3:193, 3:198, 76:5, 82:13, 83:18, 83:19, 83:20, 83:21, 83:22-25">
												<span class="help-inline">x:y,z:a-b</span>
											</div>
										</div>
 
 
										<div class="control-group">
											<div class="controls">
												<button type="button" class="btn" onClick="generateArray()">Generate & Copy</button>
											</div>
										</div>

										<br /> <br /> 


										<pre id="generatedcode" style="display:none">
<?php $base_html = '

<div class="row topindexbar">
			<div class="col-md-5 col-sm-12">
				
					<h3 class="text-center arabic cs1">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ</h3>
					<p class="bangla text-center">শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।</p>
				
			</div>
			<div class="col-md-2 col-sm-12 indexcol">
				<button type="button" class="btn btn-block bg-gradient-secondary btn-lg" onClick="openSidebarMenu()"> সূচিপত্র/তালিকা </button>
			</div>
			<div class="col-md-5  col-sm-12">
						<h3 class="text-center arabic cs1"> ##arabicsubject## </h3>
						<p class="bangla text-center">##subject##</p> 
			</div> 
		
		</div>


		<div id="dynamic_wrap">
		<div id="dynamic_heading">

				<div class="card card-default">  
				<div class="card-body">
					<div class="col-12 intro_html"></div> 
				</div> 
				</div>

				<div class="row topic_index">
				

				</div>
		</div>

		<div id="dynamic_content">

		</div>

		</div>
 

		<script>
			
			$(document).ready(function() {
				//openSidebarMenu(); 

				dynamic_data =  ##json## ;
				

					populate_dynamic_view(dynamic_data); 


			});
		</script>';


		echo htmlentities($base_html);
?>
												
									</pre>
									 
                                    
									</form>
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

        function generateArray(){
            var ayah_obj = [];
            var total_ayah = 0;
            var ayahval =   $('#ayahval').val().split(",") ;


            ayahArray = {};
            $.each(ayahval, function(k, v){ 
                val = v.split(":"); 
                ayahArray[val[0].trim()] =  [];
            });

             

            $.each(ayahval, function(k, v){ 
                val = v.split(":"); 

                haveAyaRange = val[1].indexOf("-");
                if(haveAyaRange > 0){
                    ayaRange = val[1].split("-"); 
                    minRange  = parseInt(ayaRange[0].trim());
                    maxRange  = parseInt(ayaRange[1].trim());
                    var i = 0;
                    for(i= minRange; i<= maxRange; i++){ 
                        ayahArray[val[0].trim()].push(parseInt(i)); 
                        total_ayah++; 
                    }
                }else{
                    ayahArray[val[0].trim()].push(parseInt(val[1]));  
                    total_ayah++;
                } 
                
                
			}); 
			

            $.each(ayahArray, function(k, v){
                obj = {
                        "surah": parseInt(k),
                        "ayah":  v 
                };
                ayah_obj.push(obj);
            });



            
 

            var dynamic_data = {
                                    "subject"  : $('#subject').val(),
                                    "introHtml": $('#introhtml').val(),
                                    "ayah": ayah_obj,
                                    "videos": [
                                                  
                                    ],
                                    "articles" : [
                                              
                                    ],
                                    "books": [  
                                             
                                    ]
            };

            
            

      
            $('#generatedcode').html($('#generatedcode').html().replace('##json##', JSON.stringify(dynamic_data, undefined, 20)));
            $('#generatedcode').html($('#generatedcode').html().replace('##subject##', $('#subject').val()));
            $('#generatedcode').html($('#generatedcode').html().replace('##arabicsubject##',  $('#arabicsubject').val()));

			// send to clipboard 
			var el = document.getElementById('generatedcode');
			var range = document.createRange();
			range.selectNodeContents(el);
			var sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range);
			document.execCommand('copy');
			
             
            $('#totalfound').html(JSON.stringify({"Total Ayah": total_ayah}, undefined, 5));
            $('#generatedcode').show();

        }

    </script>
</body>