<?php 

function monkey_block_init() {

	register_block_type( PLUGIN_DIR . '/build/block-one-cpt', array(
        'render_callback' => 'render_cpt'
    ) );

    register_block_type( PLUGIN_DIR . '/build/block-two-posts', array(
        'render_callback' => 'render_posts'
    ) );

}

include (PLUGIN_DIR . 'includes/block-one-cpt.php');
include (PLUGIN_DIR . 'includes/block-two-posts.php');

