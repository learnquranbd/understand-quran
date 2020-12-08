var jq = document.createElement('script');
jq.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict();



// In search page 

url = '';   
thumb = $('a#thumbnail[href="'+ url.replace('https://www.youtube.com', '') +'"]').find('img.yt-img-shadow').attr('src');
vtitle = $('a#video-title[href="'+ url.replace('https://www.youtube.com', '') +'"]').attr('title');



var output = {
            'title'     : vtitle,
            'thumb'     : thumb ,
            'url' :  url.replace('watch?v=', 'embed/')   

};
clear();
console.log(JSON.stringify(output, undefined, 2)+',');






// In home listing page 

url = 'https://www.youtube.com/watch?v=6eZ4QVrGFeU';   
thumb = $('a#thumbnail[href="'+ url.replace('https://www.youtube.com', '') +'"]').find('img.yt-img-shadow').attr('src');
vtitle = $('a#video-title-link[href="'+ url.replace('https://www.youtube.com', '') +'"]').attr('title');



var output = {
            'title'     : vtitle,
            'thumb'     : thumb ,
            'url' :  url.replace('watch?v=', 'embed/')   

};

console.log(JSON.stringify(output, undefined, 2)+',');


//  list= ''; $('.ayah-upperpart span.surah-ayah-index').each(function(){ list += $(this).html() + ',';} ); console.log(JSON.stringify(list, "", 10))


/// update corpus_bn_w_count set bn = replace(bn, "''", "") where bn like "''%"   



//  create table verses_min2 as select chapter, verse, en, ar, transliteration, taisirul, mujibur from verses



books = [];
$.each(bangla_sura_names, function(k, v){
      books.push({
    "title": 'সূরা  '+ en2bnNumber(k+1) + ': ' + v,
    "writer": "সংকলন এবং সম্পাদনা মুহাম্মদ ইয়াহিয়া",
    "type": "file-pdf",
    "thumb": "/images/muhammadyeahia_book.jpg",
    "url": "/resources/pdf/s" + (k+1) + ".pdf"
 } );       
});
​
console.log(JSON.stringify(books, undefined, 10));

 


links = []; $('.active table tr').each(function(){ link = $(this).find('td').eq(0).find('a').attr('href'); links.push(link); }); console.log(JSON.stringify(links, undefined, 10));





//                 \?sqp=*.*"         replace with       "  


//         embed*.*&list=              replace with     playlist?list=


//          ", ayah:*.*"\},


// get only the youtubeID from Playlist videos 
/// output = [];  i = 1; $('#contents a').each(function(k,val){ if( $(this).attr('href').indexOf('/watch?v=') >= 0){ link =  $(this).attr('href').replace('/watch?v=', ''); title = $(this).find('span.ytd-playlist-video-renderer').text().replace('\n', '').trim().replace("\n", '') ; if(title != '') output.push( i++ + " ." +  title + " | " + link.substring(0, link.indexOf('&list')) );}}); console.log(JSON.stringify(output, '', 10));




//   pdftoppm -png p1.pdf ./q2/p1            // extract pdf and save image in png 

// convert p2-02.png -trim +repage output.png                 -- auto crop image 


// <span[^>]*>[^>]*<\/span>


//    /\[quran (\d+):(\d+)(?:-(\d+))?\]/

// get  subject wise Surah:ayah string from array 
// ayah_string = ''; $.each(dynamicObj.ayah, function(k, v){ $.each(v['ayah'], function(kk, vv){ ayah_string  +=   v['surah'] + ':' + vv + ', ';})}); ayah_string;


