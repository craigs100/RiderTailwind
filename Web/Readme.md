## Entry points

```
src/main.js
src/site.scss
```

##### JS
If you want to add any js to your project import in it /src/main.js


##### CSS
Add any custom styles to src/site.scss

You can also import styles which use font awesome etc and the script will extract those into the dist folder too.




### Running it

From the root directory

```
cd web
```

Install NPM dependancies

```
npm install
```

### During dev

Have this command running while you work. It will build new files as they change

```
npm run wp-dev
```

You will get the outputs in 

```wwwroot/dist```

### For production

```
npm run wp-prod
```

They scripts will be compiled down etc.


