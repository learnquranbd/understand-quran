
//var_value =""; $('.wikitable tr').each(function(){ var_value += ',"'+ $(this).find('td:eq(0)').text() + '"'; }); var_value; // use this in inspect console to parse 
//var debugonly            = true;
var debugonly            = false;
var sh_wbw               = true;
var sh_arabic            = false;
var sh_tajweed           = false;
var sh_transliteration   = true;
var sh_translation       = true;
var sh_tafseer           = true;
var sh_word_repeat       = true;
var auto_load            = false;
var auto_load_function   = '';
var ar_sz_offset         = 1;
var bn_sz_offset         = 1;
var dynamicObj                 = null; 
var is_recursively_ajax        = false;
var url_to_call                = [];
var url_data_to_call           = [];
var bangla_sura_names       = ["আল ফাতিহা","আল বাকারা","আল ইমরান","আন নিসা","আল মায়িদাহ","আল আনআম","আল আরাফ","আল আনফাল","আত-তাওবাহ্‌","ইউনুস","হুদ","ইউসুফ","আর-রাদ","ইব্রাহীম","আল হিজর","আন নাহল","বনী-ইসরাঈল","আল কাহফ","মারইয়াম","ত্বোয়া-হা","আল আম্বিয়া","আল হাজ্জ্ব","আল মু'মিনূন","আন নূর","আল ফুরকান","আশ শুআরা","আন নম্‌ল","আল কাসাস","আল আনকাবূত","আর রুম","লোক্‌মান","আস সেজদাহ্","আল আহ্‌যাব","সাবা","ফাতির","ইয়াসীন","আস ছাফ্‌ফাত","ছোয়াদ","আয্‌-যুমার","আল মু'মিন","হা-মীম সেজদাহ্‌","আশ্‌-শূরা","আয্‌-যুখরুফ","আদ-দোখান","আল জাসিয়াহ","আল আহ্‌ক্বাফ","মুহাম্মদ","আল ফাত্‌হ","আল হুজুরাত","ক্বাফ","আয-যারিয়াত","আত্ব তূর","আন-নাজম","আল ক্বামার","আর রাহমান","আল-ওয়াকিয়াহ","আল-হাদীদ","আল-মুজাদালাহ","আল-হাশর","আল-মুমতাহিনাহ","আস-সাফ","আল-জুমুআ","আল-মুনাফিকুন","আত-তাগাবুন","আত-তালাক","আত-তাহরীম","আল-মুলক","আল-কলম","আল-হাক্কাহ","আল-মাআরিজ","নূহ","আল জ্বিন","আল মুজাম্মিল","আল মুদ্দাস্সির","আল-ক্বিয়ামাহ","আদ-দাহর","আল-মুরসালাত","আন নাবা","আন নাযিয়াত","আবাসা","আত-তাকভীর","আল-ইনফিতার","আত মুত্বাফ্‌ফিফীন","আল ইন‌শিকাক","আল-বুরুজ","আত-তারিক্ব","আল আ'লা","আল গাশিয়াহ্‌","আল ফাজ্‌র","আল বালাদ","আশ-শাম্‌স","আল লাইল","আদ-দুহা","আল ইনশিরাহ","ত্বীন","আলাক্ব","ক্বদর","বাইয়্যিনাহ","যিলযাল","আল-আদিয়াত","ক্বারিয়াহ","তাকাসুর","আছর","হুমাযাহ","ফীল","কুরাইশ","মাউন","কাওসার","কাফিরুন","নাসর","লাহাব","আল-ইখলাস","আল-ফালাক","আন-নাস"];
var arabic_sura_names       = ["الفاتحة","البقرة","آل عمران","النّساء","المآئدة","الانعام","الأعراف","الأنفال","التوبة"," يونس","هود"," يوسف ","الرّعد","إبراهيم","الحجر","النّحل","الإسرا","الكهف","مريم","طه","الأنبياء","الحجّ","المؤمنون","النّور","الفرقان","الشّعراء","النّمل","القصص","العنكبوت","الرّوم"," لقمان ","السّجدة","الْأحزاب","سبا","فاطر","يس","الصّافات","ص","الزّمر","غافر","فصّلت","الشّورى","الزّخرف","الدّخان","الجاثية"," الأحقاف ","محمّد","الفتح","الحجرات","ق","الذّاريات","الطّور","النّجْم","القمر","الرّحْمن"," الواقعة ","الحديد","المجادلة","الحشْر","الممتحنة","الصّفّ","الجمعة","المنافقون","التّغابن","الطّلاق","التّحريم","الملك","القلم","الحآقّة","المعارج","نوح","الجنّ","المزّمّل","المدّشّر","القيامة","الدَّهْرِ","المرسلت","النّبا","النّزعت","عبس","التّكوير","الانفطار","المطفّفين","الانشقاق","البروج","الطّارق"," الأعلى ","الغاشية","الفجر","البلد","الشّمس"," الليل ","الضحى","الشرح","التين","العلق","القدر","البينة"," الزلزلة "," العاديات ","القارعة ","التكاثر "," العصر "," الهمزة "," الفيل "," قريش "," الماعون "," الكوثر "," الكافرون "," النصر "," المسد "," الإخلاص "," الفلق "," الناس"];
var surah_bangla_meaning    = ["সূচনা","বকনা-বাছুর","ইমরানের পরিবার","মহিলা","খাদ্য পরিবেশিত টেবিল","গৃৃহপালিত পশু","উচু স্থানসমূহ","যুদ্ধে-লব্ধ ধনসম্পদ","অনুশোচনা","নবী ইউনুস","নবী হুদ","নবী ইউসুফ","বজ্রনাদ","নবী ইব্রাহিম","পাথুরে পাহাড়","মৌমাছি","ইসরায়েলের সন্তানগণ","গুহা","মারিয়াম (নবী ঈসার মা)","ত্বোয়া-হা","নবীগণ","হাজ্জ","বিশ্বাসীগণ","আলো,জ্যোতি","সত্য মিথ্যার পার্থক্য নির্ধারণকারী গ্রন্থ","কবিগণ","পিপীলিকা","ঘটনা,কাহিনী","মাকড়সা","রোমান জাতি","একজন জ্ঞানী ব্যক্তি","সিজদাহ","জোট","রানী সাবা","আদি স্রষ্টা","ইয়াসীন","সারিবদ্ধভাবে দাড়ানো","আরবি বর্ণ","দল-বদ্ধ জনতা","বিশ্বাসী","সুস্পষ্ট বিবরণ","পরামর্শ","সোনাদানা","ধোঁয়া","নতজানু","বালুর পাহাড়","নবী মুহাম্মদ","বিজয় (মক্কা বিজয়)","বাসগৃহসমূূহ","আরবি বর্ণ ক্বাফ","বিক্ষেপকারী বাতাস","পাহাড়","তারা","চন্দ্র","অনন্ত করুণাময়","নিশ্চিত ঘটনা","লোহা","অনুযোগকারিণী","সমাবেশ","নারী, যাকে পরীক্ষা করা হবে","সারবন্দী সৈন্যদল","সম্মেলন/শুক্রবার","কপট বিশ্বাসীগণ","মোহ অপসারণ","তালাক,বন্ধনমুক্তি","নিষিদ্ধকরণ","সার্বভৌম কর্তৃত্ব","কলম","নিশ্চিত সত্য","উন্নয়নের সোপান","নবী নূহ","জ্বিন সম্প্রদায়","বস্ত্র আচ্ছাদনকারী","পোশাক পরিহিত","পুনরুথান","মানুষ","প্রেরিত পুরুষবৃন্দ","মহাসংবাদ","প্রচেষ্টাকারী","তিনি ভ্রুকুটি করলেন","অন্ধকারাচ্ছন্ন","বিদীর্ণ করা","প্রতারকগণ","খন্ড-বিখন্ড করণ","নক্ষত্রপুঞ্জ","রাতের আগন্তুক","সর্বোর্ধ্ব","বিহ্বলকর ঘটনা","ভোরবেলা","নগর","সূর্য্য","রাত্রি","পূর্বাহ্নের সূর্যকিরণ","বক্ষ প্রশস্তকরণ","ডুমুর","রক্তপিন্ড","পরিমাণ","সুস্পষ্ট প্রমাণ","ভূমিকম্প","অভিযানকারী","মহাসংকট","প্রাচুর্য্যের প্রতিযোগিতা","অপরাহ্ন","পরনিন্দাকারী","হাতি","কুরাইশ গোত্র","সাহায্য-সহায়তা","প্রাচুর্য","অস্বীকারকারীগণ","বিজয়,সাহায্য","জ্বলন্ত অঙ্গার","একনিষ্ঠতা","নিশিভোর","মানবজাতি"];
var ayat_numbers            = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6];
var place_revealed          = ["মক্কা","মদীনা","মদীনা","মদীনা","মদীনা","মক্কা","মক্কা","মদীনা","মদীনা","মক্কা","মক্কা","মক্কা","মদীনা","মদীনা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মদীনা","মদীনা","মদীনা","মদীনা","মক্কা","মক্কা","মক্কা","মক্কা","মদীনা","মদীনা","মক্কা","মদীনা","মদীনা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মদীনা","মদীনা","মদীনা","মক্কা","মক্কা","মদীনা","মক্কা","মক্কা","মদীনা","মক্কা","মদীনা","মদীনা","মদীনা","মদীনা","মদীনা","মদীনা","মদীনা","মদীনা","মদীনা","মদীনা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মদীনা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মদীনা","মদীনা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মক্কা","মদীনা","মক্কা","মক্কা","মক্কা","মক্কা"];
var revealed_order          = ["০০৫","০৮৭","০৮৯","০৯২","১১২","০৫৫","০৩৯","০৮৮","১১৩","০৫১","০৫২","০৫৩","০৯৬","০৭২","০৫৪","০৭০","০৫০","০৬৯","০৪৪","০৪৫","০৭৩","১০৩","০৭৪","১০২","০৪২","০৪৭","০৪৮","০৪৯","০৮৫","০৮৪","০৫৭","০৭৫","০৯০","০৫৮","০৪৩","০৪১","০৫৬","০৩৮","০৫৯","০৬০","০৬১","০৬২","০৬৩","০৬৪","০৬৫","০৬৬","০৯৫","১১১","১০৬","০৩৪","০৬৭","০৭৬","০২৩","০৩৭","০৯৭","০৪৬","০৯৪","১০৫","১০১","০৯১","১০৯","১১০","১০৪","১০৮","০৯৯","১০৭","০৭৭","০০২","০৭৮","০৭৯","০৭১","০৪০","০০৩","০০৪","০৩১","০৯৮","০৩৩","০৮০","০৮১","০২৪","০০৭","০৮২","০৮৬","০৮৩","০২৭","০৩৬","০০৮","০৬৮","০১০","০৩৫","০২৬","০০৯","০১১","০১২","০২৮","০০১","০২৫","১০০","০৯৩","০১৪","০৩০","০১৬","০১৩","০৩২","০১৯","০২৯","০১৭","০১৫","০১৮","১১৪","০০৬","০২২","০২০","০২১"];
var en_suras                = ["al-fatiha", "al-baqara", "ali-imran", "an-nisa", "al-ma-ida", "al-an-am", "al-a-raf", "al-anfal", "at-tawba", "yunus", "hud", "yusuf", "ar-ra-d", "ibrahim", "al-hijr", "an-nahl", "al-isra", "al-kahf", "maryam", "ta-ha", "al-anbiya", "al-hajj", "al-mu-minoon", "an-nur", "al-furqan", "ash-shu-ara", "an-naml", "al-qasas", "al-ankabut", "ar-rum", "luqman", "as-sajda", "al-ahzab", "saba", "fatir", "ya-seen", "as-saffat", "sad", "az-zumar", "al-mu-min", "fussilat", "ash-shura", "az-zukhruf", "ad-dukhan", "al-jathiya", "al-ahqaf", "muhammad", "al-fath", "al-hujurat", "qaf", "adh-dhariyat", "at-tur", "an-najm", "al-qamar", "ar-rahman", "al-waqi-a", "al-hadid", "al-mujadila", "al-hashr", "al-mumtahina", "as-saff", "al-jumu-a", "al-munafiqun", "at-taghabun", "at-talaq", "at-tahrim", "al-mulk", "al-qalam", "al-haqqa", "al-ma-arij", "nuh", "al-jinn", "al-muzzammil", "al-muddathir", "al-qiyama", "al-insan", "al-mursalat", "an-naba", "an-nazi-at", "abasa", "at-takwir", "al-infitar", "al-mutaffifeen", "al-inshiqaq", "al-burooj", "at-tariq", "al-a-la", "al-ghashiya", "al-fajr", "al-balad", "ash-shams", "al-lail", "ad-dhuha", "el-inshirah", "at-teen", "al-alaq", "al-qadr", "al-bayyina", "az-zalzala", "al-adiyat", "al-qari-a", "at-takathur", "al-asr", "al-humaza", "al-feel", "quraysh", "al-ma-oon", "al-kawthar", "al-kafiroon", "an-nasr", "al-lahab", "al-ikhlas", "al-falaq", "an-nas"];
var exact_word_rep_surah    = [26,2865,1803,1849,1531,1673,1885,755,1380,1070,1142,1097,596,591,476,1076,1017,1048,664,925,791,803,708,795,643,741,781,931,661,542,396,303,787,594,546,523,589,546,758,776,591,548,616,279,362,480,377,406,246,308,296,260,276,252,191,289,423,318,327,266,173,143,151,201,230,207,256,250,217,188,189,223,174,209,134,208,136,151,161,121,85,66,130,91,98,55,69,79,117,72,48,62,36,23,34,59,27,79,29,35,29,20,13,32,22,17,22,10,19,18,22,13,17,17];
var lemma_word_rep_surah    = [23,1124,751,798,679,718,806,395,631,479,548,506,343,330,287,549,529,545,358,475,421,481,389,411,368,405,407,457,333,287,245,192,447,328,331,296,358,334,390,392,309,301,331,182,199,273,236,251,161,206,193,181,187,185,141,205,246,195,210,157,123,105,102,137,145,143,170,170,157,141,128,138,128,153,104,154,107,122,125,103,77,53,94,76,77,44,60,69,94,61,45,57,31,22,34,49,23,58,28,32,24,19,13,27,21,15,21,9,9,18,20,9,16,15];
var surah_letter_count      = [314,52639,30276,31845,23932,26109,28550,10834,22679,14947,16168,14512,7360,7050,5896,15908,13549,13823,8188,11608,10109,10938,8871,11316,7811,10938,9712,11817,8353,7003,4415,3153,11343,7287,6492,6040,7896,6600,9831,10388,6929,7227,7486,3023,4167,5561,4853,5157,2889,3150,3182,2852,3072,3155,3278,3538,5139,4111,3971,3129,1828,1406,1558,2182,2511,2115,2707,2760,2318,1945,1900,2424,1750,2274,1445,2252,1653,1618,1783,1329,1005,730,1520,993,995,523,638,835,1211,727,655,703,418,265,280,557,237,822,319,373,343,259,132,297,203,186,218,108,191,191,193,93,170,167];
var enBnNumbers = { 0 : '০', 1 : '১',  2 : '২',  3 : '৩', 4 : '৪', 5 : '৫', 6 : '৬',  7 : '৭', 8 : '৮', 9 : '৯' };
var bnEnNumbers = {'০': 0, '১': 1, '২': 2, '৩': 3, '৪': 4, '৫': 5, '৬': 6, '৭': 7, '৮': 8, '৯': 9 } ;


var loadfew = 0; // initailly load first few 
var loadfirstFewMax = 5 ;


var audio = document.createElement('audio');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
} 

var font_el_class = ['.words-text.text-bn', '.full_surah_bangla .line',  '#dynamic_content .h3', '#dynamic_content .translation',  '#dynamic_content .ctip' ];
var afont_el_class = ['.quran-text', '.qtext .page .line',  '.arabic.large', '#dynamic_content .quranic_ayah_arabic.arabic', '#dynamic_content .arabic.lfont', '#dynamic_content .arabic'];

