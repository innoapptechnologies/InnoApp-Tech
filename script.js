// Navbar Scroll Effect
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        try {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        } catch (error) {
            console.error('Error handling navbar scroll:', error);
        }
    });
} else {
    console.warn('Header element not found');
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelector('.nav-links');
const navSectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        try {
            navLinks.classList.toggle('mobile-active');
            // Simple toggle animation for hamburger
            const spans = menuToggle.querySelectorAll('span');
            if (spans.length >= 3) {
                spans[0].style.transform = navLinks.classList.contains('mobile-active') ? 'rotate(45deg) translate(5px, 5px)' : '';
                spans[1].style.opacity = navLinks.classList.contains('mobile-active') ? '0' : '1';
                spans[2].style.transform = navLinks.classList.contains('mobile-active') ? 'rotate(-45deg) translate(7px, -7px)' : '';
            }
        } catch (error) {
            console.error('Error toggling mobile menu:', error);
        }
    });
} else {
    console.warn('Mobile menu elements not found');
}

const updateActiveNavLink = () => {
    try {
        const scrollPosition = window.scrollY + 140;
        let activeId = 'home';

        navSectionLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute('href'));
            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeId = section.id;
            }
        });

        navSectionLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
        });
    } catch (error) {
        console.error('Error updating active nav link:', error);
    }
};

if (navSectionLinks.length > 0) {
    navSectionLinks.forEach((link) => {
        link.addEventListener('click', () => {
            try {
                navSectionLinks.forEach((navLink) => navLink.classList.remove('active'));
                link.classList.add('active');
            } catch (error) {
                console.error('Error handling nav link click:', error);
            }
        });
    });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('[data-reveal]');
const revealOnScroll = () => {
    try {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                const delay = el.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    el.classList.add('active');
                }, delay);
            }
        });
    } catch (error) {
        console.error('Error in scroll reveal:', error);
    }
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// Three.js Background (Particles)
const initThreeJS = () => {
    const canvas = document.getElementById('three-canvas');
    if (!canvas) {
        console.warn('Three.js canvas not found');
        return;
    }

    // Check if THREE is available
    if (typeof THREE === 'undefined') {
        console.error('THREE.js not loaded');
        return;
    }

    try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x00f2ff, // Your brand blue color
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Mouse Movement Effect
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
    });

    const animate = () => {
        requestAnimationFrame(animate);
        
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.001;

        // Smooth follow mouse
        particlesMesh.position.x += (mouseX - particlesMesh.position.x) * 0.05;
        particlesMesh.position.y += (-mouseY - particlesMesh.position.y) * 0.05;

        renderer.render(scene, camera);
    };

    animate();

        // Add resize listener with error handling
        const handleResize = () => {
            try {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            } catch (error) {
                console.error('Error handling Three.js resize:', error);
            }
        };
        window.addEventListener('resize', handleResize);
    } catch (error) {
        console.error('Error initializing Three.js:', error);
    }
};

