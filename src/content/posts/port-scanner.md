---
author: Durmuş Efe Özhan
pubDatetime: 2026-07-15T10:00:00Z
title: "Multi-Threaded CLI Port Scanner"
featured: true
draft: false
tags:
  - python
  - networking
  - cli
  - cybersecurity
description: Python ile geliştirilmiş, harici kütüphane gerektirmeyen, paralel çalışan hızlı CLI port tarayıcı ve servis tespit aracı.
---

Python ile yazılmış, ek bir harici bağımlılık gerektirmeyen, hafif ve yüksek performanslı bir komut satırı (CLI) port tarayıcısıdır.

---

## Öne Çıkan Özellikler

- **Paralel Tarama:** Aynı anda 100 porta birden eşzamanlı (multi-threaded) soket bağlantısı.
- **Servis Tanıma:** Standart portlar üzerinde SSH, HTTP, FTP, MySQL vb. servislerin tespiti.
- **Banner Grabbing:** Açık servislerin versiyon ve başlık bilgilerini okuma.
- **Esnek Port Seçimi:** Aralık, liste veya en popüler 100 port modu desteği.
- **Raporlama:** Tarama çıktılarını doğrudan dosyaya kaydetme yeteneği.

---

## Kullanım Örnekleri

```bash
# Temel tarama (1-1024 arası portlar)
python port_scanner.py 192.168.1.1

# Belirli portları tara
python port_scanner.py 192.168.1.1 -p 80,443,8080

# Geniş port aralığı tara (hızlı timeout ve yüksek worker ile)
python port_scanner.py 192.168.1.1 -p 1-65535 -w 500 -t 0.3

# En yaygın 100 portu tara
python port_scanner.py 192.168.1.1 --top100

# Sonuçları dosyaya kaydet
python port_scanner.py 192.168.1.1 -o rapor.txt