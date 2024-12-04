import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
        <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
                color="#DB8B9B"
                attach="material"
                distort={0.5}
                speed={2}
            />
        </Sphere>
        {/*eslint-disable-next-line react/no-unknown-property*/}
        <ambientLight intensity={2} />
        {/*eslint-disable-next-line react/no-unknown-property*/}
        <directionalLight position={[1, 2, 3]} />
    </>
  )
}

export default Shape
