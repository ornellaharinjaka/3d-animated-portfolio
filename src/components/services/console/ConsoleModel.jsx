import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF('/consoleModel.glb')
  return (
    <>
      {/*eslint-disable-next-line react/no-unknown-property*/}
      <group {...props} dispose={null}>
        {/*eslint-disable-next-line react/no-unknown-property*/}
        <group rotation={[-Math.PI / 2, 0, 0]} scale={1.112}>
        {/*eslint-disable-next-line react/no-unknown-property*/}
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          {/*eslint-disable-next-line react/no-unknown-property*/}
            <mesh geometry={nodes.Cube_Material_0.geometry} material={materials.Material} position={[0, 21.93, 0]} scale={100} />
          </group>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/consoleModel.glb')
