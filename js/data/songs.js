
/**
 * A list of song urls
 * @type {string[]}
 */
const song_list = [

  // Unknown Artists
  createSong(title="Snow Day",                 artist="", url="https://dl.dropboxusercontent.com/s/g9g4qx1yaa5wh5d/Snow%20Day.mp3?dl=0"),
  createSong(title="Sleeping under the stars", artist="", url="https://dl.dropboxusercontent.com/s/rb1cqqhl2swg0ay/Sleeping%20under%20the%20stars.mp3?dl=0"),
  createSong(title="Shimmer",                  artist="", url="https://dl.dropboxusercontent.com/s/k8fqrlonam4ulna/Shimmer.mp3?dl=0"),
  createSong(title="Fields",                   artist="", url="https://dl.dropboxusercontent.com/s/t7j78utae3a5bv8/Fields.mp3?dl=0"),
  createSong(title="This Cant Be The End",     artist="", url="https://dl.dropboxusercontent.com/s/tekpv6wv73i33cg/%285%29%20This%20Cant%20Be%20The%20End.mp3?dl=0"),
  createSong(title="hotcoco",                  artist="", url="https://dl.dropboxusercontent.com/s/utt4n7rvk2ql4y1/hotcoco.mp3?dl=0"),
  createSong(title="Raining Crystals",         artist="", url="https://dl.dropboxusercontent.com/s/qs091kjzholwyl1/Raining%20Crystals.mp3?dl=0"),
  createSong(title="Liquid Sun.wav",           artist="", url="https://dl.dropboxusercontent.com/s/6alw5mnq3i3wry0/Liquid%20Sun.wav?dl=0"),
  createSong(title="Morning Coffee.wav",       artist="", url="https://dl.dropboxusercontent.com/s/8ksd9zbe7y1c35v/Morning%20Coffee.wav?dl=0"),
  createSong(title="Drives",                   artist="", url="https://dl.dropboxusercontent.com/s/pgt4a7m9d80lbhl/Drives.mp3?dl=0"),
  createSong(title="Narcos",                   artist="", url="https://dl.dropboxusercontent.com/s/zwnm8zoiu4pxxri/Narcos.mp3?dl=0"),
  createSong(title="Easy Going",               artist="", url="https://dl.dropboxusercontent.com/s/9zr7tem3qv1gsrf/Easy%20Going.mp3?dl=0"),
  createSong(title="Fortune",                  artist="", url="https://dl.dropboxusercontent.com/s/m9y91jq1ixoscqi/Fortune.mp3?dl=0"),
  createSong(title="Sunny Days",               artist="", url="https://dl.dropboxusercontent.com/s/p9yce2eozsoptyl/Sunny%20Days.mp3?dl=0"),
  createSong(title="The Mind",                 artist="", url="https://dl.dropboxusercontent.com/s/i1d7rjxmkyz5s0s/The%20Mind.mp3?dl=0"),
  createSong(title="Willows",                  artist="", url="https://dl.dropboxusercontent.com/s/gay34cnzqy3d20w/Willows.mp3?dl=0"),
  createSong(title="Rising",                   artist="", url="https://dl.dropboxusercontent.com/s/regu5dmreevixqu/Rising.mp3?dl=0"),
  createSong(title="Syncing",                  artist="", url="https://dl.dropboxusercontent.com/s/qzu10vhl6tyshfb/Syncing.mp3?dl=0"),
  createSong(title="Linus",                    artist="", url="https://dl.dropboxusercontent.com/s/lreu3h7128muotl/%281%29%20Linus.mp3?dl=0"),
  createSong(title="Harpen",                   artist="", url="https://dl.dropboxusercontent.com/s/jw33y8514bqmnqa/Harpen.mp3?dl=0"),
  createSong(title="Old Town Sqaure",          artist="", url="https://dl.dropboxusercontent.com/s/qtniqqlbu2m1lcu/Old%20Town%20Sqaure.mp3?dl=0"),
  createSong(title="Detroit",                  artist="", url="https://dl.dropboxusercontent.com/s/rne3vxv4u21entq/Detroit.mp3?dl=0"),
  createSong(title="Learning",                 artist="", url="https://dl.dropboxusercontent.com/s/gl5l4y94vafc2ww/Learning.mp3?dl=0"),
  createSong(title="A New Day",                artist="", url="https://dl.dropboxusercontent.com/s/47tmt80ztftzet2/A%20New%20Day.mp3?dl=0"),
  createSong(title="aplace",                   artist="", url="https://dl.dropboxusercontent.com/s/abiih5dxyxbv2q2/aplace.mp3?dl=0"),
  createSong(title="Approaching Fall",         artist="", url="https://dl.dropboxusercontent.com/s/6b10td2wrs7m3be/Approaching%20Fall.mp3?dl=0"),
  createSong(title="Blue Moon",                artist="", url="https://dl.dropboxusercontent.com/s/64na4xqd3qr092l/Blue%20Moon%20%281%29.mp3?dl=0"),
  createSong(title="Burning Sun",              artist="", url="https://dl.dropboxusercontent.com/s/0jqvy1gp035qe69/Burning%20Sun.mp3?dl=0"),
  createSong(title="cloudsky across",          artist="", url="https://dl.dropboxusercontent.com/s/ko4jjthbztpb9lc/cloudsky%20across%20%5Bmaster%5D.mp3?dl=0"),
  createSong(title="Clouds",                   artist="", url="https://dl.dropboxusercontent.com/s/lbak0vb8dsujzui/Clouds.mp3?dl=0"),
  createSong(title="Corona",                   artist="", url="https://dl.dropboxusercontent.com/s/vwqwnpyzz7h0wih/Corona.mp3?dl=0"),
  createSong(title="Deep End",                 artist="", url="https://dl.dropboxusercontent.com/s/8hylbfylsbyx4xl/Deep%20End.mp3?dl=0"),
  createSong(title="Dreams",                   artist="", url="https://dl.dropboxusercontent.com/s/3gyrcerqd5hx7rr/Dreams.mp3?dl=0"),
  createSong(title="Event Horizon",            artist="", url="https://dl.dropboxusercontent.com/s/k5qxmywzljpfwhg/Event%20Horizon.mp3?dl=0"),
  createSong(title="gone",                     artist="", url="https://dl.dropboxusercontent.com/s/ayza4ut69r1183l/gone%20%281%29.mp3?dl=0"),
  createSong(title="let me know",              artist="", url="https://dl.dropboxusercontent.com/s/mpmgjwh1jyp5v3i/let%20me%20know.mp3?dl=0"),
  createSong(title="lost in translation",      artist="", url="https://dl.dropboxusercontent.com/s/jzwq8i4qaq8ur23/lost%20in%20translation.mp3?dl=0"),
  createSong(title="Memories",                 artist="", url="https://dl.dropboxusercontent.com/s/zywqxd5pxhsieeh/Memories.mp3?dl=0"),
  createSong(title="Natsukashii",              artist="", url="https://dl.dropboxusercontent.com/s/rkgjegjnq2c0seh/Natsukashii.mp3?dl=0"),
  createSong(title="No Name",                  artist="", url="https://dl.dropboxusercontent.com/s/rxcaqzimptihpjz/No%20Name.mp3?dl=0"),
  createSong(title="Phenomenal_Master",        artist="", url="https://dl.dropboxusercontent.com/s/q04jsmhrk8if6kx/Phenomenal_Master.mp3?dl=0"),
  createSong(title="Port Evenings",            artist="", url="https://dl.dropboxusercontent.com/s/y1l99axpaf78m66/Port%20Evenings%20Master%20V3.mp3?dl=0"),
  createSong(title="Red Ribbon",               artist="", url="https://dl.dropboxusercontent.com/s/nxyolaq4ez41r4t/Red%20Ribbon.mp3?dl=0"),
  createSong(title="Saturdays.",               artist="", url="https://dl.dropboxusercontent.com/s/q4rdizadxdk4f9p/Saturdays..mp3?dl=0"),
  createSong(title="Shimmer",                  artist="", url="https://dl.dropboxusercontent.com/s/k8fqrlonam4ulna/Shimmer.mp3?dl=0"),
  createSong(title="Snowflakes",               artist="", url="https://dl.dropboxusercontent.com/s/6gn4kwavkinfrou/Snowflakes%20%282%29.mp3?dl=0"),
  createSong(title="The stories we told",      artist="", url="https://dl.dropboxusercontent.com/s/cyahh40gw96cdq8/The%20stories%20we%20told.mp3?dl=0"),
  createSong(title="Vortex",                   artist="", url="https://dl.dropboxusercontent.com/s/ner3dgk7tdwpy8a/Vortex.mp3?dl=0"),
  createSong(title="within",                   artist="", url="https://dl.dropboxusercontent.com/s/l8guyz21ngsds2v/within%20%282%29.mp3?dl=0"),
  createSong(title="I Thought You Meant It",   artist="", url="https://dl.dropboxusercontent.com/s/xaq6yijskmoybgm/%283%29%20I%20Thought%20You%20Meant%20It.mp3?dl=0"),
  createSong(title="This Cant Be The End",     artist="", url="https://dl.dropboxusercontent.com/s/tekpv6wv73i33cg/%285%29%20This%20Cant%20Be%20The%20End.mp3?dl=0"),
  createSong(title="Moments In Time",          artist="", url="https://dl.dropboxusercontent.com/s/pfw298euhf7aj9n/Moments%20In%20Time%20%28online-audio-converter.com%29.mp3?dl=0"),
  createSong(title="a-new-sunset",             artist="", url="https://dl.dropboxusercontent.com/s/hpsfndkl4bga40f/a-new-sunset%20%281%29.mp3?dl=0"),
  createSong(title="Gone",                     artist="", url="https://dl.dropboxusercontent.com/s/iv90fvr0n3dwd5k/02%20Gone_MASTER.mp3?dl=0"),
  createSong(title="Nymphéa",                  artist="", url="https://dl.dropboxusercontent.com/s/pmxuwpg649ipcrv/05%20-%20Nymph%C3%A9a.mp3?dl=0"),
  createSong(title="Like The Wind",            artist="", url="https://dl.dropboxusercontent.com/s/8nnovuw3ok9z0km/03%20-%20Like%20The%20Wind.mp3?dl=0"),
  createSong(title="Amber",                    artist="", url="https://dl.dropboxusercontent.com/s/s8a54l8h4ucmxz6/06%20-%20Amber.mp3?dl=0"),
  createSong(title="Birth Of Beauty",          artist="", url="https://dl.dropboxusercontent.com/s/uvqfxi5oejmfgv9/04%20-%20Birth%20Of%20Beauty.mp3?dl=0"),
  
  // One Off Artists
  createSong(title="it's ok to cry",                        artist="NiSSAK",                               url="https://dl.dropboxusercontent.com/s/97xszm96uqt6pno/NiSSAK%20-%20it%27s%20ok%20to%20cry.mp3?dl=0"),
  createSong(title="Clouds",                                artist="Agx12, Adbeel",                        url="https://dl.dropboxusercontent.com/s/nst0hkvm9pmimik/Agx12%2C%20Adbeel%20-%20Clouds.mp3?dl=0"),
  createSong(title="Little Green Tree",                     artist="Kewlie",                               url="https://dl.dropboxusercontent.com/s/onpa6c3tfbi7m38/Kewlie%20-%20Little%20Green%20Tree.mp3?dl=0"),
  createSong(title="Wake Up Late",                          artist="Nadav Cohen",                          url="https://dl.dropboxusercontent.com/s/n24ch8jfcsyoi5g/Nadav%20Cohen%20-%20Wake%20Up%20Late.mp3?dl=0"),
  createSong(title="Sands Of Time",                         artist="Drunk Urameshi",                       url="https://dl.dropboxusercontent.com/s/rtzgy871lacz5ji/Drunk%20Urameshi%20-%20Sands%20Of%20Time.mp3?dl=0"),
  createSong(title="Heartbeat",                             artist="Ezor Jz",                              url="https://dl.dropboxusercontent.com/s/gck4kyar65fozac/Ezor%20Jz%20-%20Heartbeat.mp3?dl=0"),
  createSong(title="Lost",                                  artist="TheAsianOnes",                         url="https://dl.dropboxusercontent.com/s/ro87pkxpgphy9cy/TheAsianOnes%20-%20Lost.mp3?dl=0"),
  createSong(title="Shimmering Nights",                     artist="awshhine, Ahry",                       url="https://dl.dropboxusercontent.com/s/w7u0j4cj84wsif7/awshhine%2C%20Ahry%20-%20Shimmering%20Nights.mp3?dl=0"),
  createSong(title="Ocean of Memories",                     artist="reidenshi",                            url="https://dl.dropboxusercontent.com/s/6t2ac9z87vmqvr6/reidenshi%20-%20Ocean%20of%20Memories.mp3?dl=0"),
  createSong(title="Spirit Away",                           artist="Sora",                                 url="https://dl.dropboxusercontent.com/s/btksc455ku0gv2i/Sora%20-%20Spirit%20Away.mp3?dl=0"),
  createSong(title="Moonwake",                              artist="Nessen, LUXID AXID",                   url="https://dl.dropboxusercontent.com/s/ftqg8179bp0upoh/Moonwake%20-%20Nessen%2C%20LUXID%20AXID.mp3?dl=0"),
  createSong(title="moonlake",                              artist="prithvi",                              url="https://dl.dropboxusercontent.com/s/zeh6u5swf85jlfu/26.%20prithvi%20-%20moonlake.mp3?dl=0"),
  createSong(title="in the peace of the night",             artist="dreamy kid",                           url="https://dl.dropboxusercontent.com/s/mt3skh8iuuo7fgb/dreamy%20kid%20-%20in%20the%20peace%20of%20the%20night.mp3?dl=0"),
  createSong(title="open eyes",                             artist="redmatic",                             url="https://dl.dropboxusercontent.com/s/n7ze2t8pa5qt4ey/14.%20redmatic%20-%20open%20eyes.mp3?dl=0"),
  createSong(title="Peace",                                 artist="Nosmo, Kioshi",                        url="https://dl.dropboxusercontent.com/s/4uh0n2b5qncxi3n/Peace%20-%20Nosmo%2C%20Kioshi%20%28Purity%20Label%29.mp3?dl=0"),
  createSong(title="mondays",                               artist="sike beats",                           url="https://dl.dropboxusercontent.com/s/zsfrsdz4tq00fab/sike%20beats%20-%20mondays.mp3?dl=0"),
  createSong(title="Slow Dance",                            artist="Arcanyz",                              url="https://dl.dropboxusercontent.com/s/wxn1cdiytlxlsi8/Arcanyz%20-%20Slow%20Dance.mp3?dl=0"),
  createSong(title="Downtown",                              artist="Hanagoori",                            url="https://dl.dropboxusercontent.com/s/op9ezqgp7th7npv/Hanagoori%20-%20Downtown.mp3?dl=0"),
  createSong(title="Slowdown",                              artist="landq",                                url="https://dl.dropboxusercontent.com/s/oynpc1wr5z9gox5/landq%20-%20Slowdown.mp3?dl=0"),
  createSong(title="Lemonade",                              artist="Venvn",                                url="https://dl.dropboxusercontent.com/s/ez8kc8d1gxbiwj9/Venvn%20-%20Lemonade.mp3?dl=0"),
  createSong(title="Coral Pink Seafoam",                    artist="Miilano",                              url="https://dl.dropboxusercontent.com/s/nelw7z7wnj6idhj/Miilano%20-%20Coral%20Pink%20Seafoam.mp3?dl=0"),
  createSong(title="Under Your Spell",                      artist="7&Nine",                               url="https://dl.dropboxusercontent.com/s/5l2ss0ehkkrsnwt/7%26Nine%20-%20Under%20Your%20Spell.mp3?dl=0"),
  createSong(title="i believe you have my stapler",         artist="flat.moon.society",                    url="https://dl.dropboxusercontent.com/s/sewch0gbx0jifjf/flat.moon.society%20-%20i%20believe%20you%20have%20my%20stapler.mp3?dl=0"),
  createSong(title="club sandwich",                         artist="nilok",                                url="https://dl.dropboxusercontent.com/s/qhaqpu1554jprx8/nilok%20-%20club%20sandwich.mp3?dl=0"),
  createSong(title="Breathe",                               artist="Suede Wallet",                         url="https://dl.dropboxusercontent.com/s/o57a79k4djivpnu/Suede%20Wallet%20-%20Breathe.mp3?dl=0"),
  createSong(title="Hush",                                  artist="Hush",                                 url="https://dl.dropboxusercontent.com/s/v4y8gu6eqr1q3vx/Skengybeatz%20-%20Hush.mp3?dl=0"),
  createSong(title="Sleeper",                               artist="Juna",                                 url="https://dl.dropboxusercontent.com/s/mbjv82g40mmh5hy/Juna%20-%20Sleeper.mp3?dl=0"),
  createSong(title="Loveless Love",                         artist="Jeffu",                                url="https://dl.dropboxusercontent.com/s/w3rfmdc0i0zcun4/Jeffu%20-%20Loveless%20Love%20-%20Lifted%20LoFi%20Records.mp3?dl=0"),
  createSong(title="Fall in Love",                          artist="Kuba",                                 url="https://dl.dropboxusercontent.com/s/eut0fz32hbj7rg1/Kuba%20-%20Fall%20in%20Love%20-%20Lifted%20LoFi%20Records.mp3?dl=0"),
  createSong(title="Jazz Voyage",                           artist="Jazz Voyage",                          url="https://dl.dropboxusercontent.com/s/yyywqochndzqpdd/Jazz%20Voyage%20-%20Jazz%20Voyage.mp3?dl=0"),
  createSong(title="Riviera",                               artist="Clumby",                               url="https://dl.dropboxusercontent.com/s/p5wagyhzohj7400/Clumby%20-%20Riviera%20%281%29.mp3?dl=0"),
  createSong(title="So You Say",                            artist="jüle.",                                url="https://dl.dropboxusercontent.com/s/it48ts39p1jyflm/j%C3%BCle.%20-%20So%20You%20Say.mp3?dl=0"),
  createSong(title="Treehouse Jazz",                        artist="Jk Beatbook",                          url="https://dl.dropboxusercontent.com/s/sxkjroi2tprd3kg/Jk%20Beatbook%20-%20Treehouse%20Jazz.mp3?dl=0"),
  createSong(title="Broken Dreams",                         artist="Rivizion",                             url="https://dl.dropboxusercontent.com/s/sa3tz1y6kukfi6v/Rivizion%20-%20Broken%20Dreams.mp3?dl=0"),
  createSong(title="All I Want From You",                   artist="Lo-Fi Tigers",                         url="https://dl.dropboxusercontent.com/s/wuzo1hcluoq5xe5/Lo-Fi%20Tigers%20-%20All%20I%20Want%20From%20You.mp3?dl=0"),
  createSong(title="Dimmed",                                artist="Droemsk, User67, Sftspkn, Jokujekku",  url="https://dl.dropboxusercontent.com/s/in24imooe9rsu1g/Dimmed%20%28Droemsk%2C%20User67%2C%20Sftspkn%2C%20Jokujekku%29.mp3?dl=0"),
  createSong(title="Gingerbread",                           artist="Jav Cast",                             url="https://dl.dropboxusercontent.com/s/mc46cv1m44g8g43/Jav%20Cast%20-%20Gingerbread.mp3?dl=0"),
  createSong(title="Bluish",                                artist="Low Key Trampoline",                   url="https://dl.dropboxusercontent.com/s/jt1oott4b3582zj/Low%20Key%20Trampoline%20-%20Bluish.mp3?dl=0"),
  createSong(title="The Blunt Chronicles",                  artist="chill.exe",                            url="https://dl.dropboxusercontent.com/s/piu2vr0dbv5wv16/chill.exe%20-%20The%20Blunt%20Chronicles.mp3?dl=0"),
  createSong(title="Afternoon In June",                     artist="Ol Wallace",                           url="https://dl.dropboxusercontent.com/s/lxyb1bxud0lfm8n/Ol%20Wallace%20-%20Afternoon%20In%20June%20%281%29.mp3?dl=0"),
  createSong(title="oasis",                                 artist="i'm.busy",                             url="https://dl.dropboxusercontent.com/s/r5kquf111l791ty/1%20oasis%20%5Bi_m.busy%5D.mp3?dl=0"),
  createSong(title="Izakaya Alley",                         artist="Enyk",                                 url="https://dl.dropboxusercontent.com/s/d893vj421jdn0pi/Enyk%20-%20Izakaya%20Alley.mp3?dl=0"),
  createSong(title="No Wonder Why",                         artist="Hikari",                               url="https://dl.dropboxusercontent.com/s/76o1wihwl3rwlwe/Hikari%20-%20No%20Wonder%20Why.mp3?dl=0"),
  createSong(title="Life By Your Side",                     artist="Epigenesis",                           url="https://dl.dropboxusercontent.com/s/v2r5oj4sf8p9h1h/Epigenesis%20-%20Life%20By%20Your%20Side.mp3?dl=0"),
  createSong(title="Cloudy Sky",                            artist="Daemon",                               url="https://dl.dropboxusercontent.com/s/lqnhw20cb381ht3/Daemon%20-%20Cloudy%20Sky.mp3?dl=0"),
  createSong(title="Telling Stories",                       artist="Elaz",                                 url="https://dl.dropboxusercontent.com/s/yijcufdykodu1va/Elaz%20-%20Telling%20Stories.mp3?dl=0"),
  createSong(title="Beyond The Darkside",                   artist="Fedma",                                url="https://dl.dropboxusercontent.com/s/g3t1fz5wktc40dk/Fedma%20-%20Beyond%20The%20Darkside.mp3?dl=0"),
  createSong(title="Gratitude",                             artist="tezpu",                                url="https://dl.dropboxusercontent.com/s/j340899yt215jeo/Gratitude%20-%20tezpu.mp3?dl=0"),
  createSong(title="Distant Memories",                      artist="Grvv",                                 url="https://dl.dropboxusercontent.com/s/nycpsvb17ezg4g6/Grvv%20-%20Distant%20Memories.mp3?dl=0"),
  createSong(title="JP photo bounce",                       artist="HM Surf",                              url="https://dl.dropboxusercontent.com/s/7n3o8s4uuu55l00/HM%20Surf%20-%20JP%20photo%20bounce.mp3?dl=0"),
  createSong(title="Promise",                               artist="HOKØ",                                 url="https://dl.dropboxusercontent.com/s/oz7zyl548f6waq6/HOK%C3%98%20-%20Promise.mp3?dl=0"),
  createSong(title="Clout",                                 artist="Howtodie",                             url="https://dl.dropboxusercontent.com/s/k2o14tg49il2glc/Howtodie%20-%20Clout.mp3?dl=0"),
  createSong(title="Remembrance",                           artist="InternalEye",                          url="https://dl.dropboxusercontent.com/s/fupzb2kmd3u1i6v/InternalEye%20-%20Remembrance.mp3?dl=0"),
  createSong(title="Whispers of Time",                      artist="IИDIEGLOW",                            url="https://dl.dropboxusercontent.com/s/8d8j5urdu2je8ln/I%D0%98DIEGLOW-Whispers%20of%20Time.mp3?dl=0"),
  createSong(title="Skipped A Beat",                        artist="Jersy K",                              url="https://dl.dropboxusercontent.com/s/760qdulr8i4gf7p/Jersy%20K%20-%20Skipped%20A%20Beat%20-%20Lifted%20LoFi%20Records.mp3?dl=0"),
  createSong(title="Light Years",                           artist="Judo Casey",                           url="https://dl.dropboxusercontent.com/s/vrcf6fl6vdfg2n1/Judo%20Casey%20-%20Light%20Years.mp3?dl=0"),
  createSong(title="Sparkling Nights",                      artist="kairos",                               url="https://dl.dropboxusercontent.com/s/1o4qo8g9af7v55p/kairos%20-%20Sparkling%20Nights.mp3?dl=0"),
  createSong(title="Yesterday Morning",                     artist="Kioshi",                               url="https://dl.dropboxusercontent.com/s/ksffrj4winwojyl/Kioshi%20-%20Yesterday%20Morning.mp3?dl=0"),
  createSong(title="Draped",                                artist="Klode Chill",                          url="https://dl.dropboxusercontent.com/s/ki1fm50x89sd6hz/Klode%20Chill%20-%20Draped.mp3?dl=0"),
  createSong(title="Dreams",                                artist="Last Memories",                        url="https://dl.dropboxusercontent.com/s/hkj7zp06rksnp0x/Last%20Memories%20-%20Dreams.mp3?dl=0"),
  createSong(title="Journey",                               artist="LucidDream.",                          url="https://dl.dropboxusercontent.com/s/pps9d292uapw3wu/LucidDream.%20-%20Journey%20%5BMASTERED%5D.mp3?dl=0"),
  createSong(title="Serenity",                              artist="luv pug x warm tides",                 url="https://dl.dropboxusercontent.com/s/3bkz35ihcpdqxce/luv%20pug%20x%20warm%20tides%20-%20Serenity%20%28master%29.mp3?dl=0"),
  createSong(title="Gimbap",                                artist="Marc Brave x Rick Nice",               url="https://dl.dropboxusercontent.com/s/zdghe1yrf278udd/Marc%20Brave%20x%20Rick%20Nice%20-%20Gimbap.mp3?dl=0"),
  createSong(title="truly yours",                           artist="mockfly",                              url="https://dl.dropboxusercontent.com/s/v7r6ax0yfy84zh7/mockfly%20-%20truly%20yours%20LLR.mp3?dl=0"),
  createSong(title="On The Way Home",                       artist="Mondo Loops x Snoozegod",              url="https://dl.dropboxusercontent.com/s/ma7bcgbvty1qncm/Mondo%20Loops%20x%20Snoozegod%20-%20On%20The%20Way%20Home.mp3?dl=0"),
  createSong(title="Japan Dreams",                          artist="Muun",                                 url="https://dl.dropboxusercontent.com/s/jf2m8qsiub4p3ew/Muun%20-%20Japan%20Dreams.mp3?dl=0"),
  createSong(title="red moon",                              artist="mystery_o",                            url="https://dl.dropboxusercontent.com/s/6stk3hwo7bx0i7u/mystery_o%20-%20red%20moon.mp3?dl=0"),
  createSong(title="Floating Island",                       artist="Neo LoFi",                             url="https://dl.dropboxusercontent.com/s/0uom9gc2ervs1fz/Neo%20LoFi%20-%20Floating%20Island.mp3?dl=0"),
  createSong(title="Flutter",                               artist="Ox the Moron",                         url="https://dl.dropboxusercontent.com/s/u6dl7veg0vgqmqd/Ox%20the%20Moron%20-%20Flutter%20%282%29.mp3?dl=0"),
  createSong(title="Trying not to fight myself",            artist="Rebecca Mardal",                       url="https://dl.dropboxusercontent.com/s/zz187kfscw64ju4/Rebecca%20Mardal%20-%20Trying%20not%20to%20fight%20myself%20%282%29.mp3?dl=0"),
  createSong(title="Ride The Flow",                         artist="Eugenio Izzi",                         url="https://dl.dropboxusercontent.com/s/8dwiwhkjzw6fct1/Ride%20The%20Flow%20-%20Eugenio%20Izzi%20%281%29.mp3?dl=0"),
  createSong(title="A Universe Apart",                      artist="SAGE GREEN",                           url="https://dl.dropboxusercontent.com/s/ypiw2tk0is0v4u9/SAGE%20GREEN%20-%20A%20Universe%20Apart.mp3?dl=0"),
  createSong(title="Intertwined",                           artist="Saikai",                               url="https://dl.dropboxusercontent.com/s/z7m716dht8oprtx/Saikai%20-%20Intertwined.mp3?dl=0"),
  createSong(title="Sunrays Through The Trees",             artist="Seek Shelter",                         url="https://dl.dropboxusercontent.com/s/fney6hfyddmybaq/Seek%20Shelter%20-%20Sunrays%20Through%20The%20Trees.mp3?dl=0"),
  createSong(title="Ineffable",                             artist="Sinnr",                                url="https://dl.dropboxusercontent.com/s/u55sit9k3we56ep/Sinnr%20-%20Ineffable%20%281%29.mp3?dl=0"),
  createSong(title="Sometimes I Miss Myself",               artist="Marlus",                               url="https://dl.dropboxusercontent.com/s/abprt68xoomljpj/Sometimes%20I%20Miss%20Myself%20-%20Marlus.mp3?dl=0"),
  createSong(title="Warm Reflection",                       artist="Sonus Vibes x sleeping with shoes on", url="https://dl.dropboxusercontent.com/s/d56oimsnyai13f4/Sonus%20Vibes%20x%20Sleeping%20With%20Shoes%20On%20-%20Warm%20Reflection%20LLR.mp3?dl=0"),
  createSong(title="Closer To You",                         artist="Sxul",                                 url="https://dl.dropboxusercontent.com/s/qbe3woags717kwo/Sxul%20-%20Closer%20To%20You%20%281%29.mp3?dl=0"),
  createSong(title="lost love",                             artist="tezpu (w/ ale fillman)",               url="https://dl.dropboxusercontent.com/s/ulrbg6l92vww8kt/tezpu%20-%20lost%20love%20%28w_%20ale%20fillman%29.mp3?dl=0"),
  createSong(title="Dear Friend",                           artist="Bcalm, Banks, Gerardo Millan",         url="https://dl.dropboxusercontent.com/s/4cs6ir86ob9i1of/Bcalm%2C%20Banks%20_%20Gerardo%20Millan%20-%20Dear%20Friend.mp3?dl=0"),
  createSong(title="Beautiful Things",                      artist="Cassidy Godwin, Vannorte",             url="https://dl.dropboxusercontent.com/s/dflsdkgs5eroxw7/Beautiful%20Things%20-%20Cassidy%20Godwin%2C%20Vannorte.mp3?dl=0"),
  createSong(title="almost",                                artist="blocktane",                            url="https://dl.dropboxusercontent.com/s/ierxx9hullwwhug/blocktane%20-%20almost%20%28master%29.mp3?dl=0"),
  createSong(title="i can't",                               artist="Bogomolove",                           url="https://dl.dropboxusercontent.com/s/c8rqtomgugcbm6q/Bogomolove%20-%20i%20can%27t%20LLR.mp3?dl=0"),
  createSong(title="Falling Stars",                         artist="Casiio",                               url="https://dl.dropboxusercontent.com/s/fqh17gz02i1gpyh/Casiio%20-%20Falling%20Stars.mp3?dl=0"),
  createSong(title="Slow Brew",                             artist="Clockwork Orange",                     url="https://dl.dropboxusercontent.com/s/2k2wghc7alsoe91/Clockwork%20Orange%20-%20Slow%20Brew%20-%20Lifted%20LoFi%20Records.mp3?dl=0"),
  createSong(title="You and I",                             artist="Colours in Context",                   url="https://dl.dropboxusercontent.com/s/hp8d0n7lxcbysx1/Colours%20in%20Context%20-%20You%20and%20I_MASTER%20.mp3?dl=0"),
  createSong(title="Memories",                              artist="Hiroyuki Kondo",                       url="https://dl.dropboxusercontent.com/s/zb9d4as22irm9vr/Copia%20di%20Hiroyuki%20Kondo%20-%20Memories.mp3?dl=0"),
  createSong(title="night on the galactic railroad",        artist="creature sonore",                      url="https://dl.dropboxusercontent.com/s/n6mcz4qs55gbjy0/creature%20sonore%20-%20night%20on%20the%20galactic%20railroad.mp3?dl=0"),
  createSong(title="new hope",                              artist="ayzic + kinissue",                     url="https://dl.dropboxusercontent.com/s/eqoyi6u7lb38tic/2.%20ayzic%20%2B%20kinissue%20-%20new%20hope.mp3?dl=0"),
  createSong(title="The Arrival",                           artist="The Kozy Kabin",                       url="https://dl.dropboxusercontent.com/s/vk8pb3lx97ixh2s/4%20-%20The%20Kozy%20Kabin%20-%20The%20Arrival.mp3?dl=0"),
  createSong(title="looks like rain",                       artist="azayaka",                              url="https://dl.dropboxusercontent.com/s/m9fsyhjtgqjkbuw/4.%20azayaka%20-%20looks%20like%20rain.mp3?dl=0"),
  createSong(title="luminous moss",                         artist="odd panda + v i v",                    url="https://dl.dropboxusercontent.com/s/tvtumfj2latvwue/18.%20odd%20panda%20%2B%20v%20i%20v%20-%20luminous%20moss.mp3?dl=0"),
  createSong(title="tayutau",                               artist="su-zuum",                              url="https://dl.dropboxusercontent.com/s/qc9ut78p7u9z8dz/20.%20su-zuum%20-%20tayutau.mp3?dl=0"),
  createSong(title="first leaf",                            artist="cookie tapes",                         url="https://dl.dropboxusercontent.com/s/726qrcw5ph1s98y/23.%20cookie%20tapes%20-%20first%20leaf.mp3?dl=0"),
  createSong(title="Dear Child",                            artist="Abricot",                              url="https://dl.dropboxusercontent.com/s/pcq8i75zttqctu2/Abricot%20-%20Dear%20Child.mp3?dl=0"),
  createSong(title="Walking On Clouds (Instrumental Ver.)", artist="Agu",                                  url="https://dl.dropboxusercontent.com/s/3dl3agjaglww6pj/Agu%20-%20Walking%20On%20Clouds%20%28Instrumental%20Version%29%20%281%29.mp3?dl=0 "),
  createSong(title="Seaside",                               artist="Ale Fillman",                          url="https://dl.dropboxusercontent.com/s/wlkne6jivze2ets/Ale%20Fillman%20-%20Seaside.mp3?dl=0"),
  createSong(title="A Lovely Night",                        artist="Antonius B",                           url="https://dl.dropboxusercontent.com/s/qa4jq5bxhcf65v7/Antonius%20B%20-%20A%20Lovely%20Night.mp3?dl=0"),
  createSong(title="Frozen",                                artist="Tibeauthetraveler",                    url="https://dl.dropboxusercontent.com/s/l4mdgmbftsoqslm/Tibeauthetraveler%20-%20Frozen.mp3?dl=0"),
  createSong(title="magnolia",                              artist="Tonion",                               url="https://dl.dropboxusercontent.com/s/0uulclxemaes77h/Tonion%20-%20magnolia%20-%20Lifted%20LoFi%20Records%20%281%29.mp3?dl=0"),
  createSong(title="Afternoon Sun",                         artist="Tophat Panda",                         url="https://dl.dropboxusercontent.com/s/ksf6eyzutzrjy0f/Tophat%20Panda%20-%20Afternoon%20Sun.mp3?dl=0"),
  createSong(title="Blue Moon",                             artist="Urfirend x Matter Falls",              url="https://dl.dropboxusercontent.com/s/mgm9tfmsdiu7elp/Urfirend%20x%20Matter%20Falls%20-%20Blue%20Moon.mp3?dl=0"),
  createSong(title="And You Are Not Here",                  artist="Vaso Lipa",                            url="https://dl.dropboxusercontent.com/s/28v62efc4wbuhip/Vaso%20Lipa%20-%20And%20You%20Are%20Not%20Here.mp3?dl=0"),
  createSong(title="Homesickness",                          artist="Vibe Valley",                          url="https://dl.dropboxusercontent.com/s/06exv20lsmxmo3e/Vibe%20Valley%20-%20Homesickness.mp3?dl=0"),
  createSong(title="Orange Sky",                            artist="Wander Sky",                           url="https://dl.dropboxusercontent.com/s/chgc893cblawmci/Wander%20Sky%20-%20Orange%20Sky.mp3?dl=0"),
  createSong(title="Carefree Days",                         artist="Zephyr Deer",                          url="https://dl.dropboxusercontent.com/s/u1iwzusfj58lvri/Zephyr%20Deer%20-%20Carefree%20Days.mp3?dl=0"),

  // Artist Songs
  // Artist - Project AER
  createSong(title="In The Shade",                      artist="Project AER",                  url="https://dl.dropboxusercontent.com/s/7otl9ilom3fdi5h/03%20In%20The%20Shade_MASTER%20%281%29.mp3?dl=0"),
  createSong(title="1992",                              artist="Project AER",                  url="https://dl.dropboxusercontent.com/s/05kvbgcft675fea/08%201992_MASTER.mp3?dl=0"),
  createSong(title="Slow Down",                         artist="Project AER",                  url="https://dl.dropboxusercontent.com/s/7uoz5srpth3l85o/10%20Slow%20Down_MASTER.mp3?dl=0"),
  createSong(title="The Dust Settles",                  artist="Project AER",                  url="https://dl.dropboxusercontent.com/s/21k8wryqifdf803/02%20Project%20AER%20-%20The%20Dust%20Settles_MASTER.mp3?dl=0"),
  createSong(title="Aurora Skies",                      artist="Project AER",                  url="https://dl.dropboxusercontent.com/s/96fsd7lznr3g5r0/Project%20AER%20-%20Aurora%20Skies%20%28new%20drums%29.mp3?dl=0"),
  createSong(title="Concert Halls",                     artist="Project AER",                  url="https://dl.dropboxusercontent.com/s/35it9ulpjbqs7jp/04%20Project%20AER%20-%20Concert%20Halls_MASTER%20%281%29.mp3?dl=0"),
  createSong(title="Fireworks From The Bedroom Window", artist="Project AER (w/ lost.mindd)",  url="https://dl.dropboxusercontent.com/s/vrc90827cov1e3o/03%20Project%20AER%20-%20Fireworks%20From%20The%20Bedroom%20Window%20w%20lost.mindd_MASTER.mp3?dl=0"),
  createSong(title="Our Time By The Coast",             artist="Project AER (w/ steezy prime", url="https://dl.dropboxusercontent.com/s/ree4gnlihmwt2se/06%20Project%20AER%20-%20Our%20Time%20By%20The%20Coast%20w%20steezy%20prime_MASTER.mp3?dl=0"),
  createSong(title="Maybe Tomorrow Will Be Better",     artist="Project AER (w/ j brij)",      url="https://dl.dropboxusercontent.com/s/fjcejp4pg7tsf2i/07%20Project%20AER%20-%20Maybe%20Tomorrow%20Will%20Be%20Better%20w%20j%20brij_MASTER.mp3?dl=0"),
  createSong(title="One for a New Year",                artist="Project AER (w/ Kainbeats)",   url="https://dl.dropboxusercontent.com/s/yw384b2rlep3gwp/08%20Project%20AER%20-%20One%20for%20a%20New%20Year%20w%20Kainbeats_MASTER.mp3?dl=0"),
  createSong(title="You",                               artist="Project AER (w/ Hoffy Beats)", url="https://dl.dropboxusercontent.com/s/i814biunyryq364/04%20You%20w%20Hoffy%20Beats_MASTER.mp3?dl=0"),
  createSong(title="The House Piano",                   artist="Project AER (w/ Ayzic)",       url="https://dl.dropboxusercontent.com/s/k33odjc96cg1zsv/09%20The%20House%20Piano%20w%20Ayzic_MASTER.mp3?dl=0"),
  createSong(title="Leaving Home",                      artist="Project AER (w/ Slowheal)",    url="https://dl.dropboxusercontent.com/s/91nu9hgx2lkzolk/11%20Leaving%20Home%20w%20Slowheal_MASTER.mp3?dl=0"),

  // Artist - That's Cool
  createSong(title="Be ok",         artist="That's Cool", url="https://dl.dropboxusercontent.com/s/h7q593gqyqs8nje/That%27s%20Cool%20-%20Be%20ok.mp3?dl=0"),
  createSong(title="By My Side",    artist="That's Cool", url="https://dl.dropboxusercontent.com/s/x9ndsaz6cb49ots/That%27s%20Cool%20-%20By%20My%20Side.mp3?dl=0"),
  createSong(title="Lost in Space", artist="That's Cool", url="https://dl.dropboxusercontent.com/s/xf1ooih8ufo49jh/That%27s%20Cool%20-%20Lost%20in%20Space.wav?dl=0"),
  createSong(title="Thru Clouds",   artist="That's Cool", url="https://dl.dropboxusercontent.com/s/w1rtvu14kmm7aeo/That%27s%20Cool%20-%20Thru%20Clouds.mp3?dl=0"),
  createSong(title="Starlight",     artist="That's Cool", url="https://dl.dropboxusercontent.com/s/dir830m0onp3q4g/That%27s%20Cool%20-%20Starlight.mp3?dl=0"),
  createSong(title="Dreams",        artist="That's Cool", url="https://dl.dropboxusercontent.com/s/scgc5k8lxm40n48/That%27s%20Cool%20-%20Dreams.mp3?dl=0"),

  // Artist - Sxcarldy
  createSong(title="Harbor",      artist="Sxcarldy", url="https://dl.dropboxusercontent.com/s/ft1xuctnh4pzgcv/Sxcarld%20-%20Harbor.mp3?dl=0"),
  createSong(title="Ocean Eyes",  artist="Sxcarldy", url="https://dl.dropboxusercontent.com/s/0wfgxrac0cj03za/Sxcarldy%20-%20Ocean%20Eyes.mp3?dl=0"),
  createSong(title="Blue Moment", artist="Sxcarldy", url="https://dl.dropboxusercontent.com/s/pg0e9nbo14jmbmp/Sxcarldy%20-%20Blue%20Moment.mp3?dl=0"),

  // Artist - Lost Files
  createSong(title="Yellow Mornings",  artist="Lost Files", url="https://dl.dropboxusercontent.com/s/ozmyv4glg97mnlz/Lost%20Files%20-%20Yellow%20Mornings.mp3?dl=0"),
  createSong(title="Boys Afternoon",   artist="Lost Files", url="https://dl.dropboxusercontent.com/s/ce0c0h7fjj0q8py/Lost%20Files%20-%20Boys%20Afternoon.mp3?dl=0"),
  createSong(title="My Favourite Dog", artist="Lost Files", url="https://dl.dropboxusercontent.com/s/qq4xld7prbkk2ke/Lost%20Files%20-%20My%20Favourite%20Dog.mp3?dl=0"),
  createSong(title="Our Place",        artist="Lost Files", url="https://dl.dropboxusercontent.com/s/4uahavtnjmj4pdo/Lost%20Files%20-%20Our%20Place.mp3?dl=0"),
  createSong(title="Behind The Hill",  artist="Lost Files", url="https://dl.dropboxusercontent.com/s/877yjaidp4tpx8j/Lost%20Files%20-%20Behind%20The%20Hill.mp3?dl=0"),
  createSong(title="Part Of The Tree", artist="Lost Files", url="https://dl.dropboxusercontent.com/s/5kd69e9hks7ksui/Lost%20Files%20-%20Part%20Of%20The%20Tree.mp3?dl=0"),
  createSong(title="4 Pm",             artist="Lost Files", url="https://dl.dropboxusercontent.com/s/ugxxcuqwjut5c7m/Lost%20Files%20-%204%20Pm.mp3?dl=0"),

  // Artist - Late Night Tones
  createSong(title="Been A Long Time",      artist="Late Night Tones", url="https://dl.dropboxusercontent.com/s/nd9b9xnlmenkci8/Late%20Night%20Tones%20-%20Been%20A%20Long%20Time.mp3?dl=0"),
  createSong(title="Warm December",         artist="Late Night Tones", url="https://dl.dropboxusercontent.com/s/dz8hptrq92k72vv/Late%20Night%20Tones%20-%20Warm%20December.mp3?dl=0"),
  createSong(title="Over The Wooden Fence", artist="Late Night Tones", url="https://dl.dropboxusercontent.com/s/16i9ew3xcxsx7fq/Late%20Night%20Tones%20-%20Over%20The%20Wooden%20Fence.mp3?dl=0"),

  // Artist - Electrry
  createSong(title="Distant Village", artist="Electrry", url="https://dl.dropboxusercontent.com/s/xg6f57s4he7a9sg/Electrry%20-%20Distant%20Village.mp3?dl=0"),
  createSong(title="One Last Moment", artist="Electrry", url="https://dl.dropboxusercontent.com/s/5567wrsoxvjrr0o/Electrry%20-%20One%20Last%20Moment.mp3?dl=0"),
  createSong(title="Bonsai",          artist="Electrry", url="https://dl.dropboxusercontent.com/s/yusakwhvrlicvnv/Electrry%20-%20Bonsai.mp3?dl=0"),
  createSong(title="Night Walk",      artist="Electrry", url="https://dl.dropboxusercontent.com/s/jb9m8q63h8zhj44/Electrry%20-%20Night%20Walk.mp3?dl=0"),

  // Artist - drmycat
  createSong(title="Sound Of The Sea", artist="drmycat",              url="https://dl.dropboxusercontent.com/s/e1cqoul0l0ikpx3/drmycat%20-%20Sound%20Of%20The%20Sea.mp3?dl=0"),
  createSong(title="Marea",            artist="drmycat",              url="https://dl.dropboxusercontent.com/s/4dadf25mbmohin6/drmycat%20-%20Marea.mp3?dl=0"),
  createSong(title="Sunrise",          artist="drmycat",              url="https://dl.dropboxusercontent.com/s/yiluwu5ewiv745l/drmycat%20-%20Sunrise.mp3?dl=0"),
  createSong(title="Aurora",           artist="drmycat",              url="https://dl.dropboxusercontent.com/s/dlq8yfspd7asext/drmycat%20-%20Aurora.mp3?dl=0"),
  createSong(title="space oddity",     artist="drmycat, MyceliumBug", url="https://dl.dropboxusercontent.com/s/n1wvkfo1tolnwij/drmycat%2C%20MyceliumBug%20-%20space%20oddity.mp3?dl=0"),

  // Artist - Sleepermane
  createSong(title="Laying In Tall Grass", artist="Sleepermane", url="https://dl.dropboxusercontent.com/s/c5fbsforl1ep4m1/Sleepermane%20-%20Laying%20In%20Tall%20Grass.mp3?dl=0"),
  createSong(title="Mosaic",               artist="Sleepermane", url="https://dl.dropboxusercontent.com/s/mgehwstesyfnlt5/Sleepermane%20-%20Mosaic.mp3?dl=0"),
  createSong(title="Bamboo",               artist="Sleepermane", url="https://dl.dropboxusercontent.com/s/xxsgjud028k05z9/Sleepermane%20-%20Bamboo.mp3?dl=0"),
  createSong(title="Midnight Air",         artist="Sleepermane", url="https://dl.dropboxusercontent.com/s/1v2s12e2i7fbm4z/Sleepermane%20-%20Midnight%20Air%20-13lufs%20final.mp3?dl=0"),
  createSong(title="Momentum",             artist="Sleepermane", url="https://dl.dropboxusercontent.com/s/w5tkk03e73s6wrm/Momentum%20-%20Sleepermane.mp3?dl=0"),
  createSong(title="Orbital",              artist="Sleepermane", url="https://dl.dropboxusercontent.com/s/el9ht8wzlkdhf0f/02%20Sleepermane%20-%20Orbital.mp3?dl=0"),

  // Artist - Dagamon, Sora
  createSong(title="The Edge Of Realties", artist="Dagamon, Sora", url="https://dl.dropboxusercontent.com/s/xnn7zhcg1fq75bu/Dagamon%2C%20Sora%20-%20The%20Edge%20Of%20Realties.mp3?dl=0"),
  createSong(title="Serenity Sphere",      artist="Dagamon, Sora", url="https://dl.dropboxusercontent.com/s/du0ki42fl1oc3xr/Dagamon%2C%20Sora%20-%20Serenity%20Sphere.mp3?dl=0"),
  createSong(title="Road Of Memories",     artist="Dagamon, Sora", url="https://dl.dropboxusercontent.com/s/36ga1yoyk9qomou/Dagamon%2C%20Sora%20-%20Road%20Of%20Memories.mp3?dl=0"),

  // Artist - Smith Beats
  createSong(title="Perfect Timing",      artist="Smith Beats", url="https://dl.dropboxusercontent.com/s/hmjgjy2gg94r4vn/Smith%20Beats%20-%20Perfect%20Timing.mp3?dl=0"),
  createSong(title="Circles",             artist="Smith Beats", url="https://dl.dropboxusercontent.com/s/8b1n09w0l0o68h9/Smith%20Beats%20-%20Circles.mp3?dl=0"),
  createSong(title="A Long Journey",      artist="Smith Beats", url="https://dl.dropboxusercontent.com/s/qx4ntceu0datb2h/Smith%20Beats%20-%20A%20Long%20Journey.mp3?dl=0"),
  createSong(title="Before We Sleep",     artist="Smith Beats", url="https://dl.dropboxusercontent.com/s/f3cuda60t6migoa/Smith%20Beats%20-%20Before%20We%20Sleep.mp3?dl=0"),
  createSong(title="Home Away From Home", artist="Smith Beats", url="https://dl.dropboxusercontent.com/s/f31em8rqhjd5aio/Smith%20Beats%20-%20Home%20Away%20From%20Home.mp3?dl=0"),

  // Artist - Steve Nguyen
  createSong(title="Eclipse",    artist="Steve Nguyen, Peak Twilight", url="https://dl.dropboxusercontent.com/s/6ye5ofczdyj87cb/Steve%20Nguyen%2C%20Peak%20Twilight%20-%20Eclipse.mp3?dl=0"),
  createSong(title="Sleepwalk",  artist="Steve Nguyen, Mondo Loops",   url="https://dl.dropboxusercontent.com/s/dlw5u2c374vcint/Steve%20Nguyen%2C%20Mondo%20Loops%20-%20Sleepwalk%20%28online-audio-converter.com%29%20%281%29.mp3?dl=0"),
  createSong(title="Astral Sea", artist="Steve Nguyen",                url="https://dl.dropboxusercontent.com/s/to484b1xeyxvzbr/Steve%20Nguyen%20-%20Astral%20Sea.mp3?dl=0"),
  createSong(title="Onsen",      artist="Steve Nguyen, aekasora",      url="https://dl.dropboxusercontent.com/s/0u55reiva4vbpkh/Steve%20Nguyen%2C%20aekasora%20-%20Onsen%20%28Video%29.mp3?dl=0"),
  createSong(title="Nocturnal",  artist="Steve Nguyen, Mildred",       url="https://dl.dropboxusercontent.com/s/j3q762jkr6yjttv/Steve%20Nguyen%2C%20Mildred%20-%20Nocturnal%20%28Audio%29.mp3?dl=0"),

  // Artist - rj one
  createSong(title="nostalgia",         artist="rj one", url="https://dl.dropboxusercontent.com/s/v9ec59bau5i2vr1/rj%20one%20-%20nostalgia.mp3?dl=0"),
  createSong(title="the endless story", artist="rj one", url="https://dl.dropboxusercontent.com/s/u3tiwhgxau2z1q7/rj%20one%20-%20the%20endless%20story.mp3?dl=0"),
  createSong(title="seirei no mori",    artist="rj one", url="https://dl.dropboxusercontent.com/s/y6rln6ssv76fb2p/rj%20one%20-%20seirei%20no%20mori.mp3?dl=0"),

  // Artist - lost.mindd
  createSong(title="time slips away", artist="lost.mindd", url="https://dl.dropboxusercontent.com/s/0riv5f8mc2p1ejn/lost.mindd%20-%20time%20slips%20away.mp3?dl=0"),
  createSong(title="mixed feelings",  artist="lost.mindd", url="https://dl.dropboxusercontent.com/s/7k47cm87j7o3ovl/27.%20lost.mindd%20-%20mixed%20feelings%20%281%29.mp3?dl=0"),

  // Artist - Koalres
  createSong(title="Reverie", artist="Koalres", url="https://dl.dropboxusercontent.com/s/vyvmpq5mzjm6trx/Koalres%20-%20Reverie.mp3?dl=0"),
  createSong(title="Saudade", artist="Koalres", url="https://dl.dropboxusercontent.com/s/8zaqkszcq7dx0nw/Koalres%20-%20Saudade.mp3?dl=0"),

  // Artist - peppronibeats
  createSong(title="Koi Pond",       artist="peppronibeats", url="https://dl.dropboxusercontent.com/s/yxwazclqht7ewqx/pepperonibeats%20-%20Koi%20Pond.mp3?dl=0"),
  createSong(title="Corals",         artist="peppronibeats", url="https://dl.dropboxusercontent.com/s/wy1k76g1azdlwqd/pepperonibeats%20-%20Corals.mp3?dl=0"),
  createSong(title="It's Only Love", artist="peppronibeats", url="https://dl.dropboxusercontent.com/s/vpyjv9qju4pgoz3/pepperonibeats%20-%20It%27s%20Only%20Love.mp3?dl=0"),
  createSong(title="Walkin'",        artist="peppronibeats", url="https://dl.dropboxusercontent.com/s/yf2ol8ud3xq175y/Walkin%27%20-%20pepperonibeats.mp3?dl=0"),

  // Artist - Leap Of Faith
  createSong(title="i thought of you",  artist="Leap Of Faith ft. lost.mindd",                  url="https://dl.dropboxusercontent.com/s/u7liqfn7zymfmuc/Leap%20Of%20Faith%20-%20i%20thought%20of%20you%20ft.%20lost.mindd.mp3?dl=0"),
  createSong(title="Sunrise Boulevard", artist="Leap Of Faith ft. Project AER",                 url="https://dl.dropboxusercontent.com/s/uil6lgbbrmqcccn/Leap%20of%20Faith%20-%20Sunrise%20Boulevard%20ft.%20Project%20AER.mp3?dl=0"),
  createSong(title="4.16 AM",           artist="Leap Of Faith ft. steezy prime",                url="https://dl.dropboxusercontent.com/s/kyteyf6bh2k8x5u/Leap%20of%20Faith%20-%204.16%20AM%20ft.%20steezy%20prime.mp3?dl=0"),
  createSong(title="A New Day",         artist="Leap Of Faith & Chill Space (ft. Purrple Cat)", url="https://dl.dropboxusercontent.com/s/ongcd66yb2sv92v/%284%29%20A%20New%20Day%20%28feat%20Purrple%20Cat%29.mp3?dl=0"),

  // Artist - Slowheal
  createSong(title="Summer Memories",     artist="Slowheal",               url="https://dl.dropboxusercontent.com/s/bjqyyndeivx8olg/Slowheal%20-%20Summer%20Memories.mp3?dl=0"),
  createSong(title="golden morning",      artist="Slowheal",               url="https://dl.dropboxusercontent.com/s/0dstpoegfkc1nnu/Slowheal%20-%20golden%20morning.mp3?dl=0"),
  createSong(title="Sleepless Night",     artist="Slowheal",               url="https://dl.dropboxusercontent.com/s/x28jm3u9x5gouwm/Slowheal%20-%20Sleepless%20Night.mp3?dl=0"),
  createSong(title="Neverending Dream",   artist="Slowheal",               url="https://dl.dropboxusercontent.com/s/gx61ha59bxivn9o/Slowheal%20-%20Neverending%20Dream.mp3?dl=0"),
  createSong(title="Everything, In Time", artist="Slowheal, eugenio izzi", url="https://dl.dropboxusercontent.com/s/ld3o2g7ffp2jsni/Everything%2C%20In%20Time%20-%20Slowheal%2C%20eugenio%20izzi%20.mp3?dl=0"),

  // Artist - Lemeria
  createSong(title="Dawn",      artist="Lemeria",              url="https://dl.dropboxusercontent.com/s/hg40ien8g2gnz8q/Lemeria%20-%20Dawn.mp3?dl=0"),
  createSong(title="Dreamland", artist="Lemeria (feat. ALLP)", url="https://dl.dropboxusercontent.com/s/rp3r92y0c1f6jwa/Lemeria%20-%20Dreamland%20%28feat.%20ALLP%29.mp3?dl=0"),

  // Artist - Lenny Loops
  createSong(title="Higher",    artist="Lenny Loops", url="https://dl.dropboxusercontent.com/s/mocmdsi1a7hja21/Lenny%20Loops%20-%20Higher.mp3?dl=0"),
  createSong(title="Wonder",    artist="Lenny Loops", url="https://dl.dropboxusercontent.com/s/czyo3i4wp24yxgv/Lenny%20Loops%20-%20Wonder.mp3?dl=0"),
  createSong(title="Blue Hour", artist="Lenny Loops", url="https://dl.dropboxusercontent.com/s/3die54cnurgvg1q/Lenny%20Loops%20-%20Blue%20Hour.mp3?dl=0"),

  // Artist - CaliCronk
  createSong(title="Stuck Inside", artist="CaliCronk", url="https://dl.dropboxusercontent.com/s/8ddp3qhz5ema5oc/CaliCronk%20-%20Stuck%20Inside%20-%20Lifted%20LoFi%20Records%20%281%29.mp3?dl=0"),
  createSong(title="Insomnia",     artist="CaliCronk", url="https://dl.dropboxusercontent.com/s/vm9vs5zyuho97y5/CaliCronk%20-%20Insomnia.mp3?dl=0"),

  // Artist - Enoki
  createSong(title="For Tonight", artist="Enoki", url="https://dl.dropboxusercontent.com/s/yrwxmfzl3o4nwhc/Enoki%20-%20For%20Tonight.mp3?dl=0"),
  createSong(title="Siesta",      artist="Enoki", url="https://dl.dropboxusercontent.com/s/5wrjqj8cnr49b63/Enoki%20-%20Siesta.mp3?dl=0"),
  createSong(title="Safe Lines",  artist="Enoki", url="https://dl.dropboxusercontent.com/s/eftgb7xoptbrqfm/Enoki%20-%20Safe%20Lines.mp3?dl=0"),
  createSong(title="Matcha",      artist="Enoki", url="https://dl.dropboxusercontent.com/s/oqkmwiybl32jfa7/Enoki%20-%20Matcha.mp3?dl=0"),

  // Artist - Strong.AL&
  createSong(title="Sunny Memories",    artist="Strong.AL&", url="https://dl.dropboxusercontent.com/s/ibi54t44zn8ubxk/Strong.AL%26%20-%20Sunny%20Memories.mp3?dl=0"),
  createSong(title="Beyond The Clouds", artist="Strong.AL&", url="https://dl.dropboxusercontent.com/s/93uvajptiy3xzyy/Strong.AL%26%20-%20Beyond%20The%20Clouds.mp3?dl=0"),

  // Artist - yt1s.com
  createSong(title="Breeze",             artist="yt1s.com", url="https://dl.dropboxusercontent.com/s/jq4bdl8p681wszl/yt1s.com%20-%20Breeze.mp3?dl=0"),
  createSong(title="Cherry Blossoms",    artist="yt1s.com", url="https://dl.dropboxusercontent.com/s/9u74zw96ar5jmqu/yt1s.com%20-%20Cherry%20Blossoms.mp3?dl=0"),
  createSong(title="Staring at the Sea", artist="yt1s.com", url="https://dl.dropboxusercontent.com/s/monw1ona0cwrrfy/yt1s.com%20-%20Staring%20at%20the%20Sea.mp3?dl=0"),
  createSong(title="Equinox",            artist="yt1s.com", url="https://dl.dropboxusercontent.com/s/jqfmkal94ql164u/yt1s.com%20-%20Equinox.mp3?dl=0"),

  // Artist - Mike Beating
  createSong(title="Moonlight", artist="Mike Beating", url="https://dl.dropboxusercontent.com/s/1l8xkh84af60ahq/Mike%20Beating%20-%20Moonlight.mp3?dl=0"),
  createSong(title="Lullaby",   artist="Mike Beating", url="https://dl.dropboxusercontent.com/s/qf9hf71h2wich3y/Mike%20Beating%20-%20Lullaby.mp3?dl=0"),

  // Artist - Krynoze
  createSong(title="Always By My Side", artist="Krynoze",            url="https://dl.dropboxusercontent.com/s/75ex3ctz4vsgnci/Krynoze%20-%20Always%20By%20My%20Side.mp3?dl=0"),
  createSong(title="Emotions",          artist="Krynoze x Slowheal", url="https://dl.dropboxusercontent.com/s/optz90n1n6j8un2/Krynoze%20x%20Slowheal%20-%20Emotions.mp3?dl=0"),
  createSong(title="Placid",            artist="Krynoze",            url="https://dl.dropboxusercontent.com/s/ngxuriuno3t5wul/Krynoze%20-%20Placid.mp3?dl=0"),

  // Artist - Gerardo Millán
  createSong(title="Pathfinder",    artist="Gerardo Millán",         url="https://dl.dropboxusercontent.com/s/z8cr4q7lc16qn6p/Gerardo%20Mill%C3%A1n%20-%20Pathfinder.mp3?dl=0"),
  createSong(title="Timeless",      artist="Gerardo Millán",         url="https://dl.dropboxusercontent.com/s/56ysz2hfkkg4rny/Gerardo%20Mill%C3%A1n%20-%20Timeless.mp3?dl=0"),
  createSong(title="wherever i go", artist="gerardo millán + enoch", url="https://dl.dropboxusercontent.com/s/yx3m5krsx51xk1d/gerardo%20millan%20%2B%20enoch%20-%20wherever%20i%20go%20%281%29.mp3?dl=0"),
  createSong(title="a long trip",   artist="Gerardo Millán",         url="https://dl.dropboxusercontent.com/s/dzwd6p0i4xpyltz/Gerardo%20Mill%C3%A1n%20-%20a%20long%20trip%20LLR.mp3?dl=0"),

  // Artist - Chilliax
  createSong(title="Beyond",   artist="Chilliax", url="https://dl.dropboxusercontent.com/s/h7ptgueu6q19w8r/Chilliax%20-%20Beyond.mp3?dl=0"),
  createSong(title="Calm",     artist="Chilliax", url="https://dl.dropboxusercontent.com/s/0p8julho0bvill0/Chilliax%20-%20Calm.mp3?dl=0"),
  createSong(title="Blue Sky", artist="Chilliax", url="https://dl.dropboxusercontent.com/s/k63v3bu0zejeame/Chilliax%20x%20Gerardo%20Mill%C3%A1n%20-%20Blue%20Sky.mp3?dl=0"),
  createSong(title="Horizon",  artist="Chilliax", url="https://dl.dropboxusercontent.com/s/8o97l08xsz6il6g/Chilliax%20-%20Horizon.mp3?dl=0"),

  // Artist - sad.exe
  createSong(title="let's chill", artist="sad.exe", url="https://dl.dropboxusercontent.com/s/n9p4mosvmwye002/let%27s%20chill%20-%20sad.exe.mp3?dl=0"),
  createSong(title="miss u",      artist="sad.exe", url="https://dl.dropboxusercontent.com/s/4viskgqz3djj5lb/miss%20u%20-%20sad.exe.mp3?dl=0"),
  createSong(title="sleeping in", artist="sad.exe", url="https://dl.dropboxusercontent.com/s/bugg2l8qdtbm9pq/sleeping%20in%20-%20sad.exe.mp3?dl=0"),
  createSong(title="submarine",   artist="sad.exe", url="https://dl.dropboxusercontent.com/s/yrad5a3n9fpmrgi/submarine%20-%20sad.exe.mp3?dl=0"),

  // Artist - arya
  createSong(title="you matter",      artist="arya",        url="https://dl.dropboxusercontent.com/s/1w97mxhj21pdazx/you%20matter-%20arya.mp3?dl=0"),
  createSong(title="daydream",        artist="arya",        url="https://dl.dropboxusercontent.com/s/9f694vbq2zor6t8/arya%20-%20daydream.mp3?dl=0"),
  createSong(title="among the stars", artist="arya",        url="https://dl.dropboxusercontent.com/s/3bykoob8z86dn0m/among%20the%20stars-%20arya.mp3?dl=0"),
  createSong(title="lonely night",    artist="Arya, Brxvs", url="https://dl.dropboxusercontent.com/s/oyn0z66gdptztq7/Arya%2C%20Brxvs%20-%20lonely%20night%20%281%29.mp3?dl=0"),
  createSong(title="breathe",         artist="arya",        url="https://dl.dropboxusercontent.com/s/2snj7y67gtqziej/breathe-%20arya.mp3?dl=0"),

  // Artist - Formant
  createSong(title="Regret", artist="Formant", url="https://dl.dropboxusercontent.com/s/9241ivx114ctste/Formant%20-%20Regret.mp3?dl=0"),
  createSong(title="Touch",  artist="Formant", url="https://dl.dropboxusercontent.com/s/ylg9alqhmuq6scb/Formant%20-%20Touch.mp3?dl=0"),
  createSong(title="Flow",   artist="Formant", url="https://dl.dropboxusercontent.com/s/ed9qaobyz8lmdhx/Formant%20-%20Flow.mp3?dl=0"),
  createSong(title="Thread", artist="Formant", url="https://dl.dropboxusercontent.com/s/s31vjn3v1rjbrdn/Formant%20-%20Thread.mp3?dl=0"),

  // Artist - Billy Wuot
  createSong(title="rainy sunday", artist="Billy Wuot",               url="https://dl.dropboxusercontent.com/s/iij5pqnc47xnii2/Billy%20Wuot%20-%20rainy%20sunday%20-%20Lifted%20LoFi%20Records.mp3?dl=0"),
  createSong(title="so far away.", artist="Billy Wuot x Chillmeleon", url="https://dl.dropboxusercontent.com/s/zq1m3t4lzzs83ut/Billy%20Wuot%20x%20Chillmeleon%20-%20so%20far%20away.%20-%20Lifted%20LoFi%20Records%20%281%29.mp3?dl=0"),

  // Artist - Tranquil Teddy
  createSong(title="Purpose", artist="Tranquil Teddy x Lo-Fi Luke", url="https://dl.dropboxusercontent.com/s/3a8sg3tl7hm8pn6/Tranquil%20Teddy%20x%20Lo-Fi%20Luke%20-%20Purpose.mp3?dl=0"),
  createSong(title="Stella",  artist="Tranquil Teddy",              url="https://dl.dropboxusercontent.com/s/ur3axsv18llcqrs/Tranquil%20Teddy%20-%20Stella%20%281%29.mp3?dl=0"),
  createSong(title="Nothing", artist="Tranquil Teddy",              url="https://dl.dropboxusercontent.com/s/om0au4lgee88u8k/Tranquil%20Teddy%20-%20Nothing.mp3?dl=0"),
  createSong(title="Balance", artist="Tranquil Teddy",              url="https://dl.dropboxusercontent.com/s/cmr6n8644moe39p/Tranquil%20Teddy%20-%20Balance.mp3?dl=0"),

  // Artist - sftspkn
  createSong(title="woodland nights", artist="sftspkn", url="https://dl.dropboxusercontent.com/s/mvnmmux2nu5f04f/sftspkn%20-%20woodland%20nights.mp3?dl=0"),
  createSong(title="campfire tales",  artist="sftspkn", url="https://dl.dropboxusercontent.com/s/4jsv2axzchauutw/sftspkn%20-%20campfire%20tales.mp3?dl=0"),

  // Artist - cxlt
  createSong(title="and the stars will fade", artist="cxlt", url="https://dl.dropboxusercontent.com/s/4wf4rf0iowokvko/1.%20cxlt%20-%20and%20the%20stars%20will%20fade.mp3?dl=0"),
  createSong(title="Far Away",                artist="cxlt", url="https://dl.dropboxusercontent.com/s/n9vwho3qekfmuwt/4.%20cxlt.%20-%20Far%20Away%20.mp3?dl=0"),

  // Artist - Oddability
  createSong(title="Giardinetti",  artist="Oddability",                url="https://dl.dropboxusercontent.com/s/ldit1vegb5mmae4/Oddability%20-%20Giardinetti.mp3?dl=0"),
  createSong(title="Moon Flowers", artist="Oddability, beat fanatics", url="https://dl.dropboxusercontent.com/s/6ivap1ca54qvs4i/Moon%20Flowers%20-%20Oddability%2C%20beat%20fanatics.mp3?dl=0"),

  // Artist - Simber
  createSong(title="Trekking",  artist="Simber", url="https://dl.dropboxusercontent.com/s/aoybqx5rbj32div/Simber%20-%20Trekking.mp3?dl=0"),
  createSong(title="Enjoyable", artist="Simber", url="https://dl.dropboxusercontent.com/s/6rb2exdny9ycm16/Simber%20-%20Enjoyable.mp3?dl=0"),

  // Artist - Sheath
  createSong(title="View From The Hill", artist="Sheath & KASE", url="https://dl.dropboxusercontent.com/s/jmn2eidj0hesp20/View%20From%20The%20Hill%20-%20Sheath%20%26%20KASE.mp3?dl=0"),
  createSong(title="Soft Promises",      artist="Sheath",        url="https://dl.dropboxusercontent.com/s/rmigqhmpl8u07x7/Sheath%20-%20Soft%20Promises.mp3?dl=0"),
  createSong(title="Forgiven Sorrow",    artist="Sheath",        url="https://dl.dropboxusercontent.com/s/dxlybymzp6nxhle/Sheath%20-%20Forgiven%20Sorrow.mp3?dl=0"),

  // Artist - Brxvs
  createSong(title="Wonderland",    artist="Brxvs", url="https://dl.dropboxusercontent.com/s/mf04aqt2ppldw6m/Brxvs%20-%20Wonderland%20%28master%29.mp3?dl=0"),
  createSong(title="November Rain", artist="Brxvs", url="https://dl.dropboxusercontent.com/s/6deh6m6cm1q986o/Brxvs%20-%20November%20Rain%20-%20Lifted%20LoFi%20Records.mp3?dl=0"),

  // Artist - Lo-Fi Luke
  createSong(title="B Positive", artist="Lo-Fi Luke & Tranquil Teddy", url="https://dl.dropboxusercontent.com/s/k6eia9u6b3lsa86/Lo-Fi%20Luke%20_%20Tranquil%20Teddy%20-%20B%20Positive.mp3?dl=0"),
  createSong(title="Odyssey",    artist="Lo-Fi Luke & Tranquil Teddy", url="https://dl.dropboxusercontent.com/s/xqlrje9fyparulq/Lo-Fi%20Luke%20_%20Tranquil%20Teddy%20-%20Odyssey.mp3?dl=0"),
  createSong(title="Post M",     artist="Lo-Fi Luke & Goson",          url="https://dl.dropboxusercontent.com/s/uicl0fp432cnzn5/Lo-Fi%20Luke%20%20Goson%20-%20Post%20M.mp3?dl=0"),

  // Artist - Dpsht
  createSong(title="Love Is Being Stupid Together", artist="Dpsht", url="https://dl.dropboxusercontent.com/s/lr7yzbulqhv0rdt/Dpsht%20-%20Love%20Is%20Being%20Stupid%20Together.mp3?dl=0"),
  createSong(title="Wellspring",                    artist="Dpsht", url="https://dl.dropboxusercontent.com/s/5qzrylyhwk4e7du/Dpsht%20-%20Wellspring.mp3?dl=0"),
  createSong(title="Silhouettes",                   artist="Dpsht", url="https://dl.dropboxusercontent.com/s/calisn9jl4yy9ph/Silhouettes%20-%20Dpsht.mp3?dl=0"),

  // Artist - Some Place Else
  createSong(title="Sentimental",                artist="Some Place Else", url="https://dl.dropboxusercontent.com/s/8hyotg4c4gt1zdd/Some%20Place%20Else%20-%20Sentimental.mp3?dl=0"),
  createSong(title="I saw your face in a dream", artist="Some Place Else", url="https://dl.dropboxusercontent.com/s/h9s45wmmvhrpj5r/some%20place%20else%20-%20I%20saw%20your%20face%20in%20a%20dream%20%281%29.mp3?dl=0"),
  createSong(title="A Better Place",             artist="Some Place Else", url="https://dl.dropboxusercontent.com/s/q8mujz03ymdvn7x/A%20Better%20Place%20-%20Some%20Place%20Else.mp3?dl=0"),
  
  // Artist - lazyboyloops
  createSong(title="Seasons",        artist="lazyboyloops", url="https://dl.dropboxusercontent.com/s/0dx9zydn6xrdxdf/lazyboyloops%20-%20Seasons%20%281%29.mp3?dl=0"),
  createSong(title="mountain views", artist="lazyboyloops", url="https://dl.dropboxusercontent.com/s/d1w2jdpyybcqygk/lazyboyloops%20-%20mountain%20views.mp3?dl=0"),

  // Artist - devon rea
  createSong(title="rocket science", artist="devon rea",             url="https://dl.dropboxusercontent.com/s/dmp3qv4zelh8tjn/10.%20devon%20rea%20-%20rocket%20science.mp3?dl=0"),
  createSong(title="Patience",       artist="devon rea x snoozegod", url="https://dl.dropboxusercontent.com/s/w0eeu41zwz6k82e/Devon%20rea%20x%20snoozegod%20-%20Patience.mp3?dl=0"),

  // Artist - ENRA
  createSong(title="Building Castles",      artist="ENRA",           url="https://dl.dropboxusercontent.com/s/8ptf31l8z577oy2/Enra%20-%20Building%20Castles.mp3?dl=0"),
  createSong(title="In Bloom",              artist="ENRA",           url="https://dl.dropboxusercontent.com/s/lq62t9lps5shd3k/Enra%20-%20In%20Bloom.mp3?dl=0"),
  createSong(title="Lovespell",             artist="ENRA",           url="https://dl.dropboxusercontent.com/s/36cd3nkhh50waua/ENRA%20-%20Lovespell%20%281%29.mp3?dl=0"),
  createSong(title="Once There",            artist="ENRA",           url="https://dl.dropboxusercontent.com//s/mppw26g2wwpdz2c/Enra%20-%20Once%20There.mp3?dl=0"),
  createSong(title="Watercolors",           artist="ENRA",           url="https://dl.dropboxusercontent.com/s/8cbl1bsbqlj5gs3/Enra%20-%20Watercolors.mp3?dl=0"),
  createSong(title="True To You",           artist="ENRA",           url="https://dl.dropboxusercontent.com/s/k402buwtujgczqr/True%20To%20You%20-%20ENRA.mp3?dl=0"),
  createSong(title="Maybe I'll Never Know", artist="ENRA, dr. niar", url="https://dl.dropboxusercontent.com/s/if6pr9ujtx7xxg7/Maybe%20I%27ll%20Never%20Know%20-%20ENRA%2C%20dr.%20niar.mp3?dl=0"),

  // Artist - Alazko
  createSong(title="Blossom", artist="Alazko", url="https://dl.dropboxusercontent.com/s/y22n875fvjvzax8/Alazko%20-%20Blossom.mp3?dl=0"),
  createSong(title="Unsaid",  artist="Alazko", url="https://dl.dropboxusercontent.com/s/9q6klckixpyc4nn/Alazko%20-%20Unsaid.mp3?dl=0"),
  
  // Artist - Elsei
  createSong(title="Dreamer Radio", artist="Elsei", url="https://dl.dropboxusercontent.com/s/ru7gps774eqwfzh/Elsei%20-%20Dreamer%20Radio%20%282%29.mp3?dl=0"),
  createSong(title="Secret Garden", artist="Elsei", url="https://dl.dropboxusercontent.com/s/s2ew4ikgqwz9mfc/Elsei%20-%20Secret%20Garden.mp3?dl=0"),

  // Artist - hushfall
  createSong(title="Infinities", artist="hushfall & Koalres", url="https://dl.dropboxusercontent.com/s/slepaaknr0xawc4/hushfall%20%26%20Koalres%20-%20Infinities.mp3?dl=0"),
  createSong(title="Intricate",  artist="hushfall",           url="https://dl.dropboxusercontent.com/s/ee8s252dh1mxjm5/hushfall%20-%20Intricate.mp3?dl=0"),

  // Artist - Jasom Mike
  createSong(title="Coming Home",  artist="Jasom Mike", url="https://dl.dropboxusercontent.com/s/2zyuzcvtexd6swv/Jasom%20Mike%20-%20Coming%20Home.mp3?dl=0"),
  createSong(title="Lake Walking", artist="Jasom Mike", url="https://dl.dropboxusercontent.com/s/mw4nwsuygw9s3rt/Jasom%20Mike%20-%20Lake%20Walking.mp3?dl=0"),

  // Artist - inearwave
  createSong(title="Calm",             artist="Linearwave", url="https://dl.dropboxusercontent.com/s/raqav1o1175qscu/Linearwave%20-%20Calm.mp3?dl=0"),
  createSong(title="ifeelrelieved2",   artist="Linearwave", url="https://dl.dropboxusercontent.com/s/wvvi4nturi978zx/Linearwave%20-%20ifeelrelieved2.mp3?dl=0"),
  createSong(title="lost connections", artist="Linearwave", url="https://dl.dropboxusercontent.com/s/prh4et9ohdij5aj/Linearwave%20-%20lost%20connections.mp3?dl=0"),

  // Artist - MARBRE
  createSong(title="Fine With Me",      artist="MARBRE", url="https://dl.dropboxusercontent.com/s/5zxj1bvkrcauybo/MARBRE%20-%20Fine%20With%20Me.mp3?dl=0"),
  createSong(title="I Miss You",        artist="MARBRE", url="https://dl.dropboxusercontent.com/s/r05mketryxlg7o8/MARBRE%20-%20I%20Miss%20You.mp3?dl=0"),
  createSong(title="See You On Friday", artist="MARBRE", url="https://dl.dropboxusercontent.com/s/vb6jdmcks0i55bl/MARBRE%20-%20See%20You%20On%20Friday.mp3?dl=0"),

  // Artist - moat
  createSong(title="Isekai", artist="moat", url="https://dl.dropboxusercontent.com/s/xtnrhx34kuag16m/moat%20-%20Isekai.mp3?dl=0"),
  createSong(title="Walles", artist="moat", url="https://dl.dropboxusercontent.com/s/nn3buzcz8rv59hq/moat%20-%20Walles.mp3?dl=0"),

  // Artist - MyceliumBug
  createSong(title="Street Lights", artist="MyceliumBug", url="https://dl.dropboxusercontent.com/s/fzyq7vj5bwkmcom/MyceliumBug%20-%20Street%20Lights.mp3?dl=0"),
  createSong(title="Waiting For",   artist="MyceliumBug", url="https://dl.dropboxusercontent.com/s/a51oi8hhh4ph8w7/MyceliumBug%20-%20Waiting%20For.mp3?dl=0"),
  createSong(title="Your Eyes",     artist="MyceliumBug", url="https://dl.dropboxusercontent.com/s/bvrqlfjjdsly1xt/MyceliumBug%20-%20Your%20Eyes.mp3?dl=0"),

  // Artist - Natasha Ghosh
  createSong(title="Holiday",       artist="Natasha Ghosh",                                url="https://dl.dropboxusercontent.com/s/0hjv794fuw9fnsi/Natasha%20Ghosh%20-%20Holiday.mp3?dl=0"),
  createSong(title="Tumble Master", artist="Natasha Ghosh, Pointy Features, Fourth Dogma", url="https://dl.dropboxusercontent.com/s/dva229ohk3jpofu/Natasha%20Ghosh%2C%20Pointy%20Features%2C%20Fourth%20Dogma%20-%20Tumble_Master_44.1kHz%20%282%29%20%281%29.mp3?dl=0"),

  // Artist - Ouflen
  createSong(title="After You",      artist="Ouflen", url="https://dl.dropboxusercontent.com/s/fg0nyx051s6vdm7/Ouflen%20-%20After%20You.mp3?dl=0"),
  createSong(title="New Sensations", artist="Ouflen", url="https://dl.dropboxusercontent.com/s/udqqogxwp8b9hs3/Ouflen%20-%20New%20Sensations.mp3?dl=0"),

  // Artist - Jon Kyoto
  createSong(title="Juishy",        artist="Jon Kyoto", url="https://dl.dropboxusercontent.com/s/3pra2d3oypyg979/Copia%20di%20Jon%20Kyoto%20-%20Juishy.mp3?dl=0"),
  createSong(title="Appa's Flight", artist="Jon Kyoto", url="https://dl.dropboxusercontent.com/s/0d2a8an8j8edfg9/Copia%20di%20Jon%20Kyoto%20-%20Appa%27s%20Flight.mp3?dl=0"),

  // Artist - A.T.P.
  createSong(title="Distant Memories",          artist="A.T.P.", url="https://dl.dropboxusercontent.com/s/hxm99h1qdzep9vw/01%20ATP%20-%20Distant%20Memories.mp3?dl=0"),
  createSong(title="Life Moments",              artist="A.T.P.", url="https://dl.dropboxusercontent.com/s/aif6790iaynex7a/03%20ATP%20-%20Life%20Moments.mp3?dl=0"),
  createSong(title="Walking Through The Stars", artist="A.T.P.", url="https://dl.dropboxusercontent.com/s/8cwrz9dzi0geo8t/Walking%20Through%20The%20Stars%20-%20A.T.P..mp3?dl=0"),

  // Artist - Goson
  createSong(title="mellow",    artist="Goson",                 url="https://dl.dropboxusercontent.com/s/mn98gzl7wi9ze3p/17.%20goson%20-%20mellow.mp3?dl=0"),
  createSong(title="Crisp Air", artist="Goson x Natasha Ghosh", url="https://dl.dropboxusercontent.com/s/ushr78y8big2sh4/Goson%20x%20Natasha%20Ghosh%20-%20Crisp%20Air.mp3?dl=0"),

  // Artist - Neele Harder
  createSong(title="Late Afternoon Clouds",      artist="Neele Harder", url="https://dl.dropboxusercontent.com/s/d99uy2xmpd603yp/Neele%20Harder%20-%20Late%20Afternoon%20Clouds%20%28master%29.mp3?dl=0"),
  createSong(title="this is just the beginning", artist="Neele Harder", url="https://dl.dropboxusercontent.com/s/b4mg2d5vmatg613/this%20is%20just%20the%20beginning%20%20-%20Neele%20Harder%20MASTER.mp3?dl=0"),

  // Generic Mood Songs
  // Generic Mood - Sleepy
  createSong(title="sleepy_1",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_1.mp3"),
  createSong(title="sleepy_2",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_2.mp3"),
  createSong(title="sleepy_3",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_3.mp3"),
  createSong(title="sleepy_4",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_4.mp3"),
  createSong(title="sleepy_5",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_5.mp3"),
  createSong(title="sleepy_6",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_6.mp3"),
  createSong(title="sleepy_7",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_7.mp3"),
  createSong(title="sleepy_8",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_8.mp3"),
  createSong(title="sleepy_9",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_9.mp3"),
  createSong(title="sleepy_10", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_10.mp3"),
  createSong(title="sleepy_11", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_11.mp3"),
  createSong(title="sleepy_12", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_12.mp3"),
  createSong(title="sleepy_13", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_13.mp3"),
  createSong(title="sleepy_14", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_14.mp3"),
  createSong(title="sleepy_15", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_15.mp3"),
  createSong(title="sleepy_16", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_16.mp3"),
  createSong(title="sleepy_17", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_17.mp3"),
  createSong(title="sleepy_18", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_18.mp3"),
  createSong(title="sleepy_19", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_19.mp3"),

  // Generic Mood - Chill
  createSong(title="chill_1",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_1.mp3"),
  createSong(title="chill_2",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_2.mp3"),
  createSong(title="chill_3",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_3.mp3"),
  createSong(title="chill_4",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_4.mp3"),
  createSong(title="chill_5",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_5.mp3"),
  createSong(title="chill_6",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_6.mp3"),
  createSong(title="chill_7",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_7.mp3"),
  createSong(title="chill_8",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_8.mp3"),
  createSong(title="chill_9",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_9.mp3"),
  createSong(title="chill_10", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_10.mp3"),
  createSong(title="chill_11", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_11.mp3"),
  createSong(title="chill_12", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_12.mp3"),
  createSong(title="chill_13", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_13.mp3"),
  createSong(title="chill_14", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_14.mp3"),
  createSong(title="chill_15", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_15.mp3"),
  createSong(title="chill_16", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_16.mp3"),
  createSong(title="chill_17", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_17.mp3"),
  createSong(title="chill_18", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_18.mp3"),
  createSong(title="chill_19", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_19.mp3"),
  createSong(title="chill_20", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_20.mp3"),
  createSong(title="chill_21", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_21.mp3"),
  createSong(title="chill_22", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_22.mp3"),
  createSong(title="chill_23", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_23.mp3"),
  createSong(title="chill_24", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_24.mp3"),

  // Generic Mood - Jazzy
  createSong(title="jazzy_1",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_1.mp3"),
  createSong(title="jazzy_2",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_2.mp3"),
  createSong(title="jazzy_3",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_3.mp3"),
  createSong(title="jazzy_4",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_4.mp3"),
  createSong(title="jazzy_5",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_5.mp3"),
  createSong(title="jazzy_6",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_6.mp3"),
  createSong(title="jazzy_7",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_7.mp3"),
  createSong(title="jazzy_8",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_8.mp3"),
  createSong(title="jazzy_9",  artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_9.mp3"),
  createSong(title="jazzy_10", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_10.mp3"),
  createSong(title="jazzy_11", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_11.mp3"),
  createSong(title="jazzy_12", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_12.mp3"),
  createSong(title="jazzy_13", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_13.mp3"),
  createSong(title="jazzy_14", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_14.mp3"),
  createSong(title="jazzy_15", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_15.mp3"),
  createSong(title="jazzy_16", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_16.mp3"),
  createSong(title="jazzy_17", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_17.mp3"),
  createSong(title="jazzy_18", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_18.mp3"),
  createSong(title="jazzy_19", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_19.mp3"),
  createSong(title="jazzy_20", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_20.mp3"),
  createSong(title="jazzy_21", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_21.mp3"),
  createSong(title="jazzy_22", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_22.mp3"),
  createSong(title="jazzy_23", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_23.mp3"),
  createSong(title="jazzy_24", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_24.mp3"),
  createSong(title="jazzy_25", artist="", url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_25.mp3"),

  // Generic Mood - Jazzy project
  createSong(title="Jazzy project 7", artist="", url="https://dl.dropboxusercontent.com/s/xbwilu10xffkxmq/Jazzy%20project%207.mp3?dl=0"),
  createSong(title="Jazzy project 2", artist="", url="https://dl.dropboxusercontent.com/s/xbnswhsv5d5rsdp/Jazzy%20project%202%20%281%29.mp3?dl=0"),
  createSong(title="Jazzy project 4", artist="", url="https://dl.dropboxusercontent.com/s/41diboemt3wigc2/Jazzy%20project%204.mp3?dl=0"),
  createSong(title="Jazzy project 5", artist="", url="https://dl.dropboxusercontent.com/s/3s7ydxr06o0t4y0/Jazzy%20project%205.mp3?dl=0"),

]; // .map(song => song.url)

/**
 * Creates a song object
 * @param {string} title
 * @param {string} artist
 * @param {string} url
 * @constructor
 */
function createSong(title, artist, url) {
  return {
    meta: {
      title,
      artist
    },
    url
  };
}
