<?php


include('common.php');
include('simple_html_dom.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);




$task = 3;

if($task == 1){

    // https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_x.json

    for($i=1;$i<115;$i++){
        $url = 'https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_'.$i.'.json';

        $page_name = dirname(__DIR__).'/firebase/public/resources/json/surah/'.  $i .'.json';
        $content = file_get_html($url);

        
        file_put_contents($page_name, $content); 
         


    }

    echo 'DONE';
}

if($task == 2){

    // https://raw.githubusercontent.com/semarketir/quranjson/master/source/tajweed/surah_1.json

    for($i=1;$i<115;$i++){
        $url = 'https://raw.githubusercontent.com/semarketir/quranjson/master/source/tajweed/surah_'.$i.'.json';

        $page_name = dirname(__DIR__).'/firebase/public/resources/json/tajweed/'.  $i .'.json';
        $content = file_get_html($url);

        
        file_put_contents($page_name, $content); 
         


    }

    echo 'DONE';
}




if($task == 3){

    // https://raw.githubusercontent.com/semarketir/quranjson/master/source/tajweed/surah_1.json
    
    $rules = array();

    for($i=1;$i<115;$i++){
        $url = dirname(__DIR__).'/firebase/public/resources/json/tajweed/'.  $i .'.json'; 
        
        $content = file_get_contents($url); 
         
        $json_array = json_decode(  $content , true);

        
        foreach($json_array['verse'] as $val){
            foreach($val as $v){
               if(!in_array($v['rule'], $rules))
               $rules[] = $v['rule'];

            }
        } 
    }

    myDump($rules);

    echo 'DONE';


    /*


   hamzat_wasl
   lam_shamsiyyah
   madd_2
   madd_246
   madd_6
   idghaam_no_ghunnah
   silent
   ghunnah
   qalqalah
   ikhfa
    madd_munfasil
    madd_muttasil
    idghaam_ghunnah
    ikhfa_shafawi
    idghaam_shafawi
    iqlab
    idghaam_mutajanisayn
    idghaam_mutaqaribayn


    */


}