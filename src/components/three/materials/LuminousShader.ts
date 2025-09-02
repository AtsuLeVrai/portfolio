import * as THREE from "three";

export const LuminousShaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		time: { value: 0 },
		intensity: { value: 1.0 },
		colorA: { value: new THREE.Color("#ffb3d9") }, // bloom-pink
		colorB: { value: new THREE.Color("#ffd6cc") }, // soft-rose
		opacity: { value: 0.8 },
	},
	vertexShader: `
		uniform float time;
		varying vec2 vUv;
		varying vec3 vPosition;
		varying vec3 vNormal;
		
		void main() {
			vUv = uv;
			vPosition = position;
			vNormal = normal;
			
			vec3 pos = position;
			pos.z += sin(pos.x * 4.0 + time) * 0.1;
			pos.y += cos(pos.z * 3.0 + time * 1.5) * 0.05;
			
			gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
		}
	`,
	fragmentShader: `
		uniform float time;
		uniform float intensity;
		uniform vec3 colorA;
		uniform vec3 colorB;
		uniform float opacity;
		
		varying vec2 vUv;
		varying vec3 vPosition;
		varying vec3 vNormal;
		
		void main() {
			vec2 uv = vUv;
			
			float noise = sin(uv.x * 10.0 + time) * cos(uv.y * 8.0 + time * 1.2) * 0.5 + 0.5;
			float pulse = sin(time * 2.0) * 0.5 + 0.5;
			
			vec3 color = mix(colorA, colorB, noise * pulse);
			float alpha = noise * intensity * opacity;
			
			float fresnel = pow(1.0 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 2.0);
			alpha *= fresnel;
			
			gl_FragColor = vec4(color, alpha);
		}
	`,
	transparent: true,
	side: THREE.DoubleSide,
});

export const GlassShaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		time: { value: 0 },
		opacity: { value: 0.1 },
		reflection: { value: 0.4 },
		glassColor: { value: new THREE.Color("#ffffff") },
	},
	vertexShader: `
		varying vec2 vUv;
		varying vec3 vNormal;
		varying vec3 vPosition;
		
		void main() {
			vUv = uv;
			vNormal = normalize(normalMatrix * normal);
			vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
			
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}
	`,
	fragmentShader: `
		uniform float time;
		uniform float opacity;
		uniform float reflection;
		uniform vec3 glassColor;
		
		varying vec2 vUv;
		varying vec3 vNormal;
		varying vec3 vPosition;
		
		void main() {
			float fresnel = pow(1.0 - dot(normalize(vNormal), normalize(-vPosition)), 3.0);
			
			vec3 color = glassColor;
			float alpha = opacity + fresnel * reflection;
			
			gl_FragColor = vec4(color, alpha);
		}
	`,
	transparent: true,
});

export const EnergyShaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		time: { value: 0 },
		intensity: { value: 1.0 },
		energyColor: { value: new THREE.Color("#ff9999") }, // energy-coral
		speed: { value: 1.0 },
	},
	vertexShader: `
		uniform float time;
		uniform float speed;
		
		varying vec2 vUv;
		varying float vIntensity;
		
		void main() {
			vUv = uv;
			
			vec3 pos = position;
			float wave = sin(pos.x * 5.0 + time * speed) * cos(pos.y * 3.0 + time * speed * 1.5);
			vIntensity = wave * 0.5 + 0.5;
			
			pos *= 1.0 + vIntensity * 0.3;
			
			gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
		}
	`,
	fragmentShader: `
		uniform float time;
		uniform float intensity;
		uniform vec3 energyColor;
		
		varying vec2 vUv;
		varying float vIntensity;
		
		void main() {
			float pulse = sin(time * 3.0) * 0.5 + 0.5;
			float alpha = vIntensity * intensity * pulse;
			
			vec3 color = energyColor * (1.0 + pulse);
			
			gl_FragColor = vec4(color, alpha);
		}
	`,
	transparent: true,
	blending: THREE.AdditiveBlending,
});
