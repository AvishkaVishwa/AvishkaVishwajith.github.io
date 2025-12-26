---
layout: default
title: Home
---

<section style="padding: 40px 0;">
    <h1 style="font-size: 4rem; font-weight: 700; color: #fff; line-height: 1.1;">{{ site.title }}</h1>
    <p style="color: var(--accent); font-family: var(--font-mono); font-size: 1.2rem; margin-bottom: 1rem;">
        Automation & Electronics Enthusiast
    </p>
    <p style="max-width: 650px; font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2.5rem;">
        Undergraduate in Instrumentation & Automation Technology. Specialized in building low-latency embedded systems and scalable IoT solutions.
    </p>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="{{ '/projects/' | relative_url }}" class="btn">Explore Projects <i class="fas fa-arrow-right"></i></a>
        <a href="{{ '/about/' | relative_url }}" style="color: var(--text-main); text-decoration: none; display: flex; align-items: center; font-family: var(--font-mono); border: 1px solid var(--border); padding: 0.8rem 1.5rem; border-radius: 4px;">Learn More</a>
    </div>
</section>

<section style="margin-top: 6rem;">
    <h2 class="section-title">Core Skills</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
        <div style="background: var(--surface-dark); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border);">
            <i class="fas fa-microchip" style="color: var(--accent); font-size: 1.5rem; margin-bottom: 1rem;"></i>
            <h3 style="font-family: var(--font-mono); font-size: 1rem;">Firmware</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">C/C++, ESP-IDF, STM32 HAL</p>
        </div>
        <div style="background: var(--surface-dark); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border);">
            <i class="fas fa-project-diagram" style="color: var(--accent); font-size: 1.5rem; margin-bottom: 1rem;"></i>
            <h3 style="font-family: var(--font-mono); font-size: 1rem;">PCB Design</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">KiCad, Altium, High-Speed Layout</p>
        </div>
        <div style="background: var(--surface-dark); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border);">
            <i class="fas fa-cloud-upload-alt" style="color: var(--accent); font-size: 1.5rem; margin-bottom: 1rem;"></i>
            <h3 style="font-family: var(--font-mono); font-size: 1rem;">IoT Stacks</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">MQTT, Blynk, AWS IoT Core</p>
        </div>
    </div>
</section>
