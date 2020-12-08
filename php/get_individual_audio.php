<?php 
include('simple_html_dom.php');


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// http://api.quranmazid.com/api/bn/view/sura/70/from/1/to/1/author/2

$surah  = isset($_REQUEST['surah']) ? $_REQUEST['surah'] : '';
echo 'surah' . $surah . '<br />';
 
$url = 'http://api.quranmazid.com/api/bn/view/sura/'. $surah. '/from/1/to/286/author/2';

  
$curl = curl_init();
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_REFERER, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
$str = curl_exec($curl);
curl_close($curl);
// Create a DOM object
$html = new simple_html_dom();
// Load HTML from a string
$html->load($str);


$result = json_decode($html); 
  
foreach($result->data->ayats as $k => $ayah){
     


     $fayah = $ayah->verse_id;
     $path = dirname(__DIR__)."/php/quran/$surah";
     $filename =  $path  ."/".$fayah."_ayat.html"; 
    

     $html               = file_get_html($filename);
     $totalblock         = $html->find('span[lang=ar]'); 
     $file_blcok         = (sizeof($totalblock));

    if($file_blcok == sizeof($ayah->bywords)){

        foreach($ayah->bywords as $wk => $wval){ 
            $elmnt = $html->find('span[lang=ar]')[$wk];
            $elmnt->setAttribute('data-audio', $wval->audio_url);  
        }

        $newhtml = $html->save();

        $cfile = fopen($filename , "w") or die("Unable to open file!");
        fwrite($cfile, $newhtml);
        fclose($cfile); 


        //echo 'A: '. $ayah->verse_id  . '- OK - <br />';

    }else{
        echo $surah.':'.$ayah->verse_id.' ~ NOT Match <br />';
    }






} 
 