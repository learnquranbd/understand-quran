<?php  

include('common.php');
include('simple_html_dom.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


 $surah = (int)trim($_POST['surah']);
 $ayah  = (int)trim($_POST['ayah']);
 $task  = (int)trim($_POST['task']);

 $img = '';

 if($task == 1){
      $token = 1;
      $array_val =  get_html_from_url($surah, $ayah, $token, array());
      $surah_ayah_html = '';
      foreach($array_val as $k=>$val){
        $surah_ayah_html .=  '<div class="'.$k.' text-center">'.$val.'</div><br /><hr /><br />';
      } 
 

      $filename = dirname(__DIR__).'/firebase/public/resources/irab/'.$surah.'_'.$ayah.'.html';
      file_put_contents($filename, $surah_ayah_html);
      echo $surah. ':'. $ayah. '<br />';

       
 }


 if($task == 2){
    
        $url = 'http://corpus.quran.com/graphimage?id='.$surah; 
        $img = dirname(__DIR__).'/firebase/public/resources/irab/images/'.$surah.'.png';
        file_put_contents($img, file_get_contents($url)); 
    
    echo $surah. "DONE <br />";
 }
 


 function get_html_from_url($surah, $ayah, $token, $old_html){
     $return = $old_html;

     $html = file_get_html('http://corpus.quran.com/treebank.jsp?chapter='.$surah.'&verse='.$ayah.'&token='.$token);
     $table_html = '<table class="morphologyTable text-right">';
     $morphologyTable = $html->find('.morphologyTable tr');
     foreach($morphologyTable as $k => $v){
        $table_html .= '<tr><td>'. $v->find('td')[2]->innertext .'</td></tr>';
     }

     $table_html .= '</table>';

     ////////////////////////////////
     $graph_style     = $html->find('div.graph')[0]->style;

     $graph_style2 = substr($graph_style, strpos($graph_style, "background: url('/"));
     $img = str_replace(array("') no-repeat 0 0;", "background: url('/graphimage?id=",), '', $graph_style2);
      
 
     $return[$surah.$ayah.$token] = '<div class="row"><div class="col-md-6"><img style="min-width:80%" class="img-fluid" src="/resources/irab/images/'.$img.'.png" alt="" /></div><div class="col-md-6">' . $table_html . '</div></div>';

     //echo '<img src="'.$img.'" alt="" />'; 


     $nav_pane = $html->find('.navigationPane a');
     foreach($nav_pane as $k => $nav){
        
            $tokenposStart = strpos($nav->href, '?chapter='.$surah.'&verse='.$ayah);
                
                if($tokenposStart !== FALSE){
                    $nextToken = substr($nav->href, $tokenposStart + strlen('?chapter='.$surah.'&verse='.$ayah));
                    
                    $nextTokenC = str_replace(array('&token='), '', $nextToken);  
                   
                    if($nextTokenC > $token && !isset($return[$surah.$ayah.$nextTokenC])){ 
                        $return =  get_html_from_url($surah, $ayah, $nextTokenC, $return);
                    }
                    
                } 
           
     }
    
     return $return; 
 }