<?php 
  
include('common.php');
include('simple_html_dom.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


 $surah = (int)trim($_POST['surah']);
 $ayah  = (int)trim($_POST['ayah']);
 $task  = (int)trim($_POST['task']);
 
  

 $db = new SQLite3('databases/corpus.db', SQLITE3_OPEN_READWRITE);
 if($task == 1){ 
             $results = $db->query("SELECT count(bn) as tblock FROM corpus_bn where surah = $surah AND ayah = $ayah");
             
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
 
 }
 
 if($task == 3){  // counting the root repeat 
    $results = $db->query("SELECT count(root_ar) as troot_ar, root_ar FROM corpus_bn_w_count where root_ar != \"\" group by root_ar");
    
    while($row  = $results->fetchArray()){
       $update_sql = "UPDATE corpus_bn_w_count SET root_repeat = '".$row['troot_ar']."' WHERE root_ar = '".$row['root_ar']."'"; 
       $q = $db->exec($update_sql);  
    }

    echo 'DONE';
    

}


if($task == 4){  // counting the lemma repeat 
    $results = $db->query("SELECT count(lemma) as tlemma, lemma FROM corpus_bn_w_count where lemma != \"\" group by lemma");
    
    while($row  = $results->fetchArray()){
       $update_sql = "UPDATE corpus_bn_w_count SET lemma_repeat = '".$row['tlemma']."' WHERE lemma = '".$row['lemma']."'"; 
       $q = $db->exec($update_sql);  
    }

    echo 'DONE';
    

}

if($task == 5){  // generating lemma repeat html block
    $mresults = $db->query("SELECT count(lemma) as tlemma, lemma FROM corpus_bn_w_count where lemma != \"\" group by lemma");

    while($mrow = $mresults->fetchArray()){

        if($mrow['tlemma'] > 3){  
              
            $sresults = $db->query("SELECT surah, ayah, word, arabic, bn FROM  corpus_bn_w_count where lemma = '".$mrow['lemma']."' order by surah, ayah, word"); 
            $surah_ayah_block  = '';
            while($srow = $sresults->fetchArray()){ 
                  $surah_ayah_block  .= '<div class="dynamic_load_saw" id="ldata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word']).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';  
                   
            }

                  $path = dirname(__DIR__)."/firebase/public/resources/repeat/lemma/";
                  $filename =  $path  .md5($mrow['lemma']).".html"; 
                  $cfile = fopen($filename , "w") or die("Unable to open file!");
                  fwrite($cfile, $surah_ayah_block);
                  fclose($cfile); 

        }
        
    }
    
      
    echo 'DONE';
    

}



if($task == 6){  /// generating root_ar repeat html block
  $mresults = $db->query("SELECT count(root_ar) as troot_ar, root_ar FROM corpus_bn_w_count where root_ar != \"\" group by root_ar");

  while($mrow = $mresults->fetchArray()){

      if($mrow['troot_ar'] > 3){  
            
          $sresults = $db->query("SELECT surah, ayah, word, arabic, bn FROM  corpus_bn_w_count where root_ar = '".$mrow['root_ar']."' order by surah, ayah, word"); 
          $surah_ayah_block  = '';
          while($srow = $sresults->fetchArray()){ 
                $surah_ayah_block  .= '<div class="dynamic_load_saw" id="rdata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word']).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';  
                 
          }

                $path = dirname(__DIR__)."/firebase/public/resources/repeat/rootwords/";
                $filename =  $path  .md5($mrow['root_ar']).".html"; 
                $cfile = fopen($filename , "w") or die("Unable to open file!");
                fwrite($cfile, $surah_ayah_block);
                fclose($cfile); 

      }
      
  }
  
    
  echo 'DONE';
  

}




if($task == 7){  /// generating root_ar repeat html block
  $mresults = $db->query("SELECT count(arabic) as tarabic, arabic FROM corpus_bn_w_count where arabic != \"\" group by arabic");

  while($mrow = $mresults->fetchArray()){

      if($mrow['tarabic'] > 3){  
            
          $sresults = $db->query("SELECT surah, ayah, word, arabic, bn FROM  corpus_bn_w_count where arabic = '".$mrow['arabic']."' order by surah, ayah, word"); 
          $surah_ayah_block  = '';
          while($srow = $sresults->fetchArray()){ 
                $surah_ayah_block  .= '<div class="dynamic_load_saw" id="wdata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word']).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';  
                 
          }

                $path = dirname(__DIR__)."/firebase/public/resources/repeat/words/";
                $filename =  $path  .md5($mrow['arabic']).".html"; 
                $cfile = fopen($filename , "w") or die("Unable to open file!");
                fwrite($cfile, $surah_ayah_block);
                fclose($cfile); 

      }
      
  }
    
  echo 'DONE';

}

 

