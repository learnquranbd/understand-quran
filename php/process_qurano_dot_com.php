<?php  

include('simple_html_dom.php');
 
$url    = isset($_POST['url']) ? $_POST['url'] : '';
$surano = isset($_POST['data']['surano']) ? $_POST['data']['surano'] : '';
$ayatno = isset($_POST['data']['ayatno']) ? $_POST['data']['ayatno'] : ''; 
 

/*
$url = 'https://qurano.com/bn/1-al-fatiha/ayah-1/';

$surano = 1;
$ayatno = 1;
*/

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

?>