function FSetFont(A){
    
 
    switch(A){
        case 1:
            $.each(font_el_class, function(k, v){
                $(v).each(function(){
                     if($(this).css('font-size').indexOf('px') >0){
                         $(this).css('font-size', parseInt(   parseInt($(this).css('font-size').replace('px', '')) + 3   ) + 'px');
                     }
                     if($(this).css('font-size').indexOf('rem') >0){
                         $(this).css('font-size', parseInt(   parseInt($(this).css('font-size').replace('rem', '')) + 0.2   ) + 'rem');
                     } 
                })
             });
             $.each(afont_el_class, function(k, v){
                $(v).each(function(){
                     if($(this).css('font-size').indexOf('px') >0){
                         $(this).css('font-size', parseInt(   parseInt($(this).css('font-size').replace('px', '')) + 6   ) + 'px');
                     }
                     if($(this).css('font-size').indexOf('rem') >0){
                         $(this).css('font-size', parseInt(   parseInt($(this).css('font-size').replace('rem', '')) + 0.4   ) + 'rem');
                     } 
                })
             });
        break;
        case -1:
            $.each(font_el_class, function(k, v){
                $(v).each(function(){
                     if($(this).css('font-size').indexOf('px') >0){
                         $(this).css('font-size', parseInt(   parseInt($(this).css('font-size').replace('px', '')) - 3 ) + 'px');
                     }
                     if($(this).css('font-size').indexOf('rem') >0){
                         $(this).css('font-size', parseInt(   parseInt($(this).css('font-size').replace('rem', '')) - 0.2   ) + 'rem');
                     } 
                })
             });
            $.each(afont_el_class, function(k, v){
                $(v).each(function(){
                     if($(this).css('font-size').indexOf('px') >0){
                         $(this).css('font-size', parseInt(   parseInt($(this).css('font-size').replace('px', '')) - 6 ) + 'px');
                     }
                     if($(this).css('font-size').indexOf('rem') >0){
                         $(this).css('font-size', parseInt(   parseInt($(this).css('font-size').replace('rem', '')) - 0.4   ) + 'rem');
                     } 
                })
             });
        break;  
        
        
    } 

    
}



$(document).ready(function () { 

  
    $.each(font_el_class, function(k,v){
          $('body').append('<div class="' + v + '"></div>');
    });
 
    $('.keep-open').on({
        "shown.bs.dropdown": function() { $(this).attr('closable', false); },
        //"click":             function() { }, // For some reason a click() is sent when Bootstrap tries and fails hide.bs.dropdown
        "hide.bs.dropdown":  function() { return $(this).attr('closable') == 'true'; }
    });
    
    $('.keep-open').children().first().on({"click": function() {
        $(this).parent().attr('closable', true );}
    });


    $('.toggleSettings').change(function() { 

        $newCSS = '';
        // $newCSS += (sh_wbw) ? '.words-text.text-bn, .saw_wrap .dynamic_load_saw span.saw_bn, .saw_wrap .dynamic_load_saw a span.saw_bn{display:  block  !important;}' : '.words-text.text-bn, .saw_wrap .dynamic_load_saw span.saw_bn, .saw_wrap .dynamic_load_saw a span.saw_bn{display: none !important;}'

        switch($(this).attr('id')){
             case 'sh_wbw': 
                sh_wbw = $(this).prop('checked') ? true : false;
                if(sh_wbw)  $('.recursiveajaxload.waiting.wordbywordwrap').removeClass('hidden'); else   $('.recursiveajaxload.waiting.wordbywordwrap').addClass('hidden');
             break;
             case 'sh_arabic': 
                sh_arabic = $(this).prop('checked') ? true : false;
                if(sh_arabic)  $('.recursiveajaxload.waiting.arabic').removeClass('hidden'); else   $('.recursiveajaxload.waiting.arabic').addClass('hidden');
             break;
             case 'sh_tajweed': 
                sh_tajweed = $(this).prop('checked') ? true : false; 
                if(sh_tajweed)  $('.recursiveajaxload.waiting.tajweed').removeClass('hidden'); else   $('.recursiveajaxload.waiting.tajweed').addClass('hidden');
             break;
             case 'sh_transliteration': 
                sh_transliteration = $(this).prop('checked') ? true : false;
                if(sh_transliteration)  $('.recursiveajaxload.waiting.translation').removeClass('hidden'); else   $('.recursiveajaxload.waiting.translation').addClass('hidden');
             break;
             case 'sh_translation': 
                sh_translation = $(this).prop('checked') ? true : false;
                if(sh_translation)  $('.recursiveajaxload.waiting.translation').removeClass('hidden'); else   $('.recursiveajaxload.waiting.translation').addClass('hidden');
             break;
             case 'sh_word_repeat': 
                 sh_word_repeat = $(this).prop('checked') ? true : false;
             break;  
             case 'sh_tafseer': 
                sh_tafseer = $(this).prop('checked') ? true : false;
             break;
              
            case 'auto_load': 
                auto_load = $(this).prop('checked') ? true : false;
             break; 
        }

        $newCSS += (sh_wbw)     ? '.wordbywordwrap{display:  flex  !important;}'    : '.wordbywordwrap{display: none !important;}';
        $newCSS += (sh_arabic)  ? '.arabic.onlyarabic{display:  block  !important;}' : '.arabic.onlyarabic{display: none !important;}';
        $newCSS += (sh_tajweed) ? '.arabic.tajweed{display:  flex  !important;}' : '.arabic.tajweed{display: none !important;}'; 
        $newCSS += (sh_transliteration) ? '.transliteration{display:  block  !important;}' : '.transliteration{display: none !important;}';
        $newCSS += (sh_translation) ? '.taisirul{display:  block  !important;}' : '.taisirul{display: none !important;}';
        $newCSS += (sh_tafseer) ? 'li.tafseer{display:list-item;} .quranic_tafseer{display:  block  !important;}' : 'li.tafseer, .quranic_tafseer{display: none !important;}';
        $newCSS += (sh_word_repeat) ? 'li.grammer{display:list-item;}' : 'li.grammer{display: none !important;}';

        $('#dynamic_style').html($newCSS);


    });



    $('.mt-2 .nav-link ').on('click', function(){
    
       $('.mt-2 .nav-link').removeClass('active');
       $(this).addClass('active');
       $('.nav.nav-treeview').css('height', 'auto');

       $('.dynamic-view').html(''); 
       
       
        
       if($(this).data('partials') !== undefined){ 
          $('.ajaxprocess').addClass('run');
          jQuery.ajax({
              url: "/partials/"+$(this).data('partials')+'.html', 
          })
          .done(function( data ) {  
              dynamicObj                 = null; 
              is_recursively_ajax = false;   
              $('.subject-menu-right .settings-control-panel').html(''); 
              $('.dynamic-view').html(data);  
              if($( document ).width() < 600)
              $('body').removeClass('sidebar-open').addClass('sidebar-closed sidebar-collapse');
              $('.ajaxprocess').removeClass('run'); 

          }).fail(function() {
            $('.ajaxprocess').removeClass('run');
          })
          .always(function() {
            $('.ajaxprocess').removeClass('run');
          });
        }

          
    }); // .nav-link click end 


    updateResponsiveElements();
    $(window).resize(function() {
        updateResponsiveElements();
    });

    var timer;

    $(window).scroll(function() {
            if(timer) {
                window.clearTimeout(timer);
            }

            timer = window.setTimeout(function() {
                
                if(is_recursively_ajax){
                    recursively_ajax();
                    recursively_ajax2();
                }


            }, 800); 


    });

    rightsidescrollbar();
 
 
    $(document).on('hidden.bs.collapse', '.collapse',function(e){  toggleIcon(e) });
    $(document).on('shown.bs.collapse', '.collapse',function(e){  toggleIcon(e) } );
 
    


    // lazy loading image 
    $("img.lazy").lazyload({effect : "fadeIn"});


    audio.src = 'https://verses.quran.com/AbdulBaset/Mujawwad/mp3/001001.mp3';
    audio.onended = function() {
       $('#play i').removeClass('fa-pause-circle').addClass('fa-play-circle');
       $('i.playayah.fa-pause-circle').removeClass('fa-pause-circle').addClass('fa-play-circle');
    };


    $(document).on('click', '.play-it-now', function(){ 
        current_index       = $(this).index();
        wbw_surah_ayah      = $(this).parent().attr('id').replace("surah-", "").replace("-ayah-", ":").split(':'); 

        // ~ loading word by word mp3 file from website - https://verses.quran.com/wbw/
    });

    
    $(document).on('click', '.mt-3 .nav-item.has-treeview>a', function(e){   
            console.log('okay height set to auto');
            setTimeout(function(){$('.mt-3 .nav-item.has-treeview ul.nav-treeview').css('height', 'auto');}, 1000);
         
    });

    $(document).on('click', '.ayah_words_lists .slick-slide a', function(e){  
        $('.slickitemword').removeClass('active');
        $(this).addClass('active');
        show_traget  = $(this).data('target');
        $('.target_word_desc').hide();
        $(show_traget).show();
        

    });
    $(document).on('click', '.quran-container .block', function(){ 
        current_index       = $(this).index();
        wbw_surah_ayah      = $(this).find('.quran-text span').data('audio');
        console.log('Audio Play:' + wbw_surah_ayah);
        if(wbw_surah_ayah !== ""){ 
            audio.src = wbw_surah_ayah;
            audio.play();
        }


        // ~ loading word by word mp3 file from website - https://verses.quran.com/wbw/
    });

    $('body').on('click', '.slick-arrow, .slick-dots button', function () {
        $($('.slick-slide.slick-active a')[0]).trigger('click');
    });

    $('#modal-xl').on('hidden.bs.modal', function () {
        $('#modal-xl .modal-body .modal-body-content').html('');
    });


    $('body').on('click', '.tajweed .img', function () {
        if($(this).find('.b').length) {  
           
            $('#modal-xl .modal-title').html('কালার কোডেড তাজবীদ রুলস');  
            $('#modal-xl .modal-body .modal-body-content').html('<div class="text-center"><img src="/images/tajweed_details.jpg" alt="" /></div>');  
            $('#modal-xl').modal(); 

        } 

    });


      $( document ).ajaxComplete(function() {
         debugger_callback();
     });


    $('body').on('mouseover', '.tajweed .img', function () {
        if($(this).find('.b').length) { 
            $('.tip').show();
            $('.tip').html('<img class="img-fluid" src="/images/tajweed.jpg" alt="" />'); 
            $('.tip').css('height', '40px');
            $('.tip').css('max-width', '100%');
            $('.tip').css('bottom', '10px');
            $('.tip').css('left',  $(window).width() / 2 - $('.tip').outerWidth() / 2);
        } 

    });

    
    $('body').on('mouseover', '.line i', function () {
        var tajweed_rules = {
                     "madd-lazim" : " মাদ্দ অর্থ আওয়াজ কে টানিয়া পড়া।  - মাদ্দে লাজিম : <span style='font-size:1.5rem;color:#d70092'>مد لازم    <br /> ইদগাম,সাকিন ও শাদ্দাহ এর উপর নির্ভরশীল মাদ্দ, হরফে মদের পরে ছাকিনে আছলী আসিলে তাহাকে মদ্দে লাযেম বলে। ইহা অবশ্যই ৬ হারকাত বা চার আলিফ লম্বা করিয়া পড়তে হয় </span>  ",
                     "madd-wajib" : " মাদ্দ অর্থ আওয়াজ কে টানিয়া পড়া।  <span style='font-size:1.5rem;color:#e72929'> مد واجب  ~  টানিয়া পড়া ওয়াজিব  </span>",
                     "madd-aarid" : " মাদ্দ অর্থ আওয়াজ কে টানিয়া পড়া। <span style='font-size:1.5rem;color:orange'> مد عارض     <br /> যে হরফে মদ হয় তাকে মদের হরফ বলে। মদের হরফ তিনটি। و , ا , ى , (ওয়াও, আলিফ, ইয়া)। আলিফের ডানের হরফে যবর থকলে এবং ওয়াও সাকিন- এর ডানের হরফে পেশ থাকলে এবং ইয়া সাকিনের ডানের হরফে যের থাকলে এক আলিফ পরিমাণ টেনে পড়তে হয়।</span>",
                     "ikhfaa" : "ইখফা অর্থ গোপন করা বা লুকানো।   <span style='font-size:1.5rem;color:green'> إخفاء ومواقع الغنة      <br /> নূন সাকিন ও তানবীনের পর ইখফার পনেরটি হররেফের যে কোনো একটি আসলে গুন্নার সাথে নাকের মধ্যে লুকিয়ে পড়াকে ইখফা বলে। হরফগুলো হলো,   <br />                  ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك   <br /> গুন্নাহ অর্থ আওয়াজকে নাকের বাঁশিতে নিয়ে পড়া। ওয়াজিব গুন্নাহর হরফ দুইটি م মীম ও ن নুন। এই দুইটি হরফের উপর তাশদীদ আসলে مমীম এবং ن নুনকে গুন্নাহ করে পড়ে হয়।</span>",
                     "idgham" : " ইদগাম অর্থ মিলিয়ে পড়া। <span style='font-size:1.5rem;color:hsla(0, 0%, 66.3%, .9)'> إدغام وما لا يُلفظ   <br />  নূন সাকিন ও তানবীনের পরে ইদগামরে ছয়টি হরফের যে কোনো একটি হরফ আসলে নূন সাকিন ও তানবীনকে গুন্না সহ ও গুন্না ছাড়া মিলিয়ে পড়াকে ইদগাম বলে।  <br /> ইদগামের হরফ ছয়টি। যথা; ي ر م ل و ن সংক্ষেপে يَرْمَلُوْنْ বলে।   <br /> ইদগাম দুই প্রকার  <br /> (১) ইদগামে বাগুন্না; (২) ইদগামে বিলা গুন্না। <br /> (১) ইদগামে বাগুন্না: গুন্না সহ মিলিয়ে পড়াকে ইদগামে বাগুন্না বলে। এর হরফ হলো চারটি, ي و م ن সংক্ষেপে يُوْ مِنْ। যথা; مَنْ يَّفْعَلْ  <br />  (২) ইদগামে বিলা গুন্না: গুন্না ছাড়া মিলিয়ে পড়াকে ইদগামে বিলা গুন্না বলে। এর হরফ দুটি ر ل  </span>",
                     "qalqalah" : "কলকলা; অর্থ দ্বিত্ব বা অনুরণন।  <span style='font-size:1.5rem;color:#46b1dd'> قلقلة   <br />  যে হরফগুলোর উপর সাকিন হলে দ্বিত্ব হয় তাকে কলকলা বলে। কলকলার হরফ পাঁচটি। যথা; ق ط ب ج د  </span>", 
            };

            $('.tip').show();
            $('.tip').html('<div class="text-center" style="background:#ddfdff; border-top:6px solid #3c8dbc;border-bottom:8px solid #3c8dbc;">'+ tajweed_rules[$(this).attr("class")] + '</div>'); 
            console.log($(this).attr("class")); 
            $('.tip').css('max-width', '95%');
            $('.tip').css('bottom', '10px');
            $('.tip').css('left',  $(window).width() / 2 - $('.tip').outerWidth() / 2); 

    });

    

    $('body').on('mouseleave', '.tajweed .img, .line i', function () { 
        $('.tip').hide();

    });
     
 
    
    $('body').on('click', '.show_repeat_data', function () {
        control = $('#' + $(this).data('controls'));
        child_html  = $('#' + $(this).data('controls') + ' .saw_wrap');
        if(child_html.html() == ""){
            child_html.html('<div class="text-center" style="margin: 50px auto"><img src="/images/loading.gif" alt="loading..." /></div>');
            word_repeat_to_load = control.data('dynamicwords');

            repeat_directory = word_hash = '';
            if(word_repeat_to_load.indexOf('r---') == 0){
                repeat_directory = 'rootwords';
                word_hash = word_repeat_to_load.replace('r---', '');
             }
            if(word_repeat_to_load.indexOf('l---') == 0){
                repeat_directory = 'lemma';
                word_hash = word_repeat_to_load.replace('l---', '');
            }
            
            if(word_repeat_to_load.indexOf('w---') == 0){
                repeat_directory = 'words';
                word_hash = word_repeat_to_load.replace('w---', '');
            }

            if(repeat_directory !== ''){

                $('.ajaxprocess').addClass('run'); 
                $.ajax({
                    type: "GET",
                    async:false, // set async false to wait for previous response
                    url: '/resources/repeat/' + repeat_directory + '/' + word_hash + '.html',  
                    success: function(data)
                    {
                       
                       child_html.html(data);
                       $('.ajaxprocess').removeClass('run'); 
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        $('.ajaxprocess').removeClass('run'); 
                        console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
                    } 
                });   


            }
               



        }


    })



      document.addEventListener("modal-content-ready", function(e) { 

       

        setTimeout(function(){ 
            $('#modal-xl .modal-body .modal-body-content .ayah_words_lists').slick({
                slidesToShow: 10,
                slidesToScroll: 10,
                dots: true,
                infinite: false,
                adaptiveHeight: true,
                rtl: true,
                useTransform:false, 
                responsive: [ 
                    {
                      breakpoint: 1920,
                      settings: {
                        slidesToShow: 8,
                        slidesToScroll: 8, 
                        dots: true
                      }
                    }, 
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3, 
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2, 
                        slidesToScroll:2, 
                        dots: false
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,  
                        dots: false
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
            });

            

            $($('.slick-slide.slick-active a')[0]).trigger('click');
        }, 300);  

     }) ; 
     
 
});

function rightsidescrollbar(){

    if (typeof $.fn.overlayScrollbars !== 'undefined') { 

        $('.subject-menu-right').overlayScrollbars({
          className: 'os-theme-light',
          sizeAutoCapable: true,
          scrollbars: {
            autoHide: 'l',
            clickScrolling: false
          } 

        });
      }


}
 


function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
}


