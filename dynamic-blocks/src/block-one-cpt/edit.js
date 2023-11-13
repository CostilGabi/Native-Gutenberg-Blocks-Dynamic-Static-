import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor'
import './editor.scss';

export default function Edit(props) {
    const { attributes, setAttributes } = props;
	const { contentTitle, contentDescription, secondTitle } = attributes;
    const blockProps = useBlockProps();

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

            <span>Latests 4 posts are displayed on Front End</span>

        </div>
    );
}