if($task == 8){  // repeat words for lemma generator 
  $mresults = $db->query("SELECT count(lemma) as tlemma, lemma, arabic, bn FROM corpus_bn_w_count where lemma != '' and lemma_repeat > 1 group by lemma  order by lemma_repeat desc");
  
  $surah_ayah_block = '<table id="lemmaRepeatTable" class="table table-striped"><thead>
                              <tr class="bg-info font-weight-bold">
                                <th class="bnf text-right" style="width:160px">আরবি শব্দ</th>
                                <th class="bnf text-left" style="width:190px">বাংলা</th>
                                <th class="bnf text-right" style="width:150px">মৌলিক শব্দ</th> 
                                <th  class="bnf text-center" style="width:90px">পুনরাবৃত্তি  </th> 
                                <th  class="bnf text-center">  স্থান </th>
                              </tr>
                                    </thead>
                      <tbody>';
  $rhead = 1;
  while($mrow = $mresults->fetchArray()){
          if($rhead++ % 5 == 0){
            $surah_ayah_block .= ' 
                                <tr class="bg-info font-weight-bold">
                                    <td class="bnf text-right" style="width:160px">আরবি শব্দ</td>
                                    <td class="bnf text-left" style="width:190px">বাংলা</td>
                                    <td class="bnf text-right" style="width:150px">মৌলিক শব্দ</td> 
                                    <td  class="bnf text-center" style="width:90px">পুনরাবৃত্তি  </td> 
                                    <td  class="bnf text-center">  স্থান </td>
                              </tr>';


          } 

          $lemmamd5 = md5($mrow['lemma']);
          if($mrow['tlemma'] > 3){  
               
              $surah_ayah_block .= '<tr>
                                        <td data-fixed="right" class="arabic  text-right">'.$mrow['arabic'].'</td>
                                        <td class="text-left bnf">'.$mrow['bn'].'</td> 
                                        <td data-fixed="right" class="arabic text-right">'.$mrow['lemma'].'</td>
                                        <td class="text-center">'. BanglaConverter::en2bn($mrow['tlemma']) .' বার </td> 
                                        <td class="text-center"><a class="btn btn-secondary" href="javascript:void(0)" onClick="loadandReplace(\'/resources/repeat/lemma/'. $lemmamd5 .'.html\', \'#container_'.$lemmamd5.' .saw_wrap\')" ><i class="fa fa-eye"></i> <span class="arabic">'.$mrow['arabic'].'</span> শব্দের পুনরাবৃত্তি স্থান বিস্তারিত </a></td>
                                      </tr><tr class="bg-white"><td colspan="5"><div id="container_'.$lemmamd5.'"><div class="saw_wrap"></div></div></td></tr>';
                 
          }else{


            $sresults = $db->query("SELECT surah, ayah, word, arabic, bn FROM  corpus_bn_w_count where lemma = '".$mrow['lemma']."' order by surah, ayah, word");  
            $surah_ayah_block_inner = '';
            while($srow = $sresults->fetchArray()){ 
              $surah_ayah_block_inner  .= '<div class="dynamic_load_saw" id="ldata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word']).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';  
            }   
            

            $surah_ayah_block .= '<tr>

                                <td data-fixed="right" class="arabic  text-right">'.$mrow['arabic'].'</td>
                                        <td class="text-left bnf">'.$mrow['bn'].'</td> 
                                        <td data-fixed="right" class="arabic text-right">'.$mrow['lemma'].'</td>
                                        <td class="text-center">'. BanglaConverter::en2bn($mrow['tlemma']) .' বার </td> 
                                        <td class="text-center"><a class="btn btn-secondary" href="javascript:void(0)" onClick="$(\'#container_'.$lemmamd5.'\').toggle()" ><i class="fa fa-eye"></i> <span class="arabic">'.$mrow['arabic'].'</span> শব্দের পুনরাবৃত্তি স্থান বিস্তারিত </a></td>
                                 </tr><tr class="bg-white"><td colspan="5"><div id="container_'.$lemmamd5.'" style="display:none"><div class="saw_wrap">'. $surah_ayah_block_inner. '</div></div></td></tr>';

 

      }
      
  }

  $surah_ayah_block .= '</tbody>
  <tfoot>
  <tr  class="bg-info font-weight-bold">
      <th class="bnf text-right" style="width:160px">আরবি শব্দ</th>
      <th class="bnf text-left" style="width:190px">বাংলা</th>
      <th class="bnf text-right" style="width:150px">মৌলিক শব্দ</th> 
      <th  class="bnf text-center" style="width:90px">পুনরাবৃত্তি</th> 
      <th  class="bnf text-center"> স্থান </th>
  </tr>
  </tfoot>
  </table> 
  ';


  $path = dirname(__DIR__)."/firebase/public/partials/arabic_languages/words/";
  $filename =  $path . "lemma.html"; 
  $cfile = fopen($filename , "w") or die("Unable to open file!");
  fwrite($cfile, $surah_ayah_block);
  fclose($cfile); 
  
    
  echo 'DONE';
  

}