function Spad (str, max) {
    str = str.toString();
    return str.length < max ? Spad("0" + str, max) : str;
}

function setnew_audio_and_play(e, onlysurah = false){ 
    $(e).removeClass('playayah');
    $('i.playayah.fa-pause-circle').removeClass('fa-pause-circle').addClass('fa-play-circle'); 
    $(e).addClass('playayah');
    
    if(!onlysurah)
    payah_surah_ayah      = $(e).data('playsrc').split(':');
    

    if($(e).hasClass('fa-play-circle')){ 
        if(onlysurah) src =  'https://www.al-hamdoulillah.com/coran/mp3/files/abdellah-juhani/' + Spad($(e).data('playsrc')+1, 3)  + '.mp3';
        else 
        src =  'https://everyayah.com/data/Abdullaah_3awwaad_Al-Juhaynee_128kbps/' + Spad(payah_surah_ayah[0], 3) + Spad(payah_surah_ayah[1], 3) + '.mp3';
        audio.src = src;
        audio.play();
        var playbutton = $('#play i');
        playbutton.removeClass('fa-play-circle').addClass('fa-pause-circle');  
        $(e).removeClass('fa-play-circle').addClass('fa-pause-circle');  

    }else{
        audio.pause();
        var playbutton = $('#play i');
        playbutton.removeClass('fa-pause-circle').addClass('fa-play-circle');  
        $(e).removeClass('fa-pause-circle').addClass('fa-play-circle'); 
    }
    

} 



function playpause(e){  
    if($(e).find('i').hasClass('fa-play-circle')){ 
        audio.play();
        $(e).find('i').removeClass('fa-play-circle').addClass('fa-pause-circle'); 
        // console.log('Playing...');
    }else{
        audio.pause();
        $(e).find('i').removeClass('fa-pause-circle').addClass('fa-play-circle');
        //console.log('Paused');
    } 
}

 
  
