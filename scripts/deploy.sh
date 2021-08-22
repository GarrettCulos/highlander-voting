cd functions 
echo "install node modules"
npm install
echo "lint"
npm run lint 
echo "build"
npm run build  
cd .. 
cd web 
echo "install node modules"
npm install
echo "lint"
npm run lint
echo "build"
npm run build


