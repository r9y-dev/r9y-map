# r9y.dev

here's the map! <https://map.r9y.dev/beck/map.html>

and the docs: <https://map.r9y.dev/docs/>

see something you want to fix?  want to contribute?:
- [Contribution guidelines for this project](CONTRIBUTING.md)
 
not sure what to do?  write an issue or come chat with us!
- [file an r9y-map issues](https://github.com/r9y-dev/r9y-map/issues)
- [join our discord](https://discord.com/invite/7exuFDbsrx)

## Local Development

Want to run this locally?  You'll need to run the following commands:

```bash
bundle install
bash topics-to-index.sh
cd docs
bundle exec jekyll s --livereload -w
```

Now visit [http://localhost:4000/](http://localhost:4000/) in a browser.  When you make a change to a file, the browser should automatically reload that page!


### Making changes to the index

If you want to update the index page, you'll need to add your new topic to `topics.txt` and then run `bash topics-to-index.sh`.  This will regenerate the index file and you should see your link in the list.
