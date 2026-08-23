---

**5. `src/content/posts/port-scanner.md`**

```markdown
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
description: Fast, zero-dependency multi-threaded command line port scanner and service detection tool written in Python.
---

A lightweight, high-speed CLI port scanner built entirely in native Python with zero external third-party dependencies.

---

## Key Features

- **Parallel Scanning:** Simultaneous socket connections across 100 concurrent worker threads.
- **Service Detection:** Automatic identification of common services (SSH, HTTP, FTP, MySQL, etc.).
- **Banner Grabbing:** Reads service headers and version banners on open ports.
- **Flexible Targets:** Supports custom ranges, comma-separated lists, or a dedicated top-100 preset.
- **Output Logging:** Export scan results directly to a text report.

---

## Usage Examples

```bash
# Basic scan (Ports 1-1024)
python port_scanner.py 192.168.1.1

# Specific ports
python port_scanner.py 192.168.1.1 -p 80,443,8080

# Full range scan with custom workers and timeout
python port_scanner.py 192.168.1.1 -p 1-65535 -w 500 -t 0.3

# Scan top 100 most common ports
python port_scanner.py 192.168.1.1 --top100

# Save results to a file
python port_scanner.py 192.168.1.1 -o report.txt

ArgumentsArgumentDescriptionDefaulttargetTarget IP address or domain—-pPort range or comma-separated list1-1024-tSocket connection timeout (seconds)1.0-wConcurrent worker threads100-oOutput file path—--top100Quick scan for top 100 common ports—InstallationRequires Python 3.9+ (no external libraries needed).

# Clone the repository
git clone [https://github.com/EfeOzhan48/port-scanner.git](https://github.com/EfeOzhan48/port-scanner.git)
cd port-scanner

# Test locally
python port_scanner.py 127.0.0.1
⚠️ Disclaimer: This tool is intended strictly for educational purposes and authorized penetration testing on systems you own or have explicit written permission to test.

License & Repository
License: MIT

GitHub: github.com/EfeOzhan48/port-scanner