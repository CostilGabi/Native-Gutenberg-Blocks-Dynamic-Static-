<?php
/**
 * Plugin Name:       Native Dynamic Gutenberg Blocks
 * Description:       Native Gutenberg Block made with React.
 * Author:            Costil Gabriel
 * Text Domain:       grp
 * Version:           1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define('PLUGIN_DIR', plugin_dir_path(__FILE__));

include (PLUGIN_DIR . 'includes/register-blocks.php');

add_action( 'init', 'monkey_block_init' );