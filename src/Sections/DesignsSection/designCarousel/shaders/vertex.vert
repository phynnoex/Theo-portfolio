uniform float u_time;
uniform float u_scrollSpeed;
varying vec2 vUv;
varying vec3 v_position;

void main() {
    vec3 newPosition = position;
    vUv = uv;

    // Clamp scroll speed before using it
    float clampedSpeed = clamp(u_scrollSpeed, -10.0, 10.0); // max displacement value

    // Apply displacement
    float displacement = -sin(uv.y * 3.1415) * clampedSpeed * 0.01;
    newPosition.x += displacement;

    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
}