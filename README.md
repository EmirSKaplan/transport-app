# Customer-Order Management System (Node.js)

Bu proje, Node.js ile yazılmış basit bir müşteri, şoför ve taşıyıcı yönetim sistemidir. Projede, her kullanıcı tipi için birer sınıf (`Customer`, `Driver`, `Transporter`) oluşturulmuş ve bu sınıfların verileri JSON dosyalarında saklanmaktadır.

## Özellikler

- `Customer`, `Driver` ve `Transporter` sınıfları
- Flatted ile döngüsel veri yapılarının JSON olarak kaydedilmesi
- Veri kaydetme, güncelleme, silme ve yükleme işlemleri (`BaseDatabase`)
- Temiz kod yapısı
- Tamamen dosya tabanlı basit veritabanı mantığı
- Öğrenme amaçlı geliştirilmiştir

## Amaç

Bu proje; veri yönetimini, sınıf yapısını, dosya işlemlerini ve JavaScript’te nesne yönelimli programlamayı öğrenmek amacıyla geliştirilmiştir. `Object.assign`, `Array.find`, `JSON.stringify` gibi kavramları pekiştirmek için uygundur.

## Kurulum

```bash
npm install
node index.js
