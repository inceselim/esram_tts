import logo from './logo.svg';
import './App.css';
import { useSpeech, useVoices } from "react-text-to-speech";
import { useState } from 'react';

function App() {
  const { languages, voices } = useVoices();
  const [lang, setLang] = useState("");
  const [voiceURI, setVoiceURI] = useState("");

  const [text, setText] = useState(`Pırıl pırıl, soğuk bir nisan günüydü; saatler on üçü vuruyordu. Dondurucu rüzgârdan korunmak için çene- sini göğsüne gömmüş olan Winston Smith, bir toz bur- gacının da kendisiyle birlikte  içeri dalmasını önleyecek kadar hızlı olmasa da, Zafer Konutları'nın  cam kapıla- rından çabucak içeri  süzüldü.
Binanın girişi, kaynatılmış lahana ve eskimiş keçe kokuyordu. Hemen karşıki duvara, içerisi için epeyce büyük  sayılabilecek, renkli  bir poster  asılmıştı. Posterde, bir metreden geniş, kocaman  bir  yüz görülüyordu:  kırk beş yaşlarında,  kalın siyah bıyıklı,   sert   bakışlı,   yakışıklı bir adamın yüzü. Winston merdivene yöneldi. Asansörü denemeye gerek yoktu.  En iyi dönemlerde  bile pek en- der çalışırdı; kaldı ki, son günlerde gündüz saatlerinde elektrik kesintisi uygulanıyordu. Nefret Haftası'nın ha- zırlıkları   kapsamında   alınan   tutumluluk   önlemlerinin bir parçasıydı bu. Daire yedinci kattaydı; otuz dokuz ya- şında olan ve sağ ayak bileğinin üzerinde  iri bir çıban bulunan Winston, merdiveni ikide bir durup  dinlenerek ağır ağır çıkıyordu. Her  katta, asansörün tam  karşısına asılmış olan posterdeki kocaman yüz duvardan ona bakı- yordu. Resim öyle yapılmıştı ki, gözler her davranışınızı izliyordu sanki. Posterin altında, BÜYÜK BİRADER'İN

GÖZ Ü ÜSTÜNDE yazıyordu.
İçeride, inceden bir ses, pik demir üretimiyle ilgili olduğu anlaşılan birtakım rakamlar okuyordu.  Ses, sağ- daki duvarın bir  bölümünü  kaplayan ve donuk bir ayna- yı andıran dikdörtgen bir madeni levhadan geliyordu. Winston düğmelerden birini çevirince  ses kısılır gibi oldu, ama sözcükler  hâlâ seçilebiliyordu. Aygıt (tele- ekran deniyordu) hafifçe karartılabiliyorsa da, tümüyle kapatılamıyordu. Winston pencereye ilerledi; ufak tefek, kavruk bir adamdı, ama Parti üniforması mavi tulumun içinde çelimsizliği pek o kadar belli olmuyordu. Saçının rengi çok açık, yüzü pespembeydi, teni kötü sabun kul- lanmaktan, kör jiletlerle tıraş olmaktan ve kısa bir süre önce sona eren kışın soğuğundan hışır hışır olmuştu.
Dışarının soğuğu, kapalı   pencereden   bakıldığında bile belli oluyordu.  Aşağıda, sokakta rüzgâr, tozları ve yırtık kâğıt parçalarını  burgaç gibi döndürüyordu;  güne- şin parlaklığına ve göğün koyu mavisine  karşın, dört  bir yana asılmış posterler dışında her şey renksiz gibiydi. Nereye  baksanız,  siyah bıyıklı surat  karşınızdaydı.   Biri de    hemen	karşıki evin ön cephesindeydi. BÜYÜK BİRADER'İN	GÖZÜ   ÜSTÜNDE  yazan	posterdeki kapkara  gözler Winston'ın  gözlerine dikilmişti. Sokakta, bir köşesi yırtılmış başka bir poster  rüzgârla inip kalktık- ça, altından İNGSOS sözcüğü bir görünüp bir yok olu- yordu. Uzaklarda bir helikopter damların  arasından al- çaldı, kocaman  masmavi bir sinek gibi   bir   an   havada asılı kaldı, sonra bir eğri çizerek ok gibi ileri atıldı. Pen- cerelerden insanların evlerini gözetleyen  polis devriye- siydi bu. Ne ki, devriyeler önemli sayılmazdı. Bir tek Düşünce Polisi önemliydi.
Winston'ın arkasındaki tele-ekrandan gelen ses hâlâ pik demir üretimi ve Dokuzuncu Üç Yıllık Plan hedefle- rinin aşılmasıyla ilgili bir şeyler zırvalayıp duruyordu.


Tele-ekran aynı anda hem alıcı hem de verici işlevi görü- yordu.   Fısıltıyla konuşmadığı   sürece  Winston'ın  çıkardı- ğı her ses tele-ekran tarafından alınıyordu; dahası, made- ni levhanın görüş alanında kaldığı sürece  Winston işitil- mekle kalmıyor, görülebiliyordu da. Hiç  kuşkusuz, ne zaman izlendiğinizi anlamanız olanaksızdı. Düşünce Polisi'nin, kime ne zaman ve hangi sistemle bağlandığını kestirmek çok zordu.  Herkesi her an izliyor da olabilir- lerdi. Ama size istedikleri zaman bağlanabildikleri açıktı. Çıkardığınız he r sesin duyulduğunu, karanlıkta olmadı- ğınız sürece her hareketinizin gözetlendiğini varsayarak yaşamak zorundaydınız; zorunda olmak ne söz, artık iç- güdüye dönüşmüş bir alışkanlıkla öyle yaşıyordunuz.
Winston sırtını tele-ekrana verdi. Gerçi, çok iyi bil- diği gibi, bir sırt  bile bir şeyleri   ele verebilirdi, ama yine de böylesi daha güvenliydi. Winston'ın çalıştığı Gerçek Bakanlığı, bir kilometre ötede, kirli manzaranın üzerinde koskocaman ve bembeyaz yükseliyordu. Burası, diye dü- şündü belli belirsiz bir hoşnutsuzlukla, burası Londra'ydı, Okyanusya'nın  üçüncü  en kalabalık eyaleti Havaşeridi Bir'in ana kenti. Bu kent eskiden de az çok böyle miydi? Çocukluğunun Londra'sını anımsayabilmek  için   belleği- ni zorladı. Yanları ahşap çatkılarla desteklenmiş,  pence- releri mukavvalarla yamanmış, damlarına oluklu demir levhalar döşenmiş,  eğri büğrü bahçe  duvarları  sağa sola bel vermiş, çürüyeduran  on dokuzuncu  yüzyıl   evlerinin bu görünümü eskiden beri hep var mıydı? Ya sıva tozla- rının havada  dolandığı ve moloz  yığınlarının üstünü  sö- ğüt otlarının sardığı   bombalanmış   yöreler;  bombaların daha geniş bir alan açtığı ve kümesten farksız çirkin ah- şap kulübelerin belirdiği yerler? Ama boşuna, anımsaya- mıyordu: Çocukluğundan geriye, belli belirsiz, silik, bir görünüp bir kaybolan bir dizi resimden başka bir şey kalmamıştı.


Gerçek Bakanlığı −Yenisöylem'de1 Gerbak− görü- nürdeki bütün öteki nesnelerden ilk bakışta  ayrılıyordu. Piramit biçimindeki koskocaman parlak beyaz beton ya- pının yüksekliği üç yüz metreydi. Beyaz cephesine zarif harflerle yazılmış üç Parti sloganı, Winston'ın durduğu yerden az çok okunabiliyordu:

SAVAŞ BARIŞTIR ÖZGÜRLÜK KÖLELİKTİR CAHİLLİK GÜÇTÜR.

Söylenenlere bakılırsa, Gerçek Bakanlığı'nın yerüs- tündeki üç bin odasının yeraltında da uzantıları bulunu- yordu. Londra'nın çeşitli yerlerinde benzer görünüş ve büyüklükte yalnızca üç yapı daha vardı. Çevrelerindeki yapılar bunların yanında o denli küçük  kalıyordu ki, bu dört yapı Zafer Konutları'nın çatısından aynı anda görü- lebiliyordu. Tüm bir yönetim aygıtının bölüştürüldüğü dört Bakanlık bu yapılardaydı:   Haberler,   eğlence, eğitim ve güzel sanatlara bakan Gerçek Bakanlığı; savaşlarla il- gilenen Barış Bakanlığı; yasa ve düzeni sağlayan Sevgi Bakanlığı ve ekonomi işlerinden sorumlu Varlık Bakanlı- ğı. Bunların Yenisöylem'deki adları Gerbak, Barbak, Sev- bak ve Varbak'tı.
En korkunçları, Sevgi Bakanlığı'ydı. Tek bir  pence- resi bile yoktu. Winston, Sevgi Bakanlığı'na girmek şöyle dursun, yarım kilometreden fazla yaklaşmamıştı. Resmî bir göreviniz olmadığı sürece içeriye girmek olanaksızdı; resmî görevliler de içeriye ancak tel örgülerin arasından dolanarak, çelik kapılardan ve gizli makineli tüfek yuva- larının arasından geçerek girebiliyorlardı. Bakanlığın dı-

l.Yenisöylem, Okyanusya'nın resmî diliydi. Yapısı ve kökenine ilişkin açıklama- lar için Ek'e bakınız. (Yazarın notu.)


şındaki bu barikatlara açılan sokaklarda bile siyah üni- formalı, goril suratlı muhafızlar ellerinde coplarıyla kol geziyorlardı.
Winston birden geri döndü. Yüzüne dingin, iyimser bir ifade oturtmuştu; tele-ekrana bakarken böylesi daha uygundu. Odayı geçip küçük mutfağa girdi. Bakanlıktan günün bu saatinde  ayrılmakla kantindeki öğle yemeğini feda etmişti, üstelik mutfakta ertesi günün kahvaltısına saklanması gereken bir parça  esmer  ekmekten  başka bir şey olmadığını biliyordu. Raftan, içinde renksiz bir sıvı bulunan, düz beyaz etiketinde ZAFER CİNİ yazan bir şişeyi aldı. Kapağını açınca, Çinlilerin pirinç ruhunu  an- dıran, ağır, tiksinç bir koku çarptı burnuna. Bir çay kaşığı kadar   doldurdu,  geçireceği    sarsıntıya   kendini    hazırladı ve ilaç içer gibi içiverdi.
Ansızın yüzü kıpkırmızı oldu, gözlerinden yaş bo- şandı. Kezzap gibi bir şeydi içtiği; dahası, yuttuğunda kafasının arkasına lastik bir  copla   vurulmuş  gibi oluyor- du insan. Ne ki, midesindeki yanma uzun sürmedi, dün- ya gözüne daha hoş görünmeye  başladı. Üstünde  ZA- FER SİGARALARI yazan buruşmuş  bir paketten  bir sigara aldı, ama farkında olmadan sigarayı dik tutunca içindeki tütün yere döküldü.  İkinci sigarayı yakmayı ba- şardı. Yeniden   oturma  odasına geçti, tele-ekranın  solun- da duran küçük bir masanın başına oturdu. Masanın çekmecesinden  bir kalem sapı, bir mürekkep  şişesi,   bir de sırtı kırmızı, kapağı ebrulu,  orta boy boş bir defter çıkardı.
Oturma odasındaki tele-ekran,  nedense, alışılmadık bir konumdaydı. Odanın tümüne egemen olabileceği dipteki duvar yerine, pencerenin karşısına düşen  uzun duvara yerleştirilmişti. Tele-ekranın bir yanında, Win- ston'ın  oturmakta  olduğu   küçük bir girinti vardı; daire- ler yapılırken, belli ki, buraya kitap raflarının konulması


tasarlanmıştı. Winston,  girintide iyice   arkasına   yaslana- rak oturduğunda, tele-ekranın görüş alanı dışında kalabi- liyordu. Hiç kuşkusuz, sesi duyulabiliyordu; ama böyle kaldığı sürece görülmesi   olanaksızdı.   Birazdan   yapacağı işi aklına getiren de, bir ölçüde, odanın bu alışılmadık yapısı olmuştu.
Ama bu işin aklına gelmesinde, az önce  çekmece- den çıkardığı defterin de payı yok değildi. Garip bir gü- zelliği vardı defterin. Yıllar içinde biraz sararmış, pürüz- süz, kaymak gibi kâğıdı, en azından kırk yıldır yapılma- yan türdendi. Ama Winston defterin daha da eski oldu- ğunu tahmin ediyordu. Onu kentin kenar mahallelerin- den birindeki (hangi mahalle olduğunu artık anımsamı- yordu) tıklım tıkış bir eskici dükkânının  vitrininde gör- müş, görür görmez de almak için karşı konulmaz bir is- teğe kapılmıştı. Gerçi Parti üyelerinin sıradan dükkânlara girmemeleri  gerekiyordu  (buna "serbest piyasada alışve- riş yapmak" deniyordu), ama bu kurala sıkı sıkıya uyul- duğu söylenemezdi, çünkü ayakkabı bağı ve jilet gibi şeyleri başka bir yoldan edinmek olanaksızdı. Winston, sokağı çabucak  kolaçan ettikten sonra dükkânın kapısın- dan içeri süzülmüş,  defteri iki buçuk dolara satın almıştı. O sırada defteri edinmek istemesinin belirli bir nedeni yoktu. Defteri suçluluk duyarak çantasına atıp eve gö- türmüştü. İçinde hiçbir yazı bulunmamasına karşın, teh- likeyi göze almaya değecek bir nesneydi.
Winston, birazdan bir günce tutmaya başlayacaktı. Günce  tutmak yasadışı değildi (aslında hiçbir şey yasadı- şı değildi, çünkü artık yasa diye bir şey yoktu), ama fark edilecek olursa   Winston'ın   ölüm   cezasına   çarptırılacağı ya da en az yirmi beş yıl zorunlu çalışma kampına  gön- derileceği kesin sayılırdı. Kalem sapına bir uç taktı, eme- rek yağını aldı. Mürekkepli  kalem artık müzelik  olmuş- tu, imza atarken bile pek ender kullanılıyordu; Winston,


sırf o güzelim kaymak kâğıdın bir tükenmezkalemle çi- ziktirilmek   yerine   gerçek   bir   kalem   ucuyla   yazılmayı hak ettiğine inandığından, gizlice ve güç bela bir mürek- kepli kalem edinmişti. Aslında elle yazmaya  alışkın de- ğildi. Çok kısa notlar dışında her şey söyleyaz'a dikte ediliyordu, ama bu kuşkusuz şimdiki amacına  hiç de uy- gun değildi. Kalemi mürekkebe batırdıktan sonra bir an duraksadı. İçinde bir ürperti dolaştı. Bir başlasa, gerisi gelecekti. Küçük, eğri büğrü harflerle şöyle yazdı:

4 Nisan 1984

Arkasına yaslandı. Tam anlamıyla umarsızlığa kapıl- mıştı. Bir kere, 1984 yılında olduklarından hiç de emin değildi. Otu z dokuz yaşında olduğundan emin olduğuna ve 1944 ya da 1945'te doğduğunu sandığına göre, aşağı yukarı 1984 yılında olmalıydılar; gel gör ki, artık bir iki yıl içindeki tarihleri kesin bir biçimde saptamak olanak- sızdı.
Ansızın aklına bir soru düştü: Bu günceyi kimin için tutuyordu? Gelecek  için, daha doğmamış  olanlar için. Aklı bir an sayfadaki kuşkulu tarihin  çevresinde dolandı, sonra Yenisöylem'deki  çiftdüşün sözcüğüne  tosladı. İlk kez, üstlendiği işin büyüklüğünün ayırdına vardı. Gele- cekle nasıl iletişim kurulabilirdi ki? Doğası gereği ola- naksızdı. Gelecek ya şimdiye benzeyecekti, ki o zaman ondan haberi bile olmayacaktı ya da şimdiden farklı ola- caktı, ki o zaman da içinde bulunduğu durumun hiçbir anlamı kalmayacaktı.
Bir süre, oturduğu yerden önündeki kâğıda aptal ap- tal baktı. Tele-ekranda tiz perdeden bir askeri marş çal- maya başlamıştı. Winston, ne tuhaftır ki, yalnızca kendi- ni dile getirme gücünü  yitirmekle kalmamış, ne söyle- mek istediğini de unutmuş gibiydi. Haftalardır kendini


bu ana hazırlıyordu, ama cesaretten başka şeylere de ge- reksinim duyabileceği hiç aklına gelmemişti. Oturup yazmak kolaydı. Tek yapması gereken, yıllardır kafasının içinde akıp giden o bitmez tükenmez, tedirgin monologu kâğıda dökmekti. Ne ki, şimdi o monolog bile silinip git- mişti. Dahası, varis çıbanı dayanılmaz bir biçimde kaşın- maya başlamıştı. Kaşımaya cesaret  edemiyordu,   çünkü ne zaman kaşısa iltihap kapıyordu.  Zaman akıp gidiyor- du. Önündeki  bomboş sayfadan, ayak bileğinin üstünde- ki kaşıntıdan, müziğin cayırtısından ve cinin yol açtığı hafif esriklikten başka hiçbir şeyin ayırdında değildi.
Ansızın ürküye kapılarak, ne yazdığının   pek farkın- da olmadan kaleme sarıldı. Küçük ama çocuksu elyazısı, önce büyük harfleri, ardından noktaları bile bir yana bı- rakarak sayfada oradan oraya dolanıyordu:

4 Nisan 1984. Dün gece sinema. Hepsi de savaş filmi. Biri çok iyiydi mültecilerle dolu bir gemi Akdeniz'de bir yer- de   bombalanıyordu.	Kocaman iriyarı şişman bir adamın peşinde bir helikopter yüzerek kaçmaya çalıştığı sahneler seyirciyi ne eğlendirdi ne eğlendirdi, önce suda domuzbalığı gibi debelenirken görülüyordu, sonra helikopterin bakıncak açısından göründü, sonra delik deşik oldu ve çevresindeki sular pespembe kesildi ve adam sanki gövdesindeki delik- lerden içeri su dolmuş gibi birden battı, o batarken seyirci- ler kahkahalar atıyorlardı, sonra içi çocuk dolu bir cankur- taran sandalı göründü tepesinde bir helikopter dolanıyor, önde orta yaşlı bir kadın oturuyordu Yahudi olabilir kuca- ğında üç yaşlarında küçük bir erkek çocuk, küçük çocuk korku içinde haykırıyor ve içinde kaybolmaya çalışırcasına başını kadının göğüslerinin arasına sokuyordu ve kadın çocuğu kollarının arasına alıyor ve kendisi de tir tir titre- mesine karşın kollarıyla onu mermilerden koruyabilecek- mişçesine kendini çocuğa siper etmeye çabalıyordu, sonra


helikopter üstlerine 20 kiloluk bir bomba bıraktı   korkunç bir alev çaktı ve sandaldan geriye tahta parçalan kaldı. sonra müthiş bir çekim vardı bir çocuğun kolu havaya uçu- yordu helikopterin önündeki bir kamerayla çekilmiş olma- lıydı ve partililerin oturduğu koltuklardan büyük bir alkış koptu ama salonun proleter bölümündeki bir kadın   birden ter ter tepinmeye bunları   çocukların   önünde gösteremezsi- niz	bunları	çocukların önünde göstermeye hakkınız yok diye bağırmaya başladı sonunda polisler onu dışarı attılar kadının başına bir şey geldiğini sanmam proleterlerin de- diklerine hiç kimse aldırmaz tipik proleter tepkisi der geçer onlar hiçbir zaman...

Winston, biraz da eline kramp girdiği için, yazmayı bıraktı. Bütün bu saçmalıkları birbiri ardı sıra neden  dö- küp saçtığını bilmiyordu. Ama işin tuhafı,  bunu  yapar- ken kafasında bambaşka bir anı belirmiş, onu handiyse oturup yazma noktasına getirmişti. Bugün birden  eve dönüp günce tutmaya bu öteki olaydan ötürü karar ver- diğini şimdi fark ediyordu.
Olay o sabah Bakanlık'ta olmuştu, bu kadar belli belirsiz bir şeye olay denebilirse kuşkusuz.
Saat on bire geliyordu, Winston'ın çalıştığı Arşiv Dairesi'nde İki Dakika Nefret için hazırlık yapılıyor, is- kemleler  odacıklardan salonun  ortasına   getiriliyor,   bü- yük tele-ekranın karşısına yerleştiriliyordu. Winston  tam orta sıralardan birindeki yerini alıyordu ki, göz  aşinalığı olduğu,  ama o güne kadar hiç konuşmadığı iki kişi ansı- zın salona girdi. Biri, koridorlarda  sık sık karşılaştığı bir kızdı. Adını bilmiyordu, ama Kurmaca Dairesi'nde çalış- tığını biliyordu. Herhalde roman yazma aygıtlarından birinde mekanik bir iş yapıyordu, çünkü Winston  onu birkaç kez elleri yağ içinde, bir ingilizanahtarıyla gör- müştü. Yirmi yedi yaşlarında, gür siyah saçlı, yüzü çilli,


fişek gibi, atletik ve sert bakışlı bir kızdı. Seks Karşıtı Gençlik Birliği'nin simgesi olan dar bir kızıl kuşak, kal- çalarının  biçimliliğini ortaya  çıkaracak   sıkılıkta,   birkaç kez tulumunun beline dolanmıştı. Winston gördüğü ilk andan beri bu kızdan hoşlanmamıştı.  Nedenini  biliyor- du. Hokey  sahalarının, soğuk duşların, topluca  çıkılan doğa yürüyüşlerinin havası; baştan aşağı bir doğruculuk sinmişti kızın üzerine. Winston hemen hiçbir kadından, özellikle de genç ve güzel kadınlardan hoşlanmazdı. Parti'nin en koyu yandaşları, sloganları körü körüne ez- berleyenler, gönüllü ispiyoncular, bağnaz olmayanları ele verenler  hep kadınlardı, özellikle de   genç kadınlar. Ama bu kız çoğundan daha tehlikeli olduğu izlenimini uyan- dırıyordu Winston'da. Bir keresinde koridorda karşılaş- tıklarında, yanından geçerken ansızın fırlattığı bakış Winston'ın içine işlemiş, yüreğine dehşet salmıştı. Kızın, Düşünce Polisi'nin bir ajanı olabileceği bile geçmişti ak- lından. Aslında bu pek olası olmasa da, kız ne zaman yakınında bir yerlerde dolansa, Winston korku ve düş- manlıkla karışık tuhaf bir tedirginliğe kapılıyordu.
Öbürü  ise, Winston'ın  pek bilemeyeceği kadar önemli ve gözden uzak bir görevin başında bulunan, O'Brien adında bir İç Parti üyesiydi. Siyah tulumlu bir İç Parti üyesinin yaklaştığı görüldüğünde, iskemlelerin çev- resinde kümelenmiş olanlar susuverdiler. O'Brien iriyarı, sağlam yapılı bir adamdı, boynu  kalın, yüzü ablak, gülünç ve yabanıldı. Korkunç görünüşüne  karşın, insana çekici gelen bir havası vardı. Gözlüğünü ikide bir burnunun üs- tünde düzeltişi, nedendir bilinmez, ona bir sevimlilik ve- riyor, garip bir   biçimde   uygar   görünmesini   sağlıyordu. Eğer hâlâ böyle düşünebilenler kaldıysa, karşısındakine enfiye kutusunu sunan bir on sekizinci yüzyıl soylusunu çağrıştırabilecek bir davranıştı bu.  Winston,   O'Brien'ı onca yıl içinde  on on iki kez ya görmüş ya görmemişti.


Ona içi ısınmıştı, ama yalnızca O'Brien'ın kentli davra- nışları ile ödül dövüşçüsünü andıran görünüşü arasındaki karşıtlık ilgisini çektiği için değil. Bunun çok ötesinde, O'Brien'ın siyasal bakımdan tam anlamıyla bir bağnaz olmadığına ilişkin gizliden gizliye bir inanç duyduğu için; belki bir inanç da değildi bu, yalnızca bir umuttu. Yüzün- de öyle bir şey vardı ki, karşı konulmaz bir biçimde bunu telkin ediyordu. Kaldı ki, yüzünden okunan, bağnaz ol- madığı da değildi belki, yalnızca zekâydı. Öyle ya da böy- le, tele-ekranı atlatabilir ve onu tek  başına yakalayabilir- seniz, konuşabileceğiniz birine benziyordu. Winston bu izlenimini doğrulamak için şimdiye kadar en küçük bir girişimde bulunmamıştı; aslına bakılırsa, böyle bir giri- şimde bulunmanın olanağı da yoktu. Tam o sırada O'Brien kolundaki saate  baktı, on bire geldiğini görünce,  anlaşılan İki Dakika Nefret sona erinceye kadar Arşiv Dairesi'nde kalmaya karar verdi. Winston'ın  birkaç iskemle ötesine oturdu.  Winston'ın  yanındaki odacıkta   çalışan,   saçları kum sarısı, ufak tefek  bir kadın aralarında oturuyordu. Siyah saçlı kız ise hemen arkalarındaydı.
Çok geçmeden, odanın bitimindeki büyük tele- ekrandan insanın içini kıyan, ürkünç bir cazırtı yükseldi, sanki yağı tükenmiş korkunç bir aygıt çalıştırılıyordu. İn- sanın dişlerini kamaştıran, tüylerini diken diken eden bir gürültüydü bu. Nefret başlamıştı.
Her zaman olduğu gibi, ekranda Halk Düşmanı Em- manuel Goldstein'ın yüzü belirivermişti. İzleyiciler ara- sında yer yer fısıldaşmalar oluyordu. Saçları kum sarısı, ufak  tefek kadın korku  ve nefretle  ciyakladı. Goldstein bir dönek ve sapkındı; çok eskiden (ne kadar eskiden ol- duğunu anımsayan yoktu)  Parti'nin önde  gelenlerinden biri, dahası Büyük Birader'le nerdeyse aynı aşamada ol- masına karşın, sonradan karşıdevrimci etkinliklere  kalkış- mış, idam cezasına çarptırılmış, ama her nasılsa kaçıp


kurtularak ortadan kaybolmuştu. İki Dakika Nefret iz- lenceleri her seferinde değişirdi, ama  Goldstein'ın  baş- rolde olmadığı bir tek izlence yoktu.  Goldstein baş hain- di, Parti'nin saflığını bozan ilk kişiydi. Daha sonra Parti'ye karşı işlenen tüm  suçlar, tüm ihanetler, baltalama eylem- leri, sapkınlıklar, sapmalar doğrudan doğruya onun öğre- tisinden kaynaklanmıştı. Goldstein, her neredeyse, hâlâ hayattaydı ve fesat karıştırmayı sürdürüyordu; belki de- nizaşırı bir ülkede yabancı ağababalarının koruması al- tındaydı, kim bilir, belki Okyanusya'da  bir yerde gizleni- yor bile olabilirdi; ara sıra böyle bir söylenti dolaşıyordu.
Winston'ın göğsü sıkıştı. Ne zaman Goldstein'ın yü- zünü görse, karmakarışık duygular  yüreğini burkardı. Zayıf bir Yahudi yüzü, tepesinde beyaz kabarık saçlar, çenesinde küçük bir keçi sakalı; zeki bir yüzdü bu,  ama yine de üstüne bir gözlük kondurulmuş ince uzun burun yüzüne bunakça bir sersemlik veriyor, bu da sonuçta ha- fifsenmesine yol açıyordu. Yüzü koyun  yüzüne benzi- yordu, sesi de koyun  sesi gibiydi. Parti öğretilerine karşı her zamanki kötücül  saldırılarından birine  girişmişti; o denli abartılı  ve sapkın bir saldırıydı ki, gerçek olmadığı- nı bir çocuk bile anlayabilirdi; ama tümden ipe sapa gel- mez de sayılmazdı, insan pek o kadar sağgörülü olma- yanların bütün bunları yutabileceğini düşünerek telaşa kapılabilirdi. Büyük Birader'e sövüp sayıyor, Parti dikta- törlüğünü yerden yere vuruyor, Avrasya'yla hemen barış anlaşması yapılmasını istiyor, ifade özgürlüğünü, basın özgürlüğünü, toplantı yapma özgürlüğünü, düşünce öz- gürlüğünü savunuyor, gözü dönmüşçesine  devrime  iha- net edildiğini haykırıyordu; üstelik, birbiri ardına hızla sıralanan uzun sözcüklerden oluşan bu konuşma, Parti hatiplerinin alışılmış üslubunun alaycı bir taklidi gibiydi; dahası, Yenisöylem sözcüklerini bile içeriyordu: Konuş- mada, bir Parti üyesinin gerçek yaşamda kullanacağın-


dan daha çok Yenisöylem sözcüğü geçiyordu. Bu arada, Goldstein'ın içtenlikten yoksun, aldatıcı sözlerinin ar- dındaki gerçek konusunda  en küçük bir kuşku kalmasın diye, tele-ekranda başının arkasından boyuna Avrasya ordusu birlikleri geçiyordu; Asyalı yüzleriyle sert ve do- nuk bakışlı askerler saflar halinde ekranda belirip kaybo- luyor, hemen ardından yerlerini aynıları alıyordu. Asker postallarının tekdüze  rap rapları,   Goldstein'ın  meleme- ye benzeyen sesine karışıyordu.
İki Dakika Nefret başlayalı daha otuz saniye olma- mıştı   ki,   salondakilerin   yarısından dizginlenmesi  olanak- sız öfke çığlıkları yükselmeye başladı. Ekrandaki gamsız koyunsu  surat ve arkasındaki Avrasya ordusunun  ürkü- tücü gücü dayanılır gibi değildi; kaldı ki, Goldstein'ın görüntüsü,  hatta  düşüncesi bile kendiliğinden korku  ve öfke uyandırıyordu.  Goldstein'a  duyulan nefret, Avrasya ya da Doğuasya'ya  duyulan  nefretten  daha sürekliydi, çünkü Okyanusya bu devletlerden biriyle savaştayken öbürüyle genellikle barışta oluyordu. Ama ne tuhaftır ki, herkes tarafından nefret edilmesine ve aşağılanmasına, görüşlerinin her  gün   kürsülerde,  tele-ekranda, gazeteler- de, kitaplarda yüzlerce kez çürütülmesine, yerle bir edil- mesine, gülünç düşürülmesine,  aşağılık süprüntüler ola- rak sergilenmesine karşın, evet, bütün bunlara karşın, Goldstein'ın etkisi hiç azalmıyor gibiydi. Her gün onun oyununa  gelmeye hazır   yeni   yeni   salaklar   çıkıyordu. Gün geçmiyordu ki, onun buyruklarıyla eyleme geçen casuslar ve kundakçılar Düşünce Polisi tarafından ele ge- çirilmesin. Goldstein,  gözle görülmeyen  koca bir ordu- nun   komutanı,   kendilerini	Devlet'i yıkmaya adamış bozgunculardan oluşan bir yeraltı örgütünün başıydı. Örgütün adının Kardeşlik olduğu söyleniyordu. Ayrıca, Goldstein'ın kaleme aldığı ve tüm sapkın düşünceleri özetleyen korkunç bir kitabın  gizlice dağıtıldığı söylenti-


si ağızdan ağıza dolaşıyordu. Kitabın adı yoktu.  Yalnızca kitap demekle  yetiniliyordu.  Ama  bunların hepsi de bel- li belirsiz söylentilerden edinilen bilgilerdi. Kardeşlik de kitap da, sıradan Parti üyelerinin mecbur kalmadıkça ağızlarına bile almadıkları konulardı.
Nefret, ikinci dakikasında tam bir cinnete dönüştü. Millet hop oturup hop kalkıyor, ekrandan gelen delirtici koyun sesini bastırmak için avazı çıktığı kadar bağırıyor- du. Saçları kum sarısı , ufak tefek kadın kıpkırmızı kesil- mişti; ağzı, karaya vurmuş bir balığın ağzı gibi açılıp ka- panıyordu. O'Brien'ın  ablak yüzü bile kıpkırmızı olmuş- tu. İskemlesinde dimdik oturuyor, güçlü göğsü karşıdan gelen bir dalgaya direniyormuşçasına bir kabarıp bir ini- yordu. Winston'ın arkasında oturan siyah saçlı kız, "Do- muz! Domuz! Domuz!" diye bağırmaya başlamıştı;  bir- den kalın bir Yenisöylem sözlüğünü kaptığı gibi ekrana fırlattı. Sözlük Goldstein'ın burnuna  çarpıp  yere düştü: Ses hiç kesilmeden sürüyordu.  Winston bir an kendine geldi ve ötekilerle birlikte bağırdığını, topuklarını  var gücüyle iskemlenin basamağına vurduğunu fark etti. İki Dakika Nefret'in en korkunç yanı, insanın katılmak zo- runda olması değil, katılmaktan kendini alamamasıydı. Otuz saniye sonra en küçük bir zorlamaya gerek kalmı- yordu. Tüm topluluk, elektrik akımına kapılmışçasına, ürkünç bir kin ve nefretle azgınlaşıyor, öldürme, işkence yapma, yüzleri bir balyozla yamyassı etme  isteğine kapı- lıyor, insanlar ellerinde olmadan yüzleri kaskatı kesilerek çılgınlar gibi bağırıp   çağırıyorlardı. Ama  yine de,   duyu- lan öfke, bir pürmüzün alevi gibi bir nesneden öbürüne yöneltilebilen, soyut, kimseyi hedef almayan bir  duy- guydu. O yüzden, Winston'ın nefreti bazen Goldstein'a değil, tam tersine Büyük Birader'e, Parti'ye ve Düşünce Polisi'ne   yöneliyor;   böyle anlarda  gönlü,   ekrandaki yal- nız, aşağılanan sapkına, bu yalanlar dünyasında gerçeğin


ve sağduyunun biricik koruyucusuna kayıyordu. Gel gör ki, çok geçmeden, çevresindeki insanlarla bir oluyor, Goldstein için söylenenlerin hepsinin doğru olduğunu düşünüyordu.  Böyle anlarda da, Büyük Birader'e duydu- ğu gizli nefret hayranlığa dönüşüyor, onu yüceltiyor, As- yalı sürülerin karşısına bir kaya gibi dikilen, yenilmez, korkusuz bir koruyucu olarak görüyordu;  Goldstein ise, tüm yalnızlığı ve umarsızlığına, var olup olmadığı bile kuşkulu olmasına karşın, salt sesinin gücüyle uygarlığı ortadan kaldırabilecek, kötücül  bir büyücü  olup çıkıyor- du gözünde.
Kimi zaman, insanın birine duyduğu nefreti bile is- teye bir başkasına yöneltmesi de olasıydı. Winston da, karabasan gören bir insanın ansızın yatağında doğrulması gibi, ekrandaki yüze  duyduğu  nefreti  arkasında oturan siyah saçlı kıza yöneltiverdi. Çılgınca, müthiş   sanrılar düştü  aklına. Kızı lastik bir copla döve  döve  öldürüyor- du. Çırılçıplak soyduktan sonra bir kazığa bağlıyor, Aziz Sebastian'a yaptıkları gibi oklarla delik deşik   ediyordu. Irzına geçiyor, orgazm  anında boğazını  kesiyordu.  Üste- lik, ondan niçin nefret ettiğini şimdi çok daha iyi anlıyor- du. Ondan  nefret ediyordu, çünkü genç ve güzel olması- na   karşın cinsiyetsizdi,   çünkü onunla  sevişmek   istemesi- ne karşın bunu hiçbir zaman yapamayacağını biliyordu, çünkü sanki sarıl bana diyen o güzelim, yumuşacık beline iffetin saldırgan simgesi o iğrenç kızıl kuşağı dolamıştı.
İki Dakika Nefret artık doruğuna varmıştı. Gold- stein'ın sesi artık gerçek bir koyun melemesine dönüş- müştü, yüzü de bir an koyun suratına dönüştü. Az sonra, koyun suratı da değişime uğrayarak, ilerliyormuş gibi gö- rünen, kocaman ve korkunç bir Avrasya askeri olup çıktı; elindeki hafif makineli  tüfek  cayırdıyordu,  sanki ekran- dan dışarı fırlayacak gibiydi, o kadar ki ön sırada oturan- lardan bazıları ürkerek arkalarına yaslandılar. Ama tam o


sırada düşman askerinin görüntüsü esmer, siyah bıyıklı Büyük Birader'in yüzüne dönüşünce herkes rahat bir ne- fes aldı; güçlü ve akıl almaz ölçüde dingin yüz o kadar büyüktü ki, nerdeyse tü m ekranı kaplıyordu. Büyük Birader'in söylediklerini duyan yoktu.  Savaşın bağrış çağrışı arasında söylenen, açık seçik anlaşılmamakla  bir- likte sırf söylenmiş olduğu için güven veren, yüreklere cesaret salan sözlerdi bunlar. Biraz sonra Büyük Birader'in yüzü yeniden silinip gitti ve Parti'nin siyah, büyük  harf- lerle yazılı üç sloganı belirdi:

SAVAŞ BARIŞTIR ÖZGÜRLÜK KÖLELİKTİR CAHİLLİK GÜÇTÜR.

Ama Büyük Birader'in yüzü, insanların gözyuvarla- rında bıraktığı etki çabucak silinip gidemeyecek kadar güçlüymüşçesine, birkaç saniye daha ekranda  kaldı san- ki. Saçları kum sarısı, ufak tefek kadın öne atılarak önün- deki iskemlenin arkalığına tutunmuştu. Titrek bir sesle, "Kurtarıcım benim!" gibisinden bir şeyler mırıldanarak, kollarını ekrana uzattı. Sonra yüzünü  ellerinin arasına aldı. Besbelli, bir dua okuyordu.
O sırada, hepsi birden, "B-B! ... B-B! ... B-B!" diye pes  perdeden,  ağır aksak,   ölçülü bir şarkıya   başladılar
−çok yavaş bir biçimde durmadan yineliyorlar, birinci "B" ile ikincisi arasında uzunca duraklıyorlardı−, mırıltıyı an- dıran bu boğuk seste tuhaf bir yabanıllık vardı, geriden çıplak ayakların tepinişi ve tamtam sesleri duyuluyor gi- biydi. Otuz saniye kadar bu böyle sürdü. Olağanüstü coşku anlarında sık sık duyulan bir nakarattı bu. Bir ba- kıma Büyük Birader'in bilgeliği ve yüceliğine bir  övgüy- dü, ama daha çok kendi kendini hipnotize etme, bilincin ritmik  bir gürültüyle  bile  isteye bastırılması   eylemiydi.


Winston'ın içi üşümüştü sanki. İki Dakika Nefret  sıra- sında toplu çılgınlığa katılmadan edemezdi, ama bu ilkel "B-B!... B-B!" ezgisi öteden beri  yüreğine korku  salardı. Hiç kuşkusuz, her seferinde herkesle birlikte o da söyler- di; söylememek söz konusu bile değildi. Duygularını giz- lemek, aklından geçenlerin yüzüne yansımasını önlemek, herkes ne yapıyorsa onu yapmak, içgüdüsel bir tepkiydi. Ama gözlerinin birkaç saniyeliğine de olsa duygularını dışavurması onu ele verebilirdi. İşte ne olduysa o anda oldu; oldu denebilirse kuşkusuz.
Winston bir an O'Brien'la göz göze geldi. O'Brien, hep yaptığı gibi, gözlüğünü çıkarmış, yeniden burnunun üstüne  yerleştiriyordu.  Saniyenin onda biri kadar   göz göze geldiler, ama bu kadarcık bir süre bile Winston'ın, O'Brien'ın kendisi gibi düşündüğünü  anlamasına  yetti; evet, anlamıştı! En küçük bir yanılgıya yer yoktu. Sanki kafalarının içindekiler gözlerinden geçerek birbirine akı- yordu. O'Brien,"Senin yanındayım,"der gibiydi. "Ne dü- şündüğünü, ne hissettiğini çok iyi biliyorum. Ne kadar aşağıladığını, ne kadar  nefret  ettiğini, ne kadar tiksindiği- ni biliyorum. Ama merak etme, yanındayım!" Sonra göz- lerindeki o parıltı söndü ve O'Brien'ın yüzü  de öbürleri- nin yüzlerindeki o donuk anlatıma büründü.
Olan biten buydu, üstelik  olup olmadığından  da emin değildi Winston.   Böylesi   olaylardan   hiçbir  zaman bir sonuç  çıkmazdı. Yalnızca kendisinin   değil,   başkaları- nın da Parti'ye düşman oldukları inancı ya da umudunu canlı tutmasını sağlarlardı, o kadar. Kim bilir, gizlice yü- rütülen bozgunculuk eylemlerine ilişkin söylentiler doğ- ruydu belki de; Kardeşlik örgütü  belki de gerçekten  var- dı! Ardı arası kesilmeyen tutuklamalara, itiraflara ve idamlara  karşın, Kardeşlik örgütünün yalnızca bir söylen- ce olmadığından  kuşku duymamak  olanaksızdı.   Win- ston, böyle bir örgütün varlığına bazen inanıyor, bazen


de inanmıyordu.  Elle tutulur bir kanıt  yoktu,  yalnızca her anlama gelebilecek ya da hiçbir anlama gelmeyecek kaçamak bakışlar, kulağa çalınan bölük  pörçük  konuş- malar, tuvaletlerin duvarlarındaki belli  belirsiz çiziktir- meler söz konusuydu; bazen, birbirini tanımayan  iki in- san karşılaştığında, küçücük bir el hareketi  bile tanıştık- larını gösteren bir işaret olarak algılanabiliyordu. Bunla- rın hepsi bir sanıydı: Belki de her şeyi kendisi uydurmuş- tu. O'Brien!a bir daha bakmadan odacığına dönmüştü. Aralarında oluşan o anlık bağlantıyı sürdürmek aklının ucundan bile geçmedi. Sürdürmeyi becerebilse bile, çok tehlikeli olabilirdi. Birkaç saniye kadar belli belirsiz ba- kışmışlardı, o kadar. Ne ki, yaşamak zorunda  bırakıldık- ları yapayalnızlıkta bu kadarı bile unutulmaz bir olaydı.
Winston doğrulup arkasına yaslandı. Geğirdi. İçtiği cin ağzına geliyordu.
Gözleri yeniden önündeki sayfaya odaklandı. Umar- sız düşünceler içinde öylece otururken istençsizce bir şeyler yazmış olduğunu  fark etti. Üstelik elyazısı artık eskisi gibi kargacık burgacık değildi. Kalemi pürüzsüz kâğıdın üstünde şehvetle dolaşmış, düzgün büyük harf- lerle alt alta yazılmış yazıyla sayfanın yarısı dolmuştu:

KAHROLSUN BÜYÜK BİRADER KAHROLSUN BÜYÜK BİRADER KAHROLSUN BÜYÜK BİRADER KAHROLSUN BÜYÜK BİRADER KAHROLSUN BÜYÜK BİRADER

Ansızın bir ürküye kapıldı. Saçmaydı  aslında, çünkü bu sözcükleri yazmak günce tutmaya kalkışmaktan daha tehlikeli değildi; ama bir an, karaladığı sayfaları yırtıp at- mak, günce tutmayı tümden bırakmak geçti aklından.
Ama aklından  geçeni yapmadı, çünkü bunun bir işe


yaramayacağını biliyordu. İster KAHROLSUN BÜYÜK BİRADER yazsın, ister yazmaktan  vazgeçsin, hiçbir şey fark etmeyecekti. İster günceyi sürdürsün, ister sürdür- mesin, hiçbir şey fark etmeyecekti.  Düşünce  Polisi onu nasıl olsa yakalayacaktı. Hiçbir şey yazmamış olsaydı bile, tüm öteki suçları da içeren temel suçu işlemişti. Buna dü- şüncesuçu diyorlardı. Düşüncesuçu sonsuza dek gizlene- bilecek bir şey değildi. Onları bir süre, hatta yıllarca atla- tabilirdiniz, ama eninde sonunda ensenize yapışırlardı.
Böyle işler hep geceleri yapılırdı; tutuklamalar her zaman geceleyin gerçekleşirdi. Ansızın   irkilerek   uyan- mak, hoyrat bir elin omzunuzu  sarsması, gözlerinize tu- tulan ışıklar, yatağı çevreleyen acımasız   yüzler.   Çoğu zaman ne yargılama olurdu ne de bir tutuklama raporu tutulurdu.  İnsanlar  ortadan kayboluverirdi, o   kadar;   ve bu hep geceleri olurdu. Adınız  kayıtlardan silinir, yaptı- ğınız her şeyin kaydı yok edilir, bir zamanlar var olduğu- nuz bile yadsınır, sonra da tümden unutulurdu. Kökünüz kazınır, külünüz göğe savrulurdu: Alışılmış deyimle, bu- harlaşırdınız.
Winston bir an sanki cezbeye tutuldu. Sonra telaşla çarpık çurpuk yazmaya koyuldu:

vuracaklar beni umurumda mı ensemden vurucaklar umurumda mı kahrolsun büyük birader hep ensesinden vururlar adamı umurumda mı kahrolsun büyük birader

Kendinden utanarak arkasına yaslanıp  kalemi bırak- tı. Sonra birden irkilerek dehşete kapıldı. Kapı vurulu- yordu.
Ne çabuk! Kapıyı vuran belki fazla diretmeden çe- kip gider umuduyla çıt çıkarmadan  oturdu. Ama boşu- na, kapı yeniden  vuruldu.  Kapıyı açmayı  geciktirmek daha da kötü olacaktı. Yüreği yerinden oynamıştı, ama


nicenin alışkanlığıyla yüzünde en küçük bir ifade yoktu. Yerinden kalkıp ağır ağır kapıya ilerledi.
`)
  const [highlightText, setHighlightText] = useState(true);
  const {
    Text, // Component that returns the modified text property
    speechStatus, // String that stores current speech status
    isInQueue, // Boolean that stores whether a speech utterance is either being spoken or present in queue
    start, // Function to start the speech or put it in queue
    pause, // Function to pause the speech
    stop, // Function to stop the speech or remove it from queue
  } = useSpeech({
    text: text, highlightText,
    volume: 1,
    rate: 0.91,
    highlightProps: { style: { color: "white", backgroundColor: "#1af", } }
    , lang, voiceURI,
  });
  return (
    <>
      <div className="App">
        <div>
          <label htmlFor="lang">Dil: </label>
          <select
            id="lang"
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              setVoiceURI("");
            }}
          >
            <option value="">Dil Seç</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="voice">Konuşmacı: </label>
          <select id="voice" value={voiceURI} onChange={(e) => setVoiceURI(e.target.value)}>
            <option value="">Konuşmacı Seç</option>
            {voices
              .filter((voice) => !lang || voice.lang === lang)
              .map(({ voiceURI }) => (
                <option key={voiceURI} value={voiceURI}>
                  {voiceURI}
                </option>
              ))}
          </select>
        </div>
        <div style={{ display: "flex", columnGap: "0.5rem" }}>
          {speechStatus !== "started" ? <button onClick={start}>Start</button> : <button onClick={pause}>Pause</button>}
          <button onClick={stop}>Stop</button>
        </div>
        <header className="App-header">
          <div style={{ display: "flex", padding: 70, flexDirection: "column", rowGap: "1rem" }}>
            <Text />
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    </>
  );
}

export default App;
