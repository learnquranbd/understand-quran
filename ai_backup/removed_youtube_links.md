# Removed YouTube links — 2026-07-11

Commit `e38f96ce` removed **93** video/playlist objects whose YouTube target no longer works.

Checked via `https://www.youtube.com/oembed?url=...` — HTTP status meaning:
- **404** deleted / not found  
- **403** private video  
- **401** video exists but embedding is disabled (does not play in the site video player)

To restore one: find its object in `removed_youtube_links.json` and add it back to the listed file (git history also has it: `git show e38f96ce^:<file>`).


## firebase/public/js/read_quran_v8.js (6 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | তাফসির: ০৪. সুরা আন-নিসা | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic-Q4X29ueZa32z5bZ8SjL4I |
| 404 | deleted / not found | তাফসির: ০৫. সুরা আল-মায়েদাহ | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic8FCmoS6DiTGNgVOEvY0QNh |
| 404 | deleted / not found | তাফসির: ০৬. সুরা আল-আন‘আম | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic8ncAI2TPSHhRXrU5cOPIR0 |
| 404 | deleted / not found | তাফসির: ০৭. সুরা আল-আ‘রাফ | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic9uE7Yjw496-FdUzPUuQ-QW |
| 404 | deleted / not found | তাফসির: ০৮. সুরা আল-আনফাল | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic_Lg_ml5B32-Wc-m-AjCgxi |
| 404 | deleted / not found | 30 Para of Quran (Beautiful and Fast Recitation in 30 min) | https://www.youtube.com/playlist?list=PL_kCIDEjSaa2QkLOEnYdOmgmx6vS5Oc-_ |

## firebase/public/partials/ALLAH/asmaul-husna.html (3 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | Allah is Most Forgiving - Obey Him and Repent | https://www.youtube.com/watch?v=ALHZhQCc_3s |
| 404 | deleted / not found | WHO IS ALLAH | https://www.youtube.com/watch?v=1oF_lLWC168 |
| 403 | private | যে নামের বরকতে আল্লাহ তায়ালা বান্দার গুনাহ চিরতরে মুছে দিবেন... | https://www.youtube.com/embed/shbHTXj5RIs |

## firebase/public/partials/ALLAH/dislikes.html (2 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | ধোকাবাজ, প্রতারককে আল্লাহ পছন্দ করেন না | https://www.youtube.com/embed/tzOGOc-MNOM |
| 403 | private | আল্লাহ যখন কোন ব্যাক্তিকে ঘৃনা করে তখন কি হয়\|When allah hate a person | https://www.youtube.com/embed/hOKD2wCPqhE |

## firebase/public/partials/ALLAH/likes.html (3 removed)

| status | reason | title | link |
|---|---|---|---|
| 401 | exists but embedding disabled | আল্লাহ যাদেরকে ভালোবাসেন | https://www.youtube.com/embed/NPRAHE7zc9o |
| 403 | private | [২য় পর্ব] তিন ধরনের ব্যাক্তিকে দেখে আল্লাহ হাসেন\| Allah Smiles At Such a Person | https://www.youtube.com/embed/ht7awCqXjAk |
| 403 | private | আল্লাহ এই পাপী ব্যাক্তিকে দেখে হাসেন\|Allah Smile At This Sinner | https://www.youtube.com/embed/moQrKdG_4eE |

## firebase/public/partials/ALLAH/remembrance.html (1 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | Remembrance of ALLAH is One | https://www.youtube.com/embed/cj7NwXq4OTk |

## firebase/public/partials/ALLAH/well-thing.html (4 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | REPENT SINCERELY TODAY & DON | https://www.youtube.com/embed/nvNccyRF1vY |
| 404 | deleted / not found | The Mercy of Allah in Regard to Forgiveness | https://www.youtube.com/embed/I7KiVDHsfFg |
| 401 | exists but embedding disabled | বান্দার প্রতি আল্লাহর ভালোবাসা \| দেখুন আল্লাহ পাক আপনাকে কতটুকু ভালবাসেন! | https://www.youtube.com/embed/nGmkjepmj2E |
| 404 | deleted / not found | Allah is Most Forgiving - Obey Him and Repent | https://www.youtube.com/watch?v=ALHZhQCc_3s |

