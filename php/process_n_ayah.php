<?php  
  

include('simple_html_dom.php');


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
 

$pageno    = isset($_POST['pageno']) ? $_POST['pageno'] : ''; 
/*

$html               = file_get_html($url);
$allhtml            = $html->find('div[class=inner clearfix]', 0)->innertext; 
$quranAyat          = $html->find('div[class=quran-container]', 0)->innertext; 
$translation        = $html->find('div[class=translation]', 0)->innertext; 
$tafseer            = $html->find('div[class=translation-wrapper]', 0)->innertext; 
 

$path = dirname(__DIR__)."/php/quran/$surano";
$filename =  $path  ."/".$ayatno.".html"; 
$cfile = fopen($filename , "w") or die("Unable to open file!");
fwrite($cfile, $allhtml);
fclose($cfile); 

$cfile = fopen($path  ."/".$ayatno."_ayat.html", "w") or die("Unable to open file!");
fwrite($cfile, $quranAyat);
fclose($cfile); 

$cfile = fopen($path  ."/".$ayatno."_translation.html", "w") or die("Unable to open file!");
fwrite($cfile, $translation);
fclose($cfile); 

$cfile = fopen($path  ."/".$ayatno."_tafseer.html", "w") or die("Unable to open file!");
fwrite($cfile, $tafseer);
fclose($cfile); 
 

//var_dump($_POST);
//var_dump($allhtml);
echo $url;

*/



$url                = 'http://www.recitequran.com/ajx_load.php?WBW=english&ColorText=1&Translations=VEnglish&nid='.$pageno;

$curl = curl_init();
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_REFERER, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
$str = curl_exec($curl);
curl_close($curl); 
 
$crop               = substr($str, 1, strlen($str) - 3 );
   
$json = json_decode($crop, true);

//echo $url;

foreach($json['Verses'] as $k => $verse){ 
 
         
    preg_match_all('/<div[^>]+s=([\'"])(?<s>.+?)\1[^>]*>/i', $verse, $sresult);
    preg_match_all('/<div[^>]+a=([\'"])(?<a>.+?)\1[^>]*>/i', $verse, $aresult);
    
    $surano = $sresult['s'][0];
    $ayatno  = $aresult['a'][0];
    //echo ':Ayah: '. var_export(, true);
     

    $path = dirname(__DIR__)."/firebase/public/resources/tajweed/";
    $filename =  $path  .$surano."_".$ayatno.".html"; 
    $cfile = fopen($filename , "w") or die("Unable to open file!");
    fwrite($cfile, preg_replace('/<span[^>]+\>/i', '', $verse));
    fclose($cfile); 

    echo $pageno.':'.$surano.':'.$ayatno . '<br />'; 
    

}



?>