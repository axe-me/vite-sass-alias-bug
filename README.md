# vite-sass-alias-bug
------

When vite load a nested sass (not scss) file with alias, if the file has @import sass compiler will throw error. However, it works when not using alias.

Same for load a sass with @import from node modules.

To Reproduce, just open the `sass.sass` file and uncomment each those cases. then run `npm start`
