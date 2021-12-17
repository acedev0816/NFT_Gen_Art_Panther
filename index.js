const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
  secondcollection,
} = require("./input/config.js");
const console = require("console");
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
var metadataList = [];
var attributesList = [];
var dnaList = [];


const saveImage = (_editionCount) => {
  if(_editionCount <= secondcollection){
    fs.writeFileSync(
      `./output/${_editionCount}.png`,
      canvas.toBuffer("image/png")
    );
  }else{
    fs.writeFileSync(
      `./output2/${_editionCount-secondcollection}.png`,
      canvas.toBuffer("image/png")
    );
  }
};


const saveImage1 = (_editionCount) => {
  fs.writeFileSync(
    `./output/${_editionCount}.png`,
    canvas.toBuffer("image/png")
  );
};

const signImage = (_sig) => {
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 30pt Verdana";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(_sig, 40, 40);
};

const genColor = () => {
  let hue = Math.floor(Math.random() * 360);
  let pastel = `hsl(${hue}, 100%, 85%)`;
  return pastel;
};

const drawBackground = () => {
  ctx.fillStyle = genColor();
  ctx.fillRect(0, 0, width, height);
};

const addMetadata = (_dna, _edition) => {
  let dateTime = Date.now();
  if(_edition <= secondcollection) {
    let tempMetadata = {
      name: `Panthers In The Metaverse #${_edition}`,
      symbol: `PITM`,
      description: `3,333 bold Panther warriors on unique adventures exploring the Metaverse.`,
      seller_fee_basis_points: 600,
      image: `${_edition}.png`,
      external_url: `https://www.panthersitm.io`,
      attributes: attributesList,
      edition: _edition,
      collection: {
        name: "Panthers In The Metaverse",
        family: "Panthers In The Metaverse",
      },
      properties: {
        files: [
          {
            uri: `${_edition}.png`,
            type: `image/png`
          }
        ],
        category: `image`,
        creators: [
          {
            "address": "GirW1QZhPT7BvWQ6iZfsVCoDhmztDfYddtXWH197Xyod",
            "share": 50
          },
          {
            "address": "41sMorVeHHVRnRpDXFpbh1iCtzmYFHS9cp8tarN7dy5S",
            "share": 40
          },
          {
            "address": "GGhVZyUEV7eurt3tvHUXq9z3wRMjBQq3pWLXTLoMXJgo",
            "share": 10
          }
        ]
      },
    };
    metadataList.push(tempMetadata);
    attributesList = [];
  }else{
    let tempMetadata = {
      name: `Panthers In The Metaverse #${_edition}`,
      symbol: `PITM`,
      description: `3,333 bold Panther warriors on unique adventures exploring the Metaverse.`,
      seller_fee_basis_points: 600,
      image: `${_edition-secondcollection}.png`,
      external_url: `https://www.panthersitm.io`,
      attributes: attributesList,
      edition: _edition,
      collection: {
        name: "Panthers In The Metaverse",
        family: "Panthers In The Metaverse",
      },
      properties: {
        files: [
          {
            uri: `${_edition-secondcollection}.png`,
            type: `image/png`
          }
        ],
        category: `image`,
        creators: [
          {
            "address": "GirW1QZhPT7BvWQ6iZfsVCoDhmztDfYddtXWH197Xyod",
            "share": 50
          },
          {
            "address": "41sMorVeHHVRnRpDXFpbh1iCtzmYFHS9cp8tarN7dy5S",
            "share": 40
          },
          {
            "address": "GGhVZyUEV7eurt3tvHUXq9z3wRMjBQq3pWLXTLoMXJgo",
            "share": 10
          }
        ]
      },
    };
    metadataList.push(tempMetadata);
    attributesList = [];
  }


};

const addAttributes = (_element) => {
  let selectedElement = _element.layer.selectedElement;
  if (selectedElement.name != "None") {
    attributesList.push({
      trait_type: _element.layer.name,
      value: selectedElement.name,
    });
  }
};

