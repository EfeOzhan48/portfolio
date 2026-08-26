---
author: Durmuş Efe Özhan
pubDatetime: 2026-08-01T12:00:00Z
title: "Serpens Game: 5-Level Retro Snake Adventure"
featured: true
draft: false
tags:
  - python
  - pygame
  - gamedev
  - arcade
  - retro
description: A 5-level retro snake game built with Pygame, inspired by the split Serpens constellation and featuring an active checkpoint system.
---

> **Serpens** is Latin for "snake" and the only constellation split into two parts across the sky—divided into **Serpens Caput** (the head) and **Serpens Cauda** (the tail) by *Ophiuchus (the Serpent Bearer)*.

This project revamps the classic arcade snake game with 5 escalating challenge tiers, checkpoint persistence, and retro pixel typography.

---

## Screenshots

![Serpens Start Screen](/projects/serpens-game-start-screen.png)
*Figure 1: Player profile entry and persistent session initialization.*

![Serpens Gameplay Level 1](/projects/serpens-game-screen.png)
*Figure 2: Level 1 classic arcade mode with target tracking and active HUD.*

![Serpens Level 3 Obstacles](/projects/serpens-game-level-3-screen.png)
*Figure 3: Level 3 introducing complex static obstacle barriers.*

![Serpens Game Over & Checkpoint](/projects/serpens-game-game-over-screen.png)
*Figure 4: Active checkpoint restart system.*

---

## Gameplay & Controls

Collect food items to reach the level target. Hitting walls, obstacles, or your own tail ends the round.

| Key | Action |
| :--- | :--- |
| `←` `→` `↑` `↓` | Navigate Snake |
| `Left Shift` | Speed Boost |

---

## Level Breakdown

Each level resets snake length and introduces a new mechanic:

| Level | Target | Mechanic |
| :---: | :--- | :--- |
| **1** | 15 Food | Classic snake mechanics |
| **2** | 10 Food | Increased base speed |
| **3** | 5 Food | Static obstacle layout |
| **4** | 3 Food | Obstacles + Moving food |
| **5** | 1 Food | Ultra-fast dodging food |

---

## Key Features

- **Checkpoint System:** State is automatically saved to `checkpoint.json`; resuming with the same profile picks up where you left off.
- **Retro Typography:** Integrated `PressStart2P` pixel font for authentic arcade aesthetic.
- **Dynamic Physics:** Progressive difficulty scaling with variable game ticks and obstacle barriers.

---

## Installation & Running

Ensure you have Python and `pygame` installed:

```bash
# Install dependency
pip install pygame

# Run game
python serpens_game.py

Requirements
-Python 3.x
-pygame
-PressStart2P-Regular.ttf (Included in repository)

📦 Repository & Source Code
Source code, assets, and documentation are available on GitHub:

👉 https://github.com/EfeOzhan48/serpens-game