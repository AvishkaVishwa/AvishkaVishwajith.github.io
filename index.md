---
layout: default
title: Home
---

<section style="margin-bottom: 6rem; padding-top: 2rem;">
    <div style="display: inline-block; padding: 6px 14px; border:  1px solid var(--neon-green); color: var(--neon-green); font-family: var(--font-mono); font-size: 0.75rem; border-radius: 20px; margin-bottom: 2rem; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">
        ● System Status:  Operational
    </div>
    
    <h1 style="font-size: clamp(2.5rem, 8vw, 5rem); font-weight: 800; color: #fff; line-height: 1; letter-spacing: -3px; margin-bottom: 1.5rem;">
        Avishka<br><span style="color: var(--neon-green)">Vishwajith</span>
    </h1>
    
    <p style="font-family: var(--font-mono); font-size: 1.2rem; color: var(--text-light); margin-bottom: 2rem; opacity: 0.9;">
        [ Undergraduate in Instrumentation & Automation ]
    </p>
    
    <p style="max-width: 700px; font-size: 1.15rem; color: var(--text-gray); margin-bottom: 3.5rem; line-height: 1.8;">
        I am a Level 4 Undergraduate student reading for the <strong style="color: var(--text-light);">Bachelor of Engineering Technology Honours in Instrumentation and Automation</strong> at the University of Colombo.  I specialize in <strong style="color: var(--neon-green);">Embedded Systems, PCB Design, and Power Electronics</strong>. 
    </p>
    
    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
        <a href="{{ '/projects/' | relative_url }}" class="btn">View My Projects <i class="fas fa-arrow-right"></i></a>
        <a href="{{ '/about/' | relative_url }}" class="btn" style="background: transparent; border: 2px solid var(--neon-green); color: var(--neon-green);">More About Me</a>
    </div>
</section>

<section style="margin-top: 8rem;">
    <h2 class="section-title">Technical Skills</h2>
    <div class="skills-grid">
        <div class="skill-item">
            <i class="fas fa-microchip skill-icon"></i>
            <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 4px; color: var(--text-light);">ESP32 (IDF)</h3>
                <p style="font-size: 0.85rem; color: var(--text-gray); margin: 0;">Embedded development with ESP-IDF framework</p>
            </div>
        </div>
        
        <div class="skill-item">
            <i class="fas fa-microchip skill-icon"></i>
            <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 4px; color: var(--text-light);">STM32 (CubeIDE)</h3>
                <p style="font-size: 0.85rem; color: var(--text-gray); margin: 0;">ARM Cortex-M microcontroller programming</p>
            </div>
        </div>
        
        <div class="skill-item">
            <i class="fas fa-drafting-compass skill-icon"></i>
            <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 4px; color: var(--text-light);">KiCad</h3>
                <p style="font-size: 0.85rem; color: var(--text-gray); margin: 0;">PCB design and schematic capture</p>
            </div>
        </div>
        
        <div class="skill-item">
            <i class="fas fa-drafting-compass skill-icon"></i>
            <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 4px; color: var(--text-light);">Altium</h3>
                <p style="font-size: 0.85rem; color: var(--text-gray); margin: 0;">Professional PCB design software</p>
            </div>
        </div>
        
        <div class="skill-item">
            <i class="fab fa-python skill-icon"></i>
            <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 4px; color: var(--text-light);">Python</h3>
                <p style="font-size: 0.85rem; color: var(--text-gray); margin: 0;">Automation and data processing</p>
            </div>
        </div>
        
        <div class="skill-item">
            <i class="fas fa-code skill-icon"></i>
            <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 4px; color: var(--text-light);">C/C++</h3>
                <p style="font-size:  0.85rem; color: var(--text-gray); margin: 0;">Embedded systems programming</p>
            </div>
        </div>
    </div>
</section>

<section style="margin-top:  8rem;">
    <h2 class="section-title">Featured Projects</h2>
    <p style="color: var(--text-gray); margin-bottom: 3rem; font-size: 1.1rem;">
        A showcase of my latest work in robotics, IoT, and embedded systems.
    </p>
    
    <div class="portfolio-grid">
        <div class="project-card">
            <span class="project-tech">ESP32-S3 / TB6612FNG / MPU6050</span>
            <h3>RoboCore 2.0</h3>
            <p>A custom self-balancing robot controller featuring advanced motion control and sensor fusion algorithms with PID control implementation.</p>
            <a href="/2025/12/26/robocore-intro.html" class="project-link">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="project-card">
            <span class="project-tech">IoT / Power Electronics</span>
            <h3>Wireless Grow Light</h3>
            <p>Automated plant illumination system with remote actuator control for optimal plant growth conditions using wireless communication.</p>
            <a href="{{ '/projects/' | relative_url }}" class="project-link">View Details <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="project-card">
            <span class="project-tech">KiCad / PCB Design</span>
            <h3>Custom Breakout Boards</h3>
            <p>USB-to-TTL and ESP32 Breakout boards designed for development and prototyping workflows with professional-grade layout. </p>
            <a href="{{ '/projects/' | relative_url }}" class="project-link">View Details <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</section>