var app = new Vue({
    el: '#app', 
    data:{
                
                ALLAH_secctions: [  
                    { label: "৯৯ নাম",  partials: "ALLAH/asmaul-husna"},
                    { label: "স্মরণ",  partials: "ALLAH/remembrance"},
                    { label: "পছন্দ", partials: "ALLAH/likes"},
                    { label: "অপছন্দ",   partials: "ALLAH/dislikes"},
                    { label: "পক্ষ থেকে যাদের উপর দুর্ভাগ্য",   partials: "ALLAH/woe"},
                    { label: "অভিশাপ/অভিসম্পাত",   partials: "ALLAH/curse"}, 
                    { label: "শোকর/কৃতজ্ঞতা",   partials: "ALLAH/thanks"}, 
                    { label: "প্রতি সুধারণা",   partials: "ALLAH/well-thing"},/*
                    { label: "আদেশ",   partials: "ALLAH/order"},
                    { label: "নিষেধ",   partials: "ALLAH/prohibition"},*/
                ], 
                quran_topics: [  
                    { label: "হে মানুষ", partials: "quran/ya-ayyuhannas"}, 
                    { label: "হে ঈমানদারগণ", partials: "quran/ya-ayyuhal-lazina-amanu"}, 
                    { label: "সেজদার আয়াত", partials: "quran/sejda"}, 
                    { label: "উপমা/দৃষ্টান্ত", partials: "subject/parables"}, 
                    { label: "কিয়ামত (পুনরুত্থান দিবস)", partials: "quran/resurrection"}, 
                    { label: "আখিরাত", partials: "quran/hereafter"}, 
                    { label: "বিচারের দিন", partials: "quran/judgement"}, 
                    { label: "অন্যায়কারী", partials: "quran/wrongdoer"},  
                    { label: "জাহান্নাম/এর অধিবাসী", partials: "quran/hell"}, 
                    { label: "তওবা", partials: "quran/repentance"}, 
                    { label: "ধৈর্য/সবর", partials: "quran/patience"}, 
                    { label: "ক্ষমা", partials: "quran/forgiveness"}, 
                    { label: "জান্নাত/এর অধিবাসী", partials: "quran/heaven"},  
                   
                ],
                quran_duas: [  
                    { label: "সব দুআ একসাথে", partials: "quran/dua/all"},  
                    { label: "ঈমান বৃদ্ধির দু'আ", partials: "quran/dua/believe"},  
                    { label: "ক্ষমা চাওয়ার দু'আ", partials: "quran/dua/forgiveness"},  
                    { label: "পরিবারের জন্য দু'আ", partials: "quran/dua/family"},  
                    { label: "নিরাপত্তা এবং সুরক্ষার দু'আ", partials: "quran/dua/protection"}, 
                    { label: "পরকালের জন্য দু'আ", partials: "quran/dua/afterlife"},  
                    { label: "অনুগ্রহ  / আশ্রয়", partials: "quran/dua/refgue"},  
                   
                ],
                creations: [  
                    { label : "সৃষ্টি", partials: "creations/creation" } ,
                    { label : "আলো", partials: "creations/light" } ,
                    { label : "ফেরেশতা", partials: "creations/angels" } ,
                    { label : "মহাবিশ্ব", partials: "creations/universe" } ,
                    { label : "মহাবিশ্ব গতি", partials: "creations/universe_motion" } ,
                    { label : "বিশ্বজগৎ", partials: "creations/world" } ,
                    { label : "জ্যোতির্বিদ্যা নক্ষত্রবিজ্ঞান", partials: "creations/astronomy" } ,
                    { label : "সূর্য", partials: "creations/sun" } ,
                    { label : "চন্দ্র", partials: "creations/moon" } ,
                    { label : "পৃথিবী", partials: "creations/earth" } ,
                    { label : "পৃথিবী, ঘূর্ণন", partials: "creations/earth__rotation" } ,
                    { label : "আবহাওয়া", partials: "creations/weather" } ,
                    { label : "বাতাস", partials: "creations/wind" } ,
                    { label : "ধুলা", partials: "creations/dust" } ,
                    { label : "ধোঁয়া", partials: "creations/smoke" } ,
                    { label : "জিন", partials: "creations/jinn" } ,
                    { label : "জোড়ায়, সৃষ্টি", partials: "creations/creation__in_pairs" } ,
                    { label : "মানবজাতি", partials: "creations/humankind" } ,
                    { label : "পাহাড় পর্বতমালা", partials: "creations/mountains" } ,
                    { label : "মাটি", partials: "creations/soil" } ,
                    { label : "সাগর", partials: "creations/sea" } ,
                    { label : "দিগন্ত", partials: "creations/horizon" } ,
                    { label : "সমুদ্র, দুই সমুদ্র", partials: "creations/sea__the_two_seas" } ,
                    { label : "বাগান উদ্যান", partials: "creations/garden" } ,
                    { label : "শহর", partials: "creations/city" } ,
                    { label : "নদী", partials: "creations/river" } ,
                    { label : "নৌকা", partials: "creations/ark" } ,
                    { label : "চোখ", partials: "creations/eye" } ,
                    { label : "মানুষ, হইতে সৃষ্ট", partials: "creations/man__created_from" } ,
                    { label : "জমি", partials: "creations/land" } ,
                    { label : "গবাদি পশু", partials: "creations/cattle" } ,
                    { label : "উট", partials: "creations/camel" } ,
                    { label : "জীবজন্তু", partials: "creations/animals" } ,
                    { label : "জাহাজ", partials: "creations/ships" } ,
                    { label : "সম্প্রদায়", partials: "creations/community" } ,
                    { label : "হাড়/অস্থি", partials: "creations/bone" } ,
                    { label : "জীব", partials: "creations/creatures" } ,
                    { label : "পাখি", partials: "creations/birds" } ,
                    { label : "মেঘ", partials: "creations/clouds" } ,
                    { label : "জন্তু জানোয়ার", partials: "creations/dawabb" } ,
                    { label : "কান", partials: "creations/ear" } ,
                    { label : "ফসল", partials: "creations/crops" } ,
                    { label : "ঘোড়া", partials: "creations/horse" } ,
                    { label : "গাভী", partials: "creations/cow" } ,
                    { label : "বাছুর", partials: "creations/calf" } ,
                    { label : "সোনার বাছুর", partials: "creations/golden_calf" } ,
                    { label : "বাতি", partials: "creations/lamp" } ,
                    { label : "খেজুর গাছ", partials: "creations/palms" } ,
                    { label : "কণ্ঠস্বর/বাচ্য", partials: "creations/voice" } ,
                    { label : "উদ্ভিদ", partials: "creations/plant" } ,
                    { label : "পানীয়", partials: "creations/drink" } ,
                    { label : "কণ্ঠনালী", partials: "creations/throat" } ,
                    { label : "ঝরনা", partials: "creations/fountain" } ,
                    { label : "সবুজ", partials: "creations/green" } ,
                    { label : "পাহাড়", partials: "creations/hill" } ,
                    { label : "তরঙ্গ", partials: "creations/wave" } ,
                    { label : "পিতল", partials: "creations/brass" } ,
                    { label : "পথ", partials: "creations/path" } ,
                    { label : "লোহিত সাগর", partials: "creations/red_sea" } ,
                    { label : "গাছ", partials: "creations/trees" } ,
                    { label : "জানোয়ার", partials: "creations/beasts" } ,
                    { label : "পূর্বাহ্ন", partials: "creations/forenoon" } ,
                    { label : "ফল", partials: "creations/fruit" } ,
                    { label : "শিলা/পাথর", partials: "creations/rock" } ,
                    { label : "জ্বালানি", partials: "creations/firewood" } ,
                    { label : "মেষ", partials: "creations/sheep" } ,
                    { label : "পেট", partials: "creations/belly" } ,
                    { label : "গাধা", partials: "creations/donkeys" } ,
                    { label : "শূকর", partials: "creations/swine" } ,
                    { label : "পরমাণু", partials: "creations/atom" } ,
                    { label : "উল্কা", partials: "creations/meteor" } ,
                    { label : "সিনাই", partials: "creations/sinai" } ,
                    { label : "বীজ, কে এটি বাড়ায়", partials: "creations/seed__who_makes_it_grow" } , 
                    { label : "সকাল", partials: "creations/morning" } ,
                    { label : "বৃষ্টি", partials: "creations/rain" } ,
                    { label : "খাদ্যদ্রব্য", partials: "creations/food" } ,
                    { label : "পাথর", partials: "creations/stones" } ,
                    { label : "যাক্কুম", partials: "creations/zaqqum" } ,
                    { label : "বই", partials: "creations/books" } ,
                    { label : "গর্ভ", partials: "creations/womb" } ,
                    { label : "ভবন/অট্টালিকা", partials: "creations/building" } ,
                    { label : "আবরণ", partials: "creations/cover" } ,
                    { label : "বন্যা", partials: "creations/flood" } ,
                    { label : "আকাশ", partials: "creations/sky" } ,
                    { label : "রঙ", partials: "creations/colour" } ,
                    { label : "স্বপ্ন", partials: "creations/dream" } ,
                    { label : "আঙ্গুর", partials: "creations/grapes" } ,
                    { label : "গুপ্তধন", partials: "creations/treasure" } , 
                    { label : "দৃষ্টি", partials: "creations/vision" } ,
                    { label : "মাছ", partials: "creations/fish" } ,
                    { label : "হাতি", partials: "creations/elephant" } ,
                    { label : "বরই গাছ", partials: "creations/lote_tree" } ,
                    { label : "অলঙ্কার", partials: "creations/ornament" } ,
                    { label : "ঔষধি", partials: "creations/herb" } ,
                    { label : "ঘুম", partials: "creations/sleep" } ,
                    { label : "সাপ", partials: "creations/snake" } ,
                    { label : "চিহ্ন/নিদর্শন", partials: "creations/sign" } ,
                    { label : "রূপা", partials: "creations/silver" } ,
                    { label : "স্বর্গ, খাঁটি সিলযুক্ত ওয়াইন, সাদা, সুস্বাদু", partials: "creations/paradise__pure_sealed_wine__white__delicious" } ,
                    { label : "যাক্কুম গাছ", partials: "creations/tree_zaqqum" } ,
                    { label : "জল, দুই সমুদ্র", partials: "creations/water__two_seas" } ,
                    { label : "ধাতুবিদ্যা", partials: "creations/metallurgy" } ,
                    { label : "হৃদয়, সীল", partials: "creations/hearts__sealed" } ,
                    { label : "চাবি", partials: "creations/key" } ,
                    { label : "পশম", partials: "creations/wool" } ,
                    { label : "জিহ্বা", partials: "creations/tongue" } ,
                    { label : "ঘর", partials: "creations/house" } ,
                    { label : "পানি", partials: "creations/water" } ,
                    { label : "বোধশক্তি / উপলব্ধি", partials: "creations/understanding" } ,
                    { label : "তারা/নক্ষত্র", partials: "creations/stars" } ,
                    { label : "পোশাক", partials: "creations/clothing" } ,
                    { label : "সিংহাসন", partials: "creations/throne" } ,
                    { label : "বিস্ফোরণ", partials: "creations/blast" } ,
                    { label : "জাতি", partials: "creations/nation" } ,
                    { label : "ধর্ম", partials: "creations/religion" } ,
                    { label : "পালঙ্ক", partials: "creations/couch" } ,
                    { label : "বসন্ত", partials: "creations/springs" } ,
                    { label : "জীবন", partials: "creations/life" } ,
                    { label : "কঙ্কন", partials: "creations/bracelet" } ,
                    { label : "সৃষ্টি, সৃষ্টি শুরু হয় এবং পুনরাবৃত্তি", partials: "creations/creation__creation_begins_and_repeated" } ,
                    { label : "জলপাই", partials: "creations/olive" } ,
                    { label : "বীজ", partials: "creations/seed" } ,
                    { label : "কাদামাটি", partials: "creations/clay" } ,
                   
                ],
                quranic_langs: [   
                    { label: "আরবি ভাষা", partials: "arabic_languages/arabic"},
                    { label: "শব্দ / পুনরাবৃত্তি",   partials: "arabic_languages/repeat"}, 
                    { label: "নাহু",   partials: "arabic_languages/nahu"}, 
                    { label: "ছরফ (সরফ)",   partials: "arabic_languages/sarf"} 
                    
                ],    
                stories: [   
                    { label: "রাসূল ﷺ এর জীবনী", partials: "stories/muhammad_s"}, 
                    { label: "নবীদের জীবন", partials: "stories/messengers"}, 
                    { label: "সাহাবীদের জীবনী", partials: "stories/companions"},  
                    { label : "আদম (আ:)", partials: "stories/adam" } ,
                    { label : "নবী ইব্রাহিম (আঃ)", partials: "stories/abraham" } ,
                    { label : "সালেহ (আঃ)", partials: "stories/salih" } ,
                    { label : "হুদ (আঃ)", partials: "stories/hud" } ,
                    { label : "ইলিয়াস (আঃ)", partials: "stories/elias" } ,
                    { label : "আইয়ুব (আঃ)", partials: "stories/ayub" } ,
                    { label : "ইয়াকুব (আঃ)", partials: "stories/jacob_(yaqub)" } ,
                    { label : "নবী ইউসুফ (আঃ)", partials: "stories/joseph_(yusuf)" } ,
                    { label : "নবী লুত (আঃ )", partials: "stories/lot_(lut)" } ,
                    { label : "নবী সুলাইমান (আঃ )", partials: "stories/solomon" } ,
                    { label : "শুয়াইব (আঃ)", partials: "stories/shuayb" } ,
                    { label : "দাউদ (আঃ)", partials: "stories/_david" } ,
                    { label : "সলোমন (আঃ), এবং সাবার রানী", partials: "stories/_solomon__and_the_queen_of_saba" } ,
                    { label : "নূহ (আঃ), এবং অধার্মিক স্ত্রী", partials: "stories/_noah__unrighteous_wife" } ,
                    { label : "যাকারিয়া (আঃ) দীক্ষাগুরু", partials: "stories/john_the_baptist" } ,
                    { label : "যাকারিয়া (আঃ)", partials: "stories/_zachariah" } ,
                    { label : "ইসমাইল (আঃ)", partials: "stories/ishmael_(ismail)" } ,
                    { label : "ইসহাক (আঃ)", partials: "stories/_isaac_(ishaq)" } ,
                    { label : "ইউনূস (আঃ)", partials: "stories/yunus" } ,
                    { label: "নবী মূসা (আঃ)", partials: "stories/moses"}, 
                    { label : "মূসা (আঃ) এবং তাঁর সম্প্রদায়ের বাছুর-উপাসনা", partials: "stories/_moses__and_calf-worship_of_his_people" } ,
                    { label : "মূসা (আঃ) এবং তাঁর সম্প্রদায়", partials: "stories/moses__and_his_people" } ,
                    { label : "হারুন (আঃ)", partials: "stories/aaron" } ,
                    { label : "মরিয়ম,ঈসা (আঃ) এর সুখবর", partials: "stories/mary__glad_tidings_of_jesus" } ,
                    { label : "জিব্রাইল (আঃ)", partials: "stories/gabriel" } ,
                    { label : "ঈসা(আ.) এর মা মরিয়ম(আ.)", partials: "stories/mary" } ,
                    { label : "ঈসা (আঃ)", partials: "stories/jesus" } , 
                    { label : "লুকমান", partials: "stories/luqman" } ,
                    { label : "যুলকারনাইন", partials: "stories/dhul_qarnayn" } ,
                    { label : "কারুন", partials: "stories/qarun" } ,
                    { label: "ফেরাউন", partials: "stories/pharaoh"}, 
                    { label: "আদ জাতি", partials: "stories/aad"}, 
                    { label : "সামুদ জাতি", partials: "stories/thamud" } ,
                    { label : "লূতের জাতি", partials: "stories/sodomy" } ,
                    
                ], 
              
                pillars_of_islam: [   
                            { label : "ঈমান / আকিদা / বিশ্বাস",         partials: "pillars/iman_akida" }, 
                            { label : "সলাত / নামায",       partials: "pillars/salat" } , 
                            { label : "রোজা",         partials: "pillars/sawm_fasting" } , 
                            { label : "যাকাত ",       partials: "pillars/zakat" } , 
                            { label : "হজ্ব",        partials: "pillars/hajj" }  
                ],
                quranic_subjects: all_quran_subjects_array,
                other_secctions: [   
                    { label : "সতর্ককারী", partials: "subject/warner" } ,
                    { label : "দল/বাহিনী", partials: "subject/ahzab" } ,
                    { label : "যুগল/দম্পতি", partials: "subject/pair" } ,
                    { label : "মানুষ", partials: "subject/man" } ,
                    { label : "অভিভাবক", partials: "subject/guardian" } ,
                    { label : "ক্রীতদাস", partials: "subject/slaves" } ,
                    { label : "মাতাপিতা", partials: "subject/parents" } ,
                    { label : "সন্তান", partials: "subject/children" } ,
                    { label : "কুমারী", partials: "subject/maiden" } ,
                    { label : "বোন", partials: "subject/sister" } ,
                    { label : "এতিম", partials: "subject/orphans" } ,
                    { label : "স্বামী", partials: "subject/husband" } ,
                    { label : "স্ত্রী বউ", partials: "subject/wife" } ,
                    { label : "পত্নী/স্ত্রী", partials: "subject/spouse" } ,
                    { label : "পুত্রগণ", partials: "subject/sons" } ,
                    { label : "মেয়ে", partials: "subject/girl" } ,
                    { label : "মহিলা", partials: "subject/female" } ,
                    { label : "বিচারক", partials: "subject/judge" } ,
                    { label : "আত্মীয়", partials: "subject/relatives" } ,
                    { label : "মৃত", partials: "subject/dead" } ,
                    { label : "আবরার", partials: "subject/abrar" } ,
                    { label : "ধার্মিক", partials: "subject/righteous" } ,
                    { label : "কৃতজ্ঞ", partials: "subject/grateful" } ,
                    { label : "ধার্মিক", partials: "subject/pious" } ,
                    { label : "দরিদ্র", partials: "subject/poor" } ,
                    { label : "শহীদ", partials: "subject/martyr" } ,
                    { label : "মুহসিন ", partials: "subject/muhsinun" } ,
                    { label : "ধর্মে গোষ্ঠী, গোষ্ঠী এবং বিভাগসমূহ", partials: "subject/sects__sects_and_divisions_in_religion" } ,
                    { label : "মূর্খ /বোকা", partials: "subject/fool" } ,
                    { label : "একগুঁয়ে", partials: "subject/obstinate" } ,
                    { label : "নেতা", partials: "subject/leader" } ,
                    { label : "ধনী", partials: "subject/affluent" } ,
                    { label : "কাফেলা", partials: "subject/caravan" } ,
                    { label : "ভ্রমণকারী", partials: "subject/traveller" } ,
                    { label : "বেদুইন", partials: "subject/bedouin" } ,
                    { label : "সৈন্যদল", partials: "subject/troop" } ,
                    { label : "অত্যাচারী/জালিম", partials: "subject/tyrant" } ,
                    { label : "মহিলা / নারী", partials: "subject/women" } ,
                    { label : "কন্যা", partials: "subject/daughter" } ,
                    { label : "ইহুদি এবং খ্রিস্টানরা", partials: "subject/jews__and_christians" } ,
                    { label : "বধির", partials: "subject/deaf" } ,
                    { label : "উপজাতি", partials: "subject/tribes" } ,
                    { label : "কবি", partials: "subject/poet" } ,
                    { label : "ধনী", partials: "subject/rich" } ,
                    { label : "দক্ষ", partials: "subject/skilled" } ,
                    { label : "বন্দী, যুদ্ধবন্দি", partials: "subject/captives__prisoners_of_war" } ,
                    { label : "সৈন্যবাহিনী", partials: "subject/army" } ,
                    { label : "ধার্মিক, জান্নাতে", partials: "subject/righteous__in_paradise" } ,
                    { label : "নারী, সতী-সাধ্বী নারীকে দোষারোপ", partials: "subject/women__who_accuse_chaste_women" } ,
                    { label : "বন্ধু", partials: "subject/friends" } ,
                    { label : "পথিক", partials: "subject/wayfarer" } ,
                    { label : "পরামর্শ", partials: "subject/counsel" } ,
                    { label : "ঠকবাজ", partials: "subject/fraud" } ,
                    { label : "হতভাগ্য", partials: "subject/wretched" } ,
                    { label : "মাদইয়ানবাসী", partials: "subject/madyan" } ,
                    { label : "মুমিন", partials: "subject/believers" } ,
                    { label : "অত্যাচারী জুলুমকারী নির্যাতনকারী", partials: "subject/wrongdoer" } ,
                    { label : "শয়তান", partials: "subject/satan" } ,
                    { label : "শয়ত্বান", partials: "subject/devil" } ,
                    { label : "ইহুদী", partials: "subject/jews" } ,
                    { label : "বনী-ইসরাঈল", partials: "subject/israel__children_of_israel" } ,
                    { label : "রানী শেবা", partials: "subject/queen_sheba" } ,
                    { label : "ইসরাঈলের বংশধর", partials: "subject/children__of_israel" } ,
                    { label : "ইবলিস", partials: "subject/iblis" } ,
                    { label : "অনুগ্রহকারী", partials: "subject/benefactors" } ,
                    { label : "মুনাফিক", partials: "subject/hypocrites" } ,
                    { label : "অকৃতজ্ঞ", partials: "subject/ungrateful" } ,
                    { label : "খ্রিস্টান", partials: "subject/christians" } ,
                    { label : "বাসিন্দা", partials: "subject/inhabitant" } ,
                    { label : "জাতি", partials: "subject/race" } ,
                    { label : "ভ্রাতৃত্ব", partials: "subject/brotherhood" } ,
                    { label : "জ্ঞান", partials: "subject/knowledge" } ,
                    { label : "বিজ্ঞতা/পাণ্ডিত্য", partials: "subject/wisdom" } ,
                    { label : "প্রার্থনা", partials: "subject/prayer" } ,
                    { label : "ইবাদত", partials: "subject/worship" } ,
                    { label : "ধন-সম্পদ", partials: "subject/wealth" } ,
                    { label : "সাক্ষী", partials: "subject/witness" } ,
                    { label : "দান", partials: "subject/charity" } ,
                    { label : "নৈতিক আদেশ উপদেশ", partials: "subject/commandments" } ,
                    { label : "আদেশ", partials: "subject/command" } ,
                    { label : "পথপ্রদর্শন", partials: "subject/guidance" } ,
                    { label : "প্রশংসা স্তুতি গুণগান", partials: "subject/praise" } ,
                    { label : "সাবধানবাণী সতর্কীকরণ", partials: "subject/warning" } ,
                    { label : "অদৃশ্য গায়েব", partials: "subject/unseen" } ,
                    { label : "প্রতিদান প্রতিফল", partials: "subject/repayment" } ,
                    { label : "একেশ্বরবাদ", partials: "subject/monotheism" } ,
                    { label : "প্রশংসা", partials: "subject/glorification" } ,
                    { label : "সাফল্য", partials: "subject/success" } ,
                    { label : "যথার্থতা / ন্যায্যতা", partials: "subject/exactitude" } ,
                    { label : "বৈধ", partials: "subject/lawful" } ,
                    { label : "খাদ্য, হালাল এবং বেআইনী (হালাল ও হারাম) খাবার", partials: "subject/food__lawful_and_unlawful__halal_and_haram__food" } ,
                    { label : "অঙ্গীকার / চুক্তিপত্র ", partials: "subject/covenants" } ,
                    { label : "মানুষ, মানুষের কর্তব্য", partials: "subject/man__duty_of_man" } ,
                    { label : "স্মরণ করাইয়া দেত্তয়া", partials: "subject/reminder" } ,
                    { label : "আত্মা", partials: "subject/spirit" } ,
                    { label : "ভালবাসা", partials: "subject/love" } ,
                    { label : "সাদাকাহ (দান )", partials: "subject/sadaqah__charity_" } ,
                    { label : "ভোর/ফজর", partials: "subject/dawn" } ,
                    { label : "অনুপ্রেরণা", partials: "subject/inspiration" } ,
                    { label : "মজুরি", partials: "subject/wage" } ,
                    { label : "শপথ / প্রতিজ্ঞা", partials: "subject/oaths" } ,
                    { label : "অনুমোদন", partials: "subject/granting" } ,
                    { label : "মুক্তিপণ", partials: "subject/ransom" } ,
                    { label : "উত্তরাধিকার", partials: "subject/inheritance" } ,
                    { label : "ভাগ্য", partials: "subject/destiny" } ,
                    { label : "আচরণ", partials: "subject/behaviour" } ,
                    { label : "ধৈর্য", partials: "subject/patience" } ,
                    { label : "পরীক্ষা", partials: "subject/trial" } ,
                    { label : "বিজয়", partials: "subject/victory" } ,
                    { label : "লড়াই", partials: "subject/fighting" } ,
                    { label : "বিবাহ", partials: "subject/marriage" } ,
                    { label : "চুক্তি", partials: "subject/pact" } ,
                    { label : "করুণা", partials: "subject/mercy" } ,
                    { label : "আহার করা / খাদ্যগ্রহণ করা", partials: "subject/eating" } ,
                    { label : "পুনরুত্থান দিবস", partials: "subject/resurrection_day__deniers_of_resurrection_day" } ,
                    { label : "পুরস্কার", partials: "subject/reward" } ,
                    { label : "যাকাত", partials: "subject/zakat" } ,
                    { label : "নিশ্চয়তা", partials: "subject/certainty" } ,
                    { label : "মহাজাগতিক সংক্রান্ত", partials: "subject/celestial_mechanics" } ,
                    { label : "গন্তব্য / লক্ষ্য", partials: "subject/destination" } ,
                    { label : "মধ্যস্থতা", partials: "subject/intercession" } ,
                    { label : "মৃত্যু", partials: "subject/dead__death" } ,
                    { label : "আখেরাতের দিন", partials: "subject/last_day" } ,
                    { label : "মানুষ ৩ ভাগে বিভক্ত হবে ", partials: "subject/man__sorted_out_into_three_classes" } ,
                    { label : "পার্থক্য", partials: "subject/difference" } ,
                    { label : "নম্রতা", partials: "subject/humility" } ,
                    { label : "ভ্রমণ", partials: "subject/travel" } ,
                    { label : "জিহাদ", partials: "subject/jihad" } ,
                    { label : "আনন্দ", partials: "subject/joy" } ,
                    { label : "দান / সাহায্য",        partials: "advice_instructions/help" } , 
                    { label : "দান , সাদাকাহ", partials: "subject/charity__sadaqah" } ,
                    { label : "উপহার", partials: "subject/gift" } ,
                    { label : "আল্লাহর পথে ব্যয় কর", partials: "subject/spend__in_allah's_cause" } ,
                    { label : "হাসি", partials: "subject/laughter" } ,
                    { label : "দৃষ্টান্ত, বাগানের মালিক", partials: "subject/parables__people_of_the_garden" } ,
                    { label : "শোভা-সৌন্দর্য", partials: "subject/adornment" } ,
                    { label : "দৃষ্টান্ত , জনপদবাসীদের কথা", partials: "subject/parables__dwellers_of_the_town" } ,
                    { label : "সাজদাহ", partials: "subject/prostration" } ,
                    { label : "ধার্মিকতা", partials: "subject/righteousness" } ,
                    { label : "মানুষ, স্ত্রী এবং শিশুরা, যখন দুঃখ ক্লেশ স্পর্শ করে", partials: "subject/man__wife_and_children__when_harm_or_evil_touches" } ,
                    { label : "বিজ্ঞপ্তি", partials: "subject/notification" } ,
                    { label : "আনুগত্য", partials: "subject/obedience" } ,
                    { label : "ইচ্ছা/ইচ্ছাশক্তি", partials: "subject/wills" } ,
                    { label : "ঈমান বিশ্বাস", partials: "subject/faith__belief_" } ,
                    { label : "ধ্যান / চিন্তা-ভাবনা", partials: "subject/meditation" } ,
                    { label : "আল্লাহর ইচ্ছা", partials: "subject/will_of_allah" } ,
                    { label : "অধ্যয়ন", partials: "subject/studying" } ,
                    { label : "কাজ", partials: "subject/work" } ,
                    { label : "চুক্তি", partials: "subject/agreement" } ,
                    { label : "দায়িত্ব", partials: "subject/duty" } ,
                    { label : "চুক্তি", partials: "subject/treaty" } ,
                    { label : "আস্থা/বিশ্বাস", partials: "subject/trust" } ,
                    { label : "দুর্বলতা", partials: "subject/weakness" } ,
                    { label : "ছদ্মবেশ", partials: "subject/cloak" } ,
                    { label : "হিংসা", partials: "subject/envy" } ,
                    { label : "ভণ্ডামি, তাদের অন্তরে রোগ", partials: "subject/hypocrites__disease_in_their_hearts" } ,
                    { label : "দু:খ প্রকাশ", partials: "subject/regret" } ,
                    { label : "গ্লানি /পরিশ্রান্তি ", partials: "subject/tiredness" } ,
                    { label : "কষ্ট", partials: "subject/hardship" } ,
                    { label : "ঘৃণা", partials: "subject/hatred" } ,
                    { label : "সুদ (রিবা)", partials: "subject/usury__riba_" } ,
                    { label : "ভীরুতা", partials: "subject/cowardice" } ,
                    { label : "অহংকার দাম্ভিকতা", partials: "subject/arrogance" } ,
                    { label : "ভয়", partials: "subject/fear" } ,
                    { label : "জাদু", partials: "subject/sorcery" } ,
                    { label : "দিন", partials: "subject/day" } ,
                    { label : "অনুগ্রহ", partials: "subject/blessing" } ,
                    { label : "সংবাদ", partials: "subject/news" } ,
                    { label : "স্বাস্থ্য", partials: "subject/health" } ,
                    { label : "শুক্রবিন্দু", partials: "subject/drop" } ,
                    { label : "গোপন", partials: "subject/secret" } ,
                    { label : "দুর্ভোগ দুদর্শা দুরবস্থা", partials: "subject/adversity" } ,
                    { label : "ক্ষতি", partials: "subject/loss" } ,
                    { label : "বোঝা দায়িত্ব চাপা", partials: "subject/burden" } ,
                    { label : "অবিশ্বাসী কাফের", partials: "subject/disbelievers" } ,
                    { label : "বিপথগামী পথভ্রান্ত", partials: "subject/astray" } ,
                    { label : "প্রতিবন্ধকতা / বাধা", partials: "subject/obstruction" } ,
                    { label : "দুর্নীতি", partials: "subject/corruption" } ,
                    { label : "নিষিদ্ধ", partials: "subject/forbidden" } ,
                    { label : "অনুতাপ", partials: "subject/repentance" } ,
                    { label : "বিপর্যয়", partials: "subject/calamities" } ,
                    { label : "ব্যভিচার", partials: "subject/justice__adl_" } ,
                    { label : "ব্যভিচার", partials: "subject/adultery" } ,
                    { label : "উপহাস", partials: "subject/mockery" } ,
                    { label : "অভিশাপ", partials: "subject/curse" } ,
                    { label : "লোভ", partials: "subject/greed" } ,
                    { label : "উপভোগ", partials: "subject/enjoyment" } ,
                    { label : "বিবাহবিচ্ছেদ", partials: "subject/divorce" } ,
                    { label : "অংশীদার", partials: "subject/partner" } ,
                    { label : "সন্দেহ", partials: "subject/doubt" } ,
                    { label : "ধর্মত্যাগ", partials: "subject/apostasy" } ,
                    { label : "হত্যাকাণ্ড", partials: "subject/killing" } ,
                    { label : "অজ্ঞতা", partials: "subject/ignorance" } ,
                    { label : "অশুভ", partials: "subject/evil" } ,
                    { label : "মিথ্যা কথা", partials: "subject/falsehood" } ,
                    { label : "মিথ্যা", partials: "subject/lie" } ,
                    { label : "শয়তানী শক্তি", partials: "subject/taghut" } ,
                    { label : "অপমান", partials: "subject/abasement" } ,
                    { label : "শত্রুতা", partials: "subject/hostility" } ,
                    { label : "প্রতিশোধ", partials: "subject/revenge" } ,
                    { label : "পাপ", partials: "subject/sin" } ,
                    { label : "দোষারোপ", partials: "subject/blame" } ,
                    { label : "বিশ্বাসঘাতকতা", partials: "subject/infidelity" } ,
                    { label : "ঔদ্ধত্য", partials: "subject/insolence" } ,
                    { label : "যন্ত্রণা", partials: "subject/torment" } ,
                    { label : "ত্যাগ", partials: "subject/sacrifice" } ,
                    { label : "উল্লাস", partials: "subject/exultation" } ,
                    { label : "পদচিহ্ন", partials: "subject/footsteps" } ,
                    { label : "ছাঁচ/প্যাটার্ন", partials: "subject/pattern" } ,
                    { label : "সম্পত্তি", partials: "subject/property" } ,
                    { label : "ইচ্ছা", partials: "subject/desires" } ,
                    { label : "ইস্রায়েল, তাদের চুক্তি", partials: "subject/israel__their_covenants" } ,
                    { label : "মানুষ, তৈরি এবং সমৃদ্ধ", partials: "subject/man__created_and_endowed_with" } ,
                    { label : "মুহাম্মদ(সাঃ), মুহাম্মদ(সাঃ) সালাত আদায়", partials: "subject/muhammad__muhammad_devoted_to_prayer" } ,
                    { label : "মুহাম্মদ(সাঃ), মুহাম্মদ(সাঃ) এর উক্তি", partials: "subject/muhammad__his_sayings_" } ,
                    { label : "গোপনীয়তা", partials: "subject/privacy" } ,
                    { label : "যৌন সম্পর্ক", partials: "subject/sexual_relations" } ,
                    { label : "চুরি", partials: "subject/theft" } ,
                    { label : "প্রাচীর", partials: "subject/wall" } ,
                    { label : "বিপর্যয়", partials: "subject/disaster" } ,
                    { label : "অসুস্থতা", partials: "subject/illness" } ,
                    { label : "নিপীড়ন", partials: "subject/persecution" } ,
                    { label : "বিশ্বাসঘাতকতা", partials: "subject/betrayal" } ,
                    { label : "লুঠ", partials: "subject/booty" } ,
                    { label : "শাস্তি", partials: "subject/penalty" } ,
                    { label : "তৃষ্ণা", partials: "subject/thirst" } ,
                    { label : "প্রকৃতিবাদ", partials: "subject/materialism" } ,
                    { label : "উদ্ঘাটন", partials: "subject/revelation" } ,
                    { label : "সাদা", partials: "subject/white" } ,
                    { label : "পূর্ব পশ্চিম", partials: "subject/east_west" } ,
                    { label : "মানুষের সৃষ্টি", partials: "subject/creation__of_man" } ,
                    { label : "পূর্বপুরুষ বাপ-দাদা", partials: "subject/ancestors" } ,
                    { label : "জমায়েত", partials: "subject/gathering" } ,
                    { label : "খ্রীষ্টের উপদেশাবলী", partials: "subject/gospel" } ,
                    { label : "ধর্মগ্রন্থ", partials: "subject/scriptures" } ,
                    { label : "বাইবেল", partials: "subject/bible" } ,
                    { label : "ইসলাম", partials: "subject/islam" } ,
                    { label : "কাফের এবং মুহাম্মদ (সাঃ)", partials: "subject/disbelievers__and_muhammad__saw_" } ,
                    { label : "মুহাম্মদ(সাঃ), মুহাম্মাদ(সাঃ) এর পরিবার সম্পর্কে আয়াত", partials: "subject/muhammad__ayat_regarding_family_of_muhammad" } ,
                    { label : "ধর্মগ্রন্থ, ইহুদি এবং খ্রিস্টানগণ", partials: "subject/scriptures__people_of_the__jews_and_christians_" } ,
                    { label : "আল্লাহ ব্যতীত মিথ্যা উপাস্য, মূর্তি এবং তথাকথিত অংশীদার", partials: "subject/false_gods__idols_and_so-called_partners_besides_allah" } ,
                    { label : "প্রার্থনার সময়", partials: "subject/prayer__times" } ,
                    { label : "যৌনসহবাস", partials: "subject/sexes" } ,
                    { label : "ইস্রায়েল, বনী ইস্রায়েল আল্লাহর আনুগত্যের বিরুদ্ধে বিদ্রোহ", partials: "subject/israel__children_of_israel_rebelling_against_allah's_obedience" } ,
                    { label : "মূসা, দুই সমুদ্রের সংযোগস্থল", partials: "subject/moses__to_the_junction_of_the_two_seas" } ,
                    { label : "তীর্থযাত্রা", partials: "subject/pilgrimage" } ,
                    { label : "প্রজন্ম", partials: "subject/generation" } ,
                    { label : "মানুষ, বাম হাতের সাহাবী", partials: "subject/man__companions_of_left_hand" } ,
                    { label : "উহুদ", partials: "subject/uhud" } ,
                    { label : "গুহা, গুহার লোক", partials: "subject/cave__people_of_the_cave" } ,
                    { label : "উন্মত্ততা/পাগলামি", partials: "subject/madness" } ,
                    { label : "মুহাম্মদ(সাঃ), জিব্রাইল কে দেখেছেন", partials: "subject/muhammad__saw_gabriel" } ,
                    { label : "জ্বলন্ত আগুন", partials: "subject/blaze" } ,
                    { label : "মানুষ, তার অহংকার", partials: "subject/man__his_arrogance" } ,
                    { label : "ফেরাউন, ফেরাউনের পরিবারের একজন বিশ্বাসী লোক", partials: "subject/pharaoh__a_believing_man_from_pharaoh's_family" } ,
                    { label : "পরিখা / খন্দক", partials: "subject/trench" } ,
                    { label : "দেশান্তরে গমন", partials: "subject/migration" } ,
                    { label : "তাবুক", partials: "subject/tabuk" } ,
                    { label : "দলিল/প্রমাণ/লেখ্য", partials: "subject/record" } ,
                    { label : "রাজত্বকাল", partials: "subject/kingship" } ,
                    { label : "অংশীদার, আল্লাহর অংশীদার, একটি মিথ্যাবাদী", partials: "subject/partner__partners_of_allah__a_falsehood" } ,
                    { label : "নিরাপত্তা", partials: "subject/security" } ,
                    { label : "মক্কা (বাক্কা)", partials: "subject/makkah__bakkah_" } ,
                    { label : "অতিরিক্ত", partials: "subject/excess" } ,
                    { label : "কাবা", partials: "subject/kaaba" } ,
                    { label : "মানুষ, ডান হাতের সাহাবী", partials: "subject/man__companions_of_right_hand" } ,
                    { label : "মানুষ, নামায আদায়কারী", partials: "subject/man__devoted_to_prayers" } ,
                    { label : "পরিমাপ করা", partials: "subject/measure" } ,
                    { label : "শক্তিহীনতা", partials: "subject/powerlessness" } ,
                    { label : "সতীত্ব", partials: "subject/chastity" } ,
                    { label : "অনুমান", partials: "subject/conjecture" } ,
                    { label : "ব্যাখ্যা", partials: "subject/interpretation" } ,
                    { label : "অর্থ", partials: "subject/meaning" } ,
                    { label : "ভারসাম্য", partials: "subject/balance" } ,
                    { label : "মোহর (দাম্পত্য-অর্থ)", partials: "subject/mahr__bridal-money_" } ,
                    { label : "সংগ্রাম / লড়াই", partials: "subject/striving" } ,
                    { label : "মুনাফিক ও কাফেরদের হৃদয়ে রোগ", partials: "subject/disease_in_the_hearts_of_hypocrites_and_disbelievers" } ,
                    { label : "হজ", partials: "subject/hajj__pilgrimage_" } ,
                    { label : "হৃদয়, যার হৃদয়ে একটি রোগ আছে", partials: "subject/hearts__in_whose_hearts_there_is_a_disease" } ,
                    { label : "জামা", partials: "subject/shirt" } ,
                    { label : "অপরাধ", partials: "subject/crime" } ,
                    { label : "পানপাত্র", partials: "subject/cup" } ,
                    { label : "ক্ষুধা", partials: "subject/hunger" } ,
                    { label : "বিশ্বস্ত", partials: "subject/trustworthy" } ,
                    { label : "আল্লাহর চেহারা বা মুখোমুখি", partials: "subject/face_or_countenance_of_allah" } ,
                    { label : "মালপত্র", partials: "subject/goods" } ,
                    { label : "মুহাম্মদ(সাঃ), এবং অন্ধ মানুষ", partials: "subject/muhammad__and_the_blind_man" } ,
                    { label : "দলাদলি", partials: "subject/faction" } ,
                    { label : "সিয়াম / রোজা", partials: "subject/fasting" } ,
                    { label : "বিজয়ী", partials: "subject/victorious" } ,
                    { label : "প্রমান", partials: "subject/evidence" } ,
                    { label : "মূসা, সঠিক পথে পরিচালিত", partials: "subject/moses__guided_to_the_right_path" } ,
                    { label : "উপদেশ", partials: "subject/admonition" } ,
                    { label : "বিধান", partials: "subject/provision" } ,
                    { label : "কবর", partials: "subject/grave" } ,
                    { label : "উপত্যকা", partials: "subject/valley" } ,
                    { label : "পৃথিবী, ভূমিকম্প", partials: "subject/earth__earthquake" } ,
                    { label : "বিভক্তি-প্রাচীর", partials: "subject/barzakh" } ,
                    { label : "ভ্রূণতত্ত্ব", partials: "subject/embryology" } ,
                    { label : "গর্ভাবস্থা", partials: "subject/pregnancy" } ,
                    { label : "জবাই", partials: "subject/slaughter" } ,
                    
                ] 
                
        } 
  });


