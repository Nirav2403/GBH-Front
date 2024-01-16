import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import MASK_IMAGE from "../../asserts/images/map.png";

interface IEarthGeoMetrixProps {
  className?: string;
  width?: number;
  height?: number;
  background?: string;
  dotColor?: string;
}

const EarthGeoMetrix: React.FC<IEarthGeoMetrixProps> = (
  props: IEarthGeoMetrixProps
) => {
  const {
    className = "",
    width = 500,
    height = 500,
    background,
    dotColor,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const CANVAS = canvasRef.current;
    if (!CANVAS) {
      return;
    }

    const SPHERE_RADIUS = 100;
    const LATITUDE_SEGMENTS = 32;
    const LONGITUDE_SEGMENTS = 32;
    const SCENE_ANTIALIAS = true;
    const SCENE_ALPHA = true;
    const SCENE_BACKGROUND_COLOR = background || 0x000000;

    const renderer = new THREE.WebGLRenderer({
      canvas: CANVAS,
      antialias: SCENE_ANTIALIAS,
      alpha: SCENE_ALPHA,
    });

    const camera = new THREE.PerspectiveCamera(
      75,
      CANVAS.width / CANVAS.height,
      0.1,
      1000
    );
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    camera.position.set(0, 0, 10);
    controls.update();

    const scene = new THREE.Scene();
    renderer.setClearColor(0x000000, 0);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = "true";

    textureLoader.load(MASK_IMAGE, (texture) => {
      const earthGeometry = new THREE.SphereGeometry(
        SPHERE_RADIUS,
        LATITUDE_SEGMENTS,
        LONGITUDE_SEGMENTS
      );
      console.log(texture);
      const earthMaterial = new THREE.MeshBasicMaterial({ map: texture });
      const earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);

      animate();
    });

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  // useEffect(() => {
  //   const CANVAS = canvasRef.current;
  //   if (!CANVAS) {
  //     return;
  //   }

  //   const SCENE_ANTIALIAS = true;
  //   const SCENE_ALPHA = true;
  //   const SCENE_BACKGROUND_COLOR = background || 0x000000;

  //   const CAMERA_FOV = 20;
  //   const CAMERA_NEAR = 100;
  //   const CAMERA_FAR = 500;
  //   const CAMERA_X = 0;
  //   const CAMERA_Y = 0;
  //   const CAMERA_Z = 220;

  //   const SPHERE_RADIUS = 30;
  //   const LATITUDE_COUNT = 80;
  //   const DOT_DENSITY = 0.8;

  //   const DOT_SIZE = 0.2;
  //   const DOT_COLOR = dotColor || 0xffffff;

  //   const spherePointToUV = (
  //     dotCenter: THREE.Vector3,
  //     sphereCenter: THREE.Vector3
  //   ): THREE.Vector2 => {
  //     const newVector = new THREE.Vector3();
  //     newVector.subVectors(sphereCenter, dotCenter).normalize();

  //     const uvX =
  //       1 - (0.5 + Math.atan2(newVector.z, newVector.x) / (2 * Math.PI));
  //     const uvY = 0.5 + Math.asin(newVector.y) / Math.PI;

  //     return new THREE.Vector2(uvX, uvY);
  //   };

  //   const sampleImage = (imageData: ImageData, uv: THREE.Vector2): number[] => {
  //     const point =
  //       4 * Math.floor(uv.x * imageData.width) +
  //       Math.floor(uv.y * imageData.height) * (4 * imageData.width);

  //     return Array.from(imageData.data.slice(point, point + 4));
  //   };

  //   const renderScene = (imageData: ImageData) => {
  //     const renderer = new THREE.WebGLRenderer({
  //       canvas: CANVAS,
  //       antialias: SCENE_ANTIALIAS,
  //       alpha: SCENE_ALPHA,
  //     });

  //     const camera = new THREE.PerspectiveCamera(
  //       CAMERA_FOV,
  //       CANVAS.width / CANVAS.height,
  //       CAMERA_NEAR,
  //       CAMERA_FAR
  //     );

  //     const controls = new OrbitControls(camera, renderer.domElement);
  //     controls.enableZoom = false;
  //     controls.enableRotate = false;
  //     controls.enablePan = false;

  //     camera.position.set(CAMERA_X, CAMERA_Y, CAMERA_Z);
  //     controls.update();

  //     const scene = new THREE.Scene();
  //     // scene.background = new THREE.Color(SCENE_BACKGROUND_COLOR);

  //     const earthGeometry = new THREE.SphereGeometry(SPHERE_RADIUS, 32, 32);
  //     const earthMaterial = new THREE.MeshBasicMaterial({
  //       color: 0x000000,
  //     });
  //     const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  //     scene.add(earth);

  //     renderer.setClearColor(0x000000, 0);

  //     const dotGeometries: THREE.BufferGeometry[] = [];
  //     const vector = new THREE.Vector3();

  //     for (let lat = 0; lat < LATITUDE_COUNT; lat += 1) {
  //       const radius =
  //         Math.cos((-90 + (180 / LATITUDE_COUNT) * lat) * (Math.PI / 180)) *
  //         SPHERE_RADIUS;
  //       const latitudeCircumference = radius * Math.PI * 2 * 2;
  //       const latitudeDotCount = Math.ceil(latitudeCircumference * DOT_DENSITY);

  //       for (let dot = 0; dot < latitudeDotCount; dot += 1) {
  //         const dotGeometry = new THREE.SphereGeometry(DOT_SIZE, 5, 5);
  //         const phi = (Math.PI / LATITUDE_COUNT) * lat;
  //         const theta = ((2 * Math.PI) / latitudeDotCount) * dot;

  //         vector.setFromSphericalCoords(SPHERE_RADIUS, phi, theta);

  //         dotGeometry.translate(vector.x, vector.y, vector.z);
  //         dotGeometry.computeBoundingSphere();

  //         if (dotGeometry.boundingSphere !== null) {
  //           const uv = spherePointToUV(
  //             dotGeometry.boundingSphere.center,
  //             new THREE.Vector3()
  //           );
  //           const sampledPixel = sampleImage(imageData, uv);

  //           if (sampledPixel[3]) {
  //             dotGeometries.push(dotGeometry);
  //           }
  //         }
  //       }
  //     }

  //     // for (let lat = 0; lat < LATITUDE_COUNT; lat += 1) {
  //     //   const radius =
  //     //     Math.cos((-90 + (180 / LATITUDE_COUNT) * lat) * (Math.PI / 180)) *
  //     //     SPHERE_RADIUS;
  //     //   const latitudeCircumference = radius * Math.PI * 2 * 2;
  //     //   const latitudeDotCount = Math.ceil(latitudeCircumference * DOT_DENSITY);

  //     //   for (let dot = 0; dot < latitudeDotCount; dot += 1) {
  //     //     const dotGeometry = new THREE.CircleGeometry(DOT_SIZE, 5);
  //     //     const phi = (Math.PI / LATITUDE_COUNT) * lat;
  //     //     const theta = ((2 * Math.PI) / latitudeDotCount) * dot;

  //     //     vector.setFromSphericalCoords(SPHERE_RADIUS, phi, theta);

  //     //     dotGeometry.lookAt(vector);
  //     //     dotGeometry.translate(vector.x, vector.y, vector.z);
  //     //     dotGeometry.computeBoundingSphere();

  //     //     if (dotGeometry.boundingSphere !== null) {
  //     //       const uv = spherePointToUV(
  //     //         dotGeometry.boundingSphere.center,
  //     //         new THREE.Vector3()
  //     //       );
  //     //       const sampledPixel = sampleImage(imageData, uv);

  //     //       if (sampledPixel[3]) {
  //     //         dotGeometries.push(dotGeometry);
  //     //       }
  //     //     }
  //     //   }
  //     // }

  //     const mergedDotGeometries =
  //       BufferGeometryUtils.mergeBufferGeometries(dotGeometries);

  //     const dotMaterial = new THREE.MeshBasicMaterial({
  //       color: DOT_COLOR,
  //       side: THREE.FrontSide,
  //       depthTest: true,
  //     });

  //     const dotMesh = new THREE.Mesh(mergedDotGeometries, dotMaterial);
  //     scene.add(dotMesh);

  //     const animate = (time: number) => {
  //       time *= 0.001;
  //       dotMesh.rotation.y = time * 0.1;
  //       controls.update();
  //       renderer.render(scene, camera);
  //       requestAnimationFrame(animate);
  //     };

  //     requestAnimationFrame(animate);
  //   };

  //   const setCanvasSize = () => {
  //     if (CANVAS) {
  //       CANVAS.width = width;
  //       CANVAS.height = height;

  //       const imageLoader = new THREE.ImageLoader();

  //       imageLoader.load(MASK_IMAGE, (image) => {
  //         const tempCanvas = document.createElement("canvas");

  //         tempCanvas.width = image.width;
  //         tempCanvas.height = image.height;

  //         const ctx = tempCanvas.getContext("2d");
  //         if (ctx) {
  //           ctx.drawImage(image, 0, 0);

  //           const imageData = ctx.getImageData(0, 0, image.width, image.height);

  //           renderScene(imageData);
  //         }
  //       });
  //     }
  //   };

  //   setCanvasSize();
  //   // window.addEventListener("resize", setCanvasSize);

  //   // return () => {
  //   //   window.removeEventListener("resize", setCanvasSize);
  //   // };
  // }, []);

  return <canvas className={className} ref={canvasRef}></canvas>;
};

export default EarthGeoMetrix;