if($task == 9){  // repeat words for root_ar generator 
  $mresults = $db->query("SELECT count(root_ar) as troot_ar, root_ar, arabic, bn FROM corpus_bn_w_count where root_ar != '' and root_repeat > 1 group by root_ar  order by root_repeat desc");
  
  $surah_ayah_block = '<table id="root_arRepeatTable" class="table table-striped"><thead>
                              <tr class="bg-info font-weight-bold">
                                <th class="bnf text-right" style="width:160px">আরবি শব্দ</th>
                                <th class="bnf text-left" style="width:190px">বাংলা</th>
                                <th class="bnf text-right" style="width:150px">শব্দ মূল </th> 
                                <th  class="bnf text-center" style="width:90px">পুনরাবৃত্তি  </th> 
                                <th  class="bnf text-center">  স্থান </th>
                              </tr>
                                    </thead>
                      <tbody>';
  $rhead = 1;
  while($mrow = $mresults->fetchArray()){
          if($rhead++ % 5 == 0){
            $surah_ayah_block .= ' 
                                <tr class="bg-info font-weight-bold">
                                    <td class="bnf text-right" style="width:160px">আরবি শব্দ</td>
                                    <td class="bnf text-left" style="width:190px">বাংলা</td>
                                    <td class="bnf text-right" style="width:150px">শব্দ মূল </td> 
                                    <td  class="bnf text-center" style="width:90px">পুনরাবৃত্তি  </td> 
                                    <td  class="bnf text-center">  স্থান </td>
                              </tr>';


          } 

          $root_armd5 = md5($mrow['root_ar']);
          if($mrow['troot_ar'] > 3){  
               
              $surah_ayah_block .= '<tr>
                                        <td data-fixed="right" class="arabic  text-right">'.$mrow['arabic'].'</td>
                                        <td class="text-left bnf">'.$mrow['bn'].'</td> 
                                        <td data-fixed="right" class="arabic text-right">'.$mrow['root_ar'].'</td>
                                        <td class="text-center">'. BanglaConverter::en2bn($mrow['troot_ar']) .' বার </td> 
                                        <td class="text-center"><a class="btn btn-secondary" href="javascript:void(0)" onClick="loadandReplace(\'/resources/repeat/rootwords/'. $root_armd5 .'.html\', \'#container_'.$root_armd5.' .saw_wrap\')" ><i class="fa fa-eye"></i> <span class="arabic">'.$mrow['arabic'].'</span> শব্দের পুনরাবৃত্তি স্থান বিস্তারিত </a></td>
                                      </tr><tr class="bg-white"><td colspan="5"><div id="container_'.$root_armd5.'"><div class="saw_wrap"></div></div></td></tr>';
                 
          }else{


            $sresults = $db->query("SELECT surah, ayah, word, arabic, bn FROM  corpus_bn_w_count where root_ar = '".$mrow['root_ar']."' order by surah, ayah, word");  
            $surah_ayah_block_inner = '';
            while($srow = $sresults->fetchArray()){ 
              $surah_ayah_block_inner  .= '<div class="dynamic_load_saw" id="ldata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word']).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';  
            }   
            

            $surah_ayah_block .= '<tr>

                                <td data-fixed="right" class="arabic  text-right">'.$mrow['arabic'].'</td>
                                        <td class="text-left bnf">'.$mrow['bn'].'</td> 
                                        <td data-fixed="right" class="arabic text-right">'.$mrow['root_ar'].'</td>
                                        <td class="text-center">'. BanglaConverter::en2bn($mrow['troot_ar']) .' বার </td> 
                                        <td class="text-center"><a class="btn btn-secondary" href="javascript:void(0)" onClick="$(\'#container_'.$root_armd5.'\').toggle()" ><i class="fa fa-eye"></i> <span class="arabic">'.$mrow['arabic'].'</span> শব্দের পুনরাবৃত্তি স্থান বিস্তারিত </a></td>
                                 </tr><tr class="bg-white"><td colspan="5"><div id="container_'.$root_armd5.'" style="display:none"><div class="saw_wrap">'. $surah_ayah_block_inner. '</div></div></td></tr>';

 

      }
      
  }

  $surah_ayah_block .= '</tbody>
  <tfoot>
  <tr  class="bg-info font-weight-bold">
      <th class="bnf text-right" style="width:160px">আরবি শব্দ</th>
      <th class="bnf text-left" style="width:190px">বাংলা</th>
      <th class="bnf text-right" style="width:150px">মৌলিক শব্দ</th> 
      <th  class="bnf text-center" style="width:90px">পুনরাবৃত্তি</th> 
      <th  class="bnf text-center"> স্থান </th>
  </tr>
  </tfoot>
  </table> 
  ';


  $path = dirname(__DIR__)."/firebase/public/partials/arabic_languages/words/";
  $filename =  $path . "root.html"; 
  $cfile = fopen($filename , "w") or die("Unable to open file!");
  fwrite($cfile, $surah_ayah_block);
  fclose($cfile); 
  
    
  echo 'DONE';
  

}

 
 
