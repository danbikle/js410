# README.md

This repo is intended to run on Heroku.

I offer you some shell commands which might be helpful:

```bash
~/heroku/bin/heroku auth:login
mkdir ~/js/
cd    ~/js/
git clone https://github.com/danbikle/js410
cd js410
~/heroku/bin/heroku create js410yourname
git push heroku master
```

If you want to run this repo on your laptop, you need to install Node.js

Then try these shell commands:

```bash
cd ~/js/js410/
npm i
node_modules/.bin/http-server
```

A web-server on your laptop should come to life and you can try these three URLs:

* http://localhost:8080
* http://localhost:8080/index2.html
* http://localhost:8080/index3.html

I intend for the above URLs to serve you a blank white page.

I use the above pages to teach students how to operate a JavaScript debugger in the chrome-browser.

Class materials should be at this URL:

https://js4.herokuapp.com/

If you have questions, e-me:

bikle101 at gmail


