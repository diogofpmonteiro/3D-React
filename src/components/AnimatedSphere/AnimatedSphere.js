import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      {/* This is to animate the Sphere */}
      <MeshDistortMaterial color='#005416' attach='material' distort={0.4} speed={2} roughness={2} />
    </Sphere>
  );
};

export default AnimatedSphere;