// Make sure responsive elements works based on window resize 
function updateResponsiveElements() {
    var $containerWidth = $(window).width();
    if ($containerWidth >= 600) {
        $('.main-header').css('width',  ($containerWidth - 250) + 'px'); 
    }else{
        $('.main-header').css('width', '100%'); 
    }

}



// Right sidebar 
function openSidebarMenu(){
    $('#rightsidebarbutton').trigger('click'); 
    $('.dynamic_content_block').hide();
    $('#dynamic_heading').slideDown();
}


function uniqA(arr) { 
    return arr.sort(function(a, b) {return a - b;} ); 
}


function debugger_callback(){ 
    if(debugonly == false)
        $('.debugonly').hide(); 
}

function populate_dynamic_view(dataObj){ 
      
      $('#dynamic_content .dynamic_content_block').html('');
      debugger_callback();

      loadfew = 0; // initailly load first few 
      loadfirstFewMax = 5;
      
      // ordering ayah number 
      $.each(dataObj.ayah, function(key, surah){
            surah_ayah_S   = uniqA(surah['ayah']);
            surah['ayah'] = surah_ayah_S; 
      });
 

      dynamicObj = dataObj;

      $('.intro_html').html(dataObj.introHtml); // load intro 

      quraner_ayah_title = 'কুরআনের আয়াত';
      books_title = 'বই / পি.ডি.এফ ';
      videos_title = 'ভিডিও';
      articles_title = 'ওয়েবসাইট লিঙ্ক';
      
      // load topics_index 
      var topic_index_html = quraner_ayah_sb_html  = books_sb_html = videos_sb_html = articles_sb_html = "";
      var quraner_ayah_topic_index_html =  books_topic_index_html = videos_topic_index_html = articles_topic_index_html = '';
      if(dataObj.ayah.length){
          ayah_menu_link       = '<a  href="javascript:void(0)" onClick="loadAllAyah()" class="nav-link active quran_ayah_section">';

          discuss_in_surah_number =   dataObj.ayah.length;
          total_ayah              = 0;
          surah_name_sb_menu      = '<li class="nav-item">' + ayah_menu_link  + '<i class="fas fa-book-open nav-icon"></i> এ বিষয়ক সব  আয়াত  </a></li>';
          $.each(dataObj.ayah, function(key, surah){
            surah_ayah_S   = uniqA(surah['ayah']);
            
            total_ayah += surah_ayah_S.length;

            // loading ayah from each surah 
                            surah_ayah_html           = '';
                            $.each(surah_ayah_S, function(k, ayah){
                                surah_ayah_html           += '<li class="nav-item"><a href="javascript:void(0)" onClick="loadSingleAyah('+ surah['surah'] +','+  ayah +')" class="nav-link"><i class="fas fa-angle-right nav-icon"></i> আয়াত : '+ en2bnNumber(ayah) + '</a></li>';
                            });
                            
            // loading ayah from each surah end 

            surah_name_sb_menu      += '<li class="nav-item has-treeview"><a href="javascript:void(0)" class="nav-link"><i class="fas fa-book-open nav-icon"></i> <p>সূরা('+ en2bnNumber(surah['surah']) + '): ' + bangla_sura_names[surah['surah'] -1 ] +' <i class="right fas fa-angle-left"></i></p></a> <ul class="nav nav-treeview submenu2"><li class="nav-item"><a href="javascript:void(0)" onClick="loadAyahFromSurah('+key+')" class="nav-link"><i class="fas fa-angle-right nav-icon"></i> সব আয়াত </li>'+ surah_ayah_html + '</ul></li>';
          })
          

          quraner_ayah_sb_html = '<li class="nav-item has-treeview"><a href="#" class="nav-link"><i class="nav-icon fas fa-book-open"></i> <p> '+ quraner_ayah_title +' <i class="right fas fa-angle-left"></i></p></a><ul class="nav nav-treeview">' + surah_name_sb_menu + '</ul></li>';
          quraner_ayah_topic_index_html = infobox_html('success', 'book-open', ayah_menu_link    + ' কুরআনের আয়াত  </a>', total_ayah , "loadAllAyah()");
      }

      if(dataObj.books.length){
          books_menu_link           = '<a  href="javascript:void(0)" onClick="loadBooks()" class="nav-link active books_section">';
          
          books_sb_html             = '<li class="nav-item has-treeview">' + books_menu_link + '<i class="nav-icon fas fa-book"></i> <p> '+ books_title  +'</p></a></li>';
          books_topic_index_html    = infobox_html('warning', 'book', books_menu_link  + books_title  + ' </a>', dataObj.books.length, "loadBooks()");
      }

      if(dataObj.videos.length){
        video_menu_link         = '<a  href="javascript:void(0)" onClick="loadVideos()" class="nav-link active videos_section">';
        videos_sb_html          = '<li class="nav-item has-treeview">' + video_menu_link + '<i class="nav-icon fas fa-play-circle"></i> <p> '+ videos_title +'</p></a></li>';
        videos_topic_index_html = infobox_html('danger', 'play-circle', video_menu_link  + videos_title  + ' </a>', dataObj.videos.length, "loadVideos()" );
      }

      if(dataObj.articles.length){ 
        articles_menu_link         = '<a href="javascript:void(0)" onClick="loadArticles()" class="nav-link active articles_section">';
        articles_sb_html          = '<li class="nav-item has-treeview">' + articles_menu_link + '<i class="nav-icon fas fa-play-circle"></i> <p> '+ articles_title +'</p></a></li>';
        articles_topic_index_html = infobox_html('info', 'external-link-alt', articles_menu_link  + articles_title  + ' </a>', dataObj.articles.length, "loadArticles()" );
 
      }
  

     var extra_HTML_topic_index_html = extraHTML_sb_html = "";

      if(dataObj.extrahtml !== undefined){ 
        if(dataObj.extrahtml.length){ 
            
            
            $.each(dataObj.extrahtml, function(exhtmlKey, exhtmlVal){
                extraHTML_block_Heading         = exhtmlVal['heading'];
                extraHTML_block_Sub_Heading     = exhtmlVal['subheading'];

                extraHTML_menu_link             = '<a href="javascript:void(0)" onClick="loadExtraHTML(\'' + exhtmlVal['html'] + '\', '+ exhtmlKey + ')" class="nav-link active extraHTML_section_'+exhtmlKey+'">';
                extraHTML_sb_html               += '<li class="nav-item has-treeview">' + extraHTML_menu_link + '<i class="nav-icon fas fa-play-circle"></i> <p> ' + extraHTML_block_Heading + '</p></a></li>';
                
                bgClass = exhtmlVal['bg-class'] === undefined ? 'info' : exhtmlVal['bg-class'];
                extra_HTML_topic_index_html += infobox_html(bgClass, exhtmlVal['icon'], extraHTML_menu_link  + extraHTML_block_Heading  + ' </a>', extraHTML_block_Sub_Heading , "loadExtraHTML('"+ exhtmlVal['html'] +"', "+ exhtmlKey + ")" , true);
        
            });

        }
        
        
      }

      extrarawhtml = '';
      if(dataObj.extrarawhtml !== undefined){ 
          extrarawhtml = dataObj.extrarawhtml;
      }


        

      topic_index_html =  quraner_ayah_topic_index_html + books_topic_index_html + videos_topic_index_html + articles_topic_index_html + extra_HTML_topic_index_html + extrarawhtml; 
      $('.topic_index').html(topic_index_html);
       
      // console.log('populate_dynamic_view');
 
      // load sidebar 
      $('.subject-menu-right .settings-control-panel').html('<nav class="mt-3"><ul data-widget="treeview" role="menu" data-accordion="false" class="nav nav-pills nav-sidebar flex-column"><li class="nav-header"> নির্বাচিত  বিষয় সম্পর্কিত  </li> ' + quraner_ayah_sb_html  + '<li><br /></li>' + extraHTML_sb_html + books_sb_html + videos_sb_html + articles_sb_html + '</ul></nav>');
      $('#dynamic_heading').slideDown();


      if(auto_load_function !== ''){
       // setTimeout(function(){
              $('.' + auto_load_function).trigger('click');
              auto_load_function = '';
       // }, 1000);
      }

     // rightsidescrollbar();

}


