<?php

// Rendering server-side

function render_cpt($attributes, $content, $block) {

    //titles coming from React
    $contentTitle = $attributes['contentTitle'];
    $contentDescription = $attributes['contentDescription'];
    $secondTitle = $attributes['secondTitle'];

    ob_start(); ?>

    <div class="fp-cp">

        <div class="wrapper">

            <h2><?php echo esc_html($contentTitle); ?></h2>

            <?php
            $terms = get_terms( array(
                'taxonomy' => '{yourcustomtaxonomy}', //add here your custom post type
                'hide_empty' => true,
            ) );

            if ( $terms ) { ?>

                <div class="fp-cp-categories">

                    <?php foreach ( $terms as $term ) { ?>

                        <a href="<?php echo get_term_link( $term ); ?>" class="fp-cp-categories-i">
                        
                            <img src="<?php echo get_field( 'featured_image', '{yourcustomtaxonomy}_' . $term->term_id )['url']; ?>" alt="<?php echo esc_html($term->name); ?>">

                            <span class="f15"><?php echo esc_html($term->name); ?></span>
                        
                        </a>

                    <?php } ?>

                </div>

            <?php } ?>

            <p><?php echo esc_html($contentDescription); ?></p>

            <h3><?php echo esc_html($secondTitle); ?></h3>

            <?php $savours = new WP_Query( array(
                'post_type' => '{yourCustomPostType}',
                'posts_per_page' => 4
            ) ); 
            
            if ( $savours->have_posts() ) { ?>

                <div class="fp-cp-articles">

                    <?php while ( $savours->have_posts() ) : $savours->the_post(); ?>

                        <a href="<?php the_permalink(); ?>" class="fp-cp-articles-i">

                            <?php if ( has_post_thumbnail() ) {
                                the_post_thumbnail('thumbnail');
                            } ?>

                            <span class="f17"><?php the_title(); ?></span>
                        </a>

                    <?php endwhile; ?>

                </div>

            <?php } ?>

        </div>

    </div>

    <?php return ob_get_clean();
}