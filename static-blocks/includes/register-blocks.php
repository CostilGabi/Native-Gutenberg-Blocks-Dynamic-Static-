<?php

function up_register_blocks() {

    // register block 1
    register_block_type(
        UP_PLUGIN_DIR . 'build/block-one-api/block.json'
    );

    // register block 2
    register_block_type(
        UP_PLUGIN_DIR . 'build/block-two-content/block.json'
    );

    // register as many blocks as needed here
}