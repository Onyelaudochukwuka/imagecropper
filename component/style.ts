type Style = {
    cropContainer?: object;
    cropButton?: object;
    controls?: object;
    sliderContainer?: object;
    sliderLabel?: object;
    slider?: object;
    cancel?: object;
    resultContainer?: object;
    container?: object;
    nameInput?: object;
    downloadButton?: object;
}
export const styles = ():Style => ({
    cropContainer: {
        position: 'relative',
        width: '75%',
        margin: 'auto',
        maxHeight: 500,
        minHeight: 300,
        background: '#333',
    },
    cropButton: {
        backgroundColor: '#faebd7',
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    controls: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 12,
    },
    sliderContainer: {
        display: 'flex',
        flex: '1',
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    sliderLabel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    slider: {
        marginLeft: 32,
       
    }, cancel: {
        float: 'left',
        marginRight: 'auto'
       
    }, resultContainer: {
        width: '100%',
        display: 'flex',
        flexDirection:'column',
        gap: 15,
    },container: {
        position: 'relative',
        width: '75%',
        margin: 'auto',
    }, nameInput: {
        width: '60%',
        padding: '10px 15px',
        margin: 'auto',
        border: '2px solid #888',
        borderRadius: '10px'
    }, downloadButton: {
        width: '100%',
        marginInline: '10px',
    }
})
