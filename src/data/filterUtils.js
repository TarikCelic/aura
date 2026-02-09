import products from "./products";

const racunari = products.filter((e) => e.category === "desktop");

const ramMemorije = [...new Set(racunari.map((e) => e.specs.ram))]
  .sort((a, b) => a.localeCompare(b))
  .map((value) => ({ vrijednost: value, fName: value }));
const procesori = [...new Set(racunari.map((e) => e.specs.procesori))]
  .sort((a, b) => a.localeCompare(b))
  .map((value) => ({ vrijednost: value, fName: value }));
const graficke = [...new Set(racunari.map((e) => e.specs.graficke))]
  .sort((a, b) => a.localeCompare(b))
  .map((value) => ({ vrijednost: value, fName: value }));
const storage = [...new Set(racunari.map((e) => e.specs.storage))]
  .sort((a, b) => a.localeCompare(b))
  .map((value) => ({ vrijednost: value, fName: value }));

const maticne = [...new Set(racunari.map((e) => e.specs.maticne))]
  .sort((a, b) => a.localeCompare(b))
  .map((value) => ({ vrijednost: value, fName: value }));

const sistem = [...new Set(racunari.map((e) => e.specs.os))]
  .sort((a, b) => a.localeCompare(b))
  .map((value) => ({ vrijednost: value, fName: value }));

export const desktopFilters = {
  ramMemorije: [...ramMemorije],
  graficke: [...graficke],
  procesori: [...procesori],
  storage: [...storage],
  sistem: [...sistem],
  maticne: [...maticne],
};