## firebase/public/partials/arabic_languages/arabic.html (9 removed)

| status | reason | title | link |
|---|---|---|---|
| 403 | private | ইকরা সহজ আরবী শি‌খি | https://www.youtube.com/playlist?list=PLBVw9XNURD_AdUWNG_wO5O4XD5VcBMj1s |
| 404 | deleted / not found | আল-কুরআনের ভাষা শিক্ষা | https://www.youtube.com/playlist?list=PL1JKv-zqJfEYrTa7TpUGb74JOjPoCojjT |
| 404 | deleted / not found | এসো আরবী শিখি | https://www.youtube.com/playlist?list=PLOPo9pl2YzJNfprQqnQZnYuouMt0BeL5- |
| 403 | private | Quranic Arabic with Abu Taubah | https://www.youtube.com/playlist?list=PLbpuqpqN9oa8cdZ7Gw9hWUBJTd1DlOT9j |
| 404 | deleted / not found | বাংলা Online Quran Smart Madrasa | https://www.youtube.com/playlist?list=PLQW3_-K8_bK3XXxdZOHyT0IT6Ni-5OJty |
| 404 | deleted / not found | এসো আরবী শিখি- ১ম খন্ড | https://www.youtube.com/playlist?list=PLwlIe2pxu_yahNfofNOp_QMjwzYWfEG4P |
| 404 | deleted / not found | এসো আরবী শিখি- ২য় খন্ড | https://www.youtube.com/playlist?list=PLwlIe2pxu_yY6EbfABsGRgvsW3gNxESQu |
| 404 | deleted / not found | তামরীন- ১ম, ২য় ও ৩য় ভাগ (এসো আরবী শিখি বই এর উপর) | https://www.youtube.com/playlist?list=PLwlIe2pxu_yZOt_UwhQWK_D-I6YDizE20 |
| 404 | deleted / not found | Synonyms and perfect word choice in the Quran | https://www.youtube.com/playlist?list=PLIY5DwaQvSihrm1rvc_TALpCddKpI9hp1 |

## firebase/public/partials/arabic_languages/nahu.html (4 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | এসো আরবী শিখি | https://www.youtube.com/playlist?list=PLOPo9pl2YzJNfprQqnQZnYuouMt0BeL5- |
| 404 | deleted / not found | আল-কুরআনের ভাষা শিক্ষা | https://www.youtube.com/playlist?list=PL1JKv-zqJfEYrTa7TpUGb74JOjPoCojjT |
| 403 | private | ইকরা সহজ আরবী শি‌খি | https://www.youtube.com/playlist?list=PLBVw9XNURD_AdUWNG_wO5O4XD5VcBMj1s |
| 403 | private | First Steps To Understanding Nahw Level 2 - Hashim Mohamed | https://www.youtube.com/playlist?list=PLzn0qdi6JpdvJ4_2KS9cEil3rm7rzT5iC |

## firebase/public/partials/arabic_languages/repeat.html (1 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | শব্দে শব্দে আল কুরআন | https://www.youtube.com/playlist?list=PLkkcOOBminiUcUErBu3d-lGLKWtFgDiBo |

## firebase/public/partials/arabic_languages/sarf.html (2 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | Sarf الصرف | https://www.youtube.com/playlist?list=PLyo54InWsoTajN5FA4zF2hVuXRORmVh-h |
| 404 | deleted / not found | এসো ছরফ শিখি | https://www.youtube.com/playlist?list=PLwlIe2pxu_yawpst1i-bPWSRS14kpOPvD |

## firebase/public/partials/etc/read.html (1 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | ফেরা - সিহিন্তা শরীফাহ, নাইলাহ আয়াতুল্লাহ। Bangla Islamic Audiobook. | https://www.youtube.com/playlist?list=PLYx_auDJrso3Se9zWkl0qNjClxHYa3Yg1 |

