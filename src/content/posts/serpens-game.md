---
author: Durmuş Efe Özhan
pubDatetime: 2026-08-01T12:00:00Z
title: "Serpens Game: 5 Seviyeli Retro Yılan Macerası"
featured: true
draft: false
tags:
  - python
  - pygame
  - gamedev
  - arcade
  - retro
description: İsmini gökyüzündeki ikiye bölünmüş Serpens takımyıldızından alan, 5 farklı zorluk seviyesine ve checkpoint sistemine sahip Pygame projesi.
---

> **Serpens**, Latince'de "yılan" anlamına gelir ve gökyüzündeki tek ikiye bölünmüş takımyıldızının adıdır. *Ophiuchus (Yılancı)* tarafından **Serpens Caput** (yılanın başı) ve **Serpens Cauda** (yılanın kuyruğu) olarak ikiye ayrılır.

Bu proje, klasik arcade yılan oyununu 5 kademeli zorluk mimarisi, checkpoint kayıt sistemi ve retro görsel/font atmosferiyle modern bir oynanışa kavuşturur.

---

## Oynanış ve Kontroller

Yemi toplayarak seviye hedefine ulaşın. Duvarlara veya kendi gövdenize çarparsanız oyun sona erer.

| Tuş | Eylem |
| :--- | :--- |
| `←` `→` `↑` `↓` | Yılanı Yönlendir |
| `Sol Shift` | Hızlan (Boost) |

---

## Seviyeler (Levels)

Her seviye geçişinde yılanın boyutu sıfırlanır ve yeni bir zorluk mekaniği devreye girer:

| Level | Hedef | Özellik |
| :---: | :--- | :--- |
| **1** | 15 Yiyecek | Klasik yılan oynanışı |
| **2** | 10 Yiyecek | Daha hızlı yılan |
| **3** | 5 Yiyecek | Haritaya eklenen engeller |
| **4** | 3 Yiyecek | Engeller + Hareketli yem |
| **5** | 1 Yiyecek | Çok hızlı hareket eden özel yem |

---

## Öne Çıkan Özellikler

- **Checkpoint Sistemi:** İlerleme durumu `checkpoint.json` dosyasına kaydedilir; aynı kullanıcı adıyla oyuna girildiğinde kalınan seviyeden devam edilebilir.
- **Retro Tipografi:** Klasik arcade hissini korumak için `PressStart2P` piksel yazı tipi entegrasyonu.
- **Dinamik Fizik & Hız:** Seviyeler ilerledikçe değişen kare hızı (FPS) ve engel düzenleri.

---

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için Python ortamınızda `pygame` kütüphanesinin kurulu olması yeterlidir:

```bash
# Gerekli bağımlılığı yükleyin
pip install pygame

# Oyunu başlatın
python serpens_game.py