import { useGLTF } from '@react-three/drei'

export function ComputerModel(props) {
  const { nodes, materials } = useGLTF('/computerModel.glb')
  return (
    <>
    {/*eslint-disable-next-line react/no-unknown-property*/}
    <group {...props} dispose={null}>
       {/*eslint-disable-next-line react/no-unknown-property*/}
      <group position={[0.121, 0.007, 0]}>
         {/*eslint-disable-next-line react/no-unknown-property*/}
        <mesh geometry={nodes.Object_6.geometry} material={materials.MacBookPro} />
         {/*eslint-disable-next-line react/no-unknown-property*/}
        <mesh geometry={nodes.Object_8.geometry} material={materials.MacBookPro} />
      </group>
       {/*eslint-disable-next-line react/no-unknown-property*/}
      <mesh geometry={nodes.Object_4.geometry} material={materials.MacBookPro} />
    </group>
    </>
  )
}

useGLTF.preload('/computerModel.glb')
