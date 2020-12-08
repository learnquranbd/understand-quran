<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get From Qurano.com</title>

    <script src="js/jquery.min.js"></script>
    <style>
        .action{
            padding: 10px; margin: 20px;
        }
        </style>

    <script>


            var ajax_call_counter = 0; 

            var url_to_call = [];
            var url_data_to_call = []; 


            function recursively_ajax()
            {

                    

                     $.ajax({
                            type: "POST",
                            async:false, // set async false to wait for previous response
                            url: 'process_qurano_dot_com.php', 
                            data: { url: url_to_call[ajax_call_counter] , data:  url_data_to_call[ajax_call_counter]},
                            success: function(data)
                            {
                                $('.loading').hide();
                                $('.ajaxreturn').append('<li><a href="' + url_to_call[ajax_call_counter] + '">' + url_to_call[ajax_call_counter] + ' </a></li>');
                                console.log(data);

                                ajax_call_counter ++;
                                if(ajax_call_counter < url_to_call.length){
                                    $('.loading').show();
                                    setTimeout(recursively_ajax, 100) 
                                }
                            }
                        });  

            }      
            





        function do_now(){ 
              //var suras = ["al-fatiha"];//, "al-baqara", "ali-imran", "an-nisa", "al-ma-ida", "al-an-am", "al-a-raf", "al-anfal", "at-tawba", "yunus", "hud", "yusuf", "ar-ra-d", "ibrahim", "al-hijr", "an-nahl", "al-isra", "al-kahf", "maryam", "ta-ha", "al-anbiya", "al-hajj", "al-mu-minoon", "an-nur", "al-furqan", "ash-shu-ara", "an-naml", "al-qasas", "al-ankabut", "ar-rum", "luqman", "as-sajda", "al-ahzab", "saba", "fatir", "ya-seen", "as-saffat", "sad", "az-zumar", "al-mu-min", "fussilat", "ash-shura", "az-zukhruf", "ad-dukhan", "al-jathiya", "al-ahqaf", "muhammad", "al-fath", "al-hujurat", "qaf", "adh-dhariyat", "at-tur", "an-najm", "al-qamar", "ar-rahman", "al-waqi-a", "al-hadid", "al-mujadila", "al-hashr", "al-mumtahina", "as-saff", "al-jumu-a", "al-munafiqun", "at-taghabun", "at-talaq", "at-tahrim", "al-mulk", "al-qalam", "al-haqqa", "al-ma-arij", "nuh", "al-jinn", "al-muzzammil", "al-muddathir", "al-qiyama", "al-insan", "al-mursalat", "an-naba", "an-nazi-at", "abasa", "at-takwir", "al-infitar", "al-mutaffifeen", "al-inshiqaq", "al-burooj", "at-tariq", "al-a-la", "al-ghashiya", "al-fajr", "al-balad", "ash-shams", "al-lail", "ad-dhuha", "el-inshirah", "at-teen", "al-alaq", "al-qadr", "al-bayyina", "az-zalzala", "al-adiyat", "al-qari-a", "at-takathur", "al-asr", "al-humaza", "al-feel", "quraysh", "al-ma-oon", "al-kawthar", "al-kafiroon", "an-nasr", "al-lahab", "al-ikhlas", "al-falaq", "an-nas"];
              var suras = ["al-fatiha", "al-baqara", "ali-imran", "an-nisa", "al-ma-ida", "al-an-am", "al-a-raf", "al-anfal", "at-tawba", "yunus", "hud", "yusuf", "ar-ra-d", "ibrahim", "al-hijr", "an-nahl", "al-isra", "al-kahf", "maryam", "ta-ha", "al-anbiya", "al-hajj", "al-mu-minoon", "an-nur", "al-furqan", "ash-shu-ara", "an-naml", "al-qasas", "al-ankabut", "ar-rum", "luqman", "as-sajda", "al-ahzab", "saba", "fatir", "ya-seen", "as-saffat", "sad", "az-zumar", "al-mu-min", "fussilat", "ash-shura", "az-zukhruf", "ad-dukhan", "al-jathiya", "al-ahqaf", "muhammad", "al-fath", "al-hujurat", "qaf", "adh-dhariyat", "at-tur", "an-najm", "al-qamar", "ar-rahman", "al-waqi-a", "al-hadid", "al-mujadila", "al-hashr", "al-mumtahina", "as-saff", "al-jumu-a", "al-munafiqun", "at-taghabun", "at-talaq", "at-tahrim", "al-mulk", "al-qalam", "al-haqqa", "al-ma-arij", "nuh", "al-jinn", "al-muzzammil", "al-muddathir", "al-qiyama", "al-insan", "al-mursalat", "an-naba", "an-nazi-at", "abasa", "at-takwir", "al-infitar", "al-mutaffifeen", "al-inshiqaq", "al-burooj", "at-tariq", "al-a-la", "al-ghashiya", "al-fajr", "al-balad", "ash-shams", "al-lail", "ad-dhuha", "el-inshirah", "at-teen", "al-alaq", "al-qadr", "al-bayyina", "az-zalzala", "al-adiyat", "al-qari-a", "at-takathur", "al-asr", "al-humaza", "al-feel", "quraysh", "al-ma-oon", "al-kawthar", "al-kafiroon", "an-nasr", "al-lahab", "al-ikhlas", "al-falaq", "an-nas"];
              var ayats = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6];
             
              start_from = 38;
              $.each(suras, function(key, val){ 
                  if(key > start_from){ 
                    for(i=0; i< ayats[key];i++){
                        var sura =  (key + 1);
                        var ayat = i + 1;
                        url = 'https://qurano.com/bn/'+ sura + '-' + val + '/ayah-' + ayat + '/';
                        url_to_call.push(url);
                        url_data_to_call.push({ url: url, surano: sura, ayatno : ayat }); 
                    }
                    }
              });


              recursively_ajax();  

 
            }



        $(document).ready(function () {
            $('.loading').hide();
            
        });
        
    </script>
</head>
<body>
    
    <button onclick="do_now()" class="action">Fetch Now (Store in PHP : qurano.com )</button>
    <img src="images/loading.gif" class="loading" /> 

    <div class="results">
             <ol class="ajaxreturn">
                  
            </ol>
    </div>

</body>
</html>