// Hero 3D Model (Web World)
const initHeroModel = () => {
    const model = document.getElementById('hero-3d-model');
    const desktopSlot = document.getElementById('desktop-model-slot');
    const mobileSlot = document.getElementById('mobile-model-slot');
    if (!model || !desktopSlot || !mobileSlot) {
        console.warn('Hero model elements not found');
        return;
    }

    // Check if THREE is available
    if (typeof THREE === 'undefined') {
        console.error('THREE.js not loaded');
        return;
    }

    const moveModel = () => {
        try {
            if (window.innerWidth <= 768) {
                mobileSlot.appendChild(model);
            } else {
                desktopSlot.appendChild(model);
            }
        } catch (error) {
            console.error('Error moving model:', error);
        }
    };

    moveModel();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    model.appendChild(renderer.domElement);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Web World Group
    const webWorld = new THREE.Group();
    scene.add(webWorld);

    // Create real world texture for globe
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const context = canvas.getContext('2d');
    
    // Create realistic ocean background
    const oceanGradient = context.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, canvas.width/2
    );
    oceanGradient.addColorStop(0, '#002244');
    oceanGradient.addColorStop(0.3, '#003366');
    oceanGradient.addColorStop(0.7, '#001a33');
    oceanGradient.addColorStop(1, '#000d22');
    context.fillStyle = oceanGradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add ocean waves texture
    context.globalAlpha = 0.1;
    context.strokeStyle = '#004466';
    context.lineWidth = 0.5;
    
    for (let i = 0; i < 100; i++) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        const endX = startX + (Math.random() - 0.5) * 100;
        const endY = startY + (Math.random() - 0.5) * 50;
        
        context.beginPath();
        context.moveTo(startX, startY);
        context.quadraticCurveTo(
            (startX + endX) / 2 + (Math.random() - 0.5) * 20,
            (startY + endY) / 2 + (Math.random() - 0.5) * 20,
            endX, endY
        );
        context.stroke();
    }
    
    context.globalAlpha = 1;
    
    // Draw realistic continents with better shapes
    const drawContinent = (points, color) => {
        // Create gradient for realistic land appearance
        const gradient = context.createRadialGradient(
            canvas.width/2, canvas.height/2, 0,
            canvas.width/2, canvas.height/2, canvas.width/2
        );
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.7, color);
        gradient.addColorStop(1, '#1a4d1a');
        
        context.fillStyle = gradient;
        context.strokeStyle = '#004d4d';
        context.lineWidth = 1;
        context.globalAlpha = 0.9;
        
        context.beginPath();
        points.forEach((point, index) => {
            const x = ((point[0] + 180) / 360) * canvas.width;
            const y = ((90 - point[1]) / 180) * canvas.height;
            
            if (index === 0) {
                context.moveTo(x, y);
            } else {
                context.lineTo(x, y);
            }
        });
        context.closePath();
        context.fill();
        context.stroke();
        
        // Add texture to continents
        context.globalAlpha = 0.1;
        context.fillStyle = '#ffffff';
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            context.beginPath();
            context.arc(x, y, 1, 0, Math.PI * 2);
            context.fill();
        }
        
        context.globalAlpha = 1;
    };
    
    // North America (more accurate shape)
    drawContinent([
        [-165, 70], [-160, 68], [-155, 65], [-150, 60], [-145, 55],
        [-140, 50], [-135, 45], [-130, 40], [-125, 35], [-120, 30],
        [-115, 25], [-110, 20], [-105, 15], [-100, 10], [-95, 5],
        [-90, 0], [-85, 5], [-80, 10], [-75, 15], [-70, 20],
        [-65, 25], [-70, 30], [-75, 35], [-80, 40], [-85, 45],
        [-90, 50], [-95, 55], [-100, 60], [-105, 65], [-110, 70],
        [-115, 72], [-120, 70], [-125, 68], [-130, 65], [-135, 70],
        [-140, 75], [-145, 72], [-150, 70], [-155, 72], [-160, 70],
        [-165, 70]
    ], '#3d7d3d');
    
    // South America (more accurate shape)
    drawContinent([
        [-80, 10], [-75, 5], [-70, 0], [-68, -5], [-65, -10],
        [-63, -15], [-65, -20], [-68, -25], [-70, -30], [-72, -35],
        [-75, -40], [-78, -45], [-80, -50], [-82, -55], [-79, -52],
        [-76, -48], [-73, -44], [-70, -40], [-67, -35], [-64, -30],
        [-61, -25], [-58, -20], [-55, -15], [-52, -10], [-55, -5],
        [-60, 0], [-65, 5], [-70, 8], [-75, 10], [-80, 10]
    ], '#4d8d4d');
    
    // Europe (more accurate shape)
    drawContinent([
        [-10, 70], [-5, 72], [0, 75], [5, 73], [10, 70], [15, 68],
        [20, 65], [25, 60], [30, 55], [35, 50], [40, 45], [45, 40],
        [50, 35], [45, 30], [40, 35], [35, 40], [30, 45], [25, 50],
        [20, 55], [15, 60], [10, 65], [5, 68], [0, 70], [-5, 72],
        [-10, 70]
    ], '#4d8d4d');
    
    // Africa (more accurate shape)
    drawContinent([
        [-20, 35], [-15, 32], [-10, 30], [-5, 28], [0, 25], [5, 20],
        [10, 15], [15, 10], [20, 5], [25, 0], [30, -5], [35, -10],
        [40, -15], [45, -20], [50, -25], [55, -30], [50, -35],
        [45, -32], [40, -30], [35, -25], [30, -20], [25, -15],
        [20, -10], [15, -5], [10, 0], [5, 5], [0, 10], [-5, 15],
        [-10, 20], [-15, 25], [-20, 30], [-25, 32], [-20, 35]
    ], '#8b7d6b');
    
    // Asia (more accurate shape)
    drawContinent([
        [40, 70], [50, 68], [60, 65], [70, 60], [80, 55], [90, 50],
        [100, 45], [110, 40], [120, 35], [130, 30], [140, 25], [150, 20],
        [145, 15], [140, 10], [135, 5], [130, 0], [125, -5], [120, -10],
        [115, -5], [110, 0], [105, 5], [100, 10], [95, 15], [90, 20],
        [85, 25], [80, 30], [75, 35], [70, 40], [65, 45], [60, 50],
        [55, 55], [50, 60], [45, 65], [40, 70]
    ], '#3d7d3d');
    
    // Australia (more accurate shape)
    drawContinent([
        [110, -10], [115, -15], [120, -20], [125, -25], [130, -30],
        [135, -35], [140, -40], [145, -35], [150, -30], [155, -25],
        [150, -20], [145, -15], [140, -10], [135, -5], [130, 0],
        [125, -5], [120, -10], [115, -15], [110, -10]
    ], '#8b7d6b');
    
    // Greenland
    drawContinent([
        [-50, 85], [-45, 83], [-40, 80], [-35, 75], [-40, 70],
        [-45, 72], [-50, 75], [-55, 80], [-50, 85]
    ], '#6d9d6d');
    
    // Madagascar
    drawContinent([
        [45, -15], [48, -18], [50, -22], [48, -25], [45, -22],
        [43, -18], [45, -15]
    ], '#6d9d6d');
    
    // Japan
    drawContinent([
        [135, 35], [138, 38], [142, 40], [145, 38], [142, 35],
        [138, 32], [135, 35]
    ], '#6d9d6d');
    
    // New Zealand
    drawContinent([
        [170, -35], [175, -40], [180, -42], [175, -38], [170, -35]
    ], '#6d9d6d');
    
    // Add tech overlay on continents
    context.globalAlpha = 0.3;
    context.strokeStyle = '#00f2ff';
    context.lineWidth = 1;
    
    // Add tech grid on continents
    for (let x = 0; x < canvas.width; x += 50) {
        for (let y = 0; y < canvas.height; y += 50) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + 25, y);
            context.lineTo(x + 25, y + 25);
            context.stroke();
        }
    }
    
    context.globalAlpha = 1;
    
    // Add major cities with realistic glow and size variation
    const cities = [
        { lon: -74, lat: 40, size: 'large', importance: 'major' }, // New York
        { lon: -118, lat: 34, size: 'large', importance: 'major' }, // Los Angeles
        { lon: 0, lat: 51.5, size: 'large', importance: 'major' }, // London
        { lon: 2.3, lat: 48.9, size: 'large', importance: 'major' }, // Paris
        { lon: 139.7, lat: 35.7, size: 'large', importance: 'major' }, // Tokyo
        { lon: 116.4, lat: 39.9, size: 'large', importance: 'major' }, // Beijing
        { lon: 77.2, lat: 28.6, size: 'large', importance: 'major' }, // New Delhi
        { lon: -46.6, lat: -23.5, size: 'large', importance: 'major' }, // Rio de Janeiro
        { lon: -46.7, lat: -23.6, size: 'large', importance: 'major' }, // São Paulo
        { lon: 28.0, lat: -26.2, size: 'medium', importance: 'major' }, // Johannesburg
        { lon: 151.2, lat: -33.9, size: 'large', importance: 'major' }, // Sydney
        { lon: 37.6, lat: 55.8, size: 'large', importance: 'major' }, // Moscow
        { lon: -122.4, lat: 37.8, size: 'large', importance: 'major' }, // San Francisco
        { lon: -87.6, lat: 41.9, size: 'large', importance: 'major' }, // Chicago
        { lon: -95.4, lat: 29.8, size: 'medium', importance: 'major' }, // Houston
        { lon: -80.2, lat: 25.8, size: 'medium', importance: 'major' }, // Miami
        { lon: -70.7, lat: -33.5, size: 'medium', importance: 'major' }, // Santiago
        { lon: -58.4, lat: -34.6, size: 'large', importance: 'major' }, // Buenos Aires
        { lon: 31.2, lat: 30.0, size: 'medium', importance: 'major' }, // Cairo
        { lon: 35.7, lat: 39.9, size: 'medium', importance: 'major' }, // Ankara
        { lon: 31.8, lat: 35.7, size: 'small', importance: 'major' }, // Jerusalem
        { lon: 68.7, lat: 25.4, size: 'medium', importance: 'major' }, // Karachi
        { lon: 90.4, lat: 23.8, size: 'medium', importance: 'major' }, // Dhaka
        { lon: 100.5, lat: 13.7, size: 'large', importance: 'major' }, // Bangkok
        { lon: 106.8, lat: -6.2, size: 'large', importance: 'major' }, // Jakarta
        { lon: 103.8, lat: 1.3, size: 'large', importance: 'major' }, // Singapore
        { lon: 121.5, lat: 25.0, size: 'medium', importance: 'major' }, // Taipei
        { lon: 126.9, lat: 37.5, size: 'large', importance: 'major' }, // Seoul
        { lon: -79.4, lat: 43.7, size: 'medium', importance: 'major' }, // Toronto
        { lon: -73.6, lat: 45.5, size: 'medium', importance: 'major' }, // Montreal
        { lon: -99.1, lat: 19.4, size: 'large', importance: 'major' }, // Mexico City
        { lon: -75.6, lat: -10.2, size: 'medium', importance: 'major' }, // Lima
        { lon: 18.5, lat: -33.9, size: 'small', importance: 'major' }, // Cape Town
        { lon: 39.9, lat: 21.4, size: 'small', importance: 'major' }, // Mecca
        { lon: 48.5, lat: 29.4, size: 'small', importance: 'major' }, // Kuwait City
        { lon: 50.5, lat: 26.0, size: 'small', importance: 'major' }, // Doha
        { lon: 54.4, lat: 24.5, size: 'medium', importance: 'major' }, // Abu Dhabi
        { lon: 44.2, lat: 25.3, size: 'medium', importance: 'major' }, // Riyadh
        { lon: 44.0, lat: 33.3, size: 'small', importance: 'major' }, // Baghdad
        { lon: 69.2, lat: 34.5, size: 'small', importance: 'major' }, // Kabul
        { lon: 71.5, lat: 33.7, size: 'medium', importance: 'major' }, // Islamabad
        { lon: 149.1, lat: -35.3, size: 'small', importance: 'major' }, // Canberra
        { lon: 174.8, lat: -36.9, size: 'small', importance: 'major' }, // Wellington
        // Add more medium and small cities for realism
        { lon: -0.1, lat: 51.5, size: 'medium', importance: 'secondary' }, // London precise
        { lon: 10.7, lat: 59.9, size: 'small', importance: 'secondary' }, // Stockholm
        { lon: -3.7, lat: 40.4, size: 'medium', importance: 'secondary' }, // Madrid
        { lon: 135.7, lat: 35.0, size: 'medium', importance: 'secondary' }, // Osaka
        { lon: 120.2, lat: 23.1, size: 'medium', importance: 'secondary' }, // Taipei
        { lon: -0.2, lat: 5.3, size: 'small', importance: 'secondary' }, // Accra
        { lon: 32.6, lat: -26.2, size: 'small', importance: 'secondary' }, // Pretoria
        { lon: 17.1, lat: 48.1, size: 'medium', importance: 'secondary' }, // Bratislava
        { lon: 19.0, lat: 47.5, size: 'medium', importance: 'secondary' }, // Budapest
        { lon: 12.5, lat: 41.9, size: 'medium', importance: 'secondary' }, // Rome
        { lon: -43.2, lat: -22.9, size: 'medium', importance: 'secondary' }, // Rio
        { lon: -70.7, lat: -33.4, size: 'small', importance: 'secondary' }, // Santiago precise
        { lon: 73.9, lat: 18.5, size: 'medium', importance: 'secondary' }, // Mumbai
        { lon: 77.6, lat: 13.0, size: 'medium', importance: 'secondary' }, // Bangalore
        { lon: 114.2, lat: 22.3, size: 'large', importance: 'secondary' }, // Hong Kong
        { lon: 120.0, lat: 30.7, size: 'medium', importance: 'secondary' }, // Shanghai
        { lon: 121.5, lat: 31.2, size: 'large', importance: 'secondary' }, // Shanghai precise
        { lon: -122.3, lat: 47.6, size: 'medium', importance: 'secondary' }, // Seattle
        { lon: -73.9, lat: 40.7, size: 'medium', importance: 'secondary' }, // New York precise
        { lon: -118.2, lat: 34.1, size: 'medium', importance: 'secondary' }, // Los Angeles precise
        { lon: 2.3, lat: 48.9, size: 'medium', importance: 'secondary' }, // Paris precise
        { lon: 13.4, lat: 52.5, size: 'medium', importance: 'secondary' }, // Berlin
        { lon: -0.1, lat: 51.5, size: 'medium', importance: 'secondary' }, // London precise 2
    ];
    
    // Draw cities with realistic glow and size variation
    cities.forEach(city => {
        const x = ((city.lon + 180) / 360) * canvas.width;
        const y = ((90 - city.lat) / 180) * canvas.height;
        
        // Size based on city importance
        let baseSize = city.size === 'large' ? 6 : city.size === 'medium' ? 4 : 3;
        let glowIntensity = city.importance === 'major' ? 1.0 : 0.7;
        
        // Outer glow
        context.globalAlpha = 0.2 * glowIntensity;
        context.fillStyle = '#00ffcc';
        context.beginPath();
        context.arc(x, y, baseSize * 2, 0, Math.PI * 2);
        context.fill();
        
        // Middle glow
        context.globalAlpha = 0.5 * glowIntensity;
        context.beginPath();
        context.arc(x, y, baseSize * 1.2, 0, Math.PI * 2);
        context.fill();
        
        // Core
        context.globalAlpha = 1.0 * glowIntensity;
        context.fillStyle = '#ffffff';
        context.beginPath();
        context.arc(x, y, baseSize * 0.5, 0, Math.PI * 2);
        context.fill();
    });
    
    context.globalAlpha = 1;
    
    // Add subtle tech grid overlay
    context.strokeStyle = '#00f2ff';
    context.lineWidth = 0.5;
    context.globalAlpha = 0.2;
    
    // Draw latitude lines
    for (let lat = -60; lat <= 60; lat += 30) {
        const y = ((90 - lat) / 180) * canvas.height;
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
    }
    
    // Draw longitude lines
    for (let lon = -180; lon <= 180; lon += 30) {
        const x = ((lon + 180) / 360) * canvas.width;
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
    }
    
    context.globalAlpha = 1;
    
    // Create texture from canvas
    const worldTexture = new THREE.CanvasTexture(canvas);
    worldTexture.wrapS = THREE.RepeatWrapping;
    worldTexture.wrapT = THREE.RepeatWrapping;
    
    // Create solid globe base with network texture
    const globeGeometry = new THREE.SphereGeometry(2.0, 64, 64);
    const globeMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x0a2040,
        metalness: 0.3,
        roughness: 0.4,
        clearcoat: 0.8,
        transparent: false,
        emissive: 0x0066cc,
        emissiveIntensity: 0.2,
        reflectivity: 0.6
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    webWorld.add(globe);

    // Add prominent wireframe overlay for network effect
    const wireframeGeometry = new THREE.WireframeGeometry(new THREE.SphereGeometry(2.02, 48, 48));
    const wireframeMaterial = new THREE.LineBasicMaterial({ 
        color: 0x00ffff, 
        transparent: true, 
        opacity: 1.0,
        linewidth: 2
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    webWorld.add(wireframe);
    
    // Surface grid removed - no more white circles

    // Create advanced tech world without orbital rings
    const techWorldGroup = new THREE.Group();
    
    // Orbital rings removed - no more white circles around globe
    
    // Skip wave connections - removed as requested
    
    // Create free-floating data streams (no longer tied to waves)
    const techDataStreams = [];
    const numDataStreams = 30;
    
    for (let i = 0; i < numDataStreams; i++) {
        const streamGeometry = new THREE.SphereGeometry(0.02, 8, 8);
        const streamMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00ffff,
            emissive: 0x00ffff,
            emissiveIntensity: 2.0,
            metalness: 0.9,
            roughness: 0.1,
            transparent: true,
            opacity: 0.9
        });
        
        const stream = new THREE.Mesh(streamGeometry, streamMaterial);
        
        // Assign orbital motion instead of wave paths
        const orbitRadius = 2.5 + Math.random() * 1.5;
        const orbitSpeed = 0.2 + Math.random() * 0.3;
        const orbitAngle = Math.random() * Math.PI * 2;
        const orbitTilt = Math.random() * 0.3 - 0.15;
        
        stream.userData = {
            orbitRadius: orbitRadius,
            orbitSpeed: orbitSpeed,
            orbitAngle: orbitAngle,
            orbitTilt: orbitTilt,
            progress: Math.random(),
            direction: Math.random() > 0.5 ? 1 : -1,
            pulsePhase: Math.random() * Math.PI * 2
        };
        
        techDataStreams.push(stream);
        techWorldGroup.add(stream);
    }
    
    // Create energy particles
    const energyParticles = [];
    const numEnergyParticles = 50;
    
    for (let i = 0; i < numEnergyParticles; i++) {
        const particleGeometry = new THREE.OctahedronGeometry(0.01, 0);
        const particleMaterial = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color().setHSL(Math.random(), 1.0, 0.7),
            emissive: new THREE.Color().setHSL(Math.random(), 1.0, 1.0),
            emissiveIntensity: 1.5,
            metalness: 0.8,
            roughness: 0.2,
            transparent: true,
            opacity: 0.8
        });
        
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        particle.userData = {
            spiralRadius: 2.0 + Math.random() * 1.5,
            spiralSpeed: 0.5 + Math.random() * 0.5,
            verticalSpeed: 0.2 + Math.random() * 0.2,
            angle: Math.random() * Math.PI * 2,
            height: (Math.random() - 0.5) * 3,
            colorPhase: Math.random() * Math.PI * 2,
            pulsePhase: Math.random() * Math.PI * 2
        };
        
        energyParticles.push(particle);
        techWorldGroup.add(particle);
    }
    
    webWorld.add(techWorldGroup);

    // Create enhanced connection points on globe surface
    const connectionPoints = [];
    const pointCount = 20; // More points
    
    for (let i = 0; i < pointCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        const pointGeometry = new THREE.SphereGeometry(0.12, 32, 32); // Larger and higher resolution
        const pointMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00ffff,
            emissive: 0x00f2ff,
            emissiveIntensity: 1.0,
            metalness: 0.9,
            roughness: 0.1,
            clearcoat: 0.8,
            reflectivity: 0.9
        });
        
        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        const radius = 2.1; // Scaled for 2.0 globe
        point.position.x = radius * Math.sin(phi) * Math.cos(theta);
        point.position.y = radius * Math.cos(phi);
        point.position.z = radius * Math.sin(phi) * Math.sin(theta);
        
        point.userData = {
            originalPosition: point.position.clone(),
            pulsePhase: Math.random() * Math.PI * 2,
            rotationSpeed: Math.random() * 0.02 + 0.01
        };
        
        connectionPoints.push(point);
        webWorld.add(point);
    }

    // Create enhanced orbital satellites around globe
    const satelliteCount = 12; // More satellites
    const satellites = [];
    
    for (let i = 0; i < satelliteCount; i++) {
        const satGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15); // Larger satellites
        const satMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00f2ff,
            metalness: 0.95,
            roughness: 0.05,
            emissive: 0x00f2ff,
            emissiveIntensity: 0.5,
            clearcoat: 0.9,
            reflectivity: 0.95
        });
        
        const satellite = new THREE.Mesh(satGeometry, satMaterial);
        satellite.userData = {
            orbitRadius: 2.8 + Math.random() * 0.8, // Larger orbit radius
            orbitSpeed: 0.15 + Math.random() * 0.15,
            orbitAngle: (i / satelliteCount) * Math.PI * 2,
            orbitTilt: Math.random() * 0.4 - 0.2,
            rotationAxis: new THREE.Vector3(
                Math.random() - 0.5,
                Math.random() - 0.5,
                Math.random() - 0.5
            ).normalize()
        };
        
        satellites.push(satellite);
        webWorld.add(satellite);
    }

    // Create enhanced connections between points on globe
    const globeConnections = [];
    for (let i = 0; i < connectionPoints.length; i++) {
        for (let j = i + 1; j < connectionPoints.length; j++) {
            if (Math.random() > 0.5) { // More connections
                const points = [];
                const startPoint = connectionPoints[i].position;
                const endPoint = connectionPoints[j].position;
                
                // Create enhanced curved connection over globe surface
                const segments = 30; // More segments for smoother curves
                for (let k = 0; k <= segments; k++) {
                    const t = k / segments;
                    const point = new THREE.Vector3().lerpVectors(startPoint, endPoint, t);
                    
                    // Enhanced lift effect for connections
                    const liftAmount = Math.sin(t * Math.PI) * 0.5; // Higher arc
                    point.normalize().multiplyScalar(2.0 + liftAmount); // Base radius 2.0
                    
                    points.push(point);
                }
                
                const connectionGeometry = new THREE.BufferGeometry().setFromPoints(points);
                const connectionMaterial = new THREE.LineBasicMaterial({
                    color: 0x00f2ff,
                    transparent: true,
                    opacity: 0.6
                });
                
                const connection = new THREE.Line(connectionGeometry, connectionMaterial);
                globeConnections.push(connection);
                webWorld.add(connection);
            }
        }
    }

    // Create enhanced data streams flowing along globe connections
    const dataStreamCount = 25; // More data streams
    const dataStreams = [];
    for (let i = 0; i < dataStreamCount; i++) {
        if (globeConnections.length > 0) {
            const connection = globeConnections[i % globeConnections.length];
            const streamGeometry = new THREE.SphereGeometry(0.03, 16, 16); // Slightly larger
            const streamMaterial = new THREE.MeshPhysicalMaterial({
                color: 0x00ffff,
                emissive: 0x00f2ff,
                emissiveIntensity: 1.2,
                transparent: true,
                opacity: 0.95,
                metalness: 0.8,
                roughness: 0.2,
                clearcoat: 0.7
            });
            const stream = new THREE.Mesh(streamGeometry, streamMaterial);
            
            // Extract the actual connection points
            const positions = connection.geometry.attributes.position;
            const startPoint = new THREE.Vector3(positions.getX(0), positions.getY(0), positions.getZ(0));
            const endPoint = new THREE.Vector3(positions.getX(positions.count - 1), positions.getY(positions.count - 1), positions.getZ(positions.count - 1));
            
            stream.userData = {
                startPoint: startPoint,
                endPoint: endPoint,
                connection: connection,
                progress: 0,
                speed: 0.2 + Math.random() * 0.3,
                pathPoints: [],
                currentPathIndex: 0,
                isReturning: false,
                pulsePhase: Math.random() * Math.PI * 2,
                streamColor: new THREE.Color().setHSL(0.5 + Math.random() * 0.1, 0.9, 0.7)
            };
            
            // Pre-calculate the enhanced curved path points
            const segments = 60; // More segments for smoother movement
            for (let j = 0; j <= segments; j++) {
                const t = j / segments;
                const point = new THREE.Vector3().lerpVectors(startPoint, endPoint, t);
                
                // Create enhanced arc over the surface
                const liftAmount = Math.sin(t * Math.PI) * 0.6; // Higher arc
                point.normalize().multiplyScalar(2.0 + liftAmount); // Base radius 2.0
                
                stream.userData.pathPoints.push(point);
            }
            
            dataStreams.push(stream);
            webWorld.add(stream);
        }
    }

    // Enhanced lighting system for network visualization
    const mainLight = new THREE.DirectionalLight(0x00ffff, 1.5);
    mainLight.position.set(10, 10, 10);
    scene.add(mainLight);

    // Central network light that pulses
    const networkLight = new THREE.PointLight(0x00ffff, 2.0, 200);
    networkLight.position.set(0, 0, 0);
    scene.add(networkLight);

    // Multiple accent lights for dramatic effect
    const accentLight1 = new THREE.PointLight(0x0088ff, 1.0, 150);
    accentLight1.position.set(8, 0, 0);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x00ffaa, 1.0, 150);
    accentLight2.position.set(-8, 0, 0);
    scene.add(accentLight2);

    const accentLight3 = new THREE.PointLight(0x00aaff, 1.0, 150);
    accentLight3.position.set(0, 8, 0);
    scene.add(accentLight3);

    const accentLight4 = new THREE.PointLight(0x00aaff, 1.0, 150);
    accentLight4.position.set(0, -8, 0);
    scene.add(accentLight4);

    // Subtle ambient light
    const ambientLight = new THREE.AmbientLight(0x003366, 0.4);
    scene.add(ambientLight);
    
    // Store lights for animation
    const animatedLights = [networkLight, accentLight1, accentLight2, accentLight3, accentLight4];

    camera.position.z = 5.5; // Adjusted for larger globe
    let rotationVelocityX = 0.001; // Even slower for better viewing
    let rotationVelocityY = 0.003; // Even slower for better viewing
    let isDragging = false;
    let activePointerId = null;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let colorPhase = 0;

    const updateWebWorldColors = (phase) => {
        const hue = ((phase % 1) + 1) % 1;
        const blueHue = 0.55; // Keep blue hue for consistency
        
        // Update globe color with subtle shifting
        globeMaterial.color.setHSL(blueHue, 0.95, 0.55);
        globeMaterial.emissive.setHSL(blueHue, 0.95, 0.4);
        
        // Update connection point colors
        connectionPoints.forEach((point, index) => {
            const pointHue = (blueHue + (index * 0.02)) % 1;
            point.material.color.setHSL(pointHue, 0.9, 0.8);
            point.material.emissive.setHSL(pointHue, 0.9, 0.6);
        });
        
        // Update satellite colors
        satellites.forEach((sat, index) => {
            const satHue = (blueHue + (index * 0.01)) % 1;
            sat.material.color.setHSL(satHue, 0.9, 0.6);
            sat.material.emissive.setHSL(satHue, 0.9, 0.3);
        });
    };

    const resizeModel = () => {
        moveModel();

        const width = model.clientWidth || model.parentElement?.clientWidth || 400;
        const height = model.clientHeight || model.parentElement?.clientHeight || width;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
    };

    // Zoom variables
    let originalScale = 1;
    let currentScale = 1;
    let targetScale = 1;
    let zoomVelocity = 0;
    let lastDistance = 0;
    let isZooming = false;
    
    const handlePointerDown = (event) => {
        isDragging = true;
        activePointerId = event.pointerId;
        lastPointerX = event.clientX;
        lastPointerY = event.clientY;
        model.setPointerCapture(event.pointerId);
        colorPhase += 0.08;
        updateWebWorldColors(colorPhase);
        
        // Check for pinch zoom (second pointer)
        if (event.pointerType === 'touch' && event.touches && event.touches.length === 2) {
            isZooming = true;
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            lastDistance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
            );
        }
    };

    const handlePointerMove = (event) => {
        if (!isDragging || event.pointerId !== activePointerId) return;

        const deltaX = event.clientX - lastPointerX;
        const deltaY = event.clientY - lastPointerY;

        // Handle pinch zoom on touch devices
        if (isZooming && event.touches && event.touches.length === 2) {
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            const currentDistance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
            );
            
            if (lastDistance > 0) {
                const scaleDelta = (currentDistance - lastDistance) * 0.002;
                targetScale = Math.max(0.5, Math.min(3, targetScale + scaleDelta));
                zoomVelocity = scaleDelta * 0.1;
            }
            
            lastDistance = currentDistance;
        } else {
            // Handle rotation
            webWorld.rotation.y += deltaX * 0.015;
            webWorld.rotation.x += deltaY * 0.015;

            rotationVelocityY = deltaX * 0.0015;
            rotationVelocityX = deltaY * 0.0015;
            colorPhase += (Math.abs(deltaX) + Math.abs(deltaY)) * 0.0025;
            updateWebWorldColors(colorPhase);
        }

        lastPointerX = event.clientX;
        lastPointerY = event.clientY;
    };

    const endPointerDrag = (event) => {
        if (event.pointerId !== activePointerId) return;
        isDragging = false;
        isZooming = false;
        activePointerId = null;
        lastDistance = 0;
        
        if (model.hasPointerCapture(event.pointerId)) {
            model.releasePointerCapture(event.pointerId);
        }
        
        // Auto-reset zoom when user releases
        targetScale = originalScale;
        zoomVelocity = 0;
    };

    const animate = () => {
        requestAnimationFrame(animate);
        const time = Date.now() * 0.001;

        if (!isDragging) {
            webWorld.rotation.x += rotationVelocityX;
            webWorld.rotation.y += rotationVelocityY;
            rotationVelocityX *= 0.97;
            rotationVelocityY *= 0.97;
        }
        
        // Smooth zoom animation with auto-reset
        const scaleDiff = targetScale - currentScale;
        currentScale += scaleDiff * 0.1; // Smooth zoom transition
        
        // Apply zoom to webWorld
        webWorld.scale.setScalar(currentScale);
        
        // Auto-reset zoom with spring effect when not dragging
        if (!isDragging && Math.abs(currentScale - originalScale) > 0.01) {
            targetScale = originalScale;
            zoomVelocity *= 0.9; // Damping for smooth return
        }
        
        if (Math.abs(rotationVelocityX) < 0.003) rotationVelocityX = 0.003;
        if (Math.abs(rotationVelocityY) < 0.006) rotationVelocityY = 0.006;
        
        // Animate globe rotation (1 full rotation in 8 seconds - 50% slower)
        // 2π radians / 8 seconds = π/4 radians per second
        // At 60fps, that's (π/4) / 60 ≈ 0.01309 radians per frame
        globe.rotation.y += (Math.PI / 4) / 60;

        // Animate wireframe rotation
        wireframe.rotation.y += 0.002;
        
        // Animate tech world rotation
        techWorldGroup.rotation.y -= 0.0005;

        // Orbital rings removed - skip animation

        // Wave connections removed - skip animation

        // Animate data streams with orbital motion
        techDataStreams.forEach((stream) => {
            const userData = stream.userData;
            
            // Update orbital motion
            userData.orbitAngle += userData.orbitSpeed * 0.01;
            
            // Calculate orbital position
            const x = Math.cos(userData.orbitAngle) * userData.orbitRadius;
            const y = Math.sin(userData.orbitAngle) * userData.orbitRadius * Math.sin(userData.orbitTilt);
            const z = Math.sin(userData.orbitAngle) * userData.orbitRadius * Math.cos(userData.orbitTilt);
            
            stream.position.set(x, y, z);
            
            // Pulsing effect
            const pulseScale = 1 + Math.sin(time * 4 + userData.pulsePhase) * 0.3;
            stream.scale.setScalar(pulseScale);
            
            // Rotation
            stream.rotation.x += 0.05;
            stream.rotation.y += 0.08;
        });

        // Animate energy particles in spiral patterns
        energyParticles.forEach((particle) => {
            const userData = particle.userData;
            
            // Update spiral motion
            userData.angle += userData.spiralSpeed * 0.01;
            userData.height += userData.verticalSpeed * 0.01;
            
            // Reset height when too far
            if (Math.abs(userData.height) > 4) {
                userData.height = -4 * Math.sign(userData.height);
            }
            
            // Calculate spiral position
            const x = Math.cos(userData.angle) * userData.spiralRadius;
            const z = Math.sin(userData.angle) * userData.spiralRadius;
            const y = userData.height;
            
            particle.position.set(x, y, z);
            
            // Rotation and pulsing
            particle.rotation.x += 0.05;
            particle.rotation.y += 0.08;
            particle.rotation.z += 0.03;
            
            const pulseScale = 0.8 + Math.sin(time * 6 + userData.pulsePhase) * 0.4;
            particle.scale.setScalar(pulseScale);
            
            // Dynamic color
            const colorPhase = (time * 0.5 + userData.colorPhase) % 1;
            const hue = colorPhase;
            particle.material.color.setHSL(hue, 1.0, 0.7);
            particle.material.emissive.setHSL(hue, 1.0, 1.0);
            particle.material.emissiveIntensity = 1.5 + Math.sin(time * 4 + userData.pulsePhase) * 0.5;
            particle.material.opacity = 0.6 + Math.sin(time * 3 + userData.pulsePhase) * 0.4;
        });

        // Enhanced animate satellites with complex motion
        satellites.forEach((sat) => {
            const userData = sat.userData;
            const angle = userData.orbitAngle + time * userData.orbitSpeed;
            
            // Elliptical orbit with wobble
            const wobble = Math.sin(time * 2 + userData.orbitAngle) * 0.1;
            sat.position.x = Math.cos(angle) * userData.orbitRadius * (1 + wobble);
            sat.position.y = Math.sin(angle) * userData.orbitRadius * Math.sin(userData.orbitTilt) * (1 - wobble * 0.5);
            sat.position.z = Math.sin(angle) * userData.orbitRadius * Math.cos(userData.orbitTilt);
            
            // Multi-axis rotation
            sat.rotation.x += 0.02;
            sat.rotation.y += 0.03;
            sat.rotation.z += 0.01;
            
            // Rotate around custom axis
            sat.rotateOnAxis(userData.rotationAxis, 0.01);
            
            // Dynamic satellite color
            const satColorPhase = (time * 0.3 + userData.orbitAngle) % 1;
            const satHue = 0.5 + Math.sin(satColorPhase * Math.PI * 2) * 0.05;
            sat.material.color.setHSL(satHue, 0.95, 0.7);
            sat.material.emissive.setHSL(satHue, 0.95, 0.4);
        });

        // Enhanced animate data streams with advanced effects
        dataStreams.forEach((stream) => {
            const userData = stream.userData;
            
            // Update progress along the path with variable speed
            const speedVariation = 1 + Math.sin(time * 2 + userData.pulsePhase) * 0.3;
            userData.progress += userData.speed * 0.005 * speedVariation;
            
            // Check if stream reached the end of the path
            if (userData.progress >= 1) {
                userData.progress = 0;
                userData.isReturning = !userData.isReturning;
                
                // Reverse the path if returning
                if (userData.isReturning) {
                    userData.pathPoints.reverse();
                }
                
                // Randomize stream color on turnaround
                userData.streamColor.setHSL(0.5 + Math.random() * 0.1, 0.9, 0.7);
            }
            
            // Enhanced position calculation with cubic interpolation
            const pathIndex = Math.floor(userData.progress * (userData.pathPoints.length - 1));
            const nextIndex = Math.min(pathIndex + 1, userData.pathPoints.length - 1);
            const localProgress = (userData.progress * (userData.pathPoints.length - 1)) - pathIndex;
            
            // Smooth cubic interpolation for more fluid movement
            const smoothProgress = localProgress * localProgress * (3 - 2 * localProgress);
            
            if (pathIndex < userData.pathPoints.length && nextIndex < userData.pathPoints.length) {
                const currentPoint = userData.pathPoints[pathIndex];
                const nextPoint = userData.pathPoints[nextIndex];
                
                // Enhanced smooth interpolation
                stream.position.lerpVectors(currentPoint, nextPoint, smoothProgress);
                
                // Make stream face the direction of movement with smoothing
                const direction = nextPoint.clone().sub(currentPoint).normalize();
                if (direction.length() > 0) {
                    const lookAtPoint = stream.position.clone().add(direction);
                    stream.lookAt(lookAtPoint);
                }
            }
            
            // Multi-layer pulsing effect
            const primaryPulse = 1 + Math.sin(time * 8 + userData.progress * Math.PI * 2) * 0.3;
            const secondaryPulse = 1 + Math.sin(time * 12 + userData.pulsePhase) * 0.2;
            const combinedScale = primaryPulse * secondaryPulse;
            stream.scale.setScalar(combinedScale);
            
            // Enhanced fade in/out with smoother transitions
            let opacity = 0.95;
            const fadeDistance = 0.15;
            if (userData.progress < fadeDistance) {
                opacity = (userData.progress / fadeDistance) * 0.95;
            } else if (userData.progress > (1 - fadeDistance)) {
                opacity = ((1 - userData.progress) / fadeDistance) * 0.95;
            }
            
            // Apply dynamic color and opacity
            stream.material.opacity = opacity;
            stream.material.color.copy(userData.streamColor);
            stream.material.emissive.copy(userData.streamColor);
            stream.material.emissiveIntensity = 0.8 + Math.sin(time * 4 + userData.pulsePhase) * 0.4;
        });

        // Animate lights for dynamic effect
        animatedLights.forEach((light, index) => {
            const pulsePhase = time * 2 + index * Math.PI / 2.5;
            const intensity = 0.8 + Math.sin(pulsePhase) * 0.4;
            light.intensity = intensity;
            
            // Slight color shifting
            const hueShift = Math.sin(pulsePhase * 0.5) * 0.05;
            const hue = 0.5 + hueShift;
            light.color.setHSL(hue, 1.0, 0.6);
        });

        if (!isDragging) {
            colorPhase += 0.0008; // Slower color changes
            updateWebWorldColors(colorPhase);
        }

        renderer.render(scene, camera);
    };

    updateWebWorldColors(colorPhase);
    resizeModel();
    animate();
    
    // Add wheel event handler for mouse zoom
    const handleWheel = (event) => {
        event.preventDefault();
        
        // Zoom in/out based on wheel direction
        const zoomDelta = event.deltaY > 0 ? -0.1 : 0.1;
        targetScale = Math.max(0.5, Math.min(3, targetScale + zoomDelta));
        
        // Set dragging state to prevent immediate auto-reset
        isDragging = true;
        
        // Auto-reset after a delay when user stops zooming
        clearTimeout(window.zoomResetTimeout);
        window.zoomResetTimeout = setTimeout(() => {
            isDragging = false;
            targetScale = originalScale;
        }, 1000);
    };

    // Add event listeners with error handling
    try {
        model.addEventListener('pointerdown', handlePointerDown);
        model.addEventListener('pointermove', handlePointerMove);
        model.addEventListener('pointerup', endPointerDrag);
        model.addEventListener('pointercancel', endPointerDrag);
        model.addEventListener('pointerleave', endPointerDrag);
        model.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('resize', resizeModel);
        
        // Create MediaQueryList for mobile breakpoint
        const mobileBreakpoint = window.matchMedia('(max-width: 768px)');
        mobileBreakpoint.addEventListener('change', resizeModel);
    } catch (error) {
        console.error('Error adding event listeners:', error);
    }
};