function loadDynamicSAW(e){
    saw = $(e).parent().attr('id');
    saw_split  = saw.replace('wdata-dsaw-', '').replace('ldata-dsaw-','').replace('rdata-dsaw-','').split("-"); 
    console.log($('#' + saw + ' .dynam_syw_content').html());
    if($('#' + saw + ' .dynam_syw_content').html() === ""){ 
            loadToTarget(saw_split[0] , saw_split[1] , '#' + saw + ' .dynam_syw_content', saw_split[2]);
    }else{
        $('#' + saw + ' .dynam_syw_content').toggle();
        $('#'+ saw + ' .arabic, #'+ saw + '  .saw_bn').toggle();

    }
}


function loadToTarget(surah, ayah,  replaceBox, highlight = 0){

    url = '/resources/quran/'+ surah +'/'+ ayah + '_ayat.html';
    $('.ajaxprocess').addClass('run');
    $.ajax({
        type: "GET",
        async:false, // set async false to wait for previous response
        url: url,  
        success: function(data)
        {
            
            $('#'+ saw + ' .arabic, #'+ saw + '  .saw_bn').hide();
            $('#'+ saw + ' .saw_block').prepend('সূরা ' + bangla_sura_names[surah -1] + ' ');

            
            var $div = $('<div>').html(data);
            $div.find('.block:nth-child('+ highlight +')').addClass('highlightedword'); 
            
            var processedHTML = $div.html();
 
            $(replaceBox).html(processedHTML);   
            $(replaceBox).addClass('quran-container');  
            
            $('.ajaxprocess').removeClass('run'); 
          
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            $('.ajaxprocess').removeClass('run'); 
            console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
        }
    });    
}

 
function loadandReplace(url, replaceBox){
    if($(replaceBox).html() === ""){
        $('.ajaxprocess').addClass('run');
        $.ajax({
            type: "GET",
            async:false, // set async false to wait for previous response
            url: url,  
            success: function(data)
            {  
                
                $(replaceBox).html(data);     
                $('.ajaxprocess').removeClass('run'); 
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                $('.ajaxprocess').removeClass('run'); 
                console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
            }
        });   

    }else{
        $(replaceBox).toggle();
    }
}

function ShowOnlySurahWords(url, replaceBox, onlyshow = ''){
    if($(replaceBox).html() === ""){
        $('.ajaxprocess').addClass('run');
        $.ajax({
            type: "GET",
            async:false, // set async false to wait for previous response
            url: url,  
            success: function(data)
            {  
                $(replaceBox).html(data);
                $(replaceBox).prepend('<a href="javascript:void(0)" onClick="$(this).parent().hide()"><i class="fa fa-times-circle fa-2x"></i></a>');
                $('.ajaxprocess').removeClass('run'); 
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                $('.ajaxprocess').removeClass('run'); 
                console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
            }
        });   

    }else{ 
        $(replaceBox).slideDown(); 
    }
    
    if(onlyshow != ''){
        $(replaceBox + ' .dynamic_load_saw').each(function(){ 
            if($(this).attr('id').indexOf(onlyshow) == -1) 
            $(this).addClass('hidden');
        })
    }else{
        $(replaceBox + ' .dynamic_load_saw').each(function(){  
            $(this).removeClass('hidden');
        })
    }

}

jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}
 
 

function infobox_html(bgClass, iconClass, topicTitle, totalCountOrDescription, onClick, noTotalCount = false, wrap_id = '', wrap_class = 'col-sm-12 col-md-6 col-lg-4 col-xl-3'){
    returnhtml  = '<div class="'+ wrap_class + '" id="'+ wrap_id + '">';
    returnhtml += '     <div class="info-box">';
    returnhtml += '         <span class="info-box-icon bg-'+ bgClass + '"><a href="javascript:void(0)" onClick="' + onClick + '"><i class="fas fa-'+ iconClass + '"></i></a></span>';

    returnhtml += '         <div class="info-box-content">';
    returnhtml += '                     <span class="info-box-text topic_link"><h2 class="subboxheading">'+ topicTitle + '</h2></span>';
    returnhtml += '                     <span class="info-box-number">';
    
    if(noTotalCount)
    returnhtml += totalCountOrDescription ; 
    else 
    returnhtml += en2bnNumber(totalCountOrDescription, 'bn') + ' টি'; 
    
    returnhtml += '                     </span>';
    returnhtml += '         </div>';
     
    returnhtml += '     </div>';
     
    returnhtml += '</div>';

  return returnhtml;
}
 
  
function en2bnNumber(input, toWhat = 'bn') {
    NumbersArray = toWhat == 'en' ? bnEnNumbers : enBnNumbers;
    input = typeof input == 'number'  ? input.toString() : input; 
     
    var output = [];
    for (var i = 0; i < input.length; ++i) {
      if (NumbersArray.hasOwnProperty(input[i])) {
        output.push(NumbersArray[input[i]]);
      } else {
        output.push(input[i]);
      }
    }
    return output.join('');
}


function openReadMode(sn){
    if($('.card.quranic_surah.surah-' + (sn+1) + ' .surah_readmode_'+ (sn+1)).html() === ""){ 

        ajaxurl = '/partials/quran/surah_tajweed/'+ (sn+1) + '.html';
        $.ajax({
            type: "GET",
            async:false, // set async false to wait for previous response
            url: ajaxurl,  
            success: function(data)
            {
                
                 $('.card.quranic_surah.surah-' + (sn+1) + ' .surah_readmode_'+ (sn+1)).html('<div class="col-md-12 text-right"><a href="javascript:void(0)" onclick="$(this).parent().parent().hide()"><i class="fa fa-times-circle fa-2x"></i></a></div><div class="qtext tajweed" dir="rtl"><div class="page" id="read_mode_surah_'  + (sn+1) + '">' + data + '</div></div>');  
              
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                $('.ajaxprocess').removeClass('run'); 
                console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
            }
        });
         
    }

   // $('.card.quranic_surah.surah-' + (sn+1) + ' .timeline').slideToggle();
    $('.card.quranic_surah.surah-' + (sn+1) + ' .surah_readmode_'+ (sn+1)).slideToggle();
}

function openGrammerBooks(sn){
    if($('.card.quranic_surah.surah-' + (sn+1) + ' .surah_pdf_grammer_'+ (sn+1)).html() === ""){
        $('.card.quranic_surah.surah-' + (sn+1) + ' .surah_pdf_grammer_'+ (sn+1)).html('<div class="col-md-12 text-right"><a href="javascript:void(0)" onclick="$(this).parent().parent().hide()"><i class="fa fa-times-circle fa-2x"></i></a></div><div class="pdf_view" id="surah_'  + (sn+1) + '"></div>');
        pdf = '/resources/pdf/s'+ (sn+1) + '.pdf';
        var flipBook = $("#surah_"  + (sn+1)).flipBook(pdf, {singlePageMode: 1, height: '100%', duration: 800, backgroundColor: '#eee', maxTextureSize: 7680, zoomRatio: 1.2, cachedPages: 8, scrollWheel: false});
    }

   // $('.card.quranic_surah.surah-' + (sn+1) + ' .timeline').slideToggle();
    $('.card.quranic_surah.surah-' + (sn+1) + ' .surah_pdf_grammer_'+ (sn+1)).slideToggle();
}


function getSurahHeading(surah){
    return '<i class="fas fa-play-circle bg-green playayah" data-playsrc="'+ surah + '" onclick="setnew_audio_and_play(this, true)" style="border-radius: 50%;"></i><span class="mobilefull">সূরা '+ en2bnNumber(surah+1) + ' : ' + bangla_sura_names[surah]  +  '<span class="arabic"> ( ' + arabic_sura_names[surah]  + ' ) </span> </span><span class="mobilefull"> সূরার বাংলা অর্থ (  '  + surah_bangla_meaning[surah] +' ) </span><span class="mobilefull"> সূরার মোট আয়াত(' + en2bnNumber( ayat_numbers[surah] ) +') </span><span class="mobilefull"> নাজিল স্থান : '+ place_revealed[surah] +' </span><span class="mobilefull last"> নাজিল ক্রম :'+ revealed_order[surah] + '</span> | <a href="javascript:void(0)" onClick="openReadMode('+surah+')" ><i class="fa fa-hand-point-up"></i> সব আয়াত একসাথে  </a> | <a href="javascript:void(0)" onClick="openGrammerBooks('+surah+')" ><i class="fa fa-book"></i> সূরার আরবি ব্যাকরণ </a> | <a href="javascript:void(0)" onClick="loadUrlInModal(\'/partials/arabic_languages/wordspersurah/'+ (surah+1) +'.html\', \' সূরা '+ en2bnNumber(surah+1) + ' : ' + bangla_sura_names[surah] + ' :  শব্দ+পুনরাবৃত্তি :  (হুবুহু শব্দ :' + en2bnNumber(  exact_word_rep_surah[surah]) + ' |  মৌলিক শব্দ: ' + en2bnNumber(lemma_word_rep_surah[surah]) + ' | সূরার মোট আরবি হরফ:' + en2bnNumber(  surah_letter_count[surah] ) + ')\')" ><i class="fa fa-braille"></i> সূরার শব্দ+পুনরাবৃত্তি (হুবুহু শব্দ :' + en2bnNumber(  exact_word_rep_surah[surah]) + ' |  মৌলিক শব্দ: ' + en2bnNumber(lemma_word_rep_surah[surah]) + ' | সূরার মোট আরবি হরফ:' + en2bnNumber(  surah_letter_count[surah] ) + ') </a>';     
}


