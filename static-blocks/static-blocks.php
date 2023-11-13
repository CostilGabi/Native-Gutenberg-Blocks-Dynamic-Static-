<?php
/**
 * Plugin Name:       Native Static Gutenberg Blocks
 * Description:       Native Gutenberg Block made with React.
 * Author:            Costil Gabriel
 * Text Domain:       grp
 * Version:           1.0
 */

 if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//Setup
define('UP_PLUGIN_DIR', plugin_dir_path(__FILE__));

//Includes
include (UP_PLUGIN_DIR . 'includes/register-blocks.php');

//Hooks
add_action('init', 'up_register_blocks');
