<?php 
 
include('common.php');
include('simple_html_dom.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


 $param1  = $surah = isset($_POST['param1']) ? (int)trim($_POST['param1']) : '';
 $param2  = $ayah  = isset($_POST['param2']) ? (int)trim($_POST['param2']) : '';
 $task    = (int)trim($_POST['task']);

 if($task == 1){
    //$url = 'https://tafsir.app/scans/m-tajweed-orig/'.$param1.'.jpg';
    //$url = 'https://tafsir.app/scans/m-tajweed/'.$param1.'.png';
    $url = 'https://tafsir.app/scans/m-t-warsh-alazraq/'.$param1.'.jpg';
    //$filename = dirname(__DIR__).'/firebase/public/resources/images/tajweed_quran_v2/'.$param1.'.jpg';
    //file_put_contents($filename, file_get_contents($url));
    //echo 'TASK: '. $task. ':'. $param1. ':'. $param2 . '<br />';
    echo $url.'<br/ >';
 }


 if($task == 2){
   $filename = dirname(__DIR__). '/firebase/public/partials/quran/raw_full_tajweed_html.html';
   $html               = file_get_html($filename);
   $pages         = $html->find('div.page'); 
   foreach($pages as $page){
      $page_id = $page->id;

      $page_name = dirname(__DIR__).'/firebase/public/partials/quran/tajweed/'.$page_id.'.html';
      file_put_contents($page_name, $page->innertext);  

   }

   echo 'DONE';
}



if($task == 3){
   $filename = dirname(__DIR__). '/firebase/public/partials/quran/raw_full_tajweed_html.html';
   $html               = file_get_html($filename);
   $pages         = $html->find('div.page'); 
 
   $surah_html  = ''; 
    

   foreach($pages as $page){
        
               $surah_html  .=  $page->innertext;
      
   } 
   $filename = dirname(__DIR__). '/firebase/public/partials/quran/raw_full_tajweed_raw.html';
   file_put_contents($filename, $surah_html);

   echo 'DONE';
}


 

if($task == 4){
   $filename = dirname(__DIR__). '/firebase/public/partials/quran/raw_full_tajweed_raw.html';
   $html               = file_get_html($filename);
   $pages              = $html->find('div'); 
   
   $surah = 0;
   $surah_html  = ''; 
   $surah_title = '';
    

   foreach($pages as $page){
      if($page->class == 'surah-name'){ 
         $page_name = dirname(__DIR__).'/firebase/public/partials/quran/surah_tajweed/'.  $surah .'.html';
         file_put_contents($page_name, '<div class="surah-name">'. $surah_title .'</div><div class="line">' . $surah_html. '</div>'); 
         $surah_title = $page->innertext;
         $surah++; 
         $surah_html = '';

      }
      if($page->class == 'line'){ 
         $surah_html .= $page->innertext;
      } 



   } 

   echo 'DONE';
}


 

  

if($task == 5){
   
   $surahs = ["আল ফাতিহা","আল বাকারা","আল ইমরান","আন নিসা","আল মায়িদাহ","আল আনআম","আল আরাফ","আল আনফাল","আত-তাওবাহ্‌","ইউনুস","হুদ","ইউসুফ","আর-রাদ","ইব্রাহীম","আল হিজর","আন নাহল","বনী-ইসরাঈল","আল কাহফ","মারইয়াম","ত্বোয়া-হা","আল আম্বিয়া","আল হাজ্জ্ব","আল মু'মিনূন","আন নূর","আল ফুরকান","আশ শুআরা","আন নম্‌ল","আল কাসাস","আল আনকাবূত","আর রুম","লোক্‌মান","আস সেজদাহ্","আল আহ্‌যাব","সাবা","ফাতির","ইয়াসীন","আস ছাফ্‌ফাত","ছোয়াদ","আয্‌-যুমার","আল মু'মিন","হা-মীম সেজদাহ্‌","আশ্‌-শূরা","আয্‌-যুখরুফ","আদ-দোখান","আল জাসিয়াহ","আল আহ্‌ক্বাফ","মুহাম্মদ","আল ফাত্‌হ","আল হুজুরাত","ক্বাফ","আয-যারিয়াত","আত্ব তূর","আন-নাজম","আল ক্বামার","আর রাহমান","আল-ওয়াকিয়াহ","আল-হাদীদ","আল-মুজাদালাহ","আল-হাশর","আল-মুমতাহিনাহ","আস-সাফ","আল-জুমুআ","আল-মুনাফিকুন","আত-তাগাবুন","আত-তালাক","আত-তাহরীম","আল-মুলক","আল-কলম","আল-হাক্কাহ","আল-মাআরিজ","নূহ","আল জ্বিন","আল মুজাম্মিল","আল মুদ্দাস্সির","আল-ক্বিয়ামাহ","আদ-দাহর","আল-মুরসালাত","আন নাবা","আন নাযিয়াত","আবাসা","আত-তাকভীর","আল-ইনফিতার","আত মুত্বাফ্‌ফিফীন","আল ইন‌শিকাক","আল-বুরুজ","আত-তারিক্ব","আল আ'লা","আল গাশিয়াহ্‌","আল ফাজ্‌র","আল বালাদ","আশ-শাম্‌স","আল লাইল","আদ-দুহা","আল ইনশিরাহ","ত্বীন","আলাক্ব","ক্বদর","বাইয়্যিনাহ","যিলযাল","আল-আদিয়াত","ক্বারিয়াহ","তাকাসুর","আছর","হুমাযাহ","ফীল","কুরাইশ","মাউন","কাওসার","কাফিরুন","নাসর","লাহাব","আল-ইখলাস","আল-ফালাক","আন-নাস"];

   $db = new SQLite3('databases/AnalyzeQuran.db', SQLITE3_OPEN_READWRITE);

   for($i=1;$i<115;$i++){ 
          
         $results = $db->query("SELECT VerseBnMuhiuddinKhan FROM Verses where ChapterId = $i order by VerseId asc");
         $a = 1; 
         $surah_html = '';
         while($row = $results->fetchArray()){ 
            $surah_html .= "(". BanglaConverter::en2bn($a++). "):".$row['VerseBnMuhiuddinKhan']."<br />";
         }


         $page_name = dirname(__DIR__).'/firebase/public/partials/quran/onlybangla/'.  $i .'.html';
         $surah_title = $surahs[$i-1]; 
         file_put_contents($page_name, '<div class="surah-name">সূরা : '. $surah_title .'</div><div class="line">' . $surah_html. '</div>'); 
          
 

   } 

   echo 'DONE~~~';
}


 

  