function getSurahMinHeading(surah){
    return ' সূরা '+ en2bnNumber(surah+1) + ' : ' + bangla_sura_names[surah]  +  ' <span class="arabic"> ( ' + arabic_sura_names[surah]  + ' ) </span> ';     
}


function loadOnDemand(e){
     
    replaceBox = $(e).parent();
    $('.ajaxprocess').addClass('run');
    $.ajax({
        type: "GET",
        async:false, // set async false to wait for previous response
        url: $(e).parent().data('ajaxurl'),  
        success: function(data)
        {
            
            $(replaceBox).html(data);   
            $('.ajaxprocess').removeClass('run');  
          
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            $('.ajaxprocess').removeClass('run'); 
            console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
        }
    });   


}



function loadTafseer(surah, ayah){
    ajaxCallingDiv = $('.quranic_tafseer.tafseer-'+ surah + '-ayah-'+ ayah);
    if($(ajaxCallingDiv).html() === ""){
        $('.ajaxprocess').addClass('run'); 
        $.ajax({
            type: "GET",
            async:false, // set async false to wait for previous response
            url: ajaxCallingDiv.data('ajaxurl'),  
            success: function(data)
            {
                
                $(ajaxCallingDiv).html(data); 
                $(ajaxCallingDiv).prepend('<div class="text-right"><a href="javascript:void(0)" onclick="$(this).parent().parent().html(\'\')"><i class="fa fa-times-circle fa-2x"></i></a></div>'); 
                $('.ajaxprocess').removeClass('run');   
            
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                $('.ajaxprocess').removeClass('run'); 
                console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
            }
        });  
     }else{
         $(ajaxCallingDiv).toggle();
     }


}



function loadGrammer(surah, ayah){
     
    ajaxCallingDiv = $('.quranic_tafseer.tafseer-'+ surah + '-ayah-'+ ayah);

    total_ayah_in_this_surah = ayat_numbers[surah-1]; 
    next_ayah = parseInt(ayah) + 1;
    prev_ayah = parseInt(ayah) - 1; 

    surah_nav_prev = next_ayah <= total_ayah_in_this_surah ? '<a href="javascript:void(0)" onClick="loadGrammer(\''+surah+'\', \''+next_ayah+'\')" ><i class="fa fa-angle-double-right"></i></a> &nbsp; &nbsp; ' : '';
    surah_nav_next = prev_ayah < 1 ? '' : ' &nbsp; &nbsp; <a href="javascript:void(0)" onClick="loadGrammer(\''+surah+'\', \''+prev_ayah+'\')" ><i class="fa fa-angle-double-left"></i></a>';

    $('#modal-xl .modal-title').html(surah_nav_next + getSurahMinHeading(surah-1)  + ' : ' + en2bnNumber(ayah) + ' নং আয়াতের শব্দবিন্যাস ও  শব্দ পুনরাবৃত্তি ' + surah_nav_prev);  
    $('#modal-xl .modal-body .modal-body-content').html('<div class="text-center"><img style="margin-top: 100px;" src="/images/loading.gif" alt="Loading..." /></div>');  
    $('#modal-xl').modal(); 
    $('.ajaxprocess').addClass('run');
    $.ajax({
       type: "GET",
       async:false,    
       url: "/resources/grammer/"+ surah + "_"+ ayah + ".html",// +,  
       success: function(data)
       {
           $('#modal-xl .modal-body .modal-body-content').html(data);  

           // Create the event
           var event = new CustomEvent("modal-content-ready", {});
           // Dispatch/Trigger/Fire the event
           document.dispatchEvent(event);


           var osInstance = OverlayScrollbars(document.querySelector('.modal-body'), { });
           osInstance.getElements().host.classList.add('os-host-flexbox');  
           $('.ajaxprocess').removeClass('run'); 

       },
       error: function(XMLHttpRequest, textStatus, errorThrown) { 
           $('.ajaxprocess').removeClass('run'); 
           console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
       }
   });  

}



function loadGrammer2(surah, ayah){
    total_ayah_in_this_surah = ayat_numbers[surah-1]; 
    next_ayah = parseInt(ayah) + 1;
    prev_ayah = parseInt(ayah) - 1; 

    surah_nav_prev = next_ayah <= total_ayah_in_this_surah ? '<a href="javascript:void(0)" onClick="loadGrammer2(\''+surah+'\', \''+next_ayah+'\')" ><i class="fa fa-angle-double-right"></i></a> &nbsp; &nbsp; ' : '';
    surah_nav_next = prev_ayah < 1 ? '' : ' &nbsp; &nbsp; <a href="javascript:void(0)" onClick="loadGrammer2(\''+surah+'\', \''+prev_ayah+'\')" ><i class="fa fa-angle-double-left"></i></a>';


    $('#modal-xl .modal-title').html(surah_nav_next + getSurahMinHeading(surah-1)  + ' : ' + en2bnNumber(ayah) + ' নং আয়াতের আরবি ব্যাকরণ  ' + surah_nav_prev);  
    $('#modal-xl .modal-body .modal-body-content').html('<div class="text-center"><img style="margin-top: 100px;" src="/images/loading.gif" alt="Loading..." /></div>');  
    $('#modal-xl').modal(); 
    $('.ajaxprocess').addClass('run');
    $.ajax({
       type: "GET",
       async:false, 
       url: "/resources/irab/"+ surah + "_"+ ayah + ".html", 
       success: function(data)
       {
           $('#modal-xl .modal-body .modal-body-content').html(data);  
           $('#modal-xl .modal-body .modal-body-content').append('<div class="row"><div class="col-12 text-right"> <br /><small>** Source : http://corpus.quran.com</small></div></div>');  
 
           var osInstance = OverlayScrollbars(document.querySelector('.modal-body'), { });
           osInstance.getElements().host.classList.add('os-host-flexbox');  
           $('.ajaxprocess').removeClass('run'); 

       },
       error: function(XMLHttpRequest, textStatus, errorThrown) { 
           $('.ajaxprocess').removeClass('run'); 
           console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
       }
   });  

}



function loadUrlInModal(ajaxurl, modaltitle){ 

    $('#modal-xl .modal-title').html(modaltitle);  
    $('#modal-xl .modal-body .modal-body-content').html('<div class="text-center"><img style="margin-top: 100px;" src="/images/loading.gif" alt="Loading..." /></div>');  
    $('#modal-xl').modal(); 
    $('.ajaxprocess').addClass('run'); 
    $.ajax({
       type: "GET",
       async:false,  
       url: ajaxurl,  
       success: function(data)
       {
           $('#modal-xl .modal-body .modal-body-content').html(data);  
 
           var osInstance = OverlayScrollbars(document.querySelector('.modal-body'), { });
           osInstance.getElements().host.classList.add('os-host-flexbox');  
           $('.ajaxprocess').removeClass('run');  
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) { 
           $('.ajaxprocess').removeClass('run'); 
           console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
       }
   });  

}





// Function to load current dynamic html ~ with Quranic Ayah 
function loadAllAyah(){
    gobacktotop(); 
    $('#dynamic_heading').slideUp();

   // if($('#dynamic_content .quranic_block').html() === ""){  
        
                ayah_html = '';
                bisoyoktitle =  (dynamicObj['subject'] !== "") ? '["'+ dynamicObj['subject']  + '"] বিষয়ক : ' : '';

                $.each(dynamicObj.ayah, function(key, surah){
                    
                    ayah_line_html = '<div class="surah_pdf_window surah_pdf_grammer_' + surah['surah'] +'" style="display:none"></div><div class="surah_readmode_window surah_readmode_' + surah['surah'] +'" style="display:none"></div><div class="timeline">';
                    $.each(surah['ayah'], function(k, ayah){
                        ayah_line_html   += get_ayahHTML(surah['surah'], ayah);
                    });
                    ayah_line_html += '</div>';  
                    ayah_html += generateCardsHtml( getSurahHeading(surah['surah']-1) , ayah_line_html , 'info bg-lightbg quranic_surah surah-' + surah['surah'], false, 'text-left', 'surah-' + surah['surah']);
                });

                $('#dynamic_content .quranic_block').html('<div class="card card-secondary"><div class="card-header"><h3 class="card-title">   '+ bisoyoktitle + ' কুরআনের আয়াতসমূহ  </h3></div> </div> <div class="card-body" style="display: block;">'+ ayah_html + '</div></div>');    
                
                setTimeout(function(){recursively_ajax(true);}, 300);
   // } 
        
    show_only_block_dynamic('quranic');
    $('.quranic_surah.card').CardWidget('expand');
     

}
 

function openOnlyCard(cardId, othersToClose){
    

    $(othersToClose).addClass('collapsed-card');
    $(othersToClose + ' .btn-tool i').addClass('fa-minus').removeClass('fa-plus');
    $(othersToClose + ' .card-body').css('display', 'none');

    $(cardId).removeClass('collapsed-card'); 
    $(cardId + ' .btn-tool i').removeClass('fa-plus').addClass('fa-minus');
    $(cardId + ' .card-body').css('display', 'block');
}



function loadAyahFromSurah(surahIndex){ 
     if($('#quranic_block').html() == "")loadAllAyah();
     
     surahData = dynamicObj.ayah[surahIndex];
     surah = surahData['surah'];
     show_only_block_dynamic('quranic');
     openOnlyCard('#surah-' + surah, '.quranic_surah.card');
     gotosurah(surah);
}

function loadSingleAyah(surah, ayah){  
    if($('#quranic_block').html() == "")loadAllAyah();

     // Testing purpose only 
    $('#surah-' + surah + '-ayah-'+ ayah).html('');
    call_ajax_now($('.surah-'+surah+'-ayah-'+ayah).data('ajaxurl'), $('.surah-'+surah+'-ayah-'+ayah));  
    // Testing purpose only end 


    show_only_block_dynamic('quranic');
    openOnlyCard('#surah-' + surah, '.quranic_surah.card'); 
    gotoayah(surah, ayah);
    
}

function show_only_block_dynamic(blockid){
    $('.dynamic_content_block').hide();
    $('.'+ blockid + '_block.dynamic_content_block').show();
    $('.ajaxprocess').removeClass('run');
}

function get_ayahHTML(fsurah, fayah){
    fayah_html = '';
    if(fsurah > 0 && fsurah < 115){
         total_ayah_in_this_surah = ayat_numbers[fsurah-1];
         
         if(fayah > 0 && fayah <= total_ayah_in_this_surah){

            next_ayah = fayah + 1;
            prev_ayah = fayah - 1;

             
            // check if the ayah is a sejda ayah 
            sejda_ayahs = ["7:206","13:15","16:50","17:109","19:58","22:18","25:60","27:26","32:15","28:24","41:38","53:62","84:21","96:19"];
            fsurafayah = fsurah.toString()+":"+fayah.toString();
             
             
            sejda_ayah_html = $.inArray(fsurafayah, sejda_ayahs) >= 0 ? '<span class="sejda_ayah bg-danger">۩ সেজদার আয়াত ۩</span>' : '';
            
            prev_ayah_link = prev_ayah < 1 ? '' : ' &nbsp;&nbsp;<span class="bg-warning prevayah"> <a href="javascript:void(0)" onClick="loadNPAyah('+ fsurah + ', '+ prev_ayah +   ', '+ fayah + ')" title="আগের আয়াত : '+ en2bnNumber(prev_ayah, 'bn') + '"><i class="fas fa-arrow-left"></i></a></span> ';
            
            next_ayah_link = next_ayah <= total_ayah_in_this_surah ? ' <span class="bg-warning nextayah"> <a href="javascript:void(0)" onClick="loadNPAyah('+ fsurah + ', '+ next_ayah + ' , '+ fayah + ')" title="পরের আয়াত : '+ en2bnNumber(next_ayah, 'bn') + '"><i class="fas fa-arrow-right"></i></a></span> ' : '';

            fayah_html += '<div class="time-label time-label-ayah-' + fsurah + '-' + fayah + '">' + prev_ayah_link + ' <span class="bg-secondary ayahno"> ' + getSurahMinHeading(fsurah-1) + ' | আয়াত : '+ en2bnNumber(fayah) +' </span>' +  next_ayah_link + sejda_ayah_html + ' </div>';

            ayah_extra_html  = '<ul>';
            ayah_extra_html  += '<li class="tafseer"><a href="javascript:void(0)" class="tafseer_toggle" title="" onclick="loadTafseer('+ fsurah + ', '+ fayah +')" ><i class="fa fa-comments"></i> ' + en2bnNumber(fayah) + ' নং আয়াতের তাফসীর দেখুন </a> </li>';
            
            if(fsurah < 9 || fsurah > 58)
            ayah_extra_html  += '<li class="grammer2"><a href="javascript:void(0)" class="grammer_toggle" title="" onclick="loadGrammer2('+ fsurah + ', '+ fayah +')" ><i class="fa fa-comments"></i> ' + en2bnNumber(fayah) + ' নং আয়াতের আরবি ব্যাকরণ </a> </li>';

            ayah_extra_html  += '<li class="grammer"><a href="javascript:void(0)" class="tafseer_toggle" title="" onclick="loadGrammer('+ fsurah + ', '+ fayah +')" ><i class="fa fa-comments"></i> ' + en2bnNumber(fayah) + ' নং আয়াতের শব্দবিন্যাস ও  শব্দ পুনরাবৃত্তি </a> </li>';
            ayah_extra_html  += '</ul>';
 
            fayah_html  += '<div id="ayah-'+fsurah+'-'+fayah+'" class="ayah_wrapper"><i class="fas fa-play-circle bg-green playayah" data-playsrc="'+fsurah+':'+fayah+'" onClick="setnew_audio_and_play(this)"></i>  <div class="timeline-item ayah-'+fsurah+'-'+fayah+'"><div class="timeline-body"> ';
            hiddenClass = sh_arabic ? '' : 'hidden';
            fayah_html += '<div data-loadtype="onlyarabic" class="quran-container recursiveajaxload waiting arabic '+ hiddenClass + ' onlyarabic  on-ar-surah-'+fsurah+'-ayah-'+fayah+'" id="only-ar-surah-'+fsurah+'-ayah-'+fayah+'" data-ajaxurl="/resources/verses/'+ fsurah + '_' + fayah + '.html"></div>';
            hiddenClass = sh_tajweed ? '' : 'hidden';
            fayah_html += '<div data-loadtype="tajweed" class="quran-container recursiveajaxload waiting arabic '+ hiddenClass + ' tajweed tajweed-ar-surah-'+fsurah+'-ayah-'+fayah+'" id="tajweed-ar-surah-'+fsurah+'-ayah-'+fayah+'" data-ajaxurl="/resources/tajweed/'+ fsurah + '_' + fayah + '.html"></div>';
            hiddenClass = sh_wbw ? '' : 'hidden';
            fayah_html += '<div data-loadtype="wordbywordwrap" class="quran-container recursiveajaxload waiting '+ hiddenClass + ' wordbywordwrap surah-'+fsurah+'-ayah-'+fayah+'" id="surah-'+fsurah+'-ayah-'+fayah+'" data-ajaxurl="/resources/quran/'+ fsurah + '/' + fayah + '_ayat.html"></div>';
            hiddenClass = sh_translation ? '' : 'hidden';
            fayah_html += '<div data-loadtype="translation" class="ajax_translation translation recursiveajaxload waiting '+ hiddenClass + ' surah-'+fsurah+'-ayah-'+fayah+'-translation"  data-ajaxurl="/resources/quran/'+ fsurah + '/' + fayah + '_translation.html"></div> ';
            
            fayah_html += '<div class="ayah_extra">' + ayah_extra_html + '</div> ';
            fayah_html += '<div data-loadtype="" class="translation-wrapper"><div class="quranic_tafseer ondemandload tafseer-'+ fsurah + '-ayah-'+ fayah + '" data-ajaxurl="/resources/quran/'+ fsurah + '/' + fayah + '_tafseer.html" ></div>';
            fayah_html += '<div class="navigate_ayah">'+ prev_ayah_link + sejda_ayah_html + next_ayah_link + '</div></div>     </div></div></div>'; 
  
                 
         }
    }
    return fayah_html;
}

