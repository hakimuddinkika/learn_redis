# learn_redis

Create two folders
1. express-server
2. worker

## Run below commands inside both folders
```bash
npm init -y
npx tsc --int
```

## update in tsconfig.ts both the folders
```bash
'rootDir': "./src",
'outDir': "./dist",
```

## Create src folder in both the folders

## Install redis in worker folder
```bash
npm install redis
```

## Install express, types in express-server folder
```bash
npm i express @types/express redis
```