if($task == 2){
    $results = $db->query("SELECT * FROM corpus_bn_w_count where surah = $surah AND ayah = $ayah ORDER BY word asc" );
    $newhtml = '<div class="row"><div class="col-1"></div>
                    <div class="col-10" dir="rtl"><ul class="ayah_words_lists">';
    $tab_menu_html    = '';
    $tab_content_html = '';
    $i = 0;
    while ($row = $results->fetchArray()) {
        $current_block = $surah.$ayah.$row['word'];

        $active = $i < 1 ? 'active' : '';
        $show   = $i < 1 ? 'show' : '';  
        $tab_menu_html    .= '<li><a class="ar_bn_word slickitemword" data-target="#wbw_grammer'.$current_block.'"><div class="ar_menu text-ar text-center">'. $row['arabic'].'</div><div class="bn_menu  text-center">'.$row['bn'].'</div></a></li>';


        $word_forms_part = $word_forms = '';
        $is_verb = false;
        for($wi = 1; $wi <= $row['count']; $wi++){
            if($row['pos'.$wi] == 'V' && !empty($row['verb_type'])) $is_verb = true;
            $word_forms .= '<span class="w_pos_'.$row['pos'.$wi].'">'. $row['ar'.$wi].'</span>'; 
            $word_forms_part .= $wi >  1 ? ' <span class="wordplus"> +  </span> ' : '';
            $word_forms_part .= '<div class="w_pos_'.$row['pos'.$wi].' grammerterms_wrap" >  <div class="grammer_arabic_word">'. $row['ar'.$wi].'</div> <div class="grammerterms">'.grammer_terms($row['pos'.$wi]).'</div> </div>';
            
            $lemma_repeat_html = '';
            $lemma_repeat  = WordRepeat($row['lemma_repeat'], 'lemma', $current_block, $row['lemma']);
            if(!empty($lemma_repeat)){
                $lemma_repeat_html = generate_word_repeatBox($row['lemma'], 'lemma', $current_block, $row['lemma_repeat']);
            }

            $lemma = !empty($row['lemma']) ?  '<br /><div class="lemma">   '. $lemma_repeat . '<span class="arabic"> '. $row['lemma']. '</span> <span> : মূল / উদ্ভূত শব্দ</span></div>'. $lemma_repeat_html.'' : ''; 
            
        }

        $root_repeat_html = '';
        $root_repeat  = WordRepeat($row['root_repeat'], 'root', $current_block, $row['root_ar']);
        if(!empty($root_repeat)){
            $root_repeat_html = generate_word_repeatBox($row['root_ar'], 'root', $current_block, $row['root_repeat']);
        }
        
        $verb_patern = '';
        if($is_verb){
            $verb_patern .=  verbCase($row);
            $verb_patern_results = $db->query("SELECT * FROM verbs_with_six_forms where root = '".$row['root_ar']."' ORDER BY verb_type asc" );
            while($vrow =  $verb_patern_results->fetchArray()){ 

                $verb_patern .= ' <div class="card card-body">  <h3 class="text-center"> Form: '. $vrow['verb_type']. ' </h3>    <div class="saw_wrap largefont"> 
                                  <div class="dynamic_load_saw"><span class="arabic">'. $vrow['perfect']. '</span><span class="saw_bn bnf">অতীত কাল </span> '.get_verb_form_meaning_if_availabl($vrow['perfect']).' </div>
                                  <div class="dynamic_load_saw"><span class="arabic">'. $vrow['imperfect']. '</span><span class="saw_bn bnf"> বর্তমান/ভবিষ্যৎ কাল </span> '.get_verb_form_meaning_if_availabl($vrow['imperfect']).'</div>
                                  <div class="dynamic_load_saw"><span class="arabic">'. $vrow['imperative']. '</span><span class="saw_bn bnf"> আদেশ মূলক </span> '.get_verb_form_meaning_if_availabl($vrow['imperative']).'</div>
                                  <div class="dynamic_load_saw"><span class="arabic">'. $vrow['active_participle']. '</span><span class="saw_bn bnf"> কর্তা </span> '.get_verb_form_meaning_if_availabl($vrow['active_participle']).'</div>
                                  <div class="dynamic_load_saw"><span class="arabic">'. $vrow['passive_participle']. '</span><span class="saw_bn bnf"> কর্ম </span> '.get_verb_form_meaning_if_availabl($vrow['passive_participle']).'</div>
                                  <div class="dynamic_load_saw"><span class="arabic">'. $vrow['verbal_noun']. '</span><span class="saw_bn bnf"> ক্রিয়াবাচক বিশেষ্য </span> '.get_verb_form_meaning_if_availabl($vrow['verbal_noun']).'</div>  
                                  </div></div>'; 
            }
            $verb_patern .= '';
        }


        $wrepat = WordRepeat($row['word_repeat'], 'exact', $current_block);
        $wrepat_details = '';
        if(!empty($wrepat)){
            $wrepat_details = generate_word_repeatBox($row['arabic'], 'exact', $current_block, $row['word_repeat']);
        }



        $grammer_content =   $wrepat.'<span class="bn_word_meaning">'.$row['bn'].' <span class="word_position_in_ayah bnf"> ('. BanglaConverter::en2bn($row['surah'].':'.$row['ayah'].':'.$row['word']).') </span>  </span>   '. $word_forms .  $wrepat_details.' <hr />  <div class="words_parts">'. $word_forms_part . '</div>' ;

        $verb_form_html          = !empty($verb_patern) ? '<hr /><div class="verb_forms w_pos_V">'. $verb_patern . '</div>' : '';
        $root_repeat_html_final  = !empty($root_repeat_html) ? '<div class="root_repeat_wrap"><div class="root_repeat">'.$root_repeat.'</div><div class="root_repeat_details">'. $root_repeat_html . '</div></div>' : '';
        $grammer_content .= $lemma . '<img src="/resources/wbwgrammer/'.$row['surah'].'/'.$row['surah'].'_'.$row['ayah'].'_'.$row['word'].'.png" /><hr />'.$root_repeat_html_final . $verb_form_html ;

 

        $tab_content_html .= '<div class="text-center target_word_desc arabic" id="wbw_grammer'.$current_block.'">'. $grammer_content .'</div>';


        //$path = dirname(__DIR__)."/php/grammer/$surah";
        $path2 = dirname(__DIR__)."/firebase/public/resources/wbwgrammer";
        ////$path = dirname(__DIR__)."/firebase/public/resources/grammer/0";
        $filename2 =  $path2 .'/'. $row['surah'].'/'.$row['surah'].'_'.$row['ayah'].'_'.$row['word'].'.png'; 
          
        $cfile2 = fopen($filename2 , "w") or die("Unable to open file!");
        $fileContent  = base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=');
        fwrite($cfile2, $fileContent);
        fclose($cfile2);


        

        $i++;
    }
    $newhtml .= $tab_menu_html ;
    $newhtml .= '</ul></div><div class="col-12" dir="rtl">';
    $newhtml .= '<div class="words_grammer_wrap">'. $tab_content_html . '</div>' ;
    $newhtml .= '</div></div>' ;



    //$path = dirname(__DIR__)."/php/grammer/$surah";
    $path = dirname(__DIR__)."/firebase/public/resources/grammer/$surah";
    ////$path = dirname(__DIR__)."/firebase/public/resources/grammer/0";
    $filename =  $path  ."_".$ayah.".html"; 
    //$filename =  $path  ."_1.html"; 

    $cfile = fopen($filename , "w") or die("Unable to open file!");
    fwrite($cfile, $newhtml);
    fclose($cfile); 




    echo $surah. ':'. $ayah . ': DONE <br />';

}