function loadNPAyah(surah, ayah, oldayah = ''){
     
    if($( '#ayah-'+surah+'-'+ayah ).length){
        console.log('It is already loaded'); 
    }else{

        if(oldayah > ayah){
            ayah_html = get_ayahHTML(surah, ayah);
            $(ayah_html).insertBefore('.time-label.time-label-ayah-'+surah+'-'+oldayah);
            call_ajax_now($('.on-ar-surah-'+surah+'-ayah-'+ayah).data('ajaxurl'), $('.surah-'+surah+'-ayah-'+ayah));
            call_ajax_now($('.tajweed-ar-surah-'+surah+'-ayah-'+ayah).data('ajaxurl'), $('.surah-'+surah+'-ayah-'+ayah));
            call_ajax_now($('.surah-'+surah+'-ayah-'+ayah).data('ajaxurl'), $('.surah-'+surah+'-ayah-'+ayah));
             
        }else{
            ayah_html = get_ayahHTML(surah, ayah);
            $(ayah_html).insertAfter('#ayah-'+surah+'-'+oldayah);
            call_ajax_now($('.on-ar-surah-'+surah+'-ayah-'+ayah).data('ajaxurl'), $('.surah-'+surah+'-ayah-'+ayah));
            call_ajax_now($('.tajweed-ar-surah-'+surah+'-ayah-'+ayah).data('ajaxurl'), $('.surah-'+surah+'-ayah-'+ayah));
            call_ajax_now($('.surah-'+surah+'-ayah-'+ayah).data('ajaxurl'), $('.surah-'+surah+'-ayah-'+ayah));
        } 
        
        call_ajax_now($('.surah-'+surah+'-ayah-'+ayah +'-translation').data('ajaxurl'), $('.surah-'+surah+'-ayah-'+ayah +'-translation'));  
        

    }
    
    gotoayah(surah, ayah);

    return false;
}

function gotosurah(surah){
    $("html, body").animate({ scrollTop: $( '#surah-'+surah).offset().top - 150 }, 900);
}
function gotoayah(surah, ayah){
    $("html, body").animate({ scrollTop: $( '#ayah-'+surah+'-'+ayah).offset().top - 150 }, 900);
}

function recursively_ajax(load_first  = false)
{
        is_recursively_ajax = true; 
        recussiveurl = $('.recursiveajaxload.waiting').not('.hidden');
        
        
         
        if(recussiveurl.length !== 0){
            $.each(recussiveurl, function(k, url){
                    if(load_first && loadfew < loadfirstFewMax){
                        call_ajax_now($([url]).data('ajaxurl'), $(url));
                        // console.log('log from abc') ;          
                        loadfew++; 
                    }
                    if( loadfew >= loadfirstFewMax){ 
                            if(isElementInViewport(url) && is_settings_visible(url)){ 
                                if($(url).visible(true, true)){
                                    $(url).removeClass('waiting');
                                    $(url).addClass('loading');  
                                    call_ajax_now($([url]).data('ajaxurl'), $(url));
                                    // console.log('log from xyz');  
                                        
                                }
                            } 
                        }

            });
        }    
        
        //if(recussiveurl.length !== 0 && auto_load){
          // call_ajax_now($(recussiveurl[0]).data('ajaxurl'), $(recussiveurl[0]))
        //}  
  }     
  
  
function recursively_ajax_autoload(load_first  = false)
{
        is_recursively_ajax = true; 
        recurl = $('.recursiveajaxload.waiting').not('.hidden'); 
        url = recurl !== undefined ? recurl[0] : null;
        //console.log($(url));
        if(url !== null && $(url) !== undefined && $(url) !== null ) { 
           
            setTimeout(function(){
                $(url).removeClass('waiting');
                $(url).addClass('loading');  
                call_ajax_now($([url]).data('ajaxurl'), $(url))
            }, 5000);
        }
        
        
  }     
  
  
function recursively_ajax2()
{ 
        is_recursively_ajax = true;
        recussiveurl = $('.recursiveajaxload2.waiting');
         
        if(recussiveurl.length !== 0){
            $.each(recussiveurl, function(k, url){ 
                        if($(url).visible(true)){
                                            $(url).removeClass('waiting');
                                            $(url).addClass('loading');  
                                            call_ajax_now($([url]).data('ajaxurl'), $(url)); 
                        } 

            });
            
        }   
        
        //if(recussiveurl.length !== 0 && auto_load){
          // call_ajax_now($(recussiveurl[0]).data('ajaxurl'), $(recussiveurl[0]))
        //}  
  }     
  
  

  function isElementInViewport (elem) { 

	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
    (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom) 
}


function call_ajax_now(ajaxurl, updateDiv, callback = null){
    var replaceBox = updateDiv;
     //console.log(ajaxurl);
     
     $('.ajaxprocess').addClass('run'); 
     $(replaceBox).removeClass('waiting');
     $.ajax({
        type: "GET",
        async:false, // set async false to wait for previous response
        url: ajaxurl,  
        success: function(data)
        {
           $('.ajaxprocess').removeClass('run');
           $(replaceBox).html(data);
           $(replaceBox).removeClass('loading');
           $(replaceBox).removeClass('waiting');  

           if (callback && typeof(callback) === "function") { 
            //console.log(callback);
            callback(); 
          }

            if(auto_load){ 
                recursively_ajax_autoload(true);
            }  
          
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            $('.ajaxprocess').removeClass('run');
            $(replaceBox).removeClass('loading');
            $(replaceBox).addClass('waiting');
            console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
        } 
    });  
}




function is_settings_visible(el){
    settingsreturn = true;

    switch($(el).data('loadtype')){

        case 'onlyarabic':
            settingsreturn = (sh_arabic) ? true : false;
            break;

        case 'tajweed':
            settingsreturn = (sh_tajweed) ? true : false;
            break;

        case 'wordbywordwrap':  
            settingsreturn = (sh_wbw) ? true : false;
            break;

        case 'translation':
            settingsreturn = (sh_translation || sh_transliteration) ? true : false;
            break; 

        default:
            settingsreturn = true;
        break; 

    }



    return settingsreturn; 
}




function gobacktotop(){
    //console.log('back to top');
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
}



// Function to load current dynamic html ~ with Articles
function loadArticles(){
    gobacktotop();
    $('body').removeClass('control-sidebar-slide-open'); 
    $('#dynamic_heading').slideUp();


    if($('#dynamic_content .articles_block').html() === ""){  
     
        articles_html = '';
        $.each(dynamicObj.articles, function(key, article){
            articles_html += '<a href="' + article['url'] + '" target="_blank" class="websitelinkurl"><i class="fa fa-external-link-alt"></i> ' + article["title"] + '</a> <br /> ';
        });
        $('#dynamic_content .articles_block').html('<div class="card card-secondary"><div class="card-header"><h3 class="card-title">ওয়েবসাইট লিঙ্ক</h3></div> </div> <div class="card-body" style="display: block;">'+ articles_html + '</div></div>');  
    }
    show_only_block_dynamic('articles');
}




// Function to load current dynamic html ~ with Articles
function loadExtraHTML(extHTMLsrc, keyid, forced = false){
    gobacktotop();
    $('body').removeClass('control-sidebar-slide-open'); 
    $('#dynamic_heading').slideUp();

    if(forced)$('.dynamic_content_block_extra.extraHTML'+keyid).remove();
   
   if(!$('.dynamic_content_block_extra.extraHTML'+keyid).length){
            
            $('.ajaxprocess').addClass('run');
            $.ajax({
                type: "GET",
                async:false, // set async false to wait for previous response
                url: extHTMLsrc,  
                success: function(data)
                {
                    
                    $('#dynamic_content .extra_html_block').append('<div class="dynamic_content_block_extra extraHTML'+ keyid + '">' + data + '</div>');  
                       
                
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    
                    console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
                }   

            });  
   }
   
   $('.dynamic_content_block_extra').hide();
   $('.dynamic_content_block_extra.extraHTML'+keyid).show();
   
   show_only_block_dynamic('extra_html'); 
  
}



// Function to load current dynamic html ~ with Videos
function loadVideos(){
    gobacktotop();
    $('body').removeClass('control-sidebar-slide-open'); 
    $('#dynamic_heading').slideUp();

    if($('#dynamic_content .videos_block').html() === ""){  


        videos_html = '<div class="col-12"><h2 class="topic_headline">ভিডিও</h2></div><div class="col-md-12 youtubeplaylist"><div id="videoPlayer">';

        videos_html += '</div></div><div class="col-12 vid-list-container"><div id="vid-list" class="row">'
 


        showorHide = dynamicObj.videos.length > 12 ? true : false;
        $.each(dynamicObj.videos, function(key, video){
            thumb_url     = (video["thumb"] !== undefined) ? video["thumb"] : '/images/read-quran.jpg';
            video_type = (video['url']).indexOf('list') > 0 ? "<i class='fa fa-list'></i> [Playlist] " : '<i class="fa fa-play"></i>'; 
            videos_html  += '<div class="col-md-6 col-lg-4 col-sm-12"><a class="videothumblink" href="javascript:void(0);" onclick="replaceVideoPlayer(\'' + video["url"] + '\', \'' +  (video["title"]).replace("'", "`").replace('"', "`") + '\')"><img class="videothumbimg img-fluid" src="' + thumb_url + '" title="' + video["title"] + '"><h5>' + video_type + ' ' +  video["title"] + '</h5></a></div>';
            //videos_html += '<div class="col-md-6">' + generateCardsHtml('<button type="button" class="btn btn-tool" data-card-widget="collapse"> ' + video["title"] +   '</button>' , '<iframe width="100%" height="450" src="' + video['url'].replace("watch?v=", "embed/") + '" frameborder="0"></iframe>'  , "secondary", showorHide) + '</div>';
        });

        videos_html += '</div></div>';


        $('#dynamic_content .videos_block').html('<div class="row">'+ videos_html + '</div>');  
    } 
    show_only_block_dynamic('videos');
    


}


function replaceVideoPlayer(src, title){
    gobacktotop();
    if(src.indexOf('list') > 0)
        {
            $('#videoPlayer').html('<h3 class="bg-white text-center">'+ title + ' এটি একটি ভিডিও প্লেলিস্ট, ভিডিও প্লেয়ার এর ডান দিকের উপরের দিকে <i class="fa fa-list"></i> এই আইকন এ ক্লিক করুন </h3> <hr /> <iframe id="vid_frame" src="'+ src.replace('playlist?list=', 'embed/videoseries?list=') + '&autoplay=1&loop=1" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; picture-in-picture" style="width:100%;height:70vh"></iframe>');
        }
    else 
        $('#videoPlayer').html('<h3 class="bg-white text-center">'+ title + '</h3> <hr /> <iframe id="vid_frame" src="'+ src.replace('watch?v=', 'embed/') + '?autoplay=1" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay;" style="width:100%;height:70vh"></iframe>');
}

// Function to load current dynamic html ~ with Books
function loadBooks(){
    gobacktotop();
    $('body').removeClass('control-sidebar-slide-open'); 
    $('#dynamic_heading').slideUp();

    if($('#dynamic_content .books_block').html() === ""){  

        books_html = '<div class="col-12"><h2 class="topic_headline">বই / পি.ডি.এফ</h2></div><div class="col-md-12"><div class="book_pdf_window" style="display:none"></div></div>';

        $.each(dynamicObj.books, function(key, book){
            if(book['type'] == 'firebase-pdf'){
                book_link_action =  'href="javascript:void(0)"  onClick="loadBookView(\'https://firebasestorage.googleapis.com/v0/b/learn-quran-bd.appspot.com/o/' + book['url'] + '?alt=media\')"'; 
                books_html += '<div class="col-md-3">' + generateCardsHtml('<button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fa fa-'+ book['type'] + '"></i> &nbsp;' + book["title"] + ' <br /> &nbsp;&nbsp;&nbsp;&nbsp;--  ' + book['writer'] + '</button>' , '<a '+ book_link_action + '><img data-original="https://firebasestorage.googleapis.com/v0/b/learn-quran-bd.appspot.com/o/' + book['thumb'] + '?alt=media" class="lazy rounded customthumb img-fluid" alt="" /></a>'  , "secondary") + '</div>';
            }else{
                book_link_action = (book['type'] == 'file-pdf' && book['url'].indexOf('http') < 0) || (book['type'] == 'file-pdf' && book['url'].indexOf('firebasestorage.googleapis.com') > 0) ? 'href="javascript:void(0)"  onClick="loadBookView(\'' + book['url'] + '\')"' : 'href="' + book['url'] + '" target="_blank"';
                //book_link_action = (book['type'] == 'file-pdf' && book['url'].indexOf('http') < 0)  ? 'href="javascript:void(0)"  onClick="loadBookView(\'' + book['url'] + '\')"' : 'href="' + book['url'] + '" target="_blank"';
                books_html += '<div class="col-md-3">' + generateCardsHtml('<button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fa fa-'+ book['type'] + '"></i> &nbsp;' + book["title"] + ' <br /> &nbsp;&nbsp;&nbsp;&nbsp;--  ' + book['writer'] + '</button>' , '<a '+ book_link_action + '><img data-original="' + book['thumb'] + '" class="lazy rounded customthumb img-fluid" alt="" /></a>'  , "secondary") + '</div>';
            }
            
        });
        $('#dynamic_content .books_block').html('<div class="row">'+ books_html + '</div>');  
        $("img.lazy").lazyload({effect : "fadeIn"});
    }
    
    show_only_block_dynamic('books');
     

}

function loadBookView(pdf, images = false){ 
        $('.book_pdf_window').html('<div class="col-md-12 text-right"><a href="javascript:void(0)" onclick="$(this).parent().parent().hide()"><i class="fa fa-times-circle fa-2x"></i></a></div><div class="pdf_view" id="pdf_view_code"></div>'); 
        var flipBook = $("#pdf_view_code").flipBook(pdf, {singlePageMode: 1, height: '100%', duration: 800, backgroundColor: '#eee',maxTextureSize: 7680, cachedPages: 8, scrollWheel: false, zoomRatio: 1.2});
        $('.book_pdf_window').slideDown();
        gobacktotop();
}


function generateCardsHtml(cardTitle, cardContent, cardClass, isCloased = false, bodyTC = 'text-center', card_id = ''){
            isCloasedClass  =  isCloased ? 'collapsed-card' : '';
            cardContentDSt  =  isCloased ? 'none' : 'block';
            cardPoM         =  isCloased ? 'plus' : 'minus';
            returnhtml = '<div class="card card-'+ cardClass + ' '+ isCloasedClass + '" id="' + card_id + '">';
            returnhtml +=           '<div class="card-header">';
            returnhtml +=                           '<h3 class="card-title">'+ cardTitle + '</h3>';
            returnhtml +=                           '<div class="card-tools"><button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-'+ cardPoM + '"></i></button></div> ';
            
            returnhtml +=           '</div> ';
            returnhtml +=           '<div class="card-body '+ bodyTC + '" style="display: '+ cardContentDSt + ';">';
            returnhtml +=                   cardContent;
            returnhtml +=           '</div>';
            returnhtml += '</div>';  

            return returnhtml;
} 