# React NPM starter kit

### This project helps to provide the basic environment to continue building on npm library using ReactJS

## Script

```
	"start": "webpack-dev-server --mode development",
    
	"test": "echo \"Error: no test specified\" && exit 1",
    
	"transpile": "babel src -d dist --copy-files",
    
	"prepublishOnly": "npm run transpile",
    
	"build": "webpack --mode production",
    
	"deploy": "gh-pages -d examples/dist",
    
	"publish-demo": "npm run build && npm run deploy"