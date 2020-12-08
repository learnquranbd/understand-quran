<?php 
  
include('common.php');
include('simple_html_dom.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


 $surah = (int)trim($_POST['surah']);
 $ayah  = (int)trim($_POST['ayah']); 
 $task  = (int)trim($_POST['task']);
 
 $surah_links = array(     
              "/quran/surah-al-fatihah",
              "/quran/surah-al-baqarah",
              "/quran/surah-al-imran",
              "/quran/surah-an-nisa",
              "/quran/surah-al-maidah",
              "/quran/surah-al-anam",
              "/quran/surah-al-araf",
              "/quran/surah-al-anfal",
              "/quran/surah-al-taubah",
              "/quran/surah-yunus",
              "/quran/surah-hud",
              "/quran/surah-yusf",
              "/quran/surah-ar-rad",
              "/quran/surah-ibrahim",
              "/quran/surah-al-hijr",
              "/quran/surah-an-nahl",
              "/quran/surah-al-isra",
              "/quran/surah-al-kahf",
              "/quran/surah-maryam",
              "/quran/surah-taha",
              "/quran/surah-al-anbiya",
              "/quran/surah-al-hajj",
              "/quran/surah-al-muminun",
              "/quran/surah-an-nur",
              "/quran/surah-al-furqan",
              "/quran/surah-ash-shuara",
              "/quran/surah-an-naml",
              "/quran/surah-al-qasas",
              "/quran/surah-al-ankabut",
              "/quran/surah-ar-rum",
              "/quran/surah-luqman",
              "/quran/surah-as-sajdah",
              "/quran/surah-al-ahzab",
              "/quran/surah-saba",
              "/quran/surah-fatir",
              "/quran/surah-yasin",
              "/quran/surah-as-saffat",
              "/quran/surah-sad",
              "/quran/surah-az-zumar",
              "/quran/surah-ghafir",
              "/quran/surah-fussilat",
              "/quran/surah-ash-shura",
              "/quran/surah-az-zukhruf",
              "/quran/surah-ad-dukhan",
              "/quran/surah-al-jasia",
              "/quran/surah-al-ahqaf",
              "/quran/surah-muhammad",
              "/quran/surah-al-fath",
              "/quran/surah-al-hujurat",
              "/quran/surah-qaf",
              "/quran/surah-az-zariyat",
              "/quran/surah-at-tur",
              "/quran/surah-an-najm",
              "/quran/surah-al-qamar",
              "/quran/surah-ar-rahman",
              "/quran/surah-al-waqiah",
              "/quran/surah-al-hadid",
              "/quran/surah-al-mujadilah",
              "/quran/surah-al-hashr",
              "/quran/surah-al-mumtahinah",
              "/quran/surah-as-saff",
              "/quran/surah-al-jumuah",
              "/quran/surah-al-munafiqun",
              "/quran/surah-at-taghabun",
              "/quran/surah-at-talaq",
              "/quran/surah-at-tahrim",
              "/quran/surah-al-mulk",
              "/quran/surah-al-qalam",
              "/quran/surah-al-haqqah",
              "/quran/surah-al-maarij",
              "/quran/surah-nuh",
              "/quran/surah-al-jin",
              "/quran/surah-al-muzzammil",
              "/quran/surah-al-mudassir",
              "/quran/surah-al-qiyamah",
              "/quran/surah-ad-dahr",
              "/quran/surah-al-mursalat",
              "/quran/surah-an-naba",
              "/quran/surah-an-naziat",
              "/quran/surah-abasa",
              "/quran/surah-at-takwir",
              "/quran/surah-al-infitar",
              "/quran/surah-al-mutaffifin",
              "/quran/surah-al-inshiqaq",
              "/quran/surah-al-buruj",
              "/quran/surah-at-tariq",
              "/quran/surah-al-ala",
              "/quran/surah-al-ghashiyah",
              "/quran/surah-al-fajr",
              "/quran/surah-al-balad",
              "/quran/surah-ash-shams",
              "/quran/surah-al-lail",
              "/quran/surah-ad-duha",
              "/quran/surah-alam-nashrah",
              "/quran/surah-at-tin",
              "/quran/surah-al-alaq",
              "/quran/surah-al-qadr",
              "/quran/surah-al-baiyinah",
              "/quran/surah-az-zilzal",
              "/quran/surah-al-adiyat",
              "/quran/surah-al-qariah",
              "/quran/surah-at-takasur",
              "/quran/surah-al-asr",
              "/quran/surah-al-humazah",
              "/quran/surah-al-fil",
              "/quran/surah-quraish",
              "/quran/surah-al-maun",
              "/quran/surah-al-kausar",
              "/quran/surah-al-kafiroon",
              "/quran/surah-an-nasr",
              "/quran/surah-al-lahab",
              "/quran/surah-al-ikhlas",
              "/quran/surah-al-falaq",
              "/quran/surah-an-nas"
    );
  

 $db = new SQLite3('databases/corpus.db', SQLITE3_OPEN_READWRITE);
 if($task == 1){ 
             /*$results = $db->query("SELECT count(bn) as tblock FROM corpus_bn where surah = $surah AND ayah = $ayah");
             
             $totalDBrows =  $results->fetchArray();
             $totalDBrow = isset($totalDBrows[0]) ? $totalDBrows[0]: 0;
             
 
 
             $path = dirname(__DIR__)."/php/quran/$surah";
             $filename =  $path  ."/".$ayah."_ayat.html"; 
             
 
             $html               = file_get_html($filename);
             $totalblock         = $html->find('span[lang=ar]'); 
             $file_blcok         = (sizeof($totalblock));
 
             if($file_blcok == $totalDBrow){
             
                 foreach($totalblock as $key=> $val)
                 {
                     $update_sql = "UPDATE corpus_bn SET arabic = '".$val->innertext."' WHERE surah = $surah and ayah = $ayah and word =  ". ($key+1); 
                     $q = $db->exec($update_sql);  
                 }
                 echo  $surah. ':'. $ayah .' - OK - ';
 
             }else{
                 
                 echo '<h4>'. $surah. ':'. $ayah .' - Block does not match</h4>';
 
             }

             */

            $base_url = 'https://www.dawateislami.net';
            $newhtml  = file_get_html($base_url. $surah_links[$surah - 1].'/ayat-'.$ayah);

            $new_ayah = $newhtml->find('#araayat span.variable_font')[0]->innertext;
            $new_ayah = str_replace("-", " ", $new_ayah);

            $new_a    = strpos($new_ayah, ')');  
            $new_b    = strpos($new_ayah, '(');
            

            $only_arabic = substr($new_ayah, 0, $new_b);
            

            $new_ayah_parts = array_diff(explode(" ", $only_arabic), array(""));

             
             //echo $new_ayah. '<hr /> <pre>'. var_dump($new_ayah_parts).'</pre><br />';

             $results = $db->query("SELECT count(bn) as tblock FROM corpus_bn_w_count where surah = $surah AND ayah = $ayah");
             
             $totalDBrows =  $results->fetchArray();
             $totalDBrow = isset($totalDBrows[0]) ? $totalDBrows[0]: 0; 

             if(sizeof($new_ayah_parts) != $totalDBrow){
                echo $surah.':'.$ayah.': BDM<br />';           // Block Does not match       
             }else{
                foreach($new_ayah_parts as $k => $val){

                    $update_sql = "UPDATE corpus_bn_w_count SET narabic = '". $val ."' WHERE surah = $surah and ayah = $ayah and word =  ". ($k+1); 
                    $q = $db->exec($update_sql); 
                } 

                echo 'S'.$surah.'--A--'.$ayah. '<br />';

             }


             $path = dirname(__DIR__)."/firebase/public/resources/verses/";
             $filename =   $path.$surah.'_'.$ayah.".html"; 
             $cfile = fopen($filename , "w") or die("Unable to open file!");
             fwrite($cfile, $only_arabic);
             fclose($cfile); 


             


 



 } 


 