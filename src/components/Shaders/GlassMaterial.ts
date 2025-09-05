import * as THREE from "three";

export const glassMaterialVertexShader = `
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vViewDirection;
  
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewDirection = normalize(cameraPosition - worldPosition.xyz);
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const glassMaterialFragmentShader = `
  uniform float time;
  uniform float opacity;
  uniform float refractionRatio;
  uniform vec3 tintColor;
  uniform float fresnelPower;
  uniform float distortionStrength;
  uniform samplerCube envMap;
  
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vViewDirection;
  
  // Simple noise function for distortion
  float noise(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }
  
  void main() {
    vec3 normal = normalize(vNormal);
    
    // Add subtle distortion to normals
    vec2 distortion = vec2(
      noise(vUv * 10.0 + time * 0.5),
      noise(vUv * 10.0 + time * 0.3 + 100.0)
    ) - 0.5;
    
    normal += vec3(distortion * distortionStrength, 0.0);
    normal = normalize(normal);
    
    // Fresnel effect
    float fresnel = pow(1.0 - dot(vViewDirection, normal), fresnelPower);
    
    // Refraction
    vec3 refractedDirection = refract(-vViewDirection, normal, refractionRatio);
    vec4 refractedColor = textureCube(envMap, refractedDirection);
    
    // Reflection
    vec3 reflectedDirection = reflect(-vViewDirection, normal);
    vec4 reflectedColor = textureCube(envMap, reflectedDirection);
    
    // Combine refraction and reflection based on fresnel
    vec3 finalColor = mix(refractedColor.rgb, reflectedColor.rgb, fresnel);
    
    // Apply tint color
    finalColor = mix(finalColor, tintColor, 0.3);
    
    // Add subtle shimmer effect
    float shimmer = sin(time * 2.0 + vUv.x * 20.0 + vUv.y * 15.0) * 0.1 + 0.9;
    finalColor *= shimmer;
    
    // Final opacity calculation
    float finalOpacity = opacity * (0.7 + fresnel * 0.3);
    
    gl_FragColor = vec4(finalColor, finalOpacity);
  }
`;

export const createGlassMaterial = (envMap?: THREE.CubeTexture) => {
	return new THREE.ShaderMaterial({
		uniforms: {
			time: { value: 0 },
			opacity: { value: 0.8 },
			refractionRatio: { value: 0.98 },
			tintColor: { value: new THREE.Color("#f5e6d3") },
			fresnelPower: { value: 2.0 },
			distortionStrength: { value: 0.02 },
			envMap: { value: envMap || null },
		},
		vertexShader: glassMaterialVertexShader,
		fragmentShader: glassMaterialFragmentShader,
		transparent: true,
		side: THREE.DoubleSide,
	});
};
