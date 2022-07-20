import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop/types";
import getCroppedImg from './CropImage';
import { styles } from './style';
const App = ({ src }: any) => {
    const classes = styles();
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [zoom, setZoom] = useState(1);
    const [croppedImage, setCroppedImage] = useState(null)
    const [rotation, setRotation] = useState(0);
    const onCropComplete = useCallback((croppedArea:any, croppedAreaPixels:any) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])
    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage:any = await getCroppedImg(
                src,
                croppedAreaPixels,
                rotation
            )
            console.log('donee', { croppedImage})
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels, rotation])

    return (
    <>
            {src &&
                <div className="w-full h-auto">
        
                    <div style={classes.cropContainer}>
                        <Cropper
                            image={src}
                            crop={crop}
                            zoom={zoom}
                            rotation={rotation}
                            aspect={4 / 3}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                    <div style={classes.controls}>
                        <div style={classes.sliderContainer}>
                            <label style={classes.sliderLabel} htmlFor="zoom">Zoom</label>
                            <input
                                id="zoom"
                            type={"range"}
                            value={zoom}
                            min={0}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e: any) => setZoom(e.target.value)}
                            className="w-full z-30"
                                style={classes.slider}

                            />
                        </div>
                        <div style={classes.sliderContainer}>
                            <label style={classes.sliderLabel} htmlFor="rotate" >Rotate</label>
                            <input
                                id="rotate"
                            type={"range"}
                            value={rotation}
                            min={0}
                            max={360}
                            step={1}
                            aria-labelledby="Zoom"
                            onChange={(e: any) => setRotation(e.target.value)}
                            className="w-full z-30"
                                style={classes.slider}
                            />
                        </div>
                        <button className="p-6" style={classes.cropButton} onClick={showCroppedImage}>Get Cropped Image</button>
                        <img src={croppedImage ? croppedImage : ""} />
                    </div>
                </div>}
            </>
    );
};
export default App;
