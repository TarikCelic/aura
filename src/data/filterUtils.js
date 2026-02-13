import products from "./products";

const laptopi = products.filter((e) => e.category === "laptopi");

function takeSpec(type, specc) {
  const typee = products.filter((e) => e.category === type);
  return [...new Set(typee.map((e) => e.specs[specc]))]
    .sort((a, b) => a.localeCompare(b))
    .map((value) => ({ vrijednost: value, fName: value }));
}
function takeProp(type, specc) {
  const typee = products.filter((e) => e.category === type);
  return [...new Set(typee.map((e) => e[specc]))]
    .sort((a, b) => a.localeCompare(b))
    .map((value) => ({ vrijednost: value, fName: value }));
}
const pcRAM = takeSpec("desktop", "ram");
const pcCPU = takeSpec("desktop", "procesori");
const pcGPU = takeSpec("desktop", "graficke");
const pcSTORAGE = takeSpec("desktop", "storage");
const pcMB = takeSpec("desktop", "maticne");
const pcOS = takeSpec("desktop", "os");

const laptopRAM = takeSpec("laptopi", "ram");
const laptopCPU = takeSpec("laptopi", "procesori");
const laptopGPU = takeSpec("laptopi", "graficke");
const laptopSTORAGE = takeSpec("laptopi", "storage");
const laptopMB = takeSpec("laptopi", "maticne");
const laptopOS = takeSpec("laptopi", "os");
const laptopBATTERY = takeSpec("laptopi", "battery");
const laptopBRAND = takeProp("laptopi", "brand");

const mobileRAM = takeSpec("phone", "ram");
const mobileDispaly = takeSpec("phone", "display");
const mobileCPU = takeSpec("phone", "procesori");
const mobileDType = takeSpec("phone", "displayType");
const mobileSTORAGE = takeSpec("phone", "storage");
const mobileRR = takeSpec("phone", "refreshRate");
const mobileOS = takeSpec("phone", "os");
const mobileBATTERY = takeSpec("phone", "battery");
const mobileBRAND = takeProp("phone", "brand");

const gpuMemory = takeSpec("graficke", "ram");
const gpuBrand = takeProp("graficke", "brand");

const tvSize = takeSpec("tv", "size");
const tvResolution = takeSpec("tv", "resolution");
const tvPanel = takeSpec("tv", "panel");
const tvRRate = takeSpec("tv", "refreshRate");
const tvBrand = takeProp("tv", "brand");

export const gpuFilters = {
  gpuMemory: [...gpuMemory],
  gpuBrand: [...gpuBrand],
};

export const tvFilters = {
  tvBrand: [...tvBrand],
  tvSize: [...tvSize],
  tvResolution: [...tvResolution],
  tvPanel: [...tvPanel],
  tvRRate: [...tvRRate],
};

export const mobileFilters = {
  ramMemorije: [...mobileRAM],
  procesori: [...mobileCPU],
  storage: [...mobileSTORAGE],
  sistem: [...mobileOS],
  mobileBATTERY: [...mobileBATTERY],
  mobileBRAND: [...mobileBRAND],
  mobileDispaly: [...mobileDispaly],
  mobileDType: [...mobileDType],
  mobileRR: [...mobileRR],
};

export const desktopFilters = {
  ramMemorije: [...pcRAM],
  graficke: [...pcGPU],
  procesori: [...pcCPU],
  storage: [...pcSTORAGE],
  sistem: [...pcOS],
  maticne: [...pcMB],
};

export const laptopFilters = {
  ramMemorije: [...laptopRAM],
  graficke: [...laptopCPU],
  procesori: [...laptopGPU],
  storage: [...laptopSTORAGE],
  sistem: [...laptopOS],
  maticne: [...laptopMB],
  baterija: [...laptopBATTERY],
  brand: [...laptopBRAND],
};