## firebase/public/partials/homescreen.html (35 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | সূরা আল বাকারা হৃদয় ছোঁয়া তেলাওয়াত  Ι Surah Al Baqarah bangla anubad Ι Recited by Moaz Elsayed | https://www.youtube.com/embed/2ABuWiFmcnE |
| 404 | deleted / not found | তাফসির: ০২ আল বাক্বারাহ | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic9ch8KjFBfXogZkSDuVWHqK |
| 404 | deleted / not found | সবচেয়ে সেরা কন্ঠে সূরা বাকারার শেষ দুই আয়াত\|\| Besir Duraku \|\|Raaed bd | https://www.youtube.com/embed/eC5k738HE5A |
| 403 | private | মনোমুগ্ধকর তিলাওয়াত । সূরা বাকারা শেষের তিন আয়াত । Recited by Zain Abu Kautsar | https://www.youtube.com/embed/nD9uW1vqVNI |
| 404 | deleted / not found | তাফসির: ০৩. সুরা আল-ইমরান | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic_teUE82IRv3n3BUZZ2qC6g |
| 404 | deleted / not found | তাফসির: ০৪. সুরা আন-নিসা | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic-Q4X29ueZa32z5bZ8SjL4I |
| 404 | deleted / not found | তাফসির: ০৫. সুরা আল-মায়েদাহ | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic8FCmoS6DiTGNgVOEvY0QNh |
| 404 | deleted / not found | তাফসির: ০৬. সুরা আল-আন‘আম | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic8ncAI2TPSHhRXrU5cOPIR0 |
| 404 | deleted / not found | তাফসির: ০৭. সুরা আল-আ‘রাফ | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic9uE7Yjw496-FdUzPUuQ-QW |
| 404 | deleted / not found | তাফসির: ০৮. সুরা আল-আনফাল | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic_Lg_ml5B32-Wc-m-AjCgxi |
| 404 | deleted / not found | তাফসির: ০৯. সুরা আত-তাওবা | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic_a43pU5a9HYOPXklpHHGhT |
| 404 | deleted / not found | তাফসির: ১০. সুরা ইউনুস | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic-P21IC3LBEYgAQsqW6QZA1 |
| 404 | deleted / not found | তাফসির: ১১. সুরা হুদ | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic-r9-hjl5XIECAycyDAXp0J |
| 404 | deleted / not found | তাফসির: ১২. সুরা ইউসুফ | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic8rpv7s4Ip2n65O1tpJxLd3 |
| 404 | deleted / not found | তাফসির: ১৩. সুরা আর রা‘দ | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic9a5Kt9SliCDGrRk-f4iwhV |
| 404 | deleted / not found | তাফসির: ১৪. সুরা ইবরাহিম | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic92pTIg9kW3cdNw4Fii0rvr |
| 404 | deleted / not found | তাফসির: ১৫ আল-হিজর | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic9cU58aFfuL4lnUfsSoBIry |
| 404 | deleted / not found | তাফসির: ১৬. আন-নাহল | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic8orAZZ6Ejg2fqzK5eQUzu8 |
| 404 | deleted / not found | তাফসির: ১৭ বনী ইসরাঈল | https://www.youtube.com/playlist?list=PLDfP1yNs-Ic_W3HjtSfOXVg1QFMfj-S-A |
| 404 | deleted / not found | TAHA  سورة طه (HEALING QURAN RECITATION) | https://www.youtube.com/embed/1dn60yPZG3A |
| 403 | private | তারাই হল জান্নাতের ওয়ারিস ┇ সূরা আল মু | https://www.youtube.com/embed/Zx8tUZl_xcQ |
| 404 | deleted / not found | সূরা আদ দুখান আবেগময় তেলাওয়াত  Surah Dukhan bangla Onubad #Mishary_Al-Afasy | https://www.youtube.com/embed/9xY8W2cne5g |
| 404 | deleted / not found | সূরা আর রহমান এর সবচেয়ে সুমধুর তিলাওয়াত┇Surah Rahman by Mishary Rashid Al Afasy ┇ MercifulServant BD | https://www.youtube.com/embed/WNM-5ecolUQ |
| 404 | deleted / not found | সূরা আস সফ মন জুড়ানো তেলাওয়াত অনুবাদসহ। Surah As Saff Bangla Translation. | https://www.youtube.com/embed/KOM2vBs4s0E |
| 404 | deleted / not found | Heart Touching Quran Recitation - Surah Al-Qalam (The Pen) - Salem Al Ruwaili | https://www.youtube.com/embed/Amgjriih558 |
| 404 | deleted / not found | সূরা ফাতিহা ও কালাম┇সুরেলা বিচিত্র তেলাওয়াত┇শাইখ নরিন মুহাম্মাদ | https://www.youtube.com/embed/sAWhQ6b8Ak8 |
| 404 | deleted / not found | সূরা মাআরিজ এর অন্তর জুড়ানো তিলাওয়াত┇سورة المعارج  Surah Maarij _Salim Al Ruwaili┇MercifulServant BD | https://www.youtube.com/embed/pkrKduICClg |
| 404 | deleted / not found | সূরা জিন এর অন্তর স্পর্শ করা তিলাওয়াত ┇ Recited by Omar Hisham Al Arabi ┇ MercifulServant BD | https://www.youtube.com/embed/nqFoViPNfUU |
| 404 | deleted / not found | সূরা মুদ্দাসসির \| আবেগময় তেলাওয়াত \| ফিলিস্তিনের ইমাম ঘাসসান শোরবাজি | https://www.youtube.com/embed/B4M8o1F1ekU |
| 404 | deleted / not found | হৃদয় জূড়ানো কন্ঠে সূরা ইনসান এর অসাধারন তিলাওয়াত ┇ Omar Hisham Al Arabi ┇ MercifulServant BD | https://www.youtube.com/embed/1WRaxZrtdSs |
| 404 | deleted / not found | সূরা আল মুতাফফিফীন আবেগময় তিলাওয়াত । Surah Al Mutaffifin by Mishary Rashid Alafasy | https://www.youtube.com/embed/0cHjoF_kEcA |
| 403 | private | \| সুরা বুরুজ \| অন্তরকে টাস করবে এই কোরআন  তেলাওয়াত। Sura Al-Buruj Heart Touching \| Smooth Recitation | https://www.youtube.com/embed/lmC8E4GHwnU |
| 404 | deleted / not found | সূরা আত তারিক  ( الطّارق‎)  \| আবেগময় তিলাওয়াত । নামাজের ছোট সূরা ।  শিখুন সূরা | https://www.youtube.com/embed/bvs5iZ-cxjs |
| 404 | deleted / not found | সূরা আল লাইল হৃদয় ছোয়া তেলাওয়াত বাংলা অনুবাদ সহ । Surah Al Layl with bangla translation | https://www.youtube.com/embed/7N_TkXgVk3E |
| 404 | deleted / not found | সূরা ফীল এক যুগপোযোগী শিক্ষনীয় ঘটনা ┇ Recited by Salim Bahnan ┇ MercifulServant BD | https://www.youtube.com/embed/InVpaZMLVJg |

