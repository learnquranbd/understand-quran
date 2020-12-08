
function loadAyahFromSurah(surahIndex){
    gobacktotop();
    $('body').removeClass('control-sidebar-slide-open');  
    $('#dynamic_heading').slideUp();
 
    

    ayah_html = '';
    surahData = dynamicObj.ayah[surahIndex];
    surah = surahData['surah'];

    console.log('loading all ayah from surah' + surahData['surah']);
        
        ayah_line_html = '<div class="timeline">';
        bisoyoktitle =  (dynamicObj['subject'] !== "") ? ' ["'+ dynamicObj['subject']  + '"] বিষয়ক : ' : '';
        //console.log(surahData['ayah'].length);
        $.each(surahData['ayah'], function(k, ayah){
            ayah_line_html   += get_ayahHTML(surah, ayah);
        });
        
        ayah_line_html += '</div>'; 

        ayah_html += generateCardsHtml( getSurahHeading(surah-1) + ' <span class="mobilefull last"> এই সূরাতে '+ bisoyoktitle + ' আয়াত (' + en2bnNumber( surahData['ayah'].length ) + ')টি </span>', ayah_line_html , 'info', false, 'text-left');


    $('#dynamic_content .quranic_block').html('<div class="card card-secondary"><div class="card-header"><h3 class="card-title">    ' + getSurahMinHeading(surah-1) + ' | '+ bisoyoktitle  + ' : - আয়াতসমূহ  </h3></div> </div> <div class="card-body" style="display: block;">'+ ayah_html + '</div>');    
    
    recursively_ajax(); 
}

function loadSingleAyah(surah, ayah){ 
    gobacktotop();
    // $('body').removeClass('control-sidebar-slide-open');  
    $('#dynamic_heading').slideUp();
     
    ayah_line_html = '<div class="timeline">';

    ayah_line_html += get_ayahHTML(surah, ayah);//'<div class="quran-container recursiveajaxload waiting surah-'+surah+'-ayah-'+ayah+'" data-ajaxurl="/resources/quran/'+ surah + '/' + ayah + '.html"></div>';
    
    ayah_line_html += '</div>'; 
         
    ayah_html = generateCardsHtml( getSurahHeading(surah-1) , ayah_line_html , 'success card-outline', false, 'text-left');
   

    $('#dynamic_content  .quranic_block').html(ayah_html);
     
    call_ajax_now($('.surah-'+surah+'-ayah-'+ayah).data('ajaxurl'), $('.surah-'+surah+'-ayah-'+ayah)); 
    
}