import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

function PowerPoint() {
    const docs = [
        {
            uri: require('../indexing.pdf'),
            fileType: 'pdf',
            fileName: 'Доклад на индексацию 2023',
        },
    ];

    return (
        <DocViewer
            documents={docs}
            pluginRenderers={DocViewerRenderers}
            style={{ height: 600 }}
        />
    );
}

export default PowerPoint;