## firebase/public/partials/pillars/hajj.html (2 removed)

| status | reason | title | link |
|---|---|---|---|
| 403 | private | হজ্ব তালিম: সহীহভাবে হজ্ব পালনের নিয়ম কানুন - শায়খ আব্দুল কাইয়ুম। ৬ জুন ২০১৯ ইং | https://www.youtube.com/embed/b_AVqZ29q5o |
| 403 | private | Hajj Talim \| হজ্ব তালিম \| Shaykh Abdul Qayum \| Q&A Session \| প্রশ্নোত্তর পর্ব | https://www.youtube.com/embed/LI7ocAxBO-w |

## firebase/public/partials/pillars/iman_akida.html (1 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | ঈমান ভঙ্গের কারণ সমূহ। শাইখ তামিম আল আদনানী (হাফিজাহুল্লাহ) | https://www.youtube.com/embed/n95eWZeDIBU |

## firebase/public/partials/pillars/salat.html (9 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | ফিক-উস-সালাহ \| নামাজের নিয়ম কানুন \| পর্ব ১ \| How to perform Salah | https://www.youtube.com/embed/JaBrUxYA2tY |
| 404 | deleted / not found | ফিক-উস-সালাহ \| নামাজের নিয়ম কানুন \| পর্ব ২ \| How to perform Salah | https://www.youtube.com/embed/3n8DbMR4tNw |
| 404 | deleted / not found | ফিক-উস-সালাহ \| নামাজের নিয়ম কানুন \| পর্ব ৩ \| How to perform Salah | https://www.youtube.com/embed/bH5H2mPT7ng |
| 404 | deleted / not found | ফিক-উস-সালাহ \| নামাজের নিয়ম কানুন \| পর্ব ৪ \| How to perform Salah | https://www.youtube.com/embed/TSNoGiA52Zc |
| 404 | deleted / not found | ফিক-উস-সালাহ \| নামাজের নিয়ম কানুন \| পর্ব ৫ \| How to perform Salah | https://www.youtube.com/embed/vBzSppqLhtw |
| 404 | deleted / not found | ফিক-উস-সালাহ \| নামাজের নিয়ম কানুন \| পর্ব ৬ \| How to perform Salah | https://www.youtube.com/embed/cp8vGIzyQEg |
| 404 | deleted / not found | ফিক-উস-সালাহ \| নামাজের নিয়ম কানুন \| পর্ব ৭ \| How to perform Salah | https://www.youtube.com/embed/rbEK0qPulx0 |
| 404 | deleted / not found | ফিক-উস-সালাহ \| নামাজের নিয়ম কানুন \| পর্ব ৮ \| How to perform Salah | https://www.youtube.com/embed/TxTVqaeJ-tM |
| 403 | private | দুরুদ-এ-ইবরাহিম: নামাজে পঠীত দুরুদ শরীফ। হাফেজ হোসেইন ইবরাহিম (সোমালী) | https://www.youtube.com/embed/9KDYXecj33g |

