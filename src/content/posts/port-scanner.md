---
author: Durmuş Efe Özhan
pubDatetime: 2026-08-01T12:00:00Z
title: "Multi-threaded Port Scanner & Banner Grabber in Python"
featured: true
draft: false
tags:
  - python
  - cybersecurity
  - networking
  - cli
  - multithreading
description: A high-performance multi-threaded CLI port scanner with automated banner grabbing and flexible export formats.
---

A concurrent TCP port scanner and service banner grabber built with Python's `socket` and `concurrent.futures` modules, designed for authorized reconnaissance and network benchmarking.

---

## CLI Demonstration

![Port Scanner CLI Demonstration](/projects/port-scanner-cli.png)
*Figure: Active scan on scanme.nmap.org demonstrating concurrent port detection, banner retrieval (HTTP & SSH), and scan benchmarks.*

---

## Key Features

- **Concurrent Execution:** Configurable worker pool via `ThreadPoolExecutor` for fast multi-threaded scanning.
- **Service Banner Grabbing:** Automatic service discovery and version identification across open TCP sockets.
- **Flexible Targets & Ranges:** Supports single IPs, domains, explicit port lists (`-p 22,80,443`), top 100 ports, and custom ranges (`1-1024`).
- **Export Formats:** Structured export capabilities to JSON and standard text logs.

---

## Usage Examples

```bash
# Scan Top 100 standard ports
python port_scanner.py 192.168.1.1 --top100

# Target specific ports with custom thread count and timeout
python port_scanner.py scanme.nmap.org -p 22,80,443 -w 100 -t 1.0

# Export results to JSON
python port_scanner.py target.local -p 1-1024 -o scan_results.json

---

## 📦 Repository & Source Code

Source code and CLI documentation are available on GitHub:

👉 [https://github.com/EfeOzhan48/-port-scanner](https://github.com/EfeOzhan48/-port-scanner)