// Global error handlers
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// Initialize with error handling
try {
    initThreeJS();
    initHeroModel();
} catch (error) {
    console.error('Error initializing 3D components:', error);
}

// Contact Form Submission - WhatsApp Integration
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        try {
            e.preventDefault();
            
            // Get form values
            const nameInput = contactForm.querySelector('input[name="name"]');
            const emailInput = contactForm.querySelector('input[name="email"]');
            const messageInput = contactForm.querySelector('textarea[name="message"]');
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            if (!submitBtn) {
                console.error('Submit button not found');
                return;
            }
            
            const name = nameInput?.value || 'Not provided';
            const email = emailInput?.value || 'Not provided';
            const message = messageInput?.value || 'No message';
            const originalBtnText = submitBtn.innerText;
            
            // Format SMS message (remove special characters for SMS compatibility)
            const smsMessage = `New Contact Request from InnoApp Website\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Message: ${message}\n\n` +
                `Sent: ${new Date().toLocaleString()}\n` +
                `Source: InnoApp Technologies Website`;
            
            // Create SMS URL
            const phoneNumber = '+917200661807'; // +91 7200661807
            const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(smsMessage)}`;
            
            // Update button state
            submitBtn.innerText = 'Opening SMS...';
            submitBtn.disabled = true;
            
            // Open SMS app
            window.location.href = smsUrl;
            
            // Show success message and reset form
            setTimeout(() => {
                alert('✅ SMS opened! Please send the message to complete your inquiry.');
                contactForm.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }, 1000);
            
        } catch (error) {
            console.error('SMS form error:', error);
            alert('❌ Unable to open SMS app. Please try again or call us directly.');
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.innerText = 'Send Message';
                submitBtn.disabled = false;
            }
        }
    });
} else {
    console.warn('Contact form not found');
}