const loadLayerImg = async (_layer) => {
  return new Promise(async (resolve) => {
    const image = await loadImage(`${_layer.selectedElement.path}`);
    resolve({ layer: _layer, loadedImage: image });
  });
};

const drawElement = (_element) => {
  ctx.drawImage(
    _element.loadedImage,
    _element.layer.position.x,
    _element.layer.position.y,
    _element.layer.size.width,
    _element.layer.size.height
  );
  addAttributes(_element);
};

const constructLayerToDna = (_dna = [], _races = [], _race) => {
  let mappedDnaToLayers = _races[_race].layers.map((layer, index) => {
    let selectedElement = layer.elements.find((e) => e.id == _dna[index]);
    return {
      name: layer.name,
      position: layer.position,
      size: layer.size,
      selectedElement: selectedElement,
    };
  });

  return mappedDnaToLayers;
};



const getRace = (_editionCount) => {
  let race = "No Race";
  let randomrace = (Math.random() * 100);
  raceWeights.forEach((raceWeight) => {
    if (randomrace >= 100 - raceWeight.weight) {
      race = raceWeight.value;
    }
  });
  return race;
};




const createDna = (_races, _race) => {
  let randNum = [];
  _races[_race].layers.forEach((layer) => {
    let randElementNum = (Math.random() * 100);
    let num = 0;
    layer.elements.forEach((element) => {
      if (randElementNum >= 100 - element.weight) {
        num = element.id;
      }
    });
    randNum.push(num);
  });
  return randNum;
};


const writeMetaData = (_data) => {
  fs.writeFileSync("./output/_metadata.json", _data);
};

const saveMetaDataSingleFile = (_editionCount) => {
  if(_editionCount <= secondcollection) {
    fs.writeFileSync(
      `./output/${_editionCount}.json`,
      JSON.stringify(metadataList.find((meta) => meta.edition == _editionCount), null, 4)
    );
  }else{
    fs.writeFileSync(
      `./output2/${_editionCount-secondcollection}.json`,
      JSON.stringify(metadataList.find((meta) => meta.edition == _editionCount), null ,4)
    );
  }
};

const calcValue = (result) => {
  res = []
  for (let i = 0; i<result.length; i++){
    if (result[i].name != "Background")
    {
      ret= {
        "trait": result[i].name,
        "value": result[i].selectedElement.name,
        "id": result[i].selectedElement.id
      }
  
      res.push(ret)
    }else{
      // console.log("backgournd");
    }
    
  }
  res.sort( function(a,b) { 
    if (a.trait > b.trait)
      return 1;
    else if (a.trait < b.trait)
      return -1;
    else
      return 0;
  });

  res = res.map((r) => r.value);
  console.log(res);
  return res;
}

const isDnaUnique = (_DnaList = [], _dna = []) => {
  let foundDna = _DnaList.find((i) => i.join("|") === _dna.join("|"));
  return foundDna == undefined ? true : false;
};
const startCreating = async () => {
  writeMetaData("");
  let editionCount = startEditionFrom;
  while (editionCount <= endEditionAt) { //acer
    let race = getRace(editionCount);
    let newDna = createDna(races, race);
    let results = constructLayerToDna(newDna, races, race);
    let value = calcValue(results)

    if (isDnaUnique(dnaList, value)) {
      let results = constructLayerToDna(newDna, races, race);
      let loadedElements = []; //promise array
      results.forEach((layer) => {
        loadedElements.push(loadLayerImg(layer));
      });

      await Promise.all(loadedElements).then((elementArray) => {
        ctx.clearRect(0, 0, width, height);
        // drawBackground();
        elementArray.forEach((element) => {
          drawElement(element);
        });
        //signImage(`Waaeni #${editionCount}`);
        saveImage(editionCount);
        addMetadata(newDna, editionCount);
        saveMetaDataSingleFile(editionCount);
        console.log(
          `Created edition: ${editionCount}, Race: ${race} with DNA: ${newDna}`
        );
      });
      dnaList.push(value);
      editionCount++;
    } else {
      console.log("DNA exists!");
    }
  }
  writeMetaData(JSON.stringify(metadataList, null, 4));
};

startCreating();








