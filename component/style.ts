type Style = {
    cropContainer?: object;
    cropButton?: object;
    controls?: object;
    sliderContainer?: object;
    sliderLabel?: object;
    slider?: object;
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
       
    },
})
