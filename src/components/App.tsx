import { UrlString } from '@inrupt/solid-client'
import { Session } from '@inrupt/solid-client-authn-browser'
// import Login from './Login'
import { useState, useMemo, useEffect, useRef } from "react";
import L from "leaflet";
import { Navbar, Container, Button, Form, Row, Col, Alert, InputGroup } from "react-bootstrap";
import Select from 'react-select';      
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import FullscreenControl from "./FullscreenControl.js";
// import { MapContainer, TileLayer } from "react-leaflet";




// interface IAppProps {
//   weburl?: UrlString
//   ses?: Session
// }

const DEFAULT_EPSG = "4326"; // if set to 1111, load example doesn't work anymore, so don't
const MAX_CHARACTERS = 4000;
const DEFAULT_WKT_URI = "https://private-api.gipod.beta-vlaanderen.be/api/v1/ldes/mobility-hindrances?generatedAtTime=2020-12-28T09:36:09.72Z";
// const rdfDereferencer = require("rdf-dereference").default;


function createCircleMarker(feature, latlng) {
  let options = {
    radius: 4
  }
  return L.circleMarker(latlng, options);
}

function App() {

  const [map, setMap] = useState<HTMLDivElement | null>(null);
  const [error, setError] = useState(null);
  const [epsg, setEpsg] = useState("");
  const [wktURI, setWktURI] = useState("");
  const [spatial, setSpatial] = useState({
    wkt: "",
    epsg: "",
    proj: null,
    json: null,
    wktURI: ""
  });
  const [valid, setValid] = useState(null);
  const [exampleIndex, setExampleIndex] = useState(0);

  const groupRef = useRef();
  // const epsgCache = useRef(epsgList);

  const displayMap = useMemo(
    () => (
      <MapContainer
        id="map"
        center={[10, 0]}
        zoom={1}
        scrollWheelZoom={true}
        // ref={setMap}>
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FullscreenControl />
      </MapContainer>
    ), []
  )

  async function fetchProj(inputEpsg) {
    // let proj;
    // if (inputEpsg in epsgCache.current) {
    //   proj = epsgCache.current[inputEpsg];
    // } else {
    //   const res = await fetch("https://epsg.io/" + inputEpsg + ".proj4");
    //   const text = await res.text();
    //   if (text.includes("+proj")) {
    //     proj = text;
    //     epsgCache.current[inputEpsg] = proj;
    //   }
    // }
    // return proj;
  }
  
  function handleEpsgClear() {
    // validateAndUpdateSpatial({
    //   ...spatial,
    //   epsg: DEFAULT_EPSG,
    // });
    // setEpsg(DEFAULT_EPSG);
  }

  function handleWtkURIClear() {
    // setWktURI(DEFAULT_WKT_URI);
  }

  function handleWktClear() {
    // validateAndUpdateSpatial({
    //   ...spatial,
    //   wkt: ""
    // });
  }

  async function handleEpsgValidate() {
    // console.log(spatial.epsg);
    // const proj = await fetchProj(spatial.epsg);
    // if (proj) {
    //   setValid(proj);
    // } else {
    //   setValid(false);
    // }
  }

  /* This one doesn't work when used locally :(*/
  // async function handleWtkURIValidate(){ 
    // window.Buffer = Buffer; // was nessecary to prevent error: "Uncaught (in promise) ReferenceError: Buffer is not defined"

    // window.process = { // to fix the error : "Uncaught (in promise) ReferenceError: process is not defined"
    //   env: {
    //       NODE_ENV: 'development'
    //   }
    // }    
    
    // console.log("spatial.wktURI: " + spatial.wktURI);
    // const { data } = await rdfDereferencer.dereference('https://private-api.gipod.beta-vlaanderen.be/api/v1/ldes/mobility-hindrances?generatedAtTime=2020-12-28T09:36:09.72Z');
  //   // data.on('data', (quad) => console.log(quad.object.value));
  //   data.on('data', function(quad){
  //       // console.log(quad.predicate.value + "\n\n\n");
  //       if ((quad.predicate.value.toString()).includes('geosparql')){
  //           // console.log("\n\n\n"+quad.object.value.toString());
  //           let out = quad.object.value.toString().replace(/<.+> /,''); // regex to remove the <link>
  //           console.log(out+'\n');
  //       }
  //   });
  //   console.log("works");
  // }

  async function handleWtkURIValidate(){
    // const QueryEngine = require('@comunica/query-sparql').QueryEngine; // you can find this back in node_modules
    // const myEngine = neew QueryEngine();
    // const quadStream = await myEngine.queryQuads(`
    // CONSTRUCT WHERE {
    //   ?s ?p ?o
    // } LIMIT 100000`, {
    // sources: ['https://private-api.gipod.beta-vlaanderen.be/api/v1/ldes/mobility-hindrances?generatedAtTime=2020-12-28T09:36:09.72Z'],
    // });
    //   quadStream.on('data', (quad) => {
    //   console.log(quad.object.value);
    // });
  }

  function HandleChange(selectedOption){
    console.log("handlechange", selectedOption);
  }


  function handleWktChange(e) {
    // validateAndUpdateSpatial({
    //   ...spatial,
    //   wkt: e.target.value
    // });
  }

  function handleEpsgChange(e) {
    // setEpsg(e.target.value);
  }

  function handleWktURIChange(e){
    // setWktURI(e.target.value);
  }

  function updateEpsg() {
    // validateAndUpdateSpatial({
    //   ...spatial,
    //   epsg: epsg
    // });
  }

  function updateWKTURI(){
    // validateAndUpdateSpatial({
    //   ...spatial,
    //   wktURI: wktURI
    // });
  }

  function handleLoadExample() {
    // const example = examples[exampleIndex];
    // console.log(example);
    // validateAndUpdateSpatial({
    //   wkt: example[0],
    //   epsg: example[1],
    //   wktURI:example[2]
    // });
    // setEpsg(example[1]);
    // setWktURI(example[2]);
    // const newIndex = exampleIndex < examples.length - 1 ? exampleIndex + 1 : 0;
    // setExampleIndex(newIndex);
  }

  function parseWkt(wkt) {
    // const wktFormat = new WKT();
    // const feature = wktFormat.readFeature(wkt);
    // const geojsonFormat = new GeoJSON({});
    // const json = geojsonFormat.writeFeatureObject(feature);
    // return json;
  }

  async function validateAndUpdateSpatial(input) {

    // setError(null);
    // input = {
    //   ...input,
    //   proj: null,
    //   json: null
    // }

    // // split input

    // const [, crsPart, wktPart] = input.wkt.match(/(<.*>)?\s*(.*)/);
    
    // // parse EPSG if in WKT

    // let parsedEpsg;
    
    // if (crsPart) {
    //   const cleanCrsPart = crsPart.trim().replace(/^<|>$/g, "").replace("https://", "http://");
    //   const matches = crsPart.match(/opengis.net\/def\/crs\/EPSG\/[0-9.]+\/([0-9]+)(?:>)/);
    //   if (cleanCrsPart in crsList) {
    //     parsedEpsg = crsList[cleanCrsPart];
    //   } else if (matches) {
    //     parsedEpsg = matches[1];
    //   } else {
    //     setError("CRS URI not supported (only OpenGIS EPSG for now)");
    //   }
    // }
    
    // if (parsedEpsg) {
    //   input = {
    //     ...input,
    //     epsg: parsedEpsg
    //   };
    //   setEpsg(parsedEpsg);
    // }

    // // get proj

    // input.proj = await fetchProj(input.epsg);
    // if (!input.proj) {
    //   setError("EPSG not found");
    // }

    // // parse WKT
    
    // if (input.proj && wktPart !== "") {
    //   try {
    //     input.json = parseWkt(wktPart);
    //   } catch (e) {
    //     let matches;
    //     let error = "WKT parsing failed";
    //     matches = e.message.match(/(Unexpected .* at position.*)(?:\sin.*)/);
    //     if (matches) {
    //       error = "WKT parsing failed: " + matches[1];
    //     }
    //     matches = e.message.match(/(Invalid geometry type.*)/);
    //     if (matches) {
    //       error = "WKT parsing failed: " + matches[1];
    //     }
    //     setError(error);
    //   }
    // }

    // // update

    // setSpatial(input);
  }

  async function visualize() {
    // if (map) {
    //   if (!groupRef.current) {
    //     const layerGroup = new L.LayerGroup();
    //     groupRef.current = layerGroup;
    //     layerGroup.addTo(map);
    //   }
    //   groupRef.current.clearLayers();

    //   if (spatial.json) {
    //     const conf = {
    //       pointToLayer: createCircleMarker,
    //     };
    //     if (spatial.proj) {
    //       conf.coordsToLatLng = function(coords) {
    //         console.log("AAAAAAAAAAAAAAAAAA");
    //         const newCoords = proj4(spatial.proj, "EPSG:" + DEFAULT_EPSG, [coords[0], coords[1]]);
    //         return new L.LatLng(newCoords[1], newCoords[0]);
    //       }
    //     }
    //     let newLayer = L.geoJSON(spatial.json, conf).addTo(groupRef.current);
    //     map.flyToBounds(newLayer.getBounds(), { duration: 0.5, maxZoom: 14 });
    //   }
    // }
  }

  // useEffect(() => {
  //   visualize();
  // }, [ spatial ]); // eslint-disable-line react-hooks/exhaustive-deps
  
  // useEffect(() => {
  //   setValid(null);
  //   if (spatial.wkt !== "" || spatial.epsg !== "") {
  //     const params = new URLSearchParams({wkt: spatial.wkt, epsg: spatial.epsg}).toString();
  //     if (params.length < MAX_CHARACTERS) {
  //       window.history.replaceState(null, null, "?" + params);
  //     } else {
  //       window.history.replaceState(null, null, "/");
  //     }
  //   }
  // }, [spatial]);

  // useEffect(() => {
  //   const urlSearchParams = new URLSearchParams(window.location.search);
  //   const params = Object.fromEntries(urlSearchParams.entries());
  //   if (Object.keys(params).length === 0) {
  //     handleLoadExample();
  //   } else {
  //     validateAndUpdateSpatial({
  //       wkt: params.wkt ? params.wkt : "",
  //       epsg: params.epsg ? params.epsg : DEFAULT_EPSG,
  //       wktURI: params.wktURI ? params.wktURI : DEFAULT_WKT_URI
  //     });
  //     setEpsg(params.epsg ? params.epsg : DEFAULT_EPSG);
  //     setWktURI(params.wktURI ? params.wktURI : DEFAULT_WKT_URI)
  //   }
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const optionss = [
    {value:"jack", label:"jack"},
    {value: "john", label:"john"},
    {value:"jack", label:"jack"},
    {value: "john", label:"john"},
    {value:"jack", label:"jack"},
    {value: "john", label:"john"},
    {value:"jack", label:"jack"},
    {value: "john", label:"john"},
    {value:"jack", label:"jack"},
    {value: "john", label:"john"}
  ];

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div id="app">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            Well-known Text (WKT) visualization
          </Navbar.Brand>
        </Container>
      </Navbar>

      { displayMap }

      <Container className="mt-3 mb-3">

        <Row>
          <Col lg={true} className="mb-3">
            <Form.Group className="mb-3" controlId="wkt">
              <Form.Label>WKT TESTING</Form.Label>
              <Form.Control className="font-monospace" as="textarea" rows={8} value={spatial.wkt} onChange={handleWktChange} />
            </Form.Group>
            <Button variant="light" onClick={handleLoadExample}>Load example</Button>
            <Button className="mx-2" variant="warning" onClick={handleWktClear}>Clear</Button>
          </Col>
          <Col lg={true} className="mb-3">
            <Form.Group className="mb-3" controlId="epsg">
              <Form.Label>EPSG</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">EPSG:</InputGroup.Text>
                <Form.Control value={epsg} onChange={handleEpsgChange} onBlur={updateEpsg}/>
                <Button variant="warning" onClick={handleEpsgClear}>Default</Button>
                <Button variant="light" onClick={handleEpsgValidate}>Validate</Button>
              </InputGroup>
            </Form.Group>
            {
              valid && <Alert variant="success">Valid EPSG<br/><code>{valid}</code></Alert>
            }
            {
              error && <Alert variant="danger">{error}</Alert>
            }
          </Col>
          <Col lg={true} className="mb-3">
            <Form.Group className="mb-3" controlId="wkt">
                <Button variant="light" onClick={handleClick}>Advanced options</Button>
                {/* 👇️ show elements on click */}
                {isShown && (
                  <div style={{ marginLeft: "50px", marginTop: "20px", border: "5px" }}>
                    <Col lg={true} className="mb-3">
                      <Form.Group className="mb-3" controlId="wktURI">
                        <Form.Label>Load URI</Form.Label>
                        <InputGroup>
                          <InputGroup.Text id="basic-addon1">URI:</InputGroup.Text>
                          <Form.Control value={wktURI} onChange={handleWktURIChange} onBlur={updateWKTURI}/>
                          <Button variant="warning" onClick={handleWtkURIClear}>Default</Button>
                          <Button variant="light" onClick={handleWtkURIValidate}>Give WTK literals</Button>
                        </InputGroup>
                      </Form.Group>
                    </Col>

                    <Form.Label>Show WKT literals</Form.Label>
                    {/* <Select options={optionss} onChange={HandleChange}/> */}
                  </div>
                )}
            </Form.Group>
          </Col>
        </Row>
      </Container>

    <footer className="footer mt-auto pt-5 pb-4 bg-light">
      <Container>
      <p className="text-muted">This page parses and visualizes <a href="https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry" rel="noreferrer" className="text-muted" target="_blank">WKT</a> (ISO 13249) as well as <a href="https://opengeospatial.github.io/ogc-geosparql/geosparql11/spec.html#_rdfs_datatype_geowktliteral" target="blank" rel="noreferrer" className="text-muted">geo:wktLiteral</a> strings in a variety of coordinate reference systems. Built with <a href="https://openlayers.org/" target="blank" rel="noreferrer" className="text-muted">OpenLayers</a>, <a href="https://leafletjs.com/" target="blank" rel="noreferrer" className="text-muted">Leaflet</a>, <a href="https://trac.osgeo.org/proj4js" target="blank" rel="noreferrer" className="text-muted">Proj4js</a>, and <a href="https://epsg.io/" target="blank" rel="noreferrer" className="text-muted">epsg.io</a>.</p>
      </Container>
    </footer>

    </div>
  );
}

export default App
