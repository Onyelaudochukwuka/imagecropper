import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop/types";
import getCroppedImg from './CropImage';
import { styles } from './style';
import { cancel } from '../public';
import Image from "next/image";
const App = ({ src }: any) => {
    const classes = styles();
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [zoom, setZoom] = useState(1);
    const [croppedImage, setCroppedImage] = useState(null)
    const [rotation, setRotation] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [name, setName] = useState('');
    const [color, setColor] = useState({
        background: '#faebd7',
        color: '#333'
    });
    const [hover, setHover] = useState(
        {
            background: '#faebd7',
            color: '#333'
        })
    const [hoverState, setHoverState] = useState(
        {
            background: '#faebd7',
            color: '#333'
        } )
    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, []);
    const [fileType, setFileType] = useState('');

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage:any = await getCroppedImg(
                src,
                croppedAreaPixels,
                rotation,
            )
            console.log('donee', { croppedImage},fileType)
            setCroppedImage(croppedImage);
            setShowResult(true);
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels, rotation,fileType])

    return (
    <>
                {!showResult ?
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
                        {/* <div style={classes.sliderContainer}>
                            <label htmlFor="select"></label>
                            <select name="" id="select" onChange={(e)=>setFileType(e.target.value)}>
                                <option value="">Select an option</option>
                                <option value="png">Png</option>
                                <option value="jpg">Jpg</option>
                                <option value="svg">Svg</option>
                                </select>
                                
                        </div> */}
                        <button style={{ ...classes.cropButton, ...hover }} onMouseOut={() => setHover({ background: '#faebd7', color: '#333' })} onMouseOver={() => setHover({ background: '#06b6d4', color: '#fff' })} onClick={showCroppedImage}>Get Cropped Image</button>
                    </div>
                </div> 
                :
                <div style={classes.resultContainer}>
                    <img style={classes.container} src={croppedImage ? croppedImage : ""} />
                    <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Save as" style={classes.nameInput}/>
                    <a style={{ ...classes.downloadButton, ...color }} onMouseOut={() => setColor({background: '#faebd7',color: '#333'})} onMouseOver={() => setColor({ background: '#06b6d4', color:'#fff'})} href={croppedImage ? croppedImage: ""} download={name}>Download</a>
                    <span onClick={() => setShowResult(false)} style={{ ...classes.cropButton, ...hoverState }} onMouseOut={() => setHoverState({ background: '#faebd7', color: '#333' })} onMouseOver={() => setHoverState({ background: '#06b6d4', color: '#fff' })}>Cancel</span>
                        </div>
                }
            </>
    );
};
export default App;
