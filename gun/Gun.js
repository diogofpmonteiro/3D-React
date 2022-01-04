/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Artem Goyko (https://sketchfab.com/Artem.Goyko)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/5fe11dfebf734b4aa49c43545397abd1
title: Thompson submachine gun
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/gun.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Material_002} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Material_001} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.Material_004} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.Material_003} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.Material_007} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.Material_014} />
          <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials.Material_005} />
          <mesh geometry={nodes.defaultMaterial_7.geometry} material={materials.Material_008} />
          <mesh geometry={nodes.defaultMaterial_8.geometry} material={materials.Material_015} />
          <mesh geometry={nodes.defaultMaterial_9.geometry} material={materials.Material_006} />
          <mesh geometry={nodes.defaultMaterial_10.geometry} material={materials.Material_010} />
          <mesh geometry={nodes.defaultMaterial_11.geometry} material={materials.Material_013} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gun.gltf')