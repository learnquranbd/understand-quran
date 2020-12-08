<?php 
  
include('simple_html_dom.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


 $surah = (int)trim($_POST['surah']);
 $ayah  = (int)trim($_POST['ayah']);
 $task  = (int)trim($_POST['task']);
  

$db = new SQLite3('databases/islamic.db', SQLITE3_OPEN_READWRITE);

// TASK 1: PUT new tafseer to DB 
if($task == 1){ 
               


                $path = dirname(__DIR__)."/php/quran/$surah";
                $filename =  $path  ."/".$ayah."_tafseer.html"; 
                //
                

                $html                = file_get_html($filename);

                $ahsanulBayan           = $html->find('div[id=ahsanul-bayan]')[0]->innertext; 
                $abuBakrZakaria             = $html->find('div[id=abu-bakr-zakaria]')[0]->innertext; 
                $bayanFoundation            = $html->find('div[id=bayan-foundation]')[0]->innertext; 
                $muhiuddinKhan              = $html->find('div[id=muhiuddin-khan]')[0]->innertext; 
                $hoque                      = $html->find('div[id=hoque]')[0]->innertext; 

                
                $tafseer_ahsanulBayan           = SQLite3::escapeString( str_replace('<h3 title="Tafsir Ahsanul Bayaan"><span>1</span> আহসানুল বায়ান | Tafsir Ahsanul Bayaan</h3>', "", $ahsanulBayan)  ) ; 
                $taf_abuBakrZakaria             = SQLite3::escapeString( str_replace('<h3 title="Tafsir Abu Bakr Zakaria"><span>2</span> আবু বকর মুহাম্মাদ যাকারিয়া | Tafsir Abu Bakr Zakaria</h3>', "", $abuBakrZakaria)  ) ; 
                $taf_bayanFoundation            = SQLite3::escapeString( str_replace('<h3 title="Tafsir Bayaan Foundation"><span>3</span> আল-বায়ান ফাউন্ডেশন | Tafsir Bayaan Foundation</h3>', "", $bayanFoundation)  ) ; 
                $taf_muhiuddinKhan              = SQLite3::escapeString( str_replace('<h3 title="Muhiuddin Khan"><span>4</span> মুহিউদ্দীন খান | Muhiuddin Khan</h3>', "", $muhiuddinKhan)  ) ; 
                $taf_hoque                      = SQLite3::escapeString( str_replace('<h3 title="Zohurul Hoque"><span>5</span> জহুরুল হক | Zohurul Hoque</h3>', '', $hoque)  ) ; 

                


                $update_sql = "UPDATE verses SET tafseer_ahsanulBayan = '".$tafseer_ahsanulBayan."', taf_abuBakrZakaria='".$taf_abuBakrZakaria."', taf_bayanFoundation='".$taf_bayanFoundation."',taf_muhiuddinKhan='".$taf_muhiuddinKhan."',taf_hoque='".$taf_hoque."' WHERE chapter = $surah and verse = $ayah"; 
                $q = $db->exec($update_sql);  
                

}



// TASK 2: GENERATE TAFSEER FILE AGAIN 
if($task == 2){

$tafseer_index     = array(
                            'তাফসীর ইবনে কাসির', 
                            'তাফসীর আবু বকর জাকারিয়া', 
                            'তাফসীর ফাতহুল মাজীদ', 
                            'আহসানুল বায়ান', 
                            'আল-বায়ান ফাউন্ডেশন', 
                            'মুহিউদ্দীন খান', 
                            'জহুরুল হক'
                          );

$tafseer_index_db  = array(
                            'kaseer_bn',
                            'taf_abuBakrZakaria',
                            'fmazid',
                            'tafseer_ahsanulBayan',
                            'taf_bayanFoundation',
                            'taf_muhiuddinKhan',
                            'taf_hoque'
                        );


$panel_group_html = '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">';




    $path = dirname(__DIR__)."/php/quran/$surah";
    
    $results = $db->query("SELECT tafseer_ahsanulBayan, taf_abuBakrZakaria, taf_bayanFoundation, taf_muhiuddinKhan, taf_hoque, kaseer_bn, fmazid FROM verses where chapter = $surah AND verse = $ayah");
    
     

    while ($row = $results->fetchArray()) {

         foreach($tafseer_index as $key => $val){  
                $panel_id_postfix = $surah.'_'.$ayah.'_'.$key;

                $panel_group_html  .= '<div class="panel panel-default">'; 
                $panel_group_html  .= '<div class="panel-heading" role="tab" id="heading_'.$panel_id_postfix .'">'; 
                $panel_group_html  .= '<h4 class="panel-title">'; 
                $panel_group_html  .= '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_'.$panel_id_postfix .'" aria-expanded="true" aria-controls="collapse_'.$panel_id_postfix .'">'; 
                $panel_group_html  .= '<i class="more-less fa fa-plus"></i>'; 
                $panel_group_html  .= $val; 
                $panel_group_html  .= '</a>'; 
                $panel_group_html  .= '</h4>'; 
                $panel_group_html  .= '</div>'; 
                $panel_group_html  .= '<div id="collapse_'.$panel_id_postfix .'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_'.$panel_id_postfix .'">'; 
                $panel_group_html  .= '<div class="panel-body">'; 
                
                $panel_group_html  .= '<div class="tafseer_content">'. nl2br($row[$tafseer_index_db[$key]]) .'</div>'; ; 

                $panel_group_html  .= '</div>'; 
                $panel_group_html  .= '</div>'; 
                $panel_group_html  .= '</div>'; 
         }



    }
    



$panel_group_html  .= '</div>';




     
    $cfile = fopen($path  ."/".$ayah."_tafseer.html", "w") or die("Unable to open file!");
    fwrite($cfile, $panel_group_html);
    fclose($cfile);
    
   

    
    // echo $panel_group_html; 
}






// // TASK 3: GENERATE - Meaning with Uccharon(Translanguage)
if($task == 3){
    $path = dirname(__DIR__)."/php/quran/$surah";
    
    $results = $db->query("SELECT taisirul, transliteration FROM verses where chapter = $surah AND verse = $ayah");
    
    $translation = '';

    while ($row = $results->fetchArray()) {
        $translation = '<div class="transliteration">'. $row['transliteration'].'</div><div class="taisirul"><p>'.$row['taisirul'].'</p></div>';
    }
    


    if(!empty($translation)){ 
            $cfile = fopen($path  ."/".$ayah."_translation.html", "w") or die("Unable to open file!");
            fwrite($cfile, $translation);
            fclose($cfile);
    }

     

}



// // TASK 4: Regenerate single Ayah file 
if($task == 4){ 
    
      $path   = dirname(__DIR__)."/php/quran/$surah";
  

       unlink($path  ."/".$ayah.".html");    
} 
echo  $surah. ':'. $ayah .' - OK - ';

