
echo 'Creating bootstrapping app "' + $1 + '"NextJS with typescript, and Mobx decorator support... '

npx create-next-app $1  #or do it from scratch
cd $1
yarn add --dev typescript @types/react @types/node @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
mkdir stores models
touch models/index.ts stores/index.js .babelrc

echo '
{
    "presets": [
      "next/babel"
    ],
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
}' > .babelrc

echo 'const Home = () =>
<div>
  <h1>Hello, World!</h1>
</div>

export default Home' > pages/index.js

cd ../