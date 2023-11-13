import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import block from './block.json';
import apiFetch from '@wordpress/api-fetch';

registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { contentTitle, contentDescription, secondTitle, postdata } = attributes;
        const blockProps = useBlockProps();

        async function fetchPostData() {
            try {
                //this is fetching from a custom endpoint. This is only for demonstrating how we can fetch static data, that won't ever be changed unless we delete/add-again the block 
                const fetchedPostData = await apiFetch({ path: '/maikurapi/v1/woocommerce-data' });
                setAttributes({ postdata: fetchedPostData });
            } catch (error) {
                console.error(error);
            }
        }

        if (postdata.length === 0) {
            fetchPostData();
        }

        return (
            <div {...blockProps}>
                <RichText
                    tagName='h2'
                    placeholder={__('Add here the title', 'wpr')}
                    value={contentTitle}
                    onChange={newVal => setAttributes({ contentTitle: newVal })}
                />

                <span>All Categories are displayed on Front End</span>

                <RichText
                    tagName='p'
                    placeholder={__('Add here the over Title', 'wpr')}
                    value={contentDescription}
                    onChange={newVal => setAttributes({ contentDescription: newVal })}
                />

                <RichText
                    tagName='h3'
                    placeholder={__('Add here the title', 'wpr')}
                    value={secondTitle}
                    onChange={newVal => setAttributes({ secondTitle: newVal })}
                />

                <span>Latest 4 Products are displayed on Front End</span>

            </div>
        );
    },
    save({ attributes }) {
        const { contentTitle, contentDescription, secondTitle, postdata } = attributes;
        const blockProps = useBlockProps.save();

        return (
            <div className='fp-cp'>

                <div className='wrapper'>

                    <RichText.Content tagName='h2' value={contentTitle} />

                    <div className='fp-cp-categories'>

                        {(postdata.categories || []).map((category, index) => (
                            
                            <a href={category.category_url} key={index} className='fp-cp-categories-i'>

                                <img src={category.thumbnail} alt={category.name} />

                                <span className='f15'>{category.name}</span>

                            </a>
                        ))}

                    </div>

                    <RichText.Content tagName='p' value={contentDescription} />

                    <RichText.Content tagName='h3' value={secondTitle} />

                    <div className='fp-cp-articles'>

                        {(postdata.products || []).map((product, index) => (
                            
                            <a href={product.product_url} key={index} className='fp-cp-articles-i'>

                                <img src={product.thumbnail} alt={product.title} />

                                <span className='f17'>{product.title}</span>

                            </a>

                        ))}

                    </div>

                </div>

            </div>
        );
    }
})
