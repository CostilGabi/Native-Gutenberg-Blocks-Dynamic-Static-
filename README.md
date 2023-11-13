# Native-Gutenberg-Blocks-Dynamic-Static-
Since Native Gutenberg Blocks are built using React.js, here is a very easy way to implement both, dynamic or static blocks, in the most elegant way, trough a plugin and being able to scale this plugin to a lot more blocks, all by using only one plugin. (For this such github repo I splited the dynamic and static for the purpouse to see better how they work).

## Dynamic blocks vs Static blocks
- Dynamic: where a block is fetching content that is located outside of the block or if you need the block to display content that might change over time, such as posts, custom post type and so on. Dynamic blocks are used to display server-side and this method is not using `save() function`.
- Static: where a block will display HTML markup fetched from `save()` function. This is the perfect option if you need to display content based blocks such as title/content/images fields that lives inside of the block and can be changed there if needed.

## How to Activate them as plugins
1. Add one of the folder (from: dynamic-blocks/static-blocks) to `wp-content/plugins/`.
2. To change wording/names/etc go to {folderblock} > {folderblock.php} (for example: static-blocks/static-blocks.php).
3. Activate them in WP.
4. Go to a page and look for the Block you need. 


## Build the `build` Folder
`build` folder is used to diplay the actualy blocks, `src` folder is only used for development. Go to the project directory where the plugin is located.
```bash
  cd my-project/wp-content/plugins/dynamic-blocks
```
Install dependencies
```bash
  npm install
```
Start the server
```bash
  npm start
```
*node_modules is not needed in the live environment and can be removed.*

*BUT: build folder is needed in the live environment and should never be removed.*


## Scaling
This blocks plugin type was built with scaling in it's mind.

### How to add more dynamic blocks
Navigate to `src` and create a new folder with the name of your desired block.
```bash
  ...dynamic-blocks/src/test-block
```
#### Create for dynamic:
- block.json (copy json from others blocks and modify to your needs) -> used for adding the block to Gutenberg
- edit.js -> used for making the logic in React (and displaying in the Editor)
- {files}.scss -> if styling is needed for the block editor or Front end
- index.js -> where you register `registerBlockType`
- Create inside the `includes` folder one file called `{yourblockrender.php}`
- Inside that php file that you created, add your render function and display your logic (check the two examples)

Navigate to `includes/register-blocks.php` and add this code:
```bash
  register_block_type( PLUGIN_DIR . '/build/block-two-posts', array(
        'render_callback' => 'render_test' //here you add the function
  ) );
```
and also the server-side php rendering for the Front end.
```bash
include (PLUGIN_DIR . 'includes/test.php'); 
```
### How to add more static blocks
Navigate to `src` and create a new folder with the name of your desired block.
```bash
  ...static-blocks/src/test-block
```

#### Create for static:
- block.json (copy json from others blocks and modify to your needs) -> used for adding the block to Gutenberg
- index.js -> where you register `registerBlockType` (here we need to add `edit` & `save` function). This can be splited if there is too much code into `edit.js` and `save.js` (similar as in dynamic)
- Inside that php file that you created, add your render function and display your logic (check the two examples)

Since our `index.js` is doing our rendering for the Front end, we don't need another php file. So all you need to do is just to register the block.

Navigate to `includes/register-blocks.php` and add this code:
```bash
  register_block_type(
      UP_PLUGIN_DIR . 'build/block-two-content/block.json'
  );
```