function get_verb_form_meaning_if_availabl($arabic){
  $db = new SQLite3('databases/corpus.db', SQLITE3_OPEN_READWRITE);
  $sresults = $db->query("SELECT surah, ayah, word, arabic, bn FROM corpus_bn_w_count where arabic = '".$arabic."' limit 5");
  $surah_ayah_block = '';
  while($srow = $sresults->fetchArray()){ 
    $surah_ayah_block .= '<div class="dynamic_load_saw" id="wdata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word']).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';
  }

  if(!empty($surah_ayah_block))return '<span class="saw_wrap normalfont">'. $surah_ayah_block .'</span>';
  else return ''; 
}


function generate_word_repeatBox($word, $type = 'exact', $current_block, $totalCount = 0){
    $db = new SQLite3('databases/corpus.db', SQLITE3_OPEN_READWRITE);


$surah_ayah_block = '';
$block_class      = '';

    switch($type){
        case 'exact':
             $block_class      = 'w';  
             $sresults = $db->query("SELECT word_repeat, surah, ayah, word, arabic, bn FROM corpus_bn_w_count where arabic = '".$word."'");
            
             while($srow = $sresults->fetchArray()){
                if($srow['word_repeat'] < 5){ 
                    $surah_ayah_block .= '<div class="dynamic_load_saw" id="wdata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word']).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';
                }
                
             }


        break;
        case 'root':
            $block_class      = 'r';
            $sresults = $db->query("SELECT root_repeat, surah, ayah, word, arabic, bn FROM  corpus_bn_w_count where root_ar = '".$word."' group by arabic, bn"); 
             
            while($srow = $sresults->fetchArray()){
                $total_cound_html = $srow['root_repeat'] > 1 ? '| পুনরাবৃত্তি - '. $srow['root_repeat'] . ' বার ' : '';
                if($srow['root_repeat'] < 5){ 

                    $surah_ayah_block .= '<div class="dynamic_load_saw" id="rdata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word'].$total_cound_html).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';
                }
            } 

        break;
        case 'lemma':
                $block_class      = 'l';


                $sresults = $db->query("SELECT lemma_repeat, surah, ayah, word, arabic, bn FROM  corpus_bn_w_count where lemma = '".$word."' group by arabic, bn"); 
            
                while($srow = $sresults->fetchArray()){
                  $total_cound_html = $srow['lemma_repeat'] > 1 ? '| পুনরাবৃত্তি - '. $srow['lemma_repeat'] . ' বার ' : '';
                  if($srow['lemma_repeat'] < 5)  { 
                      $surah_ayah_block .= '<div class="dynamic_load_saw" id="ldata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word'].$total_cound_html).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';
                  }
                }  
        break;
                
        default:
        break;
     }

    
     
     
                     

    //$extra_heading  = $totalCount > 100 ? '<div class="alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h5><i class="icon fas fa-exclamation-triangle"></i>  শুধু মাত্র ভিন্ন বাংলা অর্থে আসছে এমন শব্দ দেখানো হল   </h5>  </div>' : '';
    $dynamicwordhash  = empty($surah_ayah_block) ? $block_class. '---'.md5($word) : '';
    return '<div class="collapse" id="'.$block_class.'_repeat_'.$current_block.'" data-dynamicwords="'.$dynamicwordhash. '">
                <div class="card card-body"><div class="saw_wrap">'.$surah_ayah_block.'</div></div> 
            </div>';
}


