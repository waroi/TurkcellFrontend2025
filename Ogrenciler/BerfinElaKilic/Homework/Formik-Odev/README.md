Sonradan yapılacak düzeltmeler unutulmasın
1-User local storage giriş yapar yapmaz setlendiği için artık view lerdeki gereksiz user fetchleme operasyonlarının silinmesi lazım
2-useActions içindeki aksiyonların her biri yeni bir context'e eklenmeli
3-protectionlar(HOC) henüz tüm projeye dağıtılmdı dağıtılsın
4-yeni bileşenlerimiz prensiplere uygun değil hepsi yapımıza uygun hale geitirilerek temiz koda dnüştürülsün.(fetchlerin HOC bileşen ile çekilmesi, bileşenlerin küçük birimlere ayrılması gibi)
5-