## firebase/public/partials/pillars/zakat.html (2 removed)

| status | reason | title | link |
|---|---|---|---|
| 403 | private | যাকাতের গুরুত্ব, নিয়ম, মাসআলা এবং প্রশ্নোত্তর \| শায়খ আব্দুল কাইয়ুম | https://www.youtube.com/embed/SIC1_RoJ7ZY |
| 403 | private | “যাকাতের বিধান“ - এর অর্থ, গুরুত্ব এবং ফযিলত - শায়খ আব্দুল কাইয়ুম | https://www.youtube.com/embed/PcjcQg_NH74 |

## firebase/public/partials/quran/dua/all.html (2 removed)

| status | reason | title | link |
|---|---|---|---|
| 403 | private | সাইয়্যেদুল ইস্তেগফার। যে দোয়া পড়লে রাসূল সাঃ জান্নাতের সুসংবাদ দিয়েছেন। | https://www.youtube.com/watch?v=ZwQJHq-dMw8 |
| 403 | private | যে নামের বরকতে আল্লাহ তায়ালা বান্দার গুনাহ চিরতরে মুছে দিবেন... | https://www.youtube.com/embed/shbHTXj5RIs |

## firebase/public/partials/quran/dua/forgiveness.html (1 removed)

| status | reason | title | link |
|---|---|---|---|
| 403 | private | যে নামের বরকতে আল্লাহ তায়ালা বান্দার গুনাহ চিরতরে মুছে দিবেন... | https://www.youtube.com/embed/shbHTXj5RIs |

## firebase/public/partials/quran/tajwid.html (2 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | ২৭ ঘন্টায় কুরআন শিক্ষা | https://www.youtube.com/playlist?list=PLMvv3pG420M7oKbfnGP_5aagkKUFldt5u |
| 404 | deleted / not found | কুরআন শিক্ষা  | https://www.youtube.com/watch?v=_DG8G7EDVq8 |

## firebase/public/partials/quran/ya-ayyuhal-lazina-amanu.html (2 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | O you who have believed part-1 (হে তোমরা যারা ঈমান এনেছো পর্ব-১) | https://www.youtube.com/embed/lWbwD8YcedY |
| 403 | private | O you who believe! Do not let your wealth distract you (Quran) | https://www.youtube.com/embed/39Eo7THcDK4 |

## firebase/public/partials/stories/companions.html (1 removed)

| status | reason | title | link |
|---|---|---|---|
| 404 | deleted / not found | সাহাবীদের জীবন কাহিনী | https://www.youtube.com/playlist?list=PLi2xff1UDKWQZUMleaZqe0tStVoCmQu_N |
