<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

  
include('common.php');


$surah = (int)trim($_POST['surah']); 
$task  = (int)trim($_POST['task']);

$db = new SQLite3('databases/corpus.db', SQLITE3_OPEN_READWRITE);

if($task == 1){

    
    
    $results = $db->query("SELECT count(arabic) as tarabic, arabic FROM corpus_bn_w_count where surah = $surah group by arabic"); 
     
    $total_words = 0;
    while($row =  $results->fetchArray()){
       $total_words++;
       //echo $row['tarabic']. '-'. $row['arabic']. '<br />';
    }

    //echo '<hr /> <h3>'. $surah.': '. $total_words.'</h3>';
    echo '<script>$("#exact").append(",'.$total_words.'");</script>';


    $results = $db->query("SELECT count(lemma) as tlemma, lemma FROM corpus_bn_w_count where surah = $surah group by lemma order by tlemma desc");
    $total_words = 0;
    while($row =  $results->fetchArray()){
       $total_words++;
      // echo $row['tlemma']. '-'. $row['lemma']. '<br />';
    }

   // echo '<hr /> <h3>'. $surah.': '. $total_words.'</h3>';
    echo '<script>$("#lemma").append(",'.$total_words.'");</script>';



    echo $surah.":"; 

}




if($task == 2){
   $mresults = $db->query("SELECT count(arabic) as tarabic, lemma, arabic, bn, word_repeat FROM corpus_bn_w_count where surah = $surah group by arabic order by tarabic desc"); 
      
   $return_html_block = '<table id="exactWordsTable" class="table table-striped"><thead>
                               <tr class="bg-info font-weight-bold">
                                 <th class="bnf text-right" style="width:50px">#</th>
                                 <th class="bnf text-right" style="width:160px">আরবি শব্দ</th>
                                 <th class="bnf text-left" style="width:190px">বাংলা</th>
                                 <th class="bnf text-right" style="width:150px">মৌলিক শব্দ</th> 
                                 <th  class="bnf text-center" style="width:160px"> সূরায় পুনরাবৃত্তি  </th> 
                                 <th  class="bnf text-center">  স্থান </th> 
                               </tr>
                              </thead>
                       <tbody>';
   $rhead = 1;
   $rcount = 1;
   while($mrow = $mresults->fetchArray()){
           if($rhead++ % 5 == 0){
             $return_html_block .= ' 
                                 <tr class="bg-info font-weight-bold">
                                     <td class="bnf text-right" style="width:50px">#</td>
                                     <td class="bnf text-right" style="width:160px">আরবি শব্দ</td>
                                     <td class="bnf text-left" style="width:190px">বাংলা</td>
                                     <td class="bnf text-right" style="width:150px">মৌলিক শব্দ</td> 
                                     <td  class="bnf text-center" style="width:160px">সূরায় পুনরাবৃত্তি  </td> 
                                     <td  class="bnf text-center">  স্থান </td>
                               </tr>';
 
 
           } 
 
           $arabicmd5 = md5($mrow['arabic']);
           if($mrow['word_repeat'] > 3){  
                
               $return_html_block .= '<tr>
                                       <td>'.BanglaConverter::en2bn($rcount++).'</td>
                                         <td data-fixed="right" class="arabic large  text-right">'.$mrow['arabic'].'</td>
                                         <td class="text-left bnf">'.$mrow['bn'].'</td> 
                                         <td data-fixed="right" class="arabic  large text-right">'.$mrow['lemma'].'</td>
                                         <td class="text-center">'. BanglaConverter::en2bn($mrow['tarabic']) .' বার </td> 
                                         <td class="text-center"><a class="btn btn-secondary" href="javascript:void(0)" onClick="ShowOnlySurahWords(\'/resources/repeat/words/' .$arabicmd5 .'.html\', \'#container_'.$arabicmd5.' .saw_wrap\', \'wdata-dsaw-'.$surah.'-\')" ><i class="fa fa-eye"></i> সূরাতে পুনরাবৃত্তি '. BanglaConverter::en2bn( $mrow['tarabic']) .' বার  </a> |  <a class="btn btn-secondary" href="javascript:void(0)" onClick="ShowOnlySurahWords(\'/resources/repeat/words/' .$arabicmd5 .'.html\', \'#container_'.$arabicmd5.' .saw_wrap\', \'\')" ><i class="fa fa-eye"></i> কুরআনে '. BanglaConverter::en2bn( $mrow['word_repeat']) .' বার  </a></td>
                                       </tr><tr class="bg-white"><td colspan="6"><div id="container_'.$arabicmd5.'"><div class="saw_wrap"></div></div></td></tr>';
                  
           }else{
 
 
             $sresults = $db->query("SELECT surah, ayah, word, arabic, bn FROM  corpus_bn_w_count where arabic = '".$mrow['arabic']."' order by surah, ayah, word");  
             $return_html_block_inner = '';
             while($srow = $sresults->fetchArray()){ 
               $return_html_block_inner  .= '<div class="dynamic_load_saw" id="ldata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word']).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';  
             }   
             
 
             $return_html_block .= '<tr>
                                  <td>'.BanglaConverter::en2bn($rcount++).'</td>
                                 <td data-fixed="right" class="arabic  large  text-right">'.$mrow['arabic'].'</td>
                                         <td class="text-left bnf">'.$mrow['bn'].'</td> 
                                         <td data-fixed="right" class="arabic  large text-right">'.$mrow['lemma'].'</td>
                                         <td class="text-center">'. BanglaConverter::en2bn($mrow['tarabic']) .' বার </td> 
                                         <td class="text-center"><a class="btn btn-secondary" href="javascript:void(0)" onClick="$(\'#container_'.$arabicmd5.'\').toggle()" ><i class="fa fa-eye"></i> <span class="arabic">'.$mrow['arabic'].'</span> শব্দের পুনরাবৃত্তি স্থান বিস্তারিত </a></td>
                                  </tr><tr class="bg-white"><td colspan="6"><div id="container_'.$arabicmd5.'" style="display:none"><div class="saw_wrap">'. $return_html_block_inner. '</div></div></td></tr>';
 
  
 
       }
       
   }
 
   $return_html_block .= '</tbody>
   <tfoot>
   <tr  class="bg-info font-weight-bold">
       <th class="bnf text-right" style="width:50px">#</th>
       <th class="bnf text-right" style="width:160px">আরবি শব্দ</th>
       <th class="bnf text-left" style="width:190px">বাংলা</th>
       <th class="bnf text-right" style="width:150px">মৌলিক শব্দ</th> 
       <th  class="bnf text-center" style="width:160px">সূরায় পুনরাবৃত্তি</th> 
       <th  class="bnf text-center"> স্থান </th>
   </tr>
   </tfoot>
   </table>  
   ';



   // order by lemma 

   $mresults = $db->query("SELECT count(lemma) as tlemma, lemma, arabic, bn, lemma_repeat FROM corpus_bn_w_count where surah = $surah group by lemma order by tlemma desc"); 
      
   $return_html_block2 = '<table id="lemmaRepeatTable" class="table table-striped"><thead>
                               <tr class="bg-info font-weight-bold">
                                 <th class="bnf text-right" style="width:50px">#</th>
                                 <th class="bnf text-right" style="width:160px">মৌলিক শব্দ</th>  
                                 <th  class="bnf text-center" style="width:160px"> সূরায় পুনরাবৃত্তি  </th> 
                                 <th  class="bnf text-center">  স্থান </th> 
                               </tr>
                              </thead>
                       <tbody>';
   $rhead = 1;$rcount = 1; 
   while($mrow = $mresults->fetchArray()){
           if($rhead++ % 5 == 0){
             $return_html_block2 .= ' 
                                 <tr class="bg-info font-weight-bold"> 
                                     <td class="bnf text-right" style="width:50px">#</td>
                                     <td class="bnf text-right" style="width:150px">মৌলিক শব্দ</td> 
                                     <td  class="bnf text-center" style="width:160px">সূরায় পুনরাবৃত্তি  </td> 
                                     <td  class="bnf text-center">  স্থান </td>
                               </tr>';
 
 
           } 
 
           $blockmd5 = md5($mrow['lemma']);
           if($mrow['lemma_repeat'] > 3){  
                
               $return_html_block2 .= '<tr> 
                                          <td>'.BanglaConverter::en2bn($rcount++).'</td>
                                         <td data-fixed="right" class="arabic large text-right">'.$mrow['lemma'].'</td>
                                         <td class="text-center">'. BanglaConverter::en2bn($mrow['tlemma']) .' বার </td> 
                                         <td class="text-center"><a class="btn btn-secondary" href="javascript:void(0)" onClick="ShowOnlySurahWords(\'/resources/repeat/lemma/' .$blockmd5 .'.html\', \'#container_'.$blockmd5.' .saw_wrap\', \'ldata-dsaw-'.$surah.'-\')" ><i class="fa fa-eye"></i> সূরাতে পুনরাবৃত্তি '. BanglaConverter::en2bn( $mrow['tlemma']) .' বার </a> |  <a class="btn btn-secondary" href="javascript:void(0)" onClick="ShowOnlySurahWords(\'/resources/repeat/lemma/' .$blockmd5 .'.html\', \'#container_'.$blockmd5.' .saw_wrap\', \'\')" ><i class="fa fa-eye"></i> কুরআনে '. BanglaConverter::en2bn( $mrow['lemma_repeat']) .' বার  </a></td>
                                         </tr><tr class="bg-white"><td colspan="4"><div id="container_'.$blockmd5.'"><div class="saw_wrap"></div></div></td></tr>';
                  
           }else{
 
 
             $sresults = $db->query("SELECT surah, ayah, word, arabic, bn FROM  corpus_bn_w_count where arabic = '".$mrow['arabic']."' order by surah, ayah, word");  
             $return_html_block_inner = '';
             while($srow = $sresults->fetchArray()){ 
               $return_html_block_inner  .= '<div class="dynamic_load_saw" id="ldata-dsaw-'. $srow['surah'].'-'.$srow['ayah'].'-'.$srow['word'].'"><a href="javascript:void(0)"  onclick="loadDynamicSAW(this)"><span class="saw_block bnf">'.BanglaConverter::en2bn( $srow['surah'].':'.$srow['ayah'].':'.$srow['word']).'</span><span class="arabic">'.$srow['arabic'].'</span><span class="saw_bn bnf">'.$srow['bn'].'<span></a><div class="dynam_syw_content"></div></div>';  
             }   
             
 
             $return_html_block2 .= '<tr>
                                        <td>'.BanglaConverter::en2bn($rcount++).'</td>
                                        <td data-fixed="right" class="arabic  large text-right">'.$mrow['lemma'].'</td>
                                        <td class="text-center">'. BanglaConverter::en2bn($mrow['tlemma']) .' বার </td> 
                                        <td class="text-center"><a class="btn btn-secondary" href="javascript:void(0)" onClick="$(\'#container_'.$blockmd5.'\').toggle()" ><i class="fa fa-eye"></i> <span class="arabic">'.$mrow['arabic'].'</span> শব্দের পুনরাবৃত্তি স্থান বিস্তারিত </a></td>
                                  </tr><tr class="bg-white"><td colspan="4"><div id="container_'.$blockmd5.'" style="display:none"><div class="saw_wrap">'. $return_html_block_inner. '</div></div></td></tr>';
 
  
 
       }
       
   }
 
   $return_html_block2 .= '</tbody>
   <tfoot>
   <tr  class="bg-info font-weight-bold"> 
       <th class="bnf text-right" style="width:50px">#</th>
       <th class="bnf text-right" style="width:150px">মৌলিক শব্দ</th> 
       <th  class="bnf text-center" style="width:160px">সূরায় পুনরাবৃত্তি</th> 
       <th  class="bnf text-center"> স্থান </th>
   </tr>
   </tfoot>
   </table>  
   ';







  $tab_output_html = '
   <ul class="nav nav-tabs" id="myTab" role="tablist">
         <li class="nav-item">
            <a class="nav-link active" id="wordrepeat-tab" data-toggle="tab" href="#wordrepeat" role="tab" aria-controls="wordrepeat" aria-selected="true">হুবুহু শব্দ+পুনরাবৃত্তি</a>
         </li>
         <li class="nav-item">
            <a class="nav-link" id="lemmarepeat-tab" data-toggle="tab" href="#lemmarepeat" role="tab" aria-controls="lemmarepeat" aria-selected="false">মৌলিক শব্দ শব্দ+পুনরাবৃত্তি</a>
         </li> 
   </ul>
   <div class="tab-content" id="myTabContent">
         
         <div class="tab-pane fade show active" id="wordrepeat" role="tabpanel" aria-labelledby="wordrepeat-tab">'.$return_html_block.'</div>

         <div class="tab-pane fade" id="lemmarepeat" role="tabpanel" aria-labelledby="lemmarepeat-tab">'.$return_html_block2.'</div> 
         
   </div>
   ';

 
   
   $path = dirname(__DIR__)."/firebase/public/partials/arabic_languages/wordspersurah/";
   $filename =  $path . $surah.".html"; 
   $cfile = fopen($filename , "w") or die("Unable to open file!");
   fwrite($cfile, $tab_output_html);
   fclose($cfile); 
   
   
  echo $surah;

}


 