surah = { 
'1'     :   'আল ফাতিহা',
'2'     :   'আল বাকারা',
'3'     :   'আল ইমরান',
'4'     :   'আন নিসা',
'5'     :   'আল মায়িদাহ',
'6'     :   'আল আনআম',
'7'     :   'আল আরাফ',
'8'     :   'আল আনফাল',
'9'     :   'আত-তাওবাহ্‌',
'10'    :   'ইউনুস',
'11'    :   'হুদ',
'12'    :   'ইউসুফ',
'13'    :   'আর-রাদ',
'14'    :   'ইব্রাহীম',
'15'    :   'আল হিজর',
'16'    :   'আন নাহল',
'17'    :   'বনী-ইসরাঈল',
'18'    :   'আল কাহফ',
'19'    :   'মারইয়াম',
'20'    :   'ত্বোয়া-হা',
'21'    :   'আল আম্বিয়া',
'22'    :   'আল হাজ্জ্ব',
'23'    :   'আল মু\'মিনূন',
'24'    :   'আন নূর',
'25'    :   'আল ফুরকান',
'26'    :   'আশ শুআরা',
'27'    :   'আন নম্‌ল',
'28'    :   'আল কাসাস',
'29'    :   'আল আনকাবূত',
'30'    :   'আর রুম',
'31'    :   'লোক্‌মান',
'32'    :   'আস সেজদাহ্',
'33'    :   'আল আহ্‌যাব',
'34'    :   'সাবা',
'35'    :   'ফাতির',
'36'    :   'ইয়াসীন',
'37'    :   'আস ছাফ্‌ফাত',
'38'    :   'ছোয়াদ',
'39'    :   'আয্‌-যুমার',
'40'    :   'আল মু\'মিন',
'41'    :   'হা-মীম সেজদাহ্‌',
'42'    :   'আশ্‌-শূরা',
'43'    :   'আয্‌-যুখরুফ',
'44'    :   'আদ-দোখান',
'45'    :   'আল জাসিয়াহ',
'46'    :   'আল আহ্‌ক্বাফ',
'47'    :   'মুহাম্মদ',
'48'    :   'আল ফাত্‌হ',
'49'    :   'আল হুজুরাত',
'50'    :   'ক্বাফ',
'51'    :   'আয-যারিয়াত',
'52'    :   'আত্ব তূর',
'53'    :   'আন-নাজম',
'54'    :   'আল ক্বামার',
'55'    :   'আর রাহমান',
'56'    :   'আল-ওয়াকিয়াহ',
'57'    :   'আল-হাদীদ',
'58'    :   'আল-মুজাদালাহ',
'59'    :   'আল-হাশর',
'60'    :   'আল-মুমতাহিনাহ',
'61'    :   'আস-সাফ',
'62'    :   'আল-জুমুআ',
'63'    :   'আল-মুনাফিকুন',
'64'    :   'আত-তাগাবুন',
'65'    :   'আত-তালাক',
'66'    :   'আত-তাহরীম',
'67'    :   'আল-মুলক',
'68'    :   'আল-কলম',
'69'    :   'আল-হাক্কাহ',
'70'    :   'আল-মাআরিজ',
'71'    :   'নূহ',
'72'    :   'আল জ্বিন',
'73'    :   'আল মুজাম্মিল',
'74'    :   'আল মুদ্দাস্সির',
'75'    :   'আল-ক্বিয়ামাহ',
'76'    :   'আদ-দাহর',
'77'    :   'আল-মুরসালাত',
'78'    :   'আন নাবা',
'79'    :   'আন নাযিয়াত',
'80'    :   'আবাসা',
'81'    :   'আত-তাকভীর',
'82'    :   'আল-ইনফিতার',
'83'    :   'আত মুত্বাফ্‌ফিফীন',
'84'    :   'আল ইন‌শিকাক',
'85'    :   'আল-বুরুজ',
'86'    :   'আত-তারিক্ব',
'87'    :   'আল আ\'লা',
'88'    :   'আল গাশিয়াহ্‌',
'89'    :   'আল ফাজ্‌র',
'90'    :   'আল বালাদ',
'91'    :   'আশ-শাম্‌স',
'92'    :   'আল লাইল',
'93'    :   'আদ-দুহা',
'94'    :   'আল ইনশিরাহ',
'95'    :   'ত্বীন',
'96'    :   'আলাক্ব',
'97'    :   'ক্বদর',
'98'    :   'বাইয়্যিনাহ',
'99'    :   'যিলযাল',
'100'   :   'আল-আদিয়াত',
'101'   :   'ক্বারিয়াহ',
'102'   :   'তাকাসুর',
'103'   :   'আছর',
'104'   :   'হুমাযাহ',
'105'   :   'ফীল',
'106'   :   'কুরাইশ',
'107'   :   'মাউন',
'108'   :   'কাওসার',
'109'   :   'কাফিরুন',
'110'   :   'নাসর',
'111'   :   'লাহাব',
'112'   :   'আল-ইখলাস',
'113'   :   'আল-ফালাক',
'114'   :   'আন-নাস'
}