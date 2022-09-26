import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import { IFCLoader } from 'three/examples/jsm/loaders/IFCLoader';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });

// Create grid and axes
viewer.grid.setGrid();
viewer.axes.setAxes();

const ifcLoader = new IFCLoader();
async function loadIfc(url) {
    //await ifcLoader.ifcManager.setWasmPath('./wasm/');
	// Load the model
    await viewer.IFC.loadIfcUrl(url);
    //const model = await viewer.IFC.loadIfcUrl(url);
    // Add dropped shadow and post-processing efect
    //await viewer.shadowDropper.renderShadow(model.modelID);
    //viewer.context.renderer.postProduction.active = true;
}
loadIfc('./01.ifc');


