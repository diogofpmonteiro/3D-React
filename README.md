Introduction to ThreeJS!

To upload a custom model:

- Download the model on the .gltf format
- Go to https://github.com/CesiumGS/gltf-pipeline and install it
- Run "gltf-pipeline -i <"modelName.gltf"> -o <"newModelName.gltf"> -d" on your model's directory to convert it to gltf 2.0
- Go to https://github.com/pmndrs/gltfjsx to turn your "newModelName.gltf" into a JSX component.
- Still on your model's directory run "npx gltfjsx newModelName.gltf"

Check out the final result at https://3jsworld.netlify.app