function verbCase($row){
    if(strpos($row['verb_type'], 'f') == FALSE) {
        return '<div class="current_verb_form bnf">  ' . BanglaConverter::en2bn(str_replace(array('b', 'f', 'd'), '', $row['verf_form'])). ' : (أنواع الفعل / صِيْغَة)   ক্রিয়ার রূপ / সীগাহ   <br /> ' . BanglaConverter::en2bn(str_replace(array('b', 'f', 'd'), '', $row['verb_type'])).' : (أبواب الفعل)  ক্রিয়ার কেইস/বাব </div>';
    }else{
        return '<div class="current_verb_form bnf">  ' . BanglaConverter::en2bn(str_replace('f', '', $row['verb_type'])). ' : (أنواع الفعل / صِيْغَة)   ক্রিয়ার রূপ / সীগাহ  </div>';
    }
    
}

function WordRepeat($count, $w_type = 'exact', $current_block, $word = ''){
    if($count > 0) {
        switch($w_type)
        {
            case 'exact'; 
                return '<span class="exact_word_repeat words_repeat_wrap"> <a class="btn btn-primary show_repeat_data exact" data-toggle="collapse" href="#w_repeat_'.$current_block.'" role="button" aria-expanded="false" aria-controls="w_repeat_'.$current_block.'" data-controls="w_repeat_'.$current_block.'"><i class="fa fa-eye"></i> হুবুহু শব্দের পুনরাবৃত্তি :'. BanglaConverter::en2bn($count).' বার  </a></span>';
            break;
            case 'lemma';  
                return '<span class="lemma_word_repeat words_repeat_wrap"> <a class="btn btn-primary show_repeat_data lemma" data-toggle="collapse" href="#l_repeat_'.$current_block.'" role="button" aria-expanded="false" aria-controls="l_repeat_'.$current_block.'" data-controls="l_repeat_'.$current_block.'"><i class="fa fa-eye"></i>  থেকে উদ্ভুত শব্দের পুনরাবৃত্তি : '. BanglaConverter::en2bn($count).' বার  ('.$word.') মূল শব্দ  </a></span>';
            break;
            case 'root'; 
                return '<span class="root_word_repeat words_repeat_wrap"> <a class="btn btn-primary show_repeat_data root" data-toggle="collapse" href="#r_repeat_'.$current_block.'" role="button" aria-expanded="false" aria-controls="r_repeat_'.$current_block.'" data-controls="r_repeat_'.$current_block.'"><i class="fa fa-eye"></i>  থেকে উদ্ভুত শব্দের পুনরাবৃত্তি :'. BanglaConverter::en2bn($count).' বার  ('.$word.') শব্দের মূল / রুট শব্দ  </a></span>';
            break;
            
        }   
    }else{
        return '';

    }   
}
 


function grammer_terms($val){
    $return = $val;

    switch($val){
        case 'N';
          $return = 'বিশেষ্য <br />  <span class="arabic">  (اسم) </span> Noun';
        break;

        case 'PRON';
          $return = 'সর্বনাম <br />   <span class="arabic"> (ضمير) </span>Personal pronoun';
        break;

        case 'ACC';
          $return = 'শব্দ বিভক্তি <br />  <span class="arabic"> (حرف نصب) </span>Accusative particle ';
        break;


        case 'PREV';
          $return = 'প্রতিরোধবাচক পদ  <br /> <span class="arabic">  (حرف كاف) </span>Preventive particle ';
        break;


        case 'PN';
          $return = 'নামবাচক বিশেষ্য  <br /> <span class="arabic">  (اسم علم) </span> Proper noun ';
        break;


        case 'CONJ';
          $return = 'সম্বন্ধসূচক অব্যয় <br />  <span class="arabic"> (حرف عطف) </span> Coordinating conjunction';
        break;

        case 'REL';
          $return = 'আপেক্ষিক সর্বনাম <br />  <span class="arabic"> (اسم موصول) </span> Relative pronoun';
        break;


        case 'CIRC';
          $return = 'অবস্থাগত পদ <br />  <span class="arabic"> (حرف حال) </span> Circumstantial particle';
        break; 

        case 'V';
          $return = 'ক্রিয়া <br />  <span class="arabic"> (فعل) </span> Verb';
        break;

        case 'DET';
          $return = 'নির্ধারক <br />  <span class="arabic"> (محدد) </span> Determiner al prefix/ Determinant';
        break;
         
        case 'EMPH';
          $return = 'জোরপ্রদান জ্ঞাপন পদ <br /> <span class="arabic"> (لام التوكيد) </span> Emphasis';
        break;
         
        case 'REM';
          $return = 'পুনরারম্ভ পদ <br /> <span class="arabic"> (حرف استئنافية) </span> Resumption particle';
        break;
         
        case 'NEG';
          $return = 'না-বাচক পদ  <br /> <span class="arabic"> (حرف نفي) </span> Negative particle';
        break;
         
        case 'P';
          $return = 'অব্যয় পদ  <br /> <span class="arabic"> (حرف جر) </span> Preposition';
        break;
           
        case 'PRP';
          $return = 'উদ্দেশ্যজ্ঞাপক লাম উপসর্গ <br /> <span class="arabic"> (لام التعليل) </span> Purpose lām prefix';
        break;
         
       

        case 'RES';
          $return = 'সীমাবদ্ধতাসূচক পদ <br /> <span class="arabic"> (أداة حصر) </span> Restriction particle';
        break;


        case 'AMD';
          $return = ' সংশোধনী পদ <br /> <span class="arabic">  (حرف استدراك)  Amendment particle</span> ';
        break;
         
        case 'ANS';
          $return = 'উত্তরবাচক পদ  <br /> <span class="arabic">  (حرف جواب)  Answer particle </span> ';
        break;
         
        case 'ATT';
          $return = ' মনোযোগ  <br /> <span class="arabic">  (انتباه)  Attention </span> ';
        break;
         
        case 'AVR';
          $return = 'চরম না-বাচক পদ  <br /> <span class="arabic">  (حرف ردع)  Aversion particle </span> ';
        break;
         
        case 'CAUS';
          $return = 'কারক বাচক পদ  <br /> <span class="arabic">  (حرف سببية) Particle of cause </span> ';
        break;
         
        case 'COM';
          $return = ' কমিটিকেটিভ পদ <br /> <span class="arabic">  (واو المعية) Comitative particle </span> ';
        break;

         
        case 'CERT';
          $return = 'নিশ্চয়তা জ্ঞাপক পদ  <br /> <span class="arabic">  (حرف تحقيق)  Particle of certainty</span> ';
        break;

        case 'COND';
          $return = ' বিশেষণ <br /> <span class="arabic">  (حرف شرط)  Conditional particle</span> ';
        break;
         

         
        case 'DEM';
          $return = 'অবস্থান জ্ঞাপক সর্বনাম <br /> <span class="arabic">  (اسم اشارة) Demonstrative pronoun </span> ';
        break;
         
        case 'EQ';
          $return = 'সমতাবিধান পদ  <br /> <span class="arabic">  (حرف تسوية)  Equalization particle </span> ';
        break;
         
        case 'EXH';
          $return = 'পরামর্শবাচক পদ  <br /> <span class="arabic">  (حرف تحضيض)  Exhortation particle </span> ';
        break;
         
        case 'EXL';
          $return = 'বর্ণনাসূচক পদ <br /> <span class="arabic">  (حرف تفصيل)  Explanation particle</span> ';
        break;
         
        case 'EXP';
          $return = 'ব্যতিক্রমী পদ <br /> <span class="arabic">  (أداة استثناء)  Exceptive particle </span> ';
        break;
         
        case 'FUT';
          $return = 'ভবিষয়তবাচক পদ  <br /> <span class="arabic">  (حرف استقبال) Future particle </span> ';
        break;
         
        case 'IMPV';
          $return = 'অনুজ্ঞাসূচক লাম উপসর্গ  <br /> <span class="arabic">  (لام الامر)  Imperative lām prefix </span> ';
        break;
         
        case 'INC';
          $return = 'সূচনা পদ  <br /> <span class="arabic">  (حرف ابتداء )  Inceptive particle</span> ';
        break;
         
        case 'INL';
          $return = 'কুরআনীয় অদ্যাক্ষর  <br /> <span class="arabic">  ( حروف مقطعة )  Quranic initials </span> ';
        break;
         
        case 'INT';
          $return = 'ব্যাখ্যামূলক পদ <br /> <span class="arabic">  (حرف تفسير) Particle of interpretation </span> ';
        break;
         
        case 'INTG';
          $return = 'প্রশ্নসূচক পদ  <br /> <span class="arabic">  (حرف استفهام) Interogative particle </span> ';
        break;
         
        case 'LOC';
          $return = 'অবস্থা জ্ঞাপক ক্রিয়াবিশেষণ <br /> <span class="arabic">  (ظرف مكان)  Location adverb </span> ';
        break;
         
        case 'NV';
          $return = 'বিশেষ্যবাচক  ক্রিয়া <br /> <span class="arabic">  (أفعال الصفة)  Adjective verbs </span> ';
        break;
         
        case 'PRO';
          $return = 'নিষেধবাচক পদ  <br /> <span class="arabic">  (حرف نهي) Prohibition particle </span> ';
        break;
         
        case 'RET';
          $return = ' প্রত্যাহারমূলক  পদ  <br /> <span class="arabic">  (حرف اضراب) Retraction particle </span> ';
        break;
         
        case 'RSLT';
          $return = 'ফলাফল জ্ঞাপক  পদ  <br /> <span class="arabic">  (حرف واقع في جواب الشرط )  Result particle </span> ';
        break;
         
        case 'SUB';
          $return = 'অধীনস্থ সংমিশ্রণ পদ  <br /> <span class="arabic">  (حرف مصدري) Subordinating conjunction </span> ';
        break;
         
        case 'SUP';
          $return = 'প্রাসঙ্গিক পদ  <br /> <span class="arabic">  (حرف زائد)  Supplemental particle </span> ';
        break;
         
        case 'SUR';
          $return = 'বিস্ময়সূচক পদ  <br /> <span class="arabic">  (حرف فجاءة) Surprise particle </span> ';
        break;
         
        case 'T';
          $return = 'সময় জ্ঞাপক ক্রিয়া বিশেষণ  <br /> <span class="arabic">  (ظرف زمان)  Time adverb </span> ';
        break;
         
        case 'VOC';
          $return = ' সম্ভোধনাত্মক কারক <br /> <span class="arabic">  (حرف نداء) Vocative particle </span> ';
        break;
         
        case 'CASE';
          $return = ' <br /> <span class="arabic">  ()  </span> ';
        break;
         



    }



    return $return;
}

