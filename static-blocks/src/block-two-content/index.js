import React, { useEffect } from 'react';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import block from './block.json';

registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { contentTitle, contentDescription } = attributes;
        const blockProps = useBlockProps();

        return (
            <div {...blockProps}>

                <RichText
                    tagName='h2'
                    placeholder={__('Add here the title', 'wpr')}
                    value={contentTitle}
                    onChange={newVal => setAttributes({ contentTitle: newVal })}
                />

                <RichText
                    tagName='p'
                    placeholder={__('Add here the over Title', 'wpr')}
                    value={contentDescription}
                    onChange={newVal => setAttributes({ contentDescription: newVal })}
                />

            </div>
        );
    },
    save({ attributes }) {
        const { contentTitle, contentDescription } = attributes;
        const blockProps = useBlockProps.save();

        return (
            <div className='fp-cp'>

                <div className='wrapper'>

                    <RichText.Content tagName='h2' value={contentTitle} />

                    <RichText.Content tagName='p' value={contentDescription} />

                </div>

            </div>
        );
    }
})
