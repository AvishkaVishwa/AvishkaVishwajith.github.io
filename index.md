---
title: Home
---

<div class="hero">
  <h1>Electro-man</h1>
  <p>
    I build electronics, robotics, and embedded systems: PCB design, ESP32/STM32 firmware, and IoT dashboards.
  </p>
  <a class="btn primary" href="/contact/">Hire me</a>
  <a class="btn" href="/portfolio/">View Portfolio</a>
</div>

<div class="section-title">What I do</div>
<div class="grid">
  <div class="card">
    <h3>PCB Design</h3>
    <p>Schematic + layout in KiCad, BOM help, production-ready files.</p>
  </div>
  <div class="card">
    <h3>Firmware</h3>
    <p>ESP32/STM32 drivers, control logic, communication (MQTT/HTTP/I2C/SPI).</p>
  </div>
  <div class="card">
    <h3>Prototyping</h3>
    <p>Robots, sensor systems, motor control, and test-ready demos.</p>
  </div>
</div>

<div class="section-title">Featured Products</div>
<div class="grid">
  {% for p in site.products limit:3 %}
  <a class="card" href="{{ p.url }}">
    <h3>{{ p.title }}</h3>
    <p>{{ p.summary }}</p>
  </a>
  {% endfor %}
</div>

<div class="section-title">Latest Blog Posts</div>
<div class="grid">
  {% for post in site.posts limit:3 %}
  <a class="card" href="{{ post.url }}">
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
  </a>
  {% endfor %}
</div>
