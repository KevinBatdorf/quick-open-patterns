import { useEffect } from '@wordpress/element'
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'
import { store as blockEditorStore } from '@wordpress/block-editor'
import { useDispatch } from '@wordpress/data'
import blockConfig from './block.json'
import { icon } from './icon'

registerBlockType('kevinbatdorf/quick-open-patterns', {
    ...blockConfig,
    title: __('Open Patterns', 'quick-open-patterns'),
    keywords: ['patterns'],
    icon,
    attributes: {},
    edit: ({ clientId }) => {
        // Store types are out of date
        // eslint-disable-next-line
        // @ts-ignore-next-line
        const { removeBlock } = useDispatch(blockEditorStore)
        const selectors = [
            '.edit-post-header-toolbar__inserter-toggle', // inserter
            '.components-tab-panel__tabs button[id*="patterns"]', // patterns tab
            '.block-editor-inserter__patterns-explorer-expand', // modal
        ]
        useEffect(() => {
            // Remove the block immediately
            removeBlock(clientId).then(async () => {
                // This works by running after teardown, so don't cancel them
                for (const element of selectors) {
                    document?.querySelector<HTMLElement>(element)?.click()
                    await new Promise((resolve) =>
                        requestAnimationFrame(resolve),
                    )
                }
            })
        }, [])
        return null
    },
})
