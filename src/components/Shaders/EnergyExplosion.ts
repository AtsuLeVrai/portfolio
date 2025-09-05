import * as THREE from "three";

export const energyExplosionVertexShader = `
  uniform float time;
  uniform float explosionRadius;
  uniform float intensity;
  
  attribute float scale;
  attribute vec3 initialPosition;
  attribute float delay;
  
  varying float vOpacity;
  varying vec3 vColor;
  
  void main() {
    float animationTime = max(0.0, time - delay);
    
    // Explosion movement
    vec3 direction = normalize(initialPosition);
    float distance = explosionRadius * animationTime * intensity;
    
    vec3 pos = initialPosition + direction * distance;
    
    // Add some randomness to the movement
    pos.x += sin(time * 3.0 + initialPosition.x * 10.0) * 0.2;
    pos.y += cos(time * 2.0 + initialPosition.y * 10.0) * 0.2;
    pos.z += sin(time * 4.0 + initialPosition.z * 10.0) * 0.2;
    
    // Scale particles based on animation progress
    float particleScale = scale * (1.0 - animationTime * 0.5);
    particleScale = max(particleScale, 0.0);
    
    // Fade out over time
    vOpacity = max(0.0, 1.0 - animationTime);
    
    // Color variation based on position and time
    vColor = mix(
      vec3(1.0, 0.7, 0.8),  // Pink
      vec3(1.0, 0.8, 0.6),  // Peach
      sin(time + distance * 0.1) * 0.5 + 0.5
    );
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = particleScale * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const energyExplosionFragmentShader = `
  varying float vOpacity;
  varying vec3 vColor;
  
  void main() {
    // Create circular particles
    vec2 center = gl_PointCoord - 0.5;
    float distance = length(center);
    
    if (distance > 0.5) discard;
    
    // Soft edge falloff
    float alpha = (1.0 - distance * 2.0) * vOpacity;
    alpha = smoothstep(0.0, 1.0, alpha);
    
    // Add inner glow
    float innerGlow = 1.0 - distance * 1.5;
    innerGlow = max(innerGlow, 0.0);
    
    vec3 finalColor = vColor * (1.0 + innerGlow);
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export const createEnergyExplosionMaterial = () => {
	return new THREE.ShaderMaterial({
		uniforms: {
			time: { value: 0 },
			explosionRadius: { value: 5.0 },
			intensity: { value: 1.0 },
		},
		vertexShader: energyExplosionVertexShader,
		fragmentShader: energyExplosionFragmentShader,
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false,